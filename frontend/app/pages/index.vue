<template>
  <div class="lg:grid lg:grid-cols-12 lg:gap-6">
    <!-- Left Sidebar -->
    <LeftSidebar />

    <!-- Center Feed -->
    <div class="lg:col-span-6 mb-6 lg:mb-0">
      <div class="space-y-4">
        <!-- Breadcrumb  -->
        <DefaultBreadcrumb />

        <!-- Create Post -->
        <CreatePost />

        <!-- Filter Tabs -->
        <PostsFilter />

        <!-- Posts -->
        <Posts />

        <!-- Load More Posts -->
        <MorePostsButton />
      </div>
    </div>

    <!-- Right Sidebar -->
    <RightSidebar />
  </div>
</template>

<script setup lang="ts">
const DefaultBreadcrumb = defineAsyncComponent(
  () => import("~/components/ui/default-breadcrumb.vue")
);
const CreatePost = defineAsyncComponent(
  () => import("~/components/ui/feed/create-post.vue")
);
const PostsFilter = defineAsyncComponent(
  () => import("~/components/ui/feed/posts-filter.vue")
);
const Posts = defineAsyncComponent(
  () => import("~/components/ui/feed/posts.vue")
);
const MorePostsButton = defineAsyncComponent(
  () => import("~/components/buttons/more-posts.button.vue")
);

definePageMeta({
  layout: "default",
});
</script>
