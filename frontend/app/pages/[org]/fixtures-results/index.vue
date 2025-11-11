<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
          Fixtures & Results
        </h1>
        <p class="text-gray-600 dark:text-gray-400 mt-1">
          View and manage all competition matches
        </p>
      </div>
      <button
        class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center space-x-2">
        <icon name="lucide:plus" size="18" />
        <span>Schedule Match</span>
      </button>
    </div>

    <!-- Filters -->
    <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
      <div class="flex flex-wrap gap-4">
        <select
          v-model="selectedCompetition"
          class="px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg">
          <option value="all">All Competitions</option>
          <option value="psl">Premier Soccer League</option>
          <option value="cup">Nedbank Cup</option>
        </select>
        <select
          v-model="selectedStatus"
          class="px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg">
          <option value="all">All Matches</option>
          <option value="upcoming">Upcoming</option>
          <option value="completed">Completed</option>
          <option value="live">Live</option>
        </select>
        <input
          type="date"
          v-model="selectedDate"
          class="px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg" />
      </div>
    </div>

    <!-- Upcoming Matches -->
    <div>
      <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
        Upcoming Fixtures
      </h2>
      <div class="space-y-4">
        <div
          v-for="match in upcomingMatches"
          :key="match.id"
          class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <div class="flex items-center justify-between mb-4">
            <span class="text-sm font-medium text-purple-600 dark:text-purple-400">
              {{ match.competition }}
            </span>
            <span class="text-sm text-gray-600 dark:text-gray-400">
              {{ match.date }} • {{ match.time }}
            </span>
          </div>
          <div class="grid grid-cols-3 gap-4 items-center">
            <div class="text-center">
              <div class="font-semibold text-gray-900 dark:text-white">
                {{ match.homeTeam }}
              </div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-gray-400">VS</div>
            </div>
            <div class="text-center">
              <div class="font-semibold text-gray-900 dark:text-white">
                {{ match.awayTeam }}
              </div>
            </div>
          </div>
          <div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <div class="text-sm text-gray-600 dark:text-gray-400">
              <icon name="lucide:map-pin" size="14" class="inline mr-1" />
              {{ match.venue }}
            </div>
            <div class="flex space-x-2">
              <button class="px-3 py-1 text-xs font-medium border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                Edit
              </button>
              <button class="px-3 py-1 text-xs font-medium border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Results -->
    <div>
      <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
        Recent Results
      </h2>
      <div class="space-y-4">
        <div
          v-for="result in recentResults"
          :key="result.id"
          class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <div class="flex items-center justify-between mb-4">
            <span class="text-sm font-medium text-purple-600 dark:text-purple-400">
              {{ result.competition }}
            </span>
            <span class="text-sm text-gray-600 dark:text-gray-400">
              {{ result.date }}
            </span>
          </div>
          <div class="grid grid-cols-3 gap-4 items-center">
            <div class="text-center">
              <div class="font-semibold text-gray-900 dark:text-white">
                {{ result.homeTeam }}
              </div>
            </div>
            <div class="text-center">
              <div class="flex items-center justify-center space-x-3">
                <span
                  class="text-2xl font-bold"
                  :class="
                    result.homeScore > result.awayScore
                      ? 'text-green-600'
                      : 'text-gray-900 dark:text-white'
                  ">
                  {{ result.homeScore }}
                </span>
                <span class="text-gray-400">-</span>
                <span
                  class="text-2xl font-bold"
                  :class="
                    result.awayScore > result.homeScore
                      ? 'text-green-600'
                      : 'text-gray-900 dark:text-white'
                  ">
                  {{ result.awayScore }}
                </span>
              </div>
            </div>
            <div class="text-center">
              <div class="font-semibold text-gray-900 dark:text-white">
                {{ result.awayTeam }}
              </div>
            </div>
          </div>
          <div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <div class="text-sm text-gray-600 dark:text-gray-400">
              <icon name="lucide:map-pin" size="14" class="inline mr-1" />
              {{ result.venue }}
            </div>
            <button class="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard-2-col-layout",
});

const selectedCompetition = ref("all");
const selectedStatus = ref("all");
const selectedDate = ref("");

const upcomingMatches = ref([
  {
    id: 1,
    homeTeam: "Orlando Pirates",
    awayTeam: "Kaizer Chiefs",
    date: "Nov 15, 2025",
    time: "15:00",
    venue: "FNB Stadium",
    competition: "PSL",
  },
  {
    id: 2,
    homeTeam: "Mamelodi Sundowns",
    awayTeam: "SuperSport United",
    date: "Nov 18, 2025",
    time: "19:30",
    venue: "Loftus Versfeld",
    competition: "Nedbank Cup",
  },
]);

const recentResults = ref([
  {
    id: 1,
    homeTeam: "Orlando Pirates",
    awayTeam: "Mamelodi Sundowns",
    homeScore: 2,
    awayScore: 1,
    date: "Nov 5, 2025",
    venue: "Orlando Stadium",
    competition: "PSL",
  },
  {
    id: 2,
    homeTeam: "Kaizer Chiefs",
    awayTeam: "SuperSport United",
    homeScore: 1,
    awayScore: 1,
    date: "Nov 3, 2025",
    venue: "FNB Stadium",
    competition: "Nedbank Cup",
  },
]);
</script>