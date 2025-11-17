<template>
  <div
    class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300">
    <button
      @click="isCollapsed = !isCollapsed"
      class="w-full p-3 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
      <div class="flex items-center space-x-2">
        <icon name="lucide:user-plus" size="16" class="text-blue-500" />
        <h3 class="font-semibold text-sm text-gray-900 dark:text-white">
          Who to Follow
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
          v-for="suggestion in followSuggestions"
          :key="suggestion.id"
          class="flex items-center justify-between p-2.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
          <div class="flex items-center space-x-2 flex-1 min-w-0">
            <div
              :class="[
                'w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-semibold shrink-0',
                suggestion.gradient,
              ]">
              {{ suggestion.initials }}
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex items-center space-x-1">
                <span
                  class="text-xs font-semibold text-gray-900 dark:text-white truncate"
                  >{{ suggestion.name }}</span
                >
                <icon
                  v-if="suggestion.verified"
                  name="lucide:badge-check"
                  size="12"
                  class="text-blue-500 shrink-0" />
              </div>
              <span :class="['text-xs', suggestion.typeColor]">{{
                suggestion.type
              }}</span>
            </div>
          </div>
          <button
            class="px-3 py-1 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shrink-0">
            Follow
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
const isCollapsed = ref(false);

interface FollowSuggestion {
  id: number;
  name: string;
  type: string;
  typeColor: string;
  initials: string;
  gradient: string;
  verified: boolean;
}

const followSuggestions: FollowSuggestion[] = [
  {
    id: 1,
    name: "Ajax Cape Town",
    type: "Team",
    typeColor: "text-blue-600 dark:text-blue-400",
    initials: "ACT",
    gradient: "bg-gradient-to-br from-blue-500 to-blue-700",
    verified: true,
  },
  {
    id: 2,
    name: "Thabo Mkhize",
    type: "Player",
    typeColor: "text-green-600 dark:text-green-400",
    initials: "TM",
    gradient: "bg-gradient-to-br from-green-500 to-green-700",
    verified: true,
  },
  {
    id: 3,
    name: "KPL Official",
    type: "League",
    typeColor: "text-purple-600 dark:text-purple-400",
    initials: "KPL",
    gradient: "bg-gradient-to-br from-purple-500 to-purple-700",
    verified: true,
  },
];
</script>
