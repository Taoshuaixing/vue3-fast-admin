<template>
  <div class="card">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>

<script></script>

<style lang="scss" scoped></style>
