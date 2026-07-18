export interface QuoteRequest {
  fromPostcode: string
  toPostcode: string
  parcelWeightKg: number
  serviceType: string
}

export interface QuoteOption {
  id: string
  name: string
  description: string
  price: number
  eta: string
}

export type QuoteCustomerType = 'individual' | 'business' | 'organisation' | 'unknown'

export interface QuoteEnquiryRequest {
  fullName: string
  email: string
  phone: string
  customerType: QuoteCustomerType
  companyName?: string
  collectionPostcode: string
  deliveryPostcode: string
  serviceSlug: string
  collectionDate: string
  preferredTime?: string
  itemCount?: number
  approximateWeightKg?: number
  shipmentDescription: string
  additionalInstructions?: string
  consentToContact: boolean
}

export interface QuoteRequestResponse {
  reference: string
  status: 'received'
  submittedAt: string
  submittedEmail: string
}
