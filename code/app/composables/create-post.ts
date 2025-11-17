// composables/create-post.ts

export type PostModalType = 'text' | 'photos' | 'videos' | 'stats' | 'event' | 'poll' | null

const activeModal = ref<PostModalType>(null)

export const useCreatePost = () => {
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