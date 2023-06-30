<!--
 * @Descripttion: 
 * @version: 
 * @Author: 陶帅星
 * @Date: 2023-06-30 11:49:12
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-06-30 14:39:08
-->
<template>
  <el-breadcrumb separator="/">
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
  </el-breadcrumb>
</template>

<script setup lang='ts'>
const props = defineProps({
  levelList: {
    type: Array<any>,
    default: []
  },
})
</script>

<style lang='less' scoped></style>