// plugins/init.client.ts
import { useAuthStore } from '~/stores/auth';
import { useBrandingStore } from '~/stores/branding';
import { useLayoutStore } from '~/stores/layout'
import { useThemeStore } from '~/stores/theme'

export default defineNuxtPlugin(() => {
  // Use nextTick to ensure DOM is ready
  nextTick(() => {
    useAuthStore().init();
    useBrandingStore().init();
    useLayoutStore().init();
    useThemeStore().init();
  })
})