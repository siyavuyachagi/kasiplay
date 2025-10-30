import { ref, type Ref } from 'vue'

interface LoginModalRef {
    openModal: () => void
    closeModal: () => void
}

export const useLoginModal = () => {
    const modalRef: Ref<LoginModalRef | null> = ref(null)

    const setModalRef = (refInstance: LoginModalRef) => {
        modalRef.value = refInstance
    }

    const openLoginModal = () => {
        modalRef.value?.openModal()
        console.log("modalRef opened...", modalRef.value)
    }

    const closeLoginModal = () => {
        modalRef.value?.closeModal()
    }

    return {
        setModalRef,
        openLoginModal,
        closeLoginModal
    }
}