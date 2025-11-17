<template>
  <div class="max-w-7xl mx-auto space-y-6">
    <!-- Match Header -->
    <div class="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-6 text-white shadow-sm">
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center space-x-2">
          <span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold">
            KPL • Matchday 12
          </span>
          <span class="px-3 py-1 bg-green-500 rounded-full text-xs font-bold">
            FULL TIME
          </span>
        </div>
        <span class="text-sm opacity-90">FNB Stadium • November 1, 2025</span>
      </div>

      <!-- Score Display -->
      <div class="flex items-center justify-between">
        <!-- Home Team -->
        <div class="text-center flex-1">
          <div class="w-20 h-20 mx-auto bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3">
            <icon name="lucide:shield" size="40" class="text-white" />
          </div>
          <h2 class="text-2xl font-bold mb-1">Orlando Pirates</h2>
          <p class="text-sm opacity-75">Home</p>
        </div>

        <!-- Score -->
        <div class="text-center flex-1">
          <div class="text-6xl font-bold mb-2">3 - 1</div>
          <p class="text-sm opacity-90">Full Time</p>
        </div>

        <!-- Away Team -->
        <div class="text-center flex-1">
          <div class="w-20 h-20 mx-auto bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3">
            <icon name="lucide:shield" size="40" class="text-white" />
          </div>
          <h2 class="text-2xl font-bold mb-1">Kaizer Chiefs</h2>
          <p class="text-sm opacity-75">Away</p>
        </div>
      </div>

      <!-- Match Info -->
      <div class="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/20">
        <div class="text-center">
          <icon name="lucide:calendar" size="20" class="mx-auto mb-1 opacity-75" />
          <p class="text-xs opacity-75">Date</p>
          <p class="font-semibold">Nov 1, 2025</p>
        </div>
        <div class="text-center">
          <icon name="lucide:users" size="20" class="mx-auto mb-1 opacity-75" />
          <p class="text-xs opacity-75">Attendance</p>
          <p class="font-semibold">42,000</p>
        </div>
        <div class="text-center">
          <icon name="lucide:whistle" size="20" class="mx-auto mb-1 opacity-75" />
          <p class="text-xs opacity-75">Referee</p>
          <p class="font-semibold">Victor Gomes</p>
        </div>
      </div>
    </div>

    <!-- Tabs -->
    <div class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
      <div class="flex border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
        <button class="px-6 py-3 font-medium text-sm whitespace-nowrap text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400">
          Overview
        </button>
        <button class="px-6 py-3 font-medium text-sm whitespace-nowrap text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
          Lineups
        </button>
        <button class="px-6 py-3 font-medium text-sm whitespace-nowrap text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
          Statistics
        </button>
        <button class="px-6 py-3 font-medium text-sm whitespace-nowrap text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
          Head to Head
        </button>
      </div>

      <!-- Tab Content -->
      <div class="p-6 space-y-6">
        <!-- Match Statistics -->
        <div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">Match Statistics</h3>
          <div class="space-y-4">
            <!-- Stat Row -->
            <div>
              <div class="flex items-center justify-between text-sm mb-2">
                <span class="font-medium text-gray-900 dark:text-white">65</span>
                <span class="text-gray-500 dark:text-gray-400">Possession</span>
                <span class="font-medium text-gray-900 dark:text-white">35</span>
              </div>
              <div class="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div class="absolute left-0 h-full bg-blue-600 rounded-full" style="width: 65%"></div>
                <div class="absolute right-0 h-full bg-purple-600 rounded-full" style="width: 35%"></div>
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between text-sm mb-2">
                <span class="font-medium text-gray-900 dark:text-white">18</span>
                <span class="text-gray-500 dark:text-gray-400">Shots</span>
                <span class="font-medium text-gray-900 dark:text-white">9</span>
              </div>
              <div class="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div class="absolute left-0 h-full bg-blue-600 rounded-full" style="width: 67%"></div>
                <div class="absolute right-0 h-full bg-purple-600 rounded-full" style="width: 33%"></div>
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between text-sm mb-2">
                <span class="font-medium text-gray-900 dark:text-white">8</span>
                <span class="text-gray-500 dark:text-gray-400">Shots on Target</span>
                <span class="font-medium text-gray-900 dark:text-white">4</span>
              </div>
              <div class="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div class="absolute left-0 h-full bg-blue-600 rounded-full" style="width: 67%"></div>
                <div class="absolute right-0 h-full bg-purple-600 rounded-full" style="width: 33%"></div>
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between text-sm mb-2">
                <span class="font-medium text-gray-900 dark:text-white">7</span>
                <span class="text-gray-500 dark:text-gray-400">Corners</span>
                <span class="font-medium text-gray-900 dark:text-white">3</span>
              </div>
              <div class="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div class="absolute left-0 h-full bg-blue-600 rounded-full" style="width: 70%"></div>
                <div class="absolute right-0 h-full bg-purple-600 rounded-full" style="width: 30%"></div>
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between text-sm mb-2">
                <span class="font-medium text-gray-900 dark:text-white">12</span>
                <span class="text-gray-500 dark:text-gray-400">Fouls</span>
                <span class="font-medium text-gray-900 dark:text-white">16</span>
              </div>
              <div class="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div class="absolute left-0 h-full bg-blue-600 rounded-full" style="width: 43%"></div>
                <div class="absolute right-0 h-full bg-purple-600 rounded-full" style="width: 57%"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Key Events -->
        <div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">Key Events</h3>
          <div class="space-y-3">
            <!-- Event 1 -->
            <div class="flex items-start space-x-3 bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
              <div class="w-12 text-center">
                <span class="text-sm font-bold text-gray-900 dark:text-white">23'</span>
              </div>
              <div class="flex-shrink-0">
                <div class="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                  <icon name="lucide:circle-dot" size="16" class="text-green-600 dark:text-green-400" />
                </div>
              </div>
              <div class="flex-1">
                <p class="font-medium text-gray-900 dark:text-white">Patrick Maswanganyi</p>
                <p class="text-sm text-gray-500 dark:text-gray-400">Goal! Assisted by Thabiso Monyane</p>
                <span class="text-xs text-gray-400 dark:text-gray-500">Orlando Pirates</span>
              </div>
            </div>

            <!-- Event 2 -->
            <div class="flex items-start space-x-3 bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
              <div class="w-12 text-center">
                <span class="text-sm font-bold text-gray-900 dark:text-white">38'</span>
              </div>
              <div class="flex-shrink-0">
                <div class="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                  <icon name="lucide:circle-dot" size="16" class="text-green-600 dark:text-green-400" />
                </div>
              </div>
              <div class="flex-1">
                <p class="font-medium text-gray-900 dark:text-white">Monnapule Saleng</p>
                <p class="text-sm text-gray-500 dark:text-gray-400">Goal! Solo effort</p>
                <span class="text-xs text-gray-400 dark:text-gray-500">Orlando Pirates</span>
              </div>
            </div>

            <!-- Event 3 -->
            <div class="flex items-start space-x-3 bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
              <div class="w-12 text-center">
                <span class="text-sm font-bold text-gray-900 dark:text-white">45'</span>
              </div>
              <div class="flex-shrink-0">
                <div class="w-8 h-8 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center">
                  <icon name="lucide:square" size="16" class="text-yellow-600 dark:text-yellow-400" />
                </div>
              </div>
              <div class="flex-1">
                <p class="font-medium text-gray-900 dark:text-white">Yusuf Maart</p>
                <p class="text-sm text-gray-500 dark:text-gray-400">Yellow card for tactical foul</p>
                <span class="text-xs text-gray-400 dark:text-gray-500">Kaizer Chiefs</span>
              </div>
            </div>

            <!-- Event 4 -->
            <div class="flex items-start space-x-3 bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
              <div class="w-12 text-center">
                <span class="text-sm font-bold text-gray-900 dark:text-white">56'</span>
              </div>
              <div class="flex-shrink-0">
                <div class="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                  <icon name="lucide:circle-dot" size="16" class="text-green-600 dark:text-green-400" />
                </div>
              </div>
              <div class="flex-1">
                <p class="font-medium text-gray-900 dark:text-white">Ashley Du Preez</p>
                <p class="text-sm text-gray-500 dark:text-gray-400">Goal! Assisted by Edson Castillo</p>
                <span class="text-xs text-gray-400 dark:text-gray-500">Kaizer Chiefs</span>
              </div>
            </div>

            <!-- Event 5 -->
            <div class="flex items-start space-x-3 bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
              <div class="w-12 text-center">
                <span class="text-sm font-bold text-gray-900 dark:text-white">78'</span>
              </div>
              <div class="flex-shrink-0">
                <div class="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                  <icon name="lucide:circle-dot" size="16" class="text-green-600 dark:text-green-400" />
                </div>
              </div>
              <div class="flex-1">
                <p class="font-medium text-gray-900 dark:text-white">Evidence Makgopa</p>
                <p class="text-sm text-gray-500 dark:text-gray-400">Goal! Header from corner</p>
                <span class="text-xs text-gray-400 dark:text-gray-500">Orlando Pirates</span>
              </div>
            </div>

            <!-- Event 6 -->
            <div class="flex items-start space-x-3 bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
              <div class="w-12 text-center">
                <span class="text-sm font-bold text-gray-900 dark:text-white">82'</span>
              </div>
              <div class="flex-shrink-0">
                <div class="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center">
                  <icon name="lucide:square" size="16" class="text-red-600 dark:text-red-400" />
                </div>
              </div>
              <div class="flex-1">
                <p class="font-medium text-gray-900 dark:text-white">Edmilson Dove</p>
                <p class="text-sm text-gray-500 dark:text-gray-400">Red card - Second yellow</p>
                <span class="text-xs text-gray-400 dark:text-gray-500">Kaizer Chiefs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
</script>