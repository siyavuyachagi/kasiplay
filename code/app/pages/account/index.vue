<template>
  <div class="space-y-6">
    <!-- Page Header -->

    <!-- Profile Header -->
    <div
      class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      <!-- Cover Photo -->
      <div class="h-32 sm:h-48 relative overflow-hidden">
        <NuxtImg
          src="/images/cover-image.jpg"
          alt="Cover Photo"
          class="w-full h-full object-cover"
          placeholder
          loading="lazy" />
        <div
          class="absolute inset-0 bg-linear-to-r from-blue-500/20 to-purple-600/20"></div>
        <button
          class="cover-image-btn absolute flex justify-center top-4 right-4 p-2 bg-black/30 hover:bg-black/50 rounded-lg text-white transition-colors z-10">
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
                src="/images/avatar.jpg"
                placeholder="/images/user.png"
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
                {{ shortNumber(profile.following) }}
              </div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                Following
              </div>
            </div>
            <div>
              <div class="text-2xl font-bold text-gray-900 dark:text-white">
                {{ shortNumber(profile.followers) }}
              </div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                Followers
              </div>
            </div>
            <div>
              <div class="text-2xl font-bold text-gray-900 dark:text-white">
                {{ shortNumber(profile.posts) }}
              </div>
              <div class="text-sm text-gray-500 dark:text-gray-400">Posts</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tabs Navigation -->
    <div
      class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
      <div class="flex overflow-x-auto">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          :class="[
            'flex items-center space-x-2 px-6 py-4 font-medium transition-colors whitespace-nowrap',
            activeTab === tab.id
              ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white',
          ]">
          <Icon :name="tab.icon" size="20" />
          <span>{{ tab.label }}</span>
        </button>
      </div>
    </div>

    <!-- Tab Content -->
    <div class="space-y-4">
      <!-- Posts Tab -->
      <div v-if="activeTab === 'posts'">
        <article
          v-for="post in userPosts"
          :key="post.id"
          class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <div class="p-3 sm:p-4">
            <div class="flex items-start space-x-3">
              <div
                :class="[
                  'w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold shrink-0',
                  post.authorGradient,
                ]">
                {{ post.authorInitials }}
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-start justify-between">
                  <div class="flex flex-wrap items-center gap-2 min-w-0">
                    <span
                      class="font-semibold text-sm sm:text-base text-gray-900 dark:text-white truncate">
                      {{ post.authorName }}
                    </span>
                    <Icon
                      v-if="post.verified"
                      name="lucide:badge-check"
                      size="16"
                      class="text-blue-500 shrink-0" />
                    <span
                      :class="[
                        'px-2 py-0.5 text-xs font-semibold rounded-full shrink-0',
                        post.authorTypeColor,
                      ]">
                      {{ post.authorType }}
                    </span>
                  </div>
                  <button
                    class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 shrink-0 ml-2">
                    <Icon name="lucide:more-horizontal" size="20" />
                  </button>
                </div>
                <div
                  class="flex flex-wrap items-center gap-1 text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span v-if="post.authorTeam">{{ post.authorTeam }}</span>
                  <span v-if="post.authorTeam">•</span>
                  <span>{{ post.timestamp }}</span>
                </div>
              </div>
            </div>

            <div class="mt-3">
              <p
                class="text-sm sm:text-base text-gray-900 dark:text-white whitespace-pre-line">
                {{ post.content }}
              </p>
              <div v-if="post.hashtags" class="mt-2 flex flex-wrap gap-2">
                <span
                  v-for="tag in post.hashtags"
                  :key="tag"
                  class="text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
                  {{ tag }}
                </span>
              </div>
            </div>

            <div v-if="post.media" class="mt-3 rounded-lg overflow-hidden">
              <div
                v-if="post.media.type === 'image'"
                class="w-full h-48 sm:h-64 md:h-80 bg-linear-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                <Icon
                  name="lucide:image"
                  size="48"
                  class="text-gray-400 dark:text-gray-500" />
              </div>
              <div
                v-else-if="post.media.type === 'video'"
                class="w-full h-48 sm:h-64 md:h-80 bg-linear-to-br from-blue-200 to-blue-300 dark:from-blue-900 dark:to-blue-800 flex items-center justify-center">
                <Icon
                  name="lucide:play-circle"
                  size="48"
                  class="text-blue-500 dark:text-blue-400" />
              </div>
            </div>

            <div
              v-if="post.matchScore"
              class="mt-3 p-3 sm:p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600">
              <div class="flex items-center justify-between gap-2">
                <div class="flex items-center space-x-2 min-w-0">
                  <div
                    class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center shrink-0">
                    <Icon
                      name="lucide:shield"
                      size="14"
                      class="text-blue-600" />
                  </div>
                  <span
                    class="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white truncate">
                    {{ post.matchScore.home }}
                  </span>
                </div>
                <div class="flex items-center space-x-2 sm:space-x-3 shrink-0">
                  <span
                    class="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white">
                    {{ post.matchScore.homeScore }} -
                    {{ post.matchScore.awayScore }}
                  </span>
                </div>
                <div class="flex items-center space-x-2 min-w-0">
                  <span
                    class="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white truncate">
                    {{ post.matchScore.away }}
                  </span>
                  <div
                    class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center shrink-0">
                    <Icon
                      name="lucide:shield"
                      size="14"
                      class="text-green-600" />
                  </div>
                </div>
              </div>
              <div
                class="text-xs text-center text-gray-500 dark:text-gray-400 mt-2">
                {{ post.matchScore.status }}
              </div>
            </div>
          </div>

          <div
            class="px-3 sm:px-4 py-3 border-t border-gray-200 dark:border-gray-700">
            <div class="flex items-center justify-between gap-1">
              <!-- Post actions -->
              <button
                class="flex items-center space-x-2 px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <Icon name="lucide:edit" size="18" />
                <span class="text-sm">Edit</span>
              </button>
              <button
                class="flex items-center space-x-2 px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <Icon name="lucide:trash-2" size="18" />
                <span class="text-sm">Delete</span>
              </button>
            </div>
          </div>
        </article>

        <div
          v-if="!userPosts.length"
          class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-12 text-center">
          <Icon
            name="lucide:file-text"
            size="48"
            class="mx-auto text-gray-400 dark:text-gray-600 mb-4" />
          <p class="text-gray-600 dark:text-gray-400">No posts yet</p>
        </div>
      </div>

      <!-- Friends Tab -->
      <div
        v-else-if="activeTab === 'friends'"
        class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-12 text-center">
        <Icon
          name="lucide:users"
          size="48"
          class="mx-auto text-gray-400 dark:text-gray-600 mb-4" />
        <p class="text-gray-600 dark:text-gray-400">Friends list coming soon</p>
      </div>

      <!-- Media Tab -->
      <div
        v-else-if="activeTab === 'media'"
        class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-12 text-center">
        <Icon
          name="lucide:image"
          size="48"
          class="mx-auto text-gray-400 dark:text-gray-600 mb-4" />
        <p class="text-gray-600 dark:text-gray-400">
          Media gallery coming soon
        </p>
      </div>

      <!-- Videos Tab -->
      <div
        v-else-if="activeTab === 'videos'"
        class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-12 text-center">
        <Icon
          name="lucide:video"
          size="48"
          class="mx-auto text-gray-400 dark:text-gray-600 mb-4" />
        <p class="text-gray-600 dark:text-gray-400">Videos coming soon</p>
      </div>

      <!-- About/Account Details Tab -->
      <div
        v-else-if="activeTab === 'about'"
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
  </div>
</template>

<script setup lang="ts">
import { shortNumber } from "~/utilities/short-number";

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
  dateOfBirth: "23 June 1997",
  accountType: "Personal Account",
  following: 234,
  followers: 1523,
  posts: 89,
};

const activeTab = ref("posts");

const tabs = [
  { id: "posts", label: "Posts", icon: "lucide:file-text" },
  { id: "friends", label: "Friends", icon: "lucide:users" },
  { id: "media", label: "Media", icon: "lucide:image" },
  { id: "videos", label: "Videos", icon: "lucide:video" },
  { id: "about", label: "About", icon: "lucide:info" },
];

// Sample user posts data
const userPosts = ref([
  {
    id: 1,
    authorName: 'Siyavuya Chagi',
    authorInitials: 'SC',
    authorGradient: 'bg-gradient-to-br from-blue-500 to-purple-600',
    verified: true,
    authorType: 'Developer',
    authorTypeColor: 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
    timestamp: '2 hours ago',
    content: 'Just finished working on a new feature for the social platform! Really excited about how it turned out. 🚀',
    hashtags: ['#coding', '#webdev', '#nuxtjs']
  }
])
</script>
