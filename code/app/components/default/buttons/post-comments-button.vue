<template>
  <button
    @click="handleClick"
    class="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1.5 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/10 rounded-lg transition-colors">
    <icon name="lucide:message-circle" size="18" />
    <span class="text-xs sm:text-sm font-medium">{{ post.comments }}</span>
  </button>
</template>
<script setup lang="ts">
defineProps<{
  post: {
    id: string;
    comments: number;
  };
}>();

const emit = defineEmits<{
  (e: "comment"): void;
}>();

const handleClick = () => {
  emit("comment");
};
</script>
