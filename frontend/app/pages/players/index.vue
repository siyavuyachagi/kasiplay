<template>
  <div class="lg:grid lg:grid-cols-12 lg:gap-6">
    <!-- Left Sidebar -->
    <LeftSidebar />

    <!-- Main Content -->
    <div class="lg:col-span-9 max-w-7xl mx-auto space-y-4">
      <!-- Breadcrumb -->
      <Breadcrumb :links="breadcrumbs" />

      <!-- Page Header -->
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Players
        </h1>
        <p class="text-gray-600 dark:text-gray-400">
          Browse all players in the Kasi Premier League
        </p>
      </div>

      <!-- Filters -->
      <div class="flex flex-wrap gap-4">
        <select
          v-model="selectedTeam"
          class="px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500">
          <option value="all">All Teams</option>
          <option value="pirates">Orlando Pirates</option>
          <option value="chiefs">Kaizer Chiefs</option>
          <option value="sundowns">Mamelodi Sundowns</option>
          <option value="supersport">SuperSport United</option>
        </select>

        <select
          v-model="selectedPosition"
          class="px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500">
          <option value="all">All Positions</option>
          <option value="goalkeeper">Goalkeepers</option>
          <option value="defender">Defenders</option>
          <option value="midfielder">Midfielders</option>
          <option value="forward">Forwards</option>
        </select>

        <select
          v-model="sortBy"
          class="px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500">
          <option value="name">Name (A-Z)</option>
          <option value="goals">Most Goals</option>
          <option value="assists">Most Assists</option>
          <option value="age">Age</option>
        </select>

        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search players..."
          class="flex-1 min-w-[200px] px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 placeholder-gray-400 dark:placeholder-gray-500" />
      </div>

      <!-- League Stats Overview -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
          <div class="flex items-center justify-between mb-2">
            <icon
              name="lucide:users"
              size="20"
              class="text-blue-600 dark:text-blue-400" />
            <span
              class="text-xs font-medium text-gray-500 dark:text-gray-400"
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
              name="lucide:target"
              size="20"
              class="text-green-600 dark:text-green-400" />
            <span
              class="text-xs font-medium text-gray-500 dark:text-gray-400"
              >Total</span
            >
          </div>
          <p class="text-2xl font-bold text-gray-900 dark:text-white mb-1">
            342
          </p>
          <p class="text-xs text-gray-500 dark:text-gray-400">Goals</p>
        </div>
        <div
          class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
          <div class="flex items-center justify-between mb-2">
            <icon
              name="lucide:hand"
              size="20"
              class="text-yellow-600 dark:text-yellow-400" />
            <span
              class="text-xs font-medium text-gray-500 dark:text-gray-400"
              >Total</span
            >
          </div>
          <p class="text-2xl font-bold text-gray-900 dark:text-white mb-1">
            218
          </p>
          <p class="text-xs text-gray-500 dark:text-gray-400">Assists</p>
        </div>
        <div
          class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
          <div class="flex items-center justify-between mb-2">
            <icon
              name="lucide:globe"
              size="20"
              class="text-purple-600 dark:text-purple-400" />
            <span
              class="text-xs font-medium text-gray-500 dark:text-gray-400"
              >From</span
            >
          </div>
          <p class="text-2xl font-bold text-gray-900 dark:text-white mb-1">
            18
          </p>
          <p class="text-xs text-gray-500 dark:text-gray-400">Countries</p>
        </div>
      </div>

      <!-- Top Performers Section -->
      <div class="space-y-4">
        <h2 class="text-xl font-bold text-gray-900 dark:text-white">
          Top Performers
        </h2>
        <div class="grid md:grid-cols-3 gap-4">
          <!-- Top Scorer -->
          <div
            class="bg-gradient-to-br from-green-500 to-green-700 rounded-lg p-6 text-white">
            <div class="flex items-center space-x-2 mb-4">
              <icon name="lucide:trophy" size="20" />
              <span class="text-sm font-medium opacity-90">Top Scorer</span>
            </div>
            <div class="flex items-center space-x-4">
              <div
                class="w-16 h-16 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <icon name="lucide:user" size="32" />
              </div>
              <div>
                <p class="text-2xl font-bold">Peter Shalulile</p>
                <p class="text-sm opacity-90">Mamelodi Sundowns</p>
                <p class="text-3xl font-bold mt-1">18 goals</p>
              </div>
            </div>
          </div>

          <!-- Top Assister -->
          <div
            class="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg p-6 text-white">
            <div class="flex items-center space-x-2 mb-4">
              <icon name="lucide:hand" size="20" />
              <span class="text-sm font-medium opacity-90">Top Assister</span>
            </div>
            <div class="flex items-center space-x-4">
              <div
                class="w-16 h-16 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <icon name="lucide:user" size="32" />
              </div>
              <div>
                <p class="text-2xl font-bold">Themba Zwane</p>
                <p class="text-sm opacity-90">Mamelodi Sundowns</p>
                <p class="text-3xl font-bold mt-1">14 assists</p>
              </div>
            </div>
          </div>

          <!-- Best Goalkeeper -->
          <div
            class="bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg p-6 text-white">
            <div class="flex items-center space-x-2 mb-4">
              <icon name="lucide:shield-check" size="20" />
              <span class="text-sm font-medium opacity-90"
                >Best Goalkeeper</span
              >
            </div>
            <div class="flex items-center space-x-4">
              <div
                class="w-16 h-16 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <icon name="lucide:user" size="32" />
              </div>
              <div>
                <p class="text-2xl font-bold">Ronwen Williams</p>
                <p class="text-sm opacity-90">Mamelodi Sundowns</p>
                <p class="text-3xl font-bold mt-1">12 clean sheets</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Players List -->
      <div class="space-y-4">
        <h2 class="text-xl font-bold text-gray-900 dark:text-white">
          All Players
        </h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="player in players"
            :key="player.id"
            @click="router.push(`/players/${player.id}`)"
            class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-500 transition-all cursor-pointer group">
            <!-- Player Header -->
            <div class="flex items-start space-x-3 mb-4">
              <div
                class="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <span class="text-white font-bold text-xl">{{
                  player.number
                }}</span>
              </div>
              <div class="flex-1 min-w-0">
                <h3
                  class="font-bold text-gray-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {{ player.name }}
                </h3>
                <p
                  class="text-sm text-gray-500 dark:text-gray-400 truncate">
                  {{ player.team }}
                </p>
                <div class="flex items-center space-x-2 mt-1">
                  <span
                    class="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-medium rounded">
                    {{ player.position }}
                  </span>
                  <span class="text-xs text-gray-500 dark:text-gray-400"
                    >{{ player.age }} yrs</span
                  >
                </div>
              </div>
            </div>

            <!-- Player Stats -->
            <div
              class="grid grid-cols-3 gap-2 pt-3 border-t border-gray-200 dark:border-gray-700">
              <div class="text-center">
                <p class="text-xs text-gray-500 dark:text-gray-400 mb-1">
                  Apps
                </p>
                <p class="text-lg font-bold text-gray-900 dark:text-white">
                  {{ player.appearances }}
                </p>
              </div>
              <div class="text-center">
                <p class="text-xs text-gray-500 dark:text-gray-400 mb-1">
                  Goals
                </p>
                <p class="text-lg font-bold text-green-600 dark:text-green-400">
                  {{ player.goals }}
                </p>
              </div>
              <div class="text-center">
                <p class="text-xs text-gray-500 dark:text-gray-400 mb-1">
                  Assists
                </p>
                <p class="text-lg font-bold text-blue-600 dark:text-blue-400">
                  {{ player.assists }}
                </p>
              </div>
            </div>

            <!-- Additional Info -->
            <div
              class="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between text-xs">
              <div class="flex items-center text-gray-500 dark:text-gray-400">
                <icon name="lucide:flag" size="12" class="mr-1" />
                <span>{{ player.nationality }}</span>
              </div>
              <NuxtLink :to="`/players/${player.id}`" class="text-blue-600 dark:text-blue-400 font-medium">
                View Profile →
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Load More -->
      <div class="flex justify-center pt-4">
        <button
          class="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
          Load More Players
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { generateRandomUUID } from "~/utilities/generate-random-uuid";

