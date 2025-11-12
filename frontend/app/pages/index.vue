<template>
  <div class="lg:grid lg:grid-cols-12 lg:gap-6">
    <!-- Left Sidebar -->
    <LeftSidebar />

    <!-- Center Feed -->
    <div class="lg:col-span-6 mb-6 lg:mb-0 space-y-4">
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
    </div>

    <!-- Right Sidebar -->
    <RightSidebar />
  </div>
</template>

<script setup lang="ts">
const Breadcrumb = defineAsyncComponent(
  () => import("~/components/ui/breadcrumb.vue")
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

const breadcrumbs = [{ label: "Feed", route: "/feed", active: true }];

definePageMeta({
  layout: "default",
});
</script>
