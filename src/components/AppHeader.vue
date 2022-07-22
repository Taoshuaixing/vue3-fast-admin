<template>
	<el-menu
		:default-active="activeIndex"
		class="el-menu-demo"
		mode="horizontal"
		:ellipsis="false"
		@select="handleSelect"
		router
	>
		<el-menu-item index="0">Asing</el-menu-item>
		<div class="flex-grow" />
		<template v-for="(item, index) in list">
			<el-menu-item @click="setRouter(item.path)">{{
				item.title
			}}</el-menu-item>
		</template>
	</el-menu>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import axios from 'axios';

	const activeIndex = ref('1');
	const handleSelect = (key: string, keyPath: string[]) => {
		console.log(key, keyPath);
	};

	interface IMenulist {
		id: Number;
		path: string;
		title: string;
	}
	const list = ref<IMenulist[]>([]);
	axios({
		method: 'get',
		url: '/menuList',
	}).then(({ data }) => {
		// console.log(data);
		list.value = data.result;
		console.log(list.value);
	});
	function setRouter(path: string) {
		console.log(path);
	}
</script>

<style lang="less" scoped>
	.flex-grow {
		flex-grow: 1;
	}
</style>
