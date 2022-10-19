<script setup>
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
      :class="[
        isActive
          ? 'bg-gray-900 text-white'
          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
        'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
      ]"
      @click="navigate"
    >
      <component
        :is="props.icon"
        :class="[
          isActive
            ? 'text-gray-300'
            : 'text-gray-400 group-hover:text-gray-300',
          'mr-3 flex-shrink-0 h-6 w-6',
        ]"
        aria-hidden="true"
      />
      {{ props.label }}
    </a>
  </router-link>
</template>
