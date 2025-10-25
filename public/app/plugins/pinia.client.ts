// /plugins/pinia.client.ts

export default defineNuxtPlugin((nuxtApp) => {
    useAuthStore().init(); // Initialize the auth store when the plugin is loaded
})