import GuestLayout from '@/layouts/GuestLayout.vue'
import login from '@/views/Login.vue'
import error from '@/views/Error.vue'

export default [
  {
    path: '/login',
    name: 'login',
    component: GuestLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: login,
      },
      {
        path: 'reset-password',
        name: 'resetPassword',
        component: null,
      },
      {
        path: '*',
        name: 'error',
        component: error,
      },
    ],
  },
]
