<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between">
      <span>
        <img :src="src" class="img-rating"/>
        <div class="text-overlay">
          <span class="text">{{ b50 }}</span>
        </div>
      </span>
      <span class="sm:flex-auto mt-1.5">
          <input type="text" name="username" v-model="username" @input="debouncedHandleInputChange" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" placeholder="输入水鱼查分器账号查查你的 Best 50" />
      </span>
      <span class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none py-1.5">
        <button type="button"
                class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Switch to Cards
        </button>
      </span>
    </div>
    <div class="mt-8 flow-root" v-if="score.errStatus.value != '400'">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="min-w-full py-2 sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
            <tr :class="isDarkMode ? 'font-dark' : 'font-light'">
              <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-0">Best 35</th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold ">曲绘</th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold ">分数</th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold ">Rating</th>
            </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
            <tr v-for="(chart, index) in b35" :key="index" :class="isDarkMode ? 'font-dark' : 'font-light'">
              <td class="py-4 pl-4 pr-3 text-sm font-medium sm:pl-0 text-left">{{ chart.title }}</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm">
                <img :src="handlePicsAndRate(index).src" class="w-20 h-20 rounded-full items-center"></img>
              </td>
              <td class="whitespace-nowrap px-3 py-12 text-sm flex justify-start">
                <p class="mr-2">{{ chart.achievements?.toFixed(4) }}</p>
                <img :src="handlePicsAndRate(index).rate" class="h:auto w-12 max-w-full"/>
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-left align-middle">{{ chart.ds?.toFixed(1) }} => {{ chart.ra }}</td>
            </tr>
            </tbody>
            <thead>
            <tr :class="isDarkMode ? 'font-dark' : 'font-light'">
              <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-0">Best 15</th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold ">曲绘</th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold ">分数</th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold ">Rating</th>
            </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
            <tr v-for="(chart, index) in b15" :key="index" :class="isDarkMode ? 'font-dark' : 'font-light'">

              <td class="py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">{{ chart.title }}</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm">
                <img :src="handlePicsAndRate15(index).src" class="w-20 h-20 rounded-full" />
              </td>
              <td class="whitespace-nowrap px-3 py-12 text-sm flex justify-start">
                <p class="mr-2">{{ chart.achievements?.toFixed(4) }}</p>
                <img :src="handlePicsAndRate15(index).rate" class="h:auto w-12 max-w-full"/>
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm">{{ chart.ds?.toFixed(1) }} => {{ chart.ra }}</td>
            </tr>
            </tbody>

          </table>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-8 flow-root px-5 py-2" v-if="score.errStatus.value == '400'">
    <div class="text-xl">
      查不到分，请检查查分器账号是否正确
    </div>
  </div>
</template>
<script setup lang="ts">

import scores from '../components/getBest50.ts'
import dm from '../layouts/handleDarkmode.ts'
import { ref } from 'vue'
import debounce from "../utils/debounce.ts";
const username = ref('Ny3a')
let score = scores.fetchBest50(username.value)
const b50 = score.b50
const b35 = score.b35
const b15 = score.b15
const src = score.frame
const isDarkMode = dm.isDarkMode

// const b35Total = () => {
//   let sum = 0
//   Array.from(b35.value).forEach((item) => {
//     sum += item.ra
//   })
//   return sum
// }
// const b15Total = () => {
//   let sum = 0
//   Array.from(b15.value).forEach((item) => {
//     sum += item.ra
//   })
//   return sum
// }
  // const debounce = () => {
  //
  // }
const handleInputChange = (e:any) => {
    username.value = e.target.value
    score = scores.fetchBest50(username.value)
}
const debouncedHandleInputChange = debounce((e:any) => handleInputChange(e), 1500)

function HandleSongId(num:number) {
  if (num >= 10000)
    return num - 10000;
  if (num < 10000) {
    return num
  }
}

const handlePicsAndRate = (e:number) => {
  const src: string[] = [];
  const rate: string[] = [];

// 假设 b35.value 是一个可迭代的对象
  const b35Value = Array.from(b35.value);

  b35Value.forEach((item, index) => {
    src[index] = 'https://assets.lxns.net/maimai/jacket/' + HandleSongId(item.song_id) + '.png';

    if (item.rate === 'sssp') {
      rate[index] = 'https://u.otogame.net/img/maimai/playlog/sssplus.png';
    } else if (item.rate === 'ssp') {
      rate[index] = 'https://u.otogame.net/img/maimai/playlog/ssplus.png';
    } else if (item.rate === 'sp') {
      rate[index] = 'https://u.otogame.net/img/maimai/playlog/splus.png';
    } else {
      rate[index] = 'https://u.otogame.net/img/maimai/playlog/' + item.rate + '.png';
    }
  });
  return {
    src:src[e], rate:rate[e]
  }
}
const handlePicsAndRate15 = (e:number) => {

  const src: string[] = [];
  const rate: string[] = [];

  const b15Value = Array.from(b15.value);


  b15Value.forEach((item, index) => {
    src[index] = 'https://assets.lxns.net/maimai/jacket/' + HandleSongId(item.song_id) + '.png'
    if (item.rate == 'sssp') {
      rate[index] = 'https://u.otogame.net/img/maimai/playlog/' + 'sssplus' + '.png'
    }
    else if (item.rate == 'ssp') {
      rate[index] = 'https://u.otogame.net/img/maimai/playlog/' + 'ssplus' + '.png'
    }
    else if (item.rate == 'sp') {
      rate[index] = 'https://u.otogame.net/img/maimai/playlog/' + 'splus' + '.png'
    }
    else {
      rate[index] = 'https://u.otogame.net/img/maimai/playlog/' + item.rate + '.png'
    }
  })
  return {
    src:src[e], rate:rate[e]
  }
}

</script>

<style scoped>
.font-dark {
  @apply text-gray-300
}

.font-light {
  @apply text-gray-900
}

table {
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
}

td {
  word-wrap: break-word;
  width: 100px;
}

img {
  margin-right: 16px;
  flex-shrink: 0;
}

.img-rating {
  position: absolute;
  flex-shrink: 0;
  width: 160px;
  height: 48px;
  top: 105px;
}

.text-overlay {
  position: relative;
  top: 15px;
  left: 170px;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0);
  color: white;
  padding: 1px;
  font-size: 20px;
  letter-spacing: 5px;
  width: 200px;
  height: 30px;
  font-family: Arial, sans-serif;
  flex-shrink: 0;
}

</style>