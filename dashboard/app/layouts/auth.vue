<template>
  <div
    class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
    <!-- Header -->
    <layout-auth-header />

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-8 lg:py-12">
      <slot />
    </main>

    <!-- Footer -->
    <layout-auth-footer />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
</script>
