// /plugins/layouts/dashboard.client.ts

import { useDashboardLayoutStore } from "~/stores/dashboard-layout";

export default defineNuxtPlugin((nuxtApp) => {
    useDashboardLayoutStore().init(); // Initialize layout store when the plugin is loaded
});