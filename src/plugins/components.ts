import * as Components from '@/components'
import { App } from 'vue'

export default {
  install(app: App) {
    Object.entries(Components).forEach(([key, component]) => {
      app.component(key, component)
    })
  }
}
