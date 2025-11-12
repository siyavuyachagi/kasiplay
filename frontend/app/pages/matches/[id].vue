<template>
  <div class="lg:grid lg:grid-cols-12 lg:gap-6">
    <!-- Left Sidebar -->
    <LeftSidebar />

    <!-- Main Content -->
    <div class="lg:col-span-9 space-y-6">
      <!-- Breadcrumb -->
      <Breadcrumb :links="breadcrumbs" />

      <!-- Page Header -->
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Match Details
        </h1>
        <p class="text-gray-600 dark:text-gray-400">
          Full breakdown, stats, and insights
        </p>
      </div>

      <!-- Match Header -->
      <div
        class="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-6 text-white shadow-sm">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center space-x-2">
            <span
              class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold">
              {{ match.competition }}
            </span>
            <span
              v-if="match.isLive"
              class="px-3 py-1 bg-red-500 rounded-full text-xs font-bold flex items-center space-x-1">
              <span class="relative flex h-2 w-2">
                <span
                  class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span
                  class="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <span>LIVE • {{ match.minute }}'</span>
            </span>
          </div>
          <span class="text-sm opacity-90">{{ match.venue }}</span>
        </div>

        <!-- Score Display -->
        <div class="flex items-center justify-between">
          <!-- Home Team -->
          <div class="text-center flex-1">
            <div
              class="w-20 h-20 mx-auto bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3">
              <icon name="lucide:shield" size="40" class="text-white" />
            </div>
            <h2 class="text-2xl font-bold mb-1">{{ match.homeTeam }}</h2>
            <p class="text-sm opacity-75">Home</p>
          </div>

          <!-- Score -->
          <div class="text-center flex-1">
            <div class="text-6xl font-bold mb-2">
              {{ match.homeScore }} - {{ match.awayScore }}
            </div>
            <p class="text-sm opacity-90">
              {{ match.date }} • {{ match.time }}
            </p>
            <button
              v-if="match.isLive"
              class="mt-3 px-6 py-2 bg-red-500 hover:bg-red-600 rounded-lg font-medium transition-colors">
              Watch Live
            </button>
            <p v-else class="text-sm mt-2 opacity-75">{{ match.status }}</p>
          </div>

          <!-- Away Team -->
          <div class="text-center flex-1">
            <div
              class="w-20 h-20 mx-auto bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3">
              <icon name="lucide:shield" size="40" class="text-white" />
            </div>
            <h2 class="text-2xl font-bold mb-1">{{ match.awayTeam }}</h2>
            <p class="text-sm opacity-75">Away</p>
          </div>
        </div>

        <!-- Match Info -->
        <div class="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/20">
          <div class="text-center">
            <icon
              name="lucide:calendar"
              size="20"
              class="mx-auto mb-1 opacity-75" />
            <p class="text-xs opacity-75">Date</p>
            <p class="font-semibold">{{ match.date }}</p>
          </div>
          <div class="text-center">
            <icon
              name="lucide:users"
              size="20"
              class="mx-auto mb-1 opacity-75" />
            <p class="text-xs opacity-75">Attendance</p>
            <p class="font-semibold">{{ match.attendance }}</p>
          </div>
          <div class="text-center">
            <icon
              name="lucide:whistle"
              size="20"
              class="mx-auto mb-1 opacity-75" />
            <p class="text-xs opacity-75">Referee</p>
            <p class="font-semibold">{{ match.referee }}</p>
          </div>
        </div>
      </div>

      <!-- Tabs -->
      <div
        class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
        <div
          class="flex border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="activeTab = tab.id"
            class="px-6 py-3 font-medium text-sm whitespace-nowrap transition-colors"
            :class="
              activeTab === tab.id
                ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
            ">
            {{ tab.label }}
          </button>
        </div>

        <!-- Tab Content -->
        <div class="p-6 space-y-6">
          <!-- Overview Tab -->
          <div v-if="activeTab === 'overview'" class="space-y-6">
            <!-- Match Statistics -->
            <div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Match Statistics
              </h3>
              <div class="space-y-4">
                <div v-for="stat in matchStats" :key="stat.label">
                  <div class="flex items-center justify-between text-sm mb-2">
                    <span class="font-medium text-gray-900 dark:text-white">{{
                      stat.home
                    }}</span>
                    <span class="text-gray-500 dark:text-gray-400">{{
                      stat.label
                    }}</span>
                    <span class="font-medium text-gray-900 dark:text-white">{{
                      stat.away
                    }}</span>
                  </div>
                  <div
                    class="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      class="absolute left-0 h-full bg-blue-600 rounded-full"
                      :style="{ width: stat.homePercent + '%' }"></div>
                    <div
                      class="absolute right-0 h-full bg-purple-600 rounded-full"
                      :style="{ width: stat.awayPercent + '%' }"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Key Events -->
            <div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Key Events
              </h3>
              <div class="space-y-3">
                <div
                  v-for="event in keyEvents"
                  :key="event.id"
                  class="flex items-start space-x-3 bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                  <div class="w-12 text-center">
                    <span
                      class="text-sm font-bold text-gray-900 dark:text-white"
                      >{{ event.minute }}'</span
                    >
                  </div>
                  <div class="flex-shrink-0">
                    <div
                      class="w-8 h-8 rounded-full flex items-center justify-center"
                      :class="
                        event.type === 'goal'
                          ? 'bg-green-100 dark:bg-green-900'
                          : event.type === 'yellow'
                          ? 'bg-yellow-100 dark:bg-yellow-900'
                          : 'bg-red-100 dark:bg-red-900'
                      ">
                      <icon
                        v-if="event.type === 'goal'"
                        name="lucide:circle-dot"
                        size="16"
                        class="text-green-600 dark:text-green-400" />
                      <icon
                        v-else-if="event.type === 'yellow'"
                        name="lucide:square"
                        size="16"
                        class="text-yellow-600 dark:text-yellow-400" />
                      <icon
                        v-else
                        name="lucide:square"
                        size="16"
                        class="text-red-600 dark:text-red-400" />
                    </div>
                  </div>
                  <div class="flex-1">
                    <p class="font-medium text-gray-900 dark:text-white">
                      {{ event.player }}
                    </p>
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                      {{ event.description }}
                    </p>
                    <span class="text-xs text-gray-400 dark:text-gray-500">{{
                      event.team
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Other tabs remain -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "default" });

