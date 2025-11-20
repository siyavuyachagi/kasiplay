<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto p-4">
      <!-- Header with Back Button -->
      <div class="mb-6">
        <button
          @click="handleBack"
          class="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
          <Icon name="lucide:arrow-left" size="20" />
          <span class="font-medium">Back</span>
        </button>
      </div>

      <!-- Main Layout -->
      <div class="grid lg:grid-cols-12 gap-4 h-[calc(100vh-160px)]">
        <!-- LEFT SIDEBAR - Conversations List (show on mobile when chat not selected) -->
        <div
          v-show="!showChatOnly || !isMobile"
          class="lg:col-span-4 flex flex-col bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <!-- Sidebar Header -->
          <div class="p-4 border-b border-gray-200 dark:border-gray-700">
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-xl font-bold text-gray-900 dark:text-white">
                Messages
              </h2>
              <div class="flex items-center space-x-2">
                <button
                  @click="openNewMessage"
                  class="flex justify-center p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  title="New message">
                  <Icon
                    name="lucide:edit"
                    size="20"
                    class="text-blue-600 dark:text-blue-400" />
                </button>
                <button
                  @click="openCreateGroup"
                  class="flex justify-center p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  title="Create group">
                  <Icon
                    name="lucide:users-round"
                    size="20"
                    class="text-blue-600 dark:text-blue-400" />
                </button>
              </div>
            </div>

            <!-- Search -->
            <div class="relative">
              <Icon
                name="lucide:search"
                size="18"
                class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search messages..."
                class="w-full pl-10 pr-4 py-2.5 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <!-- Online Users -->
            <div v-if="onlineUsers.length" class="mt-4">
              <div
                class="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-2">
                Online Now
              </div>
              <div class="flex overflow-x-auto scrollbar-hide">
                <button
                  v-for="u in onlineUsers"
                  :key="u.id"
                  @click="startChatFromOnline(u)"
                  class="shrink-0 flex flex-col items-center group mt-2">
                  <div
                    class="relative w-10 h-10 rounded-full bg-linear-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-semibold group-hover:ring-2 group-hover:ring-blue-400 transition">
                    {{ u.initials }}
                    <div
                      class="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></div>
                  </div>
                  <span
                    class="text-xs text-gray-700 dark:text-gray-300 mt-1 truncate w-16 text-center">
                    {{ u.firstName }}
                  </span>
                </button>
              </div>
            </div>
          </div>

          <!-- Conversations List -->
          <div class="flex-1 overflow-y-auto scrollbar-thin">
            <div
              v-for="conv in filteredConversations"
              :key="conv.id"
              @click="selectConversation(conv)"
              class="flex items-start gap-3 p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer transition-colors border-b border-gray-100 dark:border-gray-700"
              :class="{
                'bg-blue-50 dark:bg-blue-900/20':
                  selectedConversation?.id === conv.id,
              }">
              <div class="relative shrink-0">
                <div
                  class="w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                  {{ conv.user.initials }}
                </div>
                <div
                  v-if="conv.user.online"
                  class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></div>
              </div>

              <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between mb-1">
                  <span
                    class="text-sm font-semibold text-gray-900 dark:text-white truncate">
                    {{ conv.user.name }}
                  </span>
                  <span class="text-xs text-gray-500 dark:text-gray-400 ml-2">
                    {{ conv.lastMessage.timeLabel }}
                  </span>
                </div>
                <div class="flex items-center justify-between">
                  <p
                    class="text-sm text-gray-600 dark:text-gray-400 truncate"
                    :class="{ 'font-semibold': conv.unread > 0 }">
                    {{ conv.lastMessage.text }}
                  </p>
                  <div
                    v-if="conv.unread > 0"
                    class="flex-shrink-0 ml-2 w-5 h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">
                    {{ conv.unread }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Empty State -->
            <div
              v-if="filteredConversations.length === 0"
              class="p-8 text-center">
              <Icon
                name="lucide:inbox"
                size="48"
                class="mx-auto mb-3 text-gray-400" />
              <p class="text-sm text-gray-500 dark:text-gray-400">
                No conversations found
              </p>
            </div>
          </div>
        </div>

        <!-- CENTER - Chat Window -->
        <div
          :class="chatPaneClass"
          class="flex flex-col bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <!-- Empty State -->
          <div
            v-if="!selectedConversation"
            class="flex-1 flex items-center justify-center p-8">
            <div class="text-center max-w-md">
              <Icon
                name="lucide:message-circle"
                size="64"
                class="mx-auto text-gray-400 mb-4" />
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Your Messages
              </h3>
              <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">
                Select a conversation or start a new one to begin messaging
              </p>
              <button
                @click="openNewMessage"
                class="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Send a Message
              </button>
            </div>
          </div>

          <!-- Active Chat -->
          <template v-else>
            <!-- Chat Header -->
            <div
              class="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
              <div class="flex items-center gap-3">
                <button
                  v-if="isMobile"
                  @click="closeChat"
                  class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 lg:hidden transition-colors">
                  <Icon name="lucide:arrow-left" size="20" />
                </button>

                <div class="relative">
                  <div
                    class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                    {{ selectedConversation.user.initials }}
                  </div>
                  <div
                    v-if="selectedConversation.user.online"
                    class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></div>
                </div>

                <div>
                  <div
                    class="text-sm font-semibold text-gray-900 dark:text-white">
                    {{ selectedConversation.user.name }}
                  </div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">
                    {{
                      selectedConversation.user.online ? "Online" : "Offline"
                    }}
                  </div>
                </div>
              </div>

              <div class="flex items-center gap-2">
                <button
                  class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  title="Voice call">
                  <Icon name="lucide:phone" size="18" />
                </button>
                <button
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
                  class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl px-4 py-2">
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
                    class="w-full px-4 py-2.5 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"></textarea>
                </div>

                <button
                  :disabled="!newMessage.trim()"
                  @click="sendMessage"
                  class="p-2.5 rounded-lg bg-blue-600 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors">
                  <Icon name="lucide:send" size="20" />
                </button>
              </div>
            </div>
          </template>
        </div>

        <!-- RIGHT SIDEBAR - Social Features (hide on mobile) -->
        <div
          v-show="!isMobile"
          class="lg:col-span-3 hidden lg:flex flex-col gap-4">
          <!-- Friend Requests -->
          <div
            class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
            <h3
              class="text-sm font-semibold text-gray-900 dark:text-white mb-3">
              Friend Requests
            </h3>
            <div class="space-y-3">
              <div
                v-for="req in friendRequests"
                :key="req.id"
                class="flex items-center gap-3">
                <div
                  class="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-semibold text-sm">
                  {{ req.initials }}
                </div>
                <div class="flex-1 min-w-0">
                  <p
                    class="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {{ req.name }}
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    @{{ req.username }}
                  </p>
                </div>
                <div class="flex gap-1">
                  <button
                    @click="acceptRequest(req.id)"
                    class="p-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    title="Accept">
                    <Icon name="lucide:check" size="14" />
                  </button>
                  <button
                    @click="rejectRequest(req.id)"
                    class="p-1.5 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
                    title="Reject">
                    <Icon name="lucide:x" size="14" />
                  </button>
                </div>
              </div>
              <p
                v-if="friendRequests.length === 0"
                class="text-xs text-gray-500 dark:text-gray-400 text-center py-2">
                No pending requests
              </p>
            </div>
          </div>

          <!-- Suggested Users -->
          <div
            class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
            <h3
              class="text-sm font-semibold text-gray-900 dark:text-white mb-3">
              Suggested for You
            </h3>
            <div class="space-y-3">
              <div
                v-for="user in suggestedUsers"
                :key="user.id"
                class="flex items-center gap-3">
                <div
                  class="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white font-semibold text-sm">
                  {{ user.initials }}
                </div>
                <div class="flex-1 min-w-0">
                  <p
                    class="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {{ user.name }}
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    @{{ user.username }}
                  </p>
                </div>
                <button
                  @click="sendFriendRequest(user.id)"
                  class="px-3 py-1.5 text-xs font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- New Message Modal (placeholder) -->
    <!-- TODO: Implement modal for composing new message -->

    <!-- Create Group Modal (placeholder) -->
    <!-- TODO: Implement modal for creating group -->
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false });

