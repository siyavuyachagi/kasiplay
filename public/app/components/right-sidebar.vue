<template>
  <aside
    class="h-min rounded-lg"
    :class="[
      'lg:col-span-3',
      'fixed lg:static inset-y-0 right-0 z-30',
      'w-80 lg:w-auto',
      'bg-white dark:bg-gray-800 lg:bg-transparent',
      'border-l lg:border-0 border-gray-200 dark:border-gray-700',
      'transition-transform duration-300 lg:transition-none',
      layoutStore.isRightSidebarOpen
        ? 'translate-x-0'
        : 'translate-x-full lg:translate-x-0',
    ]">
    <div class="h-full scrollbar-hide">
      <div class="p-4 space-y-4">
        <!-- Close Button Mobile -->
        <div
          class="lg:hidden flex items-center justify-between pb-3 border-b border-gray-200 dark:border-gray-700">
          <h3 class="font-bold text-gray-900 dark:text-white">Updates</h3>
          <button
            @click="closeSidebar"
            class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <icon name="lucide:x" size="20" />
          </button>
        </div>

        <!-- League Table - Collapsible -->
        <div
          class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300">
          <button
            @click="sections.standings = !sections.standings"
            class="w-full p-3 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
            <div class="flex items-center space-x-2">
              <icon name="lucide:trophy" size="16" class="text-yellow-500" />
              <h3 class="font-semibold text-sm text-gray-900 dark:text-white">
                League Standings
              </h3>
            </div>
            <icon
              :name="
                sections.standings ? 'lucide:chevron-up' : 'lucide:chevron-down'
              "
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
            <div v-show="sections.standings" class="p-2 overflow-hidden">
              <div
                v-for="(team, index) in leagueStandings"
                :key="team.id"
                class="flex items-center space-x-2 px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors cursor-pointer">
                <div
                  class="w-5 text-xs font-bold text-gray-500 dark:text-gray-400 text-center flex-shrink-0">
                  {{ index + 1 }}
                </div>
                <div
                  class="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <icon name="lucide:shield" size="12" class="text-white" />
                </div>
                <span
                  class="flex-1 text-xs font-medium text-gray-900 dark:text-white truncate"
                  >{{ team.name }}</span
                >
                <span
                  class="text-xs font-bold text-gray-900 dark:text-white flex-shrink-0"
                  >{{ team.points }}</span
                >
              </div>
            </div>
          </transition>
        </div>

        <!-- Announcements - Collapsible -->
        <div
          class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300">
          <button
            @click="sections.announcements = !sections.announcements"
            class="w-full p-3 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
            <div class="flex items-center space-x-2">
              <icon name="lucide:megaphone" size="16" class="text-yellow-500" />
              <h3 class="font-semibold text-sm text-gray-900 dark:text-white">
                Announcements
              </h3>
            </div>
            <icon
              :name="
                sections.announcements
                  ? 'lucide:chevron-up'
                  : 'lucide:chevron-down'
              "
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
            <div v-show="sections.announcements" class="p-2 overflow-hidden">
              <div
                v-for="announcement in announcements"
                :key="announcement.id"
                class="p-2.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors cursor-pointer">
                <div class="flex items-start space-x-2">
                  <icon
                    :name="announcement.icon"
                    size="14"
                    :class="announcement.color"
                    class="mt-1 flex-shrink-0" />
                  <div class="flex-1 min-w-0">
                    <h4
                      class="text-xs font-semibold text-gray-900 dark:text-white line-clamp-2">
                      {{ announcement.title }}
                    </h4>
                    <p
                      class="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                      {{ announcement.content }}
                    </p>
                    <span
                      class="text-xs text-gray-400 dark:text-gray-500 mt-1 block"
                      >{{ announcement.time }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>

        <!-- Who to Follow - Collapsible -->
        <div
          class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300">
          <button
            @click="sections.follow = !sections.follow"
            class="w-full p-3 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
            <h3 class="font-semibold text-sm text-gray-900 dark:text-white">
              Who to Follow
            </h3>
            <icon
              :name="
                sections.follow ? 'lucide:chevron-up' : 'lucide:chevron-down'
              "
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
            <div v-show="sections.follow" class="p-2 overflow-hidden">
              <div
                v-for="suggestion in followSuggestions"
                :key="suggestion.id"
                class="flex items-center justify-between p-2.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <div class="flex items-center space-x-2 flex-1 min-w-0">
                  <div
                    :class="[
                      'w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-semibold flex-shrink-0',
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
                        class="text-blue-500 flex-shrink-0" />
                    </div>
                    <span :class="['text-xs', suggestion.typeColor]">{{
                      suggestion.type
                    }}</span>
                  </div>
                </div>
                <button
                  class="px-3 py-1 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex-shrink-0">
                  Follow
                </button>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
const layoutStore = useLayoutStore();

const sections = ref({
  announcements: true,
  standings: true,
  follow: true,
});

interface Announcement {
  id: number;
  title: string;
  content: string;
  time: string;
  icon: string;
  color: string;
}

interface LeagueTeam {
  id: number;
  name: string;
  points: number;
}

interface FollowSuggestion {
  id: number;
  name: string;
  type: string;
  typeColor: string;
  initials: string;
  gradient: string;
  verified: boolean;
}

const announcements: Announcement[] = [
  {
    id: 1,
    title: "New Season Starting Soon!",
    content: "The 2025 season kicks off next weekend. Don't miss it!",
    time: "2h ago",
    icon: "lucide:sparkles",
    color: "text-yellow-500",
  },
  {
    id: 2,
    title: "Registration Open",
    content: "Sign up your team for the upcoming tournament.",
    time: "5h ago",
    icon: "lucide:users",
    color: "text-blue-500",
  },
  {
    id: 3,
    title: "Venue Change",
    content: "Sunday's match moved to Alexandra Stadium.",
    time: "1d ago",
    icon: "lucide:map-pin",
    color: "text-red-500",
  },
];

const leagueStandings: LeagueTeam[] = [
  { id: 1, name: "Ajax Cape Town", points: 45 },
  { id: 2, name: "Celtic FC", points: 42 },
  { id: 3, name: "Pretoria United", points: 38 },
  { id: 4, name: "Durban City", points: 35 },
  { id: 5, name: "Alexandra FC", points: 32 },
];

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

const closeSidebar = () => {
  layoutStore.closeSidebar("right");
};
</script>
