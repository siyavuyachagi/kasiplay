// Initializes stores for UI
import { useAuthStore } from '~/stores/auth';
import { useBrandingStore } from '~/stores/branding';
import { useLayoutStore } from '~/stores/layout'
import { useThemeStore } from '~/stores/theme'

export default defineNuxtPlugin(() => {
  useAuthStore().init();
  useBrandingStore().init();
  useLayoutStore().init();
  useThemeStore().init();
})