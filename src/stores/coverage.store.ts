import { defineStore } from 'pinia'
import { coverageApi } from '@/services/api/coverage.api'
import type { CoverageCheckRequest, CoverageCheckResult } from '@/types/coverage'

export const useCoverageStore = defineStore('coverage', {
  state: () => ({
    result: null as CoverageCheckResult | null,
    isChecking: false,
    error: '',
  }),
  actions: {
    async check(request: CoverageCheckRequest) {
      this.isChecking = true
      this.error = ''
      try {
        this.result = await coverageApi.check(request)
      } catch {
        this.result = null
        this.error = 'Coverage could not be checked right now. Please try again or contact support.'
      } finally {
        this.isChecking = false
      }
    },
    clear() {
      this.result = null
      this.error = ''
      this.isChecking = false
    },
  },
})
