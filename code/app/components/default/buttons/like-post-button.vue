<template>
  <button
    @click="handleClick"
    class="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1.5 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-lg transition-colors">
    <icon name="lucide:heart" size="18" />
    <span class="text-xs sm:text-sm font-medium">{{ post.likes }}</span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  post: {
    id: string;
    likes: number;
  };
}>();

const emit = defineEmits<{
  (e: "like", postId: string): void;
}>();

const handleClick = () => {
  emit("like", props.post.id);
};
</script>
