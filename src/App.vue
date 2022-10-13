<script setup>
import { RouterView } from 'vue-router'
import Loader from '@/components/Loader.vue'
import { useLoadingStore } from '@/stores/LoadingStore'

const loadingStore = useLoadingStore()
</script>

<template>
  <Loader :visible="loadingStore.getLoading" />
  <RouterView />
</template>