const router = useRouter();

// State
const searchQuery = ref("");
const selectedConversation = ref<any | null>(null);
const newMessage = ref("");
const isTyping = ref(false);
const messagesContainer = ref<HTMLElement | null>(null);
const showChatOnly = ref(false);
const isMobile = ref(false);

// Sample data
const conversations = ref([
  {
    id: "conv_1",
    user: {
      id: "user_1",
      name: "Uvuvuwanguobwa Doe",
      initials: "JD",
      username: "johndoe",
      online: true,
    },
    lastMessage: { text: "See you at the match tomorrow!", timeLabel: "2m" },
    unread: 2,
    messages: [
      {
        id: "m1",
        sender: "them",
        text: "Hey! Are you going to the match?",
        time: "10:30 AM",
      },
      {
        id: "m2",
        sender: "me",
        text: "Yes! I already got my tickets",
        time: "10:32 AM",
      },
    ],
  },
  {
    id: "conv_2",
    user: {
      id: "user_2",
      name: "Sarah Smith",
      initials: "SS",
      username: "sarahsmith",
      online: false,
    },
    lastMessage: { text: "Thanks for the match highlights!", timeLabel: "1h" },
    unread: 0,
    messages: [
      {
        id: "m1",
        sender: "them",
        text: "Did you see the derby yesterday?",
        time: "9:15 AM",
      },
    ],
  },
  {
    id: "conv_3",
    user: {
      id: "user_3",
      name: "Mike Johnson",
      initials: "MJ",
      username: "mikej",
      online: true,
    },
    lastMessage: { text: "Training starts at 4pm", timeLabel: "3h" },
    unread: 1,
    messages: [
      {
        id: "m1",
        sender: "them",
        text: "Are you coming to training today?",
        time: "2:00 PM",
      },
    ],
  },
]);

