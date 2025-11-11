<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
          Governance
        </h1>
        <p class="text-gray-600 dark:text-gray-400 mt-1">
          Rules, regulations, and organizational policies
        </p>
      </div>
      <button
        class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center space-x-2">
        <icon name="lucide:plus" size="18" />
        <span>Add Document</span>
      </button>
    </div>

    <!-- Quick Stats -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
        <div class="text-3xl font-bold text-gray-900 dark:text-white mb-1">
          12
        </div>
        <div class="text-sm text-gray-600 dark:text-gray-400">
          Active Policies
        </div>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
        <div class="text-3xl font-bold text-gray-900 dark:text-white mb-1">
          5
        </div>
        <div class="text-sm text-gray-600 dark:text-gray-400">
          Competition Rules
        </div>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
        <div class="text-3xl font-bold text-gray-900 dark:text-white mb-1">
          8
        </div>
        <div class="text-sm text-gray-600 dark:text-gray-400">
          Member Guidelines
        </div>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
        <div class="text-3xl font-bold text-gray-900 dark:text-white mb-1">
          3
        </div>
        <div class="text-sm text-gray-600 dark:text-gray-400">
          Pending Updates
        </div>
      </div>
    </div>

    <!-- Document Categories -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div
        v-for="category in categories"
        :key="category.title"
        class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <div class="p-6 border-b border-gray-200 dark:border-gray-700">
          <div class="flex items-center space-x-3">
            <div
              class="w-10 h-10 rounded-lg flex items-center justify-center"
              :class="category.color">
              <icon :name="category.icon" size="20" class="text-white" />
            </div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white">
                {{ category.title }}
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                {{ category.count }} documents
              </p>
            </div>
          </div>
        </div>
        <div class="p-4 space-y-2">
          <div
            v-for="doc in category.documents"
            :key="doc.id"
            class="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
            <div class="flex items-center space-x-3">
              <icon name="lucide:file-text" size="16" class="text-gray-400" />
              <div>
                <div class="text-sm font-medium text-gray-900 dark:text-white">
                  {{ doc.name }}
                </div>
                <div class="text-xs text-gray-500 dark:text-gray-400">
                  Updated {{ doc.updated }}
                </div>
              </div>
            </div>
            <button class="p-1 hover:bg-gray-100 dark:hover:bg-gray-600 rounded">
              <icon name="lucide:download" size="16" class="text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard-2-col-layout",
});

const categories = [
  {
    title: "Competition Rules",
    icon: "lucide:trophy",
    color: "bg-blue-600",
    count: 5,
    documents: [
      { id: 1, name: "League Rules 2024/25", updated: "2 days ago" },
      { id: 2, name: "Cup Competition Format", updated: "1 week ago" },
      { id: 3, name: "Player Eligibility Rules", updated: "2 weeks ago" },
    ],
  },
  {
    title: "Member Guidelines",
    icon: "lucide:building-2",
    color: "bg-green-600",
    count: 8,
    documents: [
      { id: 4, name: "Club Membership Requirements", updated: "3 days ago" },
      { id: 5, name: "Code of Conduct", updated: "1 week ago" },
      { id: 6, name: "Financial Obligations", updated: "2 weeks ago" },
    ],
  },
  {
    title: "Disciplinary Procedures",
    icon: "lucide:scale",
    color: "bg-red-600",
    count: 4,
    documents: [
      { id: 7, name: "Disciplinary Code", updated: "1 day ago" },
      { id: 8, name: "Appeals Process", updated: "5 days ago" },
      { id: 9, name: "Sanctions Guidelines", updated: "1 week ago" },
    ],
  },
  {
    title: "Administrative Policies",
    icon: "lucide:file-text",
    color: "bg-purple-600",
    count: 6,
    documents: [
      { id: 10, name: "Registration Procedures", updated: "4 days ago" },
      { id: 11, name: "Transfer Regulations", updated: "1 week ago" },
      { id: 12, name: "Data Protection Policy", updated: "2 weeks ago" },
    ],
  },
];
</script>