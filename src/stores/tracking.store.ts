import { defineStore } from 'pinia'
import { trackingApi } from '@/services/api/tracking.api'
import type { TrackingResult } from '@/types/tracking'

export const useTrackingStore = defineStore('tracking', {
  state: () => ({ result: null as TrackingResult | null, loading: false }),
  actions: {
    async lookup(reference: string) {
      this.loading = true
      try {
        this.result = await trackingApi.get(reference)
        return this.result
      } finally {
        this.loading = false
      }
    },
  },
})
