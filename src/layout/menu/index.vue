<template>
	<el-menu
		default-active="2"
		class="el-menu-vertical-demo"
		:default-active="defaultActive"
		touter
		unique-opened
	>
		<el-sub-menu :index="it.id" v-for="it in list" :key="it.id">
			<template #title>
				<el-icon>
					<component :is="it.icon"></component>
				</el-icon>
				<span>{{ it.authName }}</span>
			</template>
			<el-menu-item
				v-for="item in it.children"
				:key="item.id"
				:index="'/' + item.path"
				@click="savePath(item.path)"
			>
				<template #title>
					<el-icon><component :is="item.icon"></component></el-icon>
					<span>{{ item.path }}</span>
				</template>
			</el-menu-item>
		</el-sub-menu>
	</el-menu>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import axios from 'axios';

	const defaultActive = ref(sessionStorage.getItem('path') || '/users');

	interface IMenulist {
		id: Number;
		path: string;
		authName: string;
		icon: string;
		children: Array<any>;
		order: Number;
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

	const savePath = (path: string) => {
		sessionStorage.setItem('path', `/${path}`);
		console.log(path);
	};
</script>

<style lang="less" scoped></style>
