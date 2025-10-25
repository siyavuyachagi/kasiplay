<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Top Navigation Bar -->
    <nav class="sticky top-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-14">
          <!-- Left: Logo & Menu Toggle -->
          <div class="flex items-center space-x-3">
            <!-- Mobile: Sidebar Toggle -->
            <button
              @click="leftSidebarOpen = !leftSidebarOpen"
              class="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <icon name="lucide:menu" size="20" class="text-gray-700 dark:text-gray-300" />
            </button>

            <!-- Logo -->
            <nuxt-link to="/" class="flex items-center space-x-2">
              <div class="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span class="text-white text-lg font-bold">⚽</span>
              </div>
              <span class="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hidden sm:inline">
                KasiPlay
              </span>
            </nuxt-link>
          </div>

          <!-- Center: Search Bar (Desktop) -->
          <div class="hidden md:flex flex-1 max-w-xl mx-4">
            <div class="relative w-full">
              <icon name="lucide:search" size="18" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search teams, players, matches..."
                class="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 border border-transparent focus:border-blue-500 rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none transition-colors">
            </div>
          </div>

          <!-- Right: Actions -->
          <div class="flex items-center space-x-2">
            <!-- Mobile: Search Toggle -->
            <button
              class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <icon name="lucide:search" size="20" class="text-gray-700 dark:text-gray-300" />
            </button>

            <!-- Theme Toggle -->
            <button
              @click="toggleTheme"
              class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <icon v-if="isDark" name="lucide:sun" size="20" class="text-yellow-500" />
              <icon v-else name="lucide:moon" size="20" class="text-gray-600 dark:text-gray-400" />
            </button>

            <!-- Notifications (Guest) -->
            <button class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors relative">
              <icon name="lucide:bell" size="20" class="text-gray-700 dark:text-gray-300" />
              <span class="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <!-- Mobile: Right Sidebar Toggle -->
            <button
              @click="rightSidebarOpen = !rightSidebarOpen"
              class="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <icon name="lucide:panel-right" size="20" class="text-gray-700 dark:text-gray-300" />
            </button>

            <!-- Sign In Button (Desktop) -->
            <nuxt-link
              to="/auth/login"
              class="hidden md:inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors text-sm">
              <icon name="lucide:log-in" size="18" />
              <span>Sign In</span>
            </nuxt-link>

            <!-- Account Menu Toggle (When Logged In - Future) -->
            <!-- <button class="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <div class="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-semibold">
                SC
              </div>
            </button> -->
          </div>
        </div>
      </div>
    </nav>

    <!-- Live Match Banner -->
    <div class="sticky top-14 z-40 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 shadow-lg">
      <div class="container mx-auto flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <span class="relative flex h-2.5 w-2.5">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>
          <span class="font-semibold text-sm">LIVE</span>
          <span class="text-sm hidden sm:inline">Chiefs FC 2-1 Pirates United • 67'</span>
          <span class="text-sm sm:hidden">Chiefs 2-1 Pirates • 67'</span>
        </div>
        <nuxt-link
          to="/matches/live/1"
          class="px-3 py-1 bg-white text-red-600 rounded-md font-medium hover:bg-gray-100 transition-colors text-sm">
          Watch →
        </nuxt-link>
      </div>
    </div>

    <!-- Main Container -->
    <div class="container mx-auto px-4 py-6">
      <div class="grid lg:grid-cols-12 gap-6">
        <!-- Left Sidebar -->
        <aside
          :class="[
            'lg:col-span-3 space-y-4',
            'fixed lg:static inset-y-0 left-0 z-30 w-64 lg:w-auto bg-gray-50 dark:bg-gray-900 lg:bg-transparent overflow-y-auto transition-transform duration-300',
            leftSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          ]"
          style="top: 112px; height: calc(100vh - 112px);">
          <!-- Close Button (Mobile) -->
          <div class="lg:hidden flex justify-end p-4">
            <button
              @click="leftSidebarOpen = false"
              class="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <icon name="lucide:x" size="20" class="text-gray-700 dark:text-gray-300" />
            </button>
          </div>
          <!-- Quick Navigation -->
          <div
            class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden sticky top-20">
            <div class="p-3 bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700">
              <h3 class="font-semibold text-sm text-gray-900 dark:text-white">Navigation</h3>
            </div>
            <nav class="p-2">
              <nuxt-link
                v-for="link in navigationLinks"
                :key="link.path"
                :to="link.path"
                class="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300 group">
                <icon :name="link.icon" size="20" :class="link.color" />
                <span class="text-sm font-medium">{{ link.label }}</span>
              </nuxt-link>
            </nav>
          </div>

          <!-- Trending Topics -->
          <div
            class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div class="p-3 bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700">
              <h3 class="font-semibold text-sm text-gray-900 dark:text-white flex items-center space-x-2">
                <icon name="lucide:trending-up" size="16" class="text-orange-500" />
                <span>Trending</span>
              </h3>
            </div>
            <div class="p-2">
              <div
                v-for="trend in trendingTopics"
                :key="trend.tag"
                class="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors cursor-pointer">
                <div class="flex items-center justify-between">
                  <div>
                    <div class="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      {{ trend.tag }}
                    </div>
                    <div class="text-xs text-gray-500 dark:text-gray-400">
                      {{ trend.posts }} posts
                    </div>
                  </div>
                  <icon name="lucide:flame" size="16" class="text-orange-500" />
                </div>
              </div>
            </div>
          </div>

          <!-- Upcoming Fixtures Widget -->
          <div
            class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div class="p-3 bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700">
              <h3 class="font-semibold text-sm text-gray-900 dark:text-white flex items-center space-x-2">
                <icon name="lucide:calendar" size="16" class="text-blue-600" />
                <span>Today's Fixtures</span>
              </h3>
            </div>
            <div class="divide-y divide-gray-200 dark:divide-gray-700">
              <div
                v-for="fixture in todayFixtures"
                :key="fixture.id"
                class="p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer">
                <div class="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
                  <span>{{ fixture.time }}</span>
                  <span>{{ fixture.competition }}</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-medium text-gray-900 dark:text-white">{{ fixture.homeTeam }}</span>
                  <span class="text-xs text-gray-500">vs</span>
                  <span class="text-sm font-medium text-gray-900 dark:text-white">{{ fixture.awayTeam }}</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <!-- Main Feed (Center) -->
        <main class="lg:col-span-6 space-y-4">
          <!-- Create Post Card -->
          <div
            class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
            <div class="flex space-x-3">
              <div
                class="w-10 h-10 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center text-white font-semibold flex-shrink-0">
                ?
              </div>
              <button
                class="flex-1 text-left px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                Share your thoughts...
              </button>
            </div>
            <div class="flex items-center justify-between mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
              <div class="flex space-x-2">
                <button
                  class="flex items-center space-x-1 px-3 py-1.5 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors">
                  <icon name="lucide:image" size="18" />
                  <span>Photo</span>
                </button>
                <button
                  class="flex items-center space-x-1 px-3 py-1.5 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors">
                  <icon name="lucide:video" size="18" />
                  <span>Video</span>
                </button>
              </div>
              <nuxt-link
                to="/auth/login"
                class="text-sm text-blue-600 hover:text-blue-700 font-medium">
                Sign in to post
              </nuxt-link>
            </div>
          </div>

          <!-- Filter Tabs -->
          <div
            class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <div class="flex items-center space-x-1 p-2 border-b border-gray-200 dark:border-gray-700">
              <button
                v-for="filter in feedFilters"
                :key="filter.id"
                :class="[
                  'px-4 py-2 text-sm font-medium rounded-md transition-colors',
                  activeFilter === filter.id
                    ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                ]"
                @click="activeFilter = filter.id">
                {{ filter.label }}
              </button>
            </div>
          </div>

          <!-- Posts Feed -->
          <article
            v-for="post in feedPosts"
            :key="post.id"
            class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <!-- Post Header -->
            <div class="p-4">
              <div class="flex items-start space-x-3">
                <div
                  :class="[
                    'w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0',
                    post.authorGradient
                  ]">
                  {{ post.authorInitials }}
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center space-x-2 flex-wrap">
                    <span class="font-semibold text-gray-900 dark:text-white">{{ post.authorName }}</span>
                    <span
                      v-if="post.verified"
                      class="flex-shrink-0">
                      <icon name="lucide:badge-check" size="16" class="text-blue-500" />
                    </span>
                    <span
                      :class="[
                        'px-2 py-0.5 text-xs font-semibold rounded-full flex-shrink-0',
                        post.authorTypeColor
                      ]">
                      {{ post.authorType }}
                    </span>
                  </div>
                  <div class="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    <span v-if="post.authorTeam">{{ post.authorTeam }}</span>
                    <span v-if="post.authorTeam">•</span>
                    <span>{{ post.timestamp }}</span>
                  </div>
                </div>
                <button
                  class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                  <icon name="lucide:more-horizontal" size="20" />
                </button>
              </div>

              <!-- Post Content -->
              <div class="mt-3">
                <p class="text-gray-900 dark:text-white whitespace-pre-line">{{ post.content }}</p>
                <div v-if="post.hashtags" class="mt-2 flex flex-wrap gap-2">
                  <span
                    v-for="tag in post.hashtags"
                    :key="tag"
                    class="text-sm text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
                    {{ tag }}
                  </span>
                </div>
              </div>

              <!-- Post Media -->
              <div v-if="post.media" class="mt-3 rounded-lg overflow-hidden">
                <div
                  v-if="post.media.type === 'image'"
                  class="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                  <icon name="lucide:image" size="64" class="text-gray-400 dark:text-gray-500" />
                </div>
                <div
                  v-else-if="post.media.type === 'video'"
                  class="w-full h-96 bg-gradient-to-br from-blue-200 to-blue-300 dark:from-blue-900 dark:to-blue-800 flex items-center justify-center">
                  <icon name="lucide:play-circle" size="64" class="text-blue-500 dark:text-blue-400" />
                </div>
              </div>

              <!-- Match Score Card (if applicable) -->
              <div
                v-if="post.matchScore"
                class="mt-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600">
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                      <icon name="lucide:shield" size="16" class="text-blue-600" />
                    </div>
                    <span class="font-semibold text-gray-900 dark:text-white">{{ post.matchScore.home }}</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <span class="text-2xl font-bold text-gray-900 dark:text-white">
                      {{ post.matchScore.homeScore }} - {{ post.matchScore.awayScore }}
                    </span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <span class="font-semibold text-gray-900 dark:text-white">{{ post.matchScore.away }}</span>
                    <div class="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                      <icon name="lucide:shield" size="16" class="text-green-600" />
                    </div>
                  </div>
                </div>
                <div class="text-xs text-center text-gray-500 dark:text-gray-400 mt-2">
                  {{ post.matchScore.status }}
                </div>
              </div>
            </div>

            <!-- Post Actions -->
            <div class="px-4 py-3 border-t border-gray-200 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <button
                  class="flex items-center space-x-2 px-3 py-1.5 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-md transition-colors">
                  <icon name="lucide:heart" size="20" />
                  <span class="text-sm font-medium">{{ post.likes }}</span>
                </button>
                <button
                  class="flex items-center space-x-2 px-3 py-1.5 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/10 rounded-md transition-colors">
                  <icon name="lucide:message-circle" size="20" />
                  <span class="text-sm font-medium">{{ post.comments }}</span>
                </button>
                <button
                  class="flex items-center space-x-2 px-3 py-1.5 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/10 rounded-md transition-colors">
                  <icon name="lucide:repeat-2" size="20" />
                  <span class="text-sm font-medium">{{ post.shares }}</span>
                </button>
                <button
                  class="flex items-center space-x-2 px-3 py-1.5 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/10 rounded-md transition-colors">
                  <icon name="lucide:share-2" size="20" />
                </button>
              </div>
            </div>

            <!-- Comments Preview (if has comments) -->
            <div
              v-if="post.topComment"
              class="px-4 py-3 bg-gray-50 dark:bg-gray-700/30 border-t border-gray-200 dark:border-gray-700">
              <div class="flex items-start space-x-2">
                <div class="w-6 h-6 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
                  {{ post.topComment.authorInitials }}
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center space-x-2">
                    <span class="text-sm font-semibold text-gray-900 dark:text-white">
                      {{ post.topComment.author }}
                    </span>
                    <span class="text-xs text-gray-500 dark:text-gray-400">
                      {{ post.topComment.timestamp }}
                    </span>
                  </div>
                  <p class="text-sm text-gray-700 dark:text-gray-300 mt-1">
                    {{ post.topComment.content }}
                  </p>
                </div>
              </div>
              <button class="text-xs text-blue-600 dark:text-blue-400 hover:underline mt-2">
                View all {{ post.comments }} comments
              </button>
            </div>
          </article>

          <!-- Load More -->
          <div class="flex justify-center py-4">
            <button
              class="px-6 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              Load more posts
            </button>
          </div>
        </main>

        <!-- Right Sidebar -->
        <aside
          :class="[
            'lg:col-span-3 space-y-4',
            'fixed lg:static inset-y-0 right-0 z-30 w-80 lg:w-auto bg-gray-50 dark:bg-gray-900 lg:bg-transparent overflow-y-auto transition-transform duration-300',
            rightSidebarOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
          ]"
          style="top: 112px; height: calc(100vh - 112px);">
          <!-- Close Button (Mobile) -->
          <div class="lg:hidden flex justify-end p-4">
            <button
              @click="rightSidebarOpen = false"
              class="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <icon name="lucide:x" size="20" class="text-gray-700 dark:text-gray-300" />
            </button>
          </div>
          <!-- Announcements -->
          <div
            class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden sticky top-20">
            <div class="p-3 bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700">
              <h3 class="font-semibold text-sm text-gray-900 dark:text-white flex items-center space-x-2">
                <icon name="lucide:megaphone" size="16" class="text-yellow-500" />
                <span>Announcements</span>
              </h3>
            </div>
            <div class="p-3 space-y-3">
              <div
                v-for="announcement in announcements"
                :key="announcement.id"
                class="p-2 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-md transition-colors cursor-pointer">
                <div class="flex items-start space-x-2">
                  <icon
                    :name="announcement.icon"
                    size="14"
                    :class="announcement.color"
                    class="mt-1 flex-shrink-0" />
                  <div class="flex-1 min-w-0">
                    <h4 class="text-xs font-semibold text-gray-900 dark:text-white line-clamp-2">
                      {{ announcement.title }}
                    </h4>
                    <p class="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                      {{ announcement.content }}
                    </p>
                    <span class="text-xs text-gray-400 dark:text-gray-500 mt-1 block">
                      {{ announcement.time }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- League Table -->
          <div
            class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div class="p-3 bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700">
              <h3 class="font-semibold text-sm text-gray-900 dark:text-white flex items-center space-x-2">
                <icon name="lucide:trophy" size="16" class="text-yellow-500" />
                <span>League Standings</span>
              </h3>
            </div>
            <div class="p-2">
              <div
                v-for="(team, index) in leagueStandings"
                :key="team.id"
                class="flex items-center space-x-2 px-2 py-1.5 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-md transition-colors">
                <div class="w-5 text-xs font-bold text-gray-500 dark:text-gray-400 text-center">
                  {{ index + 1 }}
                </div>
                <div class="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <icon name="lucide:shield" size="12" class="text-white" />
                </div>
                <span class="flex-1 text-xs font-medium text-gray-900 dark:text-white truncate">
                  {{ team.name }}
                </span>
                <span class="text-xs font-bold text-gray-900 dark:text-white">
                  {{ team.points }}
                </span>
              </div>
            </div>
          </div>

          <!-- Who to Follow -->
          <div
            class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div class="p-3 bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700">
              <h3 class="font-semibold text-sm text-gray-900 dark:text-white">Who to Follow</h3>
            </div>
            <div class="p-2">
              <div
                v-for="suggestion in followSuggestions"
                :key="suggestion.id"
                class="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-md transition-colors">
                <div class="flex items-center space-x-2 flex-1 min-w-0">
                  <div
                    :class="[
                      'w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-semibold flex-shrink-0',
                      suggestion.gradient
                    ]">
                    {{ suggestion.initials }}
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center space-x-1">
                      <span class="text-xs font-semibold text-gray-900 dark:text-white truncate">
                        {{ suggestion.name }}
                      </span>
                      <icon
                        v-if="suggestion.verified"
                        name="lucide:badge-check"
                        size="12"
                        class="text-blue-500 flex-shrink-0" />
                    </div>
                    <span
                      :class="['text-xs', suggestion.typeColor]">
                      {{ suggestion.type }}
                    </span>
                  </div>
                </div>
                <button
                  class="px-3 py-1 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors flex-shrink-0">
                  Follow
                </button>
              </div>
            </div>
          </div>

          <!-- Footer Links -->
          <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-3">
            <div class="flex flex-wrap gap-2 text-xs text-gray-500 dark:text-gray-400">
              <a href="/about" class="hover:underline">About</a>
              <span>•</span>
              <a href="/help" class="hover:underline">Help</a>
              <span>•</span>
              <a href="/terms" class="hover:underline">Terms</a>
              <span>•</span>
              <a href="/privacy" class="hover:underline">Privacy</a>
            </div>
            <p class="text-xs text-gray-400 dark:text-gray-500 mt-2">
              © 2025 KasiPlay
            </p>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const activeFilter = ref('all');

