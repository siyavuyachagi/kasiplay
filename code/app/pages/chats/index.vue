<template>
  <div class="lg:grid lg:grid-cols-12 lg:gap-6">
    <!-- Left Sidebar (25%) -->
    <div class="hidden lg:block lg:col-span-3 space-y-4 sticky top-20 h-fit">
      <DefaultSidebarLeft />
    </div>

    <!-- Center Feed (50%) -->
    <div class="lg:col-span-6 mb-6 lg:mb-0 space-y-4">
      <!-- Breadcrumb  -->
      <DefaultBreadcrumb :crumbs="breadcrumbs" />

      <div class="space-y-4">
        <!-- Search and Online accounts  -->
        <div
          class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <!-- Search & Filter -->
          <div class="p-6 space-y-5">
            <div class="relative">
              <Icon
                name="lucide:search"
                size="18"
                class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search chats, users, groups..."
                class="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-700/50 rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-500 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
            </div>

            <!-- Online Users Carousel -->
            <div v-if="onlineUsers.length">
              <div class="flex items-center justify-between mb-3">
                <span
                  class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  Online Now ({{ onlineUsers.length }})
                </span>
                <button
                  class="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline">
                  See all
                </button>
              </div>
              <div
                class="relative flex gap-3 overflow-x-auto scrollbar-hide py-1 pl-2 rounded-lg">
                <!-- left shadow -->
                <div
                  class="absolute left-0 top-0 bottom-0 w-6 pointer-events-none bg-linear-to-r from-gray-600/50 to-transparent"></div>
                <!-- right shadow -->
                <div
                  class="absolute right-0 top-0 bottom-0 w-6 pointer-events-none bg-linear-to-l from-gray-600/50 to-transparent"></div>
                <button
                  v-for="onlineUser in onlineUsers"
                  :key="onlineUser.id"
                  @click="startChatFromOnline(onlineUser)"
                  class="shrink-0 flex flex-col items-center group">
                  <div
                    class="relative w-11 h-11 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-semibold text-sm group-hover:ring-2 group-hover:ring-blue-400/50 transition-all duration-200">
                    {{ getUserInitials(onlineUser) }}
                    <div
                      class="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></div>
                  </div>
                  <span
                    class="text-xs text-gray-700 dark:text-gray-300 mt-1.5 truncate max-w-[55px] text-center">
                    {{ onlineUser.firstName }}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Search and Online accounts  -->
        <div
          class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <!-- Search & Filter -->
          <div class="p-6 space-y-5">
            <div class="relative">
              <Icon
                name="lucide:search"
                size="18"
                class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search chats, users, groups..."
                class="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-700/50 rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-500 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
            </div>

            <!-- Online Users Carousel -->
            <div v-if="onlineUsers.length">
              <div class="flex items-center justify-between mb-3">
                <span
                  class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  Online Now ({{ onlineUsers.length }})
                </span>
                <button
                  class="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline">
                  See all
                </button>
              </div>
              <div
                class="relative flex gap-3 overflow-x-auto scrollbar-hide py-1 pl-2 rounded-lg">
                <!-- left shadow -->
                <div
                  class="absolute left-0 top-0 bottom-0 w-6 pointer-events-none bg-linear-to-r from-gray-600/50 to-transparent"></div>
                <!-- right shadow -->
                <div
                  class="absolute right-0 top-0 bottom-0 w-6 pointer-events-none bg-linear-to-l from-gray-600/50 to-transparent"></div>
                <button
                  v-for="onlineUser in onlineUsers"
                  :key="onlineUser.id"
                  @click="startChatFromOnline(onlineUser)"
                  class="shrink-0 flex flex-col items-center group">
                  <div
                    class="relative w-11 h-11 rounded-full bg-linear-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-semibold text-sm group-hover:ring-2 group-hover:ring-blue-400/50 transition-all duration-200">
                    {{ getUserInitials(onlineUser) }}
                    <div
                      class="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></div>
                  </div>
                  <span
                    class="text-xs text-gray-700 dark:text-gray-300 mt-1.5 truncate max-w-[55px] text-center">
                    {{ onlineUser.firstName }}
                  </span>
                </button>
              </div>
            </div>
          </div>

          <!-- Chats Filter -->
          <div
            class="px-6 pb-4 border-t border-gray-200 dark:border-gray-700 pt-4">
            <div class="flex gap-2">
              <button
                v-for="filter in chatFilters"
                :key="filter.value"
                @click="activeFilter = filter.value"
                :class="[
                  'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                  activeFilter === filter.value
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600',
                ]">
                {{ filter.label }}
                <span
                  v-if="filter.count"
                  :class="[
                    'ml-1.5 px-1.5 py-0.5 text-xs rounded-full',
                    activeFilter === filter.value
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400',
                  ]">
                  {{ filter.count }}
                </span>
              </button>
            </div>
          </div>

          <!-- Chats List -->
          <div class="divide-y divide-gray-200 dark:divide-gray-700">
            <button
              v-for="chat in filteredChats"
              :key="chat.id"
              @click="selectChat(chat)"
              :class="[
                'w-full px-6 py-4 flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200',
                selectedChatId === chat.id
                  ? 'bg-blue-50 dark:bg-blue-900/20'
                  : '',
              ]">
              <!-- Avatar -->
              <div class="relative shrink-0">
                <div
                  :class="[
                    'w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold',
                    chat.type === 'group'
                      ? 'bg-linear-to-br from-purple-500 to-pink-600'
                      : 'bg-linear-to-br from-blue-500 to-cyan-600',
                  ]">
                  {{ getUserInitials(chat.) }}
                </div>
                <div
                  v-if="chat.isOnline && chat.type !== 'group'"
                  class="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></div>
                <div
                  v-if="chat.unreadMessages"
                  class="absolute -top-1 -right-1 min-w-5 h-5 px-1.5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {{ chat.unreadMessages > 99 ? "99+" : chat.unreadMessages }}
                </div>
              </div>

              <!-- Chat Info -->
              <div class="flex-1 min-w-0 text-left">
                <div class="flex items-center justify-between mb-1">
                  <h3
                    :class="[
                      'text-sm font-semibold truncate',
                      chat.unreadCount
                        ? 'text-gray-900 dark:text-white'
                        : 'text-gray-700 dark:text-gray-300',
                    ]">
                    {{ chat.name }}
                  </h3>
                  <span
                    class="text-xs text-gray-500 dark:text-gray-400 ml-2 shrink-0">
                    {{ chat.timestamp }}
                  </span>
                </div>
                <div class="flex items-center gap-1">
                  <Icon
                    v-if="chat.lastMessage?.isOwn"
                    :name="
                      chat.lastMessage?.status === 'read'
                        ? 'lucide:check-check'
                        : 'lucide:check'
                    "
                    :class="[
                      'shrink-0',
                      chat.lastMessage?.status === 'read'
                        ? 'text-blue-500'
                        : 'text-gray-400',
                    ]"
                    size="14" />
                  <p
                    :class="[
                      'text-sm truncate',
                      chat.unreadCount
                        ? 'font-medium text-gray-900 dark:text-white'
                        : 'text-gray-600 dark:text-gray-400',
                    ]">
                    {{ chat.lastMessage?.text }}
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>

        <!-- Active Chat View -->
        <div class="flex flex-col h-[calc(100vh-200px)]">
          <!-- Chat Header -->
          <div
            class="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <button
                @click="closeChat"
                class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 lg:hidden transition-colors">
                <Icon name="lucide:arrow-left" size="20" />
              </button>

              <div class="relative">
                <div
                  :class="[
                    'w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold',
                    selectedConversation.type === 'group'
                      ? 'bg-linear-to-br from-purple-500 to-pink-600'
                      : 'bg-linear-to-br from-blue-500 to-purple-600',
                  ]">
                  {{ selectedConversation.user.initials }}
                </div>
                <div
                  v-if="
                    selectedConversation.user.online &&
                    selectedConversation.type !== 'group'
                  "
                  class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></div>
              </div>

              <div>
                <div
                  class="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white">
                  {{ selectedConversation.user.name }}
                  <Icon
                    v-if="selectedConversation.verified"
                    name="lucide:badge-check"
                    size="14"
                    class="text-blue-500" />
                </div>
                <div class="text-xs text-gray-500 dark:text-gray-400">
                  {{
                    selectedConversation.type === "group"
                      ? `${selectedConversation.members} members`
                      : selectedConversation.user.online
                      ? "Online"
                      : "Offline"
                  }}
                </div>
              </div>
            </div>

            <div class="flex items-center gap-2">
              <button
                v-if="selectedConversation.type !== 'group'"
                class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                title="Voice call">
                <Icon name="lucide:phone" size="18" />
              </button>
              <button
                v-if="selectedConversation.type !== 'group'"
                class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                title="Video call">
                <Icon name="lucide:video" size="18" />
              </button>
              <button
                class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                title="More options">
                <Icon name="lucide:more-vertical" size="18" />
              </button>
            </div>
          </div>

          <!-- Messages Container -->
          <div
            ref="messagesContainer"
            class="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin bg-gray-50 dark:bg-gray-900/50">
            <div
              v-for="m in selectedConversation.messages"
              :key="m.id"
              :class="[
                'flex',
                m.sender === 'me' ? 'justify-end' : 'justify-start',
              ]">
              <div
                :class="[
                  'max-w-[75%] sm:max-w-[60%]',
                  m.sender === 'me' ? 'text-right' : '',
                ]">
                <div
                  v-if="
                    m.sender !== 'me' && selectedConversation.type === 'group'
                  "
                  class="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1 ml-1">
                  {{ m.senderName }}
                </div>
                <div
                  :class="[
                    'inline-block rounded-2xl px-4 py-2',
                    m.sender === 'me'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700',
                  ]">
                  <p class="text-sm">{{ m.text }}</p>
                </div>
                <div
                  class="text-xs text-gray-500 dark:text-gray-400 mt-1"
                  :class="m.sender === 'me' ? 'text-right' : ''">
                  {{ m.time }}
                </div>
              </div>
            </div>

            <!-- Typing Indicator -->
            <div v-if="isTyping" class="flex items-center gap-3">
              <div
                class="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-xs font-semibold">
                {{ selectedConversation.user.initials }}
              </div>
              <div
                class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl px-4 py-3">
                <div class="flex gap-1">
                  <div
                    class="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                  <div
                    class="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                    style="animation-delay: 0.12s"></div>
                  <div
                    class="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                    style="animation-delay: 0.24s"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Message Input -->
          <div class="p-4 border-t border-gray-200 dark:border-gray-700">
            <div class="flex items-end gap-2">
              <button
                class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                title="Attach file">
                <Icon name="lucide:paperclip" size="20" />
              </button>
              <button
                class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                title="Add image">
                <Icon name="lucide:image" size="20" />
              </button>
              <button
                class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                title="Add emoji">
                <Icon name="lucide:smile" size="20" />
              </button>

              <div class="flex-1">
                <textarea
                  v-model="newMessage"
                  @keydown.enter.prevent="sendMessage"
                  rows="1"
                  placeholder="Type a message..."
                  class="w-full px-4 py-2.5 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none max-h-32"></textarea>
              </div>

              <button
                :disabled="!newMessage.trim()"
                @click="sendMessage"
                class="p-2.5 rounded-lg bg-blue-600 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors">
                <Icon name="lucide:send" size="20" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Sidebar (25%) -->
    <div class="hidden lg:block lg:col-span-3 space-y-4 sticky top-20 h-fit">
      <DefaultSidebarRight />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, nextTick } from "vue";
