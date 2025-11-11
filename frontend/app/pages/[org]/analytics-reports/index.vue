<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
          Analytics & Reports
        </h1>
        <p class="text-gray-600 dark:text-gray-400 mt-1">
          View detailed statistics and generate reports
        </p>
      </div>
      <button
        class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center space-x-2">
        <icon name="lucide:download" size="18" />
        <span>Export Report</span>
      </button>
    </div>

    <!-- Quick Stats -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div
        v-for="stat in quickStats"
        :key="stat.label"
        class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
        <div class="flex items-center justify-between mb-4">
          <div
            class="w-12 h-12 rounded-lg flex items-center justify-center"
            :class="stat.color">
            <icon :name="stat.icon" size="24" class="text-white" />
          </div>
        </div>
        <div class="text-3xl font-bold text-gray-900 dark:text-white mb-1">
          {{ stat.value }}
        </div>
        <div class="text-sm text-gray-600 dark:text-gray-400">
          {{ stat.label }}
        </div>
      </div>
    </div>

    <!-- Report Categories -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div
        v-for="category in reportCategories"
        :key="category.title"
        class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
        <div class="flex items-center space-x-3 mb-4">
          <div
            class="w-10 h-10 rounded-lg flex items-center justify-center"
            :class="category.color">
            <icon :name="category.icon" size="20" class="text-white" />
          </div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white">
            {{ category.title }}
          </h3>
        </div>
        <p class="text-gray-600 dark:text-gray-400 mb-4">
          {{ category.description }}
        </p>
        <button
          class="w-full py-2 px-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
          Generate Report
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard-2-col-layout",
});

const quickStats = [
  {
    label: "Total Matches",
    value: "156",
    icon: "lucide:calendar",
    color: "bg-blue-600",
  },
  {
    label: "Active Players",
    value: "1,245",
    icon: "lucide:users",
    color: "bg-green-600",
  },
  {
    label: "Competitions",
    value: "5",
    icon: "lucide:trophy",
    color: "bg-purple-600",
  },
  {
    label: "Total Revenue",
    value: "R125k",
    icon: "lucide:trending-up",
    color: "bg-orange-600",
  },
];

const reportCategories = [
  {
    title: "Competition Statistics",
    description:
      "Detailed analysis of all competitions including match results, standings, and performance metrics",
    icon: "lucide:trophy",
    color: "bg-blue-600",
  },
  {
    title: "Player Performance",
    description:
      "Individual player statistics, goals, assists, and performance ratings across all matches",
    icon: "lucide:user",
    color: "bg-green-600",
  },
  {
    title: "Financial Reports",
    description:
      "Revenue, expenses, transfer fees, and financial overview for the selected period",
    icon: "lucide:dollar-sign",
    color: "bg-purple-600",
  },
  {
    title: "Club Analytics",
    description:
      "Member club statistics, activity levels, and engagement metrics",
    icon: "lucide:building-2",
    color: "bg-orange-600",
  },
];
</script>