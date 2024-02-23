<script setup lang="ts">
import { useRoute } from 'vue-router'
import { api } from '@/api/form-render'

// 路由配置
definePage({
  name: 'render',
  path: '/',
  meta: {
    level: 1,
  },
})

const route = useRoute()
const renderRef = ref<any>(null)
// 页面状态
const state = reactive<any>({
  visible: false,
  // 表单定义 JSON
  formJson: '',
  // 渲染器数据源全局请求头
  headers: [{
    name: 'Authorization',
    value: 'Bearer iking',
  }, {
    name: 'X-Domain',
    value: route.query.domain,
  }, {
    name: 'X-App',
    value: route.query.app,
  }],
})

// 加载表单 JSON
async function loadFormJson() {
  const { page } = route.query

  const headers = { 'Content-Type': 'text/plain' }

  state.headers.forEach((item: any) => headers[item.name] = item.value)

  if(route.query.tenant){
    //
    headers['X-Tenant'] = route.query.tenant;
  }
  const config = {
    headers,
  }
  const res: any = await api.loadFormJson(page, config)
  if (!res.success){
    console.error(res.msg)
    return
  }
  if(res.data.json){
    state.formJson = JSON.parse(res.data.json)
    state.visible = true
  }
  
}

onMounted(() => {
  loadFormJson()
})
</script>

<template>
  <div class="container">
    <VFormRender
      v-if="state.visible"
      ref="renderRef"
      :global-dsv="{}"
      previewLayout="H5"
      :form-json="state.formJson"
      :global-datasource-headers="state.headers"
    />
  </div>
</template>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;

  background-color: var(--color-bg-page-content);

  .custom-title {
    margin-right: 4px;
    vertical-align: middle;
  }
}
</style>
