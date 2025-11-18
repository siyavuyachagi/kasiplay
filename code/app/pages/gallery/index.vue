<template>
  <div class="lg:grid lg:grid-cols-12 lg:gap-6">
    <!-- Left Sidebar (25%) -->
    <div class="hidden lg:block lg:col-span-3 space-y-4 sticky top-20 h-fit">
      <DefaultSidebarLeft />
    </div>

    <!-- Center Feed (75%) -->
    <div class="lg:col-span-9 mb-6 lg:mb-0 space-y-4">
      <!-- Breadcrumb  -->
      <DefaultBreadcrumb :crumbs="breadcrumbs" />

      <div class="space-y-4">
        <!-- Page Header -->
        <div>
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Gallery
          </h1>
          <p class="text-gray-600 dark:text-gray-400">
            Explore the best moments captured from matches, training, and events
          </p>
        </div>

        <!-- Filters -->
        <div class="flex flex-wrap gap-4">
          <select
            v-model="selectedCategory"
            class="px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500">
            <option value="all">All Categories</option>
            <option value="matches">Matches</option>
            <option value="training">Training</option>
            <option value="events">Events</option>
            <option value="celebrations">Celebrations</option>
            <option value="behind-scenes">Behind the Scenes</option>
          </select>

          <select
            v-model="selectedTeam"
            class="px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500">
            <option value="all">All Teams</option>
            <option value="pirates">Orlando Pirates</option>
            <option value="chiefs">Kaizer Chiefs</option>
            <option value="sundowns">Mamelodi Sundowns</option>
          </select>

          <select
            v-model="sortBy"
            class="px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500">
            <option value="recent">Most Recent</option>
            <option value="popular">Most Popular</option>
            <option value="oldest">Oldest First</option>
          </select>

          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search gallery..."
            class="flex-1 min-w-[200px] px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 placeholder-gray-400 dark:placeholder-gray-500" />
        </div>

        <!-- Gallery Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
            <div class="flex items-center justify-between mb-2">
              <icon
                name="lucide:image"
                size="20"
                class="text-blue-600 dark:text-blue-400" />
              <span class="text-xs font-medium text-gray-500 dark:text-gray-400"
                >Total</span
              >
            </div>
            <p class="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              1,248
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">Photos</p>
          </div>
          <div
            class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
            <div class="flex items-center justify-between mb-2">
              <icon
                name="lucide:video"
                size="20"
                class="text-red-600 dark:text-red-400" />
              <span class="text-xs font-medium text-gray-500 dark:text-gray-400"
                >Total</span
              >
            </div>
            <p class="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              86
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">Videos</p>
          </div>
          <div
            class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
            <div class="flex items-center justify-between mb-2">
              <icon
                name="lucide:folder"
                size="20"
                class="text-purple-600 dark:text-purple-400" />
              <span class="text-xs font-medium text-gray-500 dark:text-gray-400"
                >Albums</span
              >
            </div>
            <p class="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              42
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">Collections</p>
          </div>
          <div
            class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
            <div class="flex items-center justify-between mb-2">
              <icon
                name="lucide:calendar"
                size="20"
                class="text-green-600 dark:text-green-400" />
              <span class="text-xs font-medium text-gray-500 dark:text-gray-400"
                >This Week</span
              >
            </div>
            <p class="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              24
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">New</p>
          </div>
        </div>

        <!-- Featured Album -->
        <div
          class="bg-linear-to-br from-blue-600 to-purple-700 rounded-2xl p-6 text-white shadow-sm">
          <div class="flex items-center space-x-2 mb-4">
            <icon name="lucide:star" size="20" />
            <span class="text-sm font-medium">Featured Album</span>
          </div>
          <h2 class="text-2xl font-bold mb-2">Soweto Derby Highlights</h2>
          <p class="text-sm opacity-90 mb-4">
            Best moments from the thrilling 3-1 victory • November 1, 2025
          </p>
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4 text-sm">
              <span class="flex items-center space-x-1">
                <icon name="lucide:image" size="14" />
                <span>48 photos</span>
              </span>
              <span class="flex items-center space-x-1">
                <icon name="lucide:video" size="14" />
                <span>6 videos</span>
              </span>
              <span class="flex items-center space-x-1">
                <icon name="lucide:eye" size="14" />
                <span>12.5k views</span>
              </span>
            </div>
            <button
              @click="viewAlbum('featured')"
              class="px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center space-x-2">
              <span>View Album</span>
              <icon name="lucide:arrow-right" size="16" />
            </button>
          </div>
        </div>

        <!-- Gallery Grid -->
        <div class="space-y-6">
          <!-- Albums Section -->
          <div>
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-xl font-bold text-gray-900 dark:text-white">
                Recent Albums
              </h2>
              <button
                class="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center space-x-1">
                <span>View All</span>
                <icon name="lucide:arrow-right" size="14" />
              </button>
            </div>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div
                v-for="album in albums"
                :key="album.id"
                @click="viewAlbum(album.id)"
                class="group relative bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl hover:border-blue-500 dark:hover:border-blue-500 transition-all cursor-pointer">
                <!-- Album Cover -->
                <div
                  class="relative h-48 bg-linear-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 overflow-hidden">
                  <div
                    class="absolute inset-0 flex items-center justify-center">
                    <icon
                      name="lucide:image"
                      size="60"
                      class="text-gray-400 dark:text-gray-500" />
                  </div>
                  <!-- Overlay on Hover -->
                  <div
                    class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <icon
                      name="lucide:play-circle"
                      size="40"
                      class="text-white" />
                  </div>
                  <!-- Media Count Badge -->
                  <div
                    class="absolute top-2 right-2 px-2 py-1 bg-black/60 backdrop-blur-sm rounded text-white text-xs font-medium flex items-center space-x-1">
                    <icon name="lucide:image" size="12" />
                    <span>{{ album.photoCount }}</span>
                  </div>
                </div>

                <!-- Album Info -->
                <div class="p-4">
                  <h3
                    class="font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {{ album.title }}
                  </h3>
                  <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {{ album.date }} • {{ album.category }}
                  </p>
                  <div
                    class="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span class="flex items-center space-x-1">
                      <icon name="lucide:eye" size="12" />
                      <span>{{ album.views }}</span>
                    </span>
                    <span class="flex items-center space-x-1">
                      <icon name="lucide:heart" size="12" />
                      <span>{{ album.likes }}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Latest Photos -->
          <div>
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-xl font-bold text-gray-900 dark:text-white">
                Latest Photos
              </h2>
              <div class="flex items-center space-x-2">
                <button
                  @click="viewMode = 'grid'"
                  class="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  :class="
                    viewMode === 'grid'
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-500 dark:text-gray-400'
                  ">
                  <icon name="lucide:grid-3x3" size="18" />
                </button>
                <button
                  @click="viewMode = 'masonry'"
                  class="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  :class="
                    viewMode === 'masonry'
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-500 dark:text-gray-400'
                  ">
                  <icon name="lucide:layout-grid" size="18" />
                </button>
              </div>
            </div>

            <!-- Grid View -->
            <div
              v-if="viewMode === 'grid'"
              class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              <div
                v-for="photo in photos"
                :key="photo.id"
                @click="openLightbox(photo)"
                class="group relative aspect-square bg-linear-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-lg overflow-hidden cursor-pointer">
                <div class="absolute inset-0 flex items-center justify-center">
                  <icon
                    name="lucide:image"
                    size="40"
                    class="text-gray-400 dark:text-gray-500" />
                </div>
                <!-- Hover Overlay -->
                <div
                  class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4">
                  <p class="text-sm font-semibold mb-2 text-center">
                    {{ photo.title }}
                  </p>
                  <div class="flex items-center space-x-3 text-xs">
                    <span class="flex items-center space-x-1">
                      <icon name="lucide:eye" size="12" />
                      <span>{{ photo.views }}</span>
                    </span>
                    <span class="flex items-center space-x-1">
                      <icon name="lucide:heart" size="12" />
                      <span>{{ photo.likes }}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Masonry View -->
            <div
              v-else
              class="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
              <div
                v-for="photo in photos"
                :key="photo.id"
                @click="openLightbox(photo)"
                class="group relative break-inside-avoid bg-linear-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-lg overflow-hidden cursor-pointer"
                :style="{ height: photo.height + 'px' }">
                <div class="absolute inset-0 flex items-center justify-center">
                  <icon
                    name="lucide:image"
                    size="40"
                    class="text-gray-400 dark:text-gray-500" />
                </div>
                <!-- Hover Overlay -->
                <div
                  class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4">
                  <p class="text-sm font-semibold mb-2 text-center">
                    {{ photo.title }}
                  </p>
                  <div class="flex items-center space-x-3 text-xs">
                    <span class="flex items-center space-x-1">
                      <icon name="lucide:eye" size="12" />
                      <span>{{ photo.views }}</span>
                    </span>
                    <span class="flex items-center space-x-1">
                      <icon name="lucide:heart" size="12" />
                      <span>{{ photo.likes }}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Videos Section -->
          <div>
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-xl font-bold text-gray-900 dark:text-white">
                Featured Videos
              </h2>
              <button
                class="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center space-x-1">
                <span>View All</span>
                <icon name="lucide:arrow-right" size="14" />
              </button>
            </div>
            <div class="grid md:grid-cols-2 gap-4">
              <div
                v-for="video in videos"
                :key="video.id"
                @click="playVideo(video)"
                class="group relative bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-500 transition-all cursor-pointer">
                <!-- Video Thumbnail -->
                <div
                  class="relative h-48 bg-linear-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 overflow-hidden">
                  <div
                    class="absolute inset-0 flex items-center justify-center">
                    <icon
                      name="lucide:video"
                      size="60"
                      class="text-gray-400 dark:text-gray-500" />
                  </div>
                  <!-- Play Button -->
                  <div
                    class="absolute inset-0 flex items-center justify-center">
                    <div
                      class="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <icon
                        name="lucide:play"
                        size="28"
                        class="text-white ml-1" />
                    </div>
                  </div>
                  <!-- Duration Badge -->
                  <div
                    class="absolute bottom-2 right-2 px-2 py-1 bg-black/60 backdrop-blur-sm rounded text-white text-xs font-medium">
                    {{ video.duration }}
                  </div>
                </div>

                <!-- Video Info -->
                <div class="p-4">
                  <h3
                    class="font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {{ video.title }}
                  </h3>
                  <p
                    class="text-sm text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">
                    {{ video.description }}
                  </p>
                  <div
                    class="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>{{ video.date }}</span>
                    <div class="flex items-center space-x-3">
                      <span class="flex items-center space-x-1">
                        <icon name="lucide:eye" size="12" />
                        <span>{{ video.views }}</span>
                      </span>
                      <span class="flex items-center space-x-1">
                        <icon name="lucide:thumbs-up" size="12" />
                        <span>{{ video.likes }}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Load More -->
          <div class="flex justify-center pt-4">
            <button
              class="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { generateRandomUUID } from "~/utilities/generate-random-uuid";

