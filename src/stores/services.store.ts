import { defineStore } from 'pinia'
import { servicesApi } from '@/services/api/services.api'
import type { CourierService } from '@/types/service'

export const useServicesStore = defineStore('services', {
  state: () => ({ items: [] as CourierService[] }),
  actions: {
    async load() {
      this.items = await servicesApi.list()
    },
  },
})
