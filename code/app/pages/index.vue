<template>
  <div class="lg:grid lg:grid-cols-12 lg:gap-6">
    <!-- Left Sidebar (25%) -->
    <div class="hidden lg:block lg:col-span-3 space-y-4 sticky top-20 h-fit">
      <UiDefaultSidebarLeft />
    </div>

    <!-- Center Feed (50%) -->
    <div class="lg:col-span-6 mb-6 lg:mb-0 space-y-4">
      <!-- Breadcrumb  -->
      <UiDefaultBreadcrumb :crumbs="breadcrumbs" />

      <div class="space-y-4">
        <!-- Create Post -->
        <UiDefaultCreatePost />

        <!-- Filter Tabs -->
        <UiDefaultFilterPosts />

        <!-- Posts -->
        <UiDefaultPosts />

        <!-- Load More Posts -->
        <UiDefaultLoadMorePostsButton />
      </div>
    </div>

    <!-- Right Sidebar (25%) -->
    <div class="hidden lg:block lg:col-span-3 space-y-4 sticky top-20 h-fit">
      <UiDefaultSidebarRight />
    </div>
  </div>
</template>

<script setup lang="ts">
const UiDefaultSidebarLeft = defineAsyncComponent(
  () => import("~/components/ui/default/sidebar-left.vue")
);
const UiDefaultBreadcrumb = defineAsyncComponent(
  () => import("~/components/ui/default/breadcrumb.vue")
);
const UiDefaultCreatePost = defineAsyncComponent(
  () => import("~/components/ui/default/create-post.vue")
);
const UiDefaultFilterPosts = defineAsyncComponent(
  () => import("~/components/ui/default/filter-posts.vue")
);
const UiDefaultPosts = defineAsyncComponent(
  () => import("~/components/ui/default/posts.vue")
);
const UiDefaultLoadMorePostsButton = defineAsyncComponent(
  () => import("~/components/ui/default/buttons/load-more-posts-button.vue")
);
const UiDefaultSidebarRight = defineAsyncComponent(
  () => import("~/components/ui/default/sidebar-right.vue")
);

definePageMeta({
  layout: "default",
});

const breadcrumbs = [{ label: "Feed", route: "/feed", active: true }];
</script>
