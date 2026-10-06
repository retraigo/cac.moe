<template>
    <div class="flex gap-2 items-center">
        <svg width="100" height="20" viewbox="0 0 100 20" fill="none" stroke="black">
            <defs>
                <clipPath id="clipBg">
                    <path v-for="n in [0, 1, 2, 3, 4]"
                        :d="`M ${0 + 20 * n} 8 L ${6 + 20 * n} 13 L ${4 + 20 * n} 20 L ${10 + 20 * n} 16 L ${16 + 20 * n} 20 L ${14 + 20 * n} 13 L ${20 + 20 * n} 8 L ${13 + 20 * n} 8 L ${10 + 20 * n} 0 L ${7 + 20 * n} 8 L ${0 + 20 * n} 8`" />
                </clipPath>
                <linearGradient :id="`progress${score}`">
                    <stop :offset="`${score}%`" :stop-color="THEME_COLOR" />
                    <stop :offset="`${score + 1}%`" stop-color="black" />
                </linearGradient>
            </defs>
            <rect width="100" height="20"
                :style="`fill: url(#progress${score})`"
                clip-path="url(#clipBg)"
                 />

        </svg>
        <span class="text-zinc-600 dark:text-zinc-400">({{ score / 10 }})</span>
    </div>
</template>
<script setup lang="ts">
const { score } = defineProps<{ score: number }>()
</script>