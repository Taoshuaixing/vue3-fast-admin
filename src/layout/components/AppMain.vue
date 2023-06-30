<!--
 * @Descripttion: 
 * @version: 
 * @Author: 陶帅星
 * @Date: 2023-06-27 17:36:13
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-06-30 18:08:12
-->
<template>
  <router-view v-slot="{ Component }">
    <transition
      appear
      name="fade-transform"
      mode="out-in"
    >
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'AppMain'
})
</script>

<style scoped></style>
