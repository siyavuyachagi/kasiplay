<template>
  <div
    class="bg-gray-50 dark:bg-gray-900"
    :class="{
      'overflow-hidden h-screen lg:overflow-auto lg:h-auto':
        layoutStore.isRightSidebarOpen,
    }">
    <MainHeader />

    <!-- Main Content Area -->
    <div class="max-w-7xl mx-auto px-4 py-4 sm:py-6">
      <div class="lg:grid lg:grid-cols-12 lg:gap-6">
        <!-- Page Content -->
        <div class="lg:col-span-9 xl:col-span-10">
          <slot></slot>
        </div>

        <!-- Right Sidebar -->
        <RightSidebar />
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

const RightSidebar = defineAsyncComponent(
  () => import("~/components/ui/right-sidebar.vue")
);
const MainFooter = defineAsyncComponent(
  () => import("~/components/ui/main-footer.vue")
);
const LoginModal = defineAsyncComponent(
  () => import("~/components/modals/login.modal.vue")
);
const layoutStore = useFrontendLayoutStore();
</script>
