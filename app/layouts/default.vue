<template>
  <body class="bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
    <div id="app">
      <div class="flex h-screen bg-gray-100 dark:bg-gray-900">
        <!-- Mobile Sidebar Overlay -->
        <div
          v-if="mobileMenuOpen"
          @click="mobileMenuOpen = false"
          class="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
        ></div>

        <!-- Sidebar -->
        <aside
          :class="[
            'fixed lg:static inset-y-0 left-0 z-50 transition-all duration-300 bg-slate-900 dark:bg-gray-800 text-white',
            mobileMenuOpen
              ? 'translate-x-0'
              : '-translate-x-full lg:translate-x-0',
            sidebarCollapsed ? 'w-16' : 'w-64',
          ]"
        >
          <!-- Header with Logo and Toggle -->
          <div class="p-4 border-b border-slate-700 dark:border-gray-700">
            <div class="flex items-center justify-between">
              <div v-if="!sidebarCollapsed" class="flex items-center space-x-3">
                <div class="bg-blue-600 p-2 rounded-lg">
                  <img src="/favicon.png" alt="KasiPlay Logo" class="w-6 h-6" />
                </div>
                <h1 class="text-xl font-bold">KasiPlay</h1>
              </div>

              <!-- Sidebar Toggle Button -->
              <button
                @click="sidebarCollapsed = !sidebarCollapsed"
                class="p-1.5 hover:bg-slate-700 dark:hover:bg-gray-600 rounded-lg transition-colors"
              >
                <Icon name="ph:list-bold" size="20" />
              </button>
            </div>
          </div>

          <nav class="mt-6">
            <div class="px-3 space-y-1">
              <a
                href="#"
                @click="setActiveTab('dashboard')"
                :class="getSidebarLinkClass('dashboard')"
              >
                <icon name="ph:house-duotone" size="20" />
                <span v-if="!sidebarCollapsed">Dashboard</span>
              </a>

              <a
                href="#"
                @click="setActiveTab('my-team')"
                :class="getSidebarLinkClass('my-team')"
              >
                <icon name="ph:users-duotone" size="20" />
                <span v-if="!sidebarCollapsed">My Team</span>
              </a>

              <a
                href="#"
                @click="setActiveTab('squad')"
                :class="getSidebarLinkClass('squad')"
              >
                <icon name="ph:users-three-duotone" size="20" />
                <span v-if="!sidebarCollapsed">Squad</span>
              </a>

              <a
                href="#"
                @click="setActiveTab('fixtures')"
                :class="getSidebarLinkClass('fixtures')"
              >
                <icon name="ph:calendar-duotone" size="20" />
                <span v-if="!sidebarCollapsed">Fixtures</span>
              </a>

              <a
                href="#"
                @click="setActiveTab('training')"
                :class="getSidebarLinkClass('training')"
              >
                <icon name="ph:traffic-cone-duotone" size="20" />
                <span v-if="!sidebarCollapsed">Training</span>
              </a>

              <a
                href="#"
                @click="setActiveTab('tactics')"
                :class="getSidebarLinkClass('tactics')"
              >
                <icon name="ph:chalkboard-teacher-duotone" size="20" />
                <span v-if="!sidebarCollapsed">Tactics</span>
              </a>

              <a
                href="#"
                @click="setActiveTab('reports')"
                :class="getSidebarLinkClass('reports')"
              >
                <icon name="ph:chart-line-up-duotone" size="20" />
                <span v-if="!sidebarCollapsed">Reports</span>
              </a>
            </div>
          </nav>

          <!-- Theme Toggle at Bottom -->
          <div class="absolute bottom-4 left-3 right-3">
            <button
              @click="toggleTheme"
              class="w-full flex items-center justify-center px-3 py-2 bg-slate-800 dark:bg-gray-700 hover:bg-slate-700 dark:hover:bg-gray-600 rounded-lg transition-colors"
            >
              <icon name="ph:moon-duotone" size="20" v-if="isDark" />
              <icon name="ph:sun-duotone" size="20" v-else />
              <span v-if="!sidebarCollapsed" class="ml-2 text-sm"
                >{{ isDark ? "Light" : "Dark" }} Mode</span
              >
            </button>
          </div>
        </aside>

        <!-- Main Content -->
        <div class="flex-1 flex flex-col overflow-hidden">
          <!-- Header -->
          <default-header />

          <!-- Main Content Area -->
          <main
            class="flex-1 overflow-x-hidden overflow-y-auto p-4 lg:p-6 bg-gray-50 dark:bg-gray-900"
          >
            <NuxtPage />
          </main>
        </div>
      </div>

      <!-- Click outside handler for dropdowns -->
      <div
        v-if="showMessages || showNotifications || showProfile"
        @click="closeAllDropdowns()"
        class="fixed inset-0 z-30"
      ></div>
    </div>
  </body>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

// Reactive state
const activeTab = ref("dashboard");
const sidebarCollapsed = ref(false);
const mobileMenuOpen = ref(false);
const isDark = ref(false);
const showMessages = ref(false);
const showNotifications = ref(false);
const showProfile = ref(false);

// My Team Data (Coach's team)
const myTeam = ref({
  name: "Kaizer Chiefs",
  players: 28,
  wins: 15,
  draws: 6,
  losses: 3,
  points: 51,
  position: "2nd",
});

