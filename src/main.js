import { createApp } from 'vue'
import './style.css'
import "@/config/vee-validate/rules.js"
import "@/config/vee-validate/messages.js"
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
