import { apiClient } from './client'
import { services } from '@/mocks/services'
import type { CourierService } from '@/types/service'

export const servicesApi = {
  async list(): Promise<CourierService[]> {
    if (import.meta.env.VITE_USE_MOCK_API !== 'false') return services
    const { data } = await apiClient.get<CourierService[]>('/services')
    return data
  },
  async get(slug: string): Promise<CourierService | undefined> {
    const list = await this.list()
    return list.find((service) => service.slug === slug)
  },
}
