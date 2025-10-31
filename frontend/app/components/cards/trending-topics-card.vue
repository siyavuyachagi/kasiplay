<template>
  <div
    class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300">
    <button
      @click="isCollapsed = !isCollapsed"
      class="w-full p-3 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
      <div class="flex items-center space-x-2">
        <icon name="lucide:trending-up" size="16" class="text-orange-500" />
        <h3 class="font-semibold text-sm text-gray-900 dark:text-white">
          Trending
        </h3>
      </div>
      <icon
        :name="isCollapsed ? 'lucide:chevron-up' : 'lucide:chevron-down'"
        size="16"
        class="text-gray-500 transition-transform" />
    </button>
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="max-h-0 opacity-0"
      enter-to-class="max-h-96 opacity-100"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="max-h-96 opacity-100"
      leave-to-class="max-h-0 opacity-0">
      <div v-show="!isCollapsed" class="p-2 overflow-hidden">
        <div
          v-for="trend in trendingTopics"
          :key="trend.tag"
          class="px-3 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors cursor-pointer">
          <div class="flex items-center justify-between">
            <div>
              <div
                class="text-sm font-semibold text-blue-600 dark:text-blue-400">
                {{ trend.tag }}
              </div>
              <div class="text-xs text-gray-500 dark:text-gray-400">
                {{ trend.posts }} posts
              </div>
            </div>
            <icon name="lucide:flame" size="16" class="text-orange-500" />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
const isCollapsed = ref(false);
const trendingTopics = [
  { tag: "#KasiPremierLeague", posts: 1234 },
  { tag: "#ChiefsVsPirates", posts: 892 },
  { tag: "#PlayerOfTheMonth", posts: 567 },
  { tag: "#LocalFootball", posts: 445 },
];
</script>
