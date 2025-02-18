<template>
  <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <li v-for="person in people" :key="person.name" class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
      <div class="flex w-full items-center justify-between space-x-6 p-6">
        <div class="flex-1 truncate">
          <div class="flex items-center space-x-3">
            <h3 class="truncate text-sm font-medium text-gray-900">{{ person.name }}</h3>
            <span class="inline-flex shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">{{ person.role }}</span>
          </div>
          <p class="mt-1 truncate text-sm text-gray-500">{{ person.title }}</p>
        </div>
        <img class="size-10 shrink-0 rounded-full bg-gray-300" :src="person.imageUrl" alt="" />
      </div>
      <div>
        <div class="-mt-px flex divide-x divide-gray-200">
          <div class="-ml-px flex w-0 flex-1">
            <a :href="`${person.link}`" class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
              <LinkIcon class="size-5 text-gray-400" aria-hidden="true" />
              Link
            </a>
          </div>
        </div>
      </div>
    </li>
  </ul>
  <div class="py-3">
    <button @click="handleFriends" type="button" class="buttons text-purple-600">Back</button>
  </div>
</template>

<script setup>
import { LinkIcon } from '@heroicons/vue/20/solid'
import isFriendLink from "./handleFriends.ts";
import people from "../assets/friendLink.json"
const handleFriends = () => {
  isFriendLink.value = false
}

</script>