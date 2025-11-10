<template>
  <div
    class="bg-gray-50 dark:bg-gray-900"
    :class="{
      'overflow-hidden h-screen lg:overflow-auto lg:h-auto':
        layoutStore.isLeftSidebarOpen || layoutStore.isRightSidebarOpen,
    }">
    <MainHeader />

    <!-- Main Content Area -->
    <slot />

    <!-- Footer  -->
    <MainFooter />
 
    <!-- Modals  -->
    <LoginModal />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

// Async components imports
const MainFooter = defineAsyncComponent(
  () => import("~/components/main-footer.vue")
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
