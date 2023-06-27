/*
 * @Descripttion:
 * @version:
 * @Author: 陶帅星
 * @Date: 2022-11-20 15:26:59
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-06-27 19:31:07
 */
import { createStore } from 'vuex'
import { State } from '#/store'

const modulesFiles = import.meta.glob('./modules/*.ts', { eager: true })
const moduleKeys = Object.keys(modulesFiles)

const modules = moduleKeys.reduce((modules: any, modulePath: string) => {
  const moduleName = modulePath.replace(/^\.\/modules\/(.*)\.\w+$/, '$1')
  const value: any = modulesFiles[modulePath]
  modules[moduleName] = value.default
  return modules
}, {})

const store = createStore<State>({
  modules
})

export default store
