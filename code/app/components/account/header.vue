<template>
  <header
    class="sticky top-0 z-20 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo & Back -->
        <div class="flex items-center space-x-4">
          <NuxtLink
            to="/"
            class="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <NuxtImg
              src="/favicon.svg"
              alt="Logo"
              class="w-6 h-6 object-contain" />
            <span
              class="text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              KasiPlay
            </span>
          </NuxtLink>
        </div>

        <!-- Right Actions -->
        <div class="flex items-center space-x-2">
          <button
            class="flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <Icon name="lucide:log-out" size="18" class="inline-block mr-2" />
            Logout
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