// My Squad (Coach's players)
const mySquad = ref([
  {
    id: 1,
    name: "Khama Billiat",
    age: 32,
    position: "Forward",
    goals: 12,
    status: "Active",
    avatar: "https://via.placeholder.com/48x48/4F46E5/FFFFFF?text=KB",
  },
  {
    id: 2,
    name: "Keagan Dolly",
    age: 30,
    position: "Midfielder",
    goals: 6,
    status: "Active",
    avatar: "https://via.placeholder.com/48x48/7C3AED/FFFFFF?text=KD",
  },
  {
    id: 3,
    name: "Itumeleng Khune",
    age: 36,
    position: "Goalkeeper",
    goals: 0,
    status: "Injured",
    avatar: "https://via.placeholder.com/48x48/059669/FFFFFF?text=IK",
  },
  {
    id: 4,
    name: "Yusuf Maart",
    age: 28,
    position: "Midfielder",
    goals: 3,
    status: "Active",
    avatar: "https://via.placeholder.com/48x48/DC2626/FFFFFF?text=YM",
  },
  {
    id: 5,
    name: "Ashley Du Preez",
    age: 26,
    position: "Forward",
    goals: 8,
    status: "Active",
    avatar: "https://via.placeholder.com/48x48/EA580C/FFFFFF?text=AD",
  },
  {
    id: 6,
    name: "Sifiso Hlanti",
    age: 33,
    position: "Defender",
    goals: 1,
    status: "Active",
    avatar: "https://via.placeholder.com/48x48/8B5CF6/FFFFFF?text=SH",
  },
]);

// Upcoming fixtures for coach's team
const upcomingFixtures = ref([
  {
    id: 1,
    opponent: "vs Orlando Pirates",
    date: "Sep 25, 15:00",
    venue: "FNB Stadium",
    type: "home",
  },
  {
    id: 2,
    opponent: "vs Mamelodi Sundowns",
    date: "Oct 2, 19:30",
    venue: "Loftus Stadium",
    type: "away",
  },
  {
    id: 3,
    opponent: "vs SuperSport United",
    date: "Oct 9, 15:00",
    venue: "FNB Stadium",
    type: "home",
  },
]);

// Messages
const messages = ref([
  {
    id: 1,
    from: "Technical Director",
    content: "Team meeting scheduled for tomorrow at 10 AM",
    time: "2 hours ago",
    read: false,
    avatar: "https://via.placeholder.com/32x32/4F46E5/FFFFFF?text=TD",
  },
  {
    id: 2,
    from: "Khama Billiat",
    content: "Coach, I need to discuss my training schedule",
    time: "4 hours ago",
    read: false,
    avatar: "https://via.placeholder.com/32x32/059669/FFFFFF?text=KB",
  },
  {
    id: 3,
    from: "Medical Team",
    content: "Injury report for this week is ready",
    time: "1 day ago",
    read: true,
    avatar: "https://via.placeholder.com/32x32/DC2626/FFFFFF?text=MT",
  },
]);

// Notifications/Alarms
const notifications = ref([
  {
    id: 1,
    type: "training",
    title: "Training Session Reminder",
    message: "Team training starts in 30 minutes",
    time: "25 min ago",
  },
  {
    id: 2,
    type: "injury",
    title: "Player Injury Update",
    message: "Itumeleng Khune cleared for light training",
    time: "2 hours ago",
  },
  {
    id: 3,
    type: "match",
    title: "Match Preparation",
    message: "Submit team sheet by 6 PM today",
    time: "3 hours ago",
  },
  {
    id: 4,
    type: "system",
    title: "System Update",
    message: "New features available in tactical board",
    time: "1 day ago",
  },
]);

const nextMatch = ref({
  days: 3,
});

// Computed properties
const unreadMessages = computed(() => {
  return messages.value.filter((m) => !m.read).length;
});

const unreadNotifications = computed(() => {
  return notifications.value.length;
});

// Methods
const setActiveTab = (tab: string) => {
  activeTab.value = tab;
  mobileMenuOpen.value = false;
  closeAllDropdowns();
};

const toggleTheme = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};

const closeAllDropdowns = () => {
  showMessages.value = false;
  showNotifications.value = false;
  showProfile.value = false;
};

const getSidebarLinkClass = (tab: string) => {
  return [
    "flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors",
    activeTab.value === tab
      ? "bg-blue-600 text-white"
      : "hover:bg-slate-800 dark:hover:bg-gray-700",
  ];
};

const getPlayerStatusColor = (status: string) => {
  const colors: Record<string, string> = {
    Active: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
    Injured: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
    Suspended:
      "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
  };
  return (
    colors[status] ||
    "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
  );
};

const getNotificationColor = (type: string) => {
  const colors: Record<string, string> = {
    training: "bg-blue-500",
    injury: "bg-red-500",
    match: "bg-green-500",
    system: "bg-purple-500",
  };
  return colors[type] || "bg-gray-500";
};

const getNotificationIcon = (type: string) => {
  const icons: Record<string, string> = {
    training: "fa-dumbbell",
    injury: "fa-user-injured",
    match: "fa-futbol",
    system: "fa-cog",
  };
  return icons[type] || "fa-bell";
};

// Lifecycle hook
onMounted(() => {
  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme");
  if (
    savedTheme === "dark" ||
    (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    isDark.value = true;
    document.documentElement.classList.add("dark");
  }

  // Close dropdowns on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAllDropdowns();
      mobileMenuOpen.value = false;
    }
  });

  // Close mobile menu on window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
      mobileMenuOpen.value = false;
    }
  });
});
</script>
