<script setup>
import { defineProps } from 'vue'

const props = defineProps(['to', 'label', 'icon'])
</script>

<template>
  <router-link
    :to="props.to"
    v-slot="{ href, route, navigate, isActive, isExactActive }"
    custom
  >
    <a
      :href="href"
      class="group flex items-center px-2 py-2 text-sm font-medium rounded-md"
      :class="{
        'bg-gray-900 text-white': isActive,
        'text-gray-300 hover:bg-gray-700 hover:text-whit': !isActive,
      }"
      @click="navigate"
    >
      <component
        :is="props.icon"
        class="mr-3 flex-shrink-0 h-6 w-6"
        :class="{
          'text-gray-300': isActive,
          'text-gray-400 group-hover:text-gray-300': !isActive,
        }"
        aria-hidden="true"
      />
      {{ props.label }}
    </a>
  </router-link>
</template>
