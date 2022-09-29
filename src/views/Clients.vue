<script setup>
import AuthLayout from '@/layouts/AuthLayout.vue'
import PageComponent from '@/components/DefaultPage.vue'
import ClientsList from '@/modules/Client/components/ClientsList.vue'
</script>

<template>
  <auth-layout>
    <page-component title="Clients">
      <clients-list></clients-list>
    </page-component>
  </auth-layout>
</template>
