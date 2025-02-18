<script setup lang="ts">
import intro from "../components/handleIntro.ts"
const handleIntro = () =>{
  intro.value = false
}
</script>

<template>
  <div class="content">
    <div class="layoutText">
      <h1 class="text-3xl py-5">我是三喵</h1>
      <p class="py-2">性别为猫，是个猪咪，请用 she/her 来称呼我，还有不要叫我 MtF<br />
      前端学习中，正在努力成为全栈工程师，不喜欢打舞萌 DX<br />
      喜欢吃了睡，睡了吃，作息非常不习惯喵<br />
      有一只家养猫咪 <a href="https://x.com/@Luchan_Moeri">Twi@Luchan_Moeri</a><br />
      我的 Twitter <a href="https://x.com/@ny3a_is_a_cat">@ny3a_is_a_cat</a></p>
      <button @click="handleIntro" type="button" class="buttons text-purple-600 mx-0 my-1.5">Back</button>
    </div>
  </div>
</template>

<style scoped>
.content{
  height: 100vh;
  width: 100vw;
  @apply flex flex-col justify-center items-center

}
.layoutText{
  text-align: left;
  width: 35vw;
}
.buttons{
  @apply rounded-md bg-indigo-50 px-2.5 py-1.5 text-sm font-semibold hover:bg-blue-200
}

</style>