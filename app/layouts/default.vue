<template>
    <WrapperDefault>
        <div class="mt-4 px-2 lg:flex gap-4 w-full">
            <section class="shrink-0 w-full">
                <slot></slot>
            </section>
        </div>
    </WrapperDefault>
</template>

<script setup lang="ts">
const fabNav = [

]

const allSeries = useAsyncData(async () => await useSeries())
</script>