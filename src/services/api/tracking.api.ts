import { apiClient } from './client'
import { getMockTracking } from '@/services/mock/tracking.mock'
import type { TrackingResult } from '@/types/tracking'

export const trackingApi = {
  async get(reference: string): Promise<TrackingResult> {
    if (import.meta.env.VITE_USE_MOCK_API !== 'false') return getMockTracking(reference)
    const { data } = await apiClient.get<TrackingResult>(`/tracking/${reference}`)
    return data
  },
}
