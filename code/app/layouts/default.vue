<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Header -->
    <UiDefaultHeader />

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <slot></slot>
    </main>

    <!-- Footer -->
    <UiDefaultFooter />
  </div>
</template>

<script setup lang="ts">
// Layout for public-facing pages
const UiDefaultHeader = defineAsyncComponent(
  () => import("~/components/ui/default/header.vue")
);
const UiDefaultFooter = defineAsyncComponent(
  () => import("~/components/ui/default/footer.vue")
);
</script>
