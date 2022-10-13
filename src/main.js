import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { setupInterceptors } from '@/utils/httpInterceptors'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(setupInterceptors)

app.mount('#app')
