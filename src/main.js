import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import api from './services/api'

const app = createApp(App)

app.config.globalProperties.$http = api;

app.use(router)

app.mount('#app')
