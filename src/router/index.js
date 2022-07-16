import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import('@/views/Login')
  },
  {
    path: '/',
    component: () => import('@/views/Layout'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home')
      },
      {
        path: '/search',
        component: () => import('@/views/search')
      },
      {
        path: '/cs',
        component: () => import('@/views/cs')
      },
      {
        path: '/my',
        component: () => import('@/views/my')
      }
    ]
  },
  {
    path: '/collect',
    component: () => import('@/views/my/collect')
  },
  {
    path: '/rent',
    component: () => import('@/views/rent')
  },
  {
    path: '/housexq/:id',
    component: () => import('@/components/house_xiangq')
  }
]

const router = new VueRouter({
  routes
})

export default router
