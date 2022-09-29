import { defineStore } from 'pinia'

export const useSidebarStore = defineStore({
  id: 'sidebar',
  state: () => ({
    sidebarOpen: false,
  }),
  getters: {},
  actions: {
    toggleSideBar: () => (this.sideBarOpen = !this.sideBarOpen),
  },
})
