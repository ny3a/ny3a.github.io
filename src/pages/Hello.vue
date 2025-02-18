<script setup lang="ts">
import Snow from '../components/snowEffect.ts'
import qqGroup from '../components/showQQgroup.vue'
import open from '../components/handleWindow.ts'
import introNy3a from '../components/introNy3a.vue'
import intro from '../components/handleIntro.ts'
import friendsNy3a from '../components/friendsNy3a.vue'
import isFriendLink from '../components/handleFriends.ts'
let snow = new Snow()
snow.start()
const jumpToOtherSides = (e:string) =>{
  window.location.href = e
}
const qqGroupOpen = () =>{
  open.value = true
}

const handleIntro = () =>{
  intro.value = true
}
const handleFriends = () =>{
  isFriendLink.value = true
}
</script>

<template>
    <div class="content" v-if="!intro && !isFriendLink">
      <div class="flex items-center">
        <div>
          <img @click="jumpToOtherSides('https://t.me/sannya_meow1')" width="200rem" height="200rem" src="../assets/Avatar.jpg" class="rounded-full" title="点击图片联系三喵喵" />
        </div>
        <div class="text-left px-20">
          <h1 class="text-3xl py-2">三喵的小窝窝</h1>
          <h2 class="py-2">喵喵喵</h2>
          <h3>she/they/cat🏳️‍⚧️，不是 MtF</h3>
        </div>
      </div>
      <div class="my-8">
        <button @click="handleIntro" type="button" class="buttons text-red-600">Intro</button>
        <button @click="jumpToOtherSides('tools/Guide')" type="button" class="buttons text-orange-600">wmc 工具箱</button>
        <button @click="qqGroupOpen" type="button" class="buttons text-yellow-600">QQ Group</button>
        <button @click="jumpToOtherSides('https://t.me/+Bt1c3_cpSkEyMzFl')" type="button" class="buttons text-green-600">Telegram Group</button>
        <button @click="jumpToOtherSides('https://github.com/ny3a')" type="button" class="buttons text-blue-600">Github</button>
        <button @click="handleFriends" type="button" class="buttons text-purple-600">友链</button>
      </div>
    </div>
  <div v-if="intro">
    <intro-ny3a />
  </div>
  <div v-if="isFriendLink" class="content">
    <friends-ny3a />
  </div>
  <qq-group />
</template>

<style>
body{
  background-color: #a5d6ff;
}
.content{
  height: 100vh;
  width: 100vw;
  @apply flex flex-col text-gray-500 justify-center items-center;
}
.buttons{
  @apply rounded-md bg-indigo-50 px-2.5 py-1.5 mx-2 text-sm font-semibold hover:bg-blue-200
}
</style>