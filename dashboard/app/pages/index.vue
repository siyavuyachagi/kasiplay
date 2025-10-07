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
definePageMeta({
  layout: "auth",
});

const authStore = useAuthStore();
const router = useRouter();

onMounted(async () => {
  if (authStore.user) {
    // Fetch user role/type from your database or user metadata
    const { data: profile } = await useSupabaseClient()
      .from("profiles") // Adjust table name as needed
      .select("user_type")
      .eq("id", user.value.id)
      .single();

    if (profile?.user_type === "club") {
      router.push("/dashboard/club");
    } else if (profile?.user_type === "governing-body") {
      router.push("/dashboard/governing-body");
    } else {
      // Fallback if role is not set
      router.push("/dashboard/club");
    }
  } else {
    router.push("error");
  }
});
</script>

