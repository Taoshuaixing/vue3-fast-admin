<!-- <template>
	<div class="login-wrap">
		<div class="login-content">
			<div class="login-title">系统登录</div>
			<el-form
				ref="loginFormRef"
				class="login-form"
				:model="param"
				:rules="rules"
				status-icon
			>
				<el-form-item prop="username">
					<el-input v-model="param.username" clearable placeholder="用户名">
						<template #prepend>
							<i class="el-icon-s-custom" />
						</template>
					</el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input
						v-model="param.password"
						clearable
						placeholder="密码"
						:type="passwordType"
						@keyup.enter="submitForm"
					>
						<template #prepend>
							<i
								v-show="passwordLock"
								class="el-icon-lock"
								@click="switchPass"
							/>
							<i
								v-show="!passwordLock"
								class="el-icon-unlock"
								@click="switchPass"
							/>
						</template>
					</el-input>
				</el-form-item>
				<div class="login-btn">
					<el-button type="primary" :loading="btnLoading" @click="submitForm"
						>登录</el-button
					>
				</div>
				<p class="login-tips">用户名: admin 密码: 123</p>
				<p class="login-tips">用户名: editor 密码: 456</p>
			</el-form>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref, reactive } from 'vue';
	import { useRouter } from 'vue-router';
	import store from '@/store';
	import { ElMessage } from 'element-plus';
	import { validate } from '@/utils/formExtend';

	const router = useRouter();

	const btnLoading = ref(false);
	const loginFormRef = ref(null);
	const passwordLock = ref(true);
	const param = reactive({
		username: '',
		password: '',
	});

	const rules = reactive({
		username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
		password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
	});
	const passwordType: any = ref('password');
	const switchPass = () => {
		if (passwordType.value === 'password') {
			passwordType.value = 'text';
		} else {
			passwordLock.value = !passwordLock.value;
		}
	};

	const submitForm = async () => {
		const valid: boolean = await validate(loginFormRef);
		if (valid) {
			btnLoading.value = true;
			store.dispatch('user/login', param).then(() => {
				router.push('/').finally(() => {
					btnLoading.value = false;
				});
			});
		} else {
			ElMessage.error('请输入用户名和密码！');
		}
	};
</script>

<style lang="less" scoped>
	.login-container {
		min-height: 100%;
		width: 100%;
		background-color: #2d3a4b;
		overflow: hidden;

		.login-form {
			position: relative;
			width: 520px;
			max-width: 100%;
			padding: 160px 35px 0;
			margin: 0 auto;
			overflow: hidden;

			::v-deep .el-form-item {
				border: 1px solid rgba(255, 255, 255, 0.1);
				background: rgba(0, 0, 0, 0.1);
				border-radius: 5px;
				color: #454545;
			}

			::v-deep .el-input {
				display: inline-block;
				height: 47px;
				width: 85%;

				input {
					background: transparent;
					border: 0px;
					-webkit-appearance: none;
					border-radius: 0px;
					padding: 12px 5px 12px 15px;
					color: #eee;
					height: 47px;
					caret-color: #fff;
				}
			}
			.login-button {
				width: 100%;
				box-sizing: border-box;
			}
		}

		.tips {
			font-size: 16px;
			line-height: 28px;
			color: #fff;
			margin-bottom: 10px;

			span {
				&:first-of-type {
					margin-right: 16px;
				}
			}
		}

		.svg-container {
			padding: 6px 5px 6px 15px;
			color: #889aa4;
			vertical-align: middle;
			display: inline-block;
		}

		.title-container {
			position: relative;

			.title {
				font-size: 26px;
				color: #eee;
				margin: 0px auto 40px auto;
				text-align: center;
				font-weight: bold;
			}

			::v-deep .lang-select {
				position: absolute;
				top: 4px;
				right: 0;
				background-color: white;
				font-size: 22px;
				padding: 4px;
				border-radius: 4px;
				cursor: pointer;
			}
		}

		.show-pwd {
			// position: absolute;
			// right: 10px;
			// top: 7px;
			font-size: 16px;
			color: #889aa4;
			cursor: pointer;
			user-select: none;
		}
	}
</style> -->
