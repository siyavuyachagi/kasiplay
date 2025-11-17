<template>
  <div
    class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
    <div class="overflow-x-auto">
      <div
        class="flex items-center space-x-1 p-2 border-b border-gray-200 dark:border-gray-700 min-w-max">
        <button
          v-for="filter in feedFilters"
          :key="filter.id"
          :class="[
            'px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap',
            activeFilter === filter.id
              ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700',
          ]"
          @click="activeFilter = filter.id">
          {{ filter.label }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const activeFilter = ref("all");
const feedFilters = [
  { id: "all", label: "All Posts" },
  { id: "federations", label: "Federations" },
  { id: "clubs", label: "Clubs" },
  { id: "players", label: "Players" },
  { id: "fans", label: "Fans" },
  { id: "officials", label: "Officials" },
];
</script>