import { useRouter } from "vue-router";
import { chats } from "~/assets/data/chats.data";
import type { ApplicationUser } from "~/types/interfaces/application-user";
import type { Chat } from "~/types/interfaces/chat";
import type { Message } from "~/types/interfaces/message";
import { generateRandomUUID } from "~/utilities/generate-random-uuid";

definePageMeta({
  layout: "default",
});

const breadcrumbs = [{ label: "Chats", route: "/chats", active: true }];
const activeFilter = ref("all");
const selectedChatId = ref(null);
const selectedChat = ref<Chat | null>(null);
const chatFilters = [
  { label: "All", value: "all", count: null },
  { label: "Unread", value: "unread", count: 5 },
  { label: "Groups", value: "groups", count: 3 },
];

interface Tab {
  id: string;
  label: string;
  badge?: number;
}

interface Group {
  id: string;
  name: string;
  initials: string;
  members: number;
}

// State
const router = useRouter();

const searchQuery = ref("");
const platformSearch = ref("");
const selectedConversation = ref<Chat | null>(null);
const newMessage = ref("");
const isTyping = ref(false);
const messagesContainer = ref<HTMLElement | null>(null);
const showChatOnly = ref(false);
const isMobile = ref(false);
const activeTab = ref<"all" | "groups" | "unread">("all");
const selectedChatType = ref<string>("all");

