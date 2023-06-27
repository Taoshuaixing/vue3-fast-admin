<!--
 * @Descripttion: 
 * @version: 
 * @Author: 陶帅星
 * @Date: 2023-06-27 17:36:13
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-06-27 17:36:25
-->
<template>
  <section class="app-main">
    <router-view v-slot="{ Component }">
      <transition
        name="fade-transform"
        mode="out-in"
      >
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'AppMain'
})
</script>

<style scoped>
.app-main {
  position: relative;

  /* 84 = navbar + tags-view = 50 +34 */
  height: calc(100vh - 84px);
  padding: 20px;
  overflow-x: hidden;
}
</style>
