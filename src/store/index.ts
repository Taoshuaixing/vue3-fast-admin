import { createStore } from 'vuex'
// import { State } from '#/store'
import user from './modules/user'
import permission from './modules/permission'
// const modulesFiles = import.meta.glob('./modules/*.ts')
// const moduleKeys = Object.keys(modulesFiles)

// const modules = moduleKeys.reduce((modules: any, modulePath: string) => {
//   const moduleName = modulePath.replace(/^\.\/modules\/(.*)\.\w+$/, '$1')
//   const value: any = modulesFiles[modulePath]
//   modules[moduleName] = value.default
//   return modules
// }, {})

// const store = createStore<State>({
//   modules
// })

export default createStore({
  modules: {
    user,
    permission
  },
  strict: process.env.NODE_ENV !== 'production'
})
