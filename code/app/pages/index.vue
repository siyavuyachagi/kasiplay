<template>
  <div class="lg:grid lg:grid-cols-12 lg:gap-6">
    <!-- Left Sidebar (25%) -->
    <div class="hidden lg:block lg:col-span-3 space-y-4 sticky top-20 h-fit">
      <DefaultSidebarLeft />
    </div>

    <!-- Center Feed (50%) -->
    <div class="lg:col-span-6 mb-6 lg:mb-0 space-y-4">
      <!-- Breadcrumb  -->
      <DefaultBreadcrumb :crumbs="breadcrumbs" />

      <div class="space-y-4">
        <!-- Create Post -->
        <DefaultCreatePost />

        <!-- Filter Tabs -->
        <DefaultFilterPosts />

        <!-- Posts -->
        <DefaultPosts />

        <!-- Load More Posts -->
        <DefaultLoadMorePostsButton />
      </div>
    </div>

    <!-- Right Sidebar (25%) -->
    <div class="hidden lg:block lg:col-span-3 space-y-4 sticky top-20 h-fit">
      <DefaultSidebarRight />
    </div>
  </div>
</template>

<script setup lang="ts">
const DefaultSidebarLeft = defineAsyncComponent(
  () => import("~/components/default/sidebar-left.vue")
);
const DefaultBreadcrumb = defineAsyncComponent(
  () => import("~/components/default/breadcrumb.vue")
);
const DefaultCreatePost = defineAsyncComponent(
  () => import("~/components/default/create-post.vue")
);
const DefaultFilterPosts = defineAsyncComponent(
  () => import("~/components/default/filter-posts.vue")
);
const DefaultPosts = defineAsyncComponent(
  () => import("~/components/default/posts.vue")
);
const DefaultLoadMorePostsButton = defineAsyncComponent(
  () => import("~/components/default/buttons/load-more-posts-button.vue")
);
const DefaultSidebarRight = defineAsyncComponent(
  () => import("~/components/default/sidebar-right.vue")
);

definePageMeta({
  layout: "default",
});

const breadcrumbs = [{ label: "Feed", route: "/feed", active: true }];
</script>