useHead({ title: "KasiPlay | Gallery" });
definePageMeta({ layout: "default" });

const breadcrumbs = [{ label: "Gallery", route: "/gallery", active: true }];

const selectedCategory = ref("all");
const selectedTeam = ref("all");
const sortBy = ref("recent");
const searchQuery = ref("");
const viewMode = ref("grid");
const selectedPhoto = ref(null);

const albums = ref([
  {
    id: generateRandomUUID(),
    title: "Orlando Pirates vs Kaizer Chiefs",
    date: "Nov 1, 2025",
    category: "Matches",
    photoCount: 48,
    views: "12.5k",
    likes: "892",
  },
  {
    id: generateRandomUUID(),
    title: "Training Session - Week 12",
    date: "Oct 30, 2025",
    category: "Training",
    photoCount: 32,
    views: "5.2k",
    likes: "345",
  },
  {
    id: generateRandomUUID(),
    title: "Trophy Celebration",
    date: "Oct 28, 2025",
    category: "Events",
    photoCount: 56,
    views: "18.3k",
    likes: "1.2k",
  },
  {
    id: generateRandomUUID(),
    title: "Fan Meet & Greet",
    date: "Oct 25, 2025",
    category: "Events",
    photoCount: 24,
    views: "7.8k",
    likes: "567",
  },
  {
    id: generateRandomUUID(),
    title: "Behind the Scenes",
    date: "Oct 22, 2025",
    category: "Behind the Scenes",
    photoCount: 40,
    views: "9.1k",
    likes: "678",
  },
  {
    id: generateRandomUUID(),
    title: "Pre-Season Camp",
    date: "Oct 15, 2025",
    category: "Training",
    photoCount: 64,
    views: "6.4k",
    likes: "445",
  },
]);

