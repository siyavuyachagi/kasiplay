// /composables/use-login-modal.ts

// Simpler approach using global state
const isLoginModalOpen = ref(false)

export const useLoginModal = () => {
    const openLoginModal = () => {
        isLoginModalOpen.value = true
        console.log("Login modal opened")
    }

    const closeLoginModal = () => {
        isLoginModalOpen.value = false
    }

    return {
        isLoginModalOpen: readonly(isLoginModalOpen),
        openLoginModal,
        closeLoginModal
    }
}