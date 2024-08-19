import { createApp } from 'vue'
import App from './App.vue'
import '@/styles/index.css'
import 'virtual:svg-icons-register'
import router from '@/router/index'
import components from '@/plugins/components'

createApp(App)
  .use(router)
  .use(components)
  .mount('#app')
