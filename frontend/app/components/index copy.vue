<template>
  <div class="dashboard">
    <!-- Dashboard View -->
    <div class="space-y-6">
      <!-- Stats Cards -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4 lg:p-6">
          <div class="flex items-center">
            <div
              class="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
            >
              <i class="fas fa-users text-lg lg:text-xl"></i>
            </div>
            <div class="ml-4">
              <p
                class="text-xs lg:text-sm font-medium text-gray-600 dark:text-gray-400"
              >
                Squad Size
              </p>
              <p
                class="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white"
              >
                {{ myTeam.players }}
              </p>
            </div>
          </div>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4 lg:p-6">
          <div class="flex items-center">
            <div
              class="p-3 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400"
            >
              <i class="fas fa-trophy text-lg lg:text-xl"></i>
            </div>
            <div class="ml-4">
              <p
                class="text-xs lg:text-sm font-medium text-gray-600 dark:text-gray-400"
              >
                Wins
              </p>
              <p
                class="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white"
              >
                {{ myTeam.wins }}
              </p>
            </div>
          </div>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4 lg:p-6">
          <div class="flex items-center">
            <div
              class="p-3 rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400"
            >
              <i class="fas fa-calendar text-lg lg:text-xl"></i>
            </div>
            <div class="ml-4">
              <p
                class="text-xs lg:text-sm font-medium text-gray-600 dark:text-gray-400"
              >
                Next Match
              </p>
              <p
                class="text-sm lg:text-base font-semibold text-gray-900 dark:text-white"
              >
                {{ nextMatch.days }}d
              </p>
            </div>
          </div>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4 lg:p-6">
          <div class="flex items-center">
            <div
              class="p-3 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400"
            >
              <i class="fas fa-chart-line text-lg lg:text-xl"></i>
            </div>
            <div class="ml-4">
              <p
                class="text-xs lg:text-sm font-medium text-gray-600 dark:text-gray-400"
              >
                Position
              </p>
              <p
                class="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white"
              >
                {{ myTeam.position }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Actions & Recent Activity -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Upcoming Matches -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
          <div class="px-6 py-4 border-b dark:border-gray-700">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Upcoming Matches
            </h3>
          </div>
          <div class="p-6">
            <div
              v-for="fixture in upcomingFixtures"
              :key="fixture.id"
              class="flex items-center justify-between py-3 border-b dark:border-gray-700 last:border-b-0"
            >
              <div class="flex items-center space-x-3">
                <div class="text-sm">
                  <p class="font-medium text-gray-900 dark:text-white">
                    {{ fixture.opponent }}
                  </p>
                  <p class="text-gray-500 dark:text-gray-400">
                    {{ fixture.date }} • {{ fixture.venue }}
                  </p>
                </div>
              </div>
              <div class="text-right">
                <span
                  :class="[
                    'text-xs px-2 py-1 rounded-full',
                    fixture.type === 'home'
                      ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                      : 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
                  ]"
                >
                  {{ fixture.type }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Actions -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
          <div class="px-6 py-4 border-b dark:border-gray-700">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Quick Actions
            </h3>
          </div>
          <div class="p-6 grid grid-cols-2 gap-4">
            <button
              class="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            >
              <i
                class="fas fa-plus-circle text-2xl text-blue-600 dark:text-blue-400 mb-2"
              ></i>
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300"
                >New Training</span
              >
            </button>
            <button
              class="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg hover:border-green-500 dark:hover:border-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
            >
              <i
                class="fas fa-clipboard-list text-2xl text-green-600 dark:text-green-400 mb-2"
              ></i>
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300"
                >Team Sheet</span
              >
            </button>
            <button
              class="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg hover:border-purple-500 dark:hover:border-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
            >
              <i
                class="fas fa-chart-bar text-2xl text-purple-600 dark:text-purple-400 mb-2"
              ></i>
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300"
                >Match Report</span
              >
            </button>
            <button
              class="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg hover:border-orange-500 dark:hover:border-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors"
            >
              <i
                class="fas fa-video text-2xl text-orange-600 dark:text-orange-400 mb-2"
              ></i>
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300"
                >Video Analysis</span
              >
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Squad View -->
    <div v-if="activeTab === 'squad'" class="space-y-6">
      <div
        class="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
      >
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
          Squad Management
        </h2>
        <button
          class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 w-fit"
        >
          <i class="fas fa-plus"></i>
          <span>Add Player</span>
        </button>
      </div>

      <!-- Players Grid - Responsive -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="player in mySquad"
          :key="player.id"
          class="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow p-4"
        >
          <div class="flex items-center space-x-4">
            <img :src="player.avatar" alt="" class="w-12 h-12 rounded-full" />
            <div class="flex-1 min-w-0">
              <h3 class="font-semibold text-gray-900 dark:text-white truncate">
                {{ player.name }}
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                {{ player.position }}
              </p>
              <div class="flex items-center space-x-2 mt-2">
                <span
                  class="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded"
                  >{{ player.age }}y</span
                >
                <span
                  :class="[
                    'text-xs px-2 py-1 rounded',
                    getPlayerStatusColor(player.status),
                  ]"
                >
                  {{ player.status }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Other views placeholders -->
    <div
      v-if="activeTab === 'fixtures'"
      class="text-center py-20 text-gray-500 dark:text-gray-400"
    >
      <i class="fas fa-calendar text-4xl mb-4"></i>
      <p class="text-xl">Fixtures management coming soon...</p>
    </div>

    <div
      v-if="activeTab === 'training'"
      class="text-center py-20 text-gray-500 dark:text-gray-400"
    >
      <i class="fas fa-dumbbell text-4xl mb-4"></i>
      <p class="text-xl">Training sessions coming soon...</p>
    </div>

    <div
      v-if="activeTab === 'tactics'"
      class="text-center py-20 text-gray-500 dark:text-gray-400"
    >
      <i class="fas fa-chalkboard-teacher text-4xl mb-4"></i>
      <p class="text-xl">Tactics board coming soon...</p>
    </div>

    <div
      v-if="activeTab === 'reports'"
      class="text-center py-20 text-gray-500 dark:text-gray-400"
    >
      <i class="fas fa-chart-line text-4xl mb-4"></i>
      <p class="text-xl">Match reports & analytics coming soon...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
// My Team Data (Coach's team)
const myTeam = ref({
  name: "Kaizer Chiefs",
  players: 28,
  wins: 15,
  draws: 6,
  losses: 3,
  points: 51,
  position: "2nd",
});

// My Squad (Coach's players)
const mySquad = ref([
  {
    id: 1,
    name: "Khama Billiat",
    age: 32,
    position: "Forward",
    goals: 12,
    status: "Active",
    avatar: "https://via.placeholder.com/48x48/4F46E5/FFFFFF?text=KB",
  },
  {
    id: 2,
    name: "Keagan Dolly",
    age: 30,
    position: "Midfielder",
    goals: 6,
    status: "Active",
    avatar: "https://via.placeholder.com/48x48/7C3AED/FFFFFF?text=KD",
  },
  {
    id: 3,
    name: "Itumeleng Khune",
    age: 36,
    position: "Goalkeeper",
    goals: 0,
    status: "Injured",
    avatar: "https://via.placeholder.com/48x48/059669/FFFFFF?text=IK",
  },
  {
    id: 4,
    name: "Yusuf Maart",
    age: 28,
    position: "Midfielder",
    goals: 3,
    status: "Active",
    avatar: "https://via.placeholder.com/48x48/DC2626/FFFFFF?text=YM",
  },
  {
    id: 5,
    name: "Ashley Du Preez",
    age: 26,
    position: "Forward",
    goals: 8,
    status: "Active",
    avatar: "https://via.placeholder.com/48x48/EA580C/FFFFFF?text=AD",
  },
  {
    id: 6,
    name: "Sifiso Hlanti",
    age: 33,
    position: "Defender",
    goals: 1,
    status: "Active",
    avatar: "https://via.placeholder.com/48x48/8B5CF6/FFFFFF?text=SH",
  },
]);

// Upcoming fixtures for coach's team
const upcomingFixtures = ref([
  {
    id: 1,
    opponent: "vs Orlando Pirates",
    date: "Sep 25, 15:00",
    venue: "FNB Stadium",
    type: "home",
  },
  {
    id: 2,
    opponent: "vs Mamelodi Sundowns",
    date: "Oct 2, 19:30",
    venue: "Loftus Stadium",
    type: "away",
  },
  {
    id: 3,
    opponent: "vs SuperSport United",
    date: "Oct 9, 15:00",
    venue: "FNB Stadium",
    type: "home",
  },
]);
</script>
