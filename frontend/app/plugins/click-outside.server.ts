// /plugins/directives/click-outside.server.ts

/**
 * Server-side stub for v-click-outside directive.
 * Does nothing during SSR to prevent warnings.
 */
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('click-outside', {
        mounted() {
            // No-op on server
        },
        unmounted() {
            // No-op on server
        },
    });
});