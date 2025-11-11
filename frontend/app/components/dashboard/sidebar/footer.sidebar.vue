<template>
  <div
    class="shrink-0 p-2 lg:p-4 border-t border-gray-200 dark:border-gray-700">
    <div class="flex space-y-2">
      <div
        class="flex justify-center flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500 dark:text-gray-400">
        <!-- Theme toggle  -->
        <DashboardThemeToggleButton />

        <!-- Footer Links -->
        <NuxtLink
          v-for="(link, i) in footerLinks"
          :key="i"
          :to="link.url"
          class="hover:underline hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
          {{ link.label }}
        </NuxtLink>
      </div>
    </div>
    <p class="flex justify-center text-xs text-gray-400 dark:text-gray-500">
      © {{ new Date().getFullYear() }} KasiPlay - Kinetic Studios
    </p>
  </div>
</template>

<script setup lang="ts">
const DashboardThemeToggleButton = defineAsyncComponent(
  () => import("@/components/dashboard/buttons/theme-toggle.button.vue")
);

interface Links {
  label: string;
  url: string;
}

const footerLinks = ref<Links[]>([
  { label: "Privacy", url: "/privacy" },
  { label: "Terms", url: "/terms" },
  { label: "Help", url: "/help" },
  { label: "Docs", url: "/docs" },
]);
</script>
