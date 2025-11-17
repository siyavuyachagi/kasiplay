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
              Create Post
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

            <!-- Text Area -->
            <textarea
              v-model="form.content"
              rows="6"
              placeholder="What's on your mind?"
              class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none resize-none placeholder-gray-400 dark:placeholder-gray-500"
              required></textarea>

            <!-- Character Count -->
            <div class="flex justify-between items-center text-sm">
              <span
                class="text-gray-500 dark:text-gray-400"
                :class="{
                  'text-red-500': form.content.length > maxLength,
                }">
                {{ form.content.length }} / {{ maxLength }}
              </span>
            </div>

            <!-- Hashtags -->
            <!-- <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Hashtags (optional)
              </label>
              <input
                v-model="form.hashtags"
                type="text"
                placeholder="#KasiFootball #LocalTalent"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none placeholder-gray-400 dark:placeholder-gray-500" />
            </div> -->

            <!-- Visibility -->
            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Who can see this?
              </label>
              <select
                v-model="form.visibility"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none">
                <option value="public">Public</option>
                <option value="followers">Followers only</option>
                <option value="private">Only me</option>
              </select>
            </div>

            <!-- Actions -->
            <div
              class="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
              <div class="flex items-center space-x-2">
                <button
                  type="button"
                  class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  title="Add emoji">
                  <icon name="lucide:smile" size="20" class="text-gray-500" />
                </button>
                <button
                  type="button"
                  class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  title="Add mention">
                  <icon name="lucide:at-sign" size="20" class="text-gray-500" />
                </button>
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
                  :disabled="loading || !isValid"
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
const { activeModal, closeModal } = useCreatePost();

const loading = ref(false);
const maxLength = 5000;

const form = reactive({
  content: "",
  hashtags: "",
  visibility: "public",
});

const isOpen = computed(() => activeModal.value === "text");

const isValid = computed(() => {
  return form.content.trim().length > 0 && form.content.length <= maxLength;
});

const handleSubmit = async () => {
  if (!isValid.value) return;

  loading.value = true;
  try {
    // TODO: Implement API call to create post
    console.log("Creating post:", form);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Reset form
    form.content = "";
    form.hashtags = "";
    form.visibility = "public";

    closeModal();
  } catch (error) {
    console.error("Error creating post:", error);
  } finally {
    loading.value = false;
  }
};

// Reset form when modal closes
watch(isOpen, (newVal) => {
  if (!newVal) {
    form.content = "";
    form.hashtags = "";
    form.visibility = "public";
  }
});
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: transform 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
  transform: scale(0.95);
}
</style>
