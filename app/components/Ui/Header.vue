<template>
    <header class="w-full p-4 xl:px-0 flex flex-col items-stretch bg-transparent">
        <div class="py-2 flex items-center w-full lg:max-w-7xl mx-auto justify-between border-b border-primary-300 dark:border-primary-700 xl:border-transparent dark:xl:border-transparent">
            <div class="flex items-center gap-2 ml-16 xl:ml-0">
                <MiscLogo class="w-24 z-20 relative" />
            </div>
            <div class="flex items-center gap-2">
                <LazyToggleDarkMode />
            </div>
        </div>
        <div class="hidden xl:block mt-4 w-full bg-primary-300 dark:bg-primary-700 p-2">
            <UiNavbar />
        </div>
        <div class="block xl:hidden">
            <UiFab :links="MenuItems" :right="false" />
        </div>
    </header>
</template>
<script setup lang="ts">
const navState = ref(false)
</script>