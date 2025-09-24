// stores/theme.ts
import { defineStore } from "pinia"
import { ref, computed } from "vue"

export const useThemeStore = defineStore("sc812-theme", () => {

  const isDark = ref(false)
  const theme = computed(() => (isDark.value ? "dark" : "light"))

  function toggleTheme() {
    isDark.value = !isDark.value
    applyTheme()
    saveToStorage()
  }

  function applyTheme() {
    if (import.meta.client) {
      const html = document.documentElement
      if (isDark.value) {
        html.setAttribute("data-theme", "dark")
      } else {
        html.removeAttribute("data-theme")
      }
    }
  }

  function saveToStorage() {
    if (import.meta.client) {
      try {
        localStorage.setItem("sc812-theme", theme.value)
      } catch (error) {
        console.warn("Could not save theme to localStorage:", error)
      }
    }
  }

  function init() {
    if (import.meta.client) {
      try {
        const saved = localStorage.getItem("sc812-theme")
        if (saved) {
          isDark.value = saved === "dark"
        } else {
          isDark.value = window.matchMedia("(prefers-color-scheme: dark)").matches
        }
      } catch (error) {
        console.warn("Could not initialize theme:", error)
        isDark.value = window.matchMedia("(prefers-color-scheme: dark)").matches
      }
      applyTheme()
    }
  }

  return {
    isDark,
    theme,
    toggleTheme,
    init,
  }
})