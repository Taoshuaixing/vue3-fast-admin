<!--
 * @Descripttion: 
 * @version: 
 * @Author: 陶帅星
 * @Date: 2022-11-17 17:21:33
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-06-30 15:52:11
-->
<template>
	<div class="home card">
		<img
			class="home-bg"
			src="@/assets/welcome.png"
			alt="welcome"
		/>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.home {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;

	.home-bg {
		width: 70%;
		margin-bottom: 20px;
	}
}
</style>
