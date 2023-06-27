<!--
 * @Descripttion: 
 * @version: 
 * @Author: 陶帅星
 * @Date: 2023-06-27 16:57:23
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-06-27 17:32:57
-->
<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
    @open="handleOpen"
    @close="handleClose"
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
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import { reactive, computed, onMounted } from 'vue'
import store from '@/store'
import { constantRoutes } from '@/router'
import { getRoles } from '@/utils/auth'
import AsideItem from './AsideItem.vue'

const roles = getRoles()
const routerList: any[] = reactive([])

onMounted(() => {
  filterRoutes()
})

const filterRoutes = () => {
  constantRoutes.forEach(element => {
    if (element.path === '/') {
      const childrens = element.children as any[]
      routerList.push(...childrens)
    }
    console.log(routerList);

  });
}
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang='less' scoped></style>