<template>
  <div :class="['background', isDarkMode ? 'dark' : 'light']">
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog class="relative z-50 lg:hidden" @close="sidebarOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
                         enter-to="opacity-100" leave="transition-opacity ease-linear duration-300"
                         leave-from="opacity-100"
                         leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-900/80"/>
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
                           enter-from="-translate-x-full" enter-to="translate-x-0"
                           leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
                           leave-to="-translate-x-full">
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0"
                               enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100"
                               leave-to="opacity-0">
                <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                  <button type="button" class="-m-2.5 p-2.5" @click="sidebarOpen = false">
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="size-6 text-white" aria-hidden="true"/>
                  </button>
                </div>
              </TransitionChild>
              <!-- Sidebar component, swap this element with another sidebar if you like -->
              <div :class="['sidebar', isDarkMode ? 'dark' : 'light']">
                <div class="flex h-16 shrink-0 items-center">
                  <img class="h-8 w-auto" src="/src/pics/maimai.png"
                       alt="Your Company"/>
                </div>
                <nav class="flex flex-1 flex-col">
                  <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" class="-mx-2 space-y-1">
                        <li v-for="(item,index) in navigation" :key="item.name">
                          <p @click="handleClick(index)"
                             :class="[[item.current ? 'sidebarMenuActive' : 'sidebarMenuHover'], isDarkMode ? 'dark' : 'light']">
                            <component :is="item.icon"
                                       :class="[item.current ? 'text-white' : 'text-indigo-200 group-hover:text-white', 'size-6 shrink-0']"
                                       aria-hidden="true"/>
                            {{ item.name }}
                          </p>
                        </li>
                      </ul>
                    </li>
                    <li class="mt-auto flex items-center gap-x-2">
                      <span>
                        <SunIcon class="size-6 shrink-0 text-white"/>
                      </span>
                      <Switch @click="handleDarkMode"
                              :class="[isDarkMode ? 'bg-indigo-600' : 'bg-gray-200', 'relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2']">
                        <span class="sr-only">Use setting</span>
                        <span aria-hidden="true"
                              :class="[isDarkMode ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block size-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']"/>
                      </Switch>
                      <span>
                        <MoonIcon class="size-6 shrink-0 text-white"/>
                      </span>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div :class="['sidebar', isDarkMode ? 'dark' : 'light']">
        <div class="flex h-16 shrink-0 items-center">
          <img class="h-10 w-auto" src="/src/pics/maimai.png"
               alt="maimai"/>
        </div>
        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <li v-for="(item, index) in navigation" :key="item.name">
                  <p @click="handleClick(index)"
                     :class="[[item.current ? 'sidebarMenuActive' : 'sidebarMenuHover'], isDarkMode ? 'dark' : 'light']">
                    <component :is="item.icon"
                               :class="[item.current ? 'text-white' : 'text-indigo-200 group-hover:text-white', 'size-6 shrink-0']"
                               aria-hidden="true"/>
                    {{ item.name }}
                  </p>
                </li>
              </ul>
            </li>
            <li class="mt-auto flex items-center gap-x-2">
              <span>
                <SunIcon class="size-6 shrink-0 text-white"/>
              </span>
              <Switch @click="handleDarkMode"
                      :class="[isDarkMode ? 'bg-indigo-600' : 'bg-gray-200', 'relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2']">
                <span class="sr-only">Use setting</span>
                <span aria-hidden="true"
                      :class="[isDarkMode ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block size-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']"/>
              </Switch>
              <span>
                <MoonIcon class="size-6 shrink-0 text-white"/>
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="lg:pl-72">
      <div
          :class="['header', isDarkMode ? 'dark' : 'light']">
        <button type="button" class="-m-2.5 p-2.5 text-gray-700 lg:hidden" @click="sidebarOpen = true">
          <span class="sr-only">Open sidebar</span>
          <Bars3Icon class="size-6" aria-hidden="true"/>
        </button>

        <div class="text-xl font-semibold">
          {{ title }}
        </div>
      </div>

      <main class="py-10">
        <div class="px-4 sm:px-6 lg:px-8">
          <!--          <TransitionRoot>-->
          <router-view v-slot="{ Component }">
            <component :is="Component"/>
          </router-view>
          <!--          </TransitionRoot>-->
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import {
  Bars3Icon,
  ChartPieIcon,
  XMarkIcon,
  InformationCircleIcon,
  DocumentTextIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/vue/24/outline'
import {useRouter} from 'vue-router'
import "./handleDarkmode.css"
import { Switch } from '@headlessui/vue'
import dm from './handleDarkmode.ts'
const router = useRouter()
const handleDarkMode = dm.handleDarkMode
const isDarkMode = dm.isDarkMode
const navigation = ref([
  {name: 'Guide', href: '/tools/guide', icon: InformationCircleIcon, current: false},
  {name: 'Best 50', href: '/tools/best50', icon: ChartPieIcon, current: false},
  {name: 'Blogger', href: '/tools/blogger', icon: DocumentTextIcon, current: false},
])

//每次刷新后，初始化标题
const initialTitle = router.currentRoute.value.name

const title = ref(initialTitle)

//点击事件切换路由
const handleClick = async (index: number) => {
  await router.push(navigation.value[index].href)
  let nav = navigation.value
  title.value = nav[index].name
  nav[index].current = true
  for (let i = 0; i < nav.length; i++) {
    if (i != index) {
      nav[i].current = false
    }
  }
}

const initialActiveMenu = () => {
  // console.log(router.currentRoute.value.name)
  navigation.value.forEach(item => {
    if (item.href === router.currentRoute.value.path) {
      item.current = true
    } else {
      item.current = false
    }
  })
  // console.log(navigation.value)
}
//初始化 ref 值
initialActiveMenu()
const sidebarOpen = ref(false)

</script>
