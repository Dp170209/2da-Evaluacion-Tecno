import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 👈 importar router
import './assets/main.css' // tu tailwind o css
import 'animate.css'

const app = createApp(App)

app.use(router) // 👈 usar router

app.mount('#app')
