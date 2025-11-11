<template>
  <!-- Sidebar - FIXED Z-INDEX -->
  <aside
    class="fixed inset-y-0 left-0 z-50 w-64 sm:w-72 lg:w-80 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 lg:z-auto shadow-xl lg:shadow-none overflow-hidden flex flex-col lg:mt-0"
    :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'"
    style="top: 65px">
    <!-- Mobile Sidebar Header with Close Button -->
    <div
      class="lg:hidden flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 shrink-0">
      <div class="flex items-center space-x-3">
        <div
          class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <span class="text-white text-sm font-semibold">⚽</span>
        </div>
        <span class="text-lg font-semibold text-gray-900 dark:text-white"
          >KasiPlay</span
        >
      </div>
      <button
        @click="sidebarOpen = false"
        class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
        <icon
          name="lucide:x"
          size="20"
          class="text-gray-500 dark:text-gray-400" />
      </button>
    </div>

    <!-- Scrollable Content -->
    <div
      class="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
      <!-- Overview Card -->
      <DashboardSidebarFederationCard v-if="true" />
      <DashboardSidebarClubCard v-else />

      <!-- Navigation -->
      <DashboardNavigationsSidebar />

      <!-- Recent Activities -->
      <RecentActivitiesSidebar />

      <!-- Pending Applications Badge -->
      <DashboardPendingApplicationsCard />
    </div>

    <!-- Fixed sidebar footer -->
    <DashboardSidebarFooter />
  </aside>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { defineAsyncComponent } from "vue";

const RecentActivitiesSidebar = defineAsyncComponent(
  () => import("~/components/dashboard/sidebar/recent-activities.sidebar.vue")
);
const DashboardPendingApplicationsCard = defineAsyncComponent(
  () => import("~/components/dashboard/cards/pending-applications.card.vue")
);
const DashboardSidebarFooter = defineAsyncComponent(
  () => import("~/components/dashboard/sidebar/footer.sidebar.vue")
);
const DashboardNavigationsSidebar = defineAsyncComponent(
  () => import("~/components/dashboard/sidebar/navigations.sidebar.vue")
);

// Props
const sidebarOpen = ref(false);
const activeNav = ref("Dashboard");

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
