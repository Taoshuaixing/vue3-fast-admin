<!--
 * @Descripttion: 
 * @version: 
 * @Author: 陶帅星
 * @Date: 2023-06-28 18:13:51
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-06-29 15:54:05
-->
    
<template >
  <el-tag
    v-for="tag in dynamicTags"
    :key="tag.path"
    class="mx-1"
    closable
    :effect="tag.checked ? 'dark' : 'light'"
    :disable-transitions="false"
    @close="handleClose(tag)"
    @click="$router.replace(tag.path)"
  >
    {{ tag.title }}
  </el-tag>
</template>

<script lang="ts" setup>
import { ref, reactive, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const dynamicTags: any = reactive([])
watch(
  () => route.matched,
  (val) => {
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
  dynamicTags.forEach(element => {

    if (element.title === item.title) {
      count++
    }
  });
  if (!count) {
    dynamicTags.push(item)

  }
}

//close tags
const handleClose = (tag: any) => {
  dynamicTags.splice(dynamicTags.indexOf(tag), 1)

}
</script>
<style lang="less" scoped>
.el-tag {
  margin-right: 5px;
  cursor: pointer;
}
</style>
