import Vue from 'vue'
import Router from 'vue-router'
import Show from '@/components/Show'
import Index from '@/components/Index'
import Login from '@/components/Login'
import User from '@/components/User'
import Product from '@/components/Product'
import Buycar from '@/components/Buycar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/show',
      name: 'Show',
      component: Show
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/buycar',
      name: 'Buycar',
      component: Buycar
    }
  ]
})
