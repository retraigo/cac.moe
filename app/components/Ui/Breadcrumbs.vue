<template>
  <div class="flex flex-wrap gap-2 items-center">
    <div v-for="item, idx in data" :key="route + `_` + item.name" class="flex flex-row items-center gap-2 h-[2rem]">
      <a :href="`${item.url}`" class="leading-8">{{ item.name }}</a>

      <span v-if = "idx !== data.length - 1" class="px-px"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
          stroke-linecap="round" stroke-linejoin="round" class="stroke-2 stroke-primary-700 dark:stroke-primary-300">
          <path d="M 12 0 L 18 12  L 12 24" />
        </svg>
      </span>
    </div>
  </div>
</template>
<script setup lang="ts">
const route = useRoute();

const { data } = defineProps<{ data: { name: string, url: string }[] }>()
</script>