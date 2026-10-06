<template>
    <div class="flex flex-col items-center min-h-screen tracking-wide bg-zinc-100 dark:bg-zinc-900 dark:text-zinc-100">
        <UiHeader />
        <main class="lg:max-w-7xl flex-grow w-full">
            <slot></slot>
        </main>
        <section class="mt-8 w-full">
            <div class="w-full bg-primary-300 dark:bg-primary-700 p-2">
                <UiPreFooter />
            </div>
            <UiFooter />
        </section>
    </div>
</template>