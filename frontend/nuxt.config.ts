// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxtjs/sitemap'
  ],

  devServer: {
    port: 8081,
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})