const Breadcrumb = defineAsyncComponent(
  () => import("~/components/ui/breadcrumb.vue")
);

const match = {
  homeTeam: "Orlando Pirates",
  awayTeam: "Kaizer Chiefs",
  homeScore: 3,
  awayScore: 1,
  competition: "Kasi Premier League",
  date: "Nov 1, 2025",
  time: "15:00",
  venue: "FNB Stadium",
  attendance: "42,000",
  referee: "Victor Gomes",
  isLive: false,
  status: "Full Time",
  minute: "90+3",
};

const breadcrumbs = [
  { label: "Matches", route: "/matches" },
  { label: `${match.homeTeam} vs ${match.awayTeam}` },
];

const activeTab = ref("overview");
const tabs = [
  { id: "overview", label: "Overview" },
  { id: "lineups", label: "Lineups" },
  { id: "stats", label: "Statistics" },
  { id: "h2h", label: "Head to Head" },
];

const matchStats = [
  { label: "Possession", home: 65, away: 35, homePercent: 65, awayPercent: 35 },
  { label: "Shots", home: 18, away: 9, homePercent: 67, awayPercent: 33 },
  {
    label: "Shots on Target",
    home: 8,
    away: 4,
    homePercent: 67,
    awayPercent: 33,
  },
  { label: "Corners", home: 7, away: 3, homePercent: 70, awayPercent: 30 },
  { label: "Fouls", home: 12, away: 16, homePercent: 43, awayPercent: 57 },
  { label: "Passes", home: 432, away: 278, homePercent: 61, awayPercent: 39 },
];

