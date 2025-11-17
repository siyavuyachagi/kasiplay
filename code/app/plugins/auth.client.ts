// /plugins/auth.client.ts
import { useAuthStore } from "~/stores/auth";

export default defineNuxtPlugin((nuxtApp) => {
    useAuthStore().init(); // Initialize the auth store when the plugin is loaded
})