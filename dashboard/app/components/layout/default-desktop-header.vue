<template>
  <header
    class="hidden lg:block bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
    <div class="flex items-center justify-between px-6 py-4">
      <div class="flex items-center space-x-4">
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
          {{ activeNav }}
        </h1>
        <div
          class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1">
          <span class="text-sm font-medium text-blue-700 dark:text-blue-400">{{
            activeTeam
          }}</span>
        </div>
      </div>

      <div class="flex items-center space-x-4">
        <!-- Search Bar -->
        <div class="relative">
          <div
            class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              class="h-4 w-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search..."
            class="pl-9 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64" />
        </div>

        <!-- Messages Icon -->
        <button
          class="flex justify-center relative p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
          <icon
            name="lucide:message-circle-more"
            size="20"
            class="text-gray-600 dark:text-gray-400" />
          <span
            class="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center"
            >3</span
          >
        </button>

        <!-- Notifications Bell -->
        <button
          class="flex justify-center relative p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
          <icon
            name="lucide:bell"
            size="20"
            class="text-gray-700 dark:text-gray-400" />
          <span
            class="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center"
            >5</span
          >
        </button>

        <button
          @click="themeStore.toggleTheme"
          class="flex justify-center p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
          <icon
            v-if="themeStore.isDark"
            name="lucide:sun"
            size="20"
            class="text-yellow-500" />

          <icon v-else name="lucide:moon" size="20" class="text-gray-400" />
        </button>

        <user-profile-dropdown />
      </div>
    </div>
  </header>
</template>


<script setup lang="ts">

const themeStore = useThemeStore();
const activeTeam = ref<string>("Orlando Pirates FC");
const activeNav = ref<string>("Dashboard");

</script>