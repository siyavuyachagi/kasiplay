<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
          Competitions
        </h1>
        <p class="text-gray-600 dark:text-gray-400 mt-1">
          Manage leagues, cups, and tournaments
        </p>
      </div>
      <button
        class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center space-x-2">
        <icon name="lucide:plus" size="18" />
        <span>Create Competition</span>
      </button>
    </div>

    <!-- Competition Stats -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-3xl font-bold text-gray-900 dark:text-white">5</div>
            <div class="text-sm text-gray-600 dark:text-gray-400">
              Active Competitions
            </div>
          </div>
          <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
            <icon name="lucide:trophy" size="24" class="text-blue-600" />
          </div>
        </div>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-3xl font-bold text-gray-900 dark:text-white">156</div>
            <div class="text-sm text-gray-600 dark:text-gray-400">
              Total Matches
            </div>
          </div>
          <div class="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
            <icon name="lucide:calendar" size="24" class="text-green-600" />
          </div>
        </div>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-3xl font-bold text-gray-900 dark:text-white">48</div>
            <div class="text-sm text-gray-600 dark:text-gray-400">
              Participating Clubs
            </div>
          </div>
          <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
            <icon name="lucide:building-2" size="24" class="text-purple-600" />
          </div>
        </div>
      </div>
    </div>

    <!-- Competitions List -->
    <div class="space-y-4">
      <div
        v-for="competition in competitions"
        :key="competition.id"
        class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow">
        <div class="flex items-start justify-between mb-4">
          <div class="flex items-center space-x-4">
            <div
              class="w-16 h-16 rounded-lg flex items-center justify-center"
              :class="competition.color">
              <icon :name="competition.icon" size="32" class="text-white" />
            </div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white">
                {{ competition.name }}
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                {{ competition.season }}
              </p>
            </div>
          </div>
          <span
            class="px-3 py-1 text-xs font-medium rounded-full"
            :class="getStatusColor(competition.status)">
            {{ competition.status }}
          </span>
        </div>

        <div class="grid grid-cols-4 gap-4 mb-4">
          <div class="text-center">
            <div class="text-2xl font-bold text-gray-900 dark:text-white">
              {{ competition.clubs }}
            </div>
            <div class="text-xs text-gray-600 dark:text-gray-400">Clubs</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-gray-900 dark:text-white">
              {{ competition.matches }}
            </div>
            <div class="text-xs text-gray-600 dark:text-gray-400">Matches</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-gray-900 dark:text-white">
              {{ competition.matchday }}
            </div>
            <div class="text-xs text-gray-600 dark:text-gray-400">Matchday</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {{ competition.nextMatch }}
            </div>
            <div class="text-xs text-gray-600 dark:text-gray-400">Next</div>
          </div>
        </div>

        <div class="flex items-center space-x-2">
          <button class="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            View Details
          </button>
          <button class="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            Manage
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard-2-col-layout",
});

const competitions = ref([
  {
    id: 1,
    name: "Premier Soccer League",
    season: "2024/2025",
    type: "league",
    status: "active",
    clubs: 16,
    matches: 45,
    matchday: 12,
    nextMatch: "2 days",
    icon: "lucide:table-2",
    color: "bg-blue-600",
  },
  {
    id: 2,
    name: "Nedbank Cup",
    season: "2024/2025",
    type: "cup",
    status: "active",
    clubs: 32,
    matches: 16,
    matchday: "R16",
    nextMatch: "5 days",
    icon: "lucide:trophy",
    color: "bg-purple-600",
  },
  {
    id: 3,
    name: "MTN8 Cup",
    season: "2024/2025",
    type: "tournament",
    status: "upcoming",
    clubs: 8,
    matches: 0,
    matchday: "QF",
    nextMatch: "14 days",
    icon: "lucide:award",
    color: "bg-orange-600",
  },
]);

const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
    case "upcoming":
      return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
    case "completed":
      return "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300";
    default:
      return "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300";
  }
};
</script>