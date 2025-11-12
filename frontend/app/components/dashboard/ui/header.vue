<template>
  <header
    class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 shadow-sm">
    <div class="flex items-center justify-between px-4 py-3">
      <div class="flex items-center space-x-3">
        <div class="flex items-center space-x-2">
          <button
            @click="layoutStore.toggleSidebar()"
            class="lg:hidden flex justify-center p-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200">
            <icon name="lucide:menu" size="20" class="text-white" />
          </button>

          <NuxtLink to="/" class="hidden lg:flex items-center space-x-2">
            <NuxtImg
              src="/favicon.svg"
              alt="Logo"
              class="w-5 h-5 object-contain" />
            <span
              class="hidden sm:inline text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              KasiPlay
            </span>
          </NuxtLink>

          <NuxtLink
            :to="`/${route.params.org as string}`"
            class="hidden md:flex">
            <div
              class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1">
              <span
                class="text-sm font-medium text-blue-700 dark:text-blue-400"
                >{{ activeTeam }}</span
              >
            </div>
          </NuxtLink>
        </div>
      </div>

      <div class="hidden md:flex flex-1 max-w-xl mx-6">
        <div class="relative w-full">
          <icon
            name="lucide:search"
            size="18"
            class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search players, matches, clubs, topics..."
            class="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 border border-transparent focus:border-blue-500 rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none transition-colors" />
        </div>
      </div>

      <div class="flex items-center space-x-3">
        <!-- Search Icon -->
        <button
          @click="toggleMobileSearch"
          class="relative flex md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
          <icon
            :name="showMobileSearch ? 'lucide:x' : 'lucide:search'"
            size="20"
            class="text-gray-600 dark:text-gray-400" />
        </button>

        <!-- Notifications Bell -->
        <button
          class="relative flex p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
          <icon
            name="lucide:bell"
            size="20"
            class="text-gray-600 dark:text-gray-400" />

          <span
            class="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
            5
          </span>
        </button>

        <!-- Messages Icon -->
        <button
          class="relative flex p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
          <icon
            name="lucide:message-circle"
            size="20"
            class="text-gray-600 dark:text-gray-400" />

          <span
            class="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
            3
          </span>
        </button>

        <!-- User Account Dropdown -->
        <DashboardUserAccountDropdown />
      </div>
    </div>

    <!-- Mobile Search Bar -->
    <transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2">
      <div
        v-if="showMobileSearch"
        class="md:hidden px-4 pb-3 border-t border-gray-200 dark:border-gray-700 pt-3">
        <div class="relative w-full">
          <icon
            name="lucide:search"
            size="18"
            class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            ref="mobileSearchInput"
            type="text"
            placeholder="Search players, matches, clubs, topics..."
            class="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 border border-transparent focus:border-blue-500 rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none transition-colors" />
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
const DashboardUserAccountDropdown = defineAsyncComponent(
  () => import("~/components/dashboard/dropdowns/user-account.dropdown.vue")
);

const layoutStore = useDashboardLayoutStore();
const activeTeam = ref<string>("Orlando Pirates FC");
const showMobileSearch = ref<boolean>(false);
const mobileSearchInput = ref<HTMLInputElement | null>(null);
const route = useRoute();

const toggleMobileSearch = () => {
  showMobileSearch.value = !showMobileSearch.value;

  // Focus the input when opened
  if (showMobileSearch.value) {
    nextTick(() => {
      mobileSearchInput.value?.focus();
    });
  }
};
</script>
