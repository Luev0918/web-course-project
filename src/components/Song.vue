<script setup lang="ts">
import dayjs from 'dayjs'
import { onMounted, ref } from 'vue'
import { useMock } from '@/Test/useMock'

const mock = useMock()

const list = ref()
onMounted(() => {
  list.value = mock.getSongs()
  // console.log('list :>> ', list.value)
})
</script>

<template>
  <div id="current-time" class="time-display">
    {{ dayjs().format("YYYY年MM月DD日 HH:mm:ss") }}
  </div>

  <h2>礼堂金曲</h2>
  <div
    v-for="item in list"
    :key="item.id"
    class="mx-auto mb-2 w-160 flex items-center gap-4"
  >
    <div size-10 content-center rounded-full bg-red-3>
      {{ item.id }}
    </div>
    <img src="./Img/YYDZ.jpg">
    <div>{{ item.singer }}</div>
    <div class="flex-1 text-xl font-bold">
      《{{ item.songName }}》
    </div>
    <div text-right>
      {{ item.date }}
    </div>
  </div>
</template>

<style>
 .time-display {
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: #d1f0d1; /* 浅绿色背景 */
            padding: 12px 18px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            font-size: 18px;
            font-weight: 500;
            color: #2c3e50;
            z-index: 1000;
            border: 1px solid #a3d8a3;
            transition: all 0.3s ease;
        }
</style>
