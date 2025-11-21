<template>
  <header
    class="border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
  >
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <nuxt-link to="/" class="flex items-center space-x-3">
          <!-- <nuxt-img
            src="/favicon.png"
            alt="KasiPlay Logo"
            class="w-10 h-auto"
          /> -->
          <span
            class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Kasiplay
          </span>
        </nuxt-link>

        <!-- <lazy-client-only>
          <button
            @click="toggleTheme"
            class="flex p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <icon
              v-if="isDark"
              name="lucide:sun"
              size="20"
              class="!text-yellow-500"
            />
            <icon v-else name="lucide:moon" size="20" class="!text-gray-500" />
          </button>
        </lazy-client-only> -->
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const themeStore = useThemeStore();
const isDark = computed(() => themeStore.isDark);

const toggleTheme = () => {
  themeStore.toggleTheme();
};
</script>