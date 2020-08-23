import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ToggleButton from 'vue-js-toggle-button'

createApp(App).use(ToggleButton)

createApp(App).use(router).mount('#app')
