// stores/frontend-layout.ts
import { defineStore } from "pinia"
import { ref, watch, computed } from "vue"

export const useFrontendLayoutStore = defineStore("frontend-layout", () => {
    const STORAGE_KEY = "kp-frontend-layout-store"

    // One source of truth
    const sidebars = ref({
        left: false,
        right: false,
    })

    // ────────────────────────────────────────────────
    // COMPUTED PROPERTIES (semantic aliases)
    // ────────────────────────────────────────────────
    const isLeftSidebarOpen = computed(() => sidebars.value.left)
    const isRightSidebarOpen = computed(() => sidebars.value.right)

    // ────────────────────────────────────────────────
    // ACTIONS
    // ────────────────────────────────────────────────
    function toggleSidebar(side: "left" | "right") {
        sidebars.value[side] = !sidebars.value[side]

        // Only one open at a time
        if (side === "left" && sidebars.value.left) sidebars.value.right = false
        if (side === "right" && sidebars.value.right) sidebars.value.left = false

        saveState()
    }

    function openSidebar(side: "left" | "right") {
        sidebars.value.left = side === "left"
        sidebars.value.right = side === "right"
        saveState()
    }

    function closeSidebar(side: "left" | "right") {
        sidebars.value[side] = false
        saveState()
    }

    function closeAllSidebars() {
        sidebars.value.left = false
        sidebars.value.right = false
        saveState()
    }

    // ────────────────────────────────────────────────
    // STATE PERSISTENCE
    // ────────────────────────────────────────────────
    function init() {
        if (!import.meta.client) return
        try {
            const saved = localStorage.getItem(STORAGE_KEY)
            if (saved) {
                const data = JSON.parse(saved)
                sidebars.value = { ...sidebars.value, ...data }
            }
        } catch (error) {
            console.warn("Could not initialize layout:", error)
        }
    }

    function saveState() {
        if (!import.meta.client) return
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(sidebars.value))
        } catch (error) {
            console.warn("Could not save layout state:", error)
        }
    }

    // Auto-persist when state changes
    if (import.meta.client) {
        watch(sidebars, saveState, { deep: true })
    }

    // ────────────────────────────────────────────────
    // EXPORTS
    // ────────────────────────────────────────────────
    return {
        // state
        sidebars,

        // computed
        isLeftSidebarOpen,
        isRightSidebarOpen,

        // actions
        toggleSidebar,
        openSidebar,
        closeSidebar,
        closeAllSidebars,
        init,
    }
})
