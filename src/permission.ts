/*
 * @Descripttion:
 * @version:
 * @Author: 陶帅星
 * @Date: 2022-11-17 17:21:33
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-06-28 15:44:11
 */
import NProgress from '@/utils/nprogress'
import 'nprogress/nprogress.css' // progress bar style
import router from './router'
import { getToken, getRoles } from './utils/auth' // get token from cookie
import getPageTitle from './utils/get-page-title'

const whiteList = ['/login'] // no redirect whitelist
router.beforeEach(async (to: any, from: any, next) => {
  console.log('beforeEach: from', from)
  // start progress bar
  NProgress.start()
  // determine whether the user has logged in  确定用户是否已登录
  const hasToken = getToken()
  if (hasToken) {
    // set page title
    document.title = getPageTitle(to.meta.title)
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
      NProgress.done()
    } else {
      const roles = getRoles()
      const routes = router.getRoutes().filter((r) => r.path === to.path)
      if (routes.length) {
        // Permission filtering  许可过滤
        const toRoute: any = routes[0]
        if ((toRoute.meta && !toRoute.meta.roles) || (toRoute.meta && toRoute.meta.roles.includes(roles))) {
          next()
        } else {
          next('/401')
        }
      } else {
        // Otherwise jump to 404  否则跳转到404
        next('/404')
      }
    }
  } else {
    /* has no token*/
    if (whiteList.includes(to.path)) {
      //  In the idle login whitelist, enter directly 在空闲登录白名单中，直接进入
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.  其他没有访问权限的页面将被重定向到登录页面。
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
