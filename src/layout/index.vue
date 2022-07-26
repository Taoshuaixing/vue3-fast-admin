<template>
	<div class="common-layout">
		<el-container>
			<el-header><Headers /></el-header>
			<el-container>
				<el-aside :width="asilderWidth">
					<Menu />
				</el-aside>
				<el-main><router-view /></el-main>
			</el-container>
		</el-container>
	</div>
</template>
<script setup lang="ts">
	import Menu from './menu/index.vue';
	import { computed } from 'vue';
	import { useStore } from 'vuex';
	import Headers from './headers/index.vue';

	const store: any = useStore();

	const asilderWidth: any = computed(() => {
		return store.getters.siderType ? '67px' : '210px';
	});
</script>

<style lang="less" scoped></style>
