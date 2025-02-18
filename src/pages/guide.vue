<template>
  <div>
    <VMarkdownView :mode="handleMode" :content="handleContent"></VMarkdownView>
  </div>
</template>
<script setup lang="ts">
// markdown 浏览器
import { ref, type Ref } from 'vue'
import { VMarkdownView } from 'vue3-markdown'
import '../layouts/markdown.css'
import dm from "../layouts/handleDarkmode.ts";

//console.log(dm.mode.value)
const handleMode = dm.mode


const handleContent: Ref<string | null> = ref('')

const readFile = (filePath: string) => {
  // 创建一个新的xhr对象
  let xhr: XMLHttpRequest = new XMLHttpRequest()
  const okStatus = document.location.protocol === 'file' ? 0 : 200
  xhr.open('GET', filePath, false)
  xhr.overrideMimeType('text/html;charset=utf-8')
  xhr.send(null)
  return xhr.status === okStatus ? xhr.responseText : null
}

handleContent.value = readFile('/guide.md');

</script>
<style>
.markdown-body[data-theme=light]{
  @apply bg-gray-200;
}
.markdown-body[data-theme=dark]{
  @apply bg-gray-700;
}
</style>