<template>
  <button @click="handleClick"
    class="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1.5 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/10 rounded-lg transition-colors">
    <icon name="lucide:repeat-2" size="18" />
    <span class="text-xs sm:text-sm font-medium">{{ post.shares }}</span>
  </button>
</template>
<script setup lang="ts">
defineProps<{
  post: {
    id: string;
    shares: number;
  };
}>();

const emit = defineEmits<{
  (e: "reshare-post"): void;
}>();

const handleClick = () => {
  emit("reshare-post");
};
</script>
