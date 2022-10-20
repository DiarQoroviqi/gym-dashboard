<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { useAuthStore } from '@/stores/AuthStore'
import { useRouter } from 'vue-router'

const router = useRouter()
const authStore = useAuthStore()

function logout() {
  authStore.logout().then(() => {
    authStore.removeUser()
    router.push({ name: 'login' })
  })
}
</script>

<template>
  <!-- Profile dropdown -->
  <Menu as="div" class="relative ml-3">
    <div>
      <MenuButton
        class="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <span class="sr-only">Open user menu</span>
        <img
          class="h-8 w-8 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </MenuButton>
    </div>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <MenuItem>
          <a class="block px-4 py-2 text-sm text-gray-700" @click="logout()"
            >Sign out</a
          >
        </MenuItem>
      </MenuItems>
      <!--          <a-->
      <!--            :href="item.href"-->
      <!--            :class="[-->
      <!--              active ? 'bg-gray-100' : '',-->
      <!--              'block px-4 py-2 text-sm text-gray-700',-->
      <!--            ]"-->
      <!--            >{{ item.name }}</a-->
    </transition>
  </Menu>
</template>
