import Vue from 'vue'
import VueRouter from 'vue-router'
import Signin from '@/components/Signin'
import Signup from '@/components/Signup'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: Signup
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
