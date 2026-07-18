import { customer } from '@/mocks/customers'

export const customerApi = {
  async profile() {
    return customer
  },
}
