import type {
  CoverageCheckRequest,
  CoverageCheckResult,
  CoverageLocation,
  PopularRoute,
} from '@/types/coverage'

export const coverageLocations: CoverageLocation[] = [
  {
    id: 'loc-london',
    city: 'London',
    slug: 'london',
    region: 'London and South East',
    nation: 'England',
    postcodePrefixes: ['E', 'EC', 'N', 'NW', 'SE', 'SW', 'W', 'WC'],
    services: ['Same Day Courier', 'Next Day Delivery', 'Multi-Drop Delivery', 'Document Delivery'],
    summary: 'Central, inner and outer London courier support for urgent and planned work.',
  },
  {
    id: 'loc-brighton',
    city: 'Brighton',
    slug: 'brighton',
    region: 'London and South East',
    nation: 'England',
    postcodePrefixes: ['BN'],
    services: ['Same Day Courier', 'Next Day Delivery', 'Document Delivery'],
    summary: 'South Coast collections and deliveries for business and personal shipments.',
  },
  {
    id: 'loc-reading',
    city: 'Reading',
    slug: 'reading',
    region: 'London and South East',
    nation: 'England',
    postcodePrefixes: ['RG'],
    services: ['Same Day Courier', 'Next Day Delivery', 'Contract Runs'],
    summary: 'Thames Valley courier routes for commercial and regional deliveries.',
  },
  {
    id: 'loc-oxford',
    city: 'Oxford',
    slug: 'oxford',
    region: 'London and South East',
    nation: 'England',
    postcodePrefixes: ['OX'],
    services: ['Same Day Courier', 'Next Day Delivery', 'Document Delivery'],
    summary: 'Courier options for Oxford businesses, institutions and regional routes.',
  },
  {
    id: 'loc-cambridge',
    city: 'Cambridge',
    slug: 'cambridge',
    region: 'London and South East',
    nation: 'England',
    postcodePrefixes: ['CB'],
    services: ['Same Day Courier', 'Next Day Delivery', 'Document Delivery'],
    summary: 'Planned and urgent courier support for Cambridge and surrounding routes.',
  },
  {
    id: 'loc-luton',
    city: 'Luton',
    slug: 'luton',
    region: 'London and South East',
    nation: 'England',
    postcodePrefixes: ['LU'],
    services: ['Same Day Courier', 'Next Day Delivery', 'Multi-Drop Delivery'],
    summary: 'Courier collections for Luton, Bedfordshire and airport-area logistics.',
  },
  {
    id: 'loc-milton-keynes',
    city: 'Milton Keynes',
    slug: 'milton-keynes',
    region: 'London and South East',
    nation: 'England',
    postcodePrefixes: ['MK'],
    services: ['Same Day Courier', 'Next Day Delivery', 'Contract Runs'],
    summary: 'Business courier support across Milton Keynes and nearby regional routes.',
  },
  {
    id: 'loc-southampton',
    city: 'Southampton',
    slug: 'southampton',
    region: 'London and South East',
    nation: 'England',
    postcodePrefixes: ['SO'],
    services: ['Same Day Courier', 'Next Day Delivery', 'Overnight Courier'],
    summary: 'Courier services for Southampton, the port corridor and regional customers.',
  },
  {
    id: 'loc-portsmouth',
    city: 'Portsmouth',
    slug: 'portsmouth',
    region: 'London and South East',
    nation: 'England',
    postcodePrefixes: ['PO'],
    services: ['Same Day Courier', 'Next Day Delivery', 'Document Delivery'],
    summary: 'South Coast courier collections and planned deliveries from Portsmouth.',
  },
  {
    id: 'loc-birmingham',
    city: 'Birmingham',
    slug: 'birmingham',
    region: 'Midlands',
    nation: 'England',
    postcodePrefixes: ['B'],
    services: ['Same Day Courier', 'Next Day Delivery', 'Multi-Drop Delivery', 'Overnight Courier'],
    summary: 'Midlands courier coverage for business, retail and industrial routes.',
  },
  {
    id: 'loc-coventry',
    city: 'Coventry',
    slug: 'coventry',
    region: 'Midlands',
    nation: 'England',
    postcodePrefixes: ['CV'],
    services: ['Same Day Courier', 'Next Day Delivery', 'Contract Runs'],
    summary: 'Courier support for Coventry operations and regional business routes.',
  },
  {
    id: 'loc-leicester',
    city: 'Leicester',
    slug: 'leicester',
    region: 'Midlands',
    nation: 'England',
    postcodePrefixes: ['LE'],
    services: ['Same Day Courier', 'Next Day Delivery', 'Document Delivery'],
    summary: 'Courier services for Leicester, local businesses and regional deliveries.',
  },
  {
    id: 'loc-nottingham',
    city: 'Nottingham',
    slug: 'nottingham',
    region: 'Midlands',
    nation: 'England',
    postcodePrefixes: ['NG'],
    services: ['Same Day Courier', 'Next Day Delivery', 'Multi-Drop Delivery'],
    summary: 'Courier support for Nottingham routes, parcels and business collections.',
  },
  {
    id: 'loc-derby',
    city: 'Derby',
    slug: 'derby',
    region: 'Midlands',
    nation: 'England',
    postcodePrefixes: ['DE'],
    services: ['Same Day Courier', 'Next Day Delivery', 'Overnight Courier'],
    summary: 'Courier availability for Derby and surrounding operational routes.',
  },
  {
    id: 'loc-wolverhampton',
    city: 'Wolverhampton',
    slug: 'wolverhampton',
    region: 'Midlands',
    nation: 'England',
    postcodePrefixes: ['WV'],
    services: ['Same Day Courier', 'Next Day Delivery', 'Multi-Drop Delivery'],
    summary: 'West Midlands courier collections and scheduled delivery support.',
  },
  {
    id: 'loc-stoke',
    city: 'Stoke-on-Trent',
    slug: 'stoke-on-trent',
    region: 'Midlands',
    nation: 'England',
    postcodePrefixes: ['ST'],
    services: ['Next Day Delivery', 'Overnight Courier', 'Contract Runs'],
    summary: 'Planned courier options for Stoke-on-Trent and nearby regional routes.',
  },
  {
    id: 'loc-northampton',
    city: 'Northampton',
    slug: 'northampton',
    region: 'Midlands',
    nation: 'England',
    postcodePrefixes: ['NN'],
    services: ['Same Day Courier', 'Next Day Delivery', 'Contract Runs'],
    summary: 'Courier routes for Northampton businesses and central UK connections.',
  },
  {
    id: 'loc-manchester',
    city: 'Manchester',
    slug: 'manchester',
    region: 'North of England',
    nation: 'England',
    postcodePrefixes: ['M'],
    services: ['Same Day Courier', 'Next Day Delivery', 'Multi-Drop Delivery', 'Document Delivery'],
    summary: 'Courier collections and deliveries across Greater Manchester routes.',
  },
  {
    id: 'loc-liverpool',
    city: 'Liverpool',
    slug: 'liverpool',
    region: 'North of England',
    nation: 'England',
    postcodePrefixes: ['L'],
    services: ['Same Day Courier', 'Next Day Delivery', 'Overnight Courier'],
    summary: 'Courier options for Liverpool, Merseyside and regional business routes.',
  },
  {
    id: 'loc-leeds',
    city: 'Leeds',
    slug: 'leeds',
    region: 'North of England',
    nation: 'England',
    postcodePrefixes: ['LS'],
    services: ['Same Day Courier', 'Next Day Delivery', 'Document Delivery'],
    summary: 'Courier services for Leeds, Yorkshire routes and business customers.',
  },
  {
    id: 'loc-sheffield',
    city: 'Sheffield',
    slug: 'sheffield',
    region: 'North of England',
    nation: 'England',
    postcodePrefixes: ['S'],
    services: ['Same Day Courier', 'Next Day Delivery', 'Multi-Drop Delivery'],
    summary: 'Courier support for Sheffield, manufacturing and regional delivery routes.',
  },
  {
    id: 'loc-newcastle',
    city: 'Newcastle',
    slug: 'newcastle',
    region: 'North of England',
    nation: 'England',
    postcodePrefixes: ['NE'],
    services: ['Next Day Delivery', 'Document Delivery', 'Overnight Courier'],
    summary: 'Courier availability for Newcastle and North East delivery routes.',
  },
  {
    id: 'loc-bradford',
    city: 'Bradford',
    slug: 'bradford',
    region: 'North of England',
    nation: 'England',
    postcodePrefixes: ['BD'],
    services: ['Same Day Courier', 'Next Day Delivery', 'Contract Runs'],
    summary: 'Business courier support for Bradford and surrounding Yorkshire routes.',
  },
  {
    id: 'loc-york',
    city: 'York',
    slug: 'york',
    region: 'North of England',
    nation: 'England',
    postcodePrefixes: ['YO'],
    services: ['Same Day Courier', 'Next Day Delivery', 'Document Delivery'],
    summary: 'Courier services for York, professional teams and regional deliveries.',
  },
  {
    id: 'loc-edinburgh',
    city: 'Edinburgh',
    slug: 'edinburgh',
    region: 'Scotland, Wales and Northern Ireland',
    nation: 'Scotland',
    postcodePrefixes: ['EH'],
    services: ['Same Day Courier', 'Next Day Delivery', 'Document Delivery'],
    summary: 'Courier options for Edinburgh and selected Scottish routes.',
  },
  {
    id: 'loc-glasgow',
    city: 'Glasgow',
    slug: 'glasgow',
    region: 'Scotland, Wales and Northern Ireland',
    nation: 'Scotland',
    postcodePrefixes: ['G'],
    services: ['Same Day Courier', 'Next Day Delivery', 'Overnight Courier'],
    summary: 'Courier support across Glasgow and central Scotland routes.',
  },
  {
    id: 'loc-cardiff',
    city: 'Cardiff',
    slug: 'cardiff',
    region: 'Scotland, Wales and Northern Ireland',
    nation: 'Wales',
    postcodePrefixes: ['CF'],
    services: ['Same Day Courier', 'Next Day Delivery', 'Document Delivery'],
    summary: 'Courier services for Cardiff, South Wales and regional connections.',
  },
  {
    id: 'loc-swansea',
    city: 'Swansea',
    slug: 'swansea',
    region: 'Scotland, Wales and Northern Ireland',
    nation: 'Wales',
    postcodePrefixes: ['SA'],
    services: ['Next Day Delivery', 'Overnight Courier', 'Contract Runs'],
    summary: 'Planned courier support for Swansea and selected Welsh routes.',
  },
  {
    id: 'loc-belfast',
    city: 'Belfast',
    slug: 'belfast',
    region: 'Scotland, Wales and Northern Ireland',
    nation: 'Northern Ireland',
    postcodePrefixes: ['BT'],
    services: ['Next Day Delivery', 'International Courier', 'Contract Runs'],
    summary: 'Selected Belfast routes and manual quote workflows for Northern Ireland.',
  },
]

