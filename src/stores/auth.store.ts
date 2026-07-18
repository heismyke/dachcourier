import { defineStore } from 'pinia'
import { authApi } from '@/services/api/auth.api'
import type { AuthSession } from '@/types/auth'

export const useAuthStore = defineStore('auth', {
  state: () => ({ session: null as AuthSession | null, loading: false }),
  getters: { isAuthenticated: (state) => Boolean(state.session) },
  actions: {
    async login(email: string, password: string) {
      this.loading = true
      try {
        this.session = await authApi.login(email, password)
      } finally {
        this.loading = false
      }
    },
    logout() {
      this.session = null
    },
  },
})
