export type BookingStatus = 'draft' | 'confirmed' | 'collected' | 'in_transit' | 'delivered'

export interface Address {
  line1: string
  city: string
  postcode: string
}

export interface Booking {
  id: string
  reference: string
  service: string
  status: BookingStatus
  collection: Address
  delivery: Address
  customerName: string
  price: number
  createdAt: string
  estimatedDelivery: string
}
