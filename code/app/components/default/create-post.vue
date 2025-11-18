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
          @click="openModal('photos')"
          class="flex items-center space-x-1 px-2 sm:px-3 py-1.5 text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          title="Share photos">
          <icon name="lucide:image" size="18" />
          <span class="hidden sm:inline">Photo</span>
        </button>
        <button
          @click="openModal('videos')"
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
    <DefaultCreateTextPostModal />
    <DefaultCreatePhotosPostModal />
    <DefaultCreateVideosPostModal />
    <DefaultCreatePollPostModal />
    <DefaultCreateStatsPostModal />
    <DefaultCreateEventPostModal />
  </div>
</template>

<script lang="ts" setup>
const { openModal } = useCreatePost();

// Import modals
const DefaultCreateTextPostModal = defineAsyncComponent(
  () => import("~/components/default/modals/create-text-post-modal.vue")
);
const DefaultCreatePhotosPostModal = defineAsyncComponent(
  () => import("~/components/default/modals/create-photos-post-modal.vue")
);
const DefaultCreateVideosPostModal = defineAsyncComponent(
  () => import("~/components/default/modals/create-videos-post-modal.vue")
);
const DefaultCreatePollPostModal = defineAsyncComponent(
  () => import("~/components/default/modals/create-poll-post-modal.vue")
);
const DefaultCreateStatsPostModal = defineAsyncComponent(
  () => import("~/components/default/modals/create-stats-post-modal.vue")
);
const DefaultCreateEventPostModal = defineAsyncComponent(
  () => import("~/components/default/modals/create-event-post-modal.vue")
);
</script>
