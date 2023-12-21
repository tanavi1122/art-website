import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router'


//import { VueEmailPlugin } from 'vue-email';

// Import Lightbox CSS


// Import Lightbox JS


createApp(App)
.use(router)
//.use(VueEmailPlugin)
.mount('#app')

