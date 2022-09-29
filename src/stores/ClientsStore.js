import { defineStore } from 'pinia'
import httpClient from '@/utils/httpClient'

export const useClientsStore = defineStore({
  id: 'client',
  state: () => ({
    clients: [],
  }),
  getters: {},
  actions: {
    async getClients(page = 1) {
      const response = await httpClient.get('/v1/clients', {
        params: {
          include: 'contract',
          page: page,
        },
      })

      this.clients = response.data.data
    },
  },
})
