<template>
  <div
    class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
    <!-- Header -->
    <DashboardHeader />

    <div class="flex lg:h-[calc(100vh-73px)]">
      <!-- Sidebar - FIXED Z-INDEX -->
      <DashboardSidebar />

      <!-- Main Content -->
      <main class="flex-1 lg:ml-0 min-h-0 overflow-hidden">
        <div
          class="h-full p-4 lg:p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
          <!-- Main Content Area -->
          <main>
            <slot></slot>
          </main>
        </div>
        <!-- Footer  -->
        <DashboardFooter />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useDashboardLayoutStore } from "~/stores/dashboard-layout";

const DashboardHeader = defineAsyncComponent(
  () => import("@/components/dashboard/ui/header.vue")
);

const layoutStore = useDashboardLayoutStore();

interface NavItem {
  name: string;
  description: string;
  badge?: string;
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
