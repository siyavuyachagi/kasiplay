<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div
      class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
        Preferences
      </h1>
      <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
        Customize your experience on KasiPlay
      </p>
    </div>

    <!-- Display Preferences -->
    <div
      class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Display
      </h3>

      <div class="space-y-4">
        <!-- Theme -->
        <div class="py-4 border-b border-gray-200 dark:border-gray-700">
          <div class="flex items-center justify-between mb-3">
            <div>
              <p class="font-medium text-gray-900 dark:text-white">Theme</p>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                Choose your interface theme
              </p>
            </div>
          </div>
          <div class="grid grid-cols-3 gap-4">
            <button
              v-for="theme in themes"
              :key="theme.value"
              @click="preferences.theme = theme.value"
              :class="[
                'p-4 rounded-lg border-2 transition-all',
                preferences.theme === theme.value
                  ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600',
              ]">
              <Icon
                :name="theme.icon"
                size="24"
                :class="theme.iconColor"
                class="mx-auto mb-2" />
              <p class="text-sm font-medium text-gray-900 dark:text-white">
                {{ theme.label }}
              </p>
            </button>
          </div>
        </div>

        <!-- Font Size -->
        <div class="py-4 border-b border-gray-200 dark:border-gray-700">
          <div class="flex items-center justify-between mb-3">
            <div>
              <p class="font-medium text-gray-900 dark:text-white">Font Size</p>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                Adjust text size
              </p>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <span class="text-sm text-gray-600 dark:text-gray-400">Small</span>
            <input
              v-model="preferences.fontSize"
              type="range"
              min="12"
              max="20"
              step="2"
              class="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600" />
            <span class="text-sm text-gray-600 dark:text-gray-400">Large</span>
          </div>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Current size: {{ preferences.fontSize }}px
          </p>
        </div>

        <!-- Compact Mode -->
        <div class="flex items-center justify-between py-4">
          <div>
            <p class="font-medium text-gray-900 dark:text-white">
              Compact Mode
            </p>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              Show more content on screen
            </p>
          </div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input
              v-model="preferences.compactMode"
              type="checkbox"
              class="sr-only peer" />
            <div
              class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
    </div>

    <!-- Content Preferences -->
    <div
      class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Content
      </h3>

      <div class="space-y-4">
        <div
          class="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700">
          <div>
            <p class="font-medium text-gray-900 dark:text-white">
              Auto-play Videos
            </p>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              Videos play automatically in feed
            </p>
          </div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input
              v-model="preferences.autoplayVideos"
              type="checkbox"
              class="sr-only peer" />
            <div
              class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div
          class="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700">
          <div>
            <p class="font-medium text-gray-900 dark:text-white">
              Show Sensitive Content
            </p>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              Display content marked as sensitive
            </p>
          </div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input
              v-model="preferences.showSensitiveContent"
              type="checkbox"
              class="sr-only peer" />
            <div
              class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div class="py-4 border-b border-gray-200 dark:border-gray-700">
          <div class="flex items-center justify-between mb-3">
            <div>
              <p class="font-medium text-gray-900 dark:text-white">
                Default Feed
              </p>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                Choose your default feed view
              </p>
            </div>
          </div>
          <select
            v-model="preferences.defaultFeed"
            class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
            <option value="all">All Posts</option>
            <option value="following">Following</option>
            <option value="clubs">Clubs</option>
            <option value="players">Players</option>
          </select>
        </div>

        <div class="flex items-center justify-between py-4">
          <div>
            <p class="font-medium text-gray-900 dark:text-white">
              Data Saver Mode
            </p>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              Reduce data usage by loading lower quality media
            </p>
          </div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input
              v-model="preferences.dataSaver"
              type="checkbox"
              class="sr-only peer" />
            <div
              class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
    </div>

    <!-- Interaction Preferences -->
    <div
      class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Interactions
      </h3>

      <div class="space-y-4">
        <div
          class="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700">
          <div>
            <p class="font-medium text-gray-900 dark:text-white">
              Keyboard Shortcuts
            </p>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              Enable keyboard navigation
            </p>
          </div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input
              v-model="preferences.keyboardShortcuts"
              type="checkbox"
              class="sr-only peer" />
            <div
              class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div
          class="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700">
          <div>
            <p class="font-medium text-gray-900 dark:text-white">
              Sound Effects
            </p>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              Play sounds for actions
            </p>
          </div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input
              v-model="preferences.soundEffects"
              type="checkbox"
              class="sr-only peer" />
            <div
              class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div class="flex items-center justify-between py-4">
          <div>
            <p class="font-medium text-gray-900 dark:text-white">
              Confirm Before Posting
            </p>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              Show confirmation dialog before posting
            </p>
          </div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input
              v-model="preferences.confirmBeforePosting"
              type="checkbox"
              class="sr-only peer" />
            <div
              class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
    </div>

    <!-- Save Button -->
    <div class="flex justify-end">
      <button
        @click="savePreferences"
        :disabled="loading"
        class="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors disabled:opacity-50">
        <span v-if="!loading">Save Preferences</span>
        <span v-else class="flex items-center space-x-2">
          <Icon name="lucide:loader-2" size="16" class="animate-spin" />
          <span>Saving...</span>
        </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: "KasiPlay | Preferences" });
definePageMeta({
  layout: "account",
});

const loading = ref(false);

const themes = [
  {
    value: "light",
    label: "Light",
    icon: "lucide:sun",
    iconColor: "text-yellow-500",
  },
  {
    value: "dark",
    label: "Dark",
    icon: "lucide:moon",
    iconColor: "text-blue-500",
  },
  {
    value: "auto",
    label: "Auto",
    icon: "lucide:monitor",
    iconColor: "text-gray-500",
  },
];

const preferences = reactive({
  theme: "auto",
  fontSize: 16,
  compactMode: false,
  autoplayVideos: true,
  showSensitiveContent: false,
  defaultFeed: "all",
  dataSaver: false,
  keyboardShortcuts: true,
  soundEffects: false,
  confirmBeforePosting: false,
});

const savePreferences = async () => {
  loading.value = true;
  try {
    // TODO: Implement API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Preferences saved:", preferences);
  } catch (error) {
    console.error("Error saving preferences:", error);
  } finally {
    loading.value = false;
  }
};
</script>
