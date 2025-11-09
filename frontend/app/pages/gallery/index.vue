<template>
  <div class="max-w-7xl mx-auto px-4 py-6">
    <!-- Page Header -->
    <div class="mb-6">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
        Gallery
      </h1>
      <p class="text-gray-600 dark:text-gray-400">
        Explore memorable moments captured on and off the field
      </p>
    </div>

    <!-- Filters -->
    <div
      class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 mb-6">
      <div class="flex flex-wrap gap-4">
        <div class="flex space-x-2">
          <button
            v-for="type in mediaTypes"
            :key="type.value"
            @click="selectedType = type.value"
            class="px-4 py-2 rounded-lg font-medium text-sm transition-colors flex items-center space-x-2"
            :class="
              selectedType === type.value
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            ">
            <icon :name="type.icon" size="16" />
            <span>{{ type.label }}</span>
          </button>
        </div>

        <select
          v-model="selectedCategory"
          class="px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500">
          <option value="all">All Categories</option>
          <option value="matches">Match Day</option>
          <option value="training">Training</option>
          <option value="events">Events</option>
          <option value="celebrations">Celebrations</option>
        </select>

        <select
          v-model="selectedTeam"
          class="px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500">
          <option value="all">All Teams</option>
          <option value="pirates">Orlando Pirates</option>
          <option value="chiefs">Kaizer Chiefs</option>
          <option value="sundowns">Mamelodi Sundowns</option>
        </select>
      </div>
    </div>

    <!-- Stats Bar -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <div
        class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 text-center">
        <div class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
          1,234
        </div>
        <div class="text-sm text-gray-600 dark:text-gray-400">Photos</div>
      </div>
      <div
        class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 text-center">
        <div
          class="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">
          456
        </div>
        <div class="text-sm text-gray-600 dark:text-gray-400">Videos</div>
      </div>
      <div
        class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 text-center">
        <div class="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
          89
        </div>
        <div class="text-sm text-gray-600 dark:text-gray-400">Albums</div>
      </div>
      <div
        class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 text-center">
        <div
          class="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1">
          12.5k
        </div>
        <div class="text-sm text-gray-600 dark:text-gray-400">Views</div>
      </div>
    </div>

    <!-- Featured Album -->
    <div
      class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-6">
      <div class="relative h-64 bg-gradient-to-br from-blue-500 to-purple-600">
        <div class="absolute inset-0 flex items-center justify-center">
          <icon name="lucide:images" size="80" class="text-white/20" />
        </div>
        <div class="absolute top-4 left-4">
          <span
            class="px-3 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full">
            FEATURED
          </span>
        </div>
      </div>
      <div class="p-6">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Soweto Derby 2025 - Match Highlights
        </h2>
        <p class="text-gray-600 dark:text-gray-400 mb-4">
          Relive the excitement from one of the most thrilling matches of the
          season. 125 photos capturing every moment of action.
        </p>
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4 text-sm text-gray-500">
            <span class="flex items-center space-x-1">
              <icon name="lucide:image" size="16" />
              <span>125 photos</span>
            </span>
            <span class="flex items-center space-x-1">
              <icon name="lucide:calendar" size="16" />
              <span>Oct 28, 2025</span>
            </span>
            <span class="flex items-center space-x-1">
              <icon name="lucide:eye" size="16" />
              <span>2.3k views</span>
            </span>
          </div>
          <button
            class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
            View Album
          </button>
        </div>
      </div>
    </div>

    <!-- Gallery Grid -->
    <div class="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
      <div
        v-for="item in galleryItems"
        :key="item.id"
        class="break-inside-avoid bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
        <!-- Image/Video Placeholder -->
        <div
          class="relative overflow-hidden"
          :style="{ height: item.height + 'px' }">
          <div
            class="absolute inset-0 bg-gradient-to-br"
            :class="item.gradient">
            <div class="absolute inset-0 flex items-center justify-center">
              <icon
                :name="
                  item.type === 'video' ? 'lucide:play-circle' : 'lucide:image'
                "
                size="48"
                class="text-white/40 group-hover:scale-110 transition-transform" />
            </div>
          </div>

          <!-- Media Type Badge -->
          <div class="absolute top-2 right-2">
            <span
              v-if="item.type === 'video'"
              class="px-2 py-1 bg-black/70 text-white text-xs font-medium rounded flex items-center space-x-1">
              <icon name="lucide:video" size="12" />
              <span>{{ item.duration }}</span>
            </span>
          </div>

          <!-- Overlay on Hover -->
          <div
            class="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
            <button
              class="p-3 bg-white rounded-full transform scale-0 group-hover:scale-100 transition-transform">
              <icon name="lucide:expand" size="20" class="text-gray-900" />
            </button>
          </div>
        </div>

        <!-- Info -->
        <div class="p-3">
          <h3
            class="font-semibold text-sm text-gray-900 dark:text-white mb-1 line-clamp-2">
            {{ item.title }}
          </h3>
          <div
            class="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>{{ item.date }}</span>
            <div class="flex items-center space-x-2">
              <span class="flex items-center space-x-1">
                <icon name="lucide:heart" size="12" />
                <span>{{ item.likes }}</span>
              </span>
              <span class="flex items-center space-x-1">
                <icon name="lucide:eye" size="12" />
                <span>{{ item.views }}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Load More -->
    <div class="flex justify-center mt-8">
      <button
        class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
        Load More
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const selectedType = ref("all");
const selectedCategory = ref("all");
const selectedTeam = ref("all");