interface NavigationLink {
  label: string;
  path: string;
  icon: string;
  color: string;
}

interface FeedFilter {
  id: string;
  label: string;
}

interface Post {
  id: number;
  authorName: string;
  authorInitials: string;
  authorType: 'Federation' | 'Club' | 'Player' | 'Fan' | 'Official';
  authorTypeColor: string;
  authorGradient: string;
  authorTeam?: string;
  verified: boolean;
  timestamp: string;
  content: string;
  hashtags?: string[];
  media?: {
    type: 'image' | 'video';
  };
  matchScore?: {
    home: string;
    away: string;
    homeScore: number;
    awayScore: number;
    status: string;
  };
  likes: number;
  comments: number;
  shares: number;
  topComment?: {
    author: string;
    authorInitials: string;
    content: string;
    timestamp: string;
  };
}

const navigationLinks: NavigationLink[] = [
  { label: 'Home', path: '/', icon: 'lucide:home', color: 'text-blue-600' },
  { label: 'Matches', path: '/matches', icon: 'lucide:calendar', color: 'text-green-600' },
  { label: 'Teams', path: '/teams', icon: 'lucide:users', color: 'text-purple-600' },
  { label: 'Players', path: '/players', icon: 'lucide:user', color: 'text-orange-600' },
  { label: 'News', path: '/news', icon: 'lucide:newspaper', color: 'text-pink-600' },
  { label: 'Gallery', path: '/gallery', icon: 'lucide:image', color: 'text-indigo-600' },
];

