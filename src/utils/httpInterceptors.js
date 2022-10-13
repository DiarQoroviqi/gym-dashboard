import httpClient from './httpClient'
import { useLoadingStore } from '@/stores/LoadingStore'
import { useErrorStore } from '@/stores/ErrorStore'
import router from '@/router'

export function setupInterceptors() {
  let requestsPending = 0
  const req = {
    pending: () => {
      requestsPending++
      useLoadingStore().showLoader()
    },
    done: () => {
      requestsPending--
      if (requestsPending <= 0) {
        useLoadingStore().hideLoader()
      }
    },
  }

  httpClient.interceptors.request.use(
    (config) => {
      req.pending()
      config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
      useErrorStore().$reset()

      return config
    },
    (error) => {
      requestsPending--
      req.done()
      return Promise.reject(error)
    },
  )

  httpClient.interceptors.response.use(
    (response) => {
      req.done()
      return response
    },
    (error) => {
      req.done()

      switch (error.response.status) {
        case 401:
          // localStorage.removeItem('token')
          // window.location.reload()
          break
        case 403:
        case 404:
        case 500:
          router.push({
            name: 'error',
            props: {
              error: {
                message: error.response.data.message,
                status: error.status,
              },
            },
          })
          break
        case 422:
          useErrorStore().$state = error.response.data
          break
        default:
          console.log(error.response.data)
      }

      return Promise.reject(error)
    },
  )
}
