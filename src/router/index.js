import Vue from 'vue'
import VueRouter from 'vue-router'
import Info from '../views/Info/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/info',
    name: 'Info',
    component: Info
  },
  {
    path: '/',
    name: 'Index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Index/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
