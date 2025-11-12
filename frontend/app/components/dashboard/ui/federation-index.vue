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
          <icon :name="stat.icon" size="20" class="text-white" />
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
    <!-- Competition Standings -->
    <div
      class="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-xl font-bold text-gray-900 dark:text-white">
          Active Competitions
        </h2>
        <div class="flex items-center space-x-2">
          <span class="text-sm font-medium text-gray-600 dark:text-gray-400"
            >{{ activeCompetitions.length }} Running</span
          >
        </div>
      </div>

      <!-- Competitions List -->
      <div class="space-y-4">
        <div
          v-for="competition in activeCompetitions"
          :key="competition.id"
          class="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-colors cursor-pointer">
          <div class="flex items-start justify-between mb-3">
            <div class="flex items-center space-x-3">
              <div
                class="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                :class="
                  competition.type === 'league'
                    ? 'bg-blue-100 dark:bg-blue-900/30'
                    : competition.type === 'cup'
                    ? 'bg-purple-100 dark:bg-purple-900/30'
                    : 'bg-orange-100 dark:bg-orange-900/30'
                ">
                <icon
                  :name="
                    competition.type === 'league'
                      ? 'lucide:table-2'
                      : competition.type === 'cup'
                      ? 'lucide:trophy'
                      : 'lucide:award'
                  "
                  size="24"
                  :class="
                    competition.type === 'league'
                      ? 'text-blue-600 dark:text-blue-400'
                      : competition.type === 'cup'
                      ? 'text-purple-600 dark:text-purple-400'
                      : 'text-orange-600 dark:text-orange-400'
                  " />
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 dark:text-white">
                  {{ competition.name }}
                </h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  {{ competition.season }}
                </p>
              </div>
            </div>
            <span
              class="px-2 py-1 text-xs font-medium rounded-full"
              :class="
                competition.status === 'active'
                  ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                  : competition.status === 'upcoming'
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                  : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
              ">
              {{ competition.status }}
            </span>
          </div>

          <div class="grid grid-cols-4 gap-4 text-center">
            <div>
              <div class="text-2xl font-bold text-gray-900 dark:text-white">
                {{ competition.clubs }}
              </div>
              <div class="text-xs text-gray-500 dark:text-gray-400">Clubs</div>
            </div>
            <div>
              <div class="text-2xl font-bold text-gray-900 dark:text-white">
                {{ competition.matchesPlayed }}
              </div>
              <div class="text-xs text-gray-500 dark:text-gray-400">
                Matches
              </div>
            </div>
            <div>
              <div class="text-2xl font-bold text-gray-900 dark:text-white">
                {{ competition.matchday }}
              </div>
              <div class="text-xs text-gray-500 dark:text-gray-400">
                Matchday
              </div>
            </div>
            <div>
              <div
                class="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {{ competition.nextMatch }}
              </div>
              <div class="text-xs text-gray-500 dark:text-gray-400">
                Next Match
              </div>
            </div>
          </div>

          <!-- Progress Bar -->
          <div class="mt-4">
            <div
              class="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
              <span>Progress</span>
              <span>{{ competition.progress }}%</span>
            </div>
            <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                class="h-2 rounded-full transition-all"
                :class="
                  competition.type === 'league'
                    ? 'bg-blue-600'
                    : competition.type === 'cup'
                    ? 'bg-purple-600'
                    : 'bg-orange-600'
                "
                :style="{ width: competition.progress + '%' }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Member Clubs & Pending Applications -->
    <div class="space-y-6">
      <!-- Member Clubs Overview -->
      <div
        class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-bold text-gray-900 dark:text-white">
            Member Clubs
          </h2>
          <span class="text-2xl font-bold text-purple-600 dark:text-purple-400">
            {{ memberClubs.total }}
          </span>
        </div>

        <div class="space-y-3">
          <div
            class="flex items-center justify-between p-3 rounded-lg bg-green-50 dark:bg-green-900/20">
            <div class="flex items-center space-x-2">
              <div class="w-2 h-2 bg-green-500 rounded-full"></div>
              <span class="text-sm font-medium text-gray-900 dark:text-white"
                >Active</span
              >
            </div>
            <span class="text-lg font-bold text-green-600 dark:text-green-400">
              {{ memberClubs.active }}
            </span>
          </div>

          <div
            class="flex items-center justify-between p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/20">
            <div class="flex items-center space-x-2">
              <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span class="text-sm font-medium text-gray-900 dark:text-white"
                >Suspended</span
              >
            </div>
            <span
              class="text-lg font-bold text-yellow-600 dark:text-yellow-400">
              {{ memberClubs.suspended }}
            </span>
          </div>

          <div
            class="flex items-center justify-between p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20">
            <div class="flex items-center space-x-2">
              <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span class="text-sm font-medium text-gray-900 dark:text-white"
                >New This Month</span
              >
            </div>
            <span class="text-lg font-bold text-blue-600 dark:text-blue-400">
              {{ memberClubs.newThisMonth }}
            </span>
          </div>
        </div>

        <NuxtLink
          :to="`/${slug}/member-clubs`"
          class="flex items-center justify-center w-full mt-4 py-2 px-4 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors text-sm">
          View All Clubs
        </NuxtLink>
      </div>

      <!-- Pending Applications -->
      <div
        class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-bold text-gray-900 dark:text-white">
            Pending Applications
          </h2>
          <span
            class="w-6 h-6 rounded-full bg-orange-600 text-white text-xs font-bold flex items-center justify-center">
            {{ pendingApplications.length }}
          </span>
        </div>

        <div class="space-y-3">
          <div
            v-for="application in pendingApplications"
            :key="application.id"
            class="p-3 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-purple-300 dark:hover:border-purple-600 transition-colors cursor-pointer">
            <div class="flex items-start justify-between mb-2">
              <div>
                <h4 class="font-semibold text-sm text-gray-900 dark:text-white">
                  {{ application.clubName }}
                </h4>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  {{ application.location }}
                </p>
              </div>
              <span
                class="px-2 py-0.5 bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 text-xs font-medium rounded">
                {{ application.type }}
              </span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-xs text-gray-500 dark:text-gray-400">
                {{ application.submittedDate }}
              </span>
              <div class="flex items-center space-x-1">
                <button
                  class="p-1 rounded hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                  title="Approve">
                  <icon
                    name="lucide:check"
                    size="16"
                    class="text-green-600 dark:text-green-400" />
                </button>
                <button
                  class="p-1 rounded hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
                  title="Reject">
                  <icon
                    name="lucide:x"
                    size="16"
                    class="text-red-600 dark:text-red-400" />
                </button>
                <button
                  class="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  title="View Details">
                  <icon
                    name="lucide:eye"
                    size="16"
                    class="text-gray-600 dark:text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <button
          class="w-full mt-4 py-2 px-4 rounded-lg border border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 font-medium transition-colors">
          Review All Applications
        </button>
      </div>
    </div>
  </div>

  <!-- Upcoming Fixtures & Recent Results -->
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
    <!-- Upcoming Fixtures -->
    <div
      class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-bold text-gray-900 dark:text-white">
          Upcoming Fixtures
        </h2>
        <span
          class="text-sm text-purple-600 dark:text-purple-400 font-medium cursor-pointer hover:underline">
          View Calendar
        </span>
      </div>

      <div class="space-y-3">
        <div
          v-for="fixture in upcomingFixtures"
          :key="fixture.id"
          class="p-4 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
          <div class="flex items-center justify-between mb-2">
            <span
              class="text-xs font-medium text-purple-600 dark:text-purple-400">
              {{ fixture.competition }}
            </span>
            <span class="text-xs text-gray-500 dark:text-gray-400">
              {{ fixture.date }} • {{ fixture.time }}
            </span>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2 flex-1">
              <div class="w-6 h-6 bg-gray-200 dark:bg-gray-600 rounded"></div>
              <span class="text-sm font-medium text-gray-900 dark:text-white">
                {{ fixture.homeTeam }}
              </span>
            </div>
            <span
              class="text-xs font-bold text-gray-500 dark:text-gray-400 mx-3">
              VS
            </span>
            <div class="flex items-center space-x-2 flex-1 justify-end">
              <span class="text-sm font-medium text-gray-900 dark:text-white">
                {{ fixture.awayTeam }}
              </span>
              <div class="w-6 h-6 bg-gray-200 dark:bg-gray-600 rounded"></div>
            </div>
          </div>
          <div class="mt-2 text-xs text-gray-500 dark:text-gray-400">
            <icon name="lucide:map-pin" size="12" class="inline mr-1" />
            {{ fixture.venue }}
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Results -->
    <div
      class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-bold text-gray-900 dark:text-white">
          Recent Results
        </h2>
        <span
          class="text-sm text-purple-600 dark:text-purple-400 font-medium cursor-pointer hover:underline">
          View All
        </span>
      </div>

      <div class="space-y-3">
        <div
          v-for="result in recentResults"
          :key="result.id"
          class="p-4 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
          <div class="flex items-center justify-between mb-2">
            <span
              class="text-xs font-medium text-purple-600 dark:text-purple-400">
              {{ result.competition }}
            </span>
            <span class="text-xs text-gray-500 dark:text-gray-400">
              {{ result.date }}
            </span>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2 flex-1">
              <div class="w-6 h-6 bg-gray-200 dark:bg-gray-600 rounded"></div>
              <span class="text-sm font-medium text-gray-900 dark:text-white">
                {{ result.homeTeam }}
              </span>
            </div>
            <div class="flex items-center space-x-3 mx-4">
              <span class="text-lg font-bold text-gray-900 dark:text-white">
                {{ result.homeScore }}
              </span>
              <span class="text-xs text-gray-500">-</span>
              <span class="text-lg font-bold text-gray-900 dark:text-white">
                {{ result.awayScore }}
              </span>
            </div>
            <div class="flex items-center space-x-2 flex-1 justify-end">
              <span class="text-sm font-medium text-gray-900 dark:text-white">
                {{ result.awayTeam }}
              </span>
              <div class="w-6 h-6 bg-gray-200 dark:bg-gray-600 rounded"></div>
            </div>
          </div>
          <div class="mt-2 flex items-center justify-between">
            <div class="text-xs text-gray-500 dark:text-gray-400">
              <icon name="lucide:map-pin" size="12" class="inline mr-1" />
              {{ result.venue }}
            </div>
            <span
              class="text-xs px-2 py-0.5 rounded"
              :class="
                result.status === 'completed'
                  ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                  : 'bg-gray-100 text-gray-700 dark:bg-gray-600 dark:text-gray-300'
              ">
              {{ result.status }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const route = useRoute();
const slug = route.params.org as string;

interface QuickStat {
  title: string;
  value: string | number;
  color: string;
  trend: number;
  icon: string;
}

const quickStats = ref<QuickStat[]>([
  {
    title: "Registered Clubs",
    value: 128,
    color: "bg-purple-600",
    trend: 5.4,
    icon: "lucide:users",
  },
  {
    title: "Active Competitions",
    value: 12,
    color: "bg-blue-600",
    trend: 8.1,
    icon: "lucide:trophy",
  },
  {
    title: "Total Referees",
    value: 84,
    color: "bg-green-600",
    trend: 3.2,
    icon: "lucide:whistle",
  },
  {
    title: "Pending Applications",
    value: 9,
    color: "bg-orange-600",
    trend: -4.7,
    icon: "lucide:clock",
  },
]);


const activeCompetitions = ref([
  {
    id: 1,
    name: "Premier Soccer League",
    season: "2024/2025",
    type: "league",
    status: "active",
    clubs: 16,
    matchesPlayed: 45,
    matchday: 12,
    nextMatch: "2 days",
    progress: 35,
  },
  {
    id: 2,
    name: "Nedbank Cup",
    season: "2024/2025",
    type: "cup",
    status: "active",
    clubs: 32,
    matchesPlayed: 16,
    matchday: "R16",
    nextMatch: "5 days",
    progress: 50,
  },
  {
    id: 3,
    name: "MTN8 Cup",
    season: "2024/2025",
    type: "tournament",
    status: "upcoming",
    clubs: 8,
    matchesPlayed: 0,
    matchday: "QF",
    nextMatch: "14 days",
    progress: 0,
  },
]);

const memberClubs = ref({
  total: 48,
  active: 45,
  suspended: 2,
  newThisMonth: 3,
});

const pendingApplications = ref([
  {
    id: 1,
    clubName: "Soweto United FC",
    location: "Johannesburg, GP",
    type: "New",
    submittedDate: "2 days ago",
  },
  {
    id: 2,
    clubName: "Durban Coastal FC",
    location: "Durban, KZN",
    type: "Renewal",
    submittedDate: "5 days ago",
  },
  {
    id: 3,
    clubName: "Cape Stars FC",
    location: "Cape Town, WC",
    type: "New",
    submittedDate: "1 week ago",
  },
]);

const upcomingFixtures = ref([
  {
    id: 1,
    competition: "PSL",
    homeTeam: "Orlando Pirates",
    awayTeam: "Kaizer Chiefs",
    date: "Oct 12",
    time: "15:00",
    venue: "FNB Stadium",
  },
  {
    id: 2,
    competition: "Nedbank Cup",
    homeTeam: "Mamelodi Sundowns",
    awayTeam: "SuperSport United",
    date: "Oct 15",
    time: "19:30",
    venue: "Loftus Versfeld",
  },
  {
    id: 3,
    competition: "PSL",
    homeTeam: "AmaZulu FC",
    awayTeam: "Golden Arrows",
    date: "Oct 18",
    time: "15:00",
    venue: "Moses Mabhida Stadium",
  },
]);

const recentResults = ref([
  {
    id: 1,
    competition: "PSL",
    homeTeam: "Orlando Pirates",
    awayTeam: "Mamelodi Sundowns",
    homeScore: 2,
    awayScore: 1,
    date: "Oct 5",
    venue: "Orlando Stadium",
    status: "completed",
  },
  {
    id: 2,
    competition: "Nedbank Cup",
    homeTeam: "Kaizer Chiefs",
    awayTeam: "SuperSport United",
    homeScore: 1,
    awayScore: 1,
    date: "Oct 3",
    venue: "FNB Stadium",
    status: "completed",
  },
  {
    id: 3,
    competition: "PSL",
    homeTeam: "AmaZulu FC",
    awayTeam: "Moroka Swallows",
    homeScore: 3,
    awayScore: 0,
    date: "Oct 1",
    venue: "Moses Mabhida Stadium",
    status: "completed",
  },
]);
</script>
