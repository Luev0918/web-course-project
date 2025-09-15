/* 引入 ElementPlus */
import ElementPlus from 'element-plus'
import { createApp } from 'vue'
import App from './App.vue'
import i18n from './locale/index.ts'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(i18n, ElementPlus)

app.mount('#app')
