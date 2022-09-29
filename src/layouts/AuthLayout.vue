<script setup>
import Sidenav from '@/components/Sidenav.vue'
</script>

<template>
  <Sidenav />

  <div class="md:pl-64 flex flex-col flex-1">
    <main class="flex-1">
      <div class="py-6">
        <slot></slot>
      </div>
    </main>
  </div>
</template>
