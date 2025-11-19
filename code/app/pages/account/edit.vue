<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Edit Profile</h1>
      <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
        Update your profile information and public visibility
      </p>
    </div>

    <!-- Edit Form -->
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <!-- Personal Information -->
      <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Personal Information</h3>
        
        <div class="space-y-4">
          <!-- Full Name -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Full Name
            </label>
            <input
              v-model="form.name"
              type="text"
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Siyavuya Chagi" />
          </div>

          <!-- Username -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Username
            </label>
            <div class="relative">
              <span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">@</span>
              <input
                v-model="form.username"
                type="text"
                class="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="siyavuyachagi" />
            </div>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Your username will be visible in your profile URL
            </p>
          </div>

          <!-- Bio -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Bio
            </label>
            <textarea
              v-model="form.bio"
              rows="4"
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              placeholder="Tell us about yourself..."></textarea>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {{ form.bio.length }} / 500 characters
            </p>
          </div>

          <!-- Location -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Location
              </label>
              <div class="relative">
                <Icon name="lucide:map-pin" size="20" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  v-model="form.location"
                  type="text"
                  class="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Cape Town, South Africa" />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Website
              </label>
              <div class="relative">
                <Icon name="lucide:link" size="20" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  v-model="form.website"
                  type="url"
                  class="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="https://example.com" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Information -->
      <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h3>
        
        <div class="space-y-4">
          <!-- Email -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email Address
            </label>
            <div class="relative">
              <Icon name="lucide:mail" size="20" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                v-model="form.email"
                type="email"
                class="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="email@example.com" />
              <span class="absolute right-3 top-1/2 -translate-y-1/2">
                <Icon name="lucide:check-circle" size="20" class="text-green-500" />
              </span>
            </div>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Your email is verified
            </p>
          </div>

          <!-- Phone -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Phone Number
            </label>
            <div class="relative">
              <Icon name="lucide:phone" size="20" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                v-model="form.phone"
                type="tel"
                class="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="+27 00 000 0000" />
              <span class="absolute right-3 top-1/2 -translate-y-1/2">
                <Icon name="lucide:check-circle" size="20" class="text-green-500" />
              </span>
            </div>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Your phone number is verified
            </p>
          </div>
        </div>
      </div>

      <!-- Social Links -->
      <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Social Links</h3>
        
        <div class="space-y-4">
          <div v-for="social in socialLinks" :key="social.name">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {{ social.label }}
            </label>
            <div class="relative">
              <Icon :name="social.icon" size="20" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                v-model="form.social[social.name]"
                type="text"
                class="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                :placeholder="social.placeholder" />
            </div>
          </div>
        </div>
      </div>

      <!-- Actions -->
      <div class="flex items-center justify-end space-x-4">
        <NuxtLink
          to="/account/profile"
          class="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
          Cancel
        </NuxtLink>
        <button
          type="submit"
          :disabled="loading"
          class="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors disabled:opacity-50">
          <span v-if="!loading">Save Changes</span>
          <span v-else class="flex items-center space-x-2">
            <Icon name="lucide:loader-2" size="16" class="animate-spin" />
            <span>Saving...</span>
          </span>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'account'
})

const loading = ref(false)

const form = reactive({
  name: 'Siyavuya Chagi',
  username: 'siyavuyachagi',
  bio: 'Software Developer from South Africa specializing in C#, Vue.js, and modern web technologies.',
  location: 'Cape Town, South Africa',
  website: 'https://github.com/siyavuyachagi',
  email: 'syavuya08@gmail.com',
  phone: '+27 63 961 5361',
  social: {
    twitter: '',
    github: '@siyavuyachagi',
    linkedin: '',
    instagram: ''
  }
})

const socialLinks = [
  { name: 'twitter', label: 'Twitter', icon: 'lucide:twitter', placeholder: '@username' },
  { name: 'github', label: 'GitHub', icon: 'lucide:github', placeholder: '@username' },
  { name: 'linkedin', label: 'LinkedIn', icon: 'lucide:linkedin', placeholder: 'linkedin.com/in/username' },
  { name: 'instagram', label: 'Instagram', icon: 'lucide:instagram', placeholder: '@username' }
]

const handleSubmit = async () => {
  loading.value = true
  try {
    // TODO: Implement API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    console.log('Profile updated:', form)
  } catch (error) {
    console.error('Error updating profile:', error)
  } finally {
    loading.value = false
  }
}
</script>