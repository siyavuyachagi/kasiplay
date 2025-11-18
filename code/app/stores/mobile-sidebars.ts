export const useMobileSidebarStore = defineStore('mobile-sidebars-store', () => {

    const isLeftSidebarOpen = ref(false);
    const isRightSidebarOpen = ref(false);

    function toggleLeft() {
        isLeftSidebarOpen.value = !isLeftSidebarOpen.value;
        isRightSidebarOpen.value = false;
    }

    function toggleRight() {
        isRightSidebarOpen.value = !isRightSidebarOpen.value;
        isLeftSidebarOpen.value = false;
    }

    function closeAll() {
        isLeftSidebarOpen.value = false;
        isRightSidebarOpen.value = false;
    }

    return {
        isLeftSidebarOpen: readonly(isLeftSidebarOpen),
        isRightSidebarOpen: readonly(isRightSidebarOpen),
        toggleLeft,
        toggleRight,
        closeAll
    }
});