<template>
  <!-- Content section -->
  <DashboardFederationIndex v-if="true" />
  <DashboardClubIndex v-else />
</template>

<script setup lang="ts">
const DashboardFederationIndex = defineAsyncComponent(
  () => import("~/components/dashboard/federation-index.vue")
);
const DashboardClubIndex = defineAsyncComponent(
  () => import("~/components/dashboard/club-index.vue")
);
definePageMeta({
  layout: "dashboard",
});
</script>