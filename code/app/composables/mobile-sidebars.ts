const isLeftSidebarOpen = useState('left-sidebar', () => false)
const isRightSidebarOpen = useState('right-sidebar', () => false)

export const useMobileSidebars = () => {

    const toggleLeftSidebar = () => {
        isLeftSidebarOpen.value = !isLeftSidebarOpen.value
        isRightSidebarOpen.value = false
    }

    const toggleRightSidebar = () => {
        isRightSidebarOpen.value = !isRightSidebarOpen.value
        isLeftSidebarOpen.value = false
    }

    const closeAllSidebars = () => {
        isLeftSidebarOpen.value = false
        isRightSidebarOpen.value = false
    }

    return {
        isLeftSidebarOpen: readonly(isLeftSidebarOpen),
        isRightSidebarOpen: readonly(isRightSidebarOpen),
        toggleLeftSidebar,
        toggleRightSidebar,
        closeAllSidebars
    }
}
