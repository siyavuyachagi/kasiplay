<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <div class="max-w-4xl mx-auto p-4 space-y-4">
      <!-- Back Button -->
      <button
        @click="handleBack"
        class="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
        <Icon name="lucide:arrow-left" size="20" />
        <span>Back</span>
      </button>

      <!-- Page Header -->
      <div
        class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <div class="flex items-center justify-between mb-4">
          <div>
            <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
              Notifications
            </h1>
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Stay updated with your activity
            </p>
          </div>
          <button
            @click="markAllAsRead"
            class="px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors">
            Select
          </button>
          <button
            @click="markAllAsRead"
            class="px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors">
            Mark all as read
          </button>
        </div>

        <!-- Filter Tabs -->
        <div
          class="flex space-x-2 border-b border-gray-200 dark:border-gray-700">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="activeTab = tab.id"
            class="px-4 py-2 text-sm font-medium transition-colors relative"
            :class="
              activeTab === tab.id
                ? 'text-blue-600 dark:text-blue-400'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
            ">
            {{ tab.label }}
            <span
              v-if="tab.count > 0"
              class="ml-2 px-2 py-0.5 text-xs font-bold rounded-full"
              :class="
                activeTab === tab.id
                  ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
                  : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
              ">
              {{ tab.count }}
            </span>
            <div
              v-if="activeTab === tab.id"
              class="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"></div>
          </button>
        </div>
      </div>

      <!-- Notifications List -->
      <div class="space-y-3">
        <div
          v-for="notification in filteredNotifications"
          :key="notification.id"
          @click="handleNotificationClick(notification)"
          class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:shadow-md transition-all cursor-pointer"
          :class="{
            'bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800':
              !notification.read,
          }">
          <div class="flex items-start space-x-3">
            <!-- Icon -->
            <div
              class="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
              :class="getNotificationIconBg(notification.type)">
              <Icon
                :name="getNotificationIcon(notification.type)"
                size="20"
                class="text-white" />
            </div>

            <!-- Content -->
            <div class="flex-1 min-w-0">
              <div class="flex items-start justify-between">
                <div class="flex-1">
                  <p class="text-sm font-medium text-gray-900 dark:text-white">
                    {{ notification.title }}
                  </p>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {{ notification.message }}
                  </p>
                  <div
                    class="flex items-center space-x-4 mt-2 text-xs text-gray-500 dark:text-gray-400">
                    <span class="flex items-center space-x-1">
                      <Icon name="lucide:clock" size="12" />
                      <span>{{ notification.time }}</span>
                    </span>
                    <span
                      v-if="notification.category"
                      class="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded-full">
                      {{ notification.category }}
                    </span>
                  </div>
                </div>

                <!-- Unread indicator -->
                <div
                  v-if="!notification.read"
                  class="w-2 h-2 bg-blue-600 rounded-full ml-2 mt-1"></div>
              </div>
            </div>

            <!-- Actions -->
            <button
              @click.stop="toggleNotificationMenu(notification.id)"
              class="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors">
              <Icon
                name="lucide:more-vertical"
                size="16"
                class="text-gray-400" />
            </button>
          </div>

          <!-- Action Menu -->
          <div
            v-if="openMenuId === notification.id"
            class="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700 flex items-center space-x-2">
            <button
              v-if="!notification.read"
              @click.stop="markAsRead(notification.id)"
              class="flex-1 px-3 py-2 text-xs font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors">
              Mark as read
            </button>
            <button
              @click.stop="deleteNotification(notification.id)"
              class="flex-1 px-3 py-2 text-xs font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
              Delete
            </button>
          </div>
        </div>

        <!-- Empty State -->
        <div
          v-if="filteredNotifications.length === 0"
          class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-12 text-center">
          <Icon
            name="lucide:bell-off"
            size="48"
            class="mx-auto text-gray-400 mb-4" />
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            No notifications
          </h3>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            You're all caught up! Check back later for updates.
          </p>
        </div>
      </div>

      <!-- Load More -->
      <div v-if="hasMore" class="flex justify-center">
        <button
          @click="loadMore"
          :disabled="loading"
          class="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
          <span v-if="!loading">Load more notifications</span>
          <span v-else class="flex items-center space-x-2">
            <Icon name="lucide:loader-2" size="16" class="animate-spin" />
            <span>Loading...</span>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false });

