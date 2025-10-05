<template>
  <div class="max-w-md mx-auto">
    <div
      class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
    >
      <!-- Header -->
      <div class="p-8 pb-6">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Welcome Back
        </h1>
        <p class="text-gray-600 dark:text-gray-400">
          Sign in to continue to your dashboard
        </p>
      </div>

      <!-- Organization Type Switcher -->
      <div class="px-8 pb-6">
        <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-1 flex">
          <button
            @click="changeOrganization(OrganizationType.CLUB)"
            class="flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all"
            :class="
              route.query.orgtype === OrganizationType.CLUB
                ? 'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
            "
          >
            <div class="flex items-center justify-center space-x-2">
              <icon name="lucide:building-2" size="16" />
              <span>Club</span>
            </div>
          </button>
          <button
            @click="changeOrganization(OrganizationType.GOVERNING_BODY)"
            class="flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all"
            :class="
              route.query.orgtype === OrganizationType.GOVERNING_BODY
                ? 'bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
            "
          >
            <div class="flex items-center justify-center space-x-2">
              <icon name="lucide:shield" size="16" />
              <span>Federation</span>
            </div>
          </button>
        </div>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleLogin" class="px-8 pb-8 space-y-4">
        <div>
          <label
            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Email Address
          </label>
          <input
            v-model="email"
            type="email"
            required
            class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label
            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Password
          </label>
          <div class="relative">
            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              required
              class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="••••••••"
            />
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <icon v-if="showPassword" name="lucide:eye-off" size="20" />
              <icon v-else name="lucide:eye" size="20" />
            </button>
          </div>
        </div>

        <div class="flex items-center justify-between">
          <label class="flex items-center">
            <input
              v-model="rememberMe"
              type="checkbox"
              class="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">
              Remember me
            </span>
          </label>
          <nuxt-link
            to="/auth/forgotPassword"
            class="text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            Forgot password?
          </nuxt-link>
        </div>

        <button
          type="submit"
          :disabled="loading"
          class="w-full py-3 px-4 rounded-lg font-medium text-white transition-all"
          :class="
            route.query.orgtype === OrganizationType.CLUB
              ? 'bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-500/50'
              : 'bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-500/50'
          "
        >
          <span v-if="!loading">Sign In</span>
          <span v-else class="flex items-center justify-center space-x-2">
            <icon name="lucide:loader-2" size="20" class="animate-spin" />
            <span>Signing in...</span>
          </span>
        </button>
      </form>

      <!-- Footer -->
      <div
        class="px-8 py-6 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-200 dark:border-gray-600"
      >
        <p class="text-center text-sm text-gray-600 dark:text-gray-400">
          Don't have an account?
          <nuxt-link
            to="/auth/register"
            :class="
              route.query.orgtype === OrganizationType.CLUB
                ? 'text-blue-600 dark:text-blue-400'
                : 'text-purple-600 dark:text-purple-400'
            "
            class="font-medium hover:underline ml-1"
          >
            Apply now
          </nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const enum OrganizationType {
  CLUB = "club",
  GOVERNING_BODY = "governing_body",
}
useHead({
  title: 'Kasiplay | Login'
})
definePageMeta({
  layout: "auth",
  middleware: (to) => {
    const queries: Record<string, any> = { ...to.query };
    let isModified = false;

    if (!queries.return_url) {
      queries.return_url = "/";
      isModified = true;
    }

    if (!queries.orgtype) {
      queries.orgtype = OrganizationType.CLUB;
      isModified = true;
    }

    // Only navigate if we actually modified something
    if (isModified) {
      return navigateTo({
        path: to.path,
        query: queries,
      });
    }
  },
});

const route = useRoute();
const router = useRouter();
const email = ref("");
const password = ref("");
const rememberMe = ref(false);
const showPassword = ref(false);
const loading = ref(false);
const organizationType = ref<"club" | "federation">("club");

const handleLogin = async () => {
  loading.value = true;
  try {
    // TODO: Implement actual login logic
    console.log("Login:", {
      email: email.value,
      organizationType: organizationType.value,
    });

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Navigate based on organization type
    if (organizationType.value === "club") {
      navigateTo("/dashboard");
    } else {
      navigateTo("/dashboard"); // Will show federation dashboard
    }
  } catch (error) {
    console.error("Login error:", error);
  } finally {
    loading.value = false;
  }
};

const changeOrganization = (type: OrganizationType) => {
  router.push({
    query: { ...route.query, orgtype: type },
  });
};
</script>
