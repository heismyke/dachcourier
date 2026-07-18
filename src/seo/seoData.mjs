export const site = {
  siteName: process.env.VITE_SITE_NAME || 'Dach Courier Services',
  siteUrl: (process.env.VITE_PUBLIC_SITE_URL || 'https://dachcourierservices.co.uk').replace(
    /\/+$/,
    '',
  ),
  locale: process.env.VITE_DEFAULT_LOCALE || 'en_GB',
  defaultImage: '/images/og/dach-courier-default.jpg',
  logoImage: '/logo.jpg',
  defaultDescription:
    'Dach Courier Services supports UK customers with courier booking, shipment tracking, coverage checks and business delivery workflows.',
}

export const services = [
  [
    'same-day-courier',
    'Same Day Courier',
    'Same Day Courier Service UK | Dach Courier Services',
    'Book urgent same-day courier collection and direct delivery across supported UK routes, with shipment updates and proof-of-delivery workflows.',
  ],
  [
    'next-day-delivery',
    'Next Day Delivery',
    'Next Day Courier Delivery UK | Dach Courier Services',
    'Plan next-day courier delivery for UK parcels, documents and business shipments with clear service selection and tracking workflows.',
  ],
  [
    'multi-drop-delivery',
    'Multi-Drop Delivery',
    'Multi-Drop Courier Services UK | Dach Courier Services',
    'Arrange multi-drop courier services for business routes, customer orders and planned delivery rounds across supported UK areas.',
  ],
  [
    'overnight-courier',
    'Overnight Courier',
    'Overnight Courier Service UK | Dach Courier Services',
    'Use overnight courier support for planned parcel and stock movement where collection time, destination and availability allow.',
  ],
  [
    'document-delivery',
    'Document Delivery',
    'Secure Document Courier UK | Dach Courier Services',
    'Send contracts, records and business-critical documents with professional courier handling and delivery confirmation workflows.',
  ],
  [
    'wait-and-return',
    'Wait & Return',
    'Wait and Return Courier Service | Dach Courier Services',
    'Book wait-and-return courier support when documents or goods need signing, exchange, completion and return.',
  ],
  [
    'international-courier',
    'International Courier',
    'International Courier Services | Dach Courier Services',
    'Request international courier support from UK collection areas, with route review and shipment preparation guidance.',
  ],
  [
    'contract-runs',
    'Contract Runs',
    'Contract Courier Runs for Businesses | Dach Courier Services',
    'Create recurring courier routes and scheduled contract runs for commercial teams with repeat delivery requirements.',
  ],
  [
    'business-logistics',
    'Business Logistics',
    'Business Logistics Services | Dach Courier Services',
    'Explore managed courier workflows for businesses that need repeat deliveries, multi-stop routes and account support.',
  ],
]

export const cities = [
  ['london', 'London'],
  ['manchester', 'Manchester'],
  ['birmingham', 'Birmingham'],
  ['leeds', 'Leeds'],
  ['glasgow', 'Glasgow'],
  ['edinburgh', 'Edinburgh'],
  ['cardiff', 'Cardiff'],
  ['belfast', 'Belfast'],
]

export const routes = [
  [
    '/',
    'Courier Services Across the UK | Dach Courier Services',
    'Book courier services, request delivery inquiries, check UK coverage and track shipments with Dach Courier Services.',
  ],
  [
    '/services',
    'UK Courier Services | Dach Courier Services',
    'Compare Dach Courier Services options for same-day, next-day, multi-drop, document, overnight, international and contract courier needs.',
  ],
  ...services.map(([slug, name, title, description]) => [
    `/services/${slug}`,
    title,
    description,
    name,
  ]),
  [
    '/track',
    'Track a Shipment | Dach Courier Services',
    'Track a Dach Courier Services shipment reference and view public tracking guidance for UK deliveries.',
  ],
  [
    '/business',
    'Business Courier and Logistics Services | Dach Courier Services',
    'Courier support for businesses needing repeat routes, scheduled collections, multi-drop operations and account workflows.',
  ],
  [
    '/coverage',
    'UK Courier Coverage Areas | Dach Courier Services',
    'Check Dach Courier collection and delivery availability by postcode, view supported UK regions and request a route quote.',
  ],
  ...cities.map(([slug, city]) => [
    `/coverage/${slug}`,
    `${city} Courier Coverage | Dach Courier Services`,
    `View Dach Courier Services coverage information for ${city}, including available courier services, postcode areas and route inquiry options.`,
    `${city} courier coverage`,
  ]),
  [
    '/about',
    'About Dach Courier Services',
    'Learn how Dach Courier Services supports individuals and businesses with clear courier booking, tracking and proof workflows.',
  ],
  [
    '/support',
    'Courier Help and Customer Support | Dach Courier Services',
    'Get help with tracking, bookings, route inquiries, business accounts, delivery issues and customer support.',
  ],
  [
    '/faq',
    'Courier Questions and Answers | Dach Courier Services',
    'Find answers about Dach Courier booking, pricing, tracking, proof of delivery, coverage and business courier support.',
  ],
  [
    '/privacy',
    'Privacy Policy | Dach Courier Services',
    'Read how Dach Courier Services handles personal information for courier bookings, customer accounts and support requests.',
  ],
  [
    '/terms',
    'Terms of Use | Dach Courier Services',
    'Review the website terms for using Dach Courier Services public pages, account tools and courier booking workflows.',
  ],
  [
    '/sitemap',
    'Website Sitemap | Dach Courier Services',
    'Browse public Dach Courier Services pages for services, coverage, business support, tracking help and legal information.',
  ],
]

export const noindexRoutes = ['/login', '/register', '/forgot-password', '/book', '/quote', '/404']

export const redirects = [
  ['/areas', '/coverage'],
  ['/contact', '/support'],
  ['/services/same-day', '/services/same-day-courier'],
]

export function absoluteUrl(path) {
  return `${site.siteUrl}${path === '/' ? '/' : path}`
}