const photos = ref([
  {
    id: generateRandomUUID(),
    title: "Goal Celebration",
    description: "Monnapule Saleng celebrates his goal",
    date: "Nov 1, 2025",
    views: "3.2k",
    likes: "256",
    height: 250,
  },
  {
    id: generateRandomUUID(),
    title: "Team Huddle",
    description: "Players gather before kickoff",
    date: "Nov 1, 2025",
    views: "2.8k",
    likes: "198",
    height: 320,
  },
  {
    id: generateRandomUUID(),
    title: "Spectacular Save",
    description: "Goalkeeper makes crucial save",
    date: "Nov 1, 2025",
    views: "4.1k",
    likes: "312",
    height: 280,
  },
  {
    id: generateRandomUUID(),
    title: "Victory Lap",
    description: "Team celebrates with fans",
    date: "Nov 1, 2025",
    views: "5.6k",
    likes: "445",
    height: 300,
  },
  {
    id: generateRandomUUID(),
    title: "Training Intensity",
    description: "Players in training session",
    date: "Oct 30, 2025",
    views: "1.9k",
    likes: "145",
    height: 260,
  },
  {
    id: generateRandomUUID(),
    title: "Tactical Discussion",
    description: "Coach instructs players",
    date: "Oct 30, 2025",
    views: "2.3k",
    likes: "167",
    height: 290,
  },
  {
    id: generateRandomUUID(),
    title: "Fan Support",
    description: "Passionate fans in stands",
    date: "Oct 28, 2025",
    views: "3.7k",
    likes: "289",
    height: 310,
  },
  {
    id: generateRandomUUID(),
    title: "Match Action",
    description: "Intense midfield battle",
    date: "Oct 28, 2025",
    views: "2.5k",
    likes: "178",
    height: 270,
  },
]);

