<template>
  <!-- User Profile Dropdown -->
  <div class="relative pl-4 border-l border-gray-200 dark:border-gray-700">
    <button
      @click="isOpen = !isOpen"
      class="flex items-center space-x-3 hover:opacity-80 transition-opacity cursor-pointer">
      <div class="relative">
        <!-- Avatar -->
        <div
          class="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden bg-gray-200 dark:bg-gray-700">
          <NuxtImg
            v-if="userAvatar"
            :src="userAvatar"
            alt="User Avatar"
            class="w-full h-full object-cover" />
          <span
            v-else
            class="text-white text-sm font-medium bg-green-600 w-full h-full flex items-center justify-center rounded-lg">
            {{ userInitials }}
          </span>
        </div>

        <!-- Online Indicator -->
        <div
          class="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
      </div>

      <div class="hidden lg:block text-left">
        <p class="font-medium text-gray-900 dark:text-white text-sm">
          {{ userName }}
        </p>
        <p class="text-xs text-gray-500 dark:text-gray-400">
          {{ userHandle }}
        </p>
      </div>

      <icon
        name="lucide:chevron-down"
        size="16"
        class="text-gray-500 dark:text-gray-400 hidden lg:block transition-transform"
        :class="{ 'rotate-180': isOpen }" />
    </button>

    <!-- Dropdown Menu -->
    <Transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95">
      <div
        v-if="isOpen"
        class="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50">
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
          <NuxtLink
            v-for="(option, i) in dropdownOptions"
            :key="i"
            :to="option.url"
            class="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
            <icon :name="option.icon" size="16" class="mr-3" />
            {{ option.label }}
          </NuxtLink>
        </div>

        <!-- Logout -->
        <div class="py-1 border-t border-gray-200 dark:border-gray-700">
          <button
            @click="authStore.signOut()"
            class="flex w-full items-center px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700">
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
const route = useRoute();

const isOpen = ref(false);

const userName = computed(() => "Siyavuya Chagi");
const userHandle = computed(() => "@siyavuyachagi");
const userEmail = computed(() => "syavuya08@gmail.com");
const userInitials = computed(() => "SC");
const userAvatar = computed(() => "/images/avatar.jpg");

const dropdownOptions = [
  { label: "My Profile", icon: "lucide:user", url: "/account/profile" },
  { label: "Settings", icon: "lucide:settings", url: "/account/settings" },
  { label: "Preferences", icon: "lucide:sliders", url: "/account/preferences" },
];

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
