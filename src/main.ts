/*
 * @Descripttion:
 * @version:
 * @Author: 陶帅星
 * @Date: 2022-11-17 17:21:33
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-07-02 16:28:35
 */
import { createApp, createVNode } from 'vue'

// element-plus
import ElementPlus, { ElIcon } from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue'

// global css
import './styles/index.scss'

import App from './App.vue'
import router from './router'
import store from './store'
import directives from '@/directives/index'

// permission control
import './permission'

// utils
// import { DateFormat } from './utils/util'

const app = createApp(App)

app.use(ElementPlus).use(router).use(directives).use(store).mount('#app')

const Icon = (props: { name: string; size: number | string; color: string }) => {
  const { name, size, color } = props
  return createVNode(
    ElIcon,
    {
      size: size || 16,
      color
    },
    () => createVNode(Icons[name as keyof typeof Icons])
  )
}

app.component('I', Icon)

export default app
