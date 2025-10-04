<!-- pages/dashboard/index.vue -->
<template>
  <component 
    :is="dashboardComponent" 
    :organization="currentOrganization" 
  />
</template>

<script setup>
const currentOrganization = computed(() => authStore.user.organization)

const dashboardComponent = computed(() => {
  switch(currentOrganization.value.type) {
    case 'club': return resolveComponent('DashboardClub')
    case 'governing_body': return resolveComponent('DashboardGoverningBody')
    default: return resolveComponent('DashboardDefault')
  }
})
</script>