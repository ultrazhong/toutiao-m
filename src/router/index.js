import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* 路由表 */
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/')
  },
  {
    path: '/',
    component: () => import('@/views/layout/'),
    children: [
      {
        path: '', // 默认子路由
        name: 'home',
        component: () => import('@/views/home')
      },
      {
        path: '/se',
        name: 'se',
        component: () => import('@/views/se')
      },

      {
        path: '/eq',
        name: 'eq',
        component: () => import('@/views/eq')
      },

      {
        path: '/my',
        name: 'my',
        component: () => import('@/views/my')
      }

    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
