export interface CoverageCheckRequest {
  collectionPostcode: string
  deliveryPostcode: string
}

export interface CoverageCheckResult {
  supported: boolean
  requiresManualQuote: boolean
  collectionArea?: string
  deliveryArea?: string
  availableServiceSlugs: string[]
  estimatedCollectionLabel?: string
  message: string
}

export interface CoverageLocation {
  id: string
  city: string
  slug: string
  region: string
  nation: 'England' | 'Scotland' | 'Wales' | 'Northern Ireland'
  postcodePrefixes: string[]
  services: string[]
  summary: string
}

export interface PopularRoute {
  id: string
  from: string
  to: string
  services: string[]
}
