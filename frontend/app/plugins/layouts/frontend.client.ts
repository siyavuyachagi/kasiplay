// /plugins/layouts/frontend.client.ts

import { useFrontendLayoutStore } from "~/stores/frontend-layout";

export default defineNuxtPlugin((nuxtApp) => {
    useFrontendLayoutStore().init(); // Initialize layout store when the plugin is loaded
    console.log('Frontend layout mounted')
});