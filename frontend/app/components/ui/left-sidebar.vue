<template>
  <aside
    class="lg:col-span-3 lg:h-min lg:rounded-lg z-25 lg:z-20"
    :class="[
      'fixed lg:static',
      'top-0 bottom-0 left-0 lg:top-auto lg:bottom-auto',
      'w-80 lg:w-auto',
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
          class="lg:hidden flex items-center justify-between pb-3 border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-800 z-25">
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

  <Transition
    enter-active-class="transition-opacity duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0">
    <div
      v-if="layoutStore.isLeftSidebarOpen"
      @click="closeSidebar"
      class="fixed inset-0 bg-black/50 z-24 lg:hidden"></div>
  </Transition>
</template>

<script setup lang="ts">
const AnnouncementsCard = defineAsyncComponent(
  () => import("~/components/cards/announcements.card.vue")
);
const NavigationsCard = defineAsyncComponent(
  () => import("~/components/cards/navigations.card.vue")
);
const TrendingTopicsCard = defineAsyncComponent(
  () => import("~/components/cards/trending-topics.card.vue")
);

const layoutStore = useFrontendLayoutStore();

const closeSidebar = () => {
  layoutStore.closeSidebar("left");
};
</script>
