<script lang="ts" setup>
import type { ZhihuHotItem } from '../types'
import { onMounted, ref } from 'vue'
import { fetchZhihuHotList } from '../utils/api'

const data = ref<ZhihuHotItem[]>([])
const filteredData = ref<ZhihuHotItem[]>([])
const currentFilter = ref('all')
const searchTerm = ref('')
const isLoading = ref(false)
const error = ref<string | null>(null)

// 获取数据
async function fetchData() {
  isLoading.value = true
  error.value = null

  try {
    const result = await fetchZhihuHotList()
    data.value = result
    filterData()
  }
  catch (err) {
    error.value = '获取数据失败，请刷新重试'
    console.error('获取知乎热榜数据失败:', err)
  }
  finally {
    isLoading.value = false
  }
}

// 过滤数据
function filterData() {
  filteredData.value = data.value.filter((item) => {
    const matchesType = currentFilter.value === 'all' || item.type === currentFilter.value
    const matchesSearch = searchTerm.value === ''
      || item.title.toLowerCase().includes(searchTerm.value)
      || item.excerpt.toLowerCase().includes(searchTerm.value)
    return matchesType && matchesSearch
  })
}

// 切换分类
function changeFilter(filter: string) {
  currentFilter.value = filter
  filterData()
}

// 搜索处理
function handleSearch(e: Event) {
  searchTerm.value = (e.target as HTMLInputElement).value.toLowerCase()
  filterData()
}

// 初始化
onMounted(() => {
  fetchData()
})
</script>

<template>
  <div class="zhihu-hot">
    <div class="zhihu-header">
      <h2>知乎热榜</h2>
      <button class="refresh-btn" @click="fetchData">
        刷新
      </button>
    </div>

    <div class="search-box">
      <input
        type="text"
        placeholder="搜索热榜内容..."
        :value="searchTerm"
        @input="handleSearch"
      >
    </div>

    <div class="tabs">
      <div
        class="tab" :class="[currentFilter === 'all' ? 'active' : '']"
        @click="changeFilter('all')"
      >
        全部
      </div>
      <div
        class="tab" :class="[currentFilter === 'science' ? 'active' : '']"
        @click="changeFilter('science')"
      >
        科学
      </div>
      <div
        class="tab" :class="[currentFilter === 'digital' ? 'active' : '']"
        @click="changeFilter('digital')"
      >
        数码
      </div>
      <div
        class="tab" :class="[currentFilter === 'sports' ? 'active' : '']"
        @click="changeFilter('sports')"
      >
        体育
      </div>
      <div
        class="tab" :class="[currentFilter === 'entertainment' ? 'active' : '']"
        @click="changeFilter('entertainment')"
      >
        娱乐
      </div>
    </div>

    <div class="hot-list">
      <div v-if="isLoading" class="loading">
        加载中...
      </div>
      <div v-else-if="error" class="error">
        {{ error }}
      </div>
      <template v-else>
        <div v-if="filteredData.length === 0" class="loading">
          没有找到相关内容
        </div>
        <div
          v-for="item in filteredData"
          :key="item.id"
          class="list-item"
        >
          <div class="rank" :class="[item.rank <= 3 ? 'top-three' : '']">
            {{ item.rank }}
          </div>
          <div class="content">
            <div class="title" @click="window.open(item.url, '_blank')">
              {{ item.title }}
            </div>
            <div class="metrics">
              <span>回答: {{ item.metrics.answer_count }}</span>
              <span>赞同: {{ item.metrics.vote_count }}</span>
              <span>关注: {{ item.metrics.follower_count }}</span>
            </div>
            <div class="excerpt">
              {{ item.excerpt }}
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.zhihu-hot {
  margin-top: 30px;
}

.zhihu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--primary-color);
}

.search-box {
  margin: 15px 0;
}

.search-box input {
  width: 100%;
  padding: 10px 15px;
  border: 1px solid var(--border-color);
  border-radius: 20px;
  font-size: 14px;
  background-color: var(--card-bg);
  color: var(--text-color);
}

.tabs {
  display: flex;
  background-color: var(--card-bg);
  border-radius: 8px 8px 0 0;
  overflow: hidden;
}

.tab {
  padding: 12px 20px;
  cursor: pointer;
  font-weight: 500;
  color: #8590a6;
  position: relative;
  flex: 1;
  text-align: center;
}

.tab.active {
  color: var(--primary-color);
  font-weight: 600;
}

.tab.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--primary-color);
}

.hot-list {
  background-color: var(--card-bg);
  border-radius: 0 0 8px 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 20px;
}

.list-item {
  display: flex;
  padding: 16px 20px;
  border-bottom: 1px solid var(--border-color);
  transition: background 0.2s;
}

.list-item:hover {
  background-color: rgba(0, 0, 0, 0.03);
}

.rank {
  font-size: 18px;
  font-weight: 700;
  color: #f1403c;
  min-width: 40px;
  text-align: center;
}

.rank.top-three {
  color: #f1403c;
}

.content {
  flex: 1;
}

.title {
  font-size: 16px;
  line-height: 1.4;
  margin-bottom: 8px;
  cursor: pointer;
  color: var(--text-color);
}

.title:hover {
  color: var(--primary-color);
}

.metrics {
  display: flex;
  font-size: 14px;
  color: #8590a6;
}

.metrics span {
  margin-right: 15px;
}

.excerpt {
  font-size: 14px;
  color: #646464;
  margin-top: 8px;
  line-height: 1.4;
}

.loading, .error {
  text-align: center;
  padding: 40px;
  color: #8590a6;
}

.error {
  color: #f1403c;
}

.refresh-btn {
  padding: 10px 20px;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

@media (max-width: 600px) {
  .tabs {
    flex-wrap: wrap;
  }

  .tab {
    flex: 1 0 33%;
  }

  .list-item {
    padding: 12px 15px;
  }

  .rank {
    min-width: 30px;
  }

  .metrics {
    flex-wrap: wrap;
  }

  .metrics span {
    margin-right: 10px;
    margin-bottom: 5px;
  }
}
</style>
