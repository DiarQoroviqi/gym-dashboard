import dashboard from '@/views/Dashboard.vue'
// import clients from '@/views/ClientsView.vue'
import clients from '@/views/Clients.vue'

export default [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard,
    meta: { auth: true },
  },
  {
    path: '/clients',
    name: 'clients',
    component: clients,
    meta: { auth: true },
  },
]
