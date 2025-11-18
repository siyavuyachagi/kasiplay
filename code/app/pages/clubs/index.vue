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
            Clubs
          </h1>
          <p class="text-gray-600 dark:text-gray-400">
            Explore all clubs competing in the Kasi Premier League
          </p>
        </div>

        <!-- Filters -->
        <div class="flex flex-wrap gap-4">
          <select
            v-model="selectedLeague"
            class="px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500">
            <option value="all">All Leagues</option>
            <option value="kpl">Kasi Premier League</option>
            <option value="division1">Division 1</option>
            <option value="reserve">Reserve League</option>
          </select>

          <select
            v-model="sortBy"
            class="px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500">
            <option value="name">Name (A-Z)</option>
            <option value="position">League Position</option>
            <option value="founded">Year Founded</option>
          </select>

          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search teams..."
            class="flex-1 min-w-[200px] px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 placeholder-gray-400 dark:placeholder-gray-500" />
        </div>

        <!-- League Stats Overview -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
            <div class="flex items-center justify-between mb-2">
              <icon
                name="lucide:shield"
                size="20"
                class="text-blue-600 dark:text-blue-400" />
              <span class="text-xs font-medium text-gray-500 dark:text-gray-400"
                >Total</span
              >
            </div>
            <p class="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              16
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">Clubs</p>
          </div>
          <div
            class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
            <div class="flex items-center justify-between mb-2">
              <icon
                name="lucide:trophy"
                size="20"
                class="text-yellow-600 dark:text-yellow-400" />
              <span class="text-xs font-medium text-gray-500 dark:text-gray-400"
                >Total</span
              >
            </div>
            <p class="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              48
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">Trophies</p>
          </div>
          <div
            class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
            <div class="flex items-center justify-between mb-2">
              <icon
                name="lucide:users"
                size="20"
                class="text-green-600 dark:text-green-400" />
              <span class="text-xs font-medium text-gray-500 dark:text-gray-400"
                >Active</span
              >
            </div>
            <p class="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              480
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">Players</p>
          </div>
          <div
            class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
            <div class="flex items-center justify-between mb-2">
              <icon
                name="lucide:calendar"
                size="20"
                class="text-purple-600 dark:text-purple-400" />
              <span class="text-xs font-medium text-gray-500 dark:text-gray-400"
                >Season</span
              >
            </div>
            <p class="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              240
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">Matches</p>
          </div>
        </div>

        <!-- Teams Grid -->
        <div class="space-y-4">
          <h2 class="text-xl font-bold text-gray-900 dark:text-white">
            All Teams
          </h2>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div
              v-for="team in teams"
              :key="team.id"
              @click="router.push(`/teams/${team.id}`)"
              class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-500 transition-all cursor-pointer group">
              <!-- Team Badge -->
              <div class="flex flex-col items-center mb-4">
                <div
                  class="w-24 h-24 rounded-lg bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <icon name="lucide:shield" size="48" class="text-white" />
                </div>
                <h3
                  class="text-lg font-bold text-gray-900 dark:text-white text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {{ team.name }}
                </h3>
                <p class="text-sm text-gray-500 dark:text-gray-400 text-center">
                  {{ team.nickname }}
                </p>
              </div>

              <!-- Team Stats -->
              <div
                class="grid grid-cols-3 gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div class="text-center">
                  <p class="text-xs text-gray-500 dark:text-gray-400 mb-1">
                    Position
                  </p>
                  <p class="text-lg font-bold text-gray-900 dark:text-white">
                    {{ team.position }}
                  </p>
                </div>
                <div class="text-center">
                  <p class="text-xs text-gray-500 dark:text-gray-400 mb-1">
                    Points
                  </p>
                  <p class="text-lg font-bold text-gray-900 dark:text-white">
                    {{ team.points }}
                  </p>
                </div>
                <div class="text-center">
                  <p class="text-xs text-gray-500 dark:text-gray-400 mb-1">
                    Form
                  </p>
                  <div class="flex justify-center space-x-1">
                    <span
                      v-for="(result, idx) in team.form.slice(0, 3)"
                      :key="idx"
                      class="w-2 h-2 rounded-full"
                      :class="{
                        'bg-green-500': result === 'W',
                        'bg-gray-400': result === 'D',
                        'bg-red-500': result === 'L',
                      }"></span>
                  </div>
                </div>
              </div>

              <!-- Additional Info -->
              <div
                class="mt-4 space-y-2 text-xs text-gray-500 dark:text-gray-400">
                <div class="flex items-center space-x-2">
                  <icon name="lucide:map-pin" size="12" />
                  <span>{{ team.stadium }}</span>
                </div>
                <div class="flex items-center space-x-2">
                  <icon name="lucide:calendar" size="12" />
                  <span>Founded: {{ team.founded }}</span>
                </div>
                <div class="flex items-center space-x-2">
                  <icon name="lucide:trophy" size="12" />
                  <span>{{ team.trophies }} Trophies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { generateRandomUUID } from "~/utilities/generate-random-uuid";

