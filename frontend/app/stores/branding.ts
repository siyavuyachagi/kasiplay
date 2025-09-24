// stores/theme.ts
import { defineStore } from "pinia"
import { ref, computed } from "vue"

const BRANDING_STORAGE_KEY = "sc812-layout";

export const useBrandingStore = defineStore(BRANDING_STORAGE_KEY, () => {

    const sidebar = ref({
        isOpen: false,
        isPinned: false,
    });


    function toggleSide() {
        sidebar.value.isOpen = !sidebar.value.isOpen
    }

    function init() {
        if (import.meta.client) {
        }
    }

    return {
        sidebar,
        init,
        toggleSide,
    }
})