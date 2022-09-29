import { defineStore } from 'pinia'

export const useLoadingStore = defineStore({
  id: 'loading',
  state: () => ({
    loading: false,
  }),
  getters: {},
  actions: {
    displayLoader(display) {
      this.loading = display
    },
  },
})
