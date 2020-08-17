import { createRouter, createWebHashHistory } from 'vue-router'
import Chats from '../views/Chats.vue'
import Status from '../views/Status.vue'
import Calls from '../views/Calls.vue'
import Camera from '../views/Camera.vue'

const routes = [
  {
    path: '/',
    name: 'Chats',
    component: Chats
  },
  {
    path: '/status',
    name: 'Status',
    component:Status
  },
  {
    path: '/calls',
    name: 'Calls',
    component:Calls
  },
  {
    path: '/camera',
    name: 'Camera',
    component:Camera
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
