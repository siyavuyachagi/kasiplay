<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Settings</h1>
      <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
        Manage your account settings and preferences
      </p>
    </div>

    <!-- Account Settings -->
    <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Account Settings</h3>
      
      <div class="space-y-4">
        <!-- Change Password -->
        <div class="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700">
          <div>
            <p class="font-medium text-gray-900 dark:text-white">Password</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">Change your password</p>
          </div>
          <button
            @click="showPasswordModal = true"
            class="px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-colors">
            Change
          </button>
        </div>

        <!-- Two-Factor Authentication -->
        <div class="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700">
          <div>
            <p class="font-medium text-gray-900 dark:text-white">Two-Factor Authentication</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">Add an extra layer of security</p>
          </div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input v-model="settings.twoFactorEnabled" type="checkbox" class="sr-only peer">
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <!-- Email Verification -->
        <div class="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700">
          <div>
            <p class="font-medium text-gray-900 dark:text-white">Email Verification</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              <span class="inline-flex items-center">
                <Icon name="lucide:check-circle" size="16" class="text-green-500 mr-1" />
                Your email is verified
              </span>
            </p>
          </div>
        </div>

        <!-- Phone Verification -->
        <div class="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700">
          <div>
            <p class="font-medium text-gray-900 dark:text-white">Phone Verification</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              <span class="inline-flex items-center">
                <Icon name="lucide:check-circle" size="16" class="text-green-500 mr-1" />
                Your phone is verified
              </span>
            </p>
          </div>
        </div>

        <!-- Language -->
        <div class="flex items-center justify-between py-4">
          <div>
            <p class="font-medium text-gray-900 dark:text-white">Language</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">Choose your preferred language</p>
          </div>
          <select
            v-model="settings.language"
            class="px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
            <option value="en">English</option>
            <option value="af">Afrikaans</option>
            <option value="xh">IsiXhosa</option>
            <option value="zu">IsiZulu</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Privacy Settings -->
    <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Privacy</h3>
      
      <div class="space-y-4">
        <div class="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700">
          <div>
            <p class="font-medium text-gray-900 dark:text-white">Private Account</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">Only followers can see your posts</p>
          </div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input v-model="settings.privateAccount" type="checkbox" class="sr-only peer">
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div class="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700">
          <div>
            <p class="font-medium text-gray-900 dark:text-white">Show Activity Status</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">Let others see when you're online</p>
          </div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input v-model="settings.showActivityStatus" type="checkbox" class="sr-only peer">
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div class="flex items-center justify-between py-4">
          <div>
            <p class="font-medium text-gray-900 dark:text-white">Search Engine Indexing</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">Allow search engines to find your profile</p>
          </div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input v-model="settings.searchIndexing" type="checkbox" class="sr-only peer">
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
    </div>

    <!-- Data & Storage -->
    <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Data & Storage</h3>
      
      <div class="space-y-4">
        <div class="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700">
          <div>
            <p class="font-medium text-gray-900 dark:text-white">Download Your Data</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">Get a copy of your data</p>
          </div>
          <button class="px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-colors">
            Request
          </button>
        </div>

        <div class="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700">
          <div>
            <p class="font-medium text-gray-900 dark:text-white">Storage Used</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">1.2 GB of 5 GB used</p>
          </div>
          <div class="w-32">
            <div class="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div class="h-full bg-blue-600" style="width: 24%"></div>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between py-4">
          <div>
            <p class="font-medium text-gray-900 dark:text-white">Clear Cache</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">Free up space by clearing cache</p>
          </div>
          <button class="px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-colors">
            Clear
          </button>
        </div>
      </div>
    </div>

    <!-- Danger Zone -->
    <div class="bg-white dark:bg-gray-800 rounded-lg border border-red-200 dark:border-red-900 p-6">
      <h3 class="text-lg font-semibold text-red-600 dark:text-red-400 mb-4">Danger Zone</h3>
      
      <div class="space-y-4">
        <div class="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700">
          <div>
            <p class="font-medium text-gray-900 dark:text-white">Deactivate Account</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">Temporarily disable your account</p>
          </div>
          <button class="px-4 py-2 bg-yellow-100 dark:bg-yellow-900/20 hover:bg-yellow-200 dark:hover:bg-yellow-900/40 text-yellow-700 dark:text-yellow-400 rounded-lg font-medium transition-colors">
            Deactivate
          </button>
        </div>

        <div class="flex items-center justify-between py-4">
          <div>
            <p class="font-medium text-gray-900 dark:text-white">Delete Account</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">Permanently delete your account</p>
          </div>
          <button class="px-4 py-2 bg-red-100 dark:bg-red-900/20 hover:bg-red-200 dark:hover:bg-red-900/40 text-red-700 dark:text-red-400 rounded-lg font-medium transition-colors">
            Delete
          </button>
        </div>
      </div>
    </div>

    <!-- Save Button -->
    <div class="flex justify-end">
      <button
        @click="saveSettings"
        :disabled="loading"
        class="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors disabled:opacity-50">
        <span v-if="!loading">Save Settings</span>
        <span v-else class="flex items-center space-x-2">
          <Icon name="lucide:loader-2" size="16" class="animate-spin" />
          <span>Saving...</span>
        </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'account'
})

const loading = ref(false)
const showPasswordModal = ref(false)

const settings = reactive({
  twoFactorEnabled: false,
  language: 'en',
  privateAccount: false,
  showActivityStatus: true,
  searchIndexing: true
})

const saveSettings = async () => {
  loading.value = true
  try {
    // TODO: Implement API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    console.log('Settings saved:', settings)
  } catch (error) {
    console.error('Error saving settings:', error)
  } finally {
    loading.value = false
  }
}
</script>