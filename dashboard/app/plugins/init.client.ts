// plugins/init.client.ts
import { useAuthStore } from '~/stores/auth';
import { useLayoutStore } from '~/stores/layout'
import { useThemeStore } from '~/stores/theme'

export default defineNuxtPlugin(() => {
  // Use nextTick to ensure DOM is ready
  nextTick(() => {
    useAuthStore().init();
    useLayoutStore().init();
    useThemeStore().init();
  })
})