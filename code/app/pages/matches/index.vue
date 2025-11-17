<template>
  <div class="lg:grid lg:grid-cols-12 lg:gap-6">
    <!-- Left Sidebar (30%) -->
    <aside class="hidden lg:block lg:col-span-3 xl:col-span-4 space-y-4 sticky top-20 h-fit">
      <!-- Navigation Widget -->
      <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <div class="p-3 bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700">
          <h3 class="font-semibold text-sm text-gray-900 dark:text-white">Navigation</h3>
        </div>
        <nav class="p-3 space-y-1">
          <a href="#" class="flex items-center space-x-3 px-3 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <icon name="lucide:home" size="20" />
            <span class="font-medium text-sm">Home</span>
          </a>
          <a href="#" class="flex items-center space-x-3 px-3 py-2 text-gray-900 dark:text-white bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <icon name="lucide:calendar" size="20" />
            <span class="font-medium text-sm">Matches</span>
          </a>
          <a href="#" class="flex items-center space-x-3 px-3 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <icon name="lucide:users" size="20" />
            <span class="font-medium text-sm">Teams</span>
          </a>
        </nav>
      </div>

      <!-- Today's Fixtures -->
      <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <div class="p-3 bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700">
          <h3 class="font-semibold text-sm text-gray-900 dark:text-white">Today's Fixtures</h3>
        </div>
        <div class="p-3 space-y-3">
          <div class="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-medium text-gray-900 dark:text-white">Pirates</span>
              <span class="text-xs text-gray-500 dark:text-gray-400">vs</span>
              <span class="text-xs font-medium text-gray-900 dark:text-white">Chiefs</span>
            </div>
            <div class="text-center">
              <div class="text-sm font-bold text-blue-600 dark:text-blue-400">15:00</div>
              <div class="text-xs text-gray-500 dark:text-gray-400">FNB Stadium</div>
            </div>
          </div>
          <div class="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-medium text-gray-900 dark:text-white">Sundowns</span>
              <span class="text-xs text-gray-500 dark:text-gray-400">vs</span>
              <span class="text-xs font-medium text-gray-900 dark:text-white">SuperSport</span>
            </div>
            <div class="text-center">
              <div class="text-sm font-bold text-blue-600 dark:text-blue-400">19:30</div>
              <div class="text-xs text-gray-500 dark:text-gray-400">Loftus Versfeld</div>
            </div>
          </div>
        </div>
      </div>
    </aside>

    <!-- Main Content (70%) -->
    <main class="lg:col-span-9 xl:col-span-8 space-y-4">
      <!-- Page Header -->
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Matches</h1>
        <p class="text-gray-600 dark:text-gray-400">Follow all the latest fixtures and results</p>
      </div>

      <!-- Filters -->
      <div class="flex flex-wrap gap-4">
        <select class="px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500">
          <option>All Matches</option>
          <option>Live</option>
          <option>Upcoming</option>
          <option>Completed</option>
        </select>
        <select class="px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500">
          <option>All Competitions</option>
          <option>KPL</option>
          <option>Cup</option>
        </select>
        <input 
          type="text" 
          placeholder="Search matches..."
          class="flex-1 min-w-[200px] px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <!-- Live Matches Section -->
      <div>
        <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <span class="relative flex h-3 w-3 mr-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
          Live Now
        </h2>
        <div class="grid md:grid-cols-2 gap-4">
          <!-- Live Match Card -->
          <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:shadow-lg transition-shadow cursor-pointer">
            <div class="flex items-center justify-between mb-3">
              <span class="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                LIVE • 67'
              </span>
              <span class="text-sm text-gray-500 dark:text-gray-400">KPL</span>
            </div>

            <div class="flex items-center justify-between">
              <div class="text-center flex-1">
                <div class="w-12 h-12 mx-auto bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-2">
                  <icon name="lucide:shield" size="24" class="text-gray-400" />
                </div>
                <p class="font-semibold text-gray-900 dark:text-white text-sm">Orlando Pirates</p>
              </div>

              <div class="text-center flex-1">
                <p class="text-2xl font-bold text-gray-900 dark:text-white">2 - 1</p>
                <button class="mt-2 px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-xs font-medium rounded-lg transition-colors">
                  Watch Live
                </button>
              </div>

              <div class="text-center flex-1">
                <div class="w-12 h-12 mx-auto bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-2">
                  <icon name="lucide:shield" size="24" class="text-gray-400" />
                </div>
                <p class="font-semibold text-gray-900 dark:text-white text-sm">Kaizer Chiefs</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Upcoming Matches -->
      <div>
        <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Upcoming Fixtures</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <!-- Match Card 1 -->
          <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:shadow-lg transition-shadow cursor-pointer">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-medium text-blue-600 dark:text-blue-400">KPL</span>
              <span class="text-xs text-gray-500 dark:text-gray-400">Nov 15 • 15:00</span>
            </div>

            <div class="flex items-center justify-between">
              <div class="text-center flex-1">
                <div class="w-10 h-10 mx-auto bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-2">
                  <icon name="lucide:shield" size="20" class="text-gray-400" />
                </div>
                <p class="font-semibold text-gray-900 dark:text-white text-sm">Sundowns</p>
              </div>

              <div class="text-center flex-1">
                <p class="text-gray-500 dark:text-gray-400 font-bold">VS</p>
              </div>

              <div class="text-center flex-1">
                <div class="w-10 h-10 mx-auto bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-2">
                  <icon name="lucide:shield" size="20" class="text-gray-400" />
                </div>
                <p class="font-semibold text-gray-900 dark:text-white text-sm">SuperSport</p>
              </div>
            </div>

            <div class="mt-2 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
              <div class="flex items-center">
                <icon name="lucide:map-pin" size="14" class="mr-1" />
                Loftus Versfeld
              </div>
              <a href="#" class="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                View Details
              </a>
            </div>
          </div>

          <!-- Match Card 2 -->
          <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:shadow-lg transition-shadow cursor-pointer">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-medium text-blue-600 dark:text-blue-400">Cup</span>
              <span class="text-xs text-gray-500 dark:text-gray-400">Nov 18 • 19:30</span>
            </div>

            <div class="flex items-center justify-between">
              <div class="text-center flex-1">
                <div class="w-10 h-10 mx-auto bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-2">
                  <icon name="lucide:shield" size="20" class="text-gray-400" />
                </div>
                <p class="font-semibold text-gray-900 dark:text-white text-sm">AmaZulu</p>
              </div>

              <div class="text-center flex-1">
                <p class="text-gray-500 dark:text-gray-400 font-bold">VS</p>
              </div>

              <div class="text-center flex-1">
                <div class="w-10 h-10 mx-auto bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-2">
                  <icon name="lucide:shield" size="20" class="text-gray-400" />
                </div>
                <p class="font-semibold text-gray-900 dark:text-white text-sm">Golden Arrows</p>
              </div>
            </div>

            <div class="mt-2 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
              <div class="flex items-center">
                <icon name="lucide:map-pin" size="14" class="mr-1" />
                Moses Mabhida
              </div>
              <a href="#" class="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Results -->
      <div>
        <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Recent Results</h2>
        <div class="space-y-3">
          <!-- Result Card -->
          <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-medium text-purple-600 dark:text-purple-400">KPL</span>
              <span class="text-xs text-gray-500 dark:text-gray-400">Nov 1, 2025</span>
            </div>
            <div class="flex items-center justify-between">
              <div class="text-center flex-1">
                <p class="font-semibold text-gray-900 dark:text-white">Orlando Pirates</p>
              </div>
              <div class="text-center flex-1">
                <div class="flex items-center justify-center space-x-3">
                  <span class="text-2xl font-bold text-green-600 dark:text-green-400">3</span>
                  <span class="text-gray-400">-</span>
                  <span class="text-2xl font-bold text-gray-900 dark:text-white">1</span>
                </div>
              </div>
              <div class="text-center flex-1">
                <p class="font-semibold text-gray-900 dark:text-white">Kaizer Chiefs</p>
              </div>
            </div>
            <div class="mt-2 flex items-center justify-between text-xs">
              <div class="text-gray-500 dark:text-gray-400 flex items-center">
                <icon name="lucide:map-pin" size="12" class="mr-1" />
                FNB Stadium
              </div>
              <a href="#" class="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Load More -->
      <button class="w-full py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
        Load More
      </button>
    </main>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
</script>