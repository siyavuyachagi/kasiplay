// Simpler approach using global state
const isOpen = ref(false)

export const useLoginModal = () => {
    const open = () => {
        isOpen.value = true
        console.log("Login modal opened")
    }

    const close = () => {
        isOpen.value = false
    }

    return {
        isOpen: readonly(isOpen),
        open,
        close
    }
}