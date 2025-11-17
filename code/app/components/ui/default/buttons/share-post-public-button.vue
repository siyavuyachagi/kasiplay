<template>
  <button @click="handleClick"
    class="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1.5 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/10 rounded-lg transition-colors">
    <icon name="lucide:share-2" size="18" />
  </button>
</template>
<script setup lang="ts">
defineProps<{
  id: string;
}>();

const handleClick = () => {};
</script>
