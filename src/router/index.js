import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import daubookRouter from '../modules/daybook/router/index'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
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
    path: '/daybook',
    ...daubookRouter
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
