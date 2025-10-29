// stores/dashboard-layout.ts
import { defineStore } from "pinia"
import { ref, watch } from "vue"

export const useDashboardLayoutStore = defineStore("dashboard-layout", () => {
    const LAYOUT_STORAGE_KEY = "kp-dashboard-layout-store"
    const isSidebarOpen = ref(false)

    // ────────────────────────────────────────────────
    // SIDEBAR ACTIONS
    // ────────────────────────────────────────────────
    function toggleSidebar() {
        isSidebarOpen.value = !isSidebarOpen.value
        saveState()
    }

    function openSidebar() {
        isSidebarOpen.value = true
        saveState()
    }

    function closeSidebar() {
        isSidebarOpen.value = false
        saveState()
    }

    // ────────────────────────────────────────────────
    // STATE PERSISTENCE
    // ────────────────────────────────────────────────
    function init() {
        if (!import.meta.client) return
        try {
            const saved = localStorage.getItem(LAYOUT_STORAGE_KEY)
            if (saved) {
                const data = JSON.parse(saved)
                isSidebarOpen.value = data.isSidebarOpen ?? false
            }
        } catch (e) {
            console.error("Failed to parse layout from localStorage:", e)
        }
    }

    function saveState() {
        if (!import.meta.client) return
        localStorage.setItem(
            LAYOUT_STORAGE_KEY,
            JSON.stringify({ isSidebarOpen: isSidebarOpen.value })
        )
    }

    // Auto-save whenever state changes
    if (import.meta.client) {
        watch(isSidebarOpen, saveState)
    }

    return {
        isSidebarOpen,
        toggleSidebar,
        openSidebar,
        closeSidebar,
        init,
    }
})