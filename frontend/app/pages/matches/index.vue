<template>
  <div class="max-w-7xl mx-auto px-4 py-6">
    <!-- Page Header -->
    <div class="mb-6">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
        Matches
      </h1>
      <p class="text-gray-600 dark:text-gray-400">
        Follow all the latest fixtures and results
      </p>
    </div>

    <!-- Filters -->
    <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 mb-6">
      <div class="flex flex-wrap gap-4">
        <select
          v-model="selectedStatus"
          class="px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500">
          <option value="all">All Matches</option>
          <option value="live">Live</option>
          <option value="upcoming">Upcoming</option>
          <option value="completed">Completed</option>
        </select>

        <select
          v-model="selectedCompetition"
          class="px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500">
          <option value="all">All Competitions</option>
          <option value="kpl">Kasi Premier League</option>
          <option value="cup">Nedbank Cup</option>
          <option value="mtn8">MTN8</option>
        </select>

        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search teams..."
          class="flex-1 min-w-[200px] px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 placeholder-gray-400" />
      </div>
    </div>

    <!-- Live Matches -->
    <div v-if="liveMatches.length > 0" class="mb-8">
      <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
        <span class="relative flex h-3 w-3 mr-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
        Live Now
      </h2>
      <div class="grid gap-4">
        <div
          v-for="match in liveMatches"
          :key="match.id"
          class="bg-linear-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg border-2 border-red-500 dark:border-red-400 p-6">
          <div class="flex items-center justify-between mb-4">
            <span class="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
              LIVE • {{ match.minute }}'
            </span>
            <span class="text-sm font-medium text-gray-600 dark:text-gray-400">
              {{ match.competition }}
            </span>
          </div>
          
          <div class="grid grid-cols-3 gap-4 items-center">
            <div class="text-center">
              <div class="w-16 h-16 mx-auto bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center mb-2">
                <icon name="lucide:shield" size="32" class="text-gray-400" />
              </div>
              <h3 class="font-bold text-gray-900 dark:text-white">{{ match.homeTeam }}</h3>
            </div>
            
            <div class="text-center">
              <div class="text-4xl font-bold text-gray-900 dark:text-white mb-1">
                {{ match.homeScore }} - {{ match.awayScore }}
              </div>
              <button class="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-lg transition-colors">
                Watch Live
              </button>
            </div>
            
            <div class="text-center">
              <div class="w-16 h-16 mx-auto bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center mb-2">
                <icon name="lucide:shield" size="32" class="text-gray-400" />
              </div>
              <h3 class="font-bold text-gray-900 dark:text-white">{{ match.awayTeam }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Upcoming Matches -->
    <div class="mb-8">
      <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Upcoming</h2>
      <div class="space-y-4">
        <div
          v-for="match in upcomingMatches"
          :key="match.id"
          class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow">
          <div class="flex items-center justify-between mb-4">
            <span class="text-sm font-medium text-blue-600 dark:text-blue-400">
              {{ match.competition }}
            </span>
            <span class="text-sm text-gray-500 dark:text-gray-400">
              {{ match.date }} • {{ match.time }}
            </span>
          </div>
          
          <div class="grid grid-cols-3 gap-4 items-center">
            <div class="text-center">
              <div class="w-12 h-12 mx-auto bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-2">
                <icon name="lucide:shield" size="24" class="text-gray-400" />
              </div>
              <h3 class="font-semibold text-gray-900 dark:text-white text-sm">{{ match.homeTeam }}</h3>
            </div>
            
            <div class="text-center">
              <p class="text-2xl font-bold text-gray-400 dark:text-gray-500">VS</p>
            </div>
            
            <div class="text-center">
              <div class="w-12 h-12 mx-auto bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-2">
                <icon name="lucide:shield" size="24" class="text-gray-400" />
              </div>
              <h3 class="font-semibold text-gray-900 dark:text-white text-sm">{{ match.awayTeam }}</h3>
            </div>
          </div>
          
          <div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center text-sm text-gray-500 dark:text-gray-400">
            <icon name="lucide:map-pin" size="16" class="mr-1" />
            {{ match.venue }}
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Results -->
    <div>
      <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Recent Results</h2>
      <div class="space-y-4">
        <div
          v-for="match in recentMatches"
          :key="match.id"
          class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <div class="flex items-center justify-between mb-4">
            <span class="text-sm font-medium text-purple-600 dark:text-purple-400">
              {{ match.competition }}
            </span>
            <span class="text-sm text-gray-500 dark:text-gray-400">
              {{ match.date }}
            </span>
          </div>
          
          <div class="grid grid-cols-3 gap-4 items-center">
            <div class="text-center">
              <div class="w-12 h-12 mx-auto bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-2">
                <icon name="lucide:shield" size="24" class="text-gray-400" />
              </div>
              <h3 class="font-semibold text-gray-900 dark:text-white text-sm">{{ match.homeTeam }}</h3>
            </div>
            
            <div class="text-center">
              <div class="flex items-center justify-center space-x-3">
                <span class="text-2xl font-bold" :class="match.homeScore > match.awayScore ? 'text-green-600' : 'text-gray-900 dark:text-white'">
                  {{ match.homeScore }}
                </span>
                <span class="text-gray-400">-</span>
                <span class="text-2xl font-bold" :class="match.awayScore > match.homeScore ? 'text-green-600' : 'text-gray-900 dark:text-white'">
                  {{ match.awayScore }}
                </span>
              </div>
            </div>
            
            <div class="text-center">
              <div class="w-12 h-12 mx-auto bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-2">
                <icon name="lucide:shield" size="24" class="text-gray-400" />
              </div>
              <h3 class="font-semibold text-gray-900 dark:text-white text-sm">{{ match.awayTeam }}</h3>
            </div>
          </div>
          
          <div class="mt-4 flex items-center justify-between">
            <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <icon name="lucide:map-pin" size="16" class="mr-1" />
              {{ match.venue }}
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
  layout: 'default-2-col-left'
})

