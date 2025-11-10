<template>
  <header class="sticky top-0 z-25">
    <!-- Top Navigation Bar -->
    <TopNavigations />

    <!-- Live Match Banner -->
    <LiveMatchBanner />
  </header>
</template>

<script setup lang="ts">
const LiveMatchBanner = defineAsyncComponent(
  () => import("~/components/ui/live-match-banner.vue")
);
const TopNavigations = defineAsyncComponent(
  () => import("~/components/ui/top-navigations.vue")
);
</script>
