<template>
  <div class="max-w-4xl mx-auto">
    <div
      class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
    >
      <!-- Header -->
      <div class="p-8 pb-6">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Apply for Membership
        </h1>
        <p class="text-gray-600 dark:text-gray-400">
          Join KasiPlay and start managing your sports organization
        </p>
      </div>

      <!-- Organization Type Selector -->
      <div class="px-8 pb-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            @click="applicationType = 'club'"
            class="relative p-6 rounded-xl border-2 transition-all text-left"
            :class="
              applicationType === 'club'
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
            "
          >
            <div class="flex items-start space-x-4">
              <div
                class="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0"
              >
                <icon
                  name="lucide:building-2"
                  size="24"
                  class="text-blue-600 dark:text-blue-400"
                />
              </div>
              <div class="flex-1">
                <h3 class="font-semibold text-gray-900 dark:text-white mb-1">
                  Club Application
                </h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Register your sports club or team
                </p>
              </div>
            </div>
            <div
              v-if="applicationType === 'club'"
              class="absolute top-4 right-4"
            >
              <div
                class="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center"
              >
                <icon name="lucide:check" size="16" class="text-white" />
              </div>
            </div>
          </button>

          <button
            @click="applicationType = 'federation'"
            class="relative p-6 rounded-xl border-2 transition-all text-left"
            :class="
              applicationType === 'federation'
                ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
            "
          >
            <div class="flex items-start space-x-4">
              <div
                class="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center flex-shrink-0"
              >
                <icon
                  name="lucide:shield"
                  size="24"
                  class="text-purple-600 dark:text-purple-400"
                />
              </div>
              <div class="flex-1">
                <h3 class="font-semibold text-gray-900 dark:text-white mb-1">
                  Federation Application
                </h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Register a governing body or league
                </p>
              </div>
            </div>
            <div
              v-if="applicationType === 'federation'"
              class="absolute top-4 right-4"
            >
              <div
                class="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center"
              >
                <icon name="lucide:check" size="16" class="text-white" />
              </div>
            </div>
          </button>
        </div>
      </div>

      <!-- Dynamic Form Based on Type -->
      <component
        :is="
          applicationType === 'club'
            ? ClubApplicationForm
            : FederationApplicationForm
        "
        @submit="handleSubmit"
      />

      <!-- Footer -->
      <div
        class="px-8 py-6 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-200 dark:border-gray-600"
      >
        <p class="text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?
          <nuxt-link
            to="/auth/login"
            :class="
              applicationType === 'club'
                ? 'text-blue-600 dark:text-blue-400'
                : 'text-purple-600 dark:text-purple-400'
            "
            class="font-medium hover:underline ml-1"
          >
            Sign in
          </nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

useHead({
  title: 'Kasiplay | Register'
})
definePageMeta({
  layout: "auth",
});

const applicationType = ref<"club" | "federation">("club");

// Lazy load form components
const ClubApplicationForm = defineAsyncComponent(
  () => import("~/components/clubApplicationForm.vue")
);
const FederationApplicationForm = defineAsyncComponent(
  () => import("~/components/governingBodyApplicationForm.vue")
);

const handleSubmit = async (formData: any) => {
  console.log("Application submitted:", formData);
  // TODO: Handle application submission
  navigateTo("/auth/application-submitted");
};
</script>
