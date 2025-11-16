<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Header - Always visible (NO wrapper, just the slot) -->
    <slot name="header"></slot>

    <!-- Mobile Overlay: Left Sidebar -->
    <Transition
      enter-active-class="transition-transform duration-300 ease-out"
      enter-from-class="-translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition-transform duration-300 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="-translate-x-full">
      <aside
        v-if="layoutStore.isLeftSidebarOpen"
        class="fixed inset-y-0 left-0 z-40 w-80 bg-white shadow-xl overflow-y-auto lg:hidden">
        <div class="p-4">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-lg font-semibold text-gray-900 dark:text-white">Menu</h2>
            <button
              @click="layoutStore.toggleSidebar('left')"
              class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              <Icon name="lucide:x" size="20" class="text-gray-600 dark:text-gray-300" />
            </button>
          </div>
          <slot name="sidebar-left"></slot>
        </div>
      </aside>
    </Transition>

    <!-- Mobile Overlay: Right Sidebar -->
    <Transition
      enter-active-class="transition-transform duration-300 ease-out"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition-transform duration-300 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full">
      <aside
        v-if="layoutStore.isRightSidebarOpen"
        class="fixed inset-y-0 right-0 z-40 w-80 bg-white shadow-xl overflow-y-auto lg:hidden">
        <div class="p-4">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-lg font-semibold text-gray-900 dark:text-white">Fixtures</h2>
            <button
              @click="layoutStore.toggleSidebar('right')"
              class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              <Icon name="lucide:x" size="20" class="text-gray-600 dark:text-gray-300" />
            </button>
          </div>
          <slot name="sidebar-right"></slot>
        </div>
      </aside>
    </Transition>

    <!-- Backdrop Overlay -->
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0">
      <div
        v-if="layoutStore.isLeftSidebarOpen || layoutStore.isRightSidebarOpen"
        @click="layoutStore.closeAllSidebars()"
        class="fixed inset-0 bg-black/50 z-30 lg:hidden"></div>
    </Transition>

    <!-- Main Grid Layout (Desktop) -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 max-w-7xl mx-auto px-4 py-4">
      <!-- Left Sidebar (Desktop) -->
      <aside
        v-if="$slots['sidebar-left']"
        class="hidden lg:block lg:col-span-3 h-fit sticky top-20">
        <slot name="sidebar-left"></slot>
      </aside>

      <!-- Main Content -->
      <main :class="['col-span-1', mainColSpan]">
        <slot></slot>
      </main>

      <!-- Right Sidebar (Desktop) -->
      <aside
        v-if="$slots['sidebar-right']"
        class="hidden lg:block lg:col-span-3 h-fit sticky top-20">
        <slot name="sidebar-right"></slot>
      </aside>
    </div>

    <!-- Footer -->
    <footer v-if="$slots.footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from "vue";

const slots = useSlots();
const layoutStore = useFrontendLayoutStore();

const mainColSpan = computed(() => {
  const hasLeft = !!slots["sidebar-left"];
  const hasRight = !!slots["sidebar-right"];

  if (hasLeft && hasRight) {
    return "lg:col-span-6";
  } else if (hasLeft || hasRight) {
    return "lg:col-span-9";
  } else {
    return "lg:col-span-12";
  }
});
</script>