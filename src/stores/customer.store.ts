import { defineStore } from 'pinia'
import { customerApi } from '@/services/api/customer.api'
import type { Customer } from '@/types/customer'

export const useCustomerStore = defineStore('customer', {
  state: () => ({ profile: null as Customer | null }),
  actions: {
    async loadProfile() {
      this.profile = await customerApi.profile()
    },
  },
})
