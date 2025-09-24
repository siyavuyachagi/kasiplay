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
              :to="item.link"
              v-on="{ click: isMobile ? closeSidebar : null }"
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
      <Header />

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
import Header from "~/components/header.vue";

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

// Refs
const profileDropdown = ref(null);

// Methods

const closeSidebar = () => {
  isSidebarOpen.value = false;
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
