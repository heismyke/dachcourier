import { services } from '@/mocks/services'
import { coverageLocations } from '@/services/mock/coverage.mock'
import { pageBreadcrumbs } from './breadcrumbs'
import {
  breadcrumbJsonLd,
  organizationJsonLd,
  serviceJsonLd,
  websiteJsonLd,
} from './structuredData'
import type { SeoMeta } from './seo.types'

const noIndex = 'noindex, nofollow'

const serviceTitleMap: Record<string, string> = {
  'same-day-courier': 'Same Day Courier Service UK | Dach Courier Services',
  'next-day-delivery': 'Next Day Courier Delivery UK | Dach Courier Services',
  'multi-drop-delivery': 'Multi-Drop Courier Services UK | Dach Courier Services',
  'overnight-courier': 'Overnight Courier Service UK | Dach Courier Services',
  'document-delivery': 'Secure Document Courier UK | Dach Courier Services',
  'wait-and-return': 'Wait and Return Courier Service | Dach Courier Services',
  'international-courier': 'International Courier Services | Dach Courier Services',
  'contract-runs': 'Contract Courier Runs for Businesses | Dach Courier Services',
  'business-logistics': 'Business Logistics Services | Dach Courier Services',
}

const serviceDescriptions: Record<string, string> = {
  'same-day-courier':
    'Book urgent same-day courier collection and direct delivery across supported UK routes, with shipment updates and proof-of-delivery workflows.',
  'next-day-delivery':
    'Plan next-day courier delivery for UK parcels, documents and business shipments with clear service selection and tracking workflows.',
  'multi-drop-delivery':
    'Arrange multi-drop courier services for business routes, customer orders and planned delivery rounds across supported UK areas.',
  'overnight-courier':
    'Use overnight courier support for planned parcel and stock movement where collection time, destination and availability allow.',
  'document-delivery':
    'Send contracts, records and business-critical documents with professional courier handling and delivery confirmation workflows.',
  'wait-and-return':
    'Book wait-and-return courier support when documents or goods need signing, exchange, completion and return.',
  'international-courier':
    'Request international courier support from UK collection areas, with route review and shipment preparation guidance.',
  'contract-runs':
    'Create recurring courier routes and scheduled contract runs for commercial teams with repeat delivery requirements.',
  'business-logistics':
    'Explore managed courier workflows for businesses that need repeat deliveries, multi-stop routes and account support.',
}

export const staticRouteSeo: SeoMeta[] = [
  {
    path: '/',
    title: 'Courier Services Across the UK | Dach Courier Services',
    description:
      'Book courier services, request delivery inquiries, check UK coverage and track shipments with Dach Courier Services.',
    jsonLd: [organizationJsonLd(), websiteJsonLd()],
  },
  {
    path: '/services',
    title: 'UK Courier Services | Dach Courier Services',
    description:
      'Compare Dach Courier Services options for same-day, next-day, multi-drop, document, overnight, international and contract courier needs.',
    breadcrumbs: pageBreadcrumbs([{ name: 'Services', path: '/services' }]),
  },
  {
    path: '/quote',
    title: 'Courier Inquiry and Route Quote | Dach Courier Services',
    description:
      'Send collection, delivery and shipment details to request suitable courier service options from Dach Courier Services.',
    robots: noIndex,
  },
  {
    path: '/book',
    title: 'Book a Courier Collection | Dach Courier Services',
    description:
      'Start a courier booking with collection, delivery, service and contact details for a supported Dach Courier route.',
    robots: noIndex,
  },
  {
    path: '/track',
    title: 'Track a Shipment | Dach Courier Services',
    description:
      'Track a Dach Courier Services shipment reference and view public tracking guidance for UK deliveries.',
  },
  {
    path: '/business',
    title: 'Business Courier and Logistics Services | Dach Courier Services',
    description:
      'Courier support for businesses needing repeat routes, scheduled collections, multi-drop operations and account workflows.',
    breadcrumbs: pageBreadcrumbs([{ name: 'Business', path: '/business' }]),
  },
  {
    path: '/coverage',
    title: 'UK Courier Coverage Areas | Dach Courier Services',
    description:
      'Check Dach Courier collection and delivery availability by postcode, view supported UK regions and request a route quote.',
    breadcrumbs: pageBreadcrumbs([{ name: 'Coverage', path: '/coverage' }]),
  },
  {
    path: '/about',
    title: 'About Dach Courier Services',
    description:
      'Learn how Dach Courier Services supports individuals and businesses with clear courier booking, tracking and proof workflows.',
    breadcrumbs: pageBreadcrumbs([{ name: 'About', path: '/about' }]),
    jsonLd: [organizationJsonLd()],
  },
  {
    path: '/support',
    title: 'Courier Help and Customer Support | Dach Courier Services',
    description:
      'Get help with tracking, bookings, route inquiries, business accounts, delivery issues and customer support.',
  },
  {
    path: '/faq',
    title: 'Courier Questions and Answers | Dach Courier Services',
    description:
      'Find answers about Dach Courier booking, pricing, tracking, proof of delivery, coverage and business courier support.',
  },
  {
    path: '/privacy',
    title: 'Privacy Policy | Dach Courier Services',
    description:
      'Read how Dach Courier Services handles personal information for courier bookings, customer accounts and support requests.',
  },
  {
    path: '/terms',
    title: 'Terms of Use | Dach Courier Services',
    description:
      'Review the website terms for using Dach Courier Services public pages, account tools and courier booking workflows.',
  },
  {
    path: '/login',
    title: 'Customer Login | Dach Courier Services',
    description: 'Sign in to your Dach Courier Services customer account.',
    robots: noIndex,
  },
  {
    path: '/register',
    title: 'Create Customer Account | Dach Courier Services',
    description: 'Create a Dach Courier Services customer account.',
    robots: noIndex,
  },
  {
    path: '/forgot-password',
    title: 'Reset Customer Password | Dach Courier Services',
    description: 'Reset access to a Dach Courier Services customer account.',
    robots: noIndex,
  },
  {
    path: '/sitemap',
    title: 'Website Sitemap | Dach Courier Services',
    description:
      'Browse public Dach Courier Services pages for services, coverage, business support, tracking help and legal information.',
  },
  {
    path: '/404',
    title: 'Page Not Found | Dach Courier Services',
    description: 'Find Dach Courier Services pages for tracking, services, coverage and support.',
    robots: noIndex,
  },
]

