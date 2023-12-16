import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router'
//import { VueEmailPlugin } from 'vue-email';

createApp(App)//.mount('#app')
.use(router)
//.use(VueEmailPlugin)
.mount('#app')