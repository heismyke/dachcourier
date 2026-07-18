import { defineStore } from 'pinia'
import { bookingApi } from '@/services/api/booking.api'
import type { Booking } from '@/types/booking'

export const useBookingStore = defineStore('booking', {
  state: () => ({ bookings: [] as Booking[], latest: null as Booking | null, loading: false }),
  actions: {
    async create(payload: unknown) {
      this.loading = true
      try {
        this.latest = await bookingApi.create(payload)
        return this.latest
      } finally {
        this.loading = false
      }
    },
    async loadMine() {
      this.bookings = await bookingApi.listMine()
    },
  },
})
