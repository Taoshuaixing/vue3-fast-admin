<!--
 * @Descripttion: 
 * @version: 
 * @Author: 陶帅星
 * @Date: 2022-11-17 17:21:33
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-06-30 18:20:22
-->
<template>
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
      <el-footer>
        <div class="footer"><a
            href="https://github.com/HalseySpicy"
            target="_blank"
          > 2023 © Fast-Admin By TSX Technology. </a></div>
      </el-footer>
    </el-container>
  </el-container>
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
  height: 71px;

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

.el-container {
  width: 100%;
  height: 100vh;
}

.el-main {
  box-sizing: border-box;
  padding: 10px 12px;
  overflow-x: hidden;
  background-color: #f0f2f5;
}

.el-footer {
  height: auto;
  padding: 0;
}

.footer {
  height: 30px;
  line-height: 30px;
  text-align: center;
  background: #ffffff;
  border-top: 1px solid #e4e7ed;

  a {
    font-size: 14px;
    color: #858585;
    text-decoration: none;
    letter-spacing: 0.5px;
  }
}
</style>
