
export const useMobileSidebars = () => {
    const isLeftSidebarOpen = ref(false)
    const isRightSidebarOpen = ref(false)

    const toggleLeftSidebar = () => {
        isLeftSidebarOpen.value = !isLeftSidebarOpen.value;
        isRightSidebarOpen.value = false;
        console.log('Toggled left sidebar:', isLeftSidebarOpen.value);
    };

    const toggleRightSidebar = () => {
        isRightSidebarOpen.value = !isRightSidebarOpen.value;
        isLeftSidebarOpen.value = false;
        console.log('Toggled right sidebar:', isRightSidebarOpen.value);
    };

    return {
        isLeftSidebarOpen: readonly(isLeftSidebarOpen),
        isRightSidebarOpen: readonly(isRightSidebarOpen),
        toggleLeftSidebar,
        toggleRightSidebar,
    };
}