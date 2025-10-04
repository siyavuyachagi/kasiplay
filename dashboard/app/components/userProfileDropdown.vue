<template>
  <!-- User Profile Dropdown -->
  <div class="relative pl-4 border-l border-gray-200 dark:border-gray-700">
    <button
      @click="isOpen = !isOpen"
      class="flex items-center space-x-3 hover:opacity-80 transition-opacity"
    >
      <div class="relative">
        <div
          class="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center"
        >
          <span class="text-white text-sm font-medium">{{ userInitials }}</span>
        </div>
        <div
          class="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"
        ></div>
      </div>
      <div class="hidden xl:block text-left">
        <p class="font-medium text-gray-900 dark:text-white text-sm">
          {{ userName }}
        </p>
        <p class="text-xs text-gray-500 dark:text-gray-400">
          {{ userHandle }}
        </p>
      </div>
      <svg
        class="w-4 h-4 text-gray-500 dark:text-gray-400 hidden xl:block"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>

    <!-- Dropdown Menu -->
    <Transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="isOpen"
        class="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50"
      >
        <!-- Profile Header -->
        <div class="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
          <p class="text-sm font-medium text-gray-900 dark:text-white">
            {{ userName }}
          </p>
          <p class="text-xs text-gray-500 dark:text-gray-400 truncate">
            {{ userEmail }}
          </p>
        </div>

        <!-- Menu Items -->
        <div class="py-1">
          <a
            href="#"
            class="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg
              class="w-4 h-4 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            My Profile
          </a>
          <a
            href="#"
            class="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg
              class="w-4 h-4 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Settings
          </a>
          <a
            href="#"
            class="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg
              class="w-4 h-4 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
            Preferences
          </a>
        </div>

        <!-- Divider -->
        <div class="border-t border-gray-200 dark:border-gray-700"></div>

        <!-- Logout -->
        <div class="py-1">
          <button @click="authStore.signOut()"
            class="flex w-full items-center px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <icon name="lucide:log-out" size="16" class="mr-3" />
            Logout
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";

const authStore = useAuthStore();

const isOpen = ref(false);

const userName = computed(() => "Siyavuya Chagi");
const userHandle = computed(() => "@siyavuyachagi");
const userEmail = computed(() => "syavuya08@gmail.com");
const userInitials = computed(() => "SC");

// Close dropdown when clicking outside
const handleClickOutside = (event: MouseEvent) => {
  const dropdown = (event.target as HTMLElement).closest(".relative");
  if (!dropdown) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>
