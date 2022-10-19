import { defineStore } from 'pinia'
import httpClient from '@/utils/httpClient'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: {},
  }),
  getters: {},
  actions: {
    async login(user) {
      const response = await httpClient.post('/v1/auth/login', user)

      return response.data
    },
    setUser(userData) {
      this.user = userData
      localStorage.setItem('token', userData.token)
      localStorage.setItem('id', userData.id)
    },
    async logout() {
      const userId = localStorage.getItem('id')

      return await httpClient.post('/v1/auth/logout', userId)
    },
    removeUser() {
      this.user = {}
      localStorage.removeItem('token')
      localStorage.removeItem('id')
    },
  },
})
