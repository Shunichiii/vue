import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/home/Home.vue'
import AboutView from '../pages/about/About.vue'
import Login from '../pages/auth/login/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

export default router
