<template>
  <div class="space-y-6">
    <!-- Trending Stories -->
    <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
      <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
        <icon name="lucide:trending-up" size="20" class="mr-2 text-orange-500" />
        Trending Stories
      </h3>
      <div class="space-y-4">
        <div
          v-for="(story, index) in trendingStories"
          :key="story.id"
          class="flex space-x-3 cursor-pointer group"
        >
          <div class="text-2xl font-bold text-gray-300 dark:text-gray-600">{{ index + 1 }}</div>
          <div class="flex-1">
            <h4
              class="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors line-clamp-2 mb-1"
            >
              {{ story.title }}
            </h4>
            <div class="flex items-center space-x-2 text-xs text-gray-500">
              <span>{{ story.views }} views</span>
              <span>•</span>
              <span>{{ story.date }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Newsletter -->
    <div class="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-6 text-white">
      <icon name="lucide:mail" size="32" class="mb-3" />
      <h3 class="text-xl font-bold mb-2">Stay Updated</h3>
      <p class="text-sm text-blue-100 mb-4">
        Get the latest news and updates delivered to your inbox
      </p>
      <input
        type="email"
        placeholder="Your email"
        class="w-full px-4 py-2 rounded-lg text-gray-900 dark:text-gray-900 mb-3 focus:outline-none focus:ring-2 focus:ring-white bg-white dark:bg-gray-100"
      />
      <button
        class="w-full bg-white text-blue-600 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
      >
        Subscribe
      </button>
    </div>

    <!-- Popular Tags -->
    <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
      <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">Popular Tags</h3>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in popularTags"
          :key="tag"
          class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 cursor-pointer transition-colors"
        >
          #{{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const trendingStories = [
  { id: 1, title: "Chiefs vs Pirates Derby Preview", views: "5.2k", date: "2 hours ago" },
  { id: 2, title: "Top 10 Goals of the Season", views: "4.8k", date: "5 hours ago" },
  { id: 3, title: "Transfer Window Deadline Day Recap", views: "4.1k", date: "1 day ago" },
  { id: 4, title: "Player of the Month: October Edition", views: "3.9k", date: "2 days ago" },
  { id: 5, title: "Injury Update: Key Players Return", views: "3.5k", date: "3 days ago" },
];

const popularTags = ["SowetoDerby", "Transfers", "MatchDay", "YouthTalent", "Champions", "TopScorer"];
</script>
