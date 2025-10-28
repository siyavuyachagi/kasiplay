<template>
  <div
    class="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 dark:from-blue-900 dark:via-purple-900 dark:to-blue-950 flex items-center justify-center p-4 relative overflow-hidden">
    <!-- Background Pattern -->
    <div
      class="absolute inset-0 opacity-10"
      style="
        background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
      "></div>

    <!-- Theme Toggle Button -->
    <button
      @click="themeStore.toggleTheme()"
      class="absolute top-4 right-4 p-3 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg hover:bg-white/20 dark:hover:bg-gray-700/50 transition-colors border border-white/20 dark:border-gray-700 z-10">
      <ClientOnly>
        <icon
          v-if="themeStore.isDark"
          name="lucide:sun"
          size="20"
          class="text-yellow-300" />
        <icon v-else name="lucide:moon" size="20" class="text-white" />
      </ClientOnly>
    </button>

    <div class="w-full max-w-md relative z-10">
      <!-- Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
        <!-- Header -->
        <div class="text-center mb-8">
          <nuxt-link to="/" class="inline-block mb-4">
            <div
              class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl">
              <NuxtImg
                src="/favicon.svg"
                alt="Logo"
                class="w-10 h-10 object-contain" />
            </div>
          </nuxt-link>
          <h2
            class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome Back
          </h2>
          <p class="text-gray-600 dark:text-gray-400">
            Sign in to your KasiPlay account
          </p>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleLogin" class="space-y-6">
          <!-- Email -->
          <div>
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email Address
            </label>
            <div class="relative">
              <icon
                name="lucide:mail"
                size="20"
                class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
              <input
                v-model="form.email"
                type="email"
                required
                class="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none transition-all placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="you@example.com" />
            </div>
          </div>

          <!-- Password -->
          <div>
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Password
            </label>
            <div class="relative">
              <icon
                name="lucide:lock"
                size="20"
                class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
              <input
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                required
                class="w-full pl-10 pr-12 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none transition-all placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="••••••••" />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">
                <icon
                  :name="showPassword ? 'lucide:eye-off' : 'lucide:eye'"
                  size="20" />
              </button>
            </div>
          </div>

          <!-- Remember & Forgot -->
          <div class="flex items-center justify-between">
            <label class="flex items-center cursor-pointer">
              <input
                v-model="form.rememberMe"
                type="checkbox"
                class="w-4 h-4 text-blue-600 border-gray-300 dark:border-gray-600 rounded focus:ring-blue-500 dark:focus:ring-blue-400 cursor-pointer bg-white dark:bg-gray-700" />
              <span class="ml-2 text-sm text-gray-600 dark:text-gray-400"
                >Remember me</span
              >
            </label>
            <nuxt-link
              to="/auth/reset-password"
              class="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
              Forgot password?
            </nuxt-link>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="loading"
            class="w-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed">
            <span v-if="!loading">Sign In</span>
            <span v-else class="flex items-center justify-center space-x-2">
              <icon name="lucide:loader-2" size="20" class="animate-spin" />
              <span>Signing in...</span>
            </span>
          </button>
        </form>

        <!-- Divider -->
        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div
                class="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span
                class="px-4 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                >Or continue with</span
              >
            </div>
          </div>

          <!-- Social Login -->
          <div class="mt-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              class="flex items-center justify-center px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
              <icon
                name="lucide:mail"
                size="20"
                class="text-gray-700 dark:text-gray-300" />
              <span
                class="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                >Google</span
              >
            </button>
            <button
              type="button"
              class="flex items-center justify-center px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
              <icon
                name="lucide:facebook"
                size="20"
                class="text-gray-700 dark:text-gray-300" />
              <span
                class="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                >Facebook</span
              >
            </button>
          </div>
        </div>

        <!-- Sign Up Link -->
        <p
          class="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          Don't have an account?
          <nuxt-link
            to="/auth/register"
            class="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold">
            Sign up for free
          </nuxt-link>
        </p>

        <!-- Back to Home -->
        <div class="mt-6 text-center">
          <nuxt-link
            to="/"
            class="inline-flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">
            <icon name="lucide:arrow-left" size="16" />
            <span>Back to home</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});

const themeStore = useThemeStore();

const form = ref({
  email: "",
  password: "",
  rememberMe: false,
});

const showPassword = ref(false);
const loading = ref(false);

const handleLogin = async () => {
  loading.value = true;
  try {
    // Add your login logic here
    console.log("Login form:", form.value);
    // Example: await authStore.login(form.value)
  } catch (error) {
    console.error("Login error:", error);
  } finally {
    loading.value = false;
  }
};
</script>