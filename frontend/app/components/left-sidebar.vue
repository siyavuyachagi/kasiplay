<template>
  <aside
    class="lg:col-span-3 lg:h-min lg:rounded-lg"
    :class="[
      'fixed lg:static',
      'top-28 bottom-0 left-0 lg:top-auto lg:bottom-auto',
      'w-72 lg:w-auto',
      'bg-white dark:bg-gray-800 lg:bg-transparent',
      'border-r lg:border-0 border-gray-200 dark:border-gray-700',
      'transition-transform duration-300 lg:transition-none',
      layoutStore.isLeftSidebarOpen
        ? 'translate-x-0'
        : '-translate-x-full lg:translate-x-0',
    ]">
    <div class="h-full overflow-y-auto scrollbar-hide">
      <div class="p-4 space-y-4 pb-20">
        <!-- Close Button Mobile -->
        <div
          class="lg:hidden flex items-center justify-between pb-3 border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-800 z-10">
          <h3 class="font-bold text-gray-900 dark:text-white">Menu</h3>
          <button
            @click="closeSidebar"
            class="p-2 flex hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg transition-colors">
            <icon name="lucide:x" size="20" />
          </button>
        </div>

        <!-- Navigation - Collapsible -->
        <NavigationsCard />

        <!-- Announcements - Collapsible -->
        <AnnouncementsCard />

        <!-- Trending - Collapsible -->
        <TrendingTopicsCard />
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import AnnouncementsCard from "./cards/announcements-card.vue";
import NavigationsCard from "./cards/navigations-card.vue";
import TrendingTopicsCard from "./cards/trending-topics-card.vue";

const layoutStore = useFrontendLayoutStore();

const closeSidebar = () => {
  layoutStore.closeSidebar("left");
};
</script>
