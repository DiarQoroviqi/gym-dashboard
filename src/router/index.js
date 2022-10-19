import { createRouter, createWebHistory } from 'vue-router'
import publicRoutes from './PublicRoutes'
import privateRoutes from './PrivateRoutes'
import { useAuthStore } from '@/stores/AuthStore'

const routes = [...privateRoutes, ...publicRoutes]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  let redirectToRoute = function (name) {
    if (name === from.name) {
      next()
      return
    }
    next({ name: name })
  }

  const authStore = useAuthStore()
  // const loggedUser = authStore.user
  const token = localStorage.getItem('token')

  // Role
  // if (to.meta.roles) {
  //   if (loggedUser) {
  //     if (to.meta.roles.includes(loggedUser.role)) {
  //       return next()
  //     } else {
  //       return redirectToRoute('error-404')
  //     }
  //   } else {
  //     return redirectToRoute('login')
  //   }
  // }

  // Auth
  if (to.meta.auth) {
    if (!token) {
      return next({ name: 'login' })
    } else {
      return next()
    }
  }

  // login
  if (token && to.name === 'login') {
    return redirectToRoute('dashboard')
  }

  // Guest
  if (to.meta.guest) {
    if (token) {
      return redirectToRoute('dashboard')
    } else {
      return next()
    }
  }

  next()
})

export default router
