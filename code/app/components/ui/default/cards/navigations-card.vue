<template>
  <div
    class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300">
    <button
      @click="isCollapsed = !isCollapsed"
      class="w-full p-3 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
      <div class="flex items-center space-x-2">
        <icon name="lucide:menu" size="16" class="text-purple-500" />
        <h3 class="font-semibold text-sm text-gray-900 dark:text-white">
          Navigations
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
      <nav v-show="!isCollapsed" class="p-2 overflow-hidden">
        <nuxt-link
          v-for="link in navigationLinks"
          :key="link.path"
          :to="link.path"
          @click="console.log('Left sidebar')"
          class="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300"
          active-class="bg-gray-100 dark:bg-gray-700">
          <icon :name="link.icon" size="20" :class="link.color" />
          <span class="text-sm font-medium">{{ link.label }}</span>
        </nuxt-link>
      </nav>
    </transition>
  </div>
</template>

<script setup lang="ts">
// const layoutStore = useFrontendLayoutStore();
const isCollapsed = ref(false);

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
</script>
