<template>
  <header class="sticky top-0 z-20 lg:z-25">
    <!-- Top Navigation Bar -->
    <UiDefaultHeaderNavigations />

    <!-- Live Match Banner -->
    <UiDefaultLiveMatchBanner />
  </header>
</template>

<script setup lang="ts">
const UiDefaultHeaderNavigations = defineAsyncComponent(
  () => import("~/components/ui/default/header-navigations.vue")
);
const UiDefaultLiveMatchBanner = defineAsyncComponent(
  () => import("~/components/ui/default/live-match-banner.vue")
);
</script>