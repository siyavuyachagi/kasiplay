<template>
  <div
    class="bg-gray-50 dark:bg-gray-900"
    :class="{
      'overflow-hidden h-screen lg:overflow-auto lg:h-auto':
        layoutStore.isLeftSidebarOpen || layoutStore.isRightSidebarOpen,
    }">
    <MainHeader />

    <!-- Main Content Area -->
  <div class="max-w-7xl mx-auto px-4 py-4 sm:py-6">
    <div class="lg:grid lg:grid-cols-12 lg:gap-6">
      <!-- Left Sidebar -->
      <LeftSidebar />

      <!-- Page  -->
       <slot></slot>

      <!-- Right Sidebar -->
      <RightSidebar />
    </div>
  </div>

    <!-- Footer  -->
    <MainFooter />

    <!-- Modals  -->
    <LoginModal />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

// Async components imports
const LeftSidebar = defineAsyncComponent(
  () => import("~/components/left-sidebar.vue")
);
const RightSidebar = defineAsyncComponent(
  () => import("~/components/right-sidebar.vue")
);
const MainFooter = defineAsyncComponent(
  () => import("~/components/main-footer.vue")
);
const LoginModal = defineAsyncComponent(
  () => import("~/components/modals/login-modal.vue")
);

// Variables & Properties
const layoutStore = useFrontendLayoutStore();
</script>
