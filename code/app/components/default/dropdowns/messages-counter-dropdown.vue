<template>
  <div ref="dropdownRef" class="relative" @click-outside="closeDropdown">
    <!-- Message / Notification Button -->
    <button
      @click="toggleDropdown"
      class="flex p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors relative">
      <Icon
        name="lucide:message-circle"
        size="20"
        class="text-gray-700 dark:text-gray-300" />
      <span
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
        class="absolute mt-[0.67rem] w-72 sm:w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-20 right-1/2 translate-x-1/2 sm:right-0 sm:translate-x-0">
        <div class="py-2 max-h-64 overflow-y-auto">
          <div
            v-for="(msg, index) in messages"
            :key="index"
            class="flex items-start px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
            <Icon
              name="lucide:mail"
              size="16"
              class="mt-1 mr-2 text-blue-500" />
            <div class="flex-1">
              <p class="text-gray-800 dark:text-gray-200 font-medium truncate">
                {{ msg.title }}
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400 truncate">
                {{ msg.preview }}
              </p>
            </div>
          </div>
        </div>
        <div
          class="border-t border-gray-200 dark:border-gray-700 text-center text-sm py-2 text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
          View all messages
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

const unreadCount = ref(2);

const messages = ref([
  { title: "New comment on your post", preview: "Looks great, keep it up!" },
  { title: "Team update", preview: "Next match scheduled for Friday." },
]);

const toggleDropdown = () => (isOpen.value = !isOpen.value);
const closeDropdown = () => (isOpen.value = false);

// Fallback if your global v-click-outside isn’t active:
const handleClickOutside = (e: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target as Node)) {
    closeDropdown();
  }
};

onMounted(() => document.addEventListener("click", handleClickOutside));
onUnmounted(() => document.removeEventListener("click", handleClickOutside));
</script>
