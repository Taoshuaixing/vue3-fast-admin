<!--
 * @Descripttion: 
 * @version: 
 * @Author: 陶帅星
 * @Date: 2023-06-27 16:57:39
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-06-28 17:59:08
-->
<template>
  <div class="header">
    <div class="header-list">
      <el-breadcrumb separator="/">
        <transition-group name="breadcrumb">
          <el-breadcrumb-item
            v-for="(item, index) of levelList"
            :key="item.path"
          >
            <span
              v-if="item.redirect === 'noRedirect' || index == levelList.length - 1"
              class="no-redirect"
            >
              {{ item.meta.title }}
            </span>
            <router-link
              v-else
              :to="item.redirect || item.path"
            >{{ item.meta.title }}</router-link>
          </el-breadcrumb-item>
        </transition-group>
      </el-breadcrumb>
    </div>
    <el-divider />
    <div class="header-user"></div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { watch, reactive } from 'vue'
const route = useRoute()
const levelList: any = reactive([])
watch(
  () => route.matched,
  (val) => {
    console.log(val)
    getBreadcrumb(val)
  },
  { immediate: true }
)
function getBreadcrumb (list: any) {
  levelList.length = 0
  let matched = list.filter((item: any) => item.meta && item.meta.title)
  console.log(matched)

  const first = matched[0]

  if (!isDashboard(first)) {
    const nav: any = {
      path: '/home',
      meta: {
        title: '首页'
      }
    }
    matched = [nav].concat(matched)
  }

  levelList.push(...matched.filter((item: any) => item.meta && item.meta.title && item.meta.breadcrumb !== false))
  console.log(levelList)
}
function isDashboard (meta: any) {
  const name = meta && meta.name
  if (!name) {
    return false
  }
  return name.trim().toLocaleLowerCase() === 'Home'.toLocaleLowerCase()
}
</script>

<style lang="less" scoped>
.header {
  padding: 20px;
}
</style>