export const serviceRouteSeo: SeoMeta[] = services.map((service) => {
  const path = `/services/${service.slug}`
  const breadcrumbs = pageBreadcrumbs([
    { name: 'Services', path: '/services' },
    { name: service.name, path },
  ])
  const description = serviceDescriptions[service.slug] || service.summary
  return {
    path,
    title: serviceTitleMap[service.slug] || `${service.name} UK | Dach Courier Services`,
    description,
    breadcrumbs,
    jsonLd: [
      serviceJsonLd({
        name: service.name,
        serviceType: service.name,
        description,
        path,
      }),
      breadcrumbJsonLd(breadcrumbs),
    ],
  }
})

const approvedCitySlugs = new Set([
  'london',
  'manchester',
  'birmingham',
  'leeds',
  'glasgow',
  'edinburgh',
  'cardiff',
  'belfast',
])

export const cityRouteSeo: SeoMeta[] = coverageLocations
  .filter((location) => approvedCitySlugs.has(location.slug))
  .map((location) => {
    const path = `/coverage/${location.slug}`
    const breadcrumbs = pageBreadcrumbs([
      { name: 'Coverage', path: '/coverage' },
      { name: location.city, path },
    ])
    return {
      path,
      title: `${location.city} Courier Coverage | Dach Courier Services`,
      description: `View Dach Courier Services coverage information for ${location.city}, including available courier services, postcode areas and route inquiry options.`,
      breadcrumbs,
      jsonLd: [breadcrumbJsonLd(breadcrumbs)],
    }
  })

export const routeSeo = [...staticRouteSeo, ...serviceRouteSeo, ...cityRouteSeo]

export function getSeoForPath(path: string): SeoMeta {
  const cleanPath = path.split('?')[0].replace(/\/$/, '') || '/'

  if (cleanPath.startsWith('/track/') || cleanPath.startsWith('/booking/confirmation/')) {
    return {
      path: cleanPath,
      title: 'Private Shipment Page | Dach Courier Services',
      description: 'Private shipment information is not indexed.',
      robots: noIndex,
    }
  }

  if (cleanPath.startsWith('/account')) {
    return {
      path: cleanPath,
      title: 'Customer Account | Dach Courier Services',
      description: 'Customer account pages are private and are not indexed.',
      robots: noIndex,
    }
  }

  return (
    routeSeo.find((item) => item.path === cleanPath) ||
    routeSeo.find((item) => item.path === '/404')!
  )
}
