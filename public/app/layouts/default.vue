<template>
  <div
    class="bg-gray-50 dark:bg-gray-900"
    :class="{
      'overflow-hidden h-screen lg:overflow-auto lg:h-auto':
        layoutStore.isLeftSidebarOpen || layoutStore.isRightSidebarOpen,
    }">
    <!-- Top Navigation Bar -->
    <top-navigations />
    <!-- Live Match Banner -->
    <live-match-banner />

    <!-- Main Content Area -->
    <slot />

    <!-- Footer  -->
    <default-footer />

    <!-- Mobile Overlay -->
    <transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0">
      <div
        v-if="layoutStore.isLeftSidebarOpen || layoutStore.isRightSidebarOpen"
        @click="closeSidebars"
        class="fixed inset-0 bg-black/50 z-20 lg:hidden"
        style="top: 112px"></div>
    </transition>
  </div>
</template>

<script setup lang="ts">
const layoutStore = useLayoutStore();

const closeSidebars = () => {
  layoutStore.closeSidebar("left");
  layoutStore.closeSidebar("right");
};
</script>
