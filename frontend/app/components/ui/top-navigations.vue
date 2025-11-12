<template>
  <nav
    class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm z-10">
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

          <nuxt-link to="/" class="hidden md:flex items-center space-x-2">
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
              placeholder="Search players, matches, clubs, topics..."
              class="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 border border-transparent focus:border-blue-500 rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none transition-colors" />
          </div>
        </div>

        <!-- Right: Actions -->
        <div class="flex items-center space-x-1 sm:space-x-2">
          <ClientOnly>
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
              <icon
                v-if="themeStore.isDark"
                name="lucide:sun"
                size="20"
                class="text-yellow-500" />
              <icon v-else name="lucide:moon" size="20" class="text-gray-600" />
            </button>
          </ClientOnly>

          <!-- Notifications  -->
          <NotificationsCounterDropdown />

          <!-- Messages -->
          <MessagesCounterDropdown />

          <button
            @click="layoutStore.toggleSidebar('right')"
            class="lg:hidden flex p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <icon
              name="lucide:panel-right"
              size="20"
              class="text-gray-700 dark:text-gray-300" />
          </button>

          <!-- User account -->
          <UserAccountDropdown />
        </div>
      </div>

      <!-- Mobile Search Expansion -->
      <Transition
        enter-active-class="transition-all duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2">
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
      </Transition>
    </div>
  </nav>
</template>

<script setup lang="ts">
const NotificationsCounterDropdown = defineAsyncComponent(
  () => import("~/components/dropdowns/notifications-counter.dropdown.vue")
);
const MessagesCounterDropdown = defineAsyncComponent(
  () => import("~/components/dropdowns/messages-counter.dropdown.vue")
);
const UserAccountDropdown = defineAsyncComponent(
  () => import("~/components/dropdowns/user-account.dropdown.vue")
);
const layoutStore = useFrontendLayoutStore();
const themeStore = useThemeStore();
const mobileSearchOpen = ref(false);
const router = useRouter();
</script>
