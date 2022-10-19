<script setup>
import NavLink from '@/layouts/navigation/NavLink.vue'
import { HomeIcon, UsersIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <NavLink label="Dashboard" to="/dashboard" :icon="HomeIcon" />
  <NavLink label="Clients" to="/clients" :icon="UsersIcon" />
</template>