const keyEvents = [
  {
    id: 1,
    minute: 23,
    type: "goal",
    player: "Patrick Maswanganyi",
    description: "Goal! Assisted by Thabiso Monyane",
    team: "Orlando Pirates",
  },
  {
    id: 2,
    minute: 38,
    type: "goal",
    player: "Monnapule Saleng",
    description: "Goal! Solo effort",
    team: "Orlando Pirates",
  },
  {
    id: 3,
    minute: 45,
    type: "yellow",
    player: "Yusuf Maart",
    description: "Yellow card for tactical foul",
    team: "Kaizer Chiefs",
  },
  {
    id: 4,
    minute: 56,
    type: "goal",
    player: "Ashley Du Preez",
    description: "Goal! Assisted by Edson Castillo",
    team: "Kaizer Chiefs",
  },
  {
    id: 5,
    minute: 78,
    type: "goal",
    player: "Evidence Makgopa",
    description: "Goal! Header from corner",
    team: "Orlando Pirates",
  },
  {
    id: 6,
    minute: 82,
    type: "red",
    player: "Edmilson Dove",
    description: "Red card - Second yellow",
    team: "Kaizer Chiefs",
  },
];

const homeLineup = {
  formation: "4-2-3-1",
  coach: "José Riveiro",
  starting: [
    { number: 1, name: "Sipho Chaine", position: "GK" },
    { number: 2, name: "Thabiso Monyane", position: "RB" },
    { number: 3, name: "Tapelo Xoki", position: "CB" },
    { number: 4, name: "Olisa Ndah", position: "CB" },
    { number: 5, name: "Innocent Maela", position: "LB" },
    { number: 6, name: "Miguel Timm", position: "CDM" },
    { number: 8, name: "Makhehlene Makhaula", position: "CDM" },
    { number: 10, name: "Patrick Maswanganyi", position: "CAM" },
    { number: 11, name: "Monnapule Saleng", position: "RW" },
    { number: 7, name: "Relebohile Mofokeng", position: "LW" },
    { number: 9, name: "Evidence Makgopa", position: "ST" },
  ],
  substitutes: [
    { number: 16, name: "Melusi Buthelezi", position: "GK" },
    { number: 14, name: "Karim Kimvuidi", position: "MF" },
    { number: 15, name: "Thabang Monare", position: "MF" },
    { number: 17, name: "Kabelo Dlamini", position: "MF" },
    { number: 20, name: "Tshegofatso Mabasa", position: "FW" },
  ],
};

const awayLineup = {
  formation: "4-3-3",
  coach: "Nasreddine Nabi",
  starting: [
    { number: 1, name: "Itumeleng Khune", position: "GK" },
    { number: 2, name: "Reeve Frosler", position: "RB" },
    { number: 4, name: "Thatayaone Ditlhokwe", position: "CB" },
    { number: 5, name: "Edmilson Dove", position: "CB" },
    { number: 3, name: "Sfiso Hlanti", position: "LB" },
    { number: 6, name: "Yusuf Maart", position: "CM" },
    { number: 8, name: "Edson Castillo", position: "CM" },
    { number: 10, name: "Mduduzi Shabalala", position: "CM" },
    { number: 11, name: "Christian Saile", position: "RW" },
    { number: 9, name: "Ashley Du Preez", position: "ST" },
    { number: 7, name: "Ranga Chivaviro", position: "LW" },
  ],
  substitutes: [
    { number: 16, name: "Brandon Petersen", position: "GK" },
    { number: 12, name: "Njabulo Blom", position: "MF" },
    { number: 14, name: "Samkelo Zwane", position: "MF" },
    { number: 18, name: "Tebogo Potsane", position: "FW" },
    { number: 19, name: "Jasond González", position: "FW" },
  ],
};

