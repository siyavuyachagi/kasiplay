<template>
  <div
    class="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 flex items-center justify-center p-4">
    <!-- Background Pattern -->
    <div
      class="absolute inset-0 opacity-10"
      style="
        background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
      "></div>

    <div class="w-full max-w-md relative">
      <!-- Card -->
      <div class="bg-white rounded-2xl shadow-2xl p-8">
        <!-- Success State -->
        <div v-if="emailSent" class="text-center">
          <div
            class="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <icon name="lucide:mail-check" size="32" class="text-green-600" />
          </div>
          <h2 class="text-3xl font-bold text-gray-900 mb-2">Check Your Email</h2>
          <p class="text-gray-600 mb-6">
            We've sent password reset instructions to
            <span class="font-semibold text-gray-900">{{ form.email }}</span>
          </p>
          <div
            class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 text-left">
            <div class="flex items-start space-x-3">
              <icon name="lucide:info" size="20" class="text-blue-600 mt-0.5" />
              <div class="text-sm text-gray-700">
                <p class="font-medium text-gray-900 mb-1">
                  Didn't receive the email?
                </p>
                <ul class="space-y-1 text-gray-600">
                  <li>• Check your spam or junk folder</li>
                  <li>• Make sure you entered the correct email</li>
                  <li>• Wait a few minutes and check again</li>
                </ul>
              </div>
            </div>
          </div>
          <button
            @click="emailSent = false"
            class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl">
            Try Another Email
          </button>
          <div class="mt-6">
            <nuxt-link
              to="/auth/login"
              class="inline-flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900">
              <icon name="lucide:arrow-left" size="16" />
              <span>Back to sign in</span>
            </nuxt-link>
          </div>
        </div>

        <!-- Form State -->
        <div v-else>
          <!-- Header -->
          <div class="text-center mb-8">
            <div
              class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-4">
              <icon name="lucide:key-round" size="32" class="text-white" />
            </div>
            <h2 class="text-3xl font-bold text-gray-900 mb-2">
              Forgot Password?
            </h2>
            <p class="text-gray-600">
              No worries! Enter your email and we'll send you reset instructions
            </p>
          </div>

          <!-- Form -->
          <form @submit.prevent="handleResetRequest" class="space-y-6">
            <!-- Email -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div class="relative">
                <icon
                  name="lucide:mail"
                  size="20"
                  class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="you@example.com" />
              </div>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="loading"
              class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed">
              <span v-if="!loading">Send Reset Link</span>
              <span v-else class="flex items-center justify-center space-x-2">
                <icon name="lucide:loader-2" size="20" class="animate-spin" />
                <span>Sending...</span>
              </span>
            </button>
          </form>

          <!-- Back to Login -->
          <div class="mt-6 text-center">
            <nuxt-link
              to="/auth/login"
              class="inline-flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900">
              <icon name="lucide:arrow-left" size="16" />
              <span>Back to sign in</span>
            </nuxt-link>
          </div>

          <!-- Help Section -->
          <div class="mt-8 pt-6 border-t border-gray-200">
            <div class="flex items-start space-x-3">
              <icon
                name="lucide:help-circle"
                size="20"
                class="text-gray-400 mt-0.5" />
              <div class="text-sm text-gray-600">
                <p class="font-medium text-gray-900 mb-1">Need help?</p>
                <p>
                  Contact our support team at
                  <a
                    href="mailto:support@kasiplay.com"
                    class="text-blue-600 hover:text-blue-700 font-medium">
                    support@kasiplay.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});

const form = ref({
  email: "",
});

const loading = ref(false);
const emailSent = ref(false);

const handleResetRequest = async () => {
  loading.value = true;
  try {
    // Add your password reset logic here
    console.log("Reset request for:", form.value.email);
    // Example: await authStore.requestPasswordReset(form.value.email)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    emailSent.value = true;
  } catch (error) {
    console.error("Reset request error:", error);
  } finally {
    loading.value = false;
  }
};
</script>