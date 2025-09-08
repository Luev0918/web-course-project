import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import "uno.css"; // 导入 uno.css
import 'virtual:uno.css'

dayjs.locale('zh-cn')
const setRemUnit = () => {
  const docEl = document.documentElement;
  const pageWidth = docEl.clientWidth;
  docEl.style.fontSize = pageWidth / 100 + "px";
};

setRemUnit();
window.addEventListener("resize", setRemUnit);

createApp(App).mount('#app')
