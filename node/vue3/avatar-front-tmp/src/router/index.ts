import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { loadRouteConfig } from '@/utils/common'

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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/components/system/User.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/Login.vue')
    }
  ]
})

export default router

const modules = await import.meta.glob('@/components/*/*.vue')
console.log(modules)
await addDynamicRoute()

async function addDynamicRoute() {
  console.log('load dynamic route resource...')
  const routeConfigs = loadRouteConfig()
  routeConfigs.forEach((element) => {
    const component = '@/components/' + element.path + '.vue'
    const arg = {
      path: '/' + element.path,
      name: element.name,
      component: modules[`${component}`]
    }
    console.log(
      'element: ',
      element,
      'component: ',
      component,
      'arg: ',
      arg,
      'module: ',
      modules[component]
    )
    if (element.parent == undefined) {
      router.addRoute(arg)
    } else {
      router.addRoute(element.parent, arg)
    }
  })
}
