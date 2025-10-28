// /plugins/theme.client.ts

export default defineNuxtPlugin((nuxtApp) => {
    useThemeStore().init(); // Initialize the theme store when the plugin is loaded
})