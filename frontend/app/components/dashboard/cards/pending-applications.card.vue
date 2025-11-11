<template>
  <div class="px-4 lg:px-6 pb-6">
    <div
      class="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <icon
            name="lucide:alert-circle"
            size="16"
            class="text-orange-600 dark:text-orange-400" />
          <span
            class="text-sm font-medium text-orange-900 dark:text-orange-100">
            Pending Applications
          </span>
        </div>
        <span
          class="px-2 py-0.5 bg-orange-600 text-white text-xs font-bold rounded-full">
          {{ pendingApplicationsCount }}
        </span>
      </div>
      <p class="text-xs text-orange-700 dark:text-orange-300 mt-1">
        {{ pendingApplicationsCount }} club{{
          pendingApplicationsCount !== 1 ? "s" : ""
        }}
        awaiting review
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
const pendingApplicationsCount = ref(3);
</script>