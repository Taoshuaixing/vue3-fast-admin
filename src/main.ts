import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// element-plus
import ElementPlus from 'element-plus'
// import 'element-plus/packages/theme-chalk/src/base.scss'
// import 'element-plus/lib/theme-chalk/index.css'
import 'element-plus/dist/index.css'
// permission control
import './permission'
import './styles/index.scss'
const app = createApp(App)
app.use(ElementPlus).use(router).mount('#app')
