import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: () => import('../components/SectionSobre.vue'),
    },
    {
      path: '/como-funciona',
      name: 'como-funciona',
      component: () => import('../components/SectionComoFunciona.vue'),
    },
    {
      path: '/doar',
      name: 'doar',
      component: () => import('../components/SectionDoar.vue'),
    },
    {
      path: '/receber',
      name: 'receber',
      component: () => import('../components/SectionReceber.vue'),
    },
    {
      path: '/contato',
      name: 'contato',
      component: () => import('../components/SectionContato.vue'),
    },
  ],
})

export default router
