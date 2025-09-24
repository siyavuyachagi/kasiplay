// stores/layout.ts
import { defineStore } from "pinia"
import { ref, computed, watch } from "vue"

const LAYOUT_STORAGE_KEY = "sc812-layout"

export const useLayoutStore = defineStore("layout", () => {
  // Sidebar state
  const sidebar = ref({
    isOpen: false,
  })

  // Toggle sidebar manually
  function toggleSidebar(force: boolean | null = null) {
    if (force !== null) {
      sidebar.value.isOpen = force
    } else {
      sidebar.value.isOpen = !sidebar.value.isOpen
    }
    saveState()
  }

  // Initialize store from localStorage
  function init() {
    if (import.meta.client) {
      const saved = localStorage.getItem(LAYOUT_STORAGE_KEY)
      if (saved) {
        try {
          const data = JSON.parse(saved)
          sidebar.value.isOpen = data.sidebar?.isOpen ?? sidebar.value.isOpen
        } catch (e) {
          console.error("Failed to parse layout from localStorage:", e)
        }
      }
    }
  }

  // Save current state to localStorage
  function saveState() {
    if (import.meta.client) {
      const data = {
        sidebar: sidebar.value,
      }
      localStorage.setItem(LAYOUT_STORAGE_KEY, JSON.stringify(data))
    }
  }

  // Computed for convenience
  const isSidebarOpen = computed(() => sidebar.value.isOpen)

  return {
    sidebar,
    isSidebarOpen,
    toggleSidebar,
    init,
    saveState,
  }
})
