<template>
  <main class="lg:col-span-6 mb-6 lg:mb-0">
    <div class="space-y-4">
      <!-- Create Post -->
      <create-post />

      <!-- Filter Tabs -->
       <posts-filter />

      <!-- Posts -->
      <post />

      <!-- Load More -->
      <lazy-buttons-load-more-posts />
    </div>
  </main>
</template>