export const popularRoutes: PopularRoute[] = [
  {
    id: 'london-manchester',
    from: 'London',
    to: 'Manchester',
    services: ['Same Day Courier', 'Next Day Delivery', 'Document Delivery'],
  },
  {
    id: 'london-birmingham',
    from: 'London',
    to: 'Birmingham',
    services: ['Same Day Courier', 'Next Day Delivery', 'Overnight Courier'],
  },
  {
    id: 'manchester-leeds',
    from: 'Manchester',
    to: 'Leeds',
    services: ['Same Day Courier', 'Next Day Delivery', 'Multi-Drop Delivery'],
  },
  {
    id: 'birmingham-bristol',
    from: 'Birmingham',
    to: 'Bristol',
    services: ['Same Day Courier', 'Next Day Delivery'],
  },
  {
    id: 'glasgow-edinburgh',
    from: 'Glasgow',
    to: 'Edinburgh',
    services: ['Same Day Courier', 'Next Day Delivery', 'Document Delivery'],
  },
  {
    id: 'cardiff-bristol',
    from: 'Cardiff',
    to: 'Bristol',
    services: ['Same Day Courier', 'Next Day Delivery'],
  },
  {
    id: 'london-cambridge',
    from: 'London',
    to: 'Cambridge',
    services: ['Same Day Courier', 'Document Delivery'],
  },
  {
    id: 'london-oxford',
    from: 'London',
    to: 'Oxford',
    services: ['Same Day Courier', 'Document Delivery'],
  },
]

