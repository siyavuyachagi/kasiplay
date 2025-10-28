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
            <icon name="lucide:shield-check" size="32" class="text-white" />
          </div>
          <h2 class="text-3xl font-bold text-gray-900 mb-2">
            Set New Password
          </h2>
          <p class="text-gray-600">
            Enter your new password below
          </p>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleResetPassword" class="space-y-6">
          <!-- New Password -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              New Password
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
                minlength="8"
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

          <!-- Confirm New Password -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Confirm New Password
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
                minlength="8"
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

          <!-- Password Requirements -->
          <div class="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <p class="text-sm font-medium text-gray-900 mb-2">
              Password must contain:
            </p>
            <ul class="space-y-1 text-sm text-gray-600">
              <li class="flex items-center space-x-2">
                <icon
                  :name="
                    form.password.length >= 8
                      ? 'lucide:check-circle'
                      : 'lucide:circle'
                  "
                  size="16"
                  :class="
                    form.password.length >= 8
                      ? 'text-green-600'
                      : 'text-gray-400'
                  " />
                <span>At least 8 characters</span>
              </li>
              <li class="flex items-center space-x-2">
                <icon
                  :name="
                    /[A-Z]/.test(form.password)
                      ? 'lucide:check-circle'
                      : 'lucide:circle'
                  "
                  size="16"
                  :class="
                    /[A-Z]/.test(form.password)
                      ? 'text-green-600'
                      : 'text-gray-400'
                  " />
                <span>One uppercase letter</span>
              </li>
              <li class="flex items-center space-x-2">
                <icon
                  :name="
                    /[a-z]/.test(form.password)
                      ? 'lucide:check-circle'
                      : 'lucide:circle'
                  "
                  size="16"
                  :class="
                    /[a-z]/.test(form.password)
                      ? 'text-green-600'
                      : 'text-gray-400'
                  " />
                <span>One lowercase letter</span>
              </li>
              <li class="flex items-center space-x-2">
                <icon
                  :name="
                    /[0-9]/.test(form.password)
                      ? 'lucide:check-circle'
                      : 'lucide:circle'
                  "
                  size="16"
                  :class="
                    /[0-9]/.test(form.password)
                      ? 'text-green-600'
                      : 'text-gray-400'
                  " />
                <span>One number / special character</span>
              </li>
            </ul>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="loading || !isPasswordValid"
            class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed">
            <span v-if="!loading">Reset Password</span>
            <span v-else class="flex items-center justify-center space-x-2">
              <icon name="lucide:loader-2" size="20" class="animate-spin" />
              <span>Resetting password...</span>
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
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});

const route = useRoute();
const router = useRouter();

const form = ref({
  password: "",
  confirmPassword: "",
});

const showPassword = ref(false);
const showConfirmPassword = ref(false);
const loading = ref(false);

const isPasswordValid = computed(() => {
  return (
    form.value.password.length >= 8 &&
    /[A-Z]/.test(form.value.password) &&
    /[a-z]/.test(form.value.password) &&
    /[0-9]/.test(form.value.password) &&
    form.value.password === form.value.confirmPassword
  );
});

const handleResetPassword = async () => {
  if (!isPasswordValid.value) {
    alert("Please ensure your password meets all requirements and matches!");
    return;
  }

  loading.value = true;
  try {
    // Get token from URL query params
    const token = route.query.token;

    // Add your password reset logic here
    console.log("Reset password with token:", token);
    console.log("New password:", form.value.password);
    // Example: await authStore.resetPassword(token, form.value.password)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Redirect to success page
    router.push("/auth/reset-password/success");
  } catch (error) {
    console.error("Password reset error:", error);
  } finally {
    loading.value = false;
  }
};
</script>