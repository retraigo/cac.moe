import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/a11y',
    '@nuxt/ui',
    "@nuxtjs/color-mode",
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@vueuse/nuxt/module',
    'nuxt-aos',
    'nuxt-feather-icons',
    'nuxt-twemoji',
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2024-04-03',
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
