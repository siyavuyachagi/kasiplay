<!-- pages/index.vue -->
<!-- Redirects to relevant dashboard based on user role -->
<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="text-center">
      <div
        class="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
      <p class="mt-4 text-gray-600">Redirecting to your dashboard...</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useApi } from "~/composables/api";
import type { ApplicationUser } from "~/models/ApplicationUsers";

definePageMeta({
  layout: "dashboard",
});

const authStore = useAuthStore();
const router = useRouter();

onMounted(async () => {
  if (authStore.user) {
    // Fetch user role/type from your database or user metadata
    const {
      data: userAccount,
      status,
      error,
      refresh,
    } = await useApi<ApplicationUser>("user-account", "/api/user/account");

    console.log("User Account Data:", userAccount.value);
  } else {
    router.push("error");
  }
});
</script>
