<!-- components/ui/breadcrumb.vue -->
<template>
  <nav class="text-xs text-gray-500 dark:text-gray-400" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1">
      <li v-for="(item, i) in items" :key="i" class="inline-flex items-center">
        <NuxtLink
          v-if="item.to && i < items.length - 1"
          :to="item.to"
          class="hover:text-gray-900 dark:hover:text-white flex items-center gap-1">
          <span class="truncate max-w-[10rem]">{{ item.label }}</span>
        </NuxtLink>

        <span
          v-else
          class="flex items-center gap-1 text-gray-700 dark:text-gray-200 font-medium truncate max-w-[12rem]">
          {{ item.label }}
        </span>

        <!-- caret (except after last item) -->
        <svg
          v-if="i < items.length - 1"
          class="w-3 h-3 text-gray-400"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true">
          <path d="M7 5l5 5-5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

type Crumb = { label: string; to?: string | null }

const props = defineProps<{ items?: Crumb[] }>()
// default example items if none provided
const items = props.items ?? [
  { label: 'Home', to: '/' },
  { label: 'Sports', to: '/sports' },
  { label: 'Fixtures' }, // last item - current page (no link)
]
</script>

<style scoped>
/* optional: ensure truncation behaves */
ol { min-width: 0; }
</style>