const playerStats = [
  {
    category: "Goals",
    players: [
      { name: "Patrick Maswanganyi", team: "Orlando Pirates", value: 1 },
      { name: "Monnapule Saleng", team: "Orlando Pirates", value: 1 },
      { name: "Evidence Makgopa", team: "Orlando Pirates", value: 1 },
    ],
  },
  {
    category: "Assists",
    players: [
      { name: "Thabiso Monyane", team: "Orlando Pirates", value: 2 },
      { name: "Edson Castillo", team: "Kaizer Chiefs", value: 1 },
    ],
  },
  {
    category: "Shots",
    players: [
      { name: "Monnapule Saleng", team: "Orlando Pirates", value: 5 },
      { name: "Ashley Du Preez", team: "Kaizer Chiefs", value: 4 },
      { name: "Patrick Maswanganyi", team: "Orlando Pirates", value: 3 },
    ],
  },
  {
    category: "Passes",
    players: [
      { name: "Miguel Timm", team: "Orlando Pirates", value: 78 },
      { name: "Yusuf Maart", team: "Kaizer Chiefs", value: 65 },
      { name: "Makhehlene Makhaula", team: "Orlando Pirates", value: 62 },
    ],
  },
];

const detailedStats = [
  { label: "Ball Possession", home: "65%", away: "35%" },
  { label: "Total Shots", home: 18, away: 9 },
  { label: "Shots on Target", home: 8, away: 4 },
  { label: "Shots off Target", home: 7, away: 3 },
  { label: "Blocked Shots", home: 3, away: 2 },
  { label: "Corners", home: 7, away: 3 },
  { label: "Offsides", home: 2, away: 4 },
  { label: "Fouls", home: 12, away: 16 },
  { label: "Yellow Cards", home: 2, away: 3 },
  { label: "Red Cards", home: 0, away: 1 },
  { label: "Total Passes", home: 432, away: 278 },
  { label: "Pass Accuracy", home: "87%", away: "79%" },
  { label: "Tackles", home: 18, away: 22 },
  { label: "Interceptions", home: 12, away: 8 },
  { label: "Clearances", home: 15, away: 24 },
  { label: "Pass Accuracy", home: "87%", away: "79%" },
  { label: "Tackles", home: 18, away: 22 },
  { label: "Interceptions", home: 12, away: 8 },
  { label: "Clearances", home: 15, away: 24 },
  { label: "Saves", home: 3, away: 5 },
];

const h2hStats = {
  homeWins: 12,
  draws: 8,
  awayWins: 15,
};

const h2hMatches = [
  {
    id: 1,
    date: "Sep 14, 2025",
    homeTeam: "Kaizer Chiefs",
    awayTeam: "Orlando Pirates",
    homeScore: 0,
    awayScore: 2,
    competition: "MTN8",
  },
  {
    id: 2,
    date: "Apr 20, 2025",
    homeTeam: "Orlando Pirates",
    awayTeam: "Kaizer Chiefs",
    homeScore: 1,
    awayScore: 1,
    competition: "KPL",
  },
  {
    id: 3,
    date: "Nov 12, 2024",
    homeTeam: "Kaizer Chiefs",
    awayTeam: "Orlando Pirates",
    homeScore: 2,
    awayScore: 1,
    competition: "KPL",
  },
  {
    id: 4,
    date: "Mar 9, 2024",
    homeTeam: "Orlando Pirates",
    awayTeam: "Kaizer Chiefs",
    homeScore: 3,
    awayScore: 0,
    competition: "Nedbank Cup",
  },
  {
    id: 5,
    date: "Oct 29, 2023",
    homeTeam: "Kaizer Chiefs",
    awayTeam: "Orlando Pirates",
    homeScore: 1,
    awayScore: 2,
    competition: "KPL",
  },
];
</script>
