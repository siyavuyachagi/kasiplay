// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['@/assets/css/app.css'],

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

  site: {
    url: 'https://web.kasiplay.com', // your live site
    gzip: true, // generates sitemap.xml.gz
  },
  sitemap: {
    exclude: [],
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

      script: [
        {
          id: "web.kasiplay.co.za-ldjson",
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "KasiPlay",
            "url": "https://web.kasiplay.co.za",
            "alternateName": "KasiPlay Web App",
            "description": "KasiPlay is a digital platform for community football tournaments, fixtures, and player stats in South Africa.",
            "publisher": {
              "@type": "Organization",
              "name": "Kinetic Studios",
              "logo": {
                "@type": "ImageObject",
                "url": "https://web.kasiplay.co.za/favicon-96x96.png"
              }
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://web.kasiplay.co.za/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }
      ]
    }
  }
})