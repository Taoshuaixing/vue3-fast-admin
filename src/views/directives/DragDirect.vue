<!--
 * @Descripttion: 
 * @version: 
 * @Author: 陶帅星
 * @Date: 2023-07-01 15:24:57
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-07-02 16:38:23
-->
<template>
  <div class="card content-box">
    <span class="text">拖拽指令</span>
    <div
      v-draggable
      class="drag-box flx-center"
    >拖拽测试</div>
  </div>
</template>

<script setup lang="ts" ></script>

<style lang='less' scoped>
.content-box {
  position: relative;

  .drag-box {
    position: absolute;
    top: 110px;
    width: 300px;
    height: 300px;
    font-size: 23px;
    font-weight: bold;
    color: rgb(46 127 138);
    background: #b8d2dd;
    border-radius: 50%;
    text-align: center;
    line-height: 300px;
  }
}
</style>