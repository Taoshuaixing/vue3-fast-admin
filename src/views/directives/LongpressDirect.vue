<!--
 * @Descripttion: 
 * @version: 
 * @Author: 陶帅星
 * @Date: 2023-07-01 15:25:50
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-07-02 12:46:40
-->
<template>
  <div class="card content-box">
    <span class="text">长按指令</span>
    <el-button
      type="primary"
      v-longpress="longpress"
    >长按2秒触发事件</el-button>
  </div>
</template>

<script setup lang="ts" >
import { ElMessage } from "element-plus";
const longpress = () => {
  ElMessage.success("长按事件触发成功");
};
</script>

<style lang='scss' scoped></style>