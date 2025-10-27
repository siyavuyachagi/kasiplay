// stores/layout.ts
import { defineStore } from "pinia"
import { ref, watch } from "vue"

export const useLayoutStore = defineStore("three-column-layout", () => {
  const STORAGE_KEY = "kp-tri-column-layout-store"
  const isLeftSidebarOpen = ref(false)
  const isRightSidebarOpen = ref(false)

  function toggleSidebar(sidebar: "left" | "right") {
    if (sidebar === "left") {
      isLeftSidebarOpen.value = !isLeftSidebarOpen.value
      // Close right sidebar if left is being opened
      if (isLeftSidebarOpen.value) {
        isRightSidebarOpen.value = false
      }
    } else {
      isRightSidebarOpen.value = !isRightSidebarOpen.value
      // Close left sidebar if right is being opened
      if (isRightSidebarOpen.value) {
        isLeftSidebarOpen.value = false
      }
    }
  }

  function openSidebar(sidebar: "left" | "right") {
    if (sidebar === "left") {
      isLeftSidebarOpen.value = true
      isRightSidebarOpen.value = false
    } else {
      isRightSidebarOpen.value = true
      isLeftSidebarOpen.value = false
    }
  }

  function closeSidebar(sidebar: "left" | "right") {
    if (sidebar === "left") {
      isLeftSidebarOpen.value = false
    } else {
      isRightSidebarOpen.value = false
    }
  }

  function init() {
    if (import.meta.client) {
      try {
        const saved = localStorage.getItem(STORAGE_KEY)
        if (saved) {
          const state = JSON.parse(saved)
          isLeftSidebarOpen.value = state.isLeftSidebarOpen ?? false
          isRightSidebarOpen.value = state.isRightSidebarOpen ?? false
        }
      } catch (error) {
        console.warn("Could not initialize layout:", error)
      }
    }
  }

  // Watch for changes and persist to localStorage
  if (import.meta.client) {
    watch(
      [isLeftSidebarOpen, isRightSidebarOpen],
      () => {
        try {
          localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify({
              isLeftSidebarOpen: isLeftSidebarOpen.value,
              isRightSidebarOpen: isRightSidebarOpen.value,
            })
          )
        } catch (error) {
          console.warn("Could not save layout state:", error)
        }
      },
      { deep: true }
    )
  }

  return {
    isLeftSidebarOpen,
    isRightSidebarOpen,
    toggleSidebar,
    openSidebar,
    closeSidebar,
    init,
  }
})