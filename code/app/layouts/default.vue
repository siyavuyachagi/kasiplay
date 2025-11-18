<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Header -->
    <DefaultHeader />

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <slot></slot>
    </main>

    <!-- Footer -->
    <DefaultFooter />
  </div>


  <!-- Modals -->
  <!-- Mobile Sidebar Modals -->
  <DefaultLeftSidebarModal />
  <DefaultRightSidebarModal />
</template>

<script setup lang="ts">
// Layout for public-facing pages
const DefaultHeader = defineAsyncComponent(
  () => import("~/components/default/header.vue")
);
const DefaultFooter = defineAsyncComponent(
  () => import("~/components/default/footer.vue")
);
const DefaultLeftSidebarModal = defineAsyncComponent(
  () => import("~/components/default/modals/left-sidebar-modal.vue")
);
const DefaultRightSidebarModal = defineAsyncComponent(
  () => import("~/components/default/modals/right-sidebar-modal.vue")
);
</script>
