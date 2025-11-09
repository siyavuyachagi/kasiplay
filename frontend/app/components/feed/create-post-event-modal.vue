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
              Create Event
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

            <!-- Event Name -->
            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Event Name *
              </label>
              <input
                v-model="form.eventName"
                type="text"
                required
                placeholder="Community Football Tournament"
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>

            <!-- Description -->
            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Description *
              </label>
              <textarea
                v-model="form.description"
                rows="4"
                required
                placeholder="Tell people about your event..."
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"></textarea>
            </div>

            <!-- Date & Time -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Date *
                </label>
                <input
                  v-model="form.date"
                  type="date"
                  required
                  :min="today"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>

              <div>
                <label
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Time *
                </label>
                <input
                  v-model="form.time"
                  type="time"
                  required
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
            </div>

            <!-- Location -->
            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Location *
              </label>
              <div class="relative">
                <icon
                  name="lucide:map-pin"
                  size="20"
                  class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  v-model="form.location"
                  type="text"
                  required
                  placeholder="Alexandra Stadium, Johannesburg"
                  class="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
            </div>

            <!-- Event Type -->
            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Event Type
              </label>
              <select
                v-model="form.eventType"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                <option value="match">Match</option>
                <option value="tournament">Tournament</option>
                <option value="training">Training</option>
                <option value="meeting">Meeting</option>
                <option value="other">Other</option>
              </select>
            </div>

            <!-- Additional Options -->
            <div class="space-y-3">
              <label class="flex items-center space-x-3 cursor-pointer">
                <input
                  v-model="form.requiresRSVP"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 border-gray-300 dark:border-gray-600 rounded focus:ring-blue-500" />
                <span class="text-sm text-gray-700 dark:text-gray-300">
                  Require RSVP
                </span>
              </label>

              <label class="flex items-center space-x-3 cursor-pointer">
                <input
                  v-model="form.isPublic"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 border-gray-300 dark:border-gray-600 rounded focus:ring-blue-500" />
                <span class="text-sm text-gray-700 dark:text-gray-300">
                  Public event
                </span>
              </label>
            </div>

            <!-- Max Attendees (if RSVP enabled) -->
            <div v-if="form.requiresRSVP">
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Maximum Attendees (optional)
              </label>
              <input
                v-model.number="form.maxAttendees"
                type="number"
                min="1"
                placeholder="Unlimited"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>

            <!-- Cover Image Upload -->
            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Event Cover Image (optional)
              </label>

              <div
                v-if="!form.coverImage"
                class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center hover:border-blue-500 cursor-pointer transition-colors"
                @click="triggerFileInput">
                <icon
                  name="lucide:image"
                  size="32"
                  class="mx-auto text-gray-400 mb-2" />
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Click to upload cover image
                </p>
              </div>

              <div v-else class="relative">
                <img
                  :src="form.coverImage.preview"
                  alt="Event cover"
                  class="w-full h-48 object-cover rounded-lg" />
                <button
                  type="button"
                  @click="removeCoverImage"
                  class="absolute top-2 right-2 p-2 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors">
                  <icon name="lucide:x" size="16" />
                </button>
              </div>

              <input
                ref="fileInput"
                type="file"
                accept="image/*"
                @change="handleFileSelect"
                class="hidden" />
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
                placeholder="#CommunityEvent #LocalFootball"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div> -->

            <!-- Actions -->
            <div
              class="flex items-center justify-end space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
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
                <span v-if="!loading">Create Event</span>
                <span v-else class="flex items-center space-x-2">
                  <icon name="lucide:loader-2" size="16" class="animate-spin" />
                  <span>Creating...</span>
                </span>
              </button>
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
const fileInput = ref<HTMLInputElement | null>(null);

interface CoverImage {
  file: File;
  preview: string;
}

const today = computed(() => {
  const date = new Date();
  return date.toISOString().split("T")[0];
});

const form = reactive({
  eventName: "",
  description: "",
  date: "",
  time: "",
  location: "",
  eventType: "match",
  requiresRSVP: false,
  isPublic: true,
  maxAttendees: null as number | null,
  coverImage: null as CoverImage | null,
  hashtags: "",
});

const isOpen = computed(() => activeModal.value === "event");

const isValid = computed(() => {
  return (
    form.eventName.trim() !== "" &&
    form.description.trim() !== "" &&
    form.date !== "" &&
    form.time !== "" &&
    form.location.trim() !== ""
  );
});

const triggerFileInput = () => {
  fileInput.value?.click();
};

const handleFileSelect = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (file && file.type.startsWith("image/")) {
    if (form.coverImage) {
      URL.revokeObjectURL(form.coverImage.preview);
    }
    const preview = URL.createObjectURL(file);
    form.coverImage = { file, preview };
  }
};

const removeCoverImage = () => {
  if (form.coverImage) {
    URL.revokeObjectURL(form.coverImage.preview);
    form.coverImage = null;
  }
};

const handleSubmit = async () => {
  if (!isValid.value) return;

  loading.value = true;
  try {
    // TODO: Implement API call to create event post
    console.log("Creating event:", form);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Cleanup cover image
    if (form.coverImage) {
      URL.revokeObjectURL(form.coverImage.preview);
    }

    // Reset form
    form.eventName = "";
    form.description = "";
    form.date = "";
    form.time = "";
    form.location = "";
    form.eventType = "match";
    form.requiresRSVP = false;
    form.isPublic = true;
    form.maxAttendees = null;
    form.coverImage = null;
    form.hashtags = "";

    closeModal();
  } catch (error) {
    console.error("Error creating event:", error);
  } finally {
    loading.value = false;
  }
};

// Cleanup on unmount
onUnmounted(() => {
  if (form.coverImage) {
    URL.revokeObjectURL(form.coverImage.preview);
  }
});

// Reset form when modal closes
watch(isOpen, (newVal) => {
  if (!newVal) {
    if (form.coverImage) {
      URL.revokeObjectURL(form.coverImage.preview);
    }
    form.eventName = "";
    form.description = "";
    form.date = "";
    form.time = "";
    form.location = "";
    form.eventType = "match";
    form.requiresRSVP = false;
    form.isPublic = true;
    form.maxAttendees = null;
    form.coverImage = null;
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
