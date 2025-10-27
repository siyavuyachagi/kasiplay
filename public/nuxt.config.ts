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
    '@nuxtjs/sitemap',
    '@vite-pwa/nuxt'
  ],

  devServer: {
    port: 3001,
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
    baseURL: "/",
    // buildAssetsDir: "assets",
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

        // iOS PWA support
        { name: "apple-mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
        { name: "apple-mobile-web-app-title", content: "KasiPlay" },
        { name: "mobile-web-app-capable", content: "yes" },
      ],

      link: [
        // Favicon links
        { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96x96.png" },
        { rel: "shortcut icon", href: "/favicon.ico" },

        // iOS home screen icons (required for Add to Home Screen)
        { rel: "apple-touch-icon", href: "/icons/apple-touch-icon.png" },

        // Manifest for PWA
        { rel: "manifest", href: "/manifest.webmanifest" },
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
  },


  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'KasiPlay',
      short_name: 'KasiPlay',
      description: 'Your ultimate sports and tournaments platform',
      theme_color: '#ffffff',
      background_color: '#000000',
      display: 'standalone',
      start_url: '/',
      orientation: 'portrait',
      icons: [
        {
          src: '/icons/web-app-manifest-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/icons/web-app-manifest-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: '/icons/web-app-manifest-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },

    workbox: {
      globPatterns: [], // Empty in dev - no precaching warnings
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    },

    devOptions: {
      enabled: true,
      type: 'module',
    },
  },
})