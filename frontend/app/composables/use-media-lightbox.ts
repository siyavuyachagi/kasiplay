// /composables/use-media-lightbox-modal.ts

import type { Media } from "~/dtos/media.dto"

// Simpler approach using global state
const isVisible = ref(false)

export const useMediaLightBox = () => {
    const openMediaModal = (media: Media) => {
        isVisible.value = true
        console.log("Login modal opened")
    }

    const closeMediaModal = () => {
        isVisible.value = false
    }

    return {
        isVisible: readonly(isVisible),
        openMediaModal,
        closeMediaModal
    }
}