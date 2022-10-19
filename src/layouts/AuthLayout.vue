<script setup>
import Sidebar from '@/layouts/sidebar/Sidebar.vue'
import Navbar from '@/layouts/navbar/Navbar.vue'
</script>

<template>
  <div>
    <Sidebar />
    <div class="flex flex-col md:pl-64">
      <Navbar />
      <main class="flex-1">
        <div class="py-6">
          <slot></slot>
        </div>
      </main>
    </div>
  </div>
</template>
