<!--
 * @Descripttion: 
 * @version: 
 * @Author: 陶帅星
 * @Date: 2022-11-17 17:21:33
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-06-29 11:13:40
-->
<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <div
          class="logo"
          @click="$router.push('/')"
        ><img
            src="@/assets/fast-admin-logo.png"
            alt="logo"
          ></div>
        <Aside />
      </el-aside>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main>
          <AppMain />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Aside from './components/Aside/index.vue'
import AppMain from './components/AppMain.vue'
import Header from './components/Header/index.vue'

</script>

<style lang="less" scoped>
.logo {
  padding: 10px;
  background: #003739;

  img {
    width: 100%;
  }
}

.el-aside {
  height: 100vh;
  background: #00bfa6;
}

.el-header {
  --el-header-height: none;
}
</style>
