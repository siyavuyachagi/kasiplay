export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore()
  
  // Define public routes that don't require authentication
  const publicRoutes = ['/auth/login', '/auth/register', '/auth/forgot-password']
  
  // If user is not authenticated and trying to access a protected route
  if (!authStore.isAuthenticated && !publicRoutes.includes(to.path)) {
    return navigateTo('/auth/login')
  }
  
  // If user is authenticated and trying to access login page, redirect to dashboard
  if (authStore.isAuthenticated && to.path === '/auth/login') {
    return navigateTo('/dashboard')
  }
})