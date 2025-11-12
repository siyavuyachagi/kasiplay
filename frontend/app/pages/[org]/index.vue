<!-- pages/index.vue -->
<template>
  <!-- Content section -->
  <DashboardFederationIndex v-if="true" />
  <DashboardClubIndex v-else />
</template>

<script setup lang="ts">
const DashboardFederationIndex = defineAsyncComponent(
  () => import("~/components/dashboard/ui/federation-index.vue")
);
const DashboardClubIndex = defineAsyncComponent(
  () => import("~/components/dashboard/ui/club-index.vue")
);
definePageMeta({
  layout: "dashboard-2-col-layout",
});
</script>
