<template>
  <div class="bg-gray-50 dark:bg-gray-900">
    <!-- Header -->
    <MainHeader />

    <!-- Main Content Area -->
    <div class="max-w-7xl mx-auto px-4 py-4 sm:py-6">
      <slot></slot>
    </div>

    <!-- Footer -->
    <MainFooter />

    <!-- Modals -->
    <LoginModal />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const layoutStore = useFrontendLayoutStore();
// Async components imports
const MainHeader = defineAsyncComponent(
  () => import("~/components/ui/main-header.vue")
);
const MainFooter = defineAsyncComponent(
  () => import("~/components/ui/main-footer.vue")
);
const LoginModal = defineAsyncComponent(
  () => import("~/components/modals/login.modal.vue")
);

// Disable overlay scrolling
watch(
  () => layoutStore.isRightSidebarOpen || layoutStore.isLeftSidebarOpen,
  (isOpen) => document.body.classList.toggle("overflow-hidden", isOpen)
);
</script>
