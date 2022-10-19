import { defineStore } from 'pinia'

export const useLoadingStore = defineStore({
  id: 'loading',
  state: () => ({
    loading: false,
  }),
  getters: {
    getLoading() {
      return this.loading
    },
  },
  actions: {
    showLoader() {
      this.loading = true
    },
    hideLoader() {
      this.loading = false
    },
  },
})
