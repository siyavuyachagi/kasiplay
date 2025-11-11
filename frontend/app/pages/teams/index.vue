<template>
  <div class="max-w-7xl mx-auto px-4 py-6">
    <!-- Page Header -->
    <div class="mb-6">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Teams</h1>
      <p class="text-gray-600 dark:text-gray-400">
        Explore all registered teams and clubs
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
            placeholder="Search teams..."
            class="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 placeholder-gray-400" />
        </div>

        <select
          v-model="selectedLeague"
          class="px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500">
          <option value="all">All Leagues</option>
          <option value="kpl">Kasi Premier League</option>
          <option value="division2">Division 2</option>
          <option value="youth">Youth League</option>
        </select>

        <select
          v-model="selectedRegion"
          class="px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500">
          <option value="all">All Regions</option>
          <option value="gauteng">Gauteng</option>
          <option value="western-cape">Western Cape</option>
          <option value="kwazulu-natal">KwaZulu-Natal</option>
        </select>
      </div>
    </div>

    <!-- Teams Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="team in teams"
        :key="team.id"
        class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
        <!-- Team Header with Gradient -->
        <div class="h-32 relative overflow-hidden" :class="team.gradient">
          <div class="absolute inset-0 bg-black/20"></div>
          <div class="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <div class="w-20 h-20 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center shadow-lg">
              <icon name="lucide:shield" size="40" class="text-gray-400" />
            </div>
            <div v-if="team.verified" class="bg-white/90 dark:bg-gray-800/90 rounded-full p-1">
              <icon name="lucide:badge-check" size="20" class="text-blue-500" />
            </div>
          </div>
        </div>

        <!-- Team Info -->
        <div class="p-6">
          <div class="flex items-start justify-between mb-3">
            <div class="flex-1">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 transition-colors">
                {{ team.name }}
              </h3>
              <p class="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                <icon name="lucide:map-pin" size="14" class="mr-1" />
                {{ team.location }}
              </p>
            </div>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-3 mb-4 py-3 border-y border-gray-200 dark:border-gray-700">
            <div class="text-center">
              <div class="text-2xl font-bold text-gray-900 dark:text-white">{{ team.players }}</div>
              <div class="text-xs text-gray-500 dark:text-gray-400">Players</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-gray-900 dark:text-white">{{ team.wins }}</div>
              <div class="text-xs text-gray-500 dark:text-gray-400">Wins</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-gray-900 dark:text-white">{{ team.trophies }}</div>
              <div class="text-xs text-gray-500 dark:text-gray-400">Trophies</div>
            </div>
          </div>

          <!-- League & Actions -->
          <div class="flex items-center justify-between">
            <span class="px-3 py-1 text-xs font-medium rounded-full" :class="team.leagueColor">
              {{ team.league }}
            </span>
            <div class="flex items-center space-x-2">
              <button class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <icon name="lucide:heart" size="18" class="text-gray-400 hover:text-red-500" />
              </button>
              <button class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <icon name="lucide:share-2" size="18" class="text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Load More -->
    <div class="flex justify-center mt-8">
      <button class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
        Load More Teams
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default-2-col-left'
})
const searchQuery = ref('')
const selectedLeague = ref('all')
const selectedRegion = ref('all')

const teams = ref([
  {
    id: 1,
    name: 'Orlando Pirates',
    location: 'Johannesburg, GP',
    players: 28,
    wins: 15,
    trophies: 12,
    league: 'KPL',
    leagueColor: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
    gradient: 'bg-gradient-to-br from-gray-800 to-black',
    verified: true,
  },
  {
    id: 2,
    name: 'Kaizer Chiefs',
    location: 'Johannesburg, GP',
    players: 30,
    wins: 18,
    trophies: 15,
    league: 'KPL',
    leagueColor: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
    gradient: 'bg-gradient-to-br from-yellow-600 to-yellow-800',
    verified: true,
  },
  {
    id: 3,
    name: 'Mamelodi Sundowns',
    location: 'Pretoria, GP',
    players: 32,
    wins: 22,
    trophies: 18,
    league: 'KPL',
    leagueColor: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
    gradient: 'bg-gradient-to-br from-yellow-400 to-blue-600',
    verified: true,
  },
  {
    id: 4,
    name: 'AmaZulu FC',
    location: 'Durban, KZN',
    players: 26,
    wins: 12,
    trophies: 5,
    league: 'KPL',
    leagueColor: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
    gradient: 'bg-gradient-to-br from-green-600 to-green-800',
    verified: true,
  },
  {
    id: 5,
    name: 'SuperSport United',
    location: 'Pretoria, GP',
    players: 27,
    wins: 14,
    trophies: 8,
    league: 'KPL',
    leagueColor: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
    gradient: 'bg-gradient-to-br from-blue-600 to-blue-800',
    verified: true,
  },
  {
    id: 6,
    name: 'Cape Town City',
    location: 'Cape Town, WC',
    players: 25,
    wins: 11,
    trophies: 3,
    league: 'KPL',
    leagueColor: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
    gradient: 'bg-gradient-to-br from-sky-500 to-sky-700',
    verified: false,
  },
])
</script>