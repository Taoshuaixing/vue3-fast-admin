<!--
 * @Descripttion: 
 * @version: 
 * @Author: 陶帅星
 * @Date: 2023-06-27 16:57:39
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-06-29 17:42:45
-->
<template>
  <div class="header">
    <div class="header-list">
      <el-breadcrumb separator="/">
        <transition-group name="breadcrumb">
          <el-breadcrumb-item
            v-for="(item, index) of levelList"
            :key="item.path"
          >
            <span
              v-if="item.redirect === 'noRedirect' || index == levelList.length - 1"
              class="no-redirect"
            >
              {{ item.meta.title }}
            </span>
            <router-link
              v-else
              :to="item.redirect || item.path"
            >{{ item.meta.title }}</router-link>
          </el-breadcrumb-item>
        </transition-group>
      </el-breadcrumb>
      <el-dropdown>
        <el-avatar
          :size="30"
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
      <Tags />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import routes from '@/router'

import { watch, reactive, computed } from 'vue'
import Tags from './components/Tags.vue'
import store from '@/store'
import { ElMessage } from 'element-plus'

const router: any = useRoute()
const levelList: any = reactive([])
const avatar = computed(() => store.state.user.avatar)

watch(
  () => router.matched,
  (val) => {
    getBreadcrumb(val)
  },
  { immediate: true }
)

// 面包屑
function getBreadcrumb (list: any) {
  levelList.length = 0
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

  levelList.push(...matched.filter((item: any) => item.meta && item.meta.title && item.meta.breadcrumb !== false))
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
  padding: 20px;

  .header-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header-tags {
    margin-top: 10px;
    border-top: 1px solid #ededed;
    padding-top: 10px;
  }

}

.el-avatar {
  background: none;
}
</style>
