<!--
 * @Descripttion: 
 * @version: 
 * @Author: 陶帅星
 * @Date: 2023-07-01 15:25:18
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-07-02 16:32:42
-->
<template>
  <div class="card content-box">
    <span class="text">防抖指令</span>
    <el-button
      type="primary"
      v-debounce="debounceClick"
    >防抖按钮 (0.5秒后执行)</el-button>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus";
const debounceClick = () => {
  ElMessage.success("测试防抖按钮触发的事件");
};
</script>

<style lang='less' scoped></style>