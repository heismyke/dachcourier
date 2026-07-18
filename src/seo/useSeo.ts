import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { absoluteUrl, siteSeoConfig } from './seo.config'
import { breadcrumbJsonLd } from './structuredData'
import { getSeoForPath } from './routeSeo'
import type { SeoMeta } from './seo.types'

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }
  Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value))
}

function upsertLink(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLLinkElement>(selector)
  if (!element) {
    element = document.createElement('link')
    document.head.appendChild(element)
  }
  Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value))
}

function clearJsonLd() {
  document.head
    .querySelectorAll('script[data-dach-json-ld="true"]')
    .forEach((item) => item.remove())
}

function applySeo(meta: SeoMeta) {
  const canonical = absoluteUrl(meta.canonical || meta.path)
  const image = absoluteUrl(meta.image || siteSeoConfig.defaultImage)
  const imageAlt = meta.imageAlt || `${siteSeoConfig.siteName} courier services`
  const robots = meta.robots || 'index, follow'

  document.title = meta.title
  upsertMeta('meta[name="description"]', { name: 'description', content: meta.description })
  upsertMeta('meta[name="robots"]', { name: 'robots', content: robots })
  upsertLink('link[rel="canonical"]', { rel: 'canonical', href: canonical })

  upsertMeta('meta[property="og:type"]', { property: 'og:type', content: meta.type || 'website' })
  upsertMeta('meta[property="og:title"]', { property: 'og:title', content: meta.title })
  upsertMeta('meta[property="og:description"]', {
    property: 'og:description',
    content: meta.description,
  })
  upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonical })
  upsertMeta('meta[property="og:image"]', { property: 'og:image', content: image })
  upsertMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: imageAlt })
  upsertMeta('meta[property="og:site_name"]', {
    property: 'og:site_name',
    content: siteSeoConfig.siteName,
  })
  upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: siteSeoConfig.locale })

  upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
  upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: meta.title })
  upsertMeta('meta[name="twitter:description"]', {
    name: 'twitter:description',
    content: meta.description,
  })
  upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image })
  upsertMeta('meta[name="twitter:image:alt"]', { name: 'twitter:image:alt', content: imageAlt })

  clearJsonLd()
  const jsonLd = [...(meta.jsonLd || [])]
  if (meta.breadcrumbs?.length) jsonLd.push(breadcrumbJsonLd(meta.breadcrumbs))
  jsonLd.forEach((data) => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.dataset.dachJsonLd = 'true'
    script.textContent = JSON.stringify(data)
    document.head.appendChild(script)
  })
}

export function useSeo() {
  const route = useRoute()
  watchEffect(() => {
    applySeo(getSeoForPath(route.fullPath))
  })
}
