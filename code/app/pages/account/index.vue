<template>
  <div class="space-y-6">
    <!-- Page Header -->

    <!-- Profile Header -->
    <div
      class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      <!-- Cover Photo -->
      <div
        class="h-32 sm:h-48 bg-linear-to-r from-blue-500 to-purple-600 relative">
        <button
          class="cover-image-btn absolute flex justify-center top-4 right-4 p-2 bg-black/30 hover:bg-black/50 rounded-lg text-white transition-colors">
          <Icon name="lucide:camera" size="20" />
        </button>
      </div>

      <!-- Profile Info -->
      <div class="px-6 pb-6">
        <div class="flex flex-col sm:flex-row sm:space-x-6">
          <!-- Avatar -->
          <div class="-mt-16 sm:-mt-20 shrink-0">
            <div class="relative w-32 h-32">
              <NuxtImg
                src="https://i.pravatar.cc/300"
                alt="Profile Picture"
                class="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 shadow-lg object-cover" />

              <!-- Camera Button -->
              <button
                class="absolute bottom-1 right-1 flex p-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white shadow-lg transition-colors">
                <Icon name="lucide:camera" size="16" />
              </button>
            </div>
          </div>

          <div
            class="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">
            <!-- Left: Name and Username -->
            <div class="flex flex-col">
              <div class="flex items-center space-x-2">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
                  {{ profile.name }}
                </h2>
                <Icon
                  name="lucide:badge-check"
                  size="18"
                  class="text-blue-500" />
              </div>
              <p class="text-gray-500/20 dark:text-gray-400 -mt-0.5">
                @{{ profile.username }}
              </p>
            </div>

            <!-- Right: Edit Profile Button -->
            <NuxtLink
              to="/account/edit"
              class="mt-4 w-full sm:w-auto sm:mt-0 sm:ml-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors inline-flex items-center justify-center space-x-2">
              <Icon name="lucide:edit" size="18" />
              <span>Edit Profile</span>
            </NuxtLink>
          </div>
        </div>

        <!-- User Info -->
        <div class="flex-1 mt-4 sm:mt-0">
          <!-- Bio -->
          <p class="text-gray-700 dark:text-gray-300 mt-4">
            {{ profile.bio }}
          </p>

          <!-- Meta Info -->
          <div
            class="flex flex-wrap gap-4 mt-4 text-sm text-gray-600 dark:text-gray-400">
            <div class="flex items-center space-x-2">
              <Icon name="lucide:map-pin" size="16" />
              <span>{{ profile.location }}</span>
            </div>
            <div class="flex items-center space-x-2">
              <Icon name="lucide:calendar" size="16" />
              <span>Joined {{ profile.joinDate }}</span>
            </div>
            <div class="flex items-center space-x-2">
              <Icon name="lucide:link" size="16" />
              <a
                :href="profile.website"
                target="_blank"
                class="text-blue-600 dark:text-blue-400 hover:underline">
                {{ profile.website }}
              </a>
            </div>
          </div>

          <!-- Stats -->
          <div
            class="flex space-x-6 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div>
              <div class="text-2xl font-bold text-gray-900 dark:text-white">
                {{ profile.following }}
              </div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                Following
              </div>
            </div>
            <div>
              <div class="text-2xl font-bold text-gray-900 dark:text-white">
                {{ profile.followers }}
              </div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                Followers
              </div>
            </div>
            <div>
              <div class="text-2xl font-bold text-gray-900 dark:text-white">
                {{ profile.posts }}
              </div>
              <div class="text-sm text-gray-500 dark:text-gray-400">Posts</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Account Details -->
    <div
      class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Account Details
      </h3>

      <div class="space-y-4">
        <div
          class="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="flex items-center space-x-3">
            <Icon name="lucide:mail" size="20" class="text-gray-400" />
            <div>
              <p class="text-sm font-medium text-gray-900 dark:text-white">
                Email
              </p>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                {{ profile.email }}
              </p>
            </div>
          </div>
          <Icon name="lucide:check-circle" size="20" class="text-green-500" />
        </div>

        <div
          class="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="flex items-center space-x-3">
            <Icon name="lucide:phone" size="20" class="text-gray-400" />
            <div>
              <p class="text-sm font-medium text-gray-900 dark:text-white">
                Phone
              </p>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                {{ profile.phone }}
              </p>
            </div>
          </div>
          <Icon name="lucide:check-circle" size="20" class="text-green-500" />
        </div>

        <div
          class="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="flex items-center space-x-3">
            <Icon name="lucide:calendar" size="20" class="text-gray-400" />
            <div>
              <p class="text-sm font-medium text-gray-900 dark:text-white">
                Date of Birth
              </p>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                {{ profile.dateOfBirth }}
              </p>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between py-3">
          <div class="flex items-center space-x-3">
            <Icon name="lucide:shield" size="20" class="text-gray-400" />
            <div>
              <p class="text-sm font-medium text-gray-900 dark:text-white">
                Account Type
              </p>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                {{ profile.accountType }}
              </p>
            </div>
          </div>
          <span
            class="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-semibold rounded-full">
            Verified
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: "KasiPlay | Account" });
definePageMeta({
  layout: "account",
});

const profile = {
  name: "Siyavuya Chagi",
  username: "siyavuyachagi",
  email: "syavuya08@gmail.com",
  phone: "+27 63 961 5361",
  bio: "Software Developer from South Africa specializing in C#, Vue.js, and modern web technologies. Passionate about building innovative solutions.",
  location: "Cape Town, South Africa",
  website: "https://github.com/siyavuyachagi",
  joinDate: "January 2020",
  dateOfBirth: "08 January 2000",
  accountType: "Personal Account",
  following: 234,
  followers: 1523,
  posts: 89,
};
</script>
