<!--
 * @Descripttion: 
 * @version: 
 * @Author: 陶帅星
 * @Date: 2023-06-28 18:13:51
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-06-30 13:47:04
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

const props = defineProps({
  dynamicTags: {
    type: Array<any>,
    default: []
  },
})

//close tags
const handleClose = (tag: any) => {
  props.dynamicTags.splice(props.dynamicTags.indexOf(tag), 1)

}
</script>
<style lang="less" scoped>
.el-tag {
  margin-right: 5px;
  cursor: pointer;
}
</style>
