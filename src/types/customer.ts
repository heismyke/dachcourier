import type { Booking } from './booking'

export interface Customer {
  id: string
  name: string
  email: string
  phone: string
  company?: string
}

export interface CustomerAccount {
  customer: Customer
  bookings: Booking[]
}
