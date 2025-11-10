<template>
  <div
    class="sticky top-14 bg-linear-to-r from-red-500 to-red-600 text-white shadow-lg z-5">
    <div class="max-w-7xl mx-auto px-4 py-2">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2 sm:space-x-3">
          <span class="relative flex h-2.5 w-2.5">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span
              class="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>
          <span class="font-semibold text-xs sm:text-sm">LIVE</span>
          <span class="text-xs sm:text-sm"
            >Red Swallows 2-1 Classic FC • 67'</span
          >
        </div>
        <nuxt-link
          :to="`/matches/live/f64115fa-ec5e-4335-aa7f-24711379a2a3`"
          class="px-3 py-1 bg-white text-red-600 rounded-md font-medium hover:bg-gray-100 transition-colors text-xs sm:text-sm whitespace-nowrap">
          Watch
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
