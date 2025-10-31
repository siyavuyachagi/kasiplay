<template>
  <aside
    class="lg:col-span-3 lg:h-min lg:rounded-lg"
    :class="[
      'fixed lg:static z-10',
      'top-28 bottom-0 right-0 lg:top-auto lg:bottom-auto',
      'w-80 lg:w-auto',
      'bg-white dark:bg-gray-800 lg:bg-transparent',
      'border-l lg:border-0 border-gray-200 dark:border-gray-700',
      'transition-transform duration-300 lg:transition-none',
      layoutStore.isRightSidebarOpen
        ? 'translate-x-0'
        : 'translate-x-full lg:translate-x-0',
    ]">
    <div class="h-full overflow-y-auto scrollbar-hide">
      <div class="p-4 space-y-4 pb-20">
        <!-- Close Button Mobile -->
        <div
          class="lg:hidden flex items-center justify-between pb-3 border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-800 z-10">
          <h3 class="font-bold text-gray-900 dark:text-white">Updates</h3>
          <button
            @click="closeSidebar"
            class="p-2 flex hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg transition-colors">
            <icon name="lucide:x" size="20" />
          </button>
        </div>

        <!-- Today's Fixtures - Collapsible -->
        <DailyFixturesCard />

        <!-- League Table - Collapsible -->
        <LeagueStandingsCard />

        <!-- Who to Follow - Collapsible -->
        <FollowSuggestionsCard />
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import DailyFixturesCard from "./cards/daily-fixtures-card.vue";
import FollowSuggestionsCard from "./cards/follow-suggestions-card.vue";
import LeagueStandingsCard from "./cards/League-standings-card.vue";

const layoutStore = useFrontendLayoutStore();

const closeSidebar = () => {
  layoutStore.closeSidebar("right");
};
</script>