const feedFilters: FeedFilter[] = [
  { id: 'all', label: 'All Posts' },
  { id: 'federations', label: 'Federations' },
  { id: 'clubs', label: 'Clubs' },
  { id: 'players', label: 'Players' },
  { id: 'fans', label: 'Fans' },
];

const trendingTopics = [
  { tag: '#KasiPremierLeague', posts: 1234 },
  { tag: '#ChiefsVsPirates', posts: 892 },
  { tag: '#PlayerOfTheMonth', posts: 567 },
  { tag: '#LocalFootball', posts: 445 },
];

const todayFixtures = [
  { id: 1, time: '15:00', competition: 'KPL', homeTeam: 'Ajax CT', awayTeam: 'Celtic' },
  { id: 2, time: '17:00', competition: 'Cup', homeTeam: 'Pretoria', awayTeam: 'Durban' },
  { id: 3, time: '19:00', competition: 'KPL', homeTeam: 'Alexandra', awayTeam: 'Tembisa' },
];

const feedPosts: Post[] = [
  {
    id: 1,
    authorName: 'SAFA Gauteng',
    authorInitials: 'SG',
    authorType: 'Federation',
    authorTypeColor: 'bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400',
    authorGradient: 'bg-gradient-to-br from-purple-500 to-purple-700',
    verified: true,
    timestamp: '2 hours ago',
    content: '🏆 ANNOUNCEMENT: The Kasi Premier League Finals have been scheduled for December 15th at FNB Stadium!\n\nTicket sales open November 1st. This is going to be the biggest event of the year! 🎉',
    hashtags: ['#KasiPremierLeague', '#SAFAGauteng', '#Finals2025'],
    likes: 2453,
    comments: 189,
    shares: 567,
    topComment: {
      author: 'Thabo M.',
      authorInitials: 'TM',
      content: "Can't wait! Already planning to take the whole family 🔥",
      timestamp: '1 hour ago',
    },
  },
  {
    id: 2,
    authorName: 'Chiefs FC Official',
    authorInitials: 'CF',
    authorType: 'Club',
    authorTypeColor: 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
    authorGradient: 'bg-gradient-to-br from-blue-500 to-blue-700',
    authorTeam: 'Chiefs FC',
    verified: true,
    timestamp: '3 hours ago',
    content: 'FULL TIME! What a performance from the boys! ⚽🔥\n\nSibusiso with another brace! That\'s 15 goals this season. MVP material right there! 👑',
    hashtags: ['#ChiefsFC', '#KasiPremierLeague', '#Amakhosi'],
    media: { type: 'image' },
    matchScore: {
      home: 'Chiefs FC',
      away: 'Pirates United',
      homeScore: 3,
      awayScore: 1,
      status: 'Full Time',
    },
    likes: 3891,
    comments: 432,
    shares: 289,
    topComment: {
      author: 'Nomsa D.',
      authorInitials: 'ND',
      content: 'Sibusiso is on fire this season! 🔥🔥🔥',
      timestamp: '2 hours ago',
    },
  },
  {
    id: 3,
    authorName: 'Sibusiso Mthembu',
    authorInitials: 'SM',
    authorType: 'Player',
    authorTypeColor: 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400',
    authorGradient: 'bg-gradient-to-br from-green-500 to-green-700',
    authorTeam: 'Chiefs FC',
    verified: true,
    timestamp: '5 hours ago',
    content: 'Big game today! 💪 Been working hard all week in training. Time to show what we\'re made of. Let\'s get this W for the fans! 🦅\n\n#Matchday #ChiefsFC',
    hashtags: ['#Matchday', '#ChiefsFC', '#Focus'],
    media: { type: 'image' },
    likes: 1823,
    comments: 267,
    shares: 145,
  },
  {
    id: 4,
    authorName: 'Thabo "TK" Khumalo',
    authorInitials: 'TK',
    authorType: 'Fan',
    authorTypeColor: 'bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400',
    authorGradient: 'bg-gradient-to-br from-orange-500 to-orange-700',
    verified: false,
    timestamp: '8 hours ago',
    content: 'Who else is hyped for today\'s derby?! 🔥 Chiefs vs Pirates is always fire! Predictions?\n\nI\'m going 2-1 Chiefs. Sibusiso to score first! ⚽',
    hashtags: ['#SowetoDerby', '#KasiFootball', '#Predictions'],
    likes: 634,
    comments: 198,
    shares: 42,
    topComment: {
      author: 'Mandla S.',
      authorInitials: 'MS',
      content: 'Pirates 3-2! We coming for that top spot 💪',
      timestamp: '7 hours ago',
    },
  },
  {
    id: 5,
    authorName: 'Pirates United Official',
    authorInitials: 'PU',
    authorType: 'Club',
    authorTypeColor: 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
    authorGradient: 'bg-gradient-to-br from-gray-700 to-gray-900',
    authorTeam: 'Pirates United',
    verified: true,
    timestamp: '10 hours ago',
    content: '🏴‍☠️ SQUAD ANNOUNCEMENT 🏴‍☠️\n\nOur starting XI for today\'s massive clash! Coach has made some interesting changes. What do you think of the lineup? 👀',
    hashtags: ['#PiratesUnited', '#SquadAnnouncement', '#OnceAPirate'],
    media: { type: 'image' },
    likes: 2156,
    comments: 387,
    shares: 203,
  },
  {
    id: 6,
    authorName: 'Referee David Mokoena',
    authorInitials: 'DM',
    authorType: 'Official',
    authorTypeColor: 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400',
    authorGradient: 'bg-gradient-to-br from-yellow-500 to-yellow-700',
    verified: true,
    timestamp: '12 hours ago',
    content: 'Looking forward to officiating today\'s big game. Expecting a competitive but fair match. Let\'s keep it clean and respect the beautiful game! ⚽👏',
    hashtags: ['#Respect', '#FairPlay', '#KasiFootball'],
    likes: 892,
    comments: 56,
    shares: 28,
  },
  {
    id: 7,
    authorName: 'Lindiwe Nkosi',
    authorInitials: 'LN',
    authorType: 'Fan',
    authorTypeColor: 'bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400',
    authorGradient: 'bg-gradient-to-br from-pink-500 to-pink-700',
    verified: false,
    timestamp: '1 day ago',
    content: 'Just want to appreciate how KasiPlay has brought our community together! ❤️ We can now follow all our local teams and players. This is what we needed! 🙌',
    hashtags: ['#KasiPlay', '#CommunityFirst', '#LocalFootball'],
    likes: 1456,
    comments: 134,
    shares: 89,
    topComment: {
      author: 'Senzo W.',
      authorInitials: 'SW',
      content: 'Facts! Finally we have a platform for our local heroes 💯',
      timestamp: '23 hours ago',
    },
  },
  {
    id: 8,
    authorName: 'Sundowns FC',
    authorInitials: 'SF',
    authorType: 'Club',
    authorTypeColor: 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
    authorGradient: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
    authorTeam: 'Sundowns FC',
    verified: true,
    timestamp: '1 day ago',
    content: '📸 BEHIND THE SCENES\n\nTraining session highlights from this week. The team is looking sharp! 💪⚽\n\nWho\'s coming to watch us on Saturday?',
    hashtags: ['#Sundowns', '#Training', '#BehindTheScenes'],
    media: { type: 'video' },
    likes: 2789,
    comments: 312,
    shares: 198,
  },
];

