<template>
	<div class="card content-box">
		<div class="header-box">
			<el-button
				type="primary"
				@click="showDialog"
			>
				<I
					name="Plus"
					class="mr-4"
				></I>添加用户
			</el-button>
		</div>
		<el-table
			v-loading="tabelLoading"
			:data="tableList"
			border
		>
			<el-table-column
				prop="username"
				label="账号"
			/>
			<el-table-column
				prop="password"
				label="密码"
			/>
			<el-table-column
				prop="role"
				label="角色"
			>
				<template #default="{ row }">
					{{ getRoleName(row.role) }}
				</template>
			</el-table-column>
			<el-table-column
				prop="email"
				label="邮箱"
				min-width="120"
			/>
			<el-table-column
				prop="introduction"
				label="介绍"
			/>
			<el-table-column
				prop="avatar"
				label="头像"
			>
				<template #default="{ row }">
					<img
						v-show="row.avatar"
						:src="row.avatar"
						width="40"
						height="40"
					/>
				</template>
			</el-table-column>
			<el-table-column
				prop="createTime"
				label="创建时间"
				min-width="160"
			>
				<template #default="{ row }">
					{{ DateFormat(row.createTime) }}
				</template>
			</el-table-column>
			<el-table-column
				label="操作"
				width="200"
			>
				<template #default="{ row }">
					<el-button
						type="primary"
						size="small"
						@click="showDialog(2, row)"
					>
						<I
							name="Edit"
							size="small"
							class="mr-4"
						></I>修改
					</el-button>
					<el-button
						type="danger"
						size="small"
						@click="deleteUser(row)"
					>
						<I
							name="Delete"
							size="small"
							class="mr-4"
						></I>删除
					</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-dialog
			v-model="dialogVisible"
			:title="dialogFlag === 2 ? '修改' : '添加'"
		>
			<el-form
				ref="userFormRef"
				v-loading="formLoading"
				:model="userForm"
				label-width="80px"
			>
				<el-form-item
					prop="username"
					label="账号"
				>
					<el-input v-model="userForm.username"></el-input>
				</el-form-item>
				<el-form-item
					prop="password"
					label="密码"
				>
					<el-input v-model="userForm.password"></el-input>
				</el-form-item>
				<el-form-item
					prop="role"
					label="角色"
				>
					<el-select
						v-model="userForm.role"
						placeholder="请选择"
						class="w-full"
						@focus="getRoles"
					>
						<el-option
							v-for="item in roleList"
							:key="item.name"
							:label="item.name"
							:value="item.name"
						></el-option>
					</el-select>
				</el-form-item>
				<el-form-item
					prop="email"
					label="邮箱"
				>
					<el-input v-model="userForm.email"></el-input>
				</el-form-item>
				<el-form-item
					prop="introduction"
					label="介绍"
				>
					<el-input v-model="userForm.introduction"></el-input>
				</el-form-item>
			</el-form>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="dialogVisible = false">取 消</el-button>
					<el-button
						type="primary"
						:disabled="formLoading"
						@click="addOrUpdateUser"
					>
						确 定
					</el-button>
				</span>
			</template>
		</el-dialog>
	</div>
</template>

<script lang="ts" setup>
import { ref, reactive, onBeforeMount, inject } from 'vue'
import { ElMessageBox, ElMessage } from 'element-plus'
import { get_user_list, add_user, get_roles, update_user_info, delete_user_info } from '@/api/user'

const DateFormat: any = inject('$DateFormat')
const dialogFlag = ref(1)
const dialogVisible = ref(false)
const tabelLoading = ref(false)
const formLoading = ref(false)
const userFormRef = ref(null)
const roleList: Array<any> = reactive([])
const tableList: Array<any> = reactive([])
const userForm = ref({
	username: '',
	password: '',
	role: '',
	email: '',
	introduction: ''
} as {
	[key: string]: string
	username: string
	password: string
	role: string
	email: string
	introduction: string
})

onBeforeMount(() => {
	getTableList()
	getRoles()
})

/**
 * 获取表格列表
 */
const getTableList = () => {
	tabelLoading.value = true
	get_user_list()
		.then((res: any) => {
			tableList.length = 0
			tableList.push(...res.list)
		})
		.finally(() => {
			tabelLoading.value = false
		})
}

/**
 * 获取角色列表
 */
const getRoles = () => {
	if (roleList.length) return
	get_roles().then((res: any) => {
		roleList.push(...res.list)
	})
}

/**
 * 获取角色名
 */
const getRoleName = (id: string) => {
	let name = id
	roleList.forEach((group) => {
		if (group.id === id) {
			name = group.name
		}
	})
	return name
}

/**
 * 展开弹窗
 */
const showDialog = (flag: number, row: any) => {
	dialogVisible.value = true
	dialogFlag.value = flag
	if (flag === 2) {
		userForm.value = { ...row }
	} else {
		userForm.value = {
			username: '',
			password: '',
			role: '',
			email: '',
			introduction: ''
		}
	}
}

/**
 * 添加或更新用户
 */
const addOrUpdateUser = () => {
	formLoading.value = true
	if (dialogFlag.value === 2) {
		update_user_info({ ...userForm })
			.then(() => {
				getTableList()
				dialogVisible.value = false
			})
			.finally(() => {
				formLoading.value = false
			})
	} else {
		add_user({ ...userForm })
			.then(() => {
				getTableList()
				dialogVisible.value = false
			})
			.finally(() => {
				formLoading.value = false
			})
	}
}

/**
 * 删除用户
 */
const deleteUser = (row: any) => {
	ElMessageBox.confirm(`确定删除 ${row.username} ？`, '提示', {
		confirmButtonText: '确认',
		cancelButtonText: '取消',
		type: 'warning'
	})
		.then(() => {
			delete_user_info(row.username).then(() => {
				const index = tableList.findIndex((o) => o.username === row.username)
				tableList.splice(index, 1)
				ElMessage({
					type: 'success',
					message: '删除成功'
				})
			})
		})
		.catch(() => { })
}
</script>

<style lang="scss" scoped>
.header-box {
	margin-bottom: 10px;
}
</style>
