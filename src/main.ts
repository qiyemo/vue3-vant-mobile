import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import IkingFormRender from 'mo-form-render-mobile'
import App from '@/App.vue'
import router from '@/router'

import 'virtual:uno.css'

import '@/styles/app.scss'

// Vant 桌面端适配
import '@vant/touch-emulator'

/* --------------------------------
Vant 中有个别组件是以函数的形式提供的，
包括 Toast，Dialog，Notify 和 ImagePreview 组件。
在使用函数组件时，unplugin-vue-components
无法自动引入对应的样式，因此需要手动引入样式。
------------------------------------- */
// 2. 引入组件样式
import 'vant/lib/index.css';
import 'vant/es/toast/style'
import 'vant/es/dialog/style'
import 'vant/es/notify/style'
import 'vant/es/image-preview/style'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(router)
app.use(pinia)

app.use(IkingFormRender)

app.config.errorHandler = (err) => {
  console.error(err)
}
app.mount('#app')
