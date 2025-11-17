// /plugins/theme.client.ts
import { useThemeStore } from "~/stores/theme";

export default defineNuxtPlugin((nuxtApp) => {
    useThemeStore().init(); // Initialize the theme store when the plugin is loaded
})