<template>
  <div class="lg:grid lg:grid-cols-12 lg:gap-6">
    <!-- Left Sidebar -->
    <LeftSidebar />

    <!-- Main Content -->
    <div class="lg:col-span-9 space-y-6">
      <!-- Breadcrumb -->
      <Breadcrumb :links="breadcrumbs" />

      <!-- Team Header -->
      <div
        class="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-6 text-white shadow-sm">
        <div class="flex flex-col md:flex-row items-center gap-6">
          <!-- Team Badge -->
          <div
            class="w-32 h-32 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
            <icon name="lucide:shield" size="80" class="text-white" />
          </div>

          <!-- Team Info -->
          <div class="flex-1 text-center md:text-left">
            <h1 class="text-4xl font-bold mb-2">{{ team.name }}</h1>
            <p class="text-xl opacity-90 mb-4">{{ team.nickname }}</p>

            <div class="flex flex-wrap gap-4 justify-center md:justify-start">
              <div class="flex items-center space-x-2">
                <icon name="lucide:map-pin" size="16" />
                <span class="text-sm">{{ team.stadium }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <icon name="lucide:calendar" size="16" />
                <span class="text-sm">Founded {{ team.founded }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <icon name="lucide:trophy" size="16" />
                <span class="text-sm">{{ team.trophies }} Trophies</span>
              </div>
              <div class="flex items-center space-x-2">
                <icon name="lucide:users" size="16" />
                <span class="text-sm">{{ team.squadSize }} Players</span>
              </div>
            </div>
          </div>

          <!-- League Position Card -->
          <div
            class="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center flex-shrink-0">
            <p class="text-sm opacity-75 mb-1">League Position</p>
            <p class="text-5xl font-bold">{{ team.position }}</p>
            <p class="text-sm opacity-75 mt-1">{{ team.points }} pts</p>
          </div>
        </div>

        <!-- Quick Stats -->
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6 pt-6 border-t border-white/20">
          <div class="text-center">
            <p class="text-2xl font-bold">{{ team.stats.played }}</p>
            <p class="text-xs opacity-75">Played</p>
          </div>
          <div class="text-center">
            <p class="text-2xl font-bold text-green-300">{{ team.stats.won }}</p>
            <p class="text-xs opacity-75">Won</p>
          </div>
          <div class="text-center">
            <p class="text-2xl font-bold text-gray-300">{{ team.stats.drawn }}</p>
            <p class="text-xs opacity-75">Drawn</p>
          </div>
          <div class="text-center">
            <p class="text-2xl font-bold text-red-300">{{ team.stats.lost }}</p>
            <p class="text-xs opacity-75">Lost</p>
          </div>
          <div class="text-center">
            <p class="text-2xl font-bold">{{ team.stats.goalsScored }}:{{ team.stats.goalsConceded }}</p>
            <p class="text-xs opacity-75">Goal Diff</p>
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
            <!-- About -->
            <div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">
                About {{ team.name }}
              </h3>
              <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                {{ team.description }}
              </p>
            </div>

            <!-- Recent Form -->
            <div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Recent Form
              </h3>
              <div class="flex items-center space-x-2">
                <span
                  v-for="(result, idx) in team.form"
                  :key="idx"
                  class="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white"
                  :class="{
                    'bg-green-500': result === 'W',
                    'bg-gray-400': result === 'D',
                    'bg-red-500': result === 'L',
                  }">
                  {{ result }}
                </span>
              </div>
            </div>

            <!-- Recent Matches -->
            <div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Recent Matches
              </h3>
              <div class="space-y-3">
                <div
                  v-for="match in recentMatches"
                  :key="match.id"
                  class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div class="flex items-center space-x-3 flex-1">
                    <span class="text-xs text-gray-500 dark:text-gray-400 w-16">
                      {{ match.date }}
                    </span>
                    <div class="flex items-center space-x-2 flex-1">
                      <span class="font-medium text-gray-900 dark:text-white">
                        {{ match.homeTeam }}
                      </span>
                      <span class="text-sm text-gray-500">vs</span>
                      <span class="font-medium text-gray-900 dark:text-white">
                        {{ match.awayTeam }}
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center space-x-3">
                    <span
                      class="text-lg font-bold text-gray-900 dark:text-white">
                      {{ match.score }}
                    </span>
                    <span
                      class="px-2 py-1 rounded text-xs font-bold"
                      :class="{
                        'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400':
                          match.result === 'W',
                        'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400':
                          match.result === 'D',
                        'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400':
                          match.result === 'L',
                      }">
                      {{ match.result }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Top Scorers -->
            <div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Top Scorers
              </h3>
              <div class="space-y-3">
                <div
                  v-for="(scorer, idx) in topScorers"
                  :key="scorer.id"
                  class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer">
                  <div class="flex items-center space-x-3">
                    <span
                      class="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm">
                      {{ idx + 1 }}
                    </span>
                    <div
                      class="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <icon
                        name="lucide:user"
                        size="24"
                        class="text-white" />
                    </div>
                    <div>
                      <p
                        class="font-semibold text-gray-900 dark:text-white">
                        {{ scorer.name }}
                      </p>
                      <p class="text-sm text-gray-500 dark:text-gray-400">
                        {{ scorer.position }}
                      </p>
                    </div>
                  </div>
                  <div class="text-right">
                    <p
                      class="text-2xl font-bold text-gray-900 dark:text-white">
                      {{ scorer.goals }}
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      goals
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Squad Tab -->
          <div v-if="activeTab === 'squad'" class="space-y-6">
            <div v-for="position in squadPositions" :key="position.name">
              <h3
                class="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                <icon :name="position.icon" size="20" />
                <span>{{ position.name }}</span>
                <span
                  class="text-sm font-normal text-gray-500 dark:text-gray-400"
                  >({{ position.players.length }})</span
                >
              </h3>
              <div class="grid sm:grid-cols-2 gap-3">
                <div
                  v-for="player in position.players"
                  :key="player.id"
                  @click="router.push(`/players/${player.id}`)"
                  class="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer">
                  <div
                    class="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <span class="text-white font-bold">{{ player.number }}</span>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p
                      class="font-semibold text-gray-900 dark:text-white truncate">
                      {{ player.name }}
                    </p>
                    <p
                      class="text-sm text-gray-500 dark:text-gray-400 truncate">
                      {{ player.nationality }} • Age {{ player.age }}
                    </p>
                  </div>
                  <icon
                    name="lucide:chevron-right"
                    size="20"
                    class="text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          <!-- Stats Tab -->
          <div v-if="activeTab === 'stats'" class="space-y-6">
            <!-- Season Statistics -->
            <div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Season Statistics
              </h3>
              <div class="grid md:grid-cols-2 gap-6">
                <div class="space-y-4">
                  <div
                    v-for="stat in attackingStats"
                    :key="stat.label"
                    class="space-y-2">
                    <div
                      class="flex items-center justify-between text-sm">
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
                  <div
                    v-for="stat in defensiveStats"
                    :key="stat.label"
                    class="space-y-2">
                    <div
                      class="flex items-center justify-between text-sm">
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

            <!-- Comparison Chart -->
            <div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">
                League Comparison
              </h3>
              <div class="space-y-3">
                <div
                  v-for="comparison in leagueComparison"
                  :key="comparison.label">
                  <div
                    class="flex items-center justify-between text-sm mb-2">
                    <span
                      class="font-medium text-gray-900 dark:text-white"
                      >{{ comparison.label }}</span
                    >
                    <span class="text-gray-500 dark:text-gray-400"
                      >{{ comparison.rank }}/16</span
                    >
                  </div>
                  <div class="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <div
                      class="absolute h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                      :style="{ width: comparison.percentage + '%' }"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Fixtures Tab -->
          <div v-if="activeTab === 'fixtures'" class="space-y-4">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white">
              Upcoming Fixtures
            </h3>
            <div class="space-y-3">
              <div
                v-for="fixture in upcomingFixtures"
                :key="fixture.id"
                class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                <div class="flex-1">
                  <div class="flex items-center space-x-2 mb-2">
                    <span
                      class="text-xs font-medium text-blue-600 dark:text-blue-400"
                      >{{ fixture.competition }}</span
                    >
                    <span class="text-xs text-gray-500 dark:text-gray-400"
                      >{{ fixture.date }} • {{ fixture.time }}</span
                    >
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="text-center flex-1">
                      <p
                        class="font-semibold text-gray-900 dark:text-white text-sm">
                        {{ fixture.homeTeam }}
                      </p>
                    </div>
                    <span class="text-gray-500 dark:text-gray-400">vs</span>
                    <div class="text-center flex-1">
                      <p
                        class="font-semibold text-gray-900 dark:text-white text-sm">
                        {{ fixture.awayTeam }}
                      </p>
                    </div>
                  </div>
                  <div class="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-2">
                    <icon name="lucide:map-pin" size="12" class="mr-1" />
                    {{ fixture.venue }}
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
              <div class="space-y-3">
                <div
                  v-for="trophy in category.trophies"
                  :key="trophy.id"
                  class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div class="flex items-center space-x-3">
                    <div
                      class="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                      <icon
                        name="lucide:trophy"
                        size="24"
                        class="text-white" />
                    </div>
                    <div>
                      <p
                        class="font-semibold text-gray-900 dark:text-white">
                        {{ trophy.name }}
                      </p>
                      <p class="text-sm text-gray-500 dark:text-gray-400">
                        {{ trophy.years.length }} times
                      </p>
                    </div>
                  </div>
                  <div class="text-right">
                    <p
                      class="text-sm font-medium text-gray-900 dark:text-white">
                      {{ trophy.years.join(", ") }}
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
import { generateRandomUUID } from "~/utilities/generate-random-uuid";

definePageMeta({ layout: "default" });

const Breadcrumb = defineAsyncComponent(
  () => import("~/components/ui/breadcrumb.vue")
);

const router = useRouter();

const team = {
  name: "Orlando Pirates",
  nickname: "The Buccaneers",
  position: 2,
  points: 45,
  stadium: "Orlando Stadium",
  founded: 1937,
  trophies: 12,
  squadSize: 30,
  description:
    "Orlando Pirates Football Club is a South African professional football club based in the Houghton suburb of Johannesburg and currently playing in the top-tier PSL. The team plays in the Orlando Stadium in Soweto. Founded in 1937, the club is one of the most successful teams in South African football history, having won numerous league titles and cup competitions.",
  stats: {
    played: 20,
    won: 14,
    drawn: 3,
    lost: 3,
    goalsScored: 38,
    goalsConceded: 16,
  },
  form: ["W", "W", "W", "D", "W"],
};

const breadcrumbs = [
  { label: "Teams", route: "/teams" },
  { label: team.name },
];

const activeTab = ref("overview");
const tabs = [
  { id: "overview", label: "Overview" },
  { id: "squad", label: "Squad" },
  { id: "stats", label: "Statistics" },
  { id: "fixtures", label: "Fixtures" },
  { id: "honours", label: "Honours" },
];

const recentMatches = [
  {
    id: 1,
    date: "Nov 1",
    homeTeam: "Orlando Pirates",
    awayTeam: "Kaizer Chiefs",
    score: "3-1",
    result: "W",
  },
  {
    id: 2,
    date: "Oct 28",
    homeTeam: "Sundowns",
    awayTeam: "Orlando Pirates",
    score: "1-1",
    result: "D",
  },
  {
    id: 3,
    date: "Oct 22",
    homeTeam: "Orlando Pirates",
    awayTeam: "Cape Town City",
    score: "2-0",
    result: "W",
  },
  {
    id: 4,
    date: "Oct 15",
    homeTeam: "SuperSport",
    awayTeam: "Orlando Pirates",
    score: "0-2",
    result: "W",
  },
  {
    id: 5,
    date: "Oct 8",
    homeTeam: "Orlando Pirates",
    awayTeam: "AmaZulu",
    score: "1-2",
    result: "L",
  },
];

const topScorers = [
  {
    id: 1,
    name: "Monnapule Saleng",
    position: "Winger",
    goals: 12,
  },
  {
    id: 2,
    name: "Evidence Makgopa",
    position: "Striker",
    goals: 10,
  },
  {
    id: 3,
    name: "Patrick Maswanganyi",
    position: "Midfielder",
    goals: 8,
  },
];

const squadPositions = [
  {
    name: "Goalkeepers",
    icon: "lucide:shield-check",
    players: [
      {
        id: generateRandomUUID(),
        name: "Sipho Chaine",
        number: 1,
        nationality: "South Africa",
        age: 27,
      },
      {
        id: generateRandomUUID(),
        name: "Melusi Buthelezi",
        number: 16,
        nationality: "South Africa",
        age: 25,
      },
    ],
  },
  {
    name: "Defenders",
    icon: "lucide:shield",
    players: [
      {
        id: generateRandomUUID(),
        name: "Thabiso Monyane",
        number: 2,
        nationality: "South Africa",
        age: 24,
      },
      {
        id: generateRandomUUID(),
        name: "Tapelo Xoki",
        number: 3,
        nationality: "South Africa",
        age: 28,
      },
      {
        id: generateRandomUUID(),
        name: "Olisa Ndah",
        number: 4,
        nationality: "Nigeria",
        age: 26,
      },
      {
        id: generateRandomUUID(),
        name: "Innocent Maela",
        number: 5,
        nationality: "South Africa",
        age: 31,
      },
    ],
  },
  {
    name: "Midfielders",
    icon: "lucide:users",
    players: [
      {
        id: generateRandomUUID(),
        name: "Miguel Timm",
        number: 6,
        nationality: "South Africa",
        age: 29,
      },
      {
        id: generateRandomUUID(),
        name: "Makhehlene Makhaula",
        number: 8,
        nationality: "South Africa",
        age: 33,
      },
      {
        id: generateRandomUUID(),
        name: "Patrick Maswanganyi",
        number: 10,
        nationality: "South Africa",
        age: 26,
      },
      {
        id: generateRandomUUID(),
        name: "Relebohile Mofokeng",
        number: 7,
        nationality: "South Africa",
        age: 20,
      },
    ],
  },
  {
    name: "Forwards",
    icon: "lucide:zap",
    players: [
      {
        id: generateRandomUUID(),
        name: "Monnapule Saleng",
        number: 11,
        nationality: "South Africa",
        age: 25,
      },
      {
        id: generateRandomUUID(),
        name: "Evidence Makgopa",
        number: 9,
        nationality: "South Africa",
        age: 24,
      },
      {
        id: generateRandomUUID(),
        name: "Tshegofatso Mabasa",
        number: 20,
        nationality: "South Africa",
        age: 27,
      },
    ],
  },
];

const attackingStats = [
  { label: "Goals Scored", value: 38, percentage: 85 },
  { label: "Shots per Game", value: "16.2", percentage: 75 },
  { label: "Shots on Target", value: "58%", percentage: 70 },
  { label: "Passing Accuracy", value: "84%", percentage: 84 },
];

const defensiveStats = [
  { label: "Goals Conceded", value: 16, percentage: 35 },
  { label: "Clean Sheets", value: 9, percentage: 65 },
  { label: "Tackles Won", value: "68%", percentage: 68 },
  { label: "Interceptions", value: "12.4", percentage: 78 },
];

const leagueComparison = [
  { label: "Goals Scored", rank: 2, percentage: 90 },
  { label: "Possession", rank: 3, percentage: 85 },
  { label: "Pass Accuracy", rank: 2, percentage: 88 },
  { label: "Shots on Target", rank: 1, percentage: 95 },
  { label: "Clean Sheets", rank: 2, percentage: 90 },
];

const upcomingFixtures = [
  {
    id: 1,
    homeTeam: "Orlando Pirates",
    awayTeam: "Stellenbosch FC",
    competition: "KPL",
    date: "Nov 15, 2025",
    time: "15:00",
    venue: "Orlando Stadium",
  },
  {
    id: 2,
    homeTeam: "AmaZulu",
    awayTeam: "Orlando Pirates",
    competition: "KPL",
    date: "Nov 22, 2025",
    time: "19:30",
    venue: "Moses Mabhida Stadium",
  },
  {
    id: 3,
    homeTeam: "Orlando Pirates",
    awayTeam: "Golden Arrows",
    competition: "Nedbank Cup",
    date: "Nov 29, 2025",
    time: "15:00",
    venue: "Orlando Stadium",
  },
];

const honours = [
  {
    name: "League Titles",
    trophies: [
      {
        id: 1,
        name: "PSL Championship",
        years: ["2012", "2011", "2003", "2001", "1994"],
      },
    ],
  },
  {
    name: "Cup Competitions",
    trophies: [
      {
        id: 2,
        name: "Nedbank Cup",
        years: ["2014", "2011", "1996", "1994"],
      },
      {
        id: 3,
        name: "MTN8",
        years: ["2020", "2011", "2010", "2005"],
      },
    ],
  },
  {
    name: "International",
    trophies: [
      {
        id: 4,
        name: "CAF Champions League",
        years: ["1995"],
      },
      {
        id: 5,
        name: "CAF Confederation Cup",
        years: ["2015"],
      },
    ],
  },
];
</script>