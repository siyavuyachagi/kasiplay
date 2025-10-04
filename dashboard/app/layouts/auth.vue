<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
    <!-- Header -->
    <header class="border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <nuxt-link to="/" class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span class="text-white text-xl font-bold">⚽</span>
            </div>
            <span class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              KasiPlay
            </span>
          </nuxt-link>
          
          <button
            @click="toggleTheme"
            class="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <icon v-if="isDark" name="lucide:sun" size="20" class="text-yellow-500" />
            <icon v-else name="lucide:moon" size="20" class="text-gray-600" />
          </button>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-8 lg:py-12">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="border-t border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm mt-auto">
      <div class="container mx-auto px-4 py-6">
        <div class="text-center text-sm text-gray-600 dark:text-gray-400">
          © {{ new Date().getFullYear() }} KasiPlay. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const themeStore = useThemeStore()
const isDark = computed(() => themeStore.isDark)

const toggleTheme = () => {
  themeStore.toggleTheme()
}
</script>