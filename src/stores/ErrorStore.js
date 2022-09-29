import { defineStore } from 'pinia'

export const useErrorStore = defineStore({
  id: 'error',
  state: () => ({
    success: false,
    status: null,
    message: null,
    errors: {},
  }),
})
