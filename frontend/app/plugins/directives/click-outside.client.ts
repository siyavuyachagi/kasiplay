// /plugins/directives/click-outside.client.ts

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('click-outside', {
        mounted(el, binding) {
            el._clickOutside = (event: MouseEvent) => {
                if (!(el === event.target || el.contains(event.target as Node))) {
                    if (typeof binding.value === 'function') {
                        binding.value(event)
                    } else {
                        console.warn('[v-click-outside] Provided value is not a function.')
                    }
                }
            }

            if (import.meta.client) {
                document.addEventListener('click', el._clickOutside)
            }
        },
        unmounted(el) {
            if (import.meta.client) {
                document.removeEventListener('click', el._clickOutside)
            }
        },
    })
})