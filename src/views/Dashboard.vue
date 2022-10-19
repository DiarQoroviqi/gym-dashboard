<script setup>
import AuthLayout from '@/layouts/AuthLayout.vue'
import PageComponent from '@/components/DefaultPage.vue'
</script>

<template>
  <auth-layout>
    <page-component title="Dashboard">
      <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
        dashboard
      </div>
    </page-component>
  </auth-layout>
</template>




