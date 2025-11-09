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
              Create Poll
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

            <!-- Poll Question -->
            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Question *
              </label>
              <input
                v-model="form.question"
                type="text"
                required
                placeholder="Ask a question..."
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>

            <!-- Poll Options -->
            <div class="space-y-3">
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Options
              </label>

              <div
                v-for="(option, index) in form.options"
                :key="index"
                class="flex items-center space-x-2">
                <div class="flex-1 relative">
                  <div
                    class="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center text-xs font-medium text-gray-600 dark:text-gray-400">
                    {{ index + 1 }}
                  </div>
                  <input
                    v-model="form.options[index]"
                    type="text"
                    :placeholder="`Option ${index + 1}`"
                    :required="index < 2"
                    class="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
                <button
                  v-if="form.options.length > 2"
                  type="button"
                  @click="removeOption(index)"
                  class="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                  <icon name="lucide:x" size="20" />
                </button>
              </div>

              <button
                v-if="form.options.length < 6"
                type="button"
                @click="addOption"
                class="w-full py-2 px-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <icon name="lucide:plus" size="16" class="inline mr-2" />
                Add option (max 6)
              </button>
            </div>

            <!-- Poll Duration -->
            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Poll Duration
              </label>
              <select
                v-model="form.duration"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                <option value="1">1 Day</option>
                <option value="3">3 Days</option>
                <option value="7">7 Days</option>
                <option value="14">14 Days</option>
                <option value="30">30 Days</option>
              </select>
            </div>

            <!-- Poll Settings -->
            <div class="space-y-3">
              <label class="flex items-center space-x-3 cursor-pointer">
                <input
                  v-model="form.allowMultipleChoices"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 border-gray-300 dark:border-gray-600 rounded focus:ring-blue-500" />
                <span class="text-sm text-gray-700 dark:text-gray-300">
                  Allow multiple choices
                </span>
              </label>

              <label class="flex items-center space-x-3 cursor-pointer">
                <input
                  v-model="form.showResults"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 border-gray-300 dark:border-gray-600 rounded focus:ring-blue-500" />
                <span class="text-sm text-gray-700 dark:text-gray-300">
                  Show results before voting
                </span>
              </label>
            </div>

            <!-- Actions -->
            <div
              class="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
              <p class="text-sm text-gray-500 dark:text-gray-400">
                {{ validOptions }} / 6 options
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
                  :disabled="loading || !isValid"
                  class="px-6 py-2 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all">
                  <span v-if="!loading">Create Poll</span>
                  <span v-else class="flex items-center space-x-2">
                    <icon
                      name="lucide:loader-2"
                      size="16"
                      class="animate-spin" />
                    <span>Creating...</span>
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

const form = reactive({
  question: "",
  options: ["", ""],
  duration: "7",
  allowMultipleChoices: false,
  showResults: false,
});

const isOpen = computed(() => activeModal.value === "poll");

const validOptions = computed(() => {
  return form.options.filter((opt) => opt.trim() !== "").length;
});

const isValid = computed(() => {
  return form.question.trim() !== "" && validOptions.value >= 2;
});

const addOption = () => {
  if (form.options.length < 6) {
    form.options.push("");
  }
};

const removeOption = (index: number) => {
  if (form.options.length > 2) {
    form.options.splice(index, 1);
  }
};

const handleSubmit = async () => {
  if (!isValid.value) return;

  loading.value = true;
  try {
    // Filter out empty options
    const validOptions = form.options.filter((opt) => opt.trim() !== "");

    // TODO: Implement API call to create poll
    console.log("Creating poll:", {
      ...form,
      options: validOptions,
    });
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Reset form
    form.question = "";
    form.options = ["", ""];
    form.duration = "7";
    form.allowMultipleChoices = false;
    form.showResults = false;

    closeModal();
  } catch (error) {
    console.error("Error creating poll:", error);
  } finally {
    loading.value = false;
  }
};

// Reset form when modal closes
watch(isOpen, (newVal) => {
  if (!newVal) {
    form.question = "";
    form.options = ["", ""];
    form.duration = "7";
    form.allowMultipleChoices = false;
    form.showResults = false;
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
