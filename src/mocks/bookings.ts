import type { Booking } from '@/types/booking'

export const bookings: Booking[] = [
  {
    id: 'bk_1001',
    reference: 'DACH-7K42QX',
    service: 'Same Day Courier',
    status: 'in_transit',
    collection: { line1: '12 King Street', city: 'Manchester', postcode: 'M2 4LQ' },
    delivery: { line1: '40 Fleet Street', city: 'London', postcode: 'EC4Y 1BT' },
    customerName: 'Avery Stone',
    price: 68,
    createdAt: '2026-07-14T09:30:00.000Z',
    estimatedDelivery: '2026-07-14T17:30:00.000Z',
  },
  {
    id: 'bk_1002',
    reference: 'DACH-91LP8D',
    service: 'Next Day Delivery',
    status: 'delivered',
    collection: { line1: '8 Park Row', city: 'Leeds', postcode: 'LS1 5HD' },
    delivery: { line1: '3 Queen Square', city: 'Bristol', postcode: 'BS1 4JQ' },
    customerName: 'Mira Patel',
    price: 18,
    createdAt: '2026-07-12T13:00:00.000Z',
    estimatedDelivery: '2026-07-13T12:00:00.000Z',
  },
]
