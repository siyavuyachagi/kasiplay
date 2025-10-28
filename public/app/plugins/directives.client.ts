// app/plugins/directives.client.ts

/**
 * Global v-click-outside directive.
 * Calls the provided function when a click occurs outside the bound element.
 */
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('click-outside', {
        mounted(el, binding) {
            el._clickOutside = (event: MouseEvent) => {
                if (!(el === event.target || el.contains(event.target))) {
                    if (typeof binding.value === 'function') {
                        binding.value(event);
                    } else {
                        console.warn('[v-click-outside] Provided value is not a function.');
                    }
                }
            };
            document.addEventListener('click', el._clickOutside);
        },
        unmounted(el) {
            document.removeEventListener('click', el._clickOutside);
        },
    });
});
