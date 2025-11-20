<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Header -->
    <header
      class="sticky top-0 z-20 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo & Menu Toggle -->
          <div class="flex items-center space-x-4">
            <!-- Mobile Sidebar Toggle -->
            <button
              @click="toggleAccountSidebar"
              class="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <Icon
                name="lucide:menu"
                size="24"
                class="text-gray-700 dark:text-gray-300" />
            </button>

            <NuxtLink
              to="/"
              class="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <NuxtImg
                src="/favicon.svg"
                alt="Logo"
                class="w-6 h-6 object-contain" />
              <span
                class="text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                KasiPlay
              </span>
            </NuxtLink>
          </div>

          <!-- Right Actions -->
          <div class="flex items-center space-x-2">
            <button
              @click="themeStore.toggleTheme()"
              class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <Icon
                v-if="themeStore.isDark"
                name="lucide:sun"
                size="20"
                class="text-yellow-500" />
              <Icon v-else name="lucide:moon" size="20" class="text-gray-600" />
            </button>

            <NuxtLink
              to="/"
              class="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              Back to Home
            </NuxtLink>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="lg:grid lg:grid-cols-12 lg:gap-8">
        <!-- Sidebar Navigation - Desktop -->
        <aside class="hidden lg:block lg:col-span-3">
          <nav
            class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 space-y-2 sticky top-24">
            <NuxtLink
              v-for="navigation in navigationItems"
              :key="navigation.url"
              :to="navigation.url"
              class="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors"
              :class="
                isActive(navigation.url || '')
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50'
              ">
              <Icon :name="navigation.icon ?? 'lucide:url'" size="20" />
              <span>{{ navigation.label }}</span>
            </NuxtLink>
          </nav>
        </aside>

        <!-- Main Content Area -->
        <main class="lg:col-span-9 mt-6 lg:mt-0">
          <slot />
        </main>
      </div>
    </div>

    <!-- Mobile Sidebar Modal -->
    <Teleport to="body">
      <!-- Sidebar -->
      <Transition
        enter-active-class="transition-transform duration-300 ease-out"
        enter-from-class="-translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition-transform duration-300 ease-in"
        leave-from-class="translate-x-0"
        leave-to-class="-translate-x-full">
        <aside
          v-if="isAccountSidebarOpen"
          class="fixed top-0 bottom-0 left-0 w-80 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-50 lg:hidden">
          <div class="h-full overflow-y-auto scrollbar-hide">
            <div class="p-4 space-y-4">
              <!-- Close Button -->
              <div
                class="flex items-center justify-between pb-3 border-b border-gray-200 dark:border-gray-700">
                <h3 class="font-bold text-gray-900 dark:text-white">
                  Account Menu
                </h3>
                <button
                  @click="closeAccountSidebar"
                  class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg transition-colors">
                  <Icon name="lucide:x" size="20" />
                </button>
              </div>

              <!-- Navigation Links -->
              <nav class="space-y-2">
                <NuxtLink
                  v-for="navigation in navigationItems"
                  :key="navigation.url"
                  :to="navigation.url"
                  @click="closeAccountSidebar"
                  class="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors"
                  :class="
                    isActive(navigation.url || '')
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                  ">
                  <Icon :name="navigation.icon ?? 'lucide:url'" size="20" />
                  <span>{{ navigation.label }}</span>
                </NuxtLink>
              </nav>
            </div>
          </div>
        </aside>
      </Transition>

      <!-- Backdrop -->
      <Transition
        enter-active-class="transition-opacity duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0">
        <div
          v-if="isAccountSidebarOpen"
          @click="closeAccountSidebar"
          class="fixed inset-0 bg-black/50 z-40 lg:hidden"></div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import type { NavigationItem } from "~/types/interfaces/navigation-item";

const themeStore = useThemeStore();
const route = useRoute();
const { isAccountSidebarOpen, toggleAccountSidebar, closeAccountSidebar } =
  useAccountSidebar();

const navigationItems: NavigationItem[] = [
  { label: "Profile", url: "/account/profile", icon: "lucide:user" },
  { label: "Edit Profile", url: "/account/edit", icon: "lucide:edit" },
  { label: "Settings", url: "/account/settings", icon: "lucide:settings" },
  { label: "Preferences", url: "/account/preferences", icon: "lucide:sliders" },
  {
    label: "Privacy & Security",
    url: "/account/privacy",
    icon: "lucide:shield",
  },
  {
    label: "Notifications",
    url: "/account/notifications",
    icon: "lucide:bell",
  },
  {
    label: "Connected Accounts",
    url: "/account/connected",
    icon: "lucide:link",
  },
];

const isActive = (path: string) => {
  return route.path === path;
};

// Close sidebar on route change
watch(
  () => route.path,
  () => {
    closeAccountSidebar();
  }
);
</script>