const announcements = [
  {
    id: 1,
    title: 'Season Finals - Dec 15',
    content: 'Championship finals at FNB Stadium. Tickets on sale Nov 1st.',
    time: '2 hours ago',
    icon: 'lucide:trophy',
    color: 'text-yellow-500',
  },
  {
    id: 2,
    title: 'New Team Registration',
    content: '2026 season registration opens November 1st.',
    time: '1 day ago',
    icon: 'lucide:clipboard-check',
    color: 'text-blue-500',
  },
  {
    id: 3,
    title: 'Player of the Month Voting',
    content: 'Cast your vote! Voting closes Oct 31st.',
    time: '2 days ago',
    icon: 'lucide:star',
    color: 'text-purple-500',
  },
  {
    id: 4,
    title: 'Youth Development Program',
    content: 'Applications now open for U-17 academy.',
    time: '3 days ago',
    icon: 'lucide:users',
    color: 'text-green-500',
  },
];

const leagueStandings = [
  { id: 1, name: 'Chiefs FC', points: 39 },
  { id: 2, name: 'Pirates United', points: 37 },
  { id: 3, name: 'Sundowns FC', points: 35 },
  { id: 4, name: 'Orlando Stars', points: 31 },
  { id: 5, name: 'Mamelodi FC', points: 29 },
  { id: 6, name: 'Ajax Cape Town', points: 27 },
];

const followSuggestions = [
  {
    id: 1,
    name: 'Zahara Dlamini',
    initials: 'ZD',
    type: 'Rising Star',
    typeColor: 'text-green-600 dark:text-green-400',
    gradient: 'bg-gradient-to-br from-green-500 to-green-700',
    verified: false,
  },
  {
    id: 2,
    name: 'Orlando Stars',
    initials: 'OS',
    type: 'Club',
    typeColor: 'text-blue-600 dark:text-blue-400',
    gradient: 'bg-gradient-to-br from-orange-500 to-orange-700',
    verified: true,
  },
  {
    id: 3,
    name: 'SAFA Western Cape',
    initials: 'SW',
    type: 'Federation',
    typeColor: 'text-purple-600 dark:text-purple-400',
    gradient: 'bg-gradient-to-br from-purple-500 to-purple-700',
    verified: true,
  },
  {
    id: 4,
    name: 'Coach Mandla',
    initials: 'CM',
    type: 'Coach',
    typeColor: 'text-indigo-600 dark:text-indigo-400',
    gradient: 'bg-gradient-to-br from-indigo-500 to-indigo-700',
    verified: false,
  },
];
</script>