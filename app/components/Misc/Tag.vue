<template>
  <span
    :class="`${
      type === 'success'
        ? 'bg-black/10 dark:bg-black/20 text-green-800 dark:text-green-200 border-l-2 border-green-800 dark:border-green-200'
        : type === 'info'
        ? 'bg-black/10 dark:bg-black/20 text-blue-800 dark:text-blue-200 border-l-2 border-blue-800 dark:border-blue-200'
        : type === 'warning'
        ? 'bg-black/10 dark:bg-black/20 text-yellow-800 dark:text-yellow-200 border-l-2 border-yellow-800 dark:border-yellow-200'
        : type === 'error'
        ? 'bg-black/10 dark:bg-black/20 text-rose-800 dark:text-rose-400 border-l-2 border-rose-800 dark:border-rose-400'
        : type === 'gray'
        ? 'bg-black/10 dark:bg-black/20 text-stone-800 dark:text-stone-200 border-l-2 border-stone-800 dark:border-stone-800'
        : 'bg-primary-300 dark:bg-primary-700 border-2 border-primary-900 dark:border-primary-100 text-black dark:text-white'
    }
    text-xs
    font-medium
    flex
    items-center
    px-1.5
    py-0.5
    rounded`"
  >
    <slot />
  </span>
</template>
<script setup lang="ts">
const { type } = defineProps<{
  type?: "success" | "info" | "warning" | "error" | "gray";
}>();
</script>