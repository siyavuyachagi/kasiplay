<template>
  <div
    class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200"
  >
    <!-- Mobile Header -->
    <header
      class="lg:hidden bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 shadow-sm"
    >
      <div class="flex items-center justify-between px-4 py-3">
        <div class="flex items-center space-x-3">
          <button
            @click="sidebarOpen = !sidebarOpen"
            class="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          <div class="hidden md:flex items-center space-x-2">
            <div
              class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center"
            >
              <span class="text-white text-sm font-semibold">⚽</span>
            </div>
            <span class="text-lg font-semibold text-gray-900 dark:text-white"
              >KasiPlay</span
            >
          </div>
        </div>

        <div class="flex items-center space-x-3">
          <div
            class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1"
          >
            <span
              class="text-sm font-medium text-blue-700 dark:text-blue-400"
              >{{ activeTeam }}</span
            >
          </div>

          <!-- Messages Icon -->
          <button
            class="relative p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            <svg
              class="w-5 h-5 text-gray-600 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
            <span
              class="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center"
              >3</span
            >
          </button>

          <!-- Notifications Bell -->
          <button
            class="relative p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            <svg
              class="w-5 h-5 text-gray-600 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              ></path>
            </svg>
            <span
              class="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center"
              >5</span
            >
          </button>

          <button
            @click="toggleTheme"
            class="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            <svg
              v-if="isDark"
              class="w-5 h-5 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
              />
            </svg>
            <svg
              v-else
              class="w-5 h-5 text-gray-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Desktop Header -->
    <header
      class="hidden lg:block bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm"
    >
      <div class="flex items-center justify-between px-6 py-4">
        <div class="flex items-center space-x-4">
          <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
            {{ activeNav }}
          </h1>
          <div
            class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1"
          >
            <span
              class="text-sm font-medium text-blue-700 dark:text-blue-400"
              >{{ activeTeam }}</span
            >
          </div>
        </div>

        <div class="flex items-center space-x-4">
          <!-- Search Bar -->
          <div class="relative">
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <svg
                class="h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search..."
              class="pl-9 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64"
            />
          </div>

          <!-- Messages Icon -->
          <button
            class="relative p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            <svg
              class="w-5 h-5 text-gray-600 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
            <span
              class="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center"
              >3</span
            >
          </button>

          <!-- Notifications Bell -->
          <button
            class="relative p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            <svg
              class="w-5 h-5 text-gray-600 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              ></path>
            </svg>
            <span
              class="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center"
              >5</span
            >
          </button>

          <button
            @click="toggleTheme"
            class="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            <svg
              v-if="isDark"
              class="w-5 h-5 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
              />
            </svg>
            <svg
              v-else
              class="w-5 h-5 text-gray-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <!-- User Profile -->
          <div
            class="flex items-center space-x-3 pl-4 border-l border-gray-200 dark:border-gray-700"
          >
            <div class="relative">
              <div
                class="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center"
              >
                <span class="text-white text-sm font-medium">{{
                  userInitials
                }}</span>
              </div>
              <div
                class="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"
              ></div>
            </div>
            <div class="hidden xl:block">
              <p class="font-medium text-gray-900 dark:text-white text-sm">
                {{ userName }}
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                {{ userHandle }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="flex lg:h-[calc(100vh-73px)]">
      <!-- Mobile Overlay - FIXED Z-INDEX -->
      <div
        v-if="sidebarOpen"
        @click="sidebarOpen = false"
        class="fixed inset-0 bg-black/50 z-40 lg:hidden"
      ></div>

      <!-- Sidebar - FIXED Z-INDEX -->
      <aside
        class="fixed inset-y-0 left-0 z-50 w-64 sm:w-72 lg:w-80 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 lg:z-auto shadow-xl lg:shadow-none overflow-hidden flex flex-col lg:mt-0"
        :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'"
        style="top: 65px"
      >
        <!-- Desktop Sidebar Header -->
        <!-- <div class="hidden lg:flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span class="text-white text-lg font-semibold">⚽</span>
            </div>
            <span class="text-xl font-semibold text-gray-900 dark:text-white">KasiPlay</span>
          </div>
        </div> -->

        <!-- Mobile Sidebar Header with Close Button -->
        <div
          class="lg:hidden flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0"
        >
          <div class="flex items-center space-x-3">
            <div
              class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center"
            >
              <span class="text-white text-sm font-semibold">⚽</span>
            </div>
            <span class="text-lg font-semibold text-gray-900 dark:text-white"
              >KasiPlay</span
            >
          </div>
          <button
            @click="sidebarOpen = false"
            class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <svg
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <!-- Scrollable Content -->
        <div
          class="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent"
        >
          <!-- Team Overview Card -->
          <div class="p-4 lg:p-6 flex-shrink-0">
            <div class="bg-blue-600 rounded-lg p-4 text-white">
              <p class="text-blue-100 text-sm font-medium">Active Team</p>
              <p class="text-2xl font-bold mt-1">{{ activeTeam }}</p>
              <div class="flex space-x-2 mt-4">
                <button
                  class="flex-1 bg-white/20 hover:bg-white/30 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Players
                </button>
                <button
                  class="flex-1 bg-white/20 hover:bg-white/30 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
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
              "
            >
              <div class="flex items-center space-x-3">
                <div
                  class="w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200"
                  :class="
                    activeNav === item.name
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
                  "
                >
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <h3
                    class="font-medium transition-colors duration-200 truncate"
                    :class="
                      activeNav === item.name
                        ? 'text-blue-900 dark:text-blue-100'
                        : 'text-gray-900 dark:text-gray-100'
                    "
                  >
                    {{ item.name }}
                  </h3>
                  <p
                    class="text-sm transition-colors duration-200 truncate"
                    :class="
                      activeNav === item.name
                        ? 'text-blue-700 dark:text-blue-200'
                        : 'text-gray-500 dark:text-gray-400'
                    "
                  >
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
                  "
                >
                  {{ item.badge }}
                </div>
              </div>
            </div>
          </nav>

          <!-- Recent Activities -->
          <div class="px-4 lg:px-6 pb-6 space-y-4">
            <div class="border-t border-gray-200 dark:border-gray-700 pt-4">
              <h4
                class="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3"
              >
                Recent Activities
              </h4>
              <div class="space-y-2">
                <div class="p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                  <p
                    class="text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Training Session Completed
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    Full squad attended morning training
                  </p>
                </div>
                <div class="p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                  <p
                    class="text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Match Report Uploaded
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    Pirates vs Chiefs match analysis
                  </p>
                </div>
                <div class="p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                  <p
                    class="text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Player Stats Updated
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    Individual performance metrics
                  </p>
                </div>
                <div class="p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                  <p
                    class="text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Team Meeting Scheduled
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    Strategy discussion for next match
                  </p>
                </div>
                <div class="p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                  <p
                    class="text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
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

        <!-- User Profile - Fixed at bottom -->
        <div
          class="flex-shrink-0 p-4 lg:p-6 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
        >
          <div
            class="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 cursor-pointer"
          >
            <div class="relative">
              <div
                class="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center"
              >
                <span class="text-white font-medium">{{ userInitials }}</span>
              </div>
              <div
                class="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-700"
              ></div>
            </div>
            <div class="flex-1 min-w-0">
              <p class="font-medium text-gray-900 dark:text-white truncate">
                {{ userName }}
              </p>
              <p class="text-sm text-gray-500 dark:text-gray-400 truncate">
                {{ userHandle }}
              </p>
            </div>
          </div>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 lg:ml-0 min-h-0 overflow-hidden">
        <div
          class="h-full p-4 lg:p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent"
        >
          <!-- Quick Stats -->
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div
              v-for="stat in quickStats"
              :key="stat.title"
              class="bg-white dark:bg-gray-800 rounded-lg p-4 lg:p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200"
            >
              <div class="flex items-center justify-between mb-3">
                <div
                  class="w-10 h-10 rounded-lg flex items-center justify-center"
                  :class="stat.color"
                >
                  <svg
                    class="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    ></path>
                  </svg>
                </div>
                <span
                  :class="stat.trend > 0 ? 'text-green-600' : 'text-red-600'"
                  class="text-sm font-medium"
                >
                  {{ stat.trend > 0 ? "+" : "" }}{{ stat.trend }}%
                </span>
              </div>
              <h3
                class="font-bold text-xl lg:text-2xl text-gray-900 dark:text-white mb-1"
              >
                {{ stat.value }}
              </h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                {{ stat.title }}
              </p>
            </div>
          </div>

          <!-- Content Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <!-- Upcoming Matches -->
            <div
              class="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div class="flex items-center justify-between mb-6">
                <h2 class="text-xl font-bold text-gray-900 dark:text-white">
                  Upcoming Matches
                </h2>
                <div class="flex items-center space-x-2">
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span class="text-sm font-medium text-green-600"
                    >{{ upcomingMatches.length }} Scheduled</span
                  >
                </div>
              </div>
              <div class="space-y-3">
                <div
                  v-for="match in upcomingMatches"
                  :key="match.id"
                  class="p-4 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600 transition-colors duration-200 cursor-pointer"
                >
                  <div class="flex items-center justify-between mb-2">
                    <span
                      class="px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs font-medium rounded"
                      >{{ match.status }}</span
                    >
                    <span class="text-sm text-gray-500 dark:text-gray-400">{{
                      match.date
                    }}</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <div>
                      <h3 class="font-semibold text-gray-900 dark:text-white">
                        {{ match.opponent }}
                      </h3>
                      <p class="text-sm text-gray-600 dark:text-gray-400">
                        {{ match.venue }}
                      </p>
                    </div>
                    <div class="text-right">
                      <div class="text-lg font-bold text-blue-600">
                        {{ match.time }}
                      </div>
                      <div class="text-xs text-gray-500">
                        {{ match.competition }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Team Announcements -->
            <div
              class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Team Announcements
              </h2>
              <div class="space-y-4">
                <div
                  v-for="announcement in teamAnnouncements"
                  :key="announcement.id"
                  class="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"
                >
                  <div class="flex items-center space-x-2 mb-2">
                    <span class="font-bold text-blue-600 dark:text-blue-400">{{
                      announcement.priority
                    }}</span>
                  </div>
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-1">
                    {{ announcement.title }}
                  </h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    {{ announcement.message }}
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-500 mt-2">
                    {{ announcement.date }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Main Content Area -->
          <div
            class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 min-h-[400px]"
          >
            <slot />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

interface NavItem {
  name: string;
  description: string;
  badge?: string;
}

interface QuickStat {
  title: string;
  value: string;
  color: string;
  trend: number;
}

interface UpcomingMatch {
  id: number;
  opponent: string;
  venue: string;
  date: string;
  time: string;
  status: string;
  competition: string;
}

interface TeamAnnouncement {
  id: number;
  title: string;
  message: string;
  priority: string;
  date: string;
}

// Reactive state
const sidebarOpen = ref<boolean>(false);
const isDark = ref<boolean>(false);
const activeNav = ref<string>("Dashboard");
const activeTeam = ref<string>("Orlando Pirates FC");
const userName = ref<string>("Chagi Siyavuya");
const userHandle = ref<string>("@siyavuyachagi");

// Computed
const userInitials = computed(() => {
  const names = userName.value.split(" ");
  return names
    .map((name) => name[0])
    .join("")
    .slice(0, 2);
});

// Navigation items
const navItems = ref<NavItem[]>([
  { name: "Dashboard", description: "Team overview & stats", badge: "NEW" },
  { name: "Players", description: "Player management" },
  { name: "Matches", description: "Fixtures & results" },
  { name: "Training", description: "Sessions & drills" },
  { name: "Statistics", description: "Performance analytics" },
  { name: "Communication", description: "Team messaging", badge: "3" },
  { name: "Media", description: "Videos & photos" },
  { name: "Settings", description: "Team configuration" },
  { name: "Support", description: "Help & assistance" },
]);

// Quick stats
const quickStats = ref<QuickStat[]>([
  { title: "Total Players", value: "24", color: "bg-green-600", trend: 12.5 },
  { title: "Matches Played", value: "18", color: "bg-blue-600", trend: 8.2 },
  { title: "Win Rate", value: "72%", color: "bg-purple-600", trend: 15.3 },
  { title: "Goals Scored", value: "45", color: "bg-orange-600", trend: 22.8 },
]);

// Upcoming matches
const upcomingMatches = ref<UpcomingMatch[]>([
  {
    id: 1,
    opponent: "Kaizer Chiefs",
    venue: "FNB Stadium",
    date: "Dec 15, 2024",
    time: "15:30",
    status: "UPCOMING",
    competition: "PSL",
  },
  {
    id: 2,
    opponent: "Mamelodi Sundowns",
    venue: "Orlando Stadium",
    date: "Dec 22, 2024",
    time: "19:30",
    status: "HOME",
    competition: "PSL",
  },
  {
    id: 3,
    opponent: "SuperSport United",
    venue: "Lucas Moripe Stadium",
    date: "Dec 28, 2024",
    time: "17:00",
    status: "AWAY",
    competition: "PSL",
  },
]);

// Team announcements
const teamAnnouncements = ref<TeamAnnouncement[]>([
  {
    id: 1,
    title: "Training Schedule Update",
    message: "Training moved to 14:00 due to weather conditions",
    priority: "URGENT",
    date: "2 hours ago",
  },
  {
    id: 2,
    title: "New Kit Release",
    message: "New away kit now available in the team store",
    priority: "INFO",
    date: "1 day ago",
  },
  {
    id: 3,
    title: "Player Fitness Update",
    message: "John Doe cleared to return to full training",
    priority: "INFO",
    date: "2 days ago",
  },
]);

// Methods
const toggleTheme = (): void => {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle("dark", isDark.value);
  localStorage.setItem("theme", isDark.value ? "dark" : "light");
};

const selectNav = (navName: string): void => {
  activeNav.value = navName;
  // Close sidebar on mobile after selection
  if (window.innerWidth < 1024) {
    sidebarOpen.value = false;
  }
};

// Lifecycle
onMounted((): void => {
  const savedTheme: string | null = localStorage.getItem("theme");
  if (
    savedTheme === "dark" ||
    (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    isDark.value = true;
    document.documentElement.classList.add("dark");
  }
});
</script>

<style scoped>
/* Tailwind Scrollbar */
.scrollbar-thin {
  scrollbar-width: thin;
}

.scrollbar-thumb-gray-300 {
  scrollbar-color: rgb(209 213 219) transparent;
}

.dark .scrollbar-thumb-gray-600 {
  scrollbar-color: rgb(75 85 99) transparent;
}

.scrollbar-track-transparent {
  scrollbar-color: transparent transparent;
}

/* WebKit Scrollbar */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: rgb(209 213 219);
  border-radius: 3px;
}

.dark ::-webkit-scrollbar-thumb {
  background-color: rgb(75 85 99);
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgb(156 163 175);
}

.dark ::-webkit-scrollbar-thumb:hover {
  background-color: rgb(107 114 128);
}

/* Ensure sidebar stays above content on mobile */
/* @media (max-width: 1023px) {
  aside {
    height: calc(100vh - 65px) !important;
  }
} */

/* Responsive adjustments */
/* @media (max-height: 600px) {
  .lg\:h-auto {
    height: 100vh;
  }
} */

/* Prevent body scroll when sidebar is open on mobile */
body.sidebar-open {
  overflow: hidden;
}
</style>
