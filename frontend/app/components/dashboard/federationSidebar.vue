<template>
  <!-- Sidebar - FIXED Z-INDEX -->
  <aside
    class="fixed inset-y-0 left-0 z-50 w-64 sm:w-72 lg:w-80 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 lg:z-auto shadow-xl lg:shadow-none overflow-hidden flex flex-col lg:mt-0"
    :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'"
    style="top: 65px"
  >
    <!-- Mobile Sidebar Header with Close Button -->
    <div
      class="lg:hidden flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0"
    >
      <div class="flex items-center space-x-3">
        <div
          class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center"
        >
          <span class="text-white text-sm font-semibold">⚽</span>
        </div>
        <span class="text-lg font-semibold text-gray-900 dark:text-white"
          >KasiPlay</span
        >
      </div>
      <button
        @click="sidebarOpen = false"
        class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
      >
        <icon
          name="lucide:x"
          size="20"
          class="text-gray-500 dark:text-gray-400"
        />
      </button>
    </div>

    <!-- Scrollable Content -->
    <div
      class="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent"
    >
      <!-- Federation Overview Card -->
      <div class="p-4 lg:p-6 flex-shrink-0">
        <div class="bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg p-4 text-white">
          <p class="text-purple-100 text-sm font-medium">Active Organization</p>
          <p class="text-2xl font-bold mt-1">{{ federationName }}</p>
          <div class="mt-3 grid grid-cols-2 gap-2 text-center">
            <div class="bg-white/20 rounded-lg px-2 py-2">
              <div class="text-2xl font-bold">{{ memberClubsCount }}</div>
              <div class="text-xs text-purple-100">Member Clubs</div>
            </div>
            <div class="bg-white/20 rounded-lg px-2 py-2">
              <div class="text-2xl font-bold">{{ activeCompetitionsCount }}</div>
              <div class="text-xs text-purple-100">Competitions</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <nav class="px-4 lg:px-6 pb-6 space-y-1">
        <div
          v-for="item in navItems"
          :key="item.name"
          @click="selectNav(item.name)"
          class="group cursor-pointer rounded-lg p-3 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          :class="
            activeNav === item.name
              ? 'bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-600'
              : ''
          "
        >
          <div class="flex items-center space-x-3">
            <div
              class="w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200"
              :class="
                activeNav === item.name
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
              "
            >
              <icon :name="item.icon" size="16" />
            </div>
            <div class="flex-1 min-w-0">
              <h3
                class="font-medium transition-colors duration-200 truncate"
                :class="
                  activeNav === item.name
                    ? 'text-purple-900 dark:text-purple-100'
                    : 'text-gray-900 dark:text-gray-100'
                "
              >
                {{ item.name }}
              </h3>
              <p
                class="text-sm transition-colors duration-200 truncate"
                :class="
                  activeNav === item.name
                    ? 'text-purple-700 dark:text-purple-200'
                    : 'text-gray-500 dark:text-gray-400'
                "
              >
                {{ item.description }}
              </p>
            </div>
            <div
              v-if="item.badge"
              class="px-2 py-1 text-xs font-bold rounded-full"
              :class="
                item.badge === 'HOT'
                  ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                  : item.badge === 'NEW'
                  ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                  : 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
              "
            >
              {{ item.badge }}
            </div>
          </div>
        </div>
      </nav>

      <!-- Recent Activities -->
      <div class="px-4 lg:px-6 pb-6 space-y-4">
        <div class="border-t border-gray-200 dark:border-gray-700 pt-4">
          <h4
            class="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3"
          >
            Recent Activities
          </h4>
          <div class="space-y-2">
            <div
              v-for="activity in recentActivities"
              :key="activity.id"
              class="p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer"
            >
              <div class="flex items-start space-x-2">
                <div class="flex-shrink-0">
                  <div
                    class="w-2 h-2 rounded-full mt-1.5"
                    :class="activity.color"
                  ></div>
                </div>
                <div class="flex-1 min-w-0">
                  <p
                    class="text-sm font-medium text-gray-900 dark:text-gray-100 truncate"
                  >
                    {{ activity.title }}
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    {{ activity.description }}
                  </p>
                  <p class="text-xs text-gray-400 dark:text-gray-500 mt-1">
                    {{ activity.time }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pending Applications Badge -->
      <div class="px-4 lg:px-6 pb-6">
        <div
          class="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-3"
        >
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <icon name="lucide:alert-circle" size="16" class="text-orange-600 dark:text-orange-400" />
              <span class="text-sm font-medium text-orange-900 dark:text-orange-100">
                Pending Applications
              </span>
            </div>
            <span
              class="px-2 py-0.5 bg-orange-600 text-white text-xs font-bold rounded-full"
            >
              {{ pendingApplicationsCount }}
            </span>
          </div>
          <p class="text-xs text-orange-700 dark:text-orange-300 mt-1">
            {{ pendingApplicationsCount }} club{{ pendingApplicationsCount !== 1 ? 's' : '' }} awaiting review
          </p>
        </div>
      </div>
    </div>

    <!-- User Profile - Fixed at bottom -->
    <user-profile-dropdown-bottom-fixed />
  </aside>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

interface NavItem {
  name: string;
  description: string;
  icon: string;
  badge?: string;
}

interface Activity {
  id: number;
  title: string;
  description: string;
  time: string;
  color: string;
}

// Props
const sidebarOpen = ref(false);
const activeNav = ref("Dashboard");
const federationName = ref("South African Football Association");
const memberClubsCount = ref(32);
const activeCompetitionsCount = ref(5);
const pendingApplicationsCount = ref(3);

// Navigation items - Federation focused
const navItems = ref<NavItem[]>([
  {
    name: "Dashboard",
    description: "Overview & insights",
    icon: "lucide:layout-dashboard",
    badge: "NEW",
  },
  {
    name: "Competitions",
    description: "Leagues, cups & tournaments",
    icon: "lucide:trophy",
  },
  {
    name: "Member Clubs",
    description: "Registered organizations",
    icon: "lucide:building-2",
    badge: "3",
  },
  {
    name: "Fixtures & Results",
    description: "All competition matches",
    icon: "lucide:calendar",
  },
  {
    name: "Match Officials",
    description: "Referees & officials",
    icon: "lucide:users",
  },
  {
    name: "Applications",
    description: "Membership requests",
    icon: "lucide:file-text",
    badge: "3",
  },
  {
    name: "Analytics & Reports",
    description: "Competition statistics",
    icon: "lucide:bar-chart-3",
  },
  {
    name: "Governance",
    description: "Rules & regulations",
    icon: "lucide:scale",
  },
  {
    name: "Media & Communications",
    description: "News & announcements",
    icon: "lucide:megaphone",
  },
  {
    name: "Settings",
    description: "Organization configuration",
    icon: "lucide:settings",
  },
]);

// Recent activities - Federation specific
const recentActivities = ref<Activity[]>([
  {
    id: 1,
    title: "New Club Application",
    description: "Kaizer Chiefs submitted membership renewal",
    time: "2 hours ago",
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "League Match Completed",
    description: "Pirates 2-1 Sundowns - PSL Matchday 15",
    time: "5 hours ago",
    color: "bg-green-500",
  },
  {
    id: 3,
    title: "Official Appointed",
    description: "Victor Gomes assigned to Cup Final",
    time: "1 day ago",
    color: "bg-purple-500",
  },
  {
    id: 4,
    title: "Competition Started",
    description: "Nedbank Cup Round of 32 kicked off",
    time: "2 days ago",
    color: "bg-orange-500",
  },
  {
    id: 5,
    title: "Report Generated",
    description: "Q4 Competition Performance Report",
    time: "3 days ago",
    color: "bg-gray-500",
  },
]);

// Methods
const selectNav = (navName: string): void => {
  activeNav.value = navName;
  // Close sidebar on mobile after selection
  if (window.innerWidth < 1024) {
    sidebarOpen.value = false;
  }
};
</script>

<style scoped>
/* Tailwind Scrollbar */
.scrollbar-thin {
  scrollbar-width: thin;
}

.scrollbar-thumb-gray-300 {
  scrollbar-color: rgb(209 213 219) transparent;
}

.dark .scrollbar-thumb-gray-600 {
  scrollbar-color: rgb(75 85 99) transparent;
}

.scrollbar-track-transparent {
  scrollbar-color: transparent transparent;
}

/* WebKit Scrollbar */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: rgb(209 213 219);
  border-radius: 3px;
}

.dark ::-webkit-scrollbar-thumb {
  background-color: rgb(75 85 99);
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgb(156 163 175);
}

.dark ::-webkit-scrollbar-thumb:hover {
  background-color: rgb(107 114 128);
}
</style>