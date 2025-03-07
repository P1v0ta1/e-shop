import './assets/main.css'

import { createApp } from 'vue'
import { Swipe,SwipeItem } from 'vant'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(SwipeItem)
app.use(Swipe)
app.mount('#app')
