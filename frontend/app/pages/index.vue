<template>
  <!-- Center Feed -->
  <div class="lg:col-span-6 mb-6 lg:mb-0">
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
</template>

<script setup lang="ts">
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
  layout: "default-3-col",
});
</script>
