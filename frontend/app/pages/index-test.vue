<template>
  <NuxtLayout name="main">
    <template #header><MainHeader /></template>
    <template #sidebar-left><LeftSidebar /></template>
    <template #sidebar-right><RightSidebar /></template>

    <!-- Breadcrumb  -->
    <Breadcrumb :links="breadcrumbs" />

    <div class="space-y-4">
      <!-- Create Post -->
      <CreatePost />

      <!-- Filter Tabs -->
      <PostsFilter />

      <!-- Posts -->
      <Posts />

      <!-- Load More Posts -->
      <MorePostsButton />
    </div>

    <template #footer><MainFooter /></template>
  </NuxtLayout>
</template>

<script setup lang="ts">
const MainHeader = defineAsyncComponent(
  () => import("~/components/ui/main-header.vue")
);
const LeftSidebar = defineAsyncComponent(
  () => import("~/components/ui/left-sidebar.vue")
);
const RightSidebar = defineAsyncComponent(
  () => import("~/components/ui/right-sidebar.vue")
);
const MainFooter = defineAsyncComponent(
  () => import("~/components/ui/main-footer.vue")
);
const breadcrumbs = [{ label: "Feed", route: "/feed", active: true }];
</script>