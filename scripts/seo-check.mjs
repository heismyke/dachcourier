import { readFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { routes, site } from '../src/seo/seoData.mjs'

const root = process.cwd()
const dist = join(root, 'dist')
const errors = []

function routeFile(path) {
  return path === '/' ? join(dist, 'index.html') : join(dist, path, 'index.html')
}

function assert(condition, message) {
  if (!condition) errors.push(message)
}

const titles = new Map()
const descriptions = new Map()

for (const [path, title, description] of routes) {
  const file = routeFile(path)
  assert(existsSync(file), `Missing prerendered HTML for ${path}`)
  if (!existsSync(file)) continue

  const html = await readFile(file, 'utf8')
  assert(html.includes(`<title>${title}</title>`), `Missing title for ${path}`)
  assert(html.includes(`content="${description}"`), `Missing description for ${path}`)
  assert(
    html.includes(`rel="canonical" href="${site.siteUrl}${path === '/' ? '/' : path}"`),
    `Missing canonical for ${path}`,
  )
  assert(!html.includes('noindex, nofollow'), `Public route is noindexed: ${path}`)
  assert(
    html.includes('application/ld+json') ||
      path === '/privacy' ||
      path === '/terms' ||
      path === '/support' ||
      path === '/faq' ||
      path === '/track' ||
      path === '/sitemap',
    `Missing JSON-LD for ${path}`,
  )

  titles.set(title, [...(titles.get(title) || []), path])
  descriptions.set(description, [...(descriptions.get(description) || []), path])
}

for (const [title, paths] of titles) {
  assert(paths.length === 1, `Duplicate title "${title}" on ${paths.join(', ')}`)
}
for (const [, paths] of descriptions) {
  assert(paths.length === 1, `Duplicate description on ${paths.join(', ')}`)
}

const robotsPath = join(dist, 'robots.txt')
assert(existsSync(robotsPath), 'Missing robots.txt')
if (existsSync(robotsPath)) {
  const robots = await readFile(robotsPath, 'utf8')
  assert(robots.includes('User-agent: OAI-SearchBot'), 'robots.txt does not mention OAI-SearchBot')
  assert(robots.includes('Sitemap:'), 'robots.txt does not include sitemap')
  assert(robots.includes('Disallow: /account/'), 'robots.txt does not block account pages')
}

const sitemapPath = join(dist, 'sitemap.xml')
assert(existsSync(sitemapPath), 'Missing sitemap.xml')
if (existsSync(sitemapPath)) {
  const sitemap = await readFile(sitemapPath, 'utf8')
  assert(
    sitemap.includes(`${site.siteUrl}/services/same-day-courier`),
    'Sitemap missing service URL',
  )
  assert(!sitemap.includes('/login'), 'Sitemap includes login')
  assert(!sitemap.includes('/account'), 'Sitemap includes account route')
  assert(!sitemap.includes('/track/DCS'), 'Sitemap includes tracking reference')
}

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join('\n'))
  process.exit(1)
}

console.log(`SEO check passed for ${routes.length} public routes.`)
