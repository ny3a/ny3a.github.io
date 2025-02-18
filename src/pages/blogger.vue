<template>
    <div v-if="!isBloggerOpen">
        <ul role="list" class="divide-y divide-gray-100">
            <li v-for="(item, index) in bloggerInfo" :key="index" class="flex justify-between gap-x-6 py-5">
                <div class="flex min-w-0 gap-x-4">
                    <img :class="darkMode ? 'img-dark':'img-light'"
                        :src=item.img_src
                        alt="">
                    <div class="min-w-0 flex-auto">
                        <button @click="handleBlogger(index)" :class="darkMode ? 'text-title-dark' : 'text-title-light' ">{{ item.title }}</button>
                        <p class="mt-1 truncate text-xs/5 text-gray-500">{{ item.author }}</p>
                    </div>
                </div>
                <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                    <p :class="darkMode ? 'text-date-dark':'text-date-light'">{{ item.date }}</p>
                </div>
            </li>
        </ul>
    </div>
    <div v-if="isBloggerOpen">
        <VMarkdownView :mode="handleMode" :content="handleContent"></VMarkdownView>
        <br />
        <button @click="isBloggerOpen = false" type="button"
            class="rounded-md bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100">
            Back</button>

    </div>
</template>
<script setup lang="ts">
let isBloggerOpen: Ref<boolean> = ref(false)


// markdown 浏览器
import { ref, type Ref } from 'vue'
import { VMarkdownView } from 'vue3-markdown'
import '../layouts/markdown.css'
import dm from "../layouts/handleDarkmode.ts";
import bloggerInfo from '../assets/bloggerInfo.json'
const handleMode = dm.mode
const darkMode = dm.isDarkMode

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


const handleBlogger = (index: number) => {
    isBloggerOpen.value = true
    // console.log(index)
    try {
        handleContent.value = readFile(bloggerInfo[index].doc_src);
    } catch (error) {
        console.error('Failed to read file:', error);
    }
    console.log(handleContent.value)
}
</script>
<style>
.markdown-body[data-theme=light]{
  @apply bg-gray-200;
}
.markdown-body[data-theme=dark]{
  @apply bg-gray-700;
}
.text-title-light{
  @apply text-lg/6 font-semibold text-gray-900
}
.text-title-dark{
  @apply text-lg/6 font-semibold text-gray-200
}
.text-date-light{
  @apply text-sm/6 text-gray-900
}
.text-date-dark{
  @apply text-sm/6 text-gray-200
}
.img-light{
  @apply size-12 flex-none bg-gray-400 opacity-80 rounded-xl px-1.5 py-1.5
}
.img-dark{
  @apply size-12 flex-none bg-gray-500 opacity-80 rounded-xl py-1.5 px-1.5
}
</style>