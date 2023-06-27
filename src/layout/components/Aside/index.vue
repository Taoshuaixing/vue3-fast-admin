<!--
 * @Descripttion: 
 * @version: 
 * @Author: 陶帅星
 * @Date: 2023-06-27 16:57:23
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-06-27 18:38:23
-->
<template>
  <el-menu
    :router="true"
    :default-active="$route.path"
    :collapse="isCollapse"
    :show-timeout="200"
    text-color="#fff"
    background-color="#4a5a74"
    active-text-color="#409EFF"
  >
    <AsideItem
      v-for="item of routerList"
      :key="item.path"
      :index="item.path"
      :nav="item"
    />
  </el-menu>
</template>

<script setup lang='ts'>
import { reactive, computed, onMounted } from 'vue'
import store from '@/store'
import { constantRoutes } from '@/router'
import { getRoles } from '@/utils/auth'
import AsideItem from './AsideItem.vue'

const roles = getRoles()
const routerList: any[] = reactive([])
const opened = computed(() => store.state.app.sidebar.opened)
const isCollapse = computed(() => !opened.value)

onMounted(() => {
  filterRoutes()
})

/**
 * 权限过滤路由
 */
const filterRoutes = () => {
  constantRoutes.forEach((item) => {
    if (item.path === '/') {
      const childrens = item.children as any[]
      routerList.push(...childrens)
    }
  })
  for (let i = 0; i < routerList.length; i++) {
    if (routerList[i].meta && routerList[i].meta.roles && !routerList[i].meta.roles.includes(roles)) {
      routerList.splice(i, 1)
      i--
    }
  }
  filterChildrens(routerList)
}

/**
 * 权限过滤子路由
 */
const filterChildrens = (routers: any) => {
  const childrens: Array<any> = []
  routers.forEach((item: any) => {
    if ((item.meta && !item.meta.roles) || (item.meta && item.meta.roles && item.meta.roles.includes(roles))) {
      childrens.push(item)
      if (item.children) {
        filterChildrens(item.children)
      }
    }
  })
  routers.length = 0
  routers.push(...childrens)
}
</script>

<style lang='less' scoped></style>