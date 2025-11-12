<template>
  <div class="lg:grid lg:grid-cols-12 lg:gap-6">
    <!-- Left Sidebar -->
    <LeftSidebar />

    <!-- Main Content -->
    <div class="lg:col-span-9 max-w-7xl mx-auto space-y-4">
      <Breadcrumb :links="breadcrumbs" />

      <!-- Page Header -->
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          News
        </h1>
        <p class="text-gray-600 dark:text-gray-400">
          Latest updates and stories from the world of Kasi football
        </p>
      </div>

      <!-- Categories -->
      <div class="flex flex-wrap gap-2">
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          class="px-2 py-1 rounded-lg font-medium text-sm transition-colors"
          :class="
            selectedCategory === category
              ? 'bg-blue-600 text-white'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-500'
          ">
          {{ category }}
        </button>
      </div>

      <div class="space-y-6">
        <!-- Featured Article -->
        <article
          class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow">
          <div
            class="relative h-64 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
            <div
              @click="router.replace(`/news/${generateRandomUUID()}`)"
              class="absolute inset-0 flex items-center justify-center cursor-pointer">
              <icon name="lucide:newspaper" size="80" class="text-white/20" />
            </div>
            <div class="absolute top-4 left-4">
              <span
                class="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                BREAKING NEWS
              </span>
            </div>
          </div>
          <div class="p-6">
            <div
              class="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
              <span class="flex items-center space-x-1">
                <icon name="lucide:calendar" size="14" />
                <span>Nov 1, 2025</span>
              </span>
              <span class="flex items-center space-x-1">
                <icon name="lucide:clock" size="14" />
                <span>5 min read</span>
              </span>
            </div>
            <NuxtLink :to="`/news/${generateRandomUUID()}`">
              <h2
                class="text-2xl font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-600 transition-colors">
                Orlando Pirates Secure Historic Victory in Soweto Derby
              </h2>
              <p
                class="text-gray-600 dark:text-gray-400 mb-4 hover:text-blue-600 transition-colors">
                In a thrilling encounter at FNB Stadium, Orlando Pirates
                defeated Kaizer Chiefs 3-1 to claim bragging rights in the
                Soweto Derby. The match saw spectacular goals and intense
                action...
              </p>
            </NuxtLink>
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <div
                  class="w-8 h-8 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span class="text-white text-xs font-bold">JS</span>
                </div>
                <span
                  class="text-sm font-medium text-gray-700 dark:text-gray-300">
                  John Smith
                </span>
              </div>
              <div class="flex items-center space-x-3 text-xs text-gray-500">
                <span class="flex items-center space-x-1">
                  <icon name="lucide:eye" size="14" />
                  <span>{{ `24k` }}</span>
                </span>
                <span class="flex items-center space-x-1">
                  <icon name="lucide:message-circle" size="14" />
                  <span>{{ "345" }}</span>
                </span>
              </div>
              <!-- <button
                class="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 flex items-center space-x-1">
                <span>Read More</span>
                <icon name="lucide:arrow-right" size="16" />
              </button> -->
            </div>
          </div>
        </article>

        <!-- News List -->
<div class="space-y-4">
          <article
            v-for="article in articles"
            :key="article.id"
            class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:shadow-lg transition-shadow cursor-pointer">
            <div class="flex flex-col sm:flex-row gap-4">
              <!-- Thumbnail -->
              <NuxtLink :key="article.id" :to="`/news/${generateRandomUUID()}`">
                <div
                  class="w-full sm:w-32 h-48 sm:h-32 shrink-0 rounded-lg bg-linear-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                  <icon name="lucide:image" size="32" class="text-gray-400" />
                </div>
              </NuxtLink>

              <!-- Content -->
              <div class="flex-1 min-w-0">
                <div class="flex items-center space-x-2 mb-2">
                  <span
                    class="px-2 py-1 text-xs font-medium rounded bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                    {{ article.category }}
                  </span>
                  <span class="text-xs text-gray-500 dark:text-gray-400">{{
                    article.date
                  }}</span>
                </div>
                <NuxtLink :to="`/news/${article.id}`">
                  <h3
                    class="text-lg font-bold text-gray-900 dark:text-white mb-2 hover:text-blue-600 transition-colors line-clamp-2">
                    {{ article.title }}
                  </h3>
                </NuxtLink>
                <p
                  class="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                  {{ article.excerpt }}
                </p>
                <div class="flex justify-between sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div class="flex items-center space-x-2">
                    <div
                      class="w-6 h-6 rounded-full bg-linear-to-br from-green-500 to-green-700 flex items-center justify-center">
                      <span class="text-white text-xs font-bold">{{
                        article.author.initials
                      }}</span>
                    </div>
                    <span class="text-xs text-gray-600 dark:text-gray-400">{{
                      article.author.name
                    }}</span>
                  </div>
                  <div
                    class="flex items-center space-x-3 text-xs text-gray-500 dark:text-gray-400">
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
          <button
            @click="router.replace(`/news/${generateRandomUUID()}`)"
            class="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            Load more
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { generateRandomUUID } from "~/utilities/generate-random-uuid";

const Breadcrumb = defineAsyncComponent(
  () => import("~/components/ui/breadcrumb.vue")
);
const breadcrumbs = [{ label: "News", route: "/news" }];
const router = useRouter();
definePageMeta({
  layout: "default",
});

const selectedCategory = ref("All");
const categories = [
  "All",
  "Matches",
  "Transfers",
  "Interviews",
  "Analysis",
  "Youth",
];

const articles = ref([
  {
    id: generateRandomUUID(),
    title: "Mamelodi Sundowns Announce Major Signing",
    excerpt:
      "The Brazilians have secured the services of a highly-rated midfielder from Europe...",
    category: "Transfers",
    date: "Oct 31, 2025",
    views: "2.3k",
    comments: 45,
    author: { name: "Sarah Johnson", initials: "SJ" },
  },
  {
    id: generateRandomUUID(),
    title: "Young Star Shines in Youth League Final",
    excerpt:
      "A 17-year-old forward scored a hat-trick to lead his team to victory...",
    category: "Youth",
    date: "Oct 30, 2025",
    views: "1.8k",
    comments: 32,
    author: { name: "David Moyo", initials: "DM" },
  },
  {
    id: generateRandomUUID(),
    title: "Coach Interview: Building a Winning Culture",
    excerpt:
      "Exclusive sit-down with one of the league's most successful coaches...",
    category: "Interviews",
    date: "Oct 29, 2025",
    views: "3.1k",
    comments: 67,
    author: { name: "Lisa Khumalo", initials: "LK" },
  },
  {
    id: generateRandomUUID(),
    title: "Tactical Analysis: The Rise of High-Pressing",
    excerpt: "How local teams are adopting modern tactical approaches...",
    category: "Analysis",
    date: "Oct 28, 2025",
    views: "1.5k",
    comments: 23,
    author: { name: "Michael Dube", initials: "MD" },
  },
]);
</script>
