<template>
  <div class="px-4 lg:px-6 pb-6 space-y-4">
    <div class="border-t border-gray-200 dark:border-gray-700 pt-4">
      <h4 class="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">
        Recent Activities
      </h4>
      <div class="space-y-2">
        <div
          v-for="(activity, index) in recentActivities"
          :key="activity.id"
          class="p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer">
          <div class="flex items-start space-x-2">
            <div class="shrink-0">
              <div
                class="w-2 h-2 rounded-full mt-1.5"
                :class="activityColors[index % recentActivities.length]"></div>
            </div>
            <div class="flex-1 min-w-0">
              <p
                class="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                {{ activity.name }}
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                {{ activity.description }}
              </p>
              <p class="text-xs text-gray-400 dark:text-gray-500 mt-1">
                {{
                  formatDistanceToNow(activity.timestamp, { addSuffix: true })
                }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Activity } from "~/dtos/activity.dto";
import { formatDistanceToNow } from "date-fns";

// Recent activities - Federation specific
const recentActivities = ref<Activity[]>([
  {
    id: crypto.randomUUID(),
    initiatorType: "system",
    name: "New Club Application",
    description: "Kaizer Chiefs submitted membership renewal",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
  },
  {
    id: crypto.randomUUID(),
    name: "League Match Completed",
    initiatorType: "system",
    description: "Pirates 2-1 Sundowns - PSL Matchday 15",
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
  },
  {
    id: crypto.randomUUID(),
    initiatorType: "user",
    name: "Official Appointed",
    description: "Victor Gomes assigned to Cup Final",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
  },
  {
    id: crypto.randomUUID(),
    initiatorType: "system",
    name: "Competition Started",
    description: "Nedbank Cup Round of 32 kicked off",
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
  },
  {
    id: crypto.randomUUID(),
    initiatorType: "system",
    name: "Report Generated",
    description: "Q4 Competition Performance Report",
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
  },
]);

const activityColors = [
  "bg-blue-500",
  "bg-green-500",
  "bg-purple-500",
  "bg-orange-500",
  "bg-gray-500",
];
</script>
