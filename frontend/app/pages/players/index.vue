<template>
  <div class="max-w-7xl mx-auto px-4 py-6">
    <!-- Page Header -->
    <div class="mb-6">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Players</h1>
      <p class="text-gray-600 dark:text-gray-400">
        Discover talented players from across the league
      </p>
    </div>

    <!-- Search & Filters -->
    <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 mb-6">
      <div class="flex flex-wrap gap-4">
        <div class="flex-1 min-w-[250px] relative">
          <icon name="lucide:search" size="20" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search players..."
            class="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 placeholder-gray-400" />
        </div>

        <select
          v-model="selectedPosition"
          class="px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500">
          <option value="all">All Positions</option>
          <option value="goalkeeper">Goalkeeper</option>
          <option value="defender">Defender</option>
          <option value="midfielder">Midfielder</option>
          <option value="forward">Forward</option>
        </select>

        <select
          v-model="selectedTeam"
          class="px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500">
          <option value="all">All Teams</option>
          <option value="pirates">Orlando Pirates</option>
          <option value="chiefs">Kaizer Chiefs</option>
          <option value="sundowns">Mamelodi Sundowns</option>
        </select>
      </div>
    </div>

    <!-- Players Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div
        v-for="player in players"
        :key="player.id"
        class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
        <!-- Player Image/Avatar -->
        <div class="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <icon name="lucide:user" size="64" class="text-white" />
            </div>
          </div>
          <!-- Jersey Number -->
          <div class="absolute top-4 right-4 w-12 h-12 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center shadow-lg">
            <span class="text-xl font-bold text-gray-900 dark:text-white">{{ player.number }}</span>
          </div>
          <!-- Status Badge -->
          <div class="absolute bottom-4 left-4">
            <span class="px-3 py-1 text-xs font-medium rounded-full" :class="player.statusColor">
              {{ player.status }}
            </span>
          </div>
        </div>

        <!-- Player Info -->
        <div class="p-4">
          <div class="mb-3">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 transition-colors">
              {{ player.name }}
            </h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">{{ player.team }}</p>
          </div>

          <!-- Position & Age -->
          <div class="flex items-center space-x-3 mb-4 text-sm">
            <div class="flex items-center space-x-1">
              <icon name="lucide:target" size="14" class="text-gray-400" />
              <span class="text-gray-600 dark:text-gray-400">{{ player.position }}</span>
            </div>
            <div class="flex items-center space-x-1">
              <icon name="lucide:cake" size="14" class="text-gray-400" />
              <span class="text-gray-600 dark:text-gray-400">{{ player.age }} yrs</span>
            </div>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-2 mb-4">
            <div class="text-center p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <div class="text-lg font-bold text-gray-900 dark:text-white">{{ player.goals }}</div>
              <div class="text-xs text-gray-500 dark:text-gray-400">Goals</div>
            </div>
            <div class="text-center p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <div class="text-lg font-bold text-gray-900 dark:text-white">{{ player.assists }}</div>
              <div class="text-xs text-gray-500 dark:text-gray-400">Assists</div>
            </div>
            <div class="text-center p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <div class="text-lg font-bold text-gray-900 dark:text-white">{{ player.matches }}</div>
              <div class="text-xs text-gray-500 dark:text-gray-400">Matches</div>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
            <div class="flex items-center space-x-1">
              <button class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <icon name="lucide:heart" size="16" class="text-gray-400 hover:text-red-500" />
              </button>
              <button class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <icon name="lucide:share-2" size="16" class="text-gray-400" />
              </button>
            </div>
            <button class="text-xs font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Load More -->
    <div class="flex justify-center mt-8">
      <button class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
        Load More Players
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default-2-col-left'
})
const searchQuery = ref('')
const selectedPosition = ref('all')
const selectedTeam = ref('all')

const players = ref([
  {
    id: 1,
    name: 'Thabo Mkhize',
    team: 'Orlando Pirates',
    number: 10,
    position: 'Midfielder',
    age: 24,
    goals: 12,
    assists: 8,
    matches: 28,
    status: 'Active',
    statusColor: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  },
  {
    id: 2,
    name: 'Sipho Ndlovu',
    team: 'Kaizer Chiefs',
    number: 9,
    position: 'Forward',
    age: 26,
    goals: 18,
    assists: 5,
    matches: 30,
    status: 'Active',
    statusColor: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  },
  {
    id: 3,
    name: 'Mandla Khumalo',
    team: 'Mamelodi Sundowns',
    number: 7,
    position: 'Winger',
    age: 22,
    goals: 10,
    assists: 12,
    matches: 26,
    status: 'Active',
    statusColor: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  },
  {
    id: 4,
    name: 'John Dlamini',
    team: 'SuperSport United',
    number: 5,
    position: 'Defender',
    age: 28,
    goals: 2,
    assists: 3,
    matches: 32,
    status: 'Injured',
    statusColor: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  },
  {
    id: 5,
    name: 'Peter Mokoena',
    team: 'AmaZulu FC',
    number: 1,
    position: 'Goalkeeper',
    age: 30,
    goals: 0,
    assists: 0,
    matches: 28,
    status: 'Active',
    statusColor: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  },
  {
    id: 6,
    name: 'David Zulu',
    team: 'Cape Town City',
    number: 11,
    position: 'Forward',
    age: 23,
    goals: 15,
    assists: 7,
    matches: 27,
    status: 'Active',
    statusColor: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  },
  {
    id: 7,
    name: 'James Nkosi',
    team: 'Orlando Pirates',
    number: 8,
    position: 'Midfielder',
    age: 25,
    goals: 7,
    assists: 11,
    matches: 29,
    status: 'Suspended',
    statusColor: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
  },
  {
    id: 8,
    name: 'Michael Sithole',
    team: 'Kaizer Chiefs',
    number: 4,
    position: 'Defender',
    age: 27,
    goals: 3,
    assists: 2,
    matches: 31,
    status: 'Active',
    statusColor: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  },
])
</script>