const mediaTypes = [
  { value: "all", label: "All Media", icon: "lucide:layout-grid" },
  { value: "photos", label: "Photos", icon: "lucide:image" },
  { value: "videos", label: "Videos", icon: "lucide:video" },
];

const galleryItems = ref([
  {
    id: 1,
    type: "photo",
    title: "Goal Celebration - Thabo Mkhize",
    date: "Oct 31, 2025",
    likes: 234,
    views: 1200,
    height: 250,
    gradient: "from-blue-500 to-purple-600",
  },
  {
    id: 2,
    type: "video",
    title: "Match Highlights: Pirates vs Chiefs",
    date: "Oct 30, 2025",
    duration: "5:23",
    likes: 567,
    views: 3400,
    height: 180,
    gradient: "from-red-500 to-orange-600",
  },
  {
    id: 3,
    type: "photo",
    title: "Team Training Session",
    date: "Oct 29, 2025",
    likes: 145,
    views: 890,
    height: 300,
    gradient: "from-green-500 to-teal-600",
  },
  {
    id: 4,
    type: "photo",
    title: "Fan Zone Atmosphere",
    date: "Oct 28, 2025",
    likes: 189,
    views: 1050,
    height: 220,
    gradient: "from-yellow-500 to-orange-600",
  },
  {
    id: 5,
    type: "video",
    title: "Player Interview: Sipho Ndlovu",
    date: "Oct 27, 2025",
    duration: "3:45",
    likes: 312,
    views: 2100,
    height: 200,
    gradient: "from-purple-500 to-pink-600",
  },
  {
    id: 6,
    type: "photo",
    title: "Trophy Presentation Ceremony",
    date: "Oct 26, 2025",
    likes: 445,
    views: 2800,
    height: 280,
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    id: 7,
    type: "photo",
    title: "Behind the Scenes: Match Preparation",
    date: "Oct 25, 2025",
    likes: 178,
    views: 950,
    height: 240,
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: 8,
    type: "video",
    title: "Top 10 Saves of the Month",
    date: "Oct 24, 2025",
    duration: "4:12",
    likes: 523,
    views: 4200,
    height: 190,
    gradient: "from-pink-500 to-rose-600",
  },
]);
</script>
