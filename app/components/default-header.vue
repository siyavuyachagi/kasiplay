<template>
  <header
    class="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700"
  >
    <div class="flex items-center justify-between px-4 lg:px-6 py-4">
      <div class="flex items-center space-x-4">
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="lg:hidden text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          <i class="fas fa-bars text-xl"></i>
        </button>
        <div>
          <h1
            class="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white"
          >
            Dashboard
          </h1>
        </div>
      </div>

      <div class="flex items-center space-x-2 lg:space-x-4">
        <!-- Search - Hidden on small screens -->
        <div class="relative hidden md:block">
          <input
            type="text"
            autocomplete="off"
            v-model="searchQuery"
            placeholder="Search..."
            class="pl-10 pr-4 py-1 w-48 lg:w-64 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          />
          <icon name="ph:magnifying-glass-duotone" size="20" class="absolute left-3 top-2 text-gray-400 dark:text-gray-500" />
        </div>


        <!-- Messages -->
        <div class="relative">
          <button
            @click="showMessages = !showMessages"
            class="relative p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Icon name="ph:chat-duotone" size="24" />
            <span
              v-if="unreadMessages > 0"
              class="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
            >
              {{ unreadMessages }}
            </span>
          </button>

          <!-- Messages Dropdown -->
          <div
            v-if="showMessages"
            class="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 z-50"
          >
            <div class="p-4 border-b dark:border-gray-700">
              <h3 class="font-semibold text-gray-900 dark:text-white">
                Messages
              </h3>
            </div>
            <div class="max-h-64 overflow-y-auto">
              <div
                v-for="message in messages"
                :key="message.id"
                class="p-4 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <div class="flex items-start space-x-3">
                  <img
                    :src="message.avatar"
                    alt=""
                    class="w-8 h-8 rounded-full"
                  />
                  <div class="flex-1 min-w-0">
                    <p
                      class="text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {{ message.from }}
                    </p>
                    <p
                      class="text-sm text-gray-600 dark:text-gray-400 truncate"
                    >
                      {{ message.content }}
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
                      {{ message.time }}
                    </p>
                  </div>
                  <span
                    v-if="!message.read"
                    class="w-2 h-2 bg-blue-500 rounded-full"
                  ></span>
                </div>
              </div>
            </div>
            <div class="p-4">
              <button
                class="w-full text-center text-blue-600 dark:text-blue-400 text-sm hover:underline"
              >
                View all messages
              </button>
            </div>
          </div>
        </div>

        <!-- Notifications/Alarms -->
        <div class="relative">
          <button
            @click="showNotifications = !showNotifications"
            class="relative p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <!-- Bell SVG Icon -->
            <icon name="ph:bell-duotone" size="24" />
            <span
              v-if="unreadNotifications > 0"
              class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
            >
              {{ unreadNotifications }}
            </span>
          </button>

          <!-- Notifications Dropdown -->
          <div
            v-if="showNotifications"
            class="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 z-50"
          >
            <div class="p-4 border-b dark:border-gray-700">
              <h3 class="font-semibold text-gray-900 dark:text-white">
                Notifications
              </h3>
            </div>
            <div class="max-h-64 overflow-y-auto">
              <div
                v-for="notification in notifications"
                :key="notification.id"
                class="p-4 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <div class="flex items-start space-x-3">
                  <div
                    :class="[
                      'p-2 rounded-full text-white',
                      getNotificationColor(notification.type),
                    ]"
                  >
                    <!-- Dynamic SVG Icons for Notifications -->
                    <!-- Training Icon -->
                    <svg
                      v-if="notification.type === 'training'"
                      class="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14 4.14 5.57 2 7.71 3.43 9.14 2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22 14.86 20.57 16.29 22 17.71 20.57 19.14 22 20.57 20.57 22 19.14 20.57 17.71 22 16.29 20.57 14.86z"
                      />
                    </svg>
                    <!-- Injury Icon -->
                    <svg
                      v-else-if="notification.type === 'injury'"
                      class="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L15 7.5V9M21 15V17L15 16.5V15M14 21H10V20C10 19.5 10.2 19.1 10.5 18.8L12 17.3L13.5 18.8C13.8 19.1 14 19.5 14 20V21M12 13.5C10.6 13.5 9.5 14.6 9.5 16S10.6 18.5 12 18.5S14.5 17.4 14.5 16S13.4 13.5 12 13.5Z"
                      />
                    </svg>
                    <!-- Match Icon -->
                    <svg
                      v-else-if="notification.type === 'match'"
                      class="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2M13 7H11V11.59L6.41 16.18L7.82 17.59L13 12.41V7Z"
                      />
                    </svg>
                    <!-- System Icon -->
                    <svg
                      v-else
                      class="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2M13 7V9H11V7H13M13 17V11H11V17H13Z"
                      />
                    </svg>
                  </div>
                  <div class="flex-1">
                    <p
                      class="text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {{ notification.title }}
                    </p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      {{ notification.message }}
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
                      {{ notification.time }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4">
              <button
                class="w-full text-center text-blue-600 dark:text-blue-400 text-sm hover:underline"
              >
                View all notifications
              </button>
            </div>
          </div>
        </div>

        <!-- Profile Dropdown -->
        <div class="relative">
          <button
            @click="showProfile = !showProfile"
            class="flex items-center space-x-2 lg:space-x-3 p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <img
              src="https://placehold.net/avatar.png"
              alt="Profile"
              class="w-8 h-8 lg:w-10 lg:h-10 rounded-full"
            />
            <div class="text-sm hidden sm:block text-left">
              <p class="font-medium text-gray-900 dark:text-white">
                Chagi Siyavuya
              </p>
              <p class="text-gray-500 dark:text-gray-400">Coach</p>
            </div>
            <i
              class="fas fa-chevron-down text-xs text-gray-500 dark:text-gray-400 hidden lg:block"
            ></i>
          </button>

          <!-- Profile Dropdown -->
          <div
            v-if="showProfile"
            class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 z-50"
          >
            <div class="py-2">
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <i class="fas fa-user mr-2"></i>Profile
              </a>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <i class="fas fa-cog mr-2"></i>Settings
              </a>
              <hr class="my-2 border-gray-200 dark:border-gray-600" />
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <i class="fas fa-sign-out-alt mr-2"></i>Sign out
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const searchQuery = ref("");
</script>
