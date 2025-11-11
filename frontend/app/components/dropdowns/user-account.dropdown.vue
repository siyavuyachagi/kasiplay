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
      <div
        ref="userAccountDropdown"
        v-else
        class="relative"
        @click-outside="closeDropdown">
        <button
          @click="isDropdownOpen = !isDropdownOpen"
          class="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
          <NuxtImg
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
          class="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-20!">
          <div class="py-2">
            <NuxtLink
              v-for="(link, i) in accountLinks"
              :key="i"
              :to="link.url"
              class="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
              <icon :name="link.icon" size="16" class="mr-2" />
              {{ link.label }}
            </NuxtLink>

            <!-- Single Organization Link -->
            <NuxtLink
              v-if="userOrganizations.length === 1"
              :to="userOrganizations[0]?.url || '/dashboard'"
              class="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
              <icon name="lucide:building" size="16" class="mr-2" />
              {{ userOrganizations[0]?.name }}
            </NuxtLink>

            <!-- Multiple Organizations Dropdown -->
            <div v-else-if="userOrganizations.length > 1" class="relative">
              <button
                @click="toggleOrganizationsDropdown"
                class="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                <div class="flex items-center">
                  <icon name="lucide:building-2" size="16" class="mr-2" />
                  <span>Organizations</span>
                </div>
                <icon
                  name="lucide:chevron-right"
                  size="16"
                  :class="[
                    'transition-transform duration-200',
                    isOrganizationsOpen ? 'rotate-90' : '',
                  ]" />
              </button>

              <!-- Organizations Sub-menu -->
              <Transition
                enter-active-class="transition-all duration-150 ease-out"
                enter-from-class="opacity-0 max-h-0"
                enter-to-class="opacity-100 max-h-96"
                leave-active-class="transition-all duration-150 ease-in"
                leave-from-class="opacity-100 max-h-96"
                leave-to-class="opacity-0 max-h-0">
                <div
                  v-show="isOrganizationsOpen"
                  class="overflow-hidden bg-gray-50 dark:bg-gray-900/50">
                  <NuxtLink
                    v-for="(org, i) in userOrganizations"
                    :key="i"
                    :to="org.url"
                    class="flex items-center pl-10 pr-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-200">
                    <icon name="lucide:building" size="16" class="mr-2" />
                    {{ org.name }}
                  </NuxtLink>
                </div>
              </Transition>
            </div>

            <!-- Sign Out Button -->
            <button
              @click="logout"
              class="w-full flex items-center px-4 py-2 text-sm text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700 border-t border-gray-200 dark:border-gray-700 mt-2 pt-2">
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
const isOrganizationsOpen = ref(false);
// Ref for the dropdown container
const userAccountDropdown = ref<HTMLElement | null>(null);

interface AccountLinks {
  label: string;
  icon: string;
  url: string;
}

const accountLinks: AccountLinks[] = [
  { label: "Profile", icon: "lucide:user", url: "/account/profile" },
  { label: "Settings", icon: "lucide:settings", url: "/account/settings" },
];

const userOrganizations = ref([
  { name: "SAF Association", url: "/saf-assoc" },
  { name: "Home Brothers FC", url: "/home-brothers-fc" },
  { name: "Orlando Pirates FC", url: "/orlando.pirate.club" },
]);

const user = ref({
  name: "John Doe",
  avatar: "/images/avatar.jpg",
});

const returnUrl = computed(() => {
  return window.location.pathname || "/";
});

const closeDropdown = () => {
  isDropdownOpen.value = false;
  isOrganizationsOpen.value = false;
};

const toggleOrganizationsDropdown = (event: Event) => {
  event.stopPropagation();
  isOrganizationsOpen.value = !isOrganizationsOpen.value;
};

const logout = () => {
  authStore.signOut();
  isAuthenticated.value = false;
};

// Close dropdown when clicking outside
const handleClickOutside = (event: MouseEvent) => {
  if (
    userAccountDropdown.value &&
    !userAccountDropdown.value.contains(event.target as HTMLElement)
  ) {
    isDropdownOpen.value = false;
    isOrganizationsOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>
