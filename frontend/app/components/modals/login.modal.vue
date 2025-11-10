<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isLoginModalOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 dark:bg-black/70 backdrop-blur-sm"
        @click.self="closeLoginModal">
        <div
          class="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-8 relative transition-all duration-300">
          <!-- Close Button (Top Right Corner) -->
          <button
            @click="closeLoginModal"
            class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
            aria-label="Close">
            <icon name="lucide:x" size="22" />
          </button>

          <!-- Header -->
          <div class="text-center mb-8 mt-2">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Welcome Back
            </h2>
          </div>

          <!-- Form -->
          <form @submit.prevent="handleLogin" class="space-y-4">
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
                  placeholder="you@example.com"
                  class="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none placeholder-gray-400 dark:placeholder-gray-500 transition-all" />
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
                  placeholder="••••••••"
                  class="w-full pl-10 pr-12 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none placeholder-gray-400 dark:placeholder-gray-500 transition-all" />
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
                  class="w-4 h-4 text-blue-600 border-gray-300 dark:border-gray-600 rounded focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700" />
                <span class="ml-2 text-sm text-gray-600 dark:text-gray-400"
                  >Remember me</span
                >
              </label>
              <NuxtLink
                to="/auth/reset-password"
                @click="closeLoginModal"
                class="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
                Forgot password?
              </NuxtLink>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="loading"
              class="w-full bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed">
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
                  class="px-4 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                  Or continue with
                </span>
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
                  class="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Google
                </span>
              </button>
              <button
                type="button"
                class="flex items-center justify-center px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                <icon
                  name="lucide:facebook"
                  size="20"
                  class="text-gray-700 dark:text-gray-300" />
                <span
                  class="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Facebook
                </span>
              </button>
            </div>
          </div>

          <!-- Sign Up Link -->
          <p class="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
            Don't have an account?
            <NuxtLink
              to="/account/register"
              @click="closeLoginModal"
              class="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold">
              Sign up for free
            </NuxtLink>
          </p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const { isLoginModalOpen, closeLoginModal } = useLoginModal();

const loading = ref(false);
const form = reactive({
  email: "",
  password: "",
  remember: false,
});

const resetForm = () => {
  form.email = "";
  form.password = "";
  form.remember = false;
};

const handleLogin = async () => {
  try {
    loading.value = true;
    // Add your login logic here
    // Example: await useAuth().login(form)

    // On success, close modal
    // closeLoginModal()
  } catch (error) {
    console.error("Login error:", error);
  } finally {
    loading.value = false;
  }
};

// Reset form when modal closes
watch(isLoginModalOpen, (newVal) => {
  if (!newVal) {
    resetForm();
  }
});
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.close-button {
  font-size: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #6b7280;
  line-height: 1;
  transition: color 0.2s;
}

.close-button:hover {
  color: #1f2937;
}

.form-control {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  transition: border-color 0.2s;
}

.form-control:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.btn-primary {
  background-color: #3b82f6;
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-primary:hover:not(:disabled) {
  background-color: #2563eb;
}

.btn-primary:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: transform 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
  transform: scale(0.95);
}
</style>
