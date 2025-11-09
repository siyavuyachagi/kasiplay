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
              Create Photo Post
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
                class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold shrink-0">
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

            <!-- Photo Upload Area -->
            <div class="space-y-3">
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Photos (max 10)
              </label>

              <!-- Upload Button -->
              <div
                v-if="form.photos.length === 0"
                class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center hover:border-blue-500 dark:hover:border-blue-400 transition-colors cursor-pointer"
                @click="triggerFileInput"
                @dragover.prevent="isDragging = true"
                @dragleave.prevent="isDragging = false"
                @drop.prevent="handleDrop"
                :class="{
                  'border-blue-500 bg-blue-50 dark:bg-blue-900/20': isDragging,
                }">
                <icon
                  name="lucide:image-plus"
                  size="48"
                  class="mx-auto text-gray-400 dark:text-gray-500 mb-4" />
                <p class="text-gray-600 dark:text-gray-400 mb-2">
                  Click to upload or drag and drop
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-500">
                  PNG, JPG up to 10MB each
                </p>
              </div>

              <!-- Photo Preview Grid -->
              <div v-else class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div
                  v-for="(photo, index) in form.photos"
                  :key="index"
                  class="relative aspect-square rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 group">
                  <img
                    :src="photo.preview"
                    :alt="`Photo ${index + 1}`"
                    class="w-full h-full object-cover" />
                  <button
                    type="button"
                    @click="removePhoto(index)"
                    class="absolute top-2 right-2 p-1.5 bg-red-500 hover:bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <icon name="lucide:x" size="16" />
                  </button>
                </div>

                <!-- Add More Button -->
                <button
                  v-if="form.photos.length < 10"
                  type="button"
                  @click="triggerFileInput"
                  class="aspect-square rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 flex flex-col items-center justify-center space-y-2 transition-colors">
                  <icon name="lucide:plus" size="32" class="text-gray-400" />
                  <span class="text-sm text-gray-500">Add more</span>
                </button>
              </div>

              <!-- Hidden File Input -->
              <input
                ref="fileInput"
                type="file"
                accept="image/*"
                multiple
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
                placeholder="#TeamPhotos #MatchDay"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none placeholder-gray-400 dark:placeholder-gray-500" />
            </div>

            <!-- Actions -->
            <div
              class="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
              <p class="text-sm text-gray-500 dark:text-gray-400">
                {{ form.photos.length }} / 10 photos
              </p>

              <div class="flex items-center space-x-3">
                <button
                  type="button"
                  @click="closeModal"
                  class="px-4 py-2 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  Cancel
                </button>
                <button
                  type="submit"
                  :disabled="loading || form.photos.length === 0"
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
import { usePostModal } from "~/composables/use-post-modal";

const { activeModal, closeModal } = usePostModal();

const loading = ref(false);
const isDragging = ref(false);
const fileInput = ref<HTMLInputElement | null>(null);

interface Photo {
  file: File;
  preview: string;
}

const form = reactive({
  caption: "",
  photos: [] as Photo[],
  hashtags: "",
});

const isOpen = computed(() => activeModal.value === "photo");

const triggerFileInput = () => {
  fileInput.value?.click();
};

const handleFileSelect = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const files = target.files;
  if (files) {
    addPhotos(Array.from(files));
  }
};

const handleDrop = (event: DragEvent) => {
  isDragging.value = false;
  const files = event.dataTransfer?.files;
  if (files) {
    addPhotos(Array.from(files));
  }
};

const addPhotos = (files: File[]) => {
  const remainingSlots = 10 - form.photos.length;
  const filesToAdd = files.slice(0, remainingSlots);

  filesToAdd.forEach((file) => {
    if (file.type.startsWith("image/") && file.size <= 10 * 1024 * 1024) {
      const preview = URL.createObjectURL(file);
      form.photos.push({ file, preview });
    }
  });
};

const removePhoto = (index: number) => {
  const photo = form.photos?.[index];
  if (!photo) return;

  URL.revokeObjectURL(photo.preview);
  form.photos.splice(index, 1);
};

const handleSubmit = async () => {
  if (form.photos.length === 0) return;

  loading.value = true;
  try {
    // TODO: Implement API call to upload photos and create post
    console.log("Creating photo post:", form);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Cleanup previews
    form.photos.forEach((photo) => URL.revokeObjectURL(photo.preview));

    // Reset form
    form.caption = "";
    form.photos = [];
    form.hashtags = "";

    closeModal();
  } catch (error) {
    console.error("Error creating photo post:", error);
  } finally {
    loading.value = false;
  }
};

// Cleanup on unmount
onUnmounted(() => {
  form.photos.forEach((photo) => URL.revokeObjectURL(photo.preview));
});

// Reset form when modal closes
watch(isOpen, (newVal) => {
  if (!newVal) {
    form.photos.forEach((photo) => URL.revokeObjectURL(photo.preview));
    form.caption = "";
    form.photos = [];
    form.hashtags = "";
  }
});
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