definePageMeta({ layout: "default" });

const Breadcrumb = defineAsyncComponent(
  () => import("~/components/ui/breadcrumb.vue")
);

const breadcrumbs = [{ label: "Players" }];
const router = useRouter();

const selectedTeam = ref("all");
const selectedPosition = ref("all");
const sortBy = ref("name");
const searchQuery = ref("");

const players = ref([
  {
    id: generateRandomUUID(),
    name: "Monnapule Saleng",
    number: 11,
    team: "Orlando Pirates",
    position: "Forward",
    age: 25,
    nationality: "South Africa",
    appearances: 18,
    goals: 12,
    assists: 6,
  },
  {
    id: generateRandomUUID(),
    name: "Evidence Makgopa",
    number: 9,
    team: "Orlando Pirates",
    position: "Forward",
    age: 24,
    nationality: "South Africa",
    appearances: 20,
    goals: 10,
    assists: 4,
  },
  {
    id: generateRandomUUID(),
    name: "Patrick Maswanganyi",
    number: 10,
    team: "Orlando Pirates",
    position: "Midfielder",
    age: 26,
    nationality: "South Africa",
    appearances: 19,
    goals: 8,
    assists: 9,
  },
  {
    id: generateRandomUUID(),
    name: "Peter Shalulile",
    number: 9,
    team: "Mamelodi Sundowns",
    position: "Forward",
    age: 30,
    nationality: "Namibia",
    appearances: 20,
    goals: 18,
    assists: 5,
  },
  {
    id: generateRandomUUID(),
    name: "Themba Zwane",
    number: 18,
    team: "Mamelodi Sundowns",
    position: "Midfielder",
    age: 34,
    nationality: "South Africa",
    appearances: 19,
    goals: 6,
    assists: 14,
  },
  {
    id: generateRandomUUID(),
    name: "Ronwen Williams",
    number: 1,
    team: "Mamelodi Sundowns",
    position: "Goalkeeper",
    age: 32,
    nationality: "South Africa",
    appearances: 20,
    goals: 0,
    assists: 0,
  },
  {
    id: generateRandomUUID(),
    name: "Ashley Du Preez",
    number: 9,
    team: "Kaizer Chiefs",
    position: "Forward",
    age: 26,
    nationality: "South Africa",
    appearances: 18,
    goals: 7,
    assists: 3,
  },
  {
    id: generateRandomUUID(),
    name: "Yusuf Maart",
    number: 6,
    team: "Kaizer Chiefs",
    position: "Midfielder",
    age: 28,
    nationality: "South Africa",
    appearances: 20,
    goals: 4,
    assists: 7,
  },
  {
    id: generateRandomUUID(),
    name: "Itumeleng Khune",
    number: 1,
    team: "Kaizer Chiefs",
    position: "Goalkeeper",
    age: 37,
    nationality: "South Africa",
    appearances: 15,
    goals: 0,
    assists: 0,
  },
  {
    id: generateRandomUUID(),
    name: "Khuliso Mudau",
    number: 20,
    team: "Mamelodi Sundowns",
    position: "Defender",
    age: 29,
    nationality: "South Africa",
    appearances: 20,
    goals: 2,
    assists: 8,
  },
  {
    id: generateRandomUUID(),
    name: "Sipho Chaine",
    number: 1,
    team: "Orlando Pirates",
    position: "Goalkeeper",
    age: 27,
    nationality: "South Africa",
    appearances: 20,
    goals: 0,
    assists: 0,
  },
  {
    id: generateRandomUUID(),
    name: "Bradley Grobler",
    number: 9,
    team: "SuperSport United",
    position: "Forward",
    age: 36,
    nationality: "South Africa",
    appearances: 17,
    goals: 11,
    assists: 2,
  },
]);
</script>