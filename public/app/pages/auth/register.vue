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
        <!-- Header -->
        <div class="text-center mb-8">
          <div
            class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-4">
            <icon name="lucide:user-plus" size="32" class="text-white" />
          </div>
          <h2 class="text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
          <p class="text-gray-600">Join KasiPlay today</p>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleRegister" class="space-y-5">
          <!-- Name Fields -->
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                First Name
              </label>
              <input
                v-model="form.firstName"
                type="text"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="John" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Last Name
              </label>
              <input
                v-model="form.lastName"
                type="text"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="Doe" />
            </div>
          </div>

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

          <!-- Password -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div class="relative">
              <icon
                name="lucide:lock"
                size="20"
                class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                required
                class="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="••••••••" />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <icon
                  :name="showPassword ? 'lucide:eye-off' : 'lucide:eye'"
                  size="20" />
              </button>
            </div>
          </div>

          <!-- Confirm Password -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <div class="relative">
              <icon
                name="lucide:lock"
                size="20"
                class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                v-model="form.confirmPassword"
                :type="showConfirmPassword ? 'text' : 'password'"
                required
                class="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="••••••••" />
              <button
                type="button"
                @click="showConfirmPassword = !showConfirmPassword"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <icon
                  :name="
                    showConfirmPassword ? 'lucide:eye-off' : 'lucide:eye'
                  "
                  size="20" />
              </button>
            </div>
          </div>

          <!-- Terms & Conditions -->
          <div>
            <label class="flex items-start cursor-pointer">
              <input
                v-model="form.acceptTerms"
                type="checkbox"
                required
                class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer mt-1" />
              <span class="ml-2 text-sm text-gray-600">
                I agree to the
                <nuxt-link
                  to="/terms"
                  class="text-blue-600 hover:text-blue-700 font-medium">
                  Terms of Service
                </nuxt-link>
                and
                <nuxt-link
                  to="/privacy"
                  class="text-blue-600 hover:text-blue-700 font-medium">
                  Privacy Policy
                </nuxt-link>
              </span>
            </label>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="loading"
            class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed">
            <span v-if="!loading">Create Account</span>
            <span v-else class="flex items-center justify-center space-x-2">
              <icon name="lucide:loader-2" size="20" class="animate-spin" />
              <span>Creating account...</span>
            </span>
          </button>
        </form>

        <!-- Divider -->
        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-4 bg-white text-gray-500">Or sign up with</span>
            </div>
          </div>

          <!-- Social Sign Up -->
          <div class="mt-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              class="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <icon name="lucide:mail" size="20" class="text-gray-700" />
              <span class="ml-2 text-sm font-medium text-gray-700">Google</span>
            </button>
            <button
              type="button"
              class="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <icon name="lucide:facebook" size="20" class="text-gray-700" />
              <span class="ml-2 text-sm font-medium text-gray-700"
                >Facebook</span
              >
            </button>
          </div>
        </div>

        <!-- Sign In Link -->
        <p class="mt-8 text-center text-sm text-gray-600">
          Already have an account?
          <nuxt-link
            to="/auth/login"
            class="text-blue-600 hover:text-blue-700 font-semibold">
            Sign in
          </nuxt-link>
        </p>

        <!-- Back to Home -->
        <div class="mt-6 text-center">
          <nuxt-link
            to="/"
            class="inline-flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900">
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

const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  acceptTerms: false,
});

const showPassword = ref(false);
const showConfirmPassword = ref(false);
const loading = ref(false);

const handleRegister = async () => {
  if (form.value.password !== form.value.confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  loading.value = true;
  try {
    // Add your registration logic here
    console.log("Register form:", form.value);
    // Example: await authStore.register(form.value)
  } catch (error) {
    console.error("Registration error:", error);
  } finally {
    loading.value = false;
  }
};
</script>