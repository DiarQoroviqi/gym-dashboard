// import { notify } from "@kyvg/vue3-notification";
import axios from 'axios'
import { useErrorStore } from '@/stores/ErrorStore'
import router from '@/router'

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

httpClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`

  return config
})

httpClient.interceptors.request.use(
  (config) => {
    // const loadingStore = useLoadingStore()
    // loadingStore.displayLoader(true)
    useErrorStore().$reset()

    return config
  },
  (error) => {
    // const loadingStore = useLoadingStore()
    // loadingStore.displayLoader(false)

    return Promise.reject(error)
  },
)

httpClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
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

export default httpClient
