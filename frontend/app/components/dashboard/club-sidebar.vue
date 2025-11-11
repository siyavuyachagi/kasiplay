<template>
  <aside
    class="fixed inset-y-0 left-0 z-50 w-64 sm:w-72 lg:w-80 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 lg:z-auto shadow-xl lg:shadow-none overflow-hidden flex flex-col lg:mt-0"
    :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'"
    style="top: 65px">
    <!-- Mobile Sidebar Header with Close Button -->
    <div
      class="lg:hidden flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
      <div class="flex items-center space-x-3">
        <div
          class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <span class="text-white text-sm font-semibold">⚽</span>
        </div>
        <span class="text-lg font-semibold text-gray-900 dark:text-white"
          >KasiPlay</span
        >
      </div>
      <button
        @click="sidebarOpen = false"
        class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
        <icon
          name="lucide:x"
          size="20"
          class="text-gray-500 dark:text-gray-400" />
      </button>
    </div>

    <!-- Scrollable Content -->
    <div
      class="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
      <!-- Team Overview Card -->
      <div class="p-4 lg:p-6 shrink-0">
        <div class="bg-blue-600 rounded-lg p-4 text-white">
          <p class="text-blue-100 text-sm font-medium">Active Team</p>
          <p class="text-2xl font-bold mt-1">Home Brothers FC</p>
          <div class="flex space-x-2 mt-4">
            <button
              class="flex-1 bg-white/20 hover:bg-white/30 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200">
              Players
            </button>
            <button
              class="flex-1 bg-white/20 hover:bg-white/30 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200">
              Matches
            </button>
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <nav class="px-4 lg:px-6 pb-6 space-y-1">
        <div
          v-for="item in navItems"
          :key="item.name"
          @click="selectNav(item.name)"
          class="group cursor-pointer rounded-lg p-3 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          :class="
            activeNav === item.name
              ? 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600'
              : ''
          ">
          <div class="flex items-center space-x-3">
            <div
              class="w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200"
              :class="
                activeNav === item.name
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
              ">
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div class="flex-1 min-w-0">
              <h3
                class="font-medium transition-colors duration-200 truncate"
                :class="
                  activeNav === item.name
                    ? 'text-blue-900 dark:text-blue-100'
                    : 'text-gray-900 dark:text-gray-100'
                ">
                {{ item.name }}
              </h3>
              <p
                class="text-sm transition-colors duration-200 truncate"
                :class="
                  activeNav === item.name
                    ? 'text-blue-700 dark:text-blue-200'
                    : 'text-gray-500 dark:text-gray-400'
                ">
                {{ item.description }}
              </p>
            </div>
            <div
              v-if="item.badge"
              class="px-2 py-1 text-xs font-bold rounded-full"
              :class="
                item.badge === 'HOT'
                  ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                  : item.badge === 'NEW'
                  ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                  : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
              ">
              {{ item.badge }}
            </div>
          </div>
        </div>
      </nav>

      <!-- Recent Activities -->
      <div class="px-4 lg:px-6 pb-6 space-y-4">
        <div class="border-t border-gray-200 dark:border-gray-700 pt-4">
          <h4 class="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">
            Recent Activities
          </h4>
          <div class="space-y-2">
            <div class="p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
              <p class="text-sm font-medium text-gray-900 dark:text-gray-100">
                Training Session Completed
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                Full squad attended morning training
              </p>
            </div>
            <div class="p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
              <p class="text-sm font-medium text-gray-900 dark:text-gray-100">
                Match Report Uploaded
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                Pirates vs Chiefs match analysis
              </p>
            </div>
            <div class="p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
              <p class="text-sm font-medium text-gray-900 dark:text-gray-100">
                Player Stats Updated
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                Individual performance metrics
              </p>
            </div>
            <div class="p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
              <p class="text-sm font-medium text-gray-900 dark:text-gray-100">
                Team Meeting Scheduled
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                Strategy discussion for next match
              </p>
            </div>
            <div class="p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
              <p class="text-sm font-medium text-gray-900 dark:text-gray-100">
                Media Interview
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                Coach press conference completed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <user-profile-dropdown-bottom-fixed />
  </aside>
</template>
