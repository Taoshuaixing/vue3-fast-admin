<!--
 * @Descripttion: 
 * @version: 
 * @Author: 陶帅星
 * @Date: 2023-07-01 15:25:35
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-07-01 15:37:37
-->
<template>
  <div class="card content-box">
    <span class="text">节流指令</span>
    <el-button
      type="primary"
      v-throttle="throttleClick"
    >节流按钮 (每隔1S秒后执行)</el-button>
  </div>
</template>

<script setup lang="ts" >
import { ElMessage } from "element-plus";
const throttleClick = () => {
  ElMessage.success("测试节流按钮触发的事件");
};
</script>

<style lang='less' scoped></style>