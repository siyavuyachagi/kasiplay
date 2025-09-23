<template>
  <div class="layout flex min-h-screen" :class="{ dark: isDark }">
    <!-- Overlay for mobile when sidebar is open -->
    <div
      v-if="isSidebarOpen && isMobile"
      class="fixed inset-0 bg-black/50 z-40 lg:hidden"
      @click="closeSidebar"
    ></div>

    <!-- Sidebar -->
    <aside
      class="sidebar dark:bg-gray-800 text-white transition-all duration-300 z-50"
      :class="sidebarClasses"
    >
      <!-- Logo -->
      <div
        class="logo flex items-center p-4 transition-all duration-300"
        :class="{ 'justify-center': isCollapsed && !isMobile }"
      >
        <nuxt-img
          src="/favicon.png"
          alt="KasiPlay Logo"
          class="w-8 h-8 rounded transition-all duration-300"
          :class="{
            'mr-0': isCollapsed && !isMobile,
            'mr-3': !isCollapsed || isMobile,
          }"
        />
        <h1
          class="text-xl font-bold whitespace-nowrap overflow-hidden transition-all duration-300"
          :class="{
            'w-0 opacity-0': isCollapsed && !isMobile,
            'w-auto opacity-100': !isCollapsed || isMobile,
          }"
        >
          KasiPlay
        </h1>
      </div>

      <!-- Navigation -->
      <nav class="menu p-4">
        <ul class="space-y-2">
          <li v-for="(item, index) in menuItems" :key="index">
            <nuxt-link
              :to="item.link" v-on="{ click: isMobile ? closeSidebar : null }"
              class="flex items-center p-2 rounded hover:bg-navy-100 dark:hover:bg-gray-700 transition-colors"
              active-class="bg-gray-600 font-semibold"
              :class="{ 'justify-center': isCollapsed && !isMobile }"
              ,
              :title="isCollapsed && !isMobile ? item.label : ''"
            >
              <div class="w-5 h-5 flex items-center justify-center">
                <icon :name="item.icon" size="20" />
              </div>
              <span
                class="whitespace-nowrap overflow-hidden transition-all duration-300"
                :class="{
                  'w-0 ml-0 opacity-0': isCollapsed && !isMobile,
                  'w-auto ml-3 opacity-100': !isCollapsed || isMobile,
                }"
              >
                {{ item.label }}
              </span>
            </nuxt-link>
          </li>
        </ul>
      </nav>

      <!-- Theme Toggle -->
      <div
        class="p-4 mt-auto transition-all duration-300"
        :class="{ 'flex justify-center': isCollapsed && !isMobile }"
      >
        <button
          @click="toggleTheme"
          class="flex items-center p-2 rounded hover:bg-blue-700 dark:hover:bg-gray-700 transition-colors"
          :class="{ 'justify-center': isCollapsed && !isMobile }"
          :title="isCollapsed && !isMobile ? 'Toggle Theme' : ''"
        >
          <div class="w-5 h-5 flex items-center justify-center">
            <icon name="ph:moon-duotone" size="20" v-if="!isDark" />
            <icon name="ph:sun-duotone" size="20" v-if="isDark" />
          </div>
        </button>
      </div>
    </aside>

    <!-- Main Content -->
    <main
      class="main flex-1 flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors"
    >
      <!-- Header -->
      <header
        class="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700"
      >
        <div class="flex items-center justify-between p-4">
          <!-- Left side with toggle and title -->
          <div class="flex items-center">
            <button
              @click="toggleSidebar"
              class="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors mr-4"
            >
              <icon name="ph:list-bold" size="20" class="dark:text-white" />
            </button>
            <h6
              class="hidden md:flex font-semibold text-gray-800 dark:text-white"
            >
              Dashboard
            </h6>
          </div>

          <!-- Right side with notifications and profile -->
          <div class="flex items-center space-x-4">
            <!-- Notifications -->
            <button
              class="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors relative"
            >
              <icon name="ph:bell-duotone" size="20" class="dark:text-white" />
              <span
                class="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
              ></span>
            </button>

            <!-- Messages -->
            <nuxt-link
              to="/chats"
              class="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors relative"
            >
              <icon name="ph:chat-duotone" size="20" class="dark:text-white" />
              <span
                class="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"
              ></span>
            </nuxt-link>

            <!-- Profile Dropdown -->
            <div class="relative" ref="profileDropdown">
              <button
                @click="toggleProfileDropdown"
                class="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                  alt="Profile"
                  class="w-8 h-8 rounded-full object-cover"
                />
                <span class="hidden sm:flex items-center space-x-2">
                  <span
                    class="hidden sm:block text-gray-700 dark:text-gray-200 font-medium"
                    >Siyavuya Chagi</span
                  >

                  <icon
                    name="ph:caret-down-bold"
                    size="16"
                    class="dark:text-white transition-all duration-300"
                    :class="{ 'rotate-180': isProfileOpen }"
                  />
                </span>
              </button>

              <!-- Dropdown Menu -->
              <div
                v-show="isProfileOpen"
                class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-50"
              >
                <div class="p-3 border-b border-gray-200 dark:border-gray-700">
                  <p class="text-sm font-medium text-gray-900 dark:text-white">
                    Siyavuya Chagi
                  </p>
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    @siyavuyachagi
                  </p>
                </div>
                <nav class="p-2">
                  <nuxt-link
                    v-for="(item, index) in profileMenuItems"
                    :key="index"
                    :to="item.link"
                    class="flex items-center w-full p-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                  >
                    <!-- <component :is="item.icon" class="w-4 h-4 mr-3" /> -->
                    <icon :name="item.icon" size="16" class="mr-3" />
                    {{ item.label }}
                  </nuxt-link>
                  <button
                    class="flex items-center w-full p-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                  >
                    <icon name="ph:sign-out" size="16" class="mr-3" />
                    Sign out
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- Page Content -->
      <nuxt-page />

      <!-- Footer -->
      <Footer />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import Footer from "~/components/footer.vue";

