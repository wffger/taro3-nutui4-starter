import { App } from 'vue'
import { createPinia } from 'pinia'
export { useCounter } from './count'
export { useSystem } from './system'
export { useTab } from './tab'
export const store = createPinia()

export function setupStore(app: App) {
  app.use(store)
}
