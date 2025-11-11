<template>
  <!-- User Profile - Fixed at bottom -->
  <div
    class="shrink-0 lg:p-2 border-t border-gray-200 dark:border-gray-700">
    <div class="relative">
      <button
        @click="themeStore.toggleTheme"
        class="flex justify-center p-2 rounded-lg transition-colors duration-200">
        <icon
          v-if="themeStore.isDark"
          name="lucide:sun"
          size="20"
          class="text-yellow-500" />

        <icon v-else name="lucide:moon" size="20" class="text-gray-400" />
      </button>
    </div>
  </div>
</template>

<script setup>
const themeStore = useThemeStore();
</script>
