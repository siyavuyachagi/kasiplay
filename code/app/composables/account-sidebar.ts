// composables/use-account-sidebar.ts
const isAccountSidebarOpen = useState('account-sidebar', () => false)

export const useAccountSidebar = () => {
    const toggleAccountSidebar = () => {
        isAccountSidebarOpen.value = !isAccountSidebarOpen.value
    }

    const closeAccountSidebar = () => {
        isAccountSidebarOpen.value = false
    }

    return {
        isAccountSidebarOpen: readonly(isAccountSidebarOpen),
        toggleAccountSidebar,
        closeAccountSidebar
    }
}