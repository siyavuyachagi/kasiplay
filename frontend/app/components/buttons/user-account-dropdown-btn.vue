<template>
  <ClientOnly>
    <div>
      <!-- Show Sign In button when not authenticated -->
      <nuxt-link
        v-if="!isAuthenticated"
        :to="`/auth/login?return_url=${returnUrl}`"
        class="hidden sm:inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors text-sm">
        <icon name="lucide:log-in" size="18" />
        <span>Sign In</span>
      </nuxt-link>

      <!-- User Account Dropdown -->
      <div v-else class="relative" @click-outside="closeDropdown">
        <button
          @click="isDropdownOpen = !isDropdownOpen"
          class="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
          <img
            :src="user.avatar"
            alt="User avatar"
            class="w-8 h-8 rounded-full object-cover" />
          <span
            class="hidden sm:block text-sm font-medium text-gray-700 dark:text-gray-300">
            {{ user.name }}
          </span>
          <icon name="lucide:chevron-down" size="16" class="text-gray-500" />
        </button>

        <div
          v-show="isDropdownOpen"
          class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <div class="py-2">
            <nuxt-link
              to="/account/profile"
              class="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
              <icon name="lucide:user" size="16" class="mr-2" />
              Profile
            </nuxt-link>
            <nuxt-link
              to="/account/settings"
              class="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
              <icon name="lucide:settings" size="16" class="mr-2" />
              Settings
            </nuxt-link>
            <nuxt-link
              v-if="false"
              to="/dashboard/federation"
              class="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
              <icon name="lucide:building-2" size="16" class="mr-2" />
              SAF Association
            </nuxt-link>
            <nuxt-link
              v-else
              to="/dashboard/club"
              class="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
              <icon name="lucide:building" size="16" class="mr-2" />
              7 Stars FC
            </nuxt-link>
            <button
              @click="logout"
              class="w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700">
              <icon name="lucide:log-out" size="16" class="mr-2" />
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
const authStore = useAuthStore();
const isAuthenticated = ref(true); // Replace with actual auth check
const isDropdownOpen = ref(false);

const user = ref({
  name: "John Doe",
  avatar: "/images/avatar.jpg",
});

const returnUrl = computed(() => {
  return window.location.pathname || "/";
});

const closeDropdown = () => {
  isDropdownOpen.value = false;
};

const logout = () => {
  authStore.signOut();
  isAuthenticated.value = false;
};
</script>
