import { createApp } from 'vue'
import { createPinia } from 'pinia'

export default () => {
    console.log('vue and pinia init')
    const vue = createApp({})
    const pinia = createPinia()

    vue.use(pinia)
}