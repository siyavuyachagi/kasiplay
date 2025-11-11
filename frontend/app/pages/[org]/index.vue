<!-- pages/index.vue -->
<template>
  <!-- Quick Stats -->
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
    <div
      v-for="stat in quickStats"
      :key="stat.title"
      class="bg-white dark:bg-gray-800 rounded-lg p-4 lg:p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200">
      <div class="flex items-center justify-between mb-3">
        <div
          class="w-10 h-10 rounded-lg flex items-center justify-center"
          :class="stat.color">
          <svg
            class="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
          </svg>
        </div>
        <span
          :class="stat.trend > 0 ? 'text-green-600' : 'text-red-600'"
          class="text-sm font-medium">
          {{ stat.trend > 0 ? "+" : "" }}{{ stat.trend }}%
        </span>
      </div>
      <h3
        class="font-bold text-xl lg:text-2xl text-gray-900 dark:text-white mb-1">
        {{ stat.value }}
      </h3>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        {{ stat.title }}
      </p>
    </div>
  </div>

  <!-- Content section -->
  <dashboard-federation-index v-if="false" />
  <dashboard-club-index v-else />
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard-2-col-layout",
});

interface QuickStat {
  title: string;
  value: string;
  color: string;
  trend: number;
}
// Quick stats
const quickStats = ref<QuickStat[]>([
  { title: "Total Players", value: "24", color: "bg-green-600", trend: 12.5 },
  { title: "Matches Played", value: "18", color: "bg-blue-600", trend: 8.2 },
  { title: "Win Rate", value: "72%", color: "bg-purple-600", trend: 15.3 },
  { title: "Goals Scored", value: "45", color: "bg-orange-600", trend: 22.8 },
]);
</script>
