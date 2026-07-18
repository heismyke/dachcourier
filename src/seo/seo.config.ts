import type { SiteSeoConfig } from './seo.types'

const stripTrailingSlash = (value: string) => value.replace(/\/+$/, '')

export const siteSeoConfig: SiteSeoConfig = {
  siteName: import.meta.env.VITE_SITE_NAME || 'Dach Courier Services',
  siteUrl: stripTrailingSlash(
    import.meta.env.VITE_PUBLIC_SITE_URL || 'https://dachcourierservices.co.uk',
  ),
  defaultTitle: 'Courier Services Across the UK | Dach Courier Services',
  defaultDescription:
    'Dach Courier Services supports UK customers with courier booking, shipment tracking, coverage checks and business delivery workflows.',
  defaultImage: '/images/og/dach-courier-default.jpg',
  locale: import.meta.env.VITE_DEFAULT_LOCALE || 'en_GB',
  telephone: import.meta.env.VITE_SUPPORT_PHONE || undefined,
  email: import.meta.env.VITE_SUPPORT_EMAIL || undefined,
  businessAddress: import.meta.env.VITE_BUSINESS_ADDRESS || undefined,
  logoUrl: '/logo.jpg',
  googleSiteVerification: import.meta.env.VITE_GOOGLE_SITE_VERIFICATION || undefined,
  bingSiteVerification: import.meta.env.VITE_BING_SITE_VERIFICATION || undefined,
}

export function absoluteUrl(path: string) {
  if (path.startsWith('http')) return path
  return `${siteSeoConfig.siteUrl}${path.startsWith('/') ? path : `/${path}`}`
}
