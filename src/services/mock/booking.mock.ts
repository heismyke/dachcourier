import { bookings } from '@/mocks/bookings'
import { createBookingReference } from '@/utils/booking'

export const createMockBooking = async (payload: unknown) => {
  await new Promise((resolve) => setTimeout(resolve, 220))
  return { ...bookings[0], id: crypto.randomUUID(), reference: createBookingReference(), payload }
}

export const listMockBookings = async () => bookings
