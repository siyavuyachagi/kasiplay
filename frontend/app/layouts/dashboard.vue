<template>
  <div
    class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
    <!-- Mobile Header -->
    <MobileHeader />

    <!-- Desktop Header -->
    <DesktopHeader />

    <div class="flex lg:h-[calc(100vh-73px)]">
      <!-- Mobile Overlay - FIXED Z-INDEX -->
      <div
        v-if="layoutStore.isSidebarOpen"
        @click="layoutStore.closeSidebar()"
        class="fixed inset-0 bg-black/50 z-40 lg:hidden"></div>

      <!-- Sidebar - FIXED Z-INDEX -->
      <FederationSidebar v-if="true" />
      <ClubSidebar v-else />

      <!-- Main Content -->
      <main class="flex-1 lg:ml-0 min-h-0 overflow-hidden">
        <div
          class="h-full p-4 lg:p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
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

          <!-- Main Content Area -->
          <main>
            <slot></slot>
          </main>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import ClubSidebar from "~/components/dashboard/club-sidebar.vue";
import DesktopHeader from "~/components/dashboard/desktop-header.vue";
import FederationSidebar from "~/components/dashboard/federation-sidebar.vue";
import MobileHeader from "~/components/dashboard/mobile-header.vue";
import { useDashboardLayoutStore } from "~/stores/dashboard-layout";

const layoutStore = useDashboardLayoutStore();

interface NavItem {
  name: string;
  description: string;
  badge?: string;
}

interface QuickStat {
  title: string;
  value: string;
  color: string;
  trend: number;
}

interface UpcomingMatch {
  id: number;
  opponent: string;
  venue: string;
  date: string;
  time: string;
  status: string;
  competition: string;
}

interface TeamAnnouncement {
  id: number;
  title: string;
  message: string;
  priority: string;
  date: string;
}

// Reactive state
const isDark = ref<boolean>(false);
const activeNav = ref<string>("Dashboard");
const userName = ref<string>("Chagi Siyavuya");
const userHandle = ref<string>("@siyavuyachagi");

// Computed
const userInitials = computed(() => {
  const names = userName.value.split(" ");
  return names
    .map((name) => name[0])
    .join("")
    .slice(0, 2);
});

// Navigation items
const navItems = ref<NavItem[]>([
  { name: "Dashboard", description: "Team overview & stats", badge: "NEW" },
  { name: "Players", description: "Player management" },
  { name: "Matches", description: "Fixtures & results" },
  { name: "Training", description: "Sessions & drills" },
  { name: "Statistics", description: "Performance analytics" },
  { name: "Communication", description: "Team messaging", badge: "3" },
  { name: "Media", description: "Videos & photos" },
  { name: "Settings", description: "Team configuration" },
  { name: "Support", description: "Help & assistance" },
]);

// Quick stats
const quickStats = ref<QuickStat[]>([
  { title: "Total Players", value: "24", color: "bg-green-600", trend: 12.5 },
  { title: "Matches Played", value: "18", color: "bg-blue-600", trend: 8.2 },
  { title: "Win Rate", value: "72%", color: "bg-purple-600", trend: 15.3 },
  { title: "Goals Scored", value: "45", color: "bg-orange-600", trend: 22.8 },
]);

// Upcoming matches
const upcomingMatches = ref<UpcomingMatch[]>([
  {
    id: 1,
    opponent: "Kaizer Chiefs",
    venue: "FNB Stadium",
    date: "Dec 15, 2024",
    time: "15:30",
    status: "UPCOMING",
    competition: "PSL",
  },
  {
    id: 2,
    opponent: "Mamelodi Sundowns",
    venue: "Orlando Stadium",
    date: "Dec 22, 2024",
    time: "19:30",
    status: "HOME",
    competition: "PSL",
  },
  {
    id: 3,
    opponent: "SuperSport United",
    venue: "Lucas Moripe Stadium",
    date: "Dec 28, 2024",
    time: "17:00",
    status: "AWAY",
    competition: "PSL",
  },
]);

// Team announcements
const teamAnnouncements = ref<TeamAnnouncement[]>([
  {
    id: 1,
    title: "Training Schedule Update",
    message: "Training moved to 14:00 due to weather conditions",
    priority: "URGENT",
    date: "2 hours ago",
  },
  {
    id: 2,
    title: "New Kit Release",
    message: "New away kit now available in the team store",
    priority: "INFO",
    date: "1 day ago",
  },
  {
    id: 3,
    title: "Player Fitness Update",
    message: "John Doe cleared to return to full training",
    priority: "INFO",
    date: "2 days ago",
  },
]);

// Methods
const toggleTheme = (): void => {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle("dark", isDark.value);
  localStorage.setItem("theme", isDark.value ? "dark" : "light");
};

const selectNav = (navName: string): void => {
  activeNav.value = navName;
  // Close sidebar on mobile after selection
  if (window.innerWidth < 1024) {
    layoutStore.closeSidebar();
  }
};

// Lifecycle
</script>

<!-- <style scoped>
/* Prevent body scroll when sidebar is open on mobile */
body.sidebar-open {
  overflow: hidden;
}
</style> -->
