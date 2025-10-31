<template>
  <div
    class="bg-gray-50 dark:bg-gray-900"
    :class="{
      'overflow-hidden h-screen lg:overflow-auto lg:h-auto':
        layoutStore.isLeftSidebarOpen || layoutStore.isRightSidebarOpen,
    }">
    <!-- Top Navigation Bar -->
    <TopNavigations />

    <!-- Live Match Banner -->
    <LiveMatchBanner v-if="true" />

    <!-- Main Content Area -->
    <slot />

    <!-- Footer  -->
    <DefaultFooter />

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

    <!-- Modals  -->
    <LoginModal />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

// Async components imports
const DefaultFooter = defineAsyncComponent(
  () => import("~/components/default-footer.vue")
);
const LiveMatchBanner = defineAsyncComponent(
  () => import("~/components/live-match-banner.vue")
);
const TopNavigations = defineAsyncComponent(
  () => import("~/components/top-navigations.vue")
);
const LoginModal = defineAsyncComponent(
  () => import("~/components/modals/login-modal.vue")
);

// Variables & Properties
const layoutStore = useFrontendLayoutStore();

// Expressions & Functions
const closeSidebars = () => {
  layoutStore.closeSidebar("left");
  layoutStore.closeSidebar("right");
};
</script>
