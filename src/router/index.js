import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PersonalView from '../views/PersonalView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/personal',
    name: 'personal',
    component: PersonalView,
    redirect: '/personal/info',
    children: [
      {
        path: 'info',
        name: 'info',
        component: () => import('@/views/InfoView.vue')
      },
      {
        path: 'bank',
        name: 'bank',
        component: () => import('@/views/BankView.vue')
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
