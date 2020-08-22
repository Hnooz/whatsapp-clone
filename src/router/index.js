import { createRouter, createWebHashHistory } from 'vue-router'
import Chats from '../views/Chats.vue'
import Status from '../views/Status.vue'
import Calls from '../views/Calls.vue'
import Camera from '../views/Camera.vue'
import Settings from '../views/Settings.vue'
import Account from '../views/settings/Account.vue'
import Chat from '../views/settings/Chat.vue'
import Notifications from '../views/settings/Notifications.vue'
import Data from '../views/settings/Data.vue'
import Help from '../views/settings/Help.vue'

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
  {
    path: '/settings',
    name: 'Settings',
    component:Settings
  },
  {
    path: '/account',
    name: 'Account',
    component:Account
  },
  {
    path: '/chat',
    name: 'Chat',
    component:Chat
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component:Notifications
  },
  {
    path: '/data',
    name: 'Data',
    component:Data
  },
  {
    path: '/help',
    name: 'Help',
    component:Help
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
