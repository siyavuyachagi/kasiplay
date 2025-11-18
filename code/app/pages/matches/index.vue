<template>
  <div class="lg:grid lg:grid-cols-12 lg:gap-6">
    <!-- Left Sidebar (25%) -->
    <div class="hidden lg:block lg:col-span-3 space-y-4 sticky top-20 h-fit">
      <DefaultSidebarLeft />
    </div>

    <!-- Center Feed (50%) -->
    <div class="lg:col-span-9 mb-6 lg:mb-0 space-y-4">
      <!-- Breadcrumb  -->
      <DefaultBreadcrumb :crumbs="breadcrumbs" />

      <div class="space-y-4">
        <!-- Page Header -->
        <div>
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Matches
          </h1>
          <p class="text-gray-600 dark:text-gray-400">
            Follow all the latest fixtures and results
          </p>
        </div>

        <!-- Filters -->
        <div class="flex flex-wrap gap-4">
          <select
            v-model="selectedStatus"
            class="px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500">
            <option value="all">All Matches</option>
            <option value="live">Live</option>
            <option value="upcoming">Upcoming</option>
            <option value="completed">Completed</option>
          </select>

          <select
            v-model="selectedCompetition"
            class="px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500">
            <option value="all">All Competitions</option>
            <option value="kpl">Kasi Premier League</option>
            <option value="cup">Nedbank Cup</option>
            <option value="mtn8">MTN8</option>
          </select>

          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search competitions, teams..."
            class="flex-1 min-w-[200px] px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 placeholder-gray-400 dark:placeholder-gray-500" />
        </div>

        <div class="space-y-6">
          <!-- Live Matches -->
          <div v-if="liveMatches.length">
            <h2
              class="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span class="relative flex h-3 w-3 mr-2">
                <span
                  class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span
                  class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              Live Now
            </h2>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div
                v-for="match in liveMatches"
                :key="match.id"
                class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:shadow-lg transition-shadow cursor-pointer">
                <NuxtLink :to="`/matches/live/${match.id}`" class="flex items-center justify-between mb-3">
                  <span
                    class="px-2 py-1 bg-red-500 hover:bg-red-600 text-white text-xs font-bold rounded-full">
                    LIVE • {{ match.minute }}'
                  </span>
                  <span class="text-sm text-gray-500 dark:text-gray-400">{{
                    match.competition
                  }}</span>
                </NuxtLink>

                <div class="flex items-center justify-between">
                  <div class="text-center flex-1">
                    <div
                      class="w-12 h-12 mx-auto bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-2">
                      <icon
                        name="lucide:shield"
                        size="24"
                        class="text-gray-400" />
                    </div>
                    <p
                      class="font-semibold text-gray-900 dark:text-white text-sm">
                      {{ match.homeTeam }}
                    </p>
                  </div>

                  <div class="text-center flex-1">
                    <p class="text-2xl font-bold text-gray-900 dark:text-white">
                      {{ match.homeScore }} - {{ match.awayScore }}
                    </p>
                  </div>

                  <div class="text-center flex-1">
                    <div
                      class="w-12 h-12 mx-auto bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-2">
                      <icon
                        name="lucide:shield"
                        size="24"
                        class="text-gray-400" />
                    </div>
                    <p
                      class="font-semibold text-gray-900 dark:text-white text-sm">
                      {{ match.awayTeam }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Upcoming & Recent Matches -->
          <div
            v-for="section in matchSections"
            :key="section.title"
            class="space-y-4">
            <h2 class="text-xl font-bold text-gray-900 dark:text-white">
              {{ section.title }}
            </h2>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div
                v-for="match in section.matches"
                :key="match.id"
                class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:shadow-lg transition-shadow cursor-pointer">
                <div class="flex items-center justify-between mb-2">
                  <span
                    class="text-sm font-medium text-blue-600 dark:text-blue-400"
                    >{{ match.competition }}</span
                  >
                  <span class="text-xs text-gray-500 dark:text-gray-400">
                    {{ match.date || "" }}
                    {{ match.time ? "• " + match.time : "" }}
                  </span>
                </div>

                <div class="flex items-center justify-between">
                  <div class="text-center flex-1">
                    <div
                      class="w-10 h-10 mx-auto bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-2">
                      <icon
                        name="lucide:shield"
                        size="20"
                        class="text-gray-400" />
                    </div>
                    <p
                      class="font-semibold text-gray-900 dark:text-white text-sm">
                      {{ match.homeTeam }}
                    </p>
                  </div>

                  <div class="text-center flex-1">
                    <p class="text-gray-500 dark:text-gray-400 font-bold">VS</p>
                  </div>

                  <div class="text-center flex-1">
                    <div
                      class="w-10 h-10 mx-auto bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-2">
                      <icon
                        name="lucide:shield"
                        size="20"
                        class="text-gray-400" />
                    </div>
                    <p
                      class="font-semibold text-gray-900 dark:text-white text-sm">
                      {{ match.awayTeam }}
                    </p>
                  </div>
                </div>

                <div
                  class="mt-2 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <div class="flex items-center">
                    <icon name="lucide:map-pin" size="14" class="mr-1" />
                    {{ match.venue || "" }}
                  </div>
                  <NuxtLink
                    :to="`/matches/${match.id}`"
                    class="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                    View Details
                  </NuxtLink>
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

const DefaultSidebarLeft = defineAsyncComponent(
  () => import("~/components/default/sidebar-left.vue")
);
const DefaultBreadcrumb = defineAsyncComponent(
  () => import("~/components/default/breadcrumb.vue")
);

definePageMeta({
  layout: "default",
});

const breadcrumbs = [{ label: "Matches", route: "/matches", active: true }];
const selectedStatus = ref("all");
const selectedCompetition = ref("all");
const searchQuery = ref("");
const router = useRouter();

const liveMatches = ref([
  {
    id: generateRandomUUID(),
    homeTeam: "Orlando Pirates",
    awayTeam: "Kaizer Chiefs",
    homeScore: 2,
    awayScore: 1,
    minute: "67",
    competition: "Kasi Premier League",
  },
]);

const upcomingMatches = ref([
  {
    id: generateRandomUUID(),
    homeTeam: "Mamelodi Sundowns",
    awayTeam: "SuperSport United",
    date: "Nov 3, 2025",
    time: "15:00",
    venue: "Loftus Versfeld Stadium",
    competition: "Kasi Premier League",
  },
  {
    id: generateRandomUUID(),
    homeTeam: "AmaZulu FC",
    awayTeam: "Golden Arrows",
    date: "Nov 4, 2025",
    time: "19:30",
    venue: "Moses Mabhida Stadium",
    competition: "Nedbank Cup",
  },
  {
    id: generateRandomUUID(),
    homeTeam: "Cape Town City",
    awayTeam: "Stellenbosch FC",
    date: "Nov 5, 2025",
    time: "15:00",
    venue: "Cape Town Stadium",
    competition: "Kasi Premier League",
  },
]);

const recentMatches = ref([
  {
    id: generateRandomUUID(),
    homeTeam: "Moroka Swallows",
    awayTeam: "Chippa United",
    homeScore: 3,
    awayScore: 1,
    date: "Oct 30, 2025",
    time: "17:00",
    venue: "Dobsonville Stadium",
    competition: "Kasi Premier League",
  },
  {
    id: generateRandomUUID(),
    homeTeam: "TS Galaxy",
    awayTeam: "Maritzburg United",
    homeScore: 1,
    awayScore: 1,
    date: "Oct 29, 2025",
    time: "15:00",
    venue: "Mbombela Stadium",
    competition: "Nedbank Cup",
  },
  {
    id: generateRandomUUID(),
    homeTeam: "Kaizer Chiefs",
    awayTeam: "Orlando Pirates",
    homeScore: 2,
    awayScore: 2,
    date: "Nov 01, 2025",
    time: "18:30",
    venue: "FNB Stadium",
    competition: "Soweto Derby",
  },
  {
    id: generateRandomUUID(),
    homeTeam: "Mamelodi Sundowns",
    awayTeam: "SuperSport United",
    homeScore: 1,
    awayScore: 0,
    date: "Nov 02, 2025",
    time: "20:00",
    venue: "Loftus Versfeld",
    competition: "PSL",
  },
]);

const matchSections = [
  { title: "Upcoming", matches: upcomingMatches.value },
  { title: "Recent Results", matches: recentMatches.value },
];
</script>
