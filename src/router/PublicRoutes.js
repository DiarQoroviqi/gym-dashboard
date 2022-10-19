import login from '@/views/Login.vue'
import error from '@/views/Error.vue'

export default [
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/reset-password',
    name: 'resetPassword',
    component: null,
  },
  // {
  //   path: '*',
  //   name: 'error',
  //   component: error,
  // },
]
