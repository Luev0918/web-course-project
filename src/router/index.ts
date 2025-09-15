import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Song from '../components/Song.vue'

const routes = [
  { path: '/home', component: Home },
  { path: '/song', component: Song },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
