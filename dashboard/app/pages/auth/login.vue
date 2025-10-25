<template>
  <div class="max-w-md mx-auto">
    <div
      class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
      <!-- Header -->
      <div class="p-8 pb-6">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Welcome Back
        </h1>
        <p class="text-gray-600 dark:text-gray-400">
          Sign in to continue to your dashboard
        </p>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleLogin" class="px-8 pb-8 space-y-4">
        <div>
          <label
            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Organization Email
          </label>
          <input
            v-model="email"
            type="email"
            required
            class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="you@organization.com" />
        </div>

        <div>
          <label
            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Password
          </label>
          <div class="relative">
            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              required
              class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="••••••••" />
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 cursor-pointer">
              <icon
                v-if="showPassword"
                name="lucide:eye-off"
                size="20"
                class="text-gray-500" />
              <icon v-else name="lucide:eye" size="20" class="text-gray-500" />
            </button>
          </div>
        </div>

        <div class="flex items-center justify-between">
          <label class="flex items-center">
            <input
              v-model="rememberMe"
              type="checkbox"
              class="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">
              Remember me
            </span>
          </label>
          <nuxt-link
            to="/auth/forgot-password"
            class="text-sm text-blue-600 dark:text-blue-400 hover:underline">
            Forgot password?
          </nuxt-link>
        </div>

        <button
          type="submit"
          :disabled="loading"
          class="w-full py-3 px-4 rounded-lg font-medium text-white transition-all bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-500/50">
          <span v-if="!loading">Sign In</span>
          <span v-else class="flex items-center justify-center space-x-2">
            <icon name="lucide:loader-2" size="20" class="animate-spin" />
            <span>Signing in...</span>
          </span>
        </button>
      </form>

      <!-- Footer -->
      <div
        class="px-8 py-6 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-200 dark:border-gray-600">
        <p class="text-center text-sm text-gray-600 dark:text-gray-400">
          Don’t have an account?
          <nuxt-link
            to="/auth/register"
            class="text-blue-600 dark:text-blue-400 font-medium hover:underline ml-1">
            Apply here
          </nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Kasiplay | Login",
});
definePageMeta({
  layout: "auth",
  middleware: (to) => {
    const queries: Record<string, any> = { ...to.query };
    let isModified = false;

    if (!queries.return_url) {
      queries.return_url = "/";
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
      password: password.value,
      rememberMe: rememberMe.value,
    });

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Navigate based on organization type
    if (organizationType.value === "club") {
      router.push("/");
    } else {
      router.push("/");
    }
  } catch (error) {
    console.error("Login error:", error);
  } finally {
    loading.value = false;
  }
};
</script>
