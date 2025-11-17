<template>
  <div ref="dropdownRef" class="relative" @click-outside="closeDropdown">
    <!-- Notification Bell -->
    <button
      @click="toggleDropdown"
      class="flex p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors relative">
      <Icon
        name="lucide:bell"
        size="20"
        class="text-gray-700 dark:text-gray-300" />
      <!-- Notification Counter -->
      <span
        v-if="unreadCount > 0"
        class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
        {{ unreadCount }}
      </span>
    </button>

    <!-- Dropdown -->
    <transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2">
      <div
        v-if="isOpen"
        class="absolute mt-[0.68rem] w-72 sm:w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-20 right-1/2 translate-x-1/2 sm:right-0 sm:translate-x-0">
        <div class="py-2 max-h-64 overflow-y-auto">
          <div
            v-for="(notification, index) in notifications"
            :key="index"
            class="flex items-start px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
            <Icon
              :name="notification.icon"
              size="16"
              class="mt-1 mr-2 text-yellow-500" />
            <div class="flex-1">
              <p class="text-gray-800 dark:text-gray-200 font-medium truncate">
                {{ notification.title }}
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400 truncate">
                {{ notification.time }}
              </p>
            </div>
          </div>
          <div
            v-if="notifications.length === 0"
            class="text-center py-4 text-gray-500 dark:text-gray-400 text-sm">
            No new notifications
          </div>
        </div>

        <!-- Footer -->
        <div
          class="border-t border-gray-200 dark:border-gray-700 text-center text-sm py-2 text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
          @click="router.push('/notifications')">
          View all notifications
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const isOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);
const unreadCount = ref(4);

const notifications = ref([
  {
    title: "System update completed",
    time: "2m ago",
    icon: "lucide:check-circle",
  },
  {
    title: "New follower: John Doe",
    time: "15m ago",
    icon: "lucide:user-plus",
  },
  {
    title: "Comment on your post",
    time: "1h ago",
    icon: "lucide:message-square",
  },
  { title: "Backup successful", time: "3h ago", icon: "lucide:database" },
]);

const toggleDropdown = () => (isOpen.value = !isOpen.value);
const closeDropdown = () => (isOpen.value = false);

// Click-outside fallback (if directive not available)
const handleClickOutside = (e: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target as Node)) {
    closeDropdown();
  }
};

onMounted(() => document.addEventListener("click", handleClickOutside));
onUnmounted(() => document.removeEventListener("click", handleClickOutside));
</script>
