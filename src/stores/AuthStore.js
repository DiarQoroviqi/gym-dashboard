import { defineStore } from 'pinia'
import httpClient from '@/utils/httpClient'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: {
      data: {},
      token: localStorage.getItem('token'),
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
      this.user.token = userData.token
      localStorage.setItem('token', userData.token)
    },
    async logout() {
      // const response = await httpClient.post('/v1/auth/logout', user)
      this.user.data = {}
      this.user.token = null
      localStorage.removeItem('token')
    },
  },
})
