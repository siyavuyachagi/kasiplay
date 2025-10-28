<template>
  <div
    class="min-h-screen bg-linear-to-br from-blue-600 via-purple-600 to-blue-700 dark:from-blue-900 dark:via-purple-900 dark:to-blue-950 flex items-center justify-center p-4 relative overflow-hidden">
    <!-- Background Pattern -->
    <div
      class="absolute inset-0 opacity-10"
      style="
        background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
      "></div>

    <!-- Theme Toggle Button -->
    <button
      @click="themeStore.toggleTheme()"
      class="hidden md:flex absolute top-4 right-4 p-1 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg hover:bg-white/20 dark:hover:bg-gray-700/50 transition-colors border border-white/20 dark:border-gray-700 z-10">
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
        <!-- Success Icon with Animation -->
        <div class="text-center mb-8">
          <div class="relative inline-block">
            <!-- Success Circle -->
            <div
              class="inline-flex items-center justify-center w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full mb-4 animate-pulse">
              <icon
                name="lucide:check-circle-2"
                size="48"
                class="text-green-600 dark:text-green-400" />
            </div>
            <!-- Confetti Effect -->
            <div class="absolute -top-2 -right-2">
              <icon
                name="lucide:sparkles"
                size="24"
                class="text-yellow-500 dark:text-yellow-400 animate-bounce" />
            </div>
          </div>

          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Password Reset Successful!
          </h2>
          <p class="text-gray-600 dark:text-gray-400">
            Your password has been successfully updated
          </p>
        </div>

        <!-- Success Message -->
        <div
          class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6 text-center">
          <div class="flex items-center justify-center space-x-2 text-green-700 dark:text-green-400">
            <icon name="lucide:shield-check" size="20" />
            <p class="text-sm font-medium">
              Your account is now secure with the new password
            </p>
          </div>
        </div>

        <!-- Info Box -->
        <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
          <div class="flex items-start space-x-3">
            <icon name="lucide:info" size="20" class="text-blue-600 dark:text-blue-400 mt-0.5" />
            <div class="text-sm text-gray-700 dark:text-gray-300">
              <p class="font-medium text-gray-900 dark:text-white mb-2">
                What's next?
              </p>
              <ul class="space-y-1 text-gray-600 dark:text-gray-400">
                <li>• Use your new password to sign in</li>
                <li>• Keep your password secure</li>
                <li>• Consider enabling two-factor authentication</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Sign In Button -->
        <nuxt-link
          to="/auth/login"
          class="w-full inline-flex items-center justify-center space-x-2 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600 transition-all shadow-lg hover:shadow-xl">
          <icon name="lucide:log-in" size="20" />
          <span>Sign In Now</span>
        </nuxt-link>

        <!-- Additional Links -->
        <div class="mt-6 flex flex-col items-center space-y-3">
          <nuxt-link
            to="/"
            class="inline-flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">
            <icon name="lucide:home" size="16" />
            <span>Go to homepage</span>
          </nuxt-link>

          <div class="text-sm text-gray-500 dark:text-gray-400">
            Need help?
            <a
              href="mailto:support@kasiplay.com"
              class="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium ml-1">
              Contact Support
            </a>
          </div>
        </div>

        <!-- Auto-redirect countdown -->
        <div
          v-if="countdown > 0"
          class="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
          Redirecting to sign in page in {{ countdown }} seconds...
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
const router = useRouter();
const countdown = ref(5);

// Auto-redirect after 5 seconds
onMounted(() => {
  const interval = setInterval(() => {
    countdown.value--;
    if (countdown.value <= 0) {
      clearInterval(interval);
      router.push("/auth/login");
    }
  }, 1000);

  // Cleanup interval on unmount
  onUnmounted(() => {
    clearInterval(interval);
  });
});
</script>