<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Header -->
    <DashboardHeader @toggle-sidebar="toggleSidebar" />
    
    <!-- Main Layout with Sidebar -->
    <div class="flex">
      <!-- Sidebar -->
      <DashboardSidebar :is-mobile-open="isSidebarOpen" @close="closeSidebar" />
      
      <!-- Main Content -->
      <main class="flex-1 w-full lg:w-auto p-6">
        <slot />
      </main>
    </div>
    
    <!-- Footer -->
    <DashboardFooter />
  </div>
</template>

<script setup lang="ts">
// Layout for authenticated organizations (Federation / Club) dashboard

const isSidebarOpen = ref(false)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const closeSidebar = () => {
  isSidebarOpen.value = false
}

// Close sidebar on route change
watch(() => useRoute().path, () => {
  closeSidebar()
})
</script>