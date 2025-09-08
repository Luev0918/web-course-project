<script lang="ts" setup>
import { ref } from 'vue'
import dayjs from 'dayjs';
import ZhihuHot from './components/ZhihuHot.vue';
import {Person} from '@bmh/tools';
import HelloWorld from './components/HelloWorld.vue';
const p = new Person("柏明虹","math");

defineProps<{ msg: string }>()
const theme = ref('default')
const onThemeChange = (e: string) => {
  theme.value = e
  document.documentElement.className = e;
};
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <div>{{ dayjs().format("YYYY年MM月DD日 HH:mm:ss") }}</div>
  <div>{{ p.name + ":" + p.slogan }}</div>

  
   <header flex items-center justify-center gap-2>
    <h2>主题切换</h2>
    <button @click="onThemeChange('default')">default</button>
    <button @click="onThemeChange('peaple')">peaple</button>
    <button @click="onThemeChange('spring')">spring</button>
  </header>
  <div mb-3 flex justify-center gap-2>
    <button bg-primary text-white>primary</button>
    <button bg-warning text-white>warning</button>
    <button bg-danger text-white>danger</button>
    <button bg-info text-white>info</button>
  </div>
  <HelloWorld msg="Vite + Vue" />
   <ZhihuHot />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

</style>

<style>
:root {
  --primary-color: #0084ff;
  --bg-color: #f6f6f6;
  --text-color: #1a1a1a;
  --card-bg: white;
  --border-color: #e7e7e7;
}

/* default主题 */
.default {
  --primary-color: #0084ff;
  --bg-color: #f6f6f6;
  --text-color: #1a1a1a;
  --card-bg: white;
  --border-color: #e7e7e7;
}

/* spring主题 */
.spring {
  --primary-color: #4caf50;
  --bg-color: #f1f8e9;
  --text-color: #1b5e20;
  --card-bg: #e8f5e9;
  --border-color: #c8e6c9;
}

/* peaple主题 */
.peaple {
  --primary-color: #f1403c;
  --bg-color: #ffebee;
  --text-color: #b71c1c;
  --card-bg: #ffcdd2;
  --border-color: #ef9a9a;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
  padding: 20px;
  transition: all 0.3s ease;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

h1, h2 {
  color: var(--primary-color);
}

button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;
}

button:hover {
  opacity: 0.9;
}

.button-primary {
  background-color: var(--primary-color);
  color: white;
}

.button-warning {
  background-color: #ff9800;
  color: white;
}

.button-danger {
  background-color: #f44336;
  color: white;
}

.button-info {
  background-color: #2196f3;
  color: white;
}
</style>