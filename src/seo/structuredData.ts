import { absoluteUrl, siteSeoConfig } from './seo.config'
import type { BreadcrumbItem } from './seo.types'

export function organizationJsonLd() {
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteSeoConfig.siteUrl}/#organization`,
    name: siteSeoConfig.siteName,
    url: `${siteSeoConfig.siteUrl}/`,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl(siteSeoConfig.logoUrl),
      width: 1200,
      height: 630,
    },
    description: siteSeoConfig.defaultDescription,
  }

  if (siteSeoConfig.legalName) data.legalName = siteSeoConfig.legalName
  if (siteSeoConfig.telephone) data.telephone = siteSeoConfig.telephone
  if (siteSeoConfig.email) data.email = siteSeoConfig.email

  return data
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteSeoConfig.siteUrl}/#website`,
    name: siteSeoConfig.siteName,
    url: `${siteSeoConfig.siteUrl}/`,
    publisher: { '@id': `${siteSeoConfig.siteUrl}/#organization` },
  }
}

export function serviceJsonLd(input: {
  name: string
  serviceType: string
  description: string
  path: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${absoluteUrl(input.path)}#service`,
    name: input.name,
    serviceType: input.serviceType,
    provider: { '@id': `${siteSeoConfig.siteUrl}/#organization` },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    url: absoluteUrl(input.path),
    description: input.description,
  }
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}
