<template>
  <header class="sticky top-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
    <div class="px-6">
      <div class="flex items-center justify-between h-16">
        <!-- Logo & Organization Name -->
        <div class="flex items-center space-x-4">
          <!-- Mobile Sidebar Toggle -->
          <button
            @click="toggleSidebar"
            class="lg:hidden p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            aria-label="Toggle sidebar"
          >
            <Icon name="lucide:menu" size="24" />
          </button>

          <NuxtLink to="/dashboard" class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-xl">KP</span>
            </div>
            <div class="hidden sm:block">
              <h1 class="text-lg font-bold text-gray-900 dark:text-white">KasiPlay</h1>
              <p class="text-xs text-gray-500 dark:text-gray-400">Dashboard</p>
            </div>
          </NuxtLink>
        </div>

        <!-- Right Actions -->
        <div class="flex items-center space-x-4">
          <!-- Search -->
          <button
            class="hidden md:flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <Icon name="lucide:search" size="18" />
            <span class="text-sm">Search...</span>
          </button>

          <!-- Notifications -->
          <button
            class="relative p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            aria-label="Notifications"
          >
            <Icon name="lucide:bell" size="20" />
            <span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          <!-- Theme Toggle -->
          <button
            @click="toggleTheme"
            class="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            aria-label="Toggle theme"
          >
            <Icon v-if="isDark" name="lucide:sun" size="20" class="text-yellow-500" />
            <Icon v-else name="lucide:moon" size="20" />
          </button>

          <!-- User Menu -->
          <div class="relative">
            <button
              @click="toggleUserMenu"
              class="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <div class="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                <span class="text-white text-sm font-semibold">SC</span>
              </div>
              <Icon name="lucide:chevron-down" size="16" class="text-gray-600 dark:text-gray-400" />
            </button>

            <!-- User Dropdown -->
            <Transition
              enter-active-class="transition-all duration-200 ease-out"
              enter-from-class="opacity-0 scale-95"
              enter-to-class="opacity-100 scale-100"
              leave-active-class="transition-all duration-150 ease-in"
              leave-from-class="opacity-100 scale-100"
              leave-to-class="opacity-0 scale-95"
            >
              <div
                v-if="isUserMenuOpen"
                class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-1"
              >
                <NuxtLink
                  to="/account"
                  class="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <Icon name="lucide:user" size="16" />
                  <span>Profile</span>
                </NuxtLink>
                <NuxtLink
                  to="/account/settings"
                  class="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <Icon name="lucide:settings" size="16" />
                  <span>Settings</span>
                </NuxtLink>
                <hr class="my-1 border-gray-200 dark:border-gray-700" />
                <button
                  @click="signOut"
                  class="flex items-center space-x-2 w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <Icon name="lucide:log-out" size="16" />
                  <span>Sign Out</span>
                </button>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useThemeStore } from '~/stores/theme'
import { useAuthStore } from '~/stores/auth'

const themeStore = useThemeStore()
const authStore = useAuthStore()
const { isDark } = storeToRefs(themeStore)

const isUserMenuOpen = ref(false)
const emit = defineEmits(['toggle-sidebar'])

const toggleTheme = () => {
  themeStore.toggleTheme()
}

const toggleUserMenu = () => {
  isUserMenuOpen.value = !isUserMenuOpen.value
}

const toggleSidebar = () => {
  emit('toggle-sidebar')
}

const signOut = () => {
  authStore.signOut('/')
}

// Close user menu when clicking outside
onMounted(() => {
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    if (!target.closest('.relative')) {
      isUserMenuOpen.value = false
    }
  })
})
</script>