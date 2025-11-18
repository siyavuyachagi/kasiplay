<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Header -->
    <header
      class="sticky top-0 z-20 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo & Back -->
          <div class="flex items-center space-x-4">
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
        <!-- Sidebar Navigation -->
        <aside class="lg:col-span-3">
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
  </div>
</template>

<script setup lang="ts">
import type { NavigationItem } from "~/types/models/navigation-item";

const themeStore = useThemeStore();
const route = useRoute();

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
</script>
