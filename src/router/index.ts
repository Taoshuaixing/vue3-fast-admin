/*
 * @Descripttion:
 * @version:
 * @Author: 陶帅星
 * @Date: 2022-11-17 17:21:33
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-07-03 14:40:17
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: { title: '登录页面' }
  },

  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        name: 'Home',
        meta: { title: '首页', icon: 'Platform', affix: true }
      },
      {
        path: '/setting',
        component: () => import('@/views/setting/index.vue'),
        name: 'Setting',
        meta: { title: '权限管理', icon: 'Tools', roles: ['admin'] }
      },
      {
        path: '/menu',
        name: 'Menu',
        meta: { title: '菜单嵌套', icon: 'Menu', roles: ['admin', 'editor'] },
        redirect: '/menu/menu2',
        children: [
          {
            path: '/menu/menu1',
            name: 'Menu1',
            component: () => import('@/views/menu/menu10.vue'),
            meta: { title: '菜单1', roles: ['admin', 'editor'] },
            redirect: '/menu/menu1/menu1-1',
            children: [
              {
                path: '/menu/menu1/menu1-1',
                component: () => import('@/views/menu/menu11.vue'),
                name: 'Menu1-1',
                meta: { title: '菜单1-1', roles: ['admin'] }
              },
              {
                path: '/menu/menu1/menu1-2',
                component: () => import('@/views/menu/menu12.vue'),
                name: 'Menu1-2',
                meta: { title: '菜单1-2', roles: ['admin', 'editor'] }
              }
            ]
          },
          {
            path: '/menu/menu2',
            component: () => import('@/views/menu/menu2.vue'),
            name: 'Menu2',
            meta: { title: '菜单2', roles: ['admin', 'editor'] }
          }
        ]
      },
      {
        path: '/echarts',
        name: 'Echarts',
        redirect: '/echarts/lineChart',
        meta: { title: 'Echarts', icon: 'Histogram', roles: ['admin', 'editor'] },
        children: [
          {
            path: '/echarts/lineChart',
            component: () => import('@/views/echarts/LineChart.vue'),
            name: 'LineChart',
            meta: {
              title: '折线图',
              icon: 'Flag'
            }
          },
          {
            path: '/echarts/pieChart',
            component: () => import('@/views/echarts/PieChart.vue'),
            name: 'PieChart',
            meta: {
              title: '饼图',
              icon: 'Flag'
            }
          },
          {
            path: '/echarts/barChart',
            component: () => import('@/views/echarts/BarChart.vue'),
            name: 'BarChart',
            meta: {
              title: '柱状图',
              icon: 'Flag'
            }
          },
          {
            path: '/echarts/radarChart',
            component: () => import('@/views/echarts/RadarChart.vue'),
            name: 'RadarChart',
            meta: {
              title: '雷达图',
              icon: 'Flag'
            }
          },
          {
            path: '/echarts/mapChart',
            component: () => import('@/views/echarts/MapChart.vue'),
            name: 'MapChart',
            meta: {
              title: '中国地图',
              icon: 'Flag'
            }
          },
          {
            path: '/echarts/richChart',
            component: () => import('@/views/echarts/RichChart.vue'),
            name: 'RichChart',
            meta: {
              title: '富文本图',
              icon: 'Flag'
            }
          }
        ]
      },
      {
        path: '/directives',
        name: 'Directives',
        meta: { title: '自定义指令', icon: 'Stamp', roles: ['admin'] },
        redirect: '/directives/copyDirect',
        children: [
          {
            path: '/directives/copyDirect',
            component: () => import('@/views/directives/CopyDirect.vue'),
            name: 'CopyDirect',
            meta: {
              title: '复制指令',
              icon: 'Menu'
            }
          },
          {
            path: '/directives/debounceDirect',
            component: () => import('@/views/directives/DebounceDirect.vue'),
            name: 'DebounceDirect',
            meta: {
              title: '防抖指令',
              icon: 'Menu'
            }
          },
          {
            path: '/directives/dragDirect',
            component: () => import('@/views/directives/DragDirect.vue'),
            name: 'DragDirect',
            meta: {
              title: '拖拽指令',
              icon: 'Menu'
            }
          },
          {
            path: '/directives/longpressDirect',
            component: () => import('@/views/directives/LongpressDirect.vue'),
            name: 'LongpressDirect',
            meta: {
              title: '长按指令',
              icon: 'Menu'
            }
          },
          {
            path: '/directives/throttleDirect',
            component: () => import('@/views/directives/ThrottleDirect.vue'),
            name: 'ThrottleDirect',
            meta: {
              title: '节流指令',
              icon: 'Menu'
            }
          },
          {
            path: '/directives/watermarkDirect',
            component: () => import('@/views/directives/WatermarkDirect.vue'),
            name: 'WatermarkDirect',
            meta: {
              title: '水印指令',
              icon: 'Menu'
            }
          }
        ]
      },
      {
        path: '/error',
        name: 'ErroPage',
        meta: { title: '错误页面', icon: 'WarningFilled', roles: ['admin', 'editor'] },
        redirect: '/error/404',
        children: [
          {
            path: '/error/404',
            component: () => import('@/views/erro-page/404.vue'),
            name: '404',
            meta: {
              title: '404',
              icon: 'QuestionFilled'
            }
          },
          {
            path: '/error/401',
            component: () => import('@/views/erro-page/401.vue'),
            name: '401',
            meta: {
              title: '401',
              icon: 'QuestionFilled'
            }
          }
        ]
      }
    ]
  }
]

export const asyncRoutes = []
export const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})
export default router