const UK_POSTCODE_PATTERN = /^([A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2})$/i

function postcodePrefix(postcode: string) {
  const outward = postcode.trim().toUpperCase().split(/\s+/)[0] ?? ''
  return outward.replace(/\d.*$/, '')
}

function outwardCode(postcode: string) {
  return postcode.trim().toUpperCase().split(/\s+/)[0]
}

function findLocation(postcode: string) {
  const prefix = postcodePrefix(postcode)
  return coverageLocations.find((location) => location.postcodePrefixes.includes(prefix))
}

export async function checkCoverageMock(
  request: CoverageCheckRequest,
): Promise<CoverageCheckResult> {
  await new Promise((resolve) => window.setTimeout(resolve, 260))

  const collection = request.collectionPostcode.trim().toUpperCase()
  const delivery = request.deliveryPostcode.trim().toUpperCase()

  if (!UK_POSTCODE_PATTERN.test(collection) || !UK_POSTCODE_PATTERN.test(delivery)) {
    return {
      supported: false,
      requiresManualQuote: false,
      availableServiceSlugs: [],
      message: 'Enter valid UK postcodes, including the outward and inward code.',
    }
  }

  const collectionLocation = findLocation(collection)
  const deliveryLocation = findLocation(delivery)

  if (collectionLocation && deliveryLocation) {
    const sharedServices = collectionLocation.services
      .filter((service) => deliveryLocation.services.includes(service))
      .map((service) => service.toLowerCase().replaceAll(' ', '-'))

    return {
      supported: true,
      requiresManualQuote: false,
      collectionArea: `${collectionLocation.city} ${outwardCode(collection)}`,
      deliveryArea: `${deliveryLocation.city} ${outwardCode(delivery)}`,
      availableServiceSlugs: sharedServices,
      estimatedCollectionLabel: 'Collection options shown after route review',
      message: 'Service available for this route.',
    }
  }

  if (collectionLocation || deliveryLocation) {
    return {
      supported: false,
      requiresManualQuote: true,
      collectionArea: collectionLocation
        ? `${collectionLocation.city} ${outwardCode(collection)}`
        : undefined,
      deliveryArea: deliveryLocation
        ? `${deliveryLocation.city} ${outwardCode(delivery)}`
        : undefined,
      availableServiceSlugs: [],
      message:
        'Part of this route is supported. Send the postcodes to operations for a manual availability check.',
    }
  }

  return {
    supported: false,
    requiresManualQuote: true,
    availableServiceSlugs: [],
    message:
      'This route is not listed in the mock coverage data. Request a manual route quote and the team can review it.',
  }
}