useHead({
  title: "KasiPlay | Clubs",
});
definePageMeta({
  layout: "default",
});

const breadcrumbs = [{ label: "Clubs", route: "/clubs", active: true }];
const router = useRouter();
const selectedLeague = ref("all");
const sortBy = ref("position");
const searchQuery = ref("");

const teams = ref([
  {
    id: generateRandomUUID(),
    name: "Orlando Pirates",
    nickname: "The Buccaneers",
    position: 2,
    points: 45,
    form: ["W", "W", "W", "D", "W"],
    stadium: "Orlando Stadium",
    founded: 1937,
    trophies: 12,
  },
  {
    id: generateRandomUUID(),
    name: "Kaizer Chiefs",
    nickname: "Amakhosi",
    position: 7,
    points: 32,
    form: ["L", "D", "W", "L", "D"],
    stadium: "FNB Stadium",
    founded: 1970,
    trophies: 13,
  },
  {
    id: generateRandomUUID(),
    name: "Mamelodi Sundowns",
    nickname: "The Brazilians",
    position: 1,
    points: 48,
    form: ["W", "W", "W", "W", "D"],
    stadium: "Loftus Versfeld",
    founded: 1970,
    trophies: 15,
  },
  {
    id: generateRandomUUID(),
    name: "SuperSport United",
    nickname: "Matsatsantsa",
    position: 4,
    points: 38,
    form: ["W", "L", "W", "W", "D"],
    stadium: "Lucas Moripe Stadium",
    founded: 1994,
    trophies: 8,
  },
  {
    id: generateRandomUUID(),
    name: "Cape Town City",
    nickname: "The Citizens",
    position: 5,
    points: 36,
    form: ["D", "W", "L", "W", "W"],
    stadium: "Cape Town Stadium",
    founded: 2016,
    trophies: 2,
  },
  {
    id: generateRandomUUID(),
    name: "AmaZulu FC",
    nickname: "Usuthu",
    position: 6,
    points: 34,
    form: ["L", "D", "D", "W", "L"],
    stadium: "Moses Mabhida Stadium",
    founded: 1932,
    trophies: 4,
  },
  {
    id: generateRandomUUID(),
    name: "Stellenbosch FC",
    nickname: "The Maroons",
    position: 3,
    points: 42,
    form: ["W", "W", "D", "W", "W"],
    stadium: "Danie Craven Stadium",
    founded: 2016,
    trophies: 1,
  },
  {
    id: generateRandomUUID(),
    name: "Golden Arrows",
    nickname: "Abafana Bes'thende",
    position: 8,
    points: 30,
    form: ["D", "L", "W", "D", "L"],
    stadium: "Sugar Ray Xulu Stadium",
    founded: 1943,
    trophies: 2,
  },
  {
    id: generateRandomUUID(),
    name: "Moroka Swallows",
    nickname: "The Beautiful Birds",
    position: 10,
    points: 26,
    form: ["L", "W", "L", "D", "W"],
    stadium: "Dobsonville Stadium",
    founded: 1947,
    trophies: 5,
  },
]);
</script>
