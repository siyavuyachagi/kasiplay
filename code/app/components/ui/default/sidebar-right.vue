<template>
  <aside
    class="lg:col-span-3 lg:h-min lg:rounded-lg z-25 lg:z-20"
    :class="[
      'fixed lg:static',
      'top-0 bottom-0 right-0 lg:top-auto lg:bottom-auto',
      'w-80 lg:w-auto',
      'bg-white dark:bg-gray-800 lg:bg-transparent',
      'border-l lg:border-0 border-gray-200 dark:border-gray-700',
      'transition-transform duration-300 lg:transition-none',
      isOpen
        ? 'translate-x-0'
        : 'translate-x-full lg:translate-x-0',
    ]">
    <div class="h-full overflow-y-auto scrollbar-hide">
      <div class="p-4 space-y-4 pb-20">
        <!-- Close Button Mobile -->
        <div
          class="lg:hidden flex items-center justify-between pb-3 border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-800 z-25">
          <h3 class="font-bold text-gray-900 dark:text-white">Updates</h3>
          <button
            @click="console.log('Close sidebar')"
            class="p-2 flex hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg transition-colors">
            <icon name="lucide:x" size="20" />
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

  <Transition
    enter-active-class="transition-opacity duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0">
    <div
      v-if="isOpen"
      @click="console.log('Close sidebar')"
      class="fixed inset-0 bg-black/50 z-24 lg:hidden"></div>
  </Transition>
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

const isOpen = ref(false);
</script>
