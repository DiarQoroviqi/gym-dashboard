<script setup>
defineProps({
  title: String,
})
</script>

<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
    <h1 class="text-2xl font-semibold text-gray-900">{{ title }}</h1>
  </div>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
    <div class="py-4">
      <slot></slot>
    </div>
  </div>
</template>

