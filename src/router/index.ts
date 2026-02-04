import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/corruption/info',
      name: 'corruption-info',
      component: () => import('../views/corruption/CorruptionInfo.vue'),
    },
    {
      path: '/corruption/appeal',
      name: 'corruption-appeal',
      component: () => import('../views/corruption/CorruptionAppeal.vue'),
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/FAQ.vue'),
    },
    {
      path: '/news/:id',
      name: 'news-detail',
      component: () => import('../views/NewsDetailView.vue'),
    },
    {
      path: '/construction',
      name: 'construction',
      component: () => import('../views/UnderConstruction.vue'),
    },
  ],
})

export default router
