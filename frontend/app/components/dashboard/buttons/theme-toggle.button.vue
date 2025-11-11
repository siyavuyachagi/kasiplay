<template>
  <!-- Theme toggle - Fixed at bottom -->
  <button
    @click="themeStore.toggleTheme"
    class="flex justify-center p-2 rounded-lg transition-colors duration-200">
    <icon
      v-if="themeStore.isDark"
      name="lucide:sun"
      size="16"
      class="text-yellow-500" />

    <icon v-else name="lucide:moon" size="16" class="text-gray-400" />
  </button>
</template>

<script setup lang="ts">
const themeStore = useThemeStore();
</script>