const userGroups = ref<Group[]>([
  // fill from API
  { id: "g1", name: "Team Alpha", initials: "TA", members: 5 },
  { id: "g2", name: "Gamers", initials: "GM", members: 12 },
]);

const onlineUsers: ApplicationUser[] = [
  {
    id: "u1",
    username: "alice",
    email: "alice@example.com",
    firstName: "Alice",
    lastName: "Johnson",
    avatarUrl: "https://i.pravatar.cc/150?img=5",
    isActive: true,
    roles: ["User"],
    createdAt: "2025-02-10T12:00:00Z",
    updatedAt: "2025-02-10T12:00:00Z",
  },
  {
    id: "u2",
    username: "bob",
    email: "bob@example.com",
    firstName: "Bob",
    lastName: "Smith",
    // avatarUrl: null,
    isActive: true,
    roles: ["User"],
    createdAt: "2025-02-10T12:00:00Z",
    updatedAt: "2025-02-10T12:00:00Z",
  },

  // -----------------------------
  // 6 NEW USERS WITH RANDOM AVATARS
  // -----------------------------

  {
    id: "u3",
    username: "ceejay",
    email: "ceejay@example.com",
    firstName: "CeeJay",
    lastName: "Chagi",
    avatarUrl: "https://i.pravatar.cc/150?img=68",
    isActive: true,
    roles: ["Admin"],
    createdAt: "2025-02-10T12:00:00Z",
    updatedAt: "2025-02-10T12:00:00Z",
  },
  {
    id: "u4",
    username: "lerato",
    email: "lerato@example.com",
    firstName: "Lerato",
    lastName: "Dlamini",
    // avatarUrl: null,
    isActive: true,
    roles: ["User"],
    createdAt: "2025-02-10T12:00:00Z",
    updatedAt: "2025-02-10T12:00:00Z",
  },
  {
    id: "u5",
    username: "kagiso",
    email: "kagiso@example.com",
    firstName: "Kagiso",
    lastName: "Molefe",
    avatarUrl: "https://i.pravatar.cc/150?img=14",
    isActive: true,
    roles: ["Moderator"],
    createdAt: "2025-02-10T12:00:00Z",
    updatedAt: "2025-02-10T12:00:00Z",
  },
  {
    id: "u6",
    username: "thabo",
    email: "thabo@example.com",
    firstName: "Thabo",
    lastName: "Mokoena",
    // avatarUrl: null,
    isActive: true,
    roles: ["User"],
    createdAt: "2025-02-10T12:00:00Z",
    updatedAt: "2025-02-10T12:00:00Z",
  },
  {
    id: "u7",
    username: "sindi",
    email: "sindi@example.com",
    firstName: "Sindisiwe",
    lastName: "Zulu",
    avatarUrl: "https://i.pravatar.cc/150?img=32",
    isActive: true,
    roles: ["User"],
    createdAt: "2025-02-10T12:00:00Z",
    updatedAt: "2025-02-10T12:00:00Z",
  },
  {
    id: "u8",
    username: "jason",
    email: "jason@example.com",
    firstName: "Jason",
    lastName: "Reed",
    // avatarUrl: null,
    isActive: true,
    roles: ["User"],
    createdAt: "2025-02-10T12:00:00Z",
    updatedAt: "2025-02-10T12:00:00Z",
  },
];

