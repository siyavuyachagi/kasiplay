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