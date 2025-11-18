<template>
  <header class="sticky top-0 z-20 lg:z-25">
    <!-- Top Navigation Bar -->
    <DefaultHeaderNavigations />

    <!-- Live Match Banner -->
    <DefaultLiveMatchBanner />
  </header>
</template>

<script setup lang="ts">
const DefaultHeaderNavigations = defineAsyncComponent(
  () => import("~/components/default/header-navigations.vue")
);
const DefaultLiveMatchBanner = defineAsyncComponent(
  () => import("~/components/default/live-match-banner.vue")
);
</script>