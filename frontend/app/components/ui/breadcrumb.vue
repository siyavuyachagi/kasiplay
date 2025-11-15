<!-- components/ui/breadcrumb.vue -->
<template>
  <nav
    class="text-xs text-gray-500 dark:text-gray-400"
    aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 min-w-0">
      <li
        v-for="(item, i) in breadcrumbs"
        :key="i"
        class="inline-flex items-center">
        <NuxtLink
          v-if="item.route && i < breadcrumbs.length - 1"
          :to="item.route"
          class="hover:text-gray-900 dark:hover:text-white flex items-center gap-1">
          <span class="truncate max-w-40">{{ item.label }}</span>
        </NuxtLink>

        <span
          v-else
          class="flex items-center gap-1 text-gray-700 dark:text-gray-200 font-medium truncate max-w-[12rem]">
          {{ item.label }}
        </span>

        <!-- caret (except after last item) -->
        <icon
          v-if="i < breadcrumbs.length - 1"
          name="lucide:chevron-right"
          size="14"
          class="text-gray-400" />
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">

type Crumb = { label: string; route?: string | null; icon?: string };
const props = defineProps<{ links?: Crumb[] }>();
// Add default "Home" crumb at the beginning
const breadcrumbs = computed<Crumb[]>(() => [
  { label: "Home", route: "/" },
  ...(props.links ?? []),
]);
</script>
