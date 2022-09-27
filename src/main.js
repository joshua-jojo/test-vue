import { createApp } from 'vue'
import router from './router'
import './style.css'

import App from './App.vue'
import Navbar from './components/Navbar.vue'

const app = createApp(App)
app.use(router)
app.component('Navbar',Navbar)
app.mount('#app')
