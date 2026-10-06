<template>
    <ColorScheme placeholder="---" tag="span">
        <div :class="`w-16 cursor-pointer relative transition duration-300 ease-in-out h-8 flex items-center ${toggled ? 'bg-zinc-800 relative' : 'bg-white'
            } rounded-full`" title="Toggle Dark Mode" @click="toggle">
            <div :class="`p-px flex justify-center items-center transition-all duration-300 ease-in-out transform absolute w-5 h-5 rounded-full ${toggled
                ? 'absolute left-9'
                : ''
                } left-1 top-1 bottom-1 my-auto`">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-auto block" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    :class="`fill-none stroke-2 transition duration-500 ease-in-out stroke-primary-700 dark:stroke-primary-300`">
                    <path :d="toggled
                        ? `M 7 12 A 5 5 0 0 0 17 12 A 5 5 0 0 0 7 12 M 12 1 L 12 3 M 12 21 L 12 23 M 4.22 4.22 L 5.64 5.64 M 18.36 18.36 L 19.78 19.78 M 1 12 L 3 12 M 21 12 L 23 12 M 3.22 19.78 L 5.64 18.36 M 18.36 5.64 L 19.78 4.22`
                        : `M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z`
                        " />
                </svg>
            </div>
            <div class="text-sm capitalize flex flex-row items-center hidden">
                <span v-if="toggled" class="absolute left-2.5">dark mode</span>
                <span v-else class="absolute left-7">light mode</span>
            </div>
        </div>
    </ColorScheme>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const toggled = computed(() => colorMode.preference === "dark")

const toggle = () => {
    if (toggled.value) colorMode.preference = "light"
    else colorMode.preference = "dark"
}

</script>