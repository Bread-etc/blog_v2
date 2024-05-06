import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 重置样式
import '@unocss/reset/normalize.css'
import 'virtual:uno.css'

import router from './router'

const app = createApp(App);

app.use(router).mount("#app");