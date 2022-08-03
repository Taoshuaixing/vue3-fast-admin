<template>
	<div class="common-layout">
		<el-container>
			<el-header class="container"><Headers /></el-header>
			<el-container>
				<el-aside :width="asilderWidth">
					<Menu></Menu>
				</el-aside>
				<el-main><router-view></router-view></el-main>
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
	//TODO
	const asilderWidth: any = computed(() => {
		return store.getters.siderType ? '67px' : '210px';
	});
</script>

<style lang="less" scoped>
	.common-layout {
		position: relative;
		width: 100%;
		height: 100%;
	}
	.container {
		width: calc(100% - '67px');
		height: 100%;
		position: fixed;
		top: 0;
		right: 0;
		z-index: 9;
		transition: all 0.3s;

		&.hidderContainer {
			width: calc(100% - '210px');
		}
	}
	::v-deep .el-header {
		padding: 0;
	}
</style>
