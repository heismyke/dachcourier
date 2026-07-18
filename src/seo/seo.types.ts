export interface SiteSeoConfig {
  siteName: string
  legalName?: string
  siteUrl: string
  defaultTitle: string
  defaultDescription: string
  defaultImage: string
  locale: string
  telephone?: string
  email?: string
  businessAddress?: string
  logoUrl: string
  googleSiteVerification?: string
  bingSiteVerification?: string
}

export interface BreadcrumbItem {
  name: string
  path: string
}

export interface SeoMeta {
  title: string
  description: string
  path: string
  canonical?: string
  robots?: string
  image?: string
  imageAlt?: string
  type?: 'website' | 'article'
  breadcrumbs?: BreadcrumbItem[]
  jsonLd?: Record<string, unknown>[]
}
