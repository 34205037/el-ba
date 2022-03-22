<template>
  <ul>
  <li>直接点击 open Msgbox 按钮，此时显示正常</li>
  <li>点击view1按钮</li>
  <li>再次点击 open Msgbox，布局样式出现问题</li>
  </ul>
  <div class="toolbar" v-loading="loading">
    <el-button :icon="Document" @click="router.push('/')">home</el-button>
    <el-button :icon="Document" @click="router.push('/view1')">view 1</el-button>
    <el-button :icon="Document" @click="openMsgBox">open MsgBox</el-button>
    <el-button :icon="Document" @click="router.push('/more')">更复杂用例中的截图</el-button>
    <el-button :icon="Document" @click="router.push('/split-button')">split-button的问题</el-button>
  </div>
  <div class="content">
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import { Document } from "@element-plus/icons-vue";
import { useRouter } from 'vue-router'
// import 'element-plus/es/components/message-box/style/css'
import { ElMessageBox } from 'element-plus'
const loading = false
const router = useRouter();

const openMsgBox = () => {
  ElMessageBox.confirm(
    'hello world',
    'warning',
    {
      type: 'warning',
    }
  ).then(() => { }).catch(() => { })
};
</script>

<style scoped>
.toolbar {
  background-color: #ddd;
  padding: 20px;
  margin-bottom: 20px;
}

.content {
  background-color: #ddd;
  padding: 20px;
}
</style>