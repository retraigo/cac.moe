<template>
  <div :class="`fixed ${right ? `bottom-0 right-0` : `top-0 left-0`} z-40 ${navState ? `w-full` : `w-auto`}`">
    <div
      :class="`relative flex flex-col items-start gap-8 justify-start font-atmospheric overflow-y-auto min-h-screen ${navState ? `w-full` : `w-auto`}`">
      <button
        :class="`inline-flex items-center z-50 justify-center w-16 h-16 bg-black/60 p-2 text-white focus:outline-none`"
        @click="toggle">
        <span :class="`sr-only`">Open menu</span>
        <svg :class="`block h-8 w-8 text-white stroke-2 stroke-white`" xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 30 24">
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
      <a v-for="(route, i) in links" :key="route.name" :href="route.href"
        :class="`left-4 absolute block transition duration-500 ease-in-out transform z-40 group ${navState ? `bg-black/40` : `bg-transparent`} dark:bg-transparent p-2`"
        :style="{
          transform: `translate(0, ${navState ? (right ? -1 : 1) * 5 * (i + 1) : 0
            }rem)`,
        }">
        <span class="sr-only">{{ route.name }}</span>
        <component :is="useFeatherIcon(route.icon)" size="20"
          :class="navState ? `fill-none stroke-2 transition duration-500 ease-in-out stroke-white hover:stroke-royal-orange dark:hover:stroke-royal-yellow` : ``" />
        <div :class="`absolute overflow-hidden inset-y-0 w-[8rem] ${right ? `-left-24` : `left-8`
          } ${navState ? `max-w-[70rem]` : `max-w-0`
          } flex justify-end transition-all overflow-hidden duration-500 ease-in-out text-left`"
          :style="{ transform: `translate(${right ? `-2rem` : `1rem`})` }">
          <MiscTag class="w-full">
            <div class="font-bold uppercase w-full">
              {{ route.name }}
            </div>
          </MiscTag>
        </div>
      </a>
    </div>
    <div :class="`fixed w-full inset-0 ${navState ? `visible` : `invisible`
      } bg-black/60 z-30`" @click="() => (navState = false)" />
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