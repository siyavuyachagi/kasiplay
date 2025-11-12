<template>
  <!-- Quick Stats -->
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
    <div
      v-for="stat in quickStats"
      :key="stat.title"
      class="bg-white dark:bg-gray-800 rounded-lg p-4 lg:p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200">
      <div class="flex items-center justify-between mb-3">
        <div
          class="w-10 h-10 rounded-lg flex items-center justify-center"
          :class="stat.color">
          <svg
            class="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
          </svg>
        </div>
        <span
          :class="stat.trend > 0 ? 'text-green-600' : 'text-red-600'"
          class="text-sm font-medium">
          {{ stat.trend > 0 ? "+" : "" }}{{ stat.trend }}%
        </span>
      </div>
      <h3
        class="font-bold text-xl lg:text-2xl text-gray-900 dark:text-white mb-1">
        {{ stat.value }}
      </h3>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        {{ stat.title }}
      </p>
    </div>
  </div>

  <!-- Content Grid -->
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
    <!-- Team Standings -->
    <div
      class="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-xl font-bold text-gray-900 dark:text-white">
          Team Standings
        </h2>
        <div class="flex items-center space-x-2">
          <span class="text-sm font-medium text-gray-600 dark:text-gray-400"
            >League Table</span
          >
        </div>
      </div>

      <!-- Standings Table -->
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th
                class="text-left py-2 px-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
                #
              </th>
              <th
                class="text-left py-3 px-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                Team
              </th>
              <th
                class="text-center py-3 px-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                P
              </th>
              <th
                class="text-center py-3 px-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                W
              </th>
              <th
                class="text-center py-3 px-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                D
              </th>
              <th
                class="text-center py-3 px-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                L
              </th>
              <th
                class="text-center py-3 px-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                GD
              </th>
              <th
                class="text-center py-3 px-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                Pts
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="team in teamStandings"
              :key="team.position"
              class="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              :class="{ 'bg-blue-50 dark:bg-blue-900/20': team.isCurrentTeam }">
              <td
                class="py-3 px-2 text-sm font-medium text-gray-900 dark:text-white">
                {{ team.position }}
              </td>
              <td class="py-3 px-2">
                <div class="flex items-center space-x-2">
                  <div
                    class="w-6 h-6 bg-gray-200 dark:bg-gray-600 rounded shrink-0"></div>
                  <span
                    class="text-sm font-medium text-gray-900 dark:text-white">
                    {{ team.name }}
                  </span>
                  <span
                    v-if="team.isCurrentTeam"
                    class="text-xs text-blue-600 dark:text-blue-400 font-semibold">
                    (You)
                  </span>
                </div>
              </td>
              <td
                class="py-3 px-2 text-center text-sm text-gray-600 dark:text-gray-400">
                {{ team.played }}
              </td>
              <td
                class="py-3 px-2 text-center text-sm text-gray-600 dark:text-gray-400">
                {{ team.won }}
              </td>
              <td
                class="py-3 px-2 text-center text-sm text-gray-600 dark:text-gray-400">
                {{ team.drawn }}
              </td>
              <td
                class="py-3 px-2 text-center text-sm text-gray-600 dark:text-gray-400">
                {{ team.lost }}
              </td>
              <td
                class="py-3 px-2 text-center text-sm font-medium"
                :class="
                  team.goalDifference >= 0
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-red-600 dark:text-red-400'
                ">
                {{ team.goalDifference >= 0 ? "+" : ""
                }}{{ team.goalDifference }}
              </td>
              <td
                class="py-3 px-2 text-center text-sm font-bold text-gray-900 dark:text-white">
                {{ team.points }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Upcoming Matches -->
    <div
      class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-xl font-bold text-gray-900 dark:text-white">
          Upcoming Matches
        </h2>
        <div class="flex items-center space-x-2">
          <div class="w-2 h-2 bg-green-500 rounded-full"></div>
          <span class="text-sm font-medium text-green-600">{{
            upcomingMatches.length
          }}</span>
        </div>
      </div>
      <div class="space-y-3">
        <div
          v-for="match in upcomingMatches"
          :key="match.id"
          class="p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600 transition-colors duration-200 cursor-pointer">
          <div class="flex items-center justify-between mb-2">
            <span
              class="px-2 py-0.5 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs font-medium rounded"
              >{{ match.status }}</span
            >
            <span class="text-xs text-gray-500 dark:text-gray-400">{{
              match.date
            }}</span>
          </div>
          <div>
            <h3
              class="font-semibold text-sm text-gray-900 dark:text-white mb-1">
              {{ match.opponent }}
            </h3>
            <p class="text-xs text-gray-600 dark:text-gray-400 mb-1">
              {{ match.venue }}
            </p>
            <div class="flex items-center justify-between">
              <div class="text-sm font-bold text-blue-600">
                {{ match.time }}
              </div>
              <div class="text-xs text-gray-500">
                {{ match.competition }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface QuickStat {
  title: string;
  value: string;
  color: string;
  trend: number;
}
// Quick stats
const quickStats = ref<QuickStat[]>([
  { title: "Total Players", value: "24", color: "bg-green-600", trend: 12.5 },
  { title: "Matches Played", value: "18", color: "bg-blue-600", trend: 8.2 },
  { title: "Win Rate", value: "72%", color: "bg-purple-600", trend: 15.3 },
  { title: "Goals Scored", value: "45", color: "bg-orange-600", trend: 22.8 },
]);

const upcomingMatches = ref([
  {
    id: 1,
    opponent: "Manchester United",
    venue: "Old Trafford",
    date: "Oct 10, 2025",
    time: "15:00",
    status: "Scheduled",
    competition: "Premier League",
  },
  {
    id: 2,
    opponent: "Bayern Munich",
    venue: "Allianz Arena",
    date: "Oct 15, 2025",
    time: "20:00",
    status: "Scheduled",
    competition: "Champions League",
  },
  {
    id: 3,
    opponent: "Liverpool",
    venue: "Anfield",
    date: "Oct 18, 2025",
    time: "17:30",
    status: "Scheduled",
    competition: "Premier League",
  },
]);

const teamStandings = ref([
  {
    position: 1,
    name: "Manchester City",
    played: 8,
    won: 7,
    drawn: 1,
    lost: 0,
    goalDifference: 18,
    points: 22,
    isCurrentTeam: false,
  },
  {
    position: 2,
    name: "Arsenal",
    played: 8,
    won: 6,
    drawn: 2,
    lost: 0,
    goalDifference: 14,
    points: 20,
    isCurrentTeam: false,
  },
  {
    position: 3,
    name: "Liverpool",
    played: 8,
    won: 6,
    drawn: 1,
    lost: 1,
    goalDifference: 12,
    points: 19,
    isCurrentTeam: false,
  },
  {
    position: 4,
    name: "Your Team",
    played: 8,
    won: 5,
    drawn: 2,
    lost: 1,
    goalDifference: 8,
    points: 17,
    isCurrentTeam: true,
  },
  {
    position: 5,
    name: "Chelsea",
    played: 8,
    won: 5,
    drawn: 1,
    lost: 2,
    goalDifference: 6,
    points: 16,
    isCurrentTeam: false,
  },
  {
    position: 6,
    name: "Tottenham",
    played: 8,
    won: 4,
    drawn: 3,
    lost: 1,
    goalDifference: 5,
    points: 15,
    isCurrentTeam: false,
  },
  {
    position: 7,
    name: "Newcastle",
    played: 8,
    won: 4,
    drawn: 2,
    lost: 2,
    goalDifference: 3,
    points: 14,
    isCurrentTeam: false,
  },
  {
    position: 8,
    name: "Brighton",
    played: 8,
    won: 3,
    drawn: 3,
    lost: 2,
    goalDifference: 1,
    points: 12,
    isCurrentTeam: false,
  },
]);
</script>