// Reactive state
const isSidebarOpen = ref(false);
const isProfileOpen = ref(false);
const isDark = ref(false);
const screenWidth = ref();

// Computed properties
const isMobile = computed(() => screenWidth.value < 1024);
const isCollapsed = computed(() => !isSidebarOpen.value && !isMobile.value);

const sidebarClasses = computed(() => {
  if (isMobile.value) {
    return {
      "fixed inset-y-0 left-0 w-64 transform transition-transform": true,
      "-translate-x-full": !isSidebarOpen.value,
      "translate-x-0": isSidebarOpen.value,
    };
  } else {
    return {
      "relative flex flex-col": true,
      "w-16": isCollapsed.value,
      "w-60": !isCollapsed.value,
    };
  }
});

// Menu items
const menuItems = [
  {
    label: "Dashboard",
    icon: "ph:house-duotone",
    link: "/",
  },
  { label: "My team", icon: "ph:users-duotone", link: "/teams" },
  { label: "Squad", icon: "ph:users-three-duotone", link: "/squads" },
  { label: "Fixtures", icon: "ph:calendar-duotone", link: "/fixtures" },
  { label: "Training", icon: "ph:traffic-cone-duotone", link: "/trainings" },
  { label: "Tactics", icon: "ph:chalkboard-teacher-duotone", link: "/tactics" },
  { label: "Reports", icon: "ph:chart-line-up-duotone", link: "/reports" },
];

const profileMenuItems = [
  { label: "Profile", icon: "ph:user", link: "/account" },
  { label: "Settings", icon: "ph:gear", link: "/account/settings" },
  { label: "Help", icon: "ph:question-mark", link: "/support" },
];

// Refs
const profileDropdown = ref(null);

// Methods
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const closeSidebar = () => {
  isSidebarOpen.value = false;
};

const toggleProfileDropdown = () => {
  isProfileOpen.value = !isProfileOpen.value;
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

const handleResize = () => {
  screenWidth.value = window.innerWidth;
  if (!isMobile.value) {
    isProfileOpen.value = false;
  }
};

const handleClickOutside = (event: MouseEvent) => {
  if (profileDropdown.value && !profileDropdown.value.contains(event.target)) {
    isProfileOpen.value = false;
  }
};

// Lifecycle hooks
onMounted(() => {
  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    isDark.value = true;
    document.documentElement.classList.add("dark");
  }

  // Add event listeners
  window.addEventListener("resize", handleResize);
  document.addEventListener("click", handleClickOutside);

  screenWidth.value = window.innerWidth;
});

onUnmounted(() => {
  // Remove event listeners
  window.removeEventListener("resize", handleResize);
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
/* Custom scrollbar for sidebar */
.sidebar {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
}

.sidebar::-webkit-scrollbar {
  width: 6px;
}

.sidebar::-webkit-scrollbar-track {
  background: transparent;
}

.sidebar::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
}
</style>
