<template>
  <button class="inline-flex items-center justify-center w-10 h-10 text-2xl bg-white border border-gray-300 rounded-full shadow-sm dark:bg-gray-100 hover:bg-gray-50 dark:hover:bg-gray-200 focus:outline-none focus:ring-2" :disabled="isDisable" :class="{ 'opacity-50 cursor-not-allowed': isDisable }">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  isDisable: {
    type: Boolean,
    default: false,
  },
})
</script>

<style>

</style>
