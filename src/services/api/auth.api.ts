import { apiClient } from './client'
import { loginMockCustomer } from '@/services/mock/auth.mock'
import type { AuthSession } from '@/types/auth'

export const authApi = {
  async login(email: string, password: string): Promise<AuthSession> {
    if (import.meta.env.VITE_USE_MOCK_API !== 'false') return loginMockCustomer(email)
    const { data } = await apiClient.post<AuthSession>('/auth/customer/login', { email, password })
    return data
  },
}
