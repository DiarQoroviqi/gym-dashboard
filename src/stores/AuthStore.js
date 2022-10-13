import { defineStore } from 'pinia'
import httpClient from '@/utils/httpClient'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: {
      data: {},
    },
  }),
  getters: {},
  actions: {
    async login(user) {
      const response = await httpClient.post('/v1/auth/login', user)

      return response.data
    },
    setUser(userData) {
      this.user.data = userData
      localStorage.setItem('token', userData.token)
    },
    async logout() {
      await httpClient.post(
        '/v1/auth/logout',
        this.user.data.id,
      )
      this.user.data = {}
      this.user.token = null
      localStorage.removeItem('token')
    },
  },
})
