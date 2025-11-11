<template>
  <div class="p-4 lg:p-6 shrink-0">
    <div
      class="bg-linear-to-br from-purple-600 to-blue-600 rounded-lg p-4 text-white">
      <p class="text-purple-100 text-sm font-medium">Organization</p>
      <p class="text-2xl font-bold mt-1">{{ federationName }}</p>
      <div class="mt-3 grid grid-cols-2 gap-2 text-center">
        <div class="bg-white/20 rounded-lg px-2 py-2">
          <div class="text-2xl font-bold">{{ memberClubsCount }}</div>
          <div class="text-xs text-purple-100">Member Clubs</div>
        </div>
        <div class="bg-white/20 rounded-lg px-2 py-2">
          <div class="text-2xl font-bold">
            {{ activeCompetitionsCount }}
          </div>
          <div class="text-xs text-purple-100">Competitions</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const federationName = ref("South African Football Association");
const memberClubsCount = ref(32);
const activeCompetitionsCount = ref(5);
</script>
