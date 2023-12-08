import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';



import HomePage from '../views/HomePage.vue'
import Ps1Page from '../views/Ps1Page.vue'
import Ps2Page from '../views/Ps2Page.vue'
import XboxPage from '../views/XboxPage.vue'
import Xbox360Page from '../views/Xbox360Page.vue'
import PcPage from '../views/PcPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/ps1',
    name: 'ps1',
    component: Ps1Page
  },
  {
    path: '/ps2',
    name: 'ps2',
    component: Ps2Page
  },
  {
    path: '/xboxclasico',
    name: 'xboxclasico',
    component: XboxPage
  },
  {
    path: '/xbox360',
    name: 'xboxc360',
    component: Xbox360Page
  },
  {
    path: '/pc',
    name: 'pc',
    component: PcPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
