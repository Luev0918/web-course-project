<script setup>
import { ElOption, ElSelect } from 'element-plus'
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

onMounted(() => {
  // eslint-disable-next-line ts/no-use-before-define
  selectValue.value = locale.value
})
const selectValue = ref('')
function languageChange(value) {
  locale.value = value
}
</script>

<template>
  <div style="width: 100%;height: 100%">
    <div style="display: flex;justify-content: center">
      <ElSelect
        v-model="selectValue"
        placeholder="Select"
        size="large"
        style="width: 240px"
        @change="languageChange"
      >
        <ElOption label="中文" value="zh" />
        <ElOption label="English" value="en" />
        <ElOption label="日本語" value="ja" />
      </ElSelect>
    </div>
    <div style="height: 50%;display: flex;justify-content: center;align-items: center">
      <div>{{ $t('message.hello') }}</div>
    </div>
  </div>
</template>
