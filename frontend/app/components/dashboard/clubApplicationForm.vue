<template>
  <form @submit.prevent="handleSubmit" class="px-8 pb-8 space-y-6">
    <!-- Organization Information -->
    <div class="space-y-4">
      <h3
        class="text-lg font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
        <icon name="lucide:building-2" size="20" class="text-blue-600" />
        <span>Organization Information</span>
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Club Name *
          </label>
          <input
            v-model="formData.organizationName"
            type="text"
            required
            class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            placeholder="Orlando Pirates FC" />
        </div>

        <div>
          <label
            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Founded Year
          </label>
          <input
            v-model="formData.foundedYear"
            type="number"
            min="1800"
            :max="new Date().getFullYear()"
            class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            placeholder="1937" />
        </div>

        <div class="md:col-span-2">
          <label
            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Short Name/Abbreviation
          </label>
          <input
            v-model="formData.shortName"
            type="text"
            class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            placeholder="Pirates" />
        </div>
      </div>
    </div>

    <!-- Contact Person -->
    <div class="space-y-4">
      <h3
        class="text-lg font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
        <icon name="lucide:user" size="20" class="text-blue-600" />
        <span>Contact Person</span>
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Full Name *
          </label>
          <input
            v-model="formData.contactPerson"
            type="text"
            required
            class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            placeholder="John Doe" />
        </div>

        <div>
          <label
            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email Address *
          </label>
          <input
            v-model="formData.emailAddress"
            type="email"
            required
            class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            placeholder="contact@club.com" />
        </div>

        <div>
          <label
            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Phone Number *
          </label>
          <input
            v-model="formData.phoneNumber"
            type="tel"
            required
            class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            placeholder="+27 12 345 6789" />
        </div>
      </div>
    </div>

    <!-- Address -->
    <div class="space-y-4">
      <h3
        class="text-lg font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
        <icon name="lucide:map-pin" size="20" class="text-blue-600" />
        <span>Address</span>
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="md:col-span-2">
          <label
            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Street Address *
          </label>
          <input
            v-model="formData.address.street"
            type="text"
            required
            class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            placeholder="123 Main Street" />
        </div>

        <div>
          <label
            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            City *
          </label>
          <input
            v-model="formData.address.city"
            type="text"
            required
            class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            placeholder="Johannesburg" />
        </div>

        <div>
          <label
            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            State/Province *
          </label>
          <input
            v-model="formData.address.state"
            type="text"
            required
            class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            placeholder="Gauteng" />
        </div>

        <div>
          <label
            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Country *
          </label>
          <input
            v-model="formData.address.country"
            type="text"
            required
            class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            placeholder="South Africa" />
        </div>

        <div>
          <label
            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Postal Code *
          </label>
          <input
            v-model="formData.address.postalCode"
            type="text"
            required
            class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            placeholder="2000" />
        </div>
      </div>
    </div>

    <!-- Subscription Plan -->
    <div class="space-y-4">
      <h3
        class="text-lg font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
        <icon name="lucide:credit-card" size="20" class="text-blue-600" />
        <span>Subscription Plan</span>
      </h3>

      <!-- Free Trial Notice -->
      <div
        class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 text-blue-800 dark:text-blue-300 p-3 rounded-lg text-center mb-2">
        Enjoy a 30-day free trial — you won’t be charged until your trial period
        ends.
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          v-for="plan in subscriptionPlans"
          :key="plan.id"
          @click="formData.subscriptionPlanId = plan.id"
          class="p-4 rounded-lg border-2 cursor-pointer transition-all"
          :class="
            formData.subscriptionPlanId === plan.id
              ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
              : 'border-gray-200 dark:border-gray-600 hover:border-gray-300'
          ">
          <h4 class="font-semibold text-gray-900 dark:text-white mb-1">
            {{ plan.name }}
          </h4>
          <p class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            {{ plan.price }}
          </p>
          <ul class="space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li
              v-for="feature in plan.features"
              :key="feature"
              class="flex items-start space-x-2">
              <icon
                name="lucide:check"
                size="16"
                class="text-green-500 mt-0.5 flex-shrink-0" />
              <span>{{ feature }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Trial Disclaimer -->
      <p class="text-sm text-gray-500 dark:text-gray-400 text-center">
        You won’t be charged until after your 30-day free trial. Cancel anytime.
      </p>
    </div>

    <!-- Submit Button -->
    <div
      class="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
      <nuxt-link
        to="/auth/login"
        class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">
        ← Back to login
      </nuxt-link>
      <button
        type="submit"
        :disabled="loading"
        class="px-8 py-3 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-500/50 transition-all disabled:opacity-50">
        <span v-if="!loading">Submit Application</span>
        <span v-else class="flex items-center space-x-2">
          <icon name="lucide:loader-2" size="20" class="animate-spin" />
          <span>Submitting...</span>
        </span>
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
const emit = defineEmits(["submit"]);

const loading = ref(false);
const formData = ref({
  organizationName: "",
  shortName: "",
  foundedYear: null,
  contactPerson: "",
  emailAddress: "",
  phoneNumber: "",
  address: {
    street: "",
    city: "",
    state: "",
    country: "South Africa",
    postalCode: "",
  },
  subscriptionPlanId: "basic",
});

const subscriptionPlans = [
  {
    id: "basic",
    name: "Basic",
    price: "R499/mo",
    features: ["Up to 30 players", "Basic analytics", "Email support"],
  },
  {
    id: "pro",
    name: "Pro",
    price: "R999/mo",
    features: [
      "Unlimited players",
      "Advanced analytics",
      "Priority support",
      "Custom branding",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    features: [
      "Everything in Pro",
      "Dedicated support",
      "API access",
      "Custom integrations",
    ],
  },
];

const handleSubmit = async () => {
  loading.value = true;
  try {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    emit("submit", { ...formData.value, type: "club" });
  } finally {
    loading.value = false;
  }
};
</script>
