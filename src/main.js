import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import api from './services/api'
import Carousel3d from "vue3-carousel-3d"
import "vue3-carousel-3d/dist/index.css"

const app = createApp(App)

app.config.globalProperties.$http = api;

app.use(Carousel3d)
app.use(router)

app.mount('#app')
