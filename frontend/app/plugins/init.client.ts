// The plugin (plugins/theme.client.ts) automatically initializes the theme when your app loads. Without it, the theme won't be set until a user manually clicks a button. It:

// Checks localStorage for saved theme preference
// Falls back to system preference (dark/light mode)
// Applies the theme immediately on page load

import { useThemeStore } from '~/stores/theme'

export default defineNuxtPlugin(() => {
  const themeStore = useThemeStore()
  themeStore.initTheme()
})