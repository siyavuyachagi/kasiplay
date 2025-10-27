<template>
  <div class="max-w-7xl mx-auto px-4 py-4 sm:py-6">
    <div class="lg:grid lg:grid-cols-12 lg:gap-6">
      <!-- Left Sidebar -->
      <left-sidebar />

      <!-- Center Feed -->
      <feed />

      <!-- Right Sidebar -->
      <right-sidebar />
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "default",
});
</script>
