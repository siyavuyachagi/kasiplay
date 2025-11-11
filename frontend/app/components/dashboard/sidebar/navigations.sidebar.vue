<template>
  <nav class="px-4 lg:px-6 pb-6 space-y-1">
    <NuxtLink
      v-for="nav in navigations"
      :key="nav.name"
      :to="`/${nav.route}`"
      class="group block cursor-pointer rounded-lg p-3 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700"
      active-class="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-600">
      <div class="flex items-center space-x-3">
        <div
          class="w-8 h-8 bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-lg flex items-center justify-center transition-colors duration-200"
          active-class="bg-purple-600 text-white">
          <icon :name="nav.icon || 'lucide:circle'" size="16" />
        </div>
        <div class="flex-1 min-w-0">
          <h3
            class="text-gray-900 dark:text-gray-100 font-medium transition-colors duration-200 truncate"
            active-class="text-purple-900 dark:text-purple-100">
            {{ nav.name }}
          </h3>
          <p
            class="text-gray-500 dark:text-gray-400 text-sm transition-colors duration-200 truncate"
            active-class="text-purple-700 dark:text-purple-200">
            {{ nav.description }}
          </p>
        </div>
        <div
          v-if="nav.badge"
          class="px-2 py-1 text-xs font-bold rounded-full"
          :class="
            nav.badge === 'HOT'
              ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
              : nav.badge === 'NEW'
              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
              : 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
          ">
          {{ nav.badge }}
        </div>
      </div>
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
import type { NavigationItem } from "~/dtos/navigations-item.dto";

const route = useRoute();
const slug = computed(() => route.params.org as string);

// Navigation items - Federation focused
const navigations = computed<NavigationItem[]>(() => [
  {
    name: "Dashboard",
    route: slug.value,
    description: "Overview & insights",
    icon: "lucide:layout-dashboard",
    badge: "NEW",
  },
  {
    name: "Competitions",
    route: `${slug.value}/competitions`,
    description: "Leagues, cups & tournaments",
    icon: "lucide:trophy",
  },
  {
    name: "Member Clubs",
    route: `${slug.value}/member-clubs`,
    description: "Registered organizations",
    icon: "lucide:building-2",
    badge: "3",
  },
  {
    name: "Fixtures & Results",
    route: `${slug.value}/fixtures-results`,
    description: "All competition matches",
    icon: "lucide:calendar",
  },
  {
    name: "Match Officials",
    route: `${slug.value}/match-officials`,
    description: "Referees & officials",
    icon: "lucide:users",
  },
  {
    name: "Applications",
    route: `${slug.value}/applications`,
    description: "Membership requests",
    icon: "lucide:file-text",
    badge: "3",
  },
  {
    name: "Analytics & Reports",
    route: `${slug.value}/analytics-reports`,
    description: "Competition statistics",
    icon: "lucide:bar-chart-3",
  },
  {
    name: "Governance",
    route: `${slug.value}/governance`,
    description: "Rules & regulations",
    icon: "lucide:scale",
  },
  {
    name: "Media & Communications",
    route: `${slug.value}/media-communications`,
    description: "News & announcements",
    icon: "lucide:megaphone",
  },
  {
    name: "Settings",
    route: `${slug.value}/settings`,
    description: "Organization configuration",
    icon: "lucide:settings",
  },
]);

// Check if route is active
const isActiveRoute = (itemRoute: string) => {
  const currentPath = route.path.replace(/^\//, "");
  const routePath = itemRoute;
  return currentPath === routePath;
};
</script>
