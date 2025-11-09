// composables/use-post-modal.ts

export type PostModalType = 'text' | 'photo' | 'video' | 'stats' | 'event' | 'poll' | null

const activeModal = ref<PostModalType>(null)

export const usePostModal = () => {
  const openModal = (type: PostModalType) => {
    activeModal.value = type
  }

  const closeModal = () => {
    activeModal.value = null
  }

  return {
    activeModal: readonly(activeModal),
    openModal,
    closeModal
  }
}