const friendRequests = ref<ApplicationUser[]>([
  {
    id: generateRandomUUID(),
    username: "charlie",
    email: "charlieb@yahoo.com",
    firstName: "Charlie",
    lastName: "Brown",
    isOnline: false,
  },
]);

const suggestedUsers = ref<ApplicationUser[]>([
  {
    id: "u4",
    username: "dana",
    email: "danadana@example.com",
    firstName: "Dana",
    lastName: "White",
    isOnline: false,
  },
  {
    id: generateRandomUUID(),
    username: "evan",
    email: "egreen87@gmail.com",
    firstName: "Evan",
    lastName: "Green",
    isOnline: false,
  },
]);

const popularGroups = ref<Group[]>([
  { id: "g3", name: "Pro Players", initials: "PP", members: 23 },
  { id: "g4", name: "Casual Gamers", initials: "CG", members: 45 },
]);

const chatTabs = ref<Tab[]>([
  { id: "all", label: "All", badge: undefined },
  {
    id: "unread",
    label: "Unread",
    badge: computed(
      () => chats.value.filter((c) => c.unreadMessages > 0).length
    ).value,
  },
  { id: "groups", label: "Groups", badge: undefined },
]);

// Computed: filter conversations based on chat type + search + activeTab
const filteredChats = computed(() => {
  let convs = chats.value;

  // Filter by chat type (all / direct / group)
  if (selectedChatType.value !== "all") {
    convs = convs.filter((c) => c.type === selectedChatType.value);
  }

  // Filter by active tab (unread, groups, all)
  if (activeTab.value === "unread") {
    convs = convs.filter((c) => c.unreadMessages > 0);
  } else if (activeTab.value === "groups") {
    convs = convs.filter((c) => c.type === "group");
  }

  // Filter by search query
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase();
    convs = convs.filter((c) => {
      return (
        c.user.name.toLowerCase().includes(q) ||
        c.lastMessage.text.toLowerCase().includes(q)
      );
    });
  }

  return convs;
});

