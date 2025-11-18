<template>
  <div
    class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300">
    <button
      @click="isCollapsed = !isCollapsed"
      class="w-full p-3 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
      <div class="flex items-center space-x-2">
        <icon name="lucide:trophy" size="16" class="text-purple-500" />
        <h3 class="font-semibold text-sm text-gray-900 dark:text-white">
          League Standings
        </h3>
      </div>
      <icon
        :name="isCollapsed ? 'lucide:chevron-up' : 'lucide:chevron-down'"
        size="16"
        class="text-gray-500 transition-transform" />
    </button>
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="max-h-0 opacity-0"
      enter-to-class="max-h-96 opacity-100"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="max-h-96 opacity-100"
      leave-to-class="max-h-0 opacity-0">
      <div v-show="!isCollapsed" class="p-2 overflow-hidden">
        <div
          v-for="(team, index) in leagueStandings"
          :key="team.id"
          class="flex items-center space-x-2 px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors cursor-pointer">
          <div
            class="w-5 text-xs font-bold text-gray-500 dark:text-gray-400 text-center shrink-0">
            {{ index + 1 }}
          </div>
          <div
            class="w-6 h-6 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center shrink-0">
            <icon name="lucide:shield" size="12" class="text-white" />
          </div>
          <span
            class="flex-1 text-xs font-medium text-gray-900 dark:text-white truncate"
            >{{ team.name }}</span
          >
          <span
            class="text-xs font-bold text-gray-900 dark:text-white shrink-0"
            >{{ team.points }}</span
          >
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
const isCollapsed = ref(false);

interface LeagueTeam {
  id: number;
  name: string;
  points: number;
}

const leagueStandings: LeagueTeam[] = [
  { id: 1, name: "Ajax Cape Town", points: 45 },
  { id: 2, name: "Celtic FC", points: 42 },
  { id: 3, name: "Pretoria United", points: 38 },
  { id: 4, name: "Durban City", points: 35 },
  { id: 5, name: "Alexandra FC", points: 32 },
];
</script>
