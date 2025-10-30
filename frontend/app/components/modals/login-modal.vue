<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isOpen" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="text-2xl font-bold">Sign In</h2>
            <button @click="closeModal" class="close-button">&times;</button>
          </div>

          <form @submit.prevent="handleLogin">
            <div class="mb-4">
              <label class="block mb-2">Email</label>
              <input
                type="email"
                v-model="form.email"
                class="form-control"
                required />
            </div>

            <div class="mb-4">
              <label class="block mb-2">Password</label>
              <input
                type="password"
                v-model="form.password"
                class="form-control"
                required />
            </div>

            <div class="flex justify-between items-center mb-4">
              <label class="flex items-center">
                <input type="checkbox" v-model="form.remember" />
                <span class="ml-2">Remember me</span>
              </label>
              <NuxtLink
                to="/auth/reset-password"
                class="text-blue-600"
                @click="closeModal">
                Forgot Password?
              </NuxtLink>
            </div>

            <button
              type="submit"
              class="w-full btn-primary"
              :disabled="loading">
              {{ loading ? "Signing in..." : "Sign In" }}
            </button>
          </form>

          <div class="mt-4 text-center">
            <p>
              Don't have an account?
              <NuxtLink
                to="/account/register"
                class="text-blue-600"
                @click="closeModal">
                Sign up
              </NuxtLink>
            </p>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const isOpen = ref(false);
const loading = ref(false);
const form = reactive({
  email: "",
  password: "",
  remember: false,
});

const closeModal = () => {
  isOpen.value = false;
  resetForm();
};

const openModal = () => {
  isOpen.value = true;
};

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
    // closeModal()
  } catch (error) {
    console.error("Login error:", error);
  } finally {
    loading.value = false;
  }
};

// Expose methods
defineExpose({
  openModal,
  closeModal,
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