// Methods
function openNewMessage() {
  // Possibly navigate to "start new conversation" page
  // or open a modal
  // For now, clear selectedConversation so user sees chat list
  selectedConversation.value = null;
  // You may also open a UI modal for selecting a user
}

function getUserInitials(user: ApplicationUser): string {
  const first = user.firstName?.[0] || "";
  const last = user.lastName?.[0] || "";
  return (first + last).toUpperCase();
}

function openCreateGroup() {
  // Open a group creation flow (modal, page, etc)
  console.log("Create group clicked");
}

// When the user clicks on a group or conversation in the list
function selectChat(conv: Chat) {
  selectedConversation.value = conv;
}

// Close the current chat and go back to the list
function closeChat() {
  selectedConversation.value = null;
}

// Sending a message
async function sendMessage() {
  const text = newMessage.value.trim();
  if (!text || !selectedConversation.value) return;

  // Create a new message object
  const msg: Message = {
    id: generateRandomUUID(), // replace with real id from backend
    senderId: "me",
    text,
    timestamp: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  };

  // Append locally
  selectedConversation.value.messages.push(msg);

  // Reset input
  newMessage.value = "";

  // Simulate sending to backend
  try {
    // await api.sendMessage(selectedConversation.id, msg)
    // On success, maybe mark as sent
  } catch (err) {
    console.error("Failed to send message", err);
    // Optionally revert or flag error
  }

  // Scroll to bottom
  await nextTick();
  scrollToBottom();
}

// Scroll logic
function scrollToBottom() {
  if (!messagesContainer.value) return;
  messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
}

// Typing indicator — simplistic demo
function startTyping() {
  isTyping.value = true;
  // Here you might emit a "typing" event through websockets
}

function stopTyping() {
  isTyping.value = false;
}

// Starting chat with online users
function startChatFromOnline(user: ApplicationUser) {
  // Check if conversation already exists
  let conv = allConversations.value.find(
    (c) => c.user.id === user.id && c.type === "direct"
  );
  if (!conv) {
    conv = {
      id: generateRandomUUID(),
      type: "direct",
      user,
      lastMessage: { text: "", timeLabel: "" },
      messages: [],
      unread: 0,
    };
    allConversations.value.push(conv);
  }
  selectConversation(conv);
}

// Friend request actions
function acceptRequest(userId: string) {
  // Dummy accept logic
  friendRequests.value = friendRequests.value.filter((u) => u.id !== userId);
  console.log("Accepted friend request from", userId);
}

function rejectRequest(userId: string) {
  friendRequests.value = friendRequests.value.filter((u) => u.id !== userId);
  console.log("Rejected friend request from", userId);
}

function sendFriendRequest(userId: string) {
  console.log("Send friend request to", userId);
  // Trigger API call
}

// Joining groups
function joinGroup(group: Group) {
  console.log("Join this group:", group);
  // call API or add to userGroups
}

// Select a group from sidebar
function selectGroup(group: Group) {
  // Find or create a conversation for this group
  let conv = allConversations.value.find(
    (c) => c.id === group.id && c.type === "group"
  );
  if (!conv) {
    conv = {
      id: group.id,
      type: "group",
      user: {
        // using user object to store group info is a hack; replace as needed
        id: group.id,
        name: group.name,
        username: "",
        initials: group.initials,
        online: false,
      },
      lastMessage: { text: "", timeLabel: "" },
      messages: [],
      unread: 0,
      members: group.members,
    };
    allConversations.value.push(conv);
  }
  selectConversation(conv);
}

// Watchers & Lifecycle

// Scroll to bottom whenever selected conversation changes
watch(selectedConversation, async (newVal) => {
  if (newVal) {
    await nextTick();
    scrollToBottom();
  }
});

// Detect window size for mobile logic
function updateIsMobile() {
  isMobile.value = window.innerWidth < 1024; // your breakpoint for "lg"
}

onMounted(() => {
  updateIsMobile();
  window.addEventListener("resize", updateIsMobile);
});

// Watch newMessage to trigger typing indicator
watch(newMessage, (val, oldVal) => {
  if (val && !oldVal) {
    startTyping();
  } else if (!val && oldVal) {
    stopTyping();
  }
});
</script>
