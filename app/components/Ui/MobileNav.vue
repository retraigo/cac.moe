<template>
    <div
        :class="`absolute w-full ${right ? `bottom-0 right-0` : `top-0 left-0`} z-40 ${navState ? `w-full` : `w-auto`}`">
        <div
            :class="`relative bg-transparent flex flex-col items-start gap-8 justify-start font-atmospheric overflow-y-auto min-h-screen ${navState ? `w-full` : `w-auto`}`">
            <button :class="`inline-flex items-center z-50 justify-center w-16 h-16 p-2 text-white focus:outline-none`"
                @click="toggle">
                <span :class="`sr-only`">Open menu</span>
                <svg :class="`block h-8 w-8 text-white stroke-2 stroke-white`" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 30 24">
                    <g>
                        <path :class="`transition-all duration-400 transform ease-in-out`" stroke-linecap="round"
                            stroke-linejoin="round" :d="navState ? `M 04 06 L 24 24` : `M 04 06 L 20 06`" />
                        <path :class="`transition-all duration-400 transform ease-in-out`" stroke-linecap="round"
                            stroke-linejoin="round" :d="navState ? `M 04 06 L 24 24` : `M 04 14 L 28 14`" />
                        <path :class="`transition-all duration-400 transform ease-in-out`" stroke-linecap="round"
                            stroke-linejoin="round" :d="navState ? `M 24 06 L 04 24` : `M 04 22 L 12 22`" />
                    </g>
                </svg>
            </button>
            <div
                :class="`h-screen flex flex-col justify-between transition bg-black/80 duration-500 ease-in-out transform absolute top-0 left-0 ${navState ? `translate-x-0` : `translate-x-[-200rem]`
                    } text-base w-full max-w-md lg:max-w-2xl text-white uppercase font-semibold bg-zinc-800 py-8 lg:py-2 px-2 min-h-screen overflow-y-auto border-r-2 border-primary-300 dark:border-primary-700`">
                <div class="mt-24 flex flex-col items-start gap-4 lg:gap-8">
                    <a v-for="(route, i) in links" :key="route.name" :href="route.href"
                        :class="`left-1 relative flex items-center gap-4 transition duration-500 ease-in-out transform z-40 group ${navState ? `bg-black/40` : `bg-transparent`} dark:bg-transparent p-2`">
                        <span class="sr-only">{{ route.name }}</span>
                        <component :is="useFeatherIcon(route.icon)" size="20"
                            :class="navState ? `fill-none stroke-2 transition duration-500 ease-in-out stroke-white hover:stroke-primary-300 dark:hover:stroke-primary-700` : ``" />
                        <div class="flex items-center">
                            <div class="block font-bold uppercase w-full text-sm">
                                {{ route.name }}
                            </div>
                        </div>
                    </a>
                </div>
                <MiscLogo class="w-48 relative mx-auto bottom-0" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { right, links } = defineProps<{
    right: boolean;
    links: { name: string; icon: string; href: string }[];
}>();
const navState = ref(false);
const toggle = () => (navState.value = !navState.value);
</script>