<template>
  <div class="bg-gray-50 dark:bg-gray-900">
    <!-- Header -->
    <MainHeader />

    
    <!-- Main Content -->
    <main class="max-w-5xl mx-auto px-4 py-4 sm:py-6">
      <!-- Breadcrumb  -->
      <DefaultBreadcrumb />
      
      <slot></slot>
    </main>

    <!-- Footer -->
    <MainFooter />

    <!-- Modals -->
    <LoginModal />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

// Async components imports
const MainHeader = defineAsyncComponent(
  () => import("~/components/main-header.vue")
);
const DefaultBreadcrumb = defineAsyncComponent(
  () => import("~/components/ui/default-breadcrumb.vue")
);
const MainFooter = defineAsyncComponent(
  () => import("~/components/main-footer.vue")
);
const LoginModal = defineAsyncComponent(
  () => import("~/components/modals/login-modal.vue")
);
</script>