const router = useRouter();
const activeTab = ref("all");
const openMenuId = ref<string | null>(null);
const loading = ref(false);
const hasMore = ref(true);

const tabs = [
  { id: "all", label: "All", count: 12 },
  { id: "matches", label: "Matches", count: 5 },
  { id: "social", label: "Social", count: 7 },
  { id: "system", label: "System", count: 0 },
];

const notifications = ref([
  {
    id: "1",
    type: "match",
    title: "Match Starting Soon",
    message: "Orlando Pirates vs Kaizer Chiefs starts in 15 minutes",
    time: "15m ago",
    read: false,
    category: "Matches",
    link: "/matches/live/123",
  },
  {
    id: "2",
    type: "like",
    title: "New Like on Your Post",
    message: "John Doe liked your post about the Soweto Derby",
    time: "1h ago",
    read: false,
    category: "Social",
    link: "/posts/456",
  },
  {
    id: "3",
    type: "comment",
    title: "New Comment",
    message: 'Sarah commented: "Great analysis on the match!"',
    time: "2h ago",
    read: true,
    category: "Social",
    link: "/posts/789",
  },
  {
    id: "4",
    type: "goal",
    title: "GOAL!",
    message: "Monnapule Saleng scores for Orlando Pirates! 2-1",
    time: "3h ago",
    read: true,
    category: "Matches",
    link: "/matches/live/123",
  },
  {
    id: "5",
    type: "follow",
    title: "New Follower",
    message: "Mike Johnson started following you",
    time: "5h ago",
    read: true,
    category: "Social",
    link: "/users/mike-johnson",
  },
  {
    id: "6",
    type: "system",
    title: "Profile Update Complete",
    message: "Your profile information has been successfully updated",
    time: "1d ago",
    read: true,
    category: "System",
    link: "/account/profile",
  },
]);

const filteredNotifications = computed(() => {
  if (activeTab.value === "all") return notifications.value;
  return notifications.value.filter((n) => {
    if (activeTab.value === "matches")
      return n.type === "match" || n.type === "goal";
    if (activeTab.value === "social")
      return ["like", "comment", "follow"].includes(n.type);
    if (activeTab.value === "system") return n.type === "system";
    return true;
  });
});

const getNotificationIcon = (type: string) => {
  const icons = {
    match: "lucide:calendar",
    like: "lucide:heart",
    comment: "lucide:message-circle",
    follow: "lucide:user-plus",
    goal: "lucide:target",
    system: "lucide:settings",
  };
  return icons[type as keyof typeof icons] || "lucide:bell";
};

const getNotificationIconBg = (type: string) => {
  const colors = {
    match: "bg-blue-600",
    like: "bg-red-600",
    comment: "bg-green-600",
    follow: "bg-purple-600",
    goal: "bg-yellow-600",
    system: "bg-gray-600",
  };
  return colors[type as keyof typeof colors] || "bg-gray-600";
};

const handleBack = () => {
  if (window.history.length > 1) {
    router.back();
  } else {
    router.push("/");
  }
};

const handleNotificationClick = (notification: any) => {
  markAsRead(notification.id);
  if (notification.link) {
    router.push(notification.link);
  }
};

const markAsRead = (id: string) => {
  const notification = notifications.value.find((n) => n.id === id);
  if (notification) {
    notification.read = true;
  }
  // Update tab counts
  updateTabCounts();
};

const markAllAsRead = () => {
  notifications.value.forEach((n) => (n.read = true));
  updateTabCounts();
};

const deleteNotification = (id: string) => {
  const index = notifications.value.findIndex((n) => n.id === id);
  if (index !== -1) {
    notifications.value.splice(index, 1);
  }
  updateTabCounts();
  openMenuId.value = null;
};

const toggleNotificationMenu = (id: string) => {
  openMenuId.value = openMenuId.value === id ? null : id;
};

const updateTabCounts = () => {
  tabs[0].count = notifications.value.filter((n) => !n.read).length;
  tabs[1].count = notifications.value.filter(
    (n) => !n.read && (n.type === "match" || n.type === "goal")
  ).length;
  tabs[2].count = notifications.value.filter(
    (n) => !n.read && ["like", "comment", "follow"].includes(n.type)
  ).length;
  tabs[3].count = notifications.value.filter(
    (n) => !n.read && n.type === "system"
  ).length;
};

const loadMore = async () => {
  loading.value = true;
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  loading.value = false;
  // For demo, disable load more after first click
  hasMore.value = false;
};
</script>
