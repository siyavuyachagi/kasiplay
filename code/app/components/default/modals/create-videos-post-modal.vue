<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-start justify-center bg-black/50 dark:bg-black/70 backdrop-blur-sm overflow-y-auto pt-20 pb-10"
        @click.self="closeModal">
        <div
          class="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 relative transition-all duration-300 mx-4">
          <!-- Header -->
          <div
            class="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 class="text-xl font-bold text-gray-900 dark:text-white">
              Create Video Post
            </h2>
            <button
              @click="closeModal"
              class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Close">
              <icon name="lucide:x" size="20" class="text-gray-500" />
            </button>
          </div>

          <!-- Content -->
          <form @submit.prevent="handleSubmit" class="p-4 space-y-4">
            <!-- User Info -->
            <div class="flex items-center space-x-3">
              <div
                class="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold shrink-0">
                SC
              </div>
              <div>
                <p class="font-semibold text-gray-900 dark:text-white">
                  Siyavuya Chagi
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  @siyavuyachagi
                </p>
              </div>
            </div>

            <!-- Caption -->
            <textarea
              v-model="form.caption"
              rows="3"
              placeholder="Write a caption..."
              class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none resize-none placeholder-gray-400 dark:placeholder-gray-500"></textarea>

            <!-- Video Upload Area -->
            <div class="space-y-3">
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Video
              </label>

              <!-- Upload Button -->
              <div
                v-if="!form.video"
                class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center hover:border-blue-500 dark:hover:border-blue-400 transition-colors cursor-pointer"
                @click="triggerFileInput"
                @dragover.prevent="isDragging = true"
                @dragleave.prevent="isDragging = false"
                @drop.prevent="handleDrop"
                :class="{ 'border-blue-500 bg-blue-50 dark:bg-blue-900/20': isDragging }">
                <icon
                  name="lucide:video"
                  size="48"
                  class="mx-auto text-gray-400 dark:text-gray-500 mb-4" />
                <p class="text-gray-600 dark:text-gray-400 mb-2">
                  Click to upload or drag and drop
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-500">
                  MP4, MOV, AVI up to 100MB
                </p>
              </div>

              <!-- Video Preview -->
              <div v-else class="space-y-3">
                <div class="relative rounded-lg overflow-hidden bg-black">
                  <video
                    :src="form.video.preview"
                    controls
                    class="w-full max-h-96">
                    Your browser does not support the video tag.
                  </video>
                  <button
                    type="button"
                    @click="removeVideo"
                    class="absolute top-3 right-3 p-2 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors">
                    <icon name="lucide:x" size="16" />
                  </button>
                </div>

                <!-- Video Info -->
                <div class="flex items-center justify-between text-sm">
                  <div class="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                    <icon name="lucide:file-video" size="16" />
                    <span>{{ form.video.file.name }}</span>
                  </div>
                  <span class="text-gray-500 dark:text-gray-500">
                    {{ formatFileSize(form.video.file.size) }}
                  </span>
                </div>
              </div>

              <!-- Hidden File Input -->
              <input
                ref="fileInput"
                type="file"
                accept="video/*"
                @change="handleFileSelect"
                class="hidden" />
            </div>

            <!-- Hashtags -->
            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Hashtags (optional)
              </label>
              <input
                v-model="form.hashtags"
                type="text"
                placeholder="#MatchHighlights #Goals"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none placeholder-gray-400 dark:placeholder-gray-500" />
            </div>

            <!-- Actions -->
            <div
              class="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
              <div class="text-sm text-gray-500 dark:text-gray-400">
                <icon name="lucide:info" size="14" class="inline mr-1" />
                Max 100MB
              </div>

              <div class="flex items-center space-x-3">
                <button
                  type="button"
                  @click="closeModal"
                  class="px-4 py-2 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  Cancel
                </button>
                <button
                  type="submit"
                  :disabled="loading || !form.video"
                  class="px-6 py-2 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all">
                  <span v-if="!loading">Post</span>
                  <span v-else class="flex items-center space-x-2">
                    <icon
                      name="lucide:loader-2"
                      size="16"
                      class="animate-spin" />
                    <span>Posting...</span>
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const { activeModal, closeModal } = useCreatePost()

const loading = ref(false)
const isDragging = ref(false)
const fileInput = ref<HTMLInputElement | null>(null)

interface Video {
  file: File
  preview: string
}

const form = reactive({
  caption: '',
  video: null as Video | null,
  hashtags: '',
})

const isOpen = computed(() => activeModal.value === 'videos')

const triggerFileInput = () => {
  fileInput.value?.click()
}

const handleFileSelect = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  if (file) {
    addVideo(file)
  }
}

const handleDrop = (event: DragEvent) => {
  isDragging.value = false
  const file = event.dataTransfer?.files?.[0]
  if (file) {
    addVideo(file)
  }
}

const addVideo = (file: File) => {
  const maxSize = 100 * 1024 * 1024 // 100MB
  if (file.type.startsWith('video/') && file.size <= maxSize) {
    if (form.video) {
      URL.revokeObjectURL(form.video.preview)
    }
    const preview = URL.createObjectURL(file)
    form.video = { file, preview }
  } else {
    alert('Please select a valid video file under 100MB')
  }
}

const removeVideo = () => {
  if (form.video) {
    URL.revokeObjectURL(form.video.preview)
    form.video = null
  }
}

const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
}

const handleSubmit = async () => {
  if (!form.video) return

  loading.value = true
  try {
    // TODO: Implement API call to upload video and create post
    console.log('Creating video post:', form)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    // Cleanup preview
    if (form.video) {
      URL.revokeObjectURL(form.video.preview)
    }
    
    // Reset form
    form.caption = ''
    form.video = null
    form.hashtags = ''
    
    closeModal()
  } catch (error) {
    console.error('Error creating video post:', error)
  } finally {
    loading.value = false
  }
}

// Cleanup on unmount
onUnmounted(() => {
  if (form.video) {
    URL.revokeObjectURL(form.video.preview)
  }
})

// Reset form when modal closes
watch(isOpen, (newVal) => {
  if (!newVal) {
    if (form.video) {
      URL.revokeObjectURL(form.video.preview)
    }
    form.caption = ''
    form.video = null
    form.hashtags = ''
  }
})
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>