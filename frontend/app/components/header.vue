<template>
  <header
    class="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700"
  >
    <div class="flex items-center justify-between p-4">
      <!-- Left side with toggle and title -->
      <div class="flex items-center">
        <button
          @click="toggleSidebar"
          class="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors mr-4"
        >
          <icon name="ph:list-bold" size="20" class="dark:text-white" />
        </button>
        <h6 class="hidden md:flex font-semibold text-gray-800 dark:text-white">
          Dashboard
        </h6>
      </div>

      <!-- Right side with notifications and profile -->
      <div class="flex items-center space-x-4">
        <!-- Notifications -->
        <button
          class="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors relative"
        >
          <icon name="ph:bell-duotone" size="20" class="dark:text-white" />
          <span
            class="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
          ></span>
        </button>

        <!-- Messages -->
        <nuxt-link
          to="/chats"
          class="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors relative"
        >
          <icon name="ph:chat-duotone" size="20" class="dark:text-white" />
          <span
            class="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"
          ></span>
        </nuxt-link>

        <!-- Profile Dropdown -->
        <div class="relative" ref="profileDropdown">
          <button
            @click="toggleProfileDropdown"
            class="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
              alt="Profile"
              class="w-8 h-8 rounded-full object-cover"
            />
            <span class="hidden sm:flex items-center space-x-2">
              <span
                class="hidden sm:block text-gray-700 dark:text-gray-200 font-medium"
                >Siyavuya Chagi</span
              >

              <icon
                name="ph:caret-down-bold"
                size="16"
                class="dark:text-white transition-all duration-300"
                :class="{ 'rotate-180': isProfileOpen }"
              />
            </span>
          </button>

          <!-- Dropdown Menu -->
          <div
            v-show="isProfileOpen"
            class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-50"
          >
            <div class="p-3 border-b border-gray-200 dark:border-gray-700">
              <p class="text-sm font-medium text-gray-900 dark:text-white">
                Siyavuya Chagi
              </p>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                @siyavuyachagi
              </p>
            </div>
            <nav class="p-2">
              <nuxt-link
                v-for="(item, index) in profileMenuItems"
                :key="index"
                :to="item.link"
                class="flex items-center w-full p-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
              >
                <!-- <component :is="item.icon" class="w-4 h-4 mr-3" /> -->
                <icon :name="item.icon" size="16" class="mr-3" />
                {{ item.label }}
              </nuxt-link>
              <button
                class="flex items-center w-full p-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
              >
                <icon name="ph:sign-out" size="16" class="mr-3" />
                Sign out
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const searchQuery = ref("");
const isSidebarOpen = ref(false);
const isProfileOpen = ref(false);

const profileMenuItems = [
  { label: "Profile", icon: "ph:user", link: "/account" },
  { label: "Settings", icon: "ph:gear", link: "/account/settings" },
  { label: "Help", icon: "ph:question-mark", link: "/support" },
];

const toggleProfileDropdown = () => {
  isProfileOpen.value = !isProfileOpen.value;
};

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>
