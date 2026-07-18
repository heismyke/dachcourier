import { customer } from '@/mocks/customers'

export const loginMockCustomer = async (email: string) => {
  await new Promise((resolve) => setTimeout(resolve, 160))
  return { token: 'mock-customer-session', user: { ...customer, email } }
}
