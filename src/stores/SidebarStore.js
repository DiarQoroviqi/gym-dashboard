import { defineStore } from 'pinia'

export const useSidebarStore = defineStore({
  id: 'sidebar',
  state: () => ({
    sidebarOpen: false,
  }),
  getters: {},
  actions: {
    showSidebar() {
      this.sidebarOpen = true
    },
    hideSidebar() {
      this.sidebarOpen = false
    },
  },
})
