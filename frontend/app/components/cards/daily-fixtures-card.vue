<template>
  <div
    class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300">
    <button
      @click="isCollapsed = !isCollapsed"
      class="w-full p-3 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
      <div class="flex items-center space-x-2">
        <icon name="lucide:calendar" size="16" class="text-blue-600" />
        <h3 class="font-semibold text-sm text-gray-900 dark:text-white">
          Today's Fixtures
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
      enter-to-class="max-h-[600px] opacity-100"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="max-h-[600px] opacity-100"
      leave-to-class="max-h-0 opacity-0">
      <div v-show="!isCollapsed" class="overflow-hidden">
        <div
          v-for="fixture in todayFixtures"
          :key="fixture.id"
          class="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer border-b last:border-0 border-gray-200 dark:border-gray-700">
          <div
            class="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
            <span>{{ fixture.time }}</span>
            <span>{{ fixture.competition }}</span>
          </div>
          <div class="flex items-center justify-between text-sm">
            <span class="font-medium text-gray-900 dark:text-white">{{
              fixture.homeTeam
            }}</span>
            <span class="text-gray-500">vs</span>
            <span class="font-medium text-gray-900 dark:text-white">{{
              fixture.awayTeam
            }}</span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
const isCollapsed = ref(false);

const todayFixtures = [
  {
    id: 1,
    time: "15:00",
    competition: "KPL",
    homeTeam: "Ajax CT",
    awayTeam: "Celtic",
  },
  {
    id: 2,
    time: "17:00",
    competition: "Cup",
    homeTeam: "Pretoria",
    awayTeam: "Durban",
  },
  {
    id: 3,
    time: "19:00",
    competition: "KPL",
    homeTeam: "Alexandra",
    awayTeam: "Tembisa",
  },
];
</script>
