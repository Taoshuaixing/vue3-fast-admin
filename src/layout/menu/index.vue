<template>
	<div></div>
</template>

<script setup lang="ts">
	import { reactive, computed, onMounted } from 'vue';
	import store from '@/store';
	import { constantRoutes } from '@/router';
	import { getRoles } from '@/utils/auth';
	import MenuItem from './MenuItem.vue';

	const rules = getRoles();
	console.log(rules);
const ruterList:any[] = reactive([])
</script>

<style lang="less" scoped></style>
