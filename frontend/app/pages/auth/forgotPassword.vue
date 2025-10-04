<template>
  <div class="max-w-md mx-auto">
    <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
      <!-- Header -->
      <div class="p-8 pb-6">
        <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
          <icon name="lucide:lock-keyhole" size="24" class="text-white" />
        </div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">
          Forgot Password?
        </h1>
        <p class="text-gray-600 dark:text-gray-400 text-center">
          No worries! Enter your email and we'll send you reset instructions.
        </p>
      </div>

      <!-- Success Message -->
      <div
        v-if="emailSent"
        class="mx-8 mb-6 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
      >
        <div class="flex items-start space-x-3">
          <icon name="lucide:check-circle" size="20" class="text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
          <div>
            <h3 class="text-sm font-medium text-green-900 dark:text-green-100">
              Email sent successfully!
            </h3>
            <p class="text-sm text-green-700 dark:text-green-300 mt-1">
              We've sent password reset instructions to <strong>{{ email }}</strong>. 
              Please check your inbox and spam folder.
            </p>
          </div>
        </div>
      </div>

      <!-- Error Message -->
      <div
        v-if="errorMessage"
        class="mx-8 mb-6 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
      >
        <div class="flex items-start space-x-3">
          <icon name="lucide:alert-circle" size="20" class="text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
          <div>
            <h3 class="text-sm font-medium text-red-900 dark:text-red-100">
              Error
            </h3>
            <p class="text-sm text-red-700 dark:text-red-300 mt-1">
              {{ errorMessage }}
            </p>
          </div>
        </div>
      </div>

      <!-- Form -->
      <form v-if="!emailSent" @submit.prevent="handleSubmit" class="px-8 pb-8 space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email Address
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <icon name="lucide:mail" size="20" class="text-gray-400" />
            </div>
            <input
              v-model="email"
              type="email"
              required
              class="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <button
          type="submit"
          :disabled="loading"
          class="w-full py-3 px-4 rounded-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:ring-4 focus:ring-blue-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span v-if="!loading">Send Reset Link</span>
          <span v-else class="flex items-center justify-center space-x-2">
            <icon name="lucide:loader-2" size="20" class="animate-spin" />
            <span>Sending...</span>
          </span>
        </button>
      </form>

      <!-- Success Actions -->
      <div v-if="emailSent" class="px-8 pb-8 space-y-3">
        <button
          @click="resendEmail"
          :disabled="resendLoading || resendTimer > 0"
          class="w-full py-3 px-4 rounded-lg font-medium text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span v-if="!resendLoading && resendTimer === 0">Resend Email</span>
          <span v-else-if="resendLoading" class="flex items-center justify-center space-x-2">
            <icon name="lucide:loader-2" size="20" class="animate-spin" />
            <span>Resending...</span>
          </span>
          <span v-else>Resend in {{ resendTimer }}s</span>
        </button>

        <nuxt-link
          to="/auth/login"
          class="w-full py-3 px-4 rounded-lg font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center space-x-2"
        >
          <icon name="lucide:arrow-left" size="16" />
          <span>Back to Login</span>
        </nuxt-link>
      </div>

      <!-- Footer -->
      <div class="px-8 py-6 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-200 dark:border-gray-600">
        <div class="flex items-center justify-center space-x-4 text-sm">
          <nuxt-link
            to="/auth/login"
            class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center space-x-1"
          >
            <icon name="lucide:arrow-left" size="14" />
            <span>Back to Login</span>
          </nuxt-link>
          <span class="text-gray-300 dark:text-gray-600">•</span>
          <nuxt-link
            to="/auth/register"
            class="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            Create Account
          </nuxt-link>
        </div>
      </div>
    </div>

    <!-- Additional Help -->
    <div class="mt-6 text-center">
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
        Need help? Contact our support team
      </p>
      <a
        href="mailto:support@kasiplay.com"
        class="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
      >
        support@kasiplay.com
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})

const email = ref('')
const loading = ref(false)
const emailSent = ref(false)
const errorMessage = ref('')
const resendLoading = ref(false)
const resendTimer = ref(0)

let timerInterval: NodeJS.Timeout | null = null

const handleSubmit = async () => {
  loading.value = true
  errorMessage.value = ''

  try {
    // TODO: Implement actual password reset API call
    console.log('Sending password reset to:', email.value)

    // Simulate API call
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate random success/failure for demo
        const success = Math.random() > 0.2 // 80% success rate
        if (success) {
          resolve(true)
        } else {
          reject(new Error('Email address not found in our system'))
        }
      }, 1500)
    })

    emailSent.value = true
    startResendTimer()
  } catch (error: any) {
    errorMessage.value = error.message || 'Failed to send reset email. Please try again.'
  } finally {
    loading.value = false
  }
}

const resendEmail = async () => {
  resendLoading.value = true
  errorMessage.value = ''

  try {
    // TODO: Implement actual resend API call
    console.log('Resending password reset to:', email.value)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    startResendTimer()
  } catch (error: any) {
    errorMessage.value = error.message || 'Failed to resend email. Please try again.'
  } finally {
    resendLoading.value = false
  }
}

const startResendTimer = () => {
  resendTimer.value = 60 // 60 seconds cooldown

  if (timerInterval) {
    clearInterval(timerInterval)
  }

  timerInterval = setInterval(() => {
    resendTimer.value--
    if (resendTimer.value <= 0) {
      if (timerInterval) {
        clearInterval(timerInterval)
        timerInterval = null
      }
    }
  }, 1000)
}

// Cleanup timer on unmount
onUnmounted(() => {
  if (timerInterval) {
    clearInterval(timerInterval)
  }
})
</script>