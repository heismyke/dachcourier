import { apiClient } from './client'
import { createMockBooking, listMockBookings } from '@/services/mock/booking.mock'
import type { Booking } from '@/types/booking'

export const bookingApi = {
  async create(payload: unknown): Promise<Booking> {
    if (import.meta.env.VITE_USE_MOCK_API !== 'false')
      return createMockBooking(payload) as Promise<Booking>
    const { data } = await apiClient.post<Booking>('/bookings', payload)
    return data
  },
  async listMine(): Promise<Booking[]> {
    if (import.meta.env.VITE_USE_MOCK_API !== 'false') return listMockBookings()
    const { data } = await apiClient.get<Booking[]>('/me/bookings')
    return data
  },
}
