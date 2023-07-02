<!--
 * @Descripttion: 
 * @version: 
 * @Author: 陶帅星
 * @Date: 2023-07-01 15:24:24
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-07-02 17:00:30
-->
<template>
  <div class="card content-box">
    <span class="text">复制指令</span>
    <div class="box-content">
      <el-input
        placeholder="请输入内容"
        v-model="data"
        style="width: 500px"
      >
        <template #append>
          <el-button v-copy="data">复制</el-button>
        </template>
      </el-input>
    </div>
  </div>
</template>

<script setup lang="ts" >
import { ref } from "vue";

const data = ref<string>("测试内容");
</script>

<style scoped lang="scss"></style>
