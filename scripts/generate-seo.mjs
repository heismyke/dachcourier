import { mkdir, readFile, writeFile, copyFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  absoluteUrl,
  noindexRoutes,
  redirects,
  routes,
  services,
  site,
} from '../src/seo/seoData.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const indexPath = join(dist, 'index.html')
const indexHtml = await readFile(indexPath, 'utf8')
const lastmod = new Date().toISOString().slice(0, 10)

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function jsonLdFor(route) {
  const [path, title, description, label] = route
  const data = []
  if (path === '/') {
    data.push({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${site.siteUrl}/#organization`,
      name: site.siteName,
      url: `${site.siteUrl}/`,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl(site.logoImage),
        width: 800,
        height: 800,
      },
      description,
    })
    data.push({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${site.siteUrl}/#website`,
      name: site.siteName,
      url: `${site.siteUrl}/`,
      publisher: { '@id': `${site.siteUrl}/#organization` },
    })
  }
  if (path.startsWith('/services/') && label) {
    data.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${absoluteUrl(path)}#service`,
      name: label,
      serviceType: label,
      provider: { '@id': `${site.siteUrl}/#organization` },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: absoluteUrl(path),
      description,
    })
  }
  if (path !== '/') {
    const crumbItems = [{ name: 'Home', path: '/' }]
    if (path.startsWith('/services/')) crumbItems.push({ name: 'Services', path: '/services' })
    if (path.startsWith('/coverage/')) crumbItems.push({ name: 'Coverage', path: '/coverage' })
    crumbItems.push({ name: label || title.replace(' | Dach Courier Services', ''), path })
    data.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: crumbItems.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: absoluteUrl(item.path),
      })),
    })
  }
  return data
}

function fallbackHtml(route) {
  const [path, title, description, label] = route
  const serviceLinks = services
    .slice(0, 8)
    .map(([slug, name]) => `<li><a href="/services/${slug}">${escapeHtml(name)}</a></li>`)
    .join('')
  return `<main id="seo-prerender" data-route="${escapeHtml(path)}">
    <h1>${escapeHtml(label || title.replace(' | Dach Courier Services', ''))}</h1>
    <p>${escapeHtml(description)}</p>
    <nav aria-label="Important Dach Courier pages">
      <a href="/services">Courier services</a>
      <a href="/coverage">Coverage areas</a>
      <a href="/business">Business courier services</a>
      <a href="/track">Track a shipment</a>
      <a href="/support">Customer support</a>
    </nav>
    ${path === '/services' || path === '/' ? `<ul>${serviceLinks}</ul>` : ''}
  </main>`
}

function render(route, robots = 'index, follow') {
  const [path, title, description] = route
  const canonical = absoluteUrl(path)
  const image = absoluteUrl(site.defaultImage)
  const ld = jsonLdFor(route)
    .map(
      (data) =>
        `<script type="application/ld+json" data-dach-prerender-json-ld="true">${JSON.stringify(data)}</script>`,
    )
    .join('\n')
  const verification = [
    process.env.VITE_GOOGLE_SITE_VERIFICATION
      ? `<meta name="google-site-verification" content="${escapeHtml(process.env.VITE_GOOGLE_SITE_VERIFICATION)}" />`
      : '',
    process.env.VITE_BING_SITE_VERIFICATION
      ? `<meta name="msvalidate.01" content="${escapeHtml(process.env.VITE_BING_SITE_VERIFICATION)}" />`
      : '',
  ].join('\n')

  return indexHtml
    .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
    .replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/>/,
      `<meta name="description" content="${escapeHtml(description)}" />`,
    )
    .replace(
      '</head>',
      `<meta name="robots" content="${robots}" />
<link rel="canonical" href="${canonical}" />
<meta property="og:type" content="website" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:url" content="${canonical}" />
<meta property="og:image" content="${image}" />
<meta property="og:image:alt" content="${escapeHtml(site.siteName)} courier services" />
<meta property="og:site_name" content="${escapeHtml(site.siteName)}" />
<meta property="og:locale" content="${escapeHtml(site.locale)}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${escapeHtml(title)}" />
<meta name="twitter:description" content="${escapeHtml(description)}" />
<meta name="twitter:image" content="${image}" />
<meta name="twitter:image:alt" content="${escapeHtml(site.siteName)} courier services" />
${verification}
${ld}
</head>`,
    )
    .replace('<div id="app"></div>', `<div id="app">${fallbackHtml(route)}</div>`)
}

async function writeRoute(route, robots) {
  const [path] = route
  const filePath = path === '/' ? indexPath : join(dist, path, 'index.html')
  await mkdir(dirname(filePath), { recursive: true })
  await writeFile(filePath, render(route, robots))
}

await Promise.all(routes.map((route) => writeRoute(route)))
await Promise.all(
  noindexRoutes.map((path) =>
    writeRoute(
      [
        path,
        path === '/404'
          ? 'Page Not Found | Dach Courier Services'
          : path === '/quote'
            ? 'Courier Inquiry and Route Quote | Dach Courier Services'
            : path === '/book'
              ? 'Book a Courier Collection | Dach Courier Services'
              : 'Private Page | Dach Courier Services',
        path === '/404'
          ? 'Find Dach Courier Services pages for tracking, services, coverage and support.'
          : 'This page is not indexed by search engines.',
      ],
      'noindex, nofollow',
    ),
  ),
)
await copyFile(join(dist, '404', 'index.html'), join(dist, '404.html'))

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    ([path]) => `  <url>
    <loc>${absoluteUrl(path)}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`,
  )
  .join('\n')}
</urlset>
`
await writeFile(join(dist, 'sitemap.xml'), sitemap)

const allowGptBot = process.env.VITE_ALLOW_GPTBOT === 'true'
const robots = `User-agent: *
Allow: /
Disallow: /account/
Disallow: /booking/confirmation/
Disallow: /reset-password
Disallow: /api/
Disallow: /internal/

User-agent: OAI-SearchBot
Allow: /

User-agent: GPTBot
${allowGptBot ? 'Allow: /' : 'Disallow: /'}

Sitemap: ${site.siteUrl}/sitemap.xml
`
await writeFile(join(dist, 'robots.txt'), robots)

await writeFile(
  join(dist, '_redirects'),
  redirects.map(([from, to]) => `${from} ${to} 301`).join('\n') + '\n',
)

const defaultOg = join(root, 'public/images/og/dach-courier-default.jpg')
if (!existsSync(defaultOg)) {
  await copyFile(join(root, 'src/assets/images/dach-hero-courier.jpg'), defaultOg)
}
await mkdir(join(dist, 'images/og'), { recursive: true })
await copyFile(defaultOg, join(dist, 'images/og/dach-courier-default.jpg'))

console.log(`Generated SEO assets for ${routes.length} indexable routes.`)
