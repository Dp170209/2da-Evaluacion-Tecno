import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import People from '../views/People.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/people', name: 'People', component: People },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
