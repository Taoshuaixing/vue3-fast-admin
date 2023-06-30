<!--
 * @Descripttion: 
 * @version: 
 * @Author: 陶帅星
 * @Date: 2023-06-27 16:57:39
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-06-30 18:23:55
-->
<template>
  <div class="header">
    <div class="header-list">
      <Breadcrumb :levelList="state.levelList" />
      <el-dropdown>
        <el-avatar
          :size="40"
          :src="avatar ? avatar : 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"
        />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="$router.replace('/')">首页</el-dropdown-item>
            <el-dropdown-item @click="setPassword">修改密码</el-dropdown-item>
            <el-dropdown-item @click="loginOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <div class="header-tags">
      <Tags :dynamicTags="state.dynamicTags" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import routes from '@/router'

import { watch, reactive, computed } from 'vue'
import Tags from './components/Tags.vue'
import Breadcrumb from './components/Breadcrumb.vue'
import store from '@/store'
import { ElMessage } from 'element-plus'

const router: any = useRoute()
const state: any = reactive({
  levelList: [],
  dynamicTags: []
})
const avatar = computed(() => store.state.user.avatar)

watch(
  () => router.matched,
  (val) => {
    getBreadcrumb(val)
    getTags(val)

  },
  { immediate: true }
)
//get tags
function getTags (val: any) {
  const item: any = {
    path: val[val.length - 1].path,
    title: val[val.length - 1].meta.title,
    checked: false
  }
  let count = 0
  state.dynamicTags.forEach((element: { title: string }) => {

    if (element.title === item.title) {
      count++
    }
  });
  if (!count) {
    state.dynamicTags.push(item)

  }
}
// 面包屑
function getBreadcrumb (list: any) {
  console.log(list);

  let matched = list.filter((item: any) => item.meta && item.meta.title)
  const first = matched[0]

  if (!isDashboard(first)) {
    const nav: any = {
      path: '/home',
      meta: {
        title: '首页'
      }
    }
    matched = [nav].concat(matched)
  }

  state.levelList = matched.filter((item: any) => item.meta && item.meta.title && item.meta.breadcrumb !== false)
}
function isDashboard (meta: any) {
  const name = meta && meta.name
  if (!name) {
    return false
  }
  return name.trim().toLocaleLowerCase() === 'Home'.toLocaleLowerCase()
}

//修改密码
const setPassword = () => {
  ElMessage.warning('请联系管理员')

}

//退出登录
const loginOut = () => {
  store.dispatch('user/logout').then(() => {
    console.log(routes);

    routes.push('/login')
  }).catch(err => console.log(err))
}
</script>

<style lang="less" scoped>
.header {
  .header-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 20px 0 0;
  }

  .header-tags {
    border-top: 1px solid #ededed;
    padding: 10px 0;
  }

}

.el-avatar {
  background: none;
}
</style>
