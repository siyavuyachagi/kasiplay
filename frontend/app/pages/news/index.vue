<template>
  <div class="max-w-7xl mx-auto px-4 py-6">
    <!-- Page Header -->
    <div class="mb-6">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">News</h1>
      <p class="text-gray-600 dark:text-gray-400">
        Latest updates and stories from the world of Kasi football
      </p>
    </div>

    <!-- Categories -->
    <div class="flex flex-wrap gap-2 mb-6">
      <button
        v-for="category in categories"
        :key="category"
        @click="selectedCategory = category"
        class="px-4 py-2 rounded-lg font-medium text-sm transition-colors"
        :class="selectedCategory === category
          ? 'bg-blue-600 text-white'
          : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-500'">
        {{ category }}
      </button>
    </div>

    <div class="grid lg:grid-cols-3 gap-6">
      <!-- Main Content -->
      <div class="lg:col-span-2 space-y-6">
        <!-- Featured Article -->
        <article class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
          <div class="relative h-64 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
            <div class="absolute inset-0 flex items-center justify-center">
              <icon name="lucide:newspaper" size="80" class="text-white/20" />
            </div>
            <div class="absolute top-4 left-4">
              <span class="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                BREAKING NEWS
              </span>
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
              <span class="flex items-center space-x-1">
                <icon name="lucide:calendar" size="14" />
                <span>Nov 1, 2025</span>
              </span>
              <span class="flex items-center space-x-1">
                <icon name="lucide:clock" size="14" />
                <span>5 min read</span>
              </span>
            </div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-600 transition-colors">
              Orlando Pirates Secure Historic Victory in Soweto Derby
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              In a thrilling encounter at FNB Stadium, Orlando Pirates defeated Kaizer Chiefs 3-1 to claim bragging rights in the Soweto Derby. The match saw spectacular goals and intense action...
            </p>
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <div class="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span class="text-white text-xs font-bold">JS</span>
                </div>
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">John Smith</span>
              </div>
              <button class="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 flex items-center space-x-1">
                <span>Read More</span>
                <icon name="lucide:arrow-right" size="16" />
              </button>
            </div>
          </div>
        </article>

        <!-- News List -->
        <div class="space-y-4">
          <article
            v-for="article in articles"
            :key="article.id"
            class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:shadow-lg transition-shadow cursor-pointer">
            <div class="flex gap-4">
              <!-- Thumbnail -->
              <div class="w-32 h-32 flex-shrink-0 rounded-lg bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                <icon name="lucide:image" size="32" class="text-gray-400" />
              </div>
              
              <!-- Content -->
              <div class="flex-1 min-w-0">
                <div class="flex items-center space-x-2 mb-2">
                  <span class="px-2 py-1 text-xs font-medium rounded bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                    {{ article.category }}
                  </span>
                  <span class="text-xs text-gray-500 dark:text-gray-400">{{ article.date }}</span>
                </div>
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2 hover:text-blue-600 transition-colors line-clamp-2">
                  {{ article.title }}
                </h3>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                  {{ article.excerpt }}
                </p>
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-2">
                    <div class="w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                      <span class="text-white text-xs font-bold">{{ article.author.initials }}</span>
                    </div>
                    <span class="text-xs text-gray-600 dark:text-gray-400">{{ article.author.name }}</span>
                  </div>
                  <div class="flex items-center space-x-3 text-xs text-gray-500">
                    <span class="flex items-center space-x-1">
                      <icon name="lucide:eye" size="14" />
                      <span>{{ article.views }}</span>
                    </span>
                    <span class="flex items-center space-x-1">
                      <icon name="lucide:message-circle" size="14" />
                      <span>{{ article.comments }}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        <!-- Load More -->
        <div class="flex justify-center pt-4">
          <button class="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            Load More Articles
          </button>
        </div>
      </div>

      <!-- Sidebar -->
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
              class="flex space-x-3 cursor-pointer group">
              <div class="text-2xl font-bold text-gray-300 dark:text-gray-600">{{ index + 1 }}</div>
              <div class="flex-1">
                <h4 class="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
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
            class="w-full px-4 py-2 rounded-lg text-gray-900 mb-3 focus:outline-none focus:ring-2 focus:ring-white" />
          <button class="w-full bg-white text-blue-600 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
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
              class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 cursor-pointer transition-colors">
              #{{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
const selectedCategory = ref('All')
const categories = ['All', 'Matches', 'Transfers', 'Interviews', 'Analysis', 'Youth']

const articles = ref([
  {
    id: 1,
    title: 'Mamelodi Sundowns Announce Major Signing',
    excerpt: 'The Brazilians have secured the services of a highly-rated midfielder from Europe...',
    category: 'Transfers',
    date: 'Oct 31, 2025',
    views: '2.3k',
    comments: 45,
    author: { name: 'Sarah Johnson', initials: 'SJ' },
  },
  {
    id: 2,
    title: 'Young Star Shines in Youth League Final',
    excerpt: 'A 17-year-old forward scored a hat-trick to lead his team to victory...',
    category: 'Youth',
    date: 'Oct 30, 2025',
    views: '1.8k',
    comments: 32,
    author: { name: 'David Moyo', initials: 'DM' },
  },
  {
    id: 3,
    title: 'Coach Interview: Building a Winning Culture',
    excerpt: 'Exclusive sit-down with one of the league\'s most successful coaches...',
    category: 'Interviews',
    date: 'Oct 29, 2025',
    views: '3.1k',
    comments: 67,
    author: { name: 'Lisa Khumalo', initials: 'LK' },
  },
  {
    id: 4,
    title: 'Tactical Analysis: The Rise of High-Pressing',
    excerpt: 'How local teams are adopting modern tactical approaches...',
    category: 'Analysis',
    date: 'Oct 28, 2025',
    views: '1.5k',
    comments: 23,
    author: { name: 'Michael Dube', initials: 'MD' },
  },
])

const trendingStories = ref([
  { id: 1, title: 'Chiefs vs Pirates Derby Preview', views: '5.2k', date: '2 hours ago' },
  { id: 2, title: 'Top 10 Goals of the Season', views: '4.8k', date: '5 hours ago' },
  { id: 3, title: 'Transfer Window Deadline Day Recap', views: '4.1k', date: '1 day ago' },
  { id: 4, title: 'Player of the Month: October Edition', views: '3.9k', date: '2 days ago' },
  { id: 5, title: 'Injury Update: Key Players Return', views: '3.5k', date: '3 days ago' },
])

const popularTags = ['SowetoDerby', 'Transfers', 'MatchDay', 'YouthTalent', 'Champions', 'TopScorer']
</script>