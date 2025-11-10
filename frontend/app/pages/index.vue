<template>
  <!-- Center Feed -->
  <div class="lg:col-span-6 mb-6 lg:mb-0">
    <div class="space-y-4">
      <!-- Create Post -->
      <CreatePost />

      <!-- Filter Tabs -->
      <PostsFilter />

      <!-- Posts -->
      <Post />

      <!-- Load More -->
      <LoadMorePostsBtn />
    </div>
  </div>
</template>
<script setup lang="ts">
import LoadMorePostsBtn from "~/components/buttons/load-more-posts-btn.vue";
import CreatePost from "~/components/feed/create-post.vue";
import Post from "~/components/feed/post.vue";
import LeftSidebar from "~/components/left-sidebar.vue";
import PostsFilter from "~/components/feed/posts-filter.vue";
import RightSidebar from "~/components/right-sidebar.vue";

definePageMeta({
  layout: "default",
});
</script>
