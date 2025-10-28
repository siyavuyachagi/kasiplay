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
        class="flex-1 text-left px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm sm:text-base">
        Share your thoughts...
      </button>
    </div>

    <!-- Bottom row: Actions -->
    <div
      class="flex items-center justify-between mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
      
      <!-- Left actions -->
      <div class="flex space-x-2">
        <button
          class="flex items-center space-x-1 px-2 sm:px-3 py-1.5 text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
          <icon name="lucide:image" size="18" />
          <span class="hidden sm:inline">Photo</span>
        </button>
        <button
          class="flex items-center space-x-1 px-2 sm:px-3 py-1.5 text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
          <icon name="lucide:video" size="18" />
          <span class="hidden sm:inline">Video</span>
        </button>
        <button
          class="flex items-center space-x-1 px-2 sm:px-3 py-1.5 text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
          <icon name="lucide:bar-chart-2" size="18" />
          <span class="hidden sm:inline">Poll</span>
        </button>
        <button
          class="flex items-center space-x-1 px-2 sm:px-3 py-1.5 text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
          <icon name="lucide:activity" size="18" />
          <span class="hidden sm:inline">Stats</span>
        </button>
        <button
          class="flex items-center space-x-1 px-2 sm:px-3 py-1.5 text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
          <icon name="lucide:calendar" size="18" />
          <span class="hidden sm:inline">Event</span>
        </button>
      </div>

      <!-- Right link -->
      <nuxt-link
        to="/auth/login"
        class="text-xs sm:text-sm text-blue-600 hover:text-blue-700 font-medium whitespace-nowrap">
        Sign in to post
      </nuxt-link>
    </div>
  </div>
</template>