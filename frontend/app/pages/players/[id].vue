<template>
  <div class="lg:grid lg:grid-cols-12 lg:gap-6">
    <!-- Left Sidebar -->
    <LeftSidebar />

    <!-- Main Content -->
    <div class="lg:col-span-9 space-y-6">
      <!-- Breadcrumb -->
      <Breadcrumb :links="breadcrumbs" />

      <!-- Player Header -->
      <div
        class="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-6 text-white shadow-sm">
        <div class="flex flex-col md:flex-row items-center gap-6">
          <!-- Player Photo -->
          <div
            class="w-40 h-40 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 relative">
            <icon name="lucide:user" size="100" class="text-white" />
            <div
              class="absolute bottom-2 right-2 w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center border-2 border-white">
              <span class="text-2xl font-bold">{{ player.number }}</span>
            </div>
          </div>

          <!-- Player Info -->
          <div class="flex-1 text-center md:text-left">
            <div class="flex items-center justify-center md:justify-start space-x-2 mb-2">
              <h1 class="text-4xl font-bold">{{ player.name }}</h1>
              <span
                v-if="player.isCaptain"
                class="px-2 py-1 bg-yellow-500 text-white text-xs font-bold rounded">
                C
              </span>
            </div>
            <p class="text-xl opacity-90 mb-4">{{ player.team }}</p>

            <div class="flex flex-wrap gap-4 justify-center md:justify-start">
              <div class="flex items-center space-x-2">
                <icon name="lucide:shirt" size="16" />
                <span class="text-sm">{{ player.position }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <icon name="lucide:flag" size="16" />
                <span class="text-sm">{{ player.nationality }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <icon name="lucide:calendar" size="16" />
                <span class="text-sm">{{ player.age }} years old</span>
              </div>
              <div class="flex items-center space-x-2">
                <icon name="lucide:ruler" size="16" />
                <span class="text-sm">{{ player.height }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <icon name="lucide:footprints" size="16" />
                <span class="text-sm">{{ player.preferredFoot }}</span>
              </div>
            </div>
          </div>

          <!-- Market Value Card -->
          <div
            class="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center flex-shrink-0">
            <p class="text-sm opacity-75 mb-1">Market Value</p>
            <p class="text-3xl font-bold">{{ player.marketValue }}</p>
            <div class="flex items-center justify-center space-x-1 mt-2">
              <icon name="lucide:trending-up" size="14" class="text-green-400" />
              <span class="text-xs text-green-400">+15%</span>
            </div>
          </div>
        </div>

        <!-- Season Stats -->
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6 pt-6 border-t border-white/20">
          <div class="text-center">
            <p class="text-3xl font-bold">{{ player.seasonStats.appearances }}</p>
            <p class="text-xs opacity-75">Appearances</p>
          </div>
          <div class="text-center">
            <p class="text-3xl font-bold text-green-300">{{ player.seasonStats.goals }}</p>
            <p class="text-xs opacity-75">Goals</p>
          </div>
          <div class="text-center">
            <p class="text-3xl font-bold text-blue-300">{{ player.seasonStats.assists }}</p>
            <p class="text-xs opacity-75">Assists</p>
          </div>
          <div class="text-center">
            <p class="text-3xl font-bold text-yellow-300">{{ player.seasonStats.yellowCards }}</p>
            <p class="text-xs opacity-75">Yellow Cards</p>
          </div>
          <div class="text-center">
            <p class="text-3xl font-bold text-red-300">{{ player.seasonStats.redCards }}</p>
            <p class="text-xs opacity-75">Red Cards</p>
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
            <!-- Bio -->
            <div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Biography
              </h3>
              <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                {{ player.bio }}
              </p>
            </div>

            <!-- Career Highlights -->
            <div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Career Highlights
              </h3>
              <div class="space-y-3">
                <div
                  v-for="highlight in player.highlights"
                  :key="highlight.id"
                  class="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div
                    class="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center flex-shrink-0">
                    <icon name="lucide:trophy" size="20" class="text-white" />
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900 dark:text-white">
                      {{ highlight.title }}
                    </p>
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                      {{ highlight.description }}
                    </p>
                    <span class="text-xs text-gray-400 dark:text-gray-500">{{
                      highlight.year
                    }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Personal Info -->
            <div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Personal Information
              </h3>
              <div class="grid md:grid-cols-2 gap-4">
                <div
                  v-for="info in personalInfo"
                  :key="info.label"
                  class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span class="text-sm text-gray-500 dark:text-gray-400">{{
                    info.label
                  }}</span>
                  <span
                    class="text-sm font-semibold text-gray-900 dark:text-white"
                    >{{ info.value }}</span
                  >
                </div>
              </div>
            </div>

            <!-- Recent Form -->
            <div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Recent Performances
              </h3>
              <div class="space-y-3">
                <div
                  v-for="performance in recentPerformances"
                  :key="performance.id"
                  class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div class="flex-1">
                    <div class="flex items-center space-x-2 mb-1">
                      <span
                        class="text-sm font-medium text-gray-900 dark:text-white"
                        >{{ performance.match }}</span
                      >
                      <span
                        class="text-xs text-gray-500 dark:text-gray-400"
                        >{{ performance.date }}</span
                      >
                    </div>
                    <div class="flex items-center space-x-3 text-xs">
                      <span
                        v-if="performance.goals > 0"
                        class="flex items-center space-x-1 text-green-600 dark:text-green-400">
                        <icon name="lucide:circle-dot" size="12" />
                        <span>{{ performance.goals }} goal(s)</span>
                      </span>
                      <span
                        v-if="performance.assists > 0"
                        class="flex items-center space-x-1 text-blue-600 dark:text-blue-400">
                        <icon name="lucide:hand" size="12" />
                        <span>{{ performance.assists }} assist(s)</span>
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span
                      class="px-2 py-1 text-xs font-bold rounded"
                      :class="{
                        'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400':
                          performance.rating >= 7.5,
                        'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400':
                          performance.rating < 7.5,
                      }">
                      ⭐ {{ performance.rating }}
                    </span>
                    <span class="text-sm text-gray-500 dark:text-gray-400"
                      >{{ performance.minutes }}'</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Statistics Tab -->
          <div v-if="activeTab === 'stats'" class="space-y-6">
            <!-- Season by Season -->
            <div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Season Statistics
              </h3>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead
                    class="bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                    <tr>
                      <th class="px-4 py-3 text-left font-semibold">Season</th>
                      <th class="px-4 py-3 text-center font-semibold">Apps</th>
                      <th class="px-4 py-3 text-center font-semibold">
                        Goals
                      </th>
                      <th class="px-4 py-3 text-center font-semibold">
                        Assists
                      </th>
                      <th class="px-4 py-3 text-center font-semibold">YC</th>
                      <th class="px-4 py-3 text-center font-semibold">RC</th>
                      <th class="px-4 py-3 text-center font-semibold">
                        Minutes
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr
                      v-for="season in seasonStats"
                      :key="season.season"
                      class="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td
                        class="px-4 py-3 font-medium text-gray-900 dark:text-white">
                        {{ season.season }}
                      </td>
                      <td class="px-4 py-3 text-center text-gray-600 dark:text-gray-400">
                        {{ season.appearances }}
                      </td>
                      <td class="px-4 py-3 text-center font-semibold text-green-600 dark:text-green-400">
                        {{ season.goals }}
                      </td>
                      <td class="px-4 py-3 text-center font-semibold text-blue-600 dark:text-blue-400">
                        {{ season.assists }}
                      </td>
                      <td class="px-4 py-3 text-center text-gray-600 dark:text-gray-400">
                        {{ season.yellowCards }}
                      </td>
                      <td class="px-4 py-3 text-center text-gray-600 dark:text-gray-400">
                        {{ season.redCards }}
                      </td>
                      <td class="px-4 py-3 text-center text-gray-600 dark:text-gray-400">
                        {{ season.minutes }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Advanced Stats -->
            <div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Advanced Statistics (This Season)
              </h3>
              <div class="grid md:grid-cols-2 gap-6">
                <div class="space-y-4">
                  <h4
                    class="font-semibold text-gray-900 dark:text-white text-sm">
                    Attacking
                  </h4>
                  <div
                    v-for="stat in advancedStats.attacking"
                    :key="stat.label"
                    class="space-y-2">
                    <div class="flex items-center justify-between text-sm">
                      <span
                        class="font-medium text-gray-900 dark:text-white"
                        >{{ stat.label }}</span
                      >
                      <span
                        class="font-bold text-blue-600 dark:text-blue-400"
                        >{{ stat.value }}</span
                      >
                    </div>
                    <div
                      class="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        class="h-full bg-blue-600 rounded-full transition-all"
                        :style="{ width: stat.percentage + '%' }"></div>
                    </div>
                  </div>
                </div>
                <div class="space-y-4">
                  <h4
                    class="font-semibold text-gray-900 dark:text-white text-sm">
                    Defensive & Other
                  </h4>
                  <div
                    v-for="stat in advancedStats.defensive"
                    :key="stat.label"
                    class="space-y-2">
                    <div class="flex items-center justify-between text-sm">
                      <span
                        class="font-medium text-gray-900 dark:text-white"
                        >{{ stat.label }}</span
                      >
                      <span
                        class="font-bold text-purple-600 dark:text-purple-400"
                        >{{ stat.value }}</span
                      >
                    </div>
                    <div
                      class="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        class="h-full bg-purple-600 rounded-full transition-all"
                        :style="{ width: stat.percentage + '%' }"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Career Tab -->
          <div v-if="activeTab === 'career'" class="space-y-6">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white">
              Career History
            </h3>
            <div class="relative">
              <!-- Timeline Line -->
              <div
                class="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

              <!-- Timeline Items -->
              <div class="space-y-6">
                <div
                  v-for="career in careerHistory"
                  :key="career.id"
                  class="relative pl-16">
                  <!-- Timeline Dot -->
                  <div
                    class="absolute left-3 top-2 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                    <div class="w-3 h-3 rounded-full bg-white"></div>
                  </div>

                  <div
                    class="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div
                      class="flex items-center justify-between mb-2">
                      <h4
                        class="font-bold text-gray-900 dark:text-white">
                        {{ career.club }}
                      </h4>
                      <span
                        class="text-sm text-gray-500 dark:text-gray-400"
                        >{{ career.period }}</span
                      >
                    </div>
                    <p
                      class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {{ career.description }}
                    </p>
                    <div
                      class="grid grid-cols-4 gap-3 text-center text-xs">
                      <div>
                        <p
                          class="font-bold text-gray-900 dark:text-white">
                          {{ career.stats.appearances }}
                        </p>
                        <p class="text-gray-500 dark:text-gray-400">Apps</p>
                      </div>
                      <div>
                        <p
                          class="font-bold text-green-600 dark:text-green-400">
                          {{ career.stats.goals }}
                        </p>
                        <p class="text-gray-500 dark:text-gray-400">Goals</p>
                      </div>
                      <div>
                        <p
                          class="font-bold text-blue-600 dark:text-blue-400">
                          {{ career.stats.assists }}
                        </p>
                        <p class="text-gray-500 dark:text-gray-400">
                          Assists
                        </p>
                      </div>
                      <div>
                        <p
                          class="font-bold text-yellow-600 dark:text-yellow-400">
                          {{ career.stats.trophies }}
                        </p>
                        <p class="text-gray-500 dark:text-gray-400">
                          Trophies
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Honours Tab -->
          <div v-if="activeTab === 'honours'" class="space-y-6">
            <div v-for="category in honours" :key="category.name">
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">
                {{ category.name }}
              </h3>
              <div class="grid md:grid-cols-2 gap-4">
                <div
                  v-for="trophy in category.trophies"
                  :key="trophy.id"
                  class="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div
                    class="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center flex-shrink-0">
                    <icon name="lucide:trophy" size="24" class="text-white" />
                  </div>
                  <div class="flex-1">
                    <p
                      class="font-semibold text-gray-900 dark:text-white">
                      {{ trophy.name }}
                    </p>
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                      {{ trophy.year }} • {{ trophy.team }}
                    </p>
                  </div>
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
definePageMeta({ layout: "default" });

const Breadcrumb = defineAsyncComponent(
  () => import("~/components/ui/breadcrumb.vue")
);

const player = {
  name: "Monnapule Saleng",
  number: 11,
  team: "Orlando Pirates",
  position: "Left Winger",
  nationality: "South Africa",
  age: 25,
  height: "1.78m",
  preferredFoot: "Left",
  marketValue: "R15M",
  isCaptain: false,
  bio: "Monnapule Saleng is a talented South African winger who currently plays for Orlando Pirates. Known for his exceptional pace, dribbling ability, and eye for goal, Saleng has established himself as one of the most exciting attacking players in the PSL. His performances have earned him recognition at both club and international level.",
  seasonStats: {
    appearances: 18,
    goals: 12,
    assists: 6,
    yellowCards: 2,
    redCards: 0,
  },
  highlights: [
    {
      id: 1,
      title: "Player of the Month",
      description: "Won PSL Player of the Month award",
      year: "October 2025",
    },
    {
      id: 2,
      title: "Hat-trick Hero",
      description: "Scored hat-trick against Stellenbosch FC",
      year: "September 2025",
    },
    {
      id: 3,
      title: "CAF Confederation Cup Winner",
      description: "Helped Pirates win continental trophy",
      year: "2024",
    },
  ],
};

const breadcrumbs = [
  { label: "Players", route: "/players" },
  { label: player.name },
];

const activeTab = ref("overview");
const tabs = [
  { id: "overview", label: "Overview" },
  { id: "stats", label: "Statistics" },
  { id: "career", label: "Career" },
  { id: "honours", label: "Honours" },
];

const personalInfo = [
  { label: "Full Name", value: "Monnapule Saleng" },
  { label: "Date of Birth", value: "March 12, 2000" },
  { label: "Place of Birth", value: "Johannesburg, SA" },
  { label: "Height", value: "1.78m" },
  { label: "Weight", value: "72kg" },
  { label: "Preferred Foot", value: "Left" },
  { label: "Contract Expires", value: "June 2027" },
  { label: "Agent", value: "ProSport Management" },
];

const recentPerformances = [
  {
    id: 1,
    match: "Orlando Pirates vs Kaizer Chiefs",
    date: "Nov 1",
    goals: 1,
    assists: 1,
    rating: 8.5,
    minutes: 90,
  },
  {
    id: 2,
    match: "Sundowns vs Orlando Pirates",
    date: "Oct 28",
    goals: 0,
    assists: 1,
    rating: 7.2,
    minutes: 85,
  },
  {
    id: 3,
    match: "Orlando Pirates vs Cape Town City",
    date: "Oct 22",
    goals: 2,
    assists: 0,
    rating: 9.0,
    minutes: 90,
  },
  {
    id: 4,
    match: "SuperSport vs Orlando Pirates",
    date: "Oct 15",
    goals: 1,
    assists: 0,
    rating: 7.8,
    minutes: 90,
  },
  {
    id: 5,
    match: "Orlando Pirates vs AmaZulu",
    date: "Oct 8",
    goals: 0,
    assists: 1,
    rating: 6.8,
    minutes: 76,
  },
];

const seasonStats = [
  {
    season: "2025/26",
    appearances: 18,
    goals: 12,
    assists: 6,
    yellowCards: 2,
    redCards: 0,
    minutes: 1580,
  },
  {
    season: "2024/25",
    appearances: 28,
    goals: 10,
    assists: 8,
    yellowCards: 4,
    redCards: 0,
    minutes: 2340,
  },
  {
    season: "2023/24",
    appearances: 25,
    goals: 8,
    assists: 5,
    yellowCards: 3,
    redCards: 1,
    minutes: 2015,
  },
];

const advancedStats = {
  attacking: [
    { label: "Shots per Game", value: "3.8", percentage: 76 },
    { label: "Shot Accuracy", value: "62%", percentage: 62 },
    { label: "Dribbles per Game", value: "4.2", percentage: 84 },
    { label: "Key Passes per Game", value: "2.1", percentage: 70 },
  ],
  defensive: [
    { label: "Tackles per Game", value: "1.2", percentage: 40 },
    { label: "Interceptions", value: "0.8", percentage: 32 },
    { label: "Pass Accuracy", value: "82%", percentage: 82 },
    { label: "Duels Won", value: "56%", percentage: 56 },
  ],
};

const careerHistory = [
  {
    id: 1,
    club: "Orlando Pirates",
    period: "2022 - Present",
    description:
      "Made the step up to become a key player for the Buccaneers. Established himself as one of the most dangerous wingers in the PSL.",
    stats: { appearances: 71, goals: 30, assists: 19, trophies: 2 },
  },
  {
    id: 2,
    club: "Stellenbosch FC (Loan)",
    period: "2021 - 2022",
    description:
      "Loan spell that helped develop his game. Impressed with consistent performances that earned him a recall to Pirates.",
    stats: { appearances: 28, goals: 6, assists: 4, trophies: 0 },
  },
  {
    id: 3,
    club: "Orlando Pirates (Reserve)",
    period: "2019 - 2021",
    description:
      "Came through the Pirates academy system. Showed glimpses of his potential in the reserve team.",
    stats: { appearances: 45, goals: 18, assists: 12, trophies: 1 },
  },
];

const honours = [
  {
    name: "Club Honours",
    trophies: [
      {
        id: 1,
        name: "CAF Confederation Cup",
        year: "2024",
        team: "Orlando Pirates",
      },
      {
        id: 2,
        name: "MTN8",
        year: "2023",
        team: "Orlando Pirates",
      },
    ],
  },
  {
    name: "Individual Honours",
    trophies: [
      {
        id: 3,
        name: "PSL Player of the Month",
        year: "October 2025",
        team: "Orlando Pirates",
      },
      {
        id: 4,
        name: "PSL Goal of the Month",
        year: "September 2025",
        team: "Orlando Pirates",
      },
    ],
  },
];
</script>