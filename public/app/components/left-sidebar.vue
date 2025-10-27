<template>
  <aside
    class="h-min rounded-lg"
    :class="[
      'lg:col-span-3',
      'fixed lg:static inset-y-0 left-0 z-30',
      'w-72 lg:w-auto',
      'bg-white dark:bg-gray-800 lg:bg-transparent',
      'border-r lg:border-0 border-gray-200 dark:border-gray-700',
      'transition-transform duration-300 lg:transition-none',
      layoutStore.isLeftSidebarOpen
        ? 'translate-x-0'
        : '-translate-x-full lg:translate-x-0',
    ]">
    <div class="h-full overflow-y-auto scrollbar-hide">
      <div class="p-4 space-y-4">
        <!-- Close Button Mobile -->
        <div
          class="lg:hidden flex items-center justify-between pb-3 border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-800 z-10">
          <h3 class="font-bold text-gray-900 dark:text-white">Menu</h3>
          <button
            @click="closeSidebar"
            class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <icon name="lucide:x" size="20" />
          </button>
        </div>

        <!-- Navigation - Collapsible -->
        <div
          class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300">
          <button
            @click="sections.navigation = !sections.navigation"
            class="w-full p-3 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
            <h3 class="font-semibold text-sm text-gray-900 dark:text-white">
              Navigation
            </h3>
            <icon
              :name="
                sections.navigation
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
            <nav v-show="sections.navigation" class="p-2 overflow-hidden">
              <nuxt-link
                v-for="link in navigationLinks"
                :key="link.path"
                :to="link.path"
                @click="layoutStore.isLeftSidebarOpen = false"
                class="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300">
                <icon :name="link.icon" size="20" :class="link.color" />
                <span class="text-sm font-medium">{{ link.label }}</span>
              </nuxt-link>
            </nav>
          </transition>
        </div>

        <!-- Trending - Collapsible -->
        <div
          class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300">
          <button
            @click="sections.trending = !sections.trending"
            class="w-full p-3 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
            <div class="flex items-center space-x-2">
              <icon
                name="lucide:trending-up"
                size="16"
                class="text-orange-500" />
              <h3 class="font-semibold text-sm text-gray-900 dark:text-white">
                Trending
              </h3>
            </div>
            <icon
              :name="
                sections.trending ? 'lucide:chevron-up' : 'lucide:chevron-down'
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
            <div v-show="sections.trending" class="p-2 overflow-hidden">
              <div
                v-for="trend in trendingTopics"
                :key="trend.tag"
                class="px-3 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors cursor-pointer">
                <div class="flex items-center justify-between">
                  <div>
                    <div
                      class="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      {{ trend.tag }}
                    </div>
                    <div class="text-xs text-gray-500 dark:text-gray-400">
                      {{ trend.posts }} posts
                    </div>
                  </div>
                  <icon name="lucide:flame" size="16" class="text-orange-500" />
                </div>
              </div>
            </div>
          </transition>
        </div>

        <!-- Today's Fixtures - Collapsible -->
        <div
          class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300">
          <button
            @click="sections.fixtures = !sections.fixtures"
            class="w-full p-3 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
            <div class="flex items-center space-x-2">
              <icon name="lucide:calendar" size="16" class="text-blue-600" />
              <h3 class="font-semibold text-sm text-gray-900 dark:text-white">
                Today's Fixtures
              </h3>
            </div>
            <icon
              :name="
                sections.fixtures ? 'lucide:chevron-up' : 'lucide:chevron-down'
              "
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
            <div v-show="sections.fixtures" class="overflow-hidden">
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
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
const layoutStore = useLayoutStore();

const sections = ref({
  navigation: true,
  trending: true,
  fixtures: true,
});

interface NavigationLink {
  label: string;
  path: string;
  icon: string;
  color: string;
}

const navigationLinks: NavigationLink[] = [
  { label: "Home", path: "/", icon: "lucide:home", color: "text-blue-600" },
  {
    label: "Matches",
    path: "/matches",
    icon: "lucide:calendar",
    color: "text-green-600",
  },
  {
    label: "Teams",
    path: "/teams",
    icon: "lucide:users",
    color: "text-purple-600",
  },
  {
    label: "Players",
    path: "/players",
    icon: "lucide:user",
    color: "text-orange-600",
  },
  {
    label: "News",
    path: "/news",
    icon: "lucide:newspaper",
    color: "text-pink-600",
  },
  {
    label: "Gallery",
    path: "/gallery",
    icon: "lucide:image",
    color: "text-indigo-600",
  },
];

const trendingTopics = [
  { tag: "#KasiPremierLeague", posts: 1234 },
  { tag: "#ChiefsVsPirates", posts: 892 },
  { tag: "#PlayerOfTheMonth", posts: 567 },
  { tag: "#LocalFootball", posts: 445 },
];

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

const closeSidebar = () => {
  layoutStore.closeSidebar("left");
};
</script>