const friendRequests = ref([
  {
    id: "req_1",
    name: "Alex Turner",
    username: "alexturner",
    initials: "AT",
  },
  { id: "req_2", name: "Emma Wilson", username: "emmaw", initials: "EW" },
]);

const suggestedUsers = ref([
  {
    id: "sugg_1",
    name: "David Brown",
    username: "davidbrown",
    initials: "DB",
  },
  {
    id: "sugg_2",
    name: "Jessica Lee",
    username: "jessicaL",
    initials: "JL",
  },
  {
    id: "sugg_3",
    name: "Chris Martin",
    username: "chrismartin",
    initials: "CM",
  },
]);

// Computed
const filteredConversations = computed(() => {
  if (!searchQuery.value) return conversations.value;
  const q = searchQuery.value.toLowerCase();
  return conversations.value.filter(
    (c) =>
      c.user.name.toLowerCase().includes(q) ||
      c.user.username.toLowerCase().includes(q)
  );
});

const onlineUsers = computed(() => {
  return conversations.value
    .filter((c) => c.user.online)
    .map((c) => ({
      ...c.user,
      firstName: c.user.name.split(" ")[0],
    }))
    .slice(0, 8);
});

const chatPaneClass = computed(() => {
  return showChatOnly.value && isMobile.value
    ? "col-span-1 lg:col-span-5"
    : "lg:col-span-5";
});

// Methods
const selectConversation = (conv: any) => {
  selectedConversation.value = conv;
  conv.unread = 0;
  if (isMobile.value) showChatOnly.value = true;
  nextTick(scrollToBottom);
};

const startChatFromOnline = (user: any) => {
  const existing = conversations.value.find((c) => c.user.id === user.id);
  if (existing) {
    selectConversation(existing);
    return;
  }

  const newConv = {
    id: "conv_" + Date.now(),
    user: { ...user, online: true },
    lastMessage: { text: "Start a conversation...", timeLabel: "now" },
    unread: 0,
    messages: [],
  };

  conversations.value.unshift(newConv);
  selectConversation(newConv);
};

const closeChat = () => {
  showChatOnly.value = false;
  selectedConversation.value = null;
};

const sendMessage = () => {
  if (!newMessage.value.trim() || !selectedConversation.value) return;

  const msg = {
    id: "m_" + Date.now(),
    sender: "me",
    text: newMessage.value.trim(),
    time: new Date().toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    }),
  };

  selectedConversation.value.messages.push(msg);
  selectedConversation.value.lastMessage = {
    text: msg.text,
    timeLabel: "Just now",
  };
  newMessage.value = "";
  nextTick(scrollToBottom);

  // Simulate reply
  setTimeout(() => {
    isTyping.value = true;
    setTimeout(() => {
      isTyping.value = false;
      const reply = {
        id: "m_" + (Date.now() + 1),
        sender: "them",
        text: "Got it, thanks!",
        time: new Date().toLocaleTimeString([], {
          hour: "numeric",
          minute: "2-digit",
        }),
      };
      selectedConversation.value.messages.push(reply);
      nextTick(scrollToBottom);
    }, 1200);
  }, 800);
};

const scrollToBottom = () => {
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }
};

const acceptRequest = (id: string) => {
  const req = friendRequests.value.find((r) => r.id === id);
  if (!req) return;

  friendRequests.value = friendRequests.value.filter((r) => r.id !== id);

  const conv = {
    id: "conv_" + Date.now(),
    user: { ...req, online: true },
    lastMessage: { text: "You are now friends!", timeLabel: "now" },
    unread: 0,
    messages: [],
  };
  conversations.value.unshift(conv);
};

const rejectRequest = (id: string) => {
  friendRequests.value = friendRequests.value.filter((r) => r.id !== id);
};

const sendFriendRequest = (id: string) => {
  suggestedUsers.value = suggestedUsers.value.filter((s) => s.id !== id);
};

const openNewMessage = () => {
  // TODO: Implement new message modal
  console.log("Open new message modal");
};

const openCreateGroup = () => {
  // TODO: Implement create group modal
  console.log("Open create group modal");
};

const handleBack = () => {
  if (window.history.length > 1) router.back();
  else router.push("/");
};

// Responsive
onMounted(() => {
  const update = () => {
    isMobile.value = window.innerWidth < 1024;
    if (!isMobile.value) showChatOnly.value = false;
  };
  update();
  window.addEventListener("resize", update);
  onUnmounted(() => window.removeEventListener("resize", update));
});
</script>

<style scoped>
.scrollbar-thin::-webkit-scrollbar {
  height: 6px;
  width: 6px;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
}

.scrollbar-thin::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.3);
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
