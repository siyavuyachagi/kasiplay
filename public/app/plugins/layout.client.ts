// /plugins/layout.client.ts

export default defineNuxtPlugin((nuxtApp) => {
    useLayoutStore().init(); // Initialize layout store when the plugin is loaded
})