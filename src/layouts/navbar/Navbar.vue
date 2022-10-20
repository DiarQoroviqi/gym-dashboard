<script setup>
import { Bars3BottomLeftIcon, BellIcon } from '@heroicons/vue/24/outline'
import ProfileMenu from '@/layouts/navbar/ProfileMenu.vue'
import { useSidebarStore } from '@/stores/SidebarStore'
</script>

<template>
  <div class="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
    <button type="button" class="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden" @click="useSidebarStore().showSidebar()">
      <span class="sr-only">Open sidebar</span>
      <Bars3BottomLeftIcon class="h-6 w-6" aria-hidden="true" />
    </button>
    <div class="flex flex-1 justify-end px-4">
      <div class="ml-4 flex items-center md:ml-6">
        <button type="button" class="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <span class="sr-only">View notifications</span>
          <BellIcon class="h-6 w-6" aria-hidden="true" />
        </button>

        <ProfileMenu />
      </div>
    </div>
  </div>
</template>