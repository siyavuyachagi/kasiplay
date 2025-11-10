<!-- layouts/default-2-col-left.vue  -->

<template>
  <div
    class="bg-gray-50 dark:bg-gray-900"
    :class="{
      'overflow-hidden h-screen lg:overflow-auto lg:h-auto':
        layoutStore.isLeftSidebarOpen,
    }">
    <MainHeader />

    <!-- Main Content Area -->
    <div class="max-w-7xl mx-auto px-4 py-4 sm:py-6">
      <div class="flex lg:gap-6">
        <!-- Left Sidebar -->
        <div class="w-75">
          <LeftSidebar />
        </div>

        <!-- Main Content -->
        <div class="flex-1">
          <slot></slot>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <MainFooter />

    <!-- Modals -->
    <LoginModal />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const LeftSidebar = defineAsyncComponent(
  () => import("~/components/ui/left-sidebar.vue")
);

const MainFooter = defineAsyncComponent(
  () => import("~/components/ui/main-footer.vue")
);
const LoginModal = defineAsyncComponent(
  () => import("~/components/modals/login.modal.vue")
);
const layoutStore = useFrontendLayoutStore();
</script>
