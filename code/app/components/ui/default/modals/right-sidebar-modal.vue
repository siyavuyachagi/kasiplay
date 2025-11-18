<template>
  <Teleport to="body">
    <!-- Right Sidebar Modal -->
    <Transition
      enter-active-class="transition-transform duration-300 ease-out"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition-transform duration-300 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full">
      <aside
        v-if="mobileSidebars.isRightSidebarOpen"
        class="fixed top-0 bottom-0 right-0 w-80 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 z-50 lg:hidden">
        <div class="h-full overflow-y-auto scrollbar-hide">
          <div class="p-4 space-y-4 pb-20">
            <!-- Close Button -->
            <div
              class="flex items-center justify-between pb-3 border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-800 z-10">
              <h3 class="font-bold text-gray-900 dark:text-white">Info</h3>
              <button
                @click="mobileSidebars.toggleRightSidebar()"
                class="p-2 flex hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg transition-colors">
                <Icon name="lucide:x" size="20" />
              </button>
            </div>

            <!-- Today's Fixtures - Collapsible -->
            <UiDefaultDailyFixturesCard />

            <!-- League Table - Collapsible -->
            <UiDefaultLeagueStandingsCard />

            <!-- Who to Follow - Collapsible -->
            <UiDefaultFollowSuggestionsCard />
          </div>
        </div>
      </aside>
    </Transition>

    <!-- Backdrop for Right Sidebar -->
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0">
      <div
        v-if="mobileSidebars.isRightSidebarOpen"
        @click="mobileSidebars.toggleRightSidebar()"
        class="fixed inset-0 bg-black/50 z-40 lg:hidden"></div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const UiDefaultDailyFixturesCard = defineAsyncComponent(
  () => import("~/components/ui/default/cards/daily-fixtures-card.vue")
);
const UiDefaultLeagueStandingsCard = defineAsyncComponent(
  () => import("~/components/ui/default/cards/league-standings-card.vue")
);
const UiDefaultFollowSuggestionsCard = defineAsyncComponent(
  () => import("~/components/ui/default/cards/follow-suggestions-card.vue")
);

const mobileSidebars = useMobileSidebars();
</script>
