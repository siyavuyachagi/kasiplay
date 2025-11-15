// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/image', '@nuxt/fonts', '@nuxt/icon',
    '@pinia/nuxt',
    '@nuxtjs/sitemap',
  ],

  css: ['@/assets/css/app.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  devServer: {
    port: 8080,
  },

  site: {
    url: 'https://dashboard.kasiplay.com', // your live site
    gzip: true, // generates sitemap.xml.gz
  },
  
  sitemap: {
    urls: ['/auth/login', 'auth/register'],
    defaults: {
      changefreq: 'weekly',
      priority: 0.7,
    },
    autoLastmod: true,
    xsl: false
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en-za' // Set your language/region here - google accessibility
      },
      title: "Kasiplay | Your Ultimate Local Entertainment",
      meta: [
        { name: "description", content: "Kasiplay - Your Ultimate Entertainment Hub" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { charset: "utf-8" },
        { name: "theme-color", content: "#000000" },
        { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
      ],

      link: [
        { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96x96.png" },
        { rel: "shortcut icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      ],

    }
  }
})