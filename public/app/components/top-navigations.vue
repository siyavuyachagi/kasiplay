<template>
  <nav
    class="sticky top-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex items-center justify-between h-14">
        <!-- Left: Logo & Menu Toggle -->
        <div class="flex items-center space-x-3">
          <button
            @click="layoutStore.toggleSidebar('left')"
            class="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <icon
              name="lucide:menu"
              size="22"
              class="text-gray-700 dark:text-gray-300" />
          </button>

          <nuxt-link to="/" class="flex items-center space-x-2">
            <NuxtImg
              src="/favicon.svg"
              alt="Logo"
              class="w-5 h-5 object-contain" />
            <span
              class="hidden sm:inline text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              KasiPlay
            </span>
          </nuxt-link>
        </div>

        <!-- Center: Search (Desktop) -->
        <div class="hidden md:flex flex-1 max-w-xl mx-6">
          <div class="relative w-full">
            <icon
              name="lucide:search"
              size="18"
              class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search players, matches, clubs..."
              class="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 border border-transparent focus:border-blue-500 rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none transition-colors" />
          </div>
        </div>

        <!-- Right: Actions -->
        <div class="flex items-center space-x-1 sm:space-x-2">
          <button
            @click="mobileSearchOpen = !mobileSearchOpen"
            class="md:hidden flex p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <icon
              name="lucide:search"
              size="20"
              class="text-gray-700 dark:text-gray-300" />
          </button>

          <button
            @click="themeStore.toggleTheme()"
            class="flex p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <ClientOnly>
              <icon
                v-if="themeStore.isDark"
                name="lucide:sun"
                size="20"
                class="text-yellow-500" />
              <icon v-else name="lucide:moon" size="20" class="text-gray-600" />
            </ClientOnly>
          </button>

          <button
            class="flex p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors relative">
            <icon
              name="lucide:bell"
              size="20"
              class="text-gray-700 dark:text-gray-300" />
            <span
              class="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <button
            class="flex p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors relative">
            <icon
              name="lucide:message-circle"
              size="20"
              class="text-gray-700 dark:text-gray-300" />
            <span
              class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              2
            </span>
          </button>

          <button
            @click="layoutStore.toggleSidebar('right')"
            class="lg:hidden flex p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <icon
              name="lucide:panel-right"
              size="20"
              class="text-gray-700 dark:text-gray-300" />
          </button>

          <ClientOnly>
            <!-- Show Sign In button when not authenticated -->
            <nuxt-link
              v-if="!isAuthenticated"
              to="/auth/login"
              class="hidden sm:inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors text-sm">
              <icon name="lucide:log-in" size="18" />
              <span>Sign In</span>
            </nuxt-link>

            <!-- User Account Dropdown -->
            <div v-else class="relative" v-click-outside="closeDropdown">
              <button
                @click="isDropdownOpen = !isDropdownOpen"
                class="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <img
                  :src="user.avatar"
                  alt="User avatar"
                  class="w-8 h-8 rounded-full object-cover" />
                <span
                  class="hidden sm:block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {{ user.name }}
                </span>
                <icon
                  name="lucide:chevron-down"
                  size="16"
                  class="text-gray-500" />
              </button>

              <div
                v-show="isDropdownOpen"
                class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                <div class="py-2">
                  <nuxt-link
                    to="/profile"
                    class="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <icon name="lucide:user" size="16" class="mr-2" />
                    Profile
                  </nuxt-link>
                  <nuxt-link
                    to="/settings"
                    class="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <icon name="lucide:settings" size="16" class="mr-2" />
                    Settings
                  </nuxt-link>
                  <nuxt-link v-if="false"
                    to="/federations"
                    class="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <icon name="lucide:building-2" size="16" class="mr-2" />
                    SAF Association
                  </nuxt-link>
                  <nuxt-link v-else
                    to="/clubs"
                    class="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <icon name="lucide:building" size="16" class="mr-2" />
                    7 Stars FC
                  </nuxt-link>
                  <button
                    @click="logout"
                    class="w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <icon name="lucide:log-out" size="16" class="mr-2" />
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </ClientOnly>
        </div>
      </div>

      <!-- Mobile Search Expansion -->
      <transition
        enter-active-class="transition-all duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2">
        <ClientOnly>
          <div v-if="mobileSearchOpen" class="md:hidden pb-3 pt-2">
            <div class="relative">
              <icon
                name="lucide:search"
                size="18"
                class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                class="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 border border-transparent focus:border-blue-500 rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none" />
            </div>
          </div>
        </ClientOnly>
      </transition>
    </div>
  </nav>
</template>

<script setup lang="ts">
const layoutStore = useLayoutStore();
const themeStore = useThemeStore();
const authStore = useAuthStore();

const mobileSearchOpen = ref(false);
const isAuthenticated = ref(true); // Replace with actual auth check
const isDropdownOpen = ref(false);
const user = ref({
  name: "John Doe",
  avatar: "/images/avatar.jpg",
});

const closeDropdown = () => {
  isDropdownOpen.value = false;
};

const logout = () => {
  authStore.signOut();
  isAuthenticated.value = false;
};
</script>
