<template>
  <div
    class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
    <!-- Top row: Avatar & input -->
    <div class="flex space-x-3">
      <div
        class="w-10 h-10 rounded-full bg-linear-to-br from-gray-400 to-gray-600 flex items-center justify-center text-white font-semibold shrink-0">
        ?
      </div>
      <button
        @click="openModal('text')"
        class="flex-1 text-left px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm sm:text-base">
        Share your thoughts...
      </button>
    </div>

    <!-- Bottom row: Actions -->
    <div
      class="flex items-center justify-center mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
      <!-- Left actions -->
      <div class="flex space-x-2">
        <button
          @click="openModal('photo')"
          class="flex items-center space-x-1 px-2 sm:px-3 py-1.5 text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          title="Share photos">
          <icon name="lucide:image" size="18" />
          <span class="hidden sm:inline">Photo</span>
        </button>
        <button
          @click="openModal('video')"
          class="flex items-center space-x-1 px-2 sm:px-3 py-1.5 text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          title="Share video">
          <icon name="lucide:video" size="18" />
          <span class="hidden sm:inline">Video</span>
        </button>
        <button
          @click="openModal('poll')"
          class="flex items-center space-x-1 px-2 sm:px-3 py-1.5 text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          title="Create poll">
          <icon name="lucide:bar-chart-2" size="18" />
          <span class="hidden sm:inline">Poll</span>
        </button>
        <button
          @click="openModal('stats')"
          class="flex items-center space-x-1 px-2 sm:px-3 py-1.5 text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          title="Share match stats">
          <icon name="lucide:activity" size="18" />
          <span class="hidden sm:inline">Stats</span>
        </button>
        <button
          @click="openModal('event')"
          class="flex items-center space-x-1 px-2 sm:px-3 py-1.5 text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          title="Create event">
          <icon name="lucide:calendar" size="18" />
          <span class="hidden sm:inline">Event</span>
        </button>
      </div>
    </div>

    <!-- Modals -->
    <CreatePostTextModal />
    <CreatePostPhotosModal />
    <CreatePostVideoModal />
    <CreatePostPollModal />
    <CreatePostStatsModal />
    <CreatePostEventModal />
  </div>
</template>

<script lang="ts" setup>
import { usePostModal } from "~/composables/use-post-modal";

const { openModal } = usePostModal();

// Import modals
const CreatePostTextModal = defineAsyncComponent(
  () => import("../../modals/create-post-text.modal.vue")
);
const CreatePostPhotosModal = defineAsyncComponent(
  () => import("~/components/modals/create-post-photos.modal.vue")
);
const CreatePostVideoModal = defineAsyncComponent(
  () => import("../../modals/create-post-video.modal.vue")
);
const CreatePostPollModal = defineAsyncComponent(
  () => import("../../modals/create-post-poll.modal.vue")
);
const CreatePostStatsModal = defineAsyncComponent(
  () => import("../../modals/create-post-stats.modal.vue")
);
const CreatePostEventModal = defineAsyncComponent(
  () => import("../../modals/create-post-event.modal.vue")
);
</script>