const selectedStatus = ref('all')
const selectedCompetition = ref('all')
const searchQuery = ref('')

const liveMatches = ref([
  {
    id: 1,
    homeTeam: 'Orlando Pirates',
    awayTeam: 'Kaizer Chiefs',
    homeScore: 2,
    awayScore: 1,
    minute: '67',
    competition: 'Kasi Premier League',
  }
])

const upcomingMatches = ref([
  {
    id: 2,
    homeTeam: 'Mamelodi Sundowns',
    awayTeam: 'SuperSport United',
    date: 'Nov 3, 2025',
    time: '15:00',
    venue: 'Loftus Versfeld Stadium',
    competition: 'Kasi Premier League',
  },
  {
    id: 3,
    homeTeam: 'AmaZulu FC',
    awayTeam: 'Golden Arrows',
    date: 'Nov 4, 2025',
    time: '19:30',
    venue: 'Moses Mabhida Stadium',
    competition: 'Nedbank Cup',
  },
  {
    id: 4,
    homeTeam: 'Cape Town City',
    awayTeam: 'Stellenbosch FC',
    date: 'Nov 5, 2025',
    time: '15:00',
    venue: 'Cape Town Stadium',
    competition: 'Kasi Premier League',
  }
])

const recentMatches = ref([
  {
    id: 5,
    homeTeam: 'Moroka Swallows',
    awayTeam: 'Chippa United',
    homeScore: 3,
    awayScore: 1,
    date: 'Oct 30, 2025',
    venue: 'Dobsonville Stadium',
    competition: 'Kasi Premier League',
  },
  {
    id: 6,
    homeTeam: 'TS Galaxy',
    awayTeam: 'Maritzburg United',
    homeScore: 1,
    awayScore: 1,
    date: 'Oct 29, 2025',
    venue: 'Mbombela Stadium',
    competition: 'Nedbank Cup',
  }
])
</script>