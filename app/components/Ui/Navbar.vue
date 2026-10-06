<template>
    <div class="flex items-center xl:justify-between max-w-7xl w-full mx-auto relative">
        <nav class="flex flex-col xl:flex-row items-center gap-5 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            <a v-for="link in MenuItems" :href="link.href" :key="link.href"
                class="border-b-2 border-transparent hover:text-black hover:border-black dark:hover:text-white dark:hover:border-white transition duration-200 ease-in-out">
                {{ link.name }}
            </a>
        </nav>
    </div>
</template>