const videos = ref([
  {
    id: generateRandomUUID(),
    title: "Match Highlights: Pirates vs Chiefs",
    description:
      "Extended highlights from the thrilling 3-1 victory in the Soweto Derby",
    date: "Nov 1, 2025",
    duration: "12:45",
    views: "45k",
    likes: "2.3k",
  },
  {
    id: generateRandomUUID(),
    title: "Goal Compilation - Monnapule Saleng",
    description: "All goals scored by Saleng this season",
    date: "Oct 30, 2025",
    duration: "8:32",
    views: "28k",
    likes: "1.8k",
  },
  {
    id: generateRandomUUID(),
    title: "Training Session Highlights",
    description: "Behind the scenes look at training preparation",
    date: "Oct 28, 2025",
    duration: "6:15",
    views: "15k",
    likes: "892",
  },
  {
    id: generateRandomUUID(),
    title: "Player Interviews Post-Match",
    description: "Exclusive interviews after the derby victory",
    date: "Nov 1, 2025",
    duration: "10:20",
    views: "32k",
    likes: "1.5k",
  },
]);

const viewAlbum = (albumId: string) => {
  console.log("Viewing album:", albumId);
  // Navigate to album detail page
};

const openLightbox = (photo: any) => {
  selectedPhoto.value = photo;
};

const closeLightbox = () => {
  selectedPhoto.value = null;
};

const playVideo = (video: any) => {
  console.log("Playing video:", video);
  // Open video player
};
</script>
