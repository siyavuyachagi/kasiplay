<template>
  <div
    class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300">
    <button
      @click="isCollapsed = !isCollapsed"
      class="w-full p-3 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
      <div class="flex items-center space-x-2">
        <icon name="lucide:megaphone" size="16" class="text-yellow-500" />
        <h3 class="font-semibold text-sm text-gray-900 dark:text-white">
          Announcements
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
          v-for="announcement in announcements"
          :key="announcement.id"
          class="p-2.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors cursor-pointer">
          <div class="flex items-start space-x-2">
            <icon
              :name="announcement.icon"
              size="14"
              :class="announcement.color"
              class="mt-1 shrink-0" />
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
</template>

<script setup lang="ts">
const isCollapsed = ref(false);

interface Announcement {
  id: number;
  title: string;
  content: string;
  time: string;
  icon: string;
  color: string;
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
</script>
