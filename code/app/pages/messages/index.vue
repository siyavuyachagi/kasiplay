<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto p-4">
      <!-- Back -->
      <button
        @click="handleBack"
        class="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-4">
        <Icon name="lucide:arrow-left" size="20" />
        <span>Back</span>
      </button>

      <!-- Layout: social + two panes -->
      <div class="grid lg:grid-cols-3 gap-4 h-[calc(100vh-120px)]">
        <!-- LEFT COLUMN: social + conversations list -->
        <div v-if="!showChatOnly" class="lg:col-span-1 flex flex-col gap-4">

          <!-- Conversations list -->
          <section class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col flex-1">
            <div class="p-4 border-b border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between mb-3">
                <h2 class="text-lg font-semibold text-gray-900 dark:text-white">Messages</h2>
                <button @click="openNewMessage" class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                  <Icon name="lucide:edit" size="18" class="text-blue-600 dark:text-blue-400" />
                </button>
              </div>

              <div class="relative">
                <Icon name="lucide:search" size="16" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input v-model="searchQuery" type="text" placeholder="Search messages..." class="w-full pl-10 pr-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-md text-sm text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none" />
              </div>

              <!-- Online small components under search -->
              <div v-if="onlineUsers.length" class="mt-3">
                <div class="text-xs font-medium uppercase text-gray-500 dark:text-gray-400 mb-2">Online</div>
                <div class="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
                  <button
                    v-for="u in onlineUsers"
                    :key="u.id"
                    @click="startChatFromList(u)"
                    class="flex-shrink-0 w-14 text-center group">
                    <div class="relative mx-auto w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-semibold group-hover:ring-2 group-hover:ring-blue-400 transition">
                      {{ u.initials }}
                    </div>
                    <div class="text-xs text-gray-700 dark:text-gray-300 mt-1 truncate w-14">{{ u.firstName }}</div>
                  </button>
                </div>
              </div>
            </div>

            <div class="flex-1 overflow-y-auto scrollbar-thin p-2">
              <div v-for="conv in filteredConversations" :key="conv.id" @click="onConversationClick(conv)" class="flex items-start gap-3 p-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <div class="relative flex-shrink-0">
                  <div class="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                    {{ conv.user.initials }}
                  </div>
                  <div v-if="conv.user.online" class="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></div>
                </div>

                <div class="flex-1 min-w-0">
                  <div class="flex items-center justify-between">
                    <div class="text-sm font-medium text-gray-900 dark:text-white truncate">{{ conv.user.name }}</div>
                    <div class="text-xs text-gray-500 dark:text-gray-400 ml-2">{{ conv.lastMessage.timeLabel }}</div>
                  </div>
                  <div class="text-sm text-gray-600 dark:text-gray-400 truncate" :class="{'font-semibold': conv.unread > 0}">
                    {{ conv.lastMessage.text }}
                  </div>
                </div>

                <div v-if="conv.unread > 0" class="flex items-center justify-center w-6 h-6 bg-blue-600 text-white text-xs rounded-full">
                  {{ conv.unread }}
                </div>
              </div>

              <div v-if="filteredConversations.length === 0" class="p-6 text-center text-sm text-gray-500 dark:text-gray-400">
                <Icon name="lucide:inbox" size="40" class="mx-auto mb-2 text-gray-400" />
                No conversations
              </div>
            </div>
          </section>
        </div>

        <!-- RIGHT COLUMN: Chat window -->
        <div :class="chatPaneClass" class="flex flex-col">
          <div v-if="!selectedConversation" class="flex-1 flex items-center justify-center p-8">
            <div class="text-center">
              <Icon name="lucide:message-circle" size="56" class="mx-auto text-gray-400 mb-4" />
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Your Messages</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">Select a conversation to start messaging.</p>
              <div class="mt-4">
                <button @click="openNewMessage" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Send a message</button>
              </div>
            </div>
          </div>

          <template v-else>
            <!-- header -->
            <div class="p-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
              <div class="flex items-center gap-3">
                <!-- close on small screens -->
                <button v-if="isMobile" @click="closeChat" class="p-2 rounded-md lg:hidden hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Icon name="lucide:x" size="18" />
                </button>

                <div class="relative">
                  <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                    {{ selectedConversation.user.initials }}
                  </div>
                  <div v-if="selectedConversation.user.online" class="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></div>
                </div>

                <div>
                  <div class="text-sm font-medium text-gray-900 dark:text-white">{{ selectedConversation.user.name }}</div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">{{ selectedConversation.user.online ? 'Online' : 'Offline' }}</div>
                </div>
              </div>

              <div class="flex items-center gap-2">
                <button class="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Icon name="lucide:phone" size="16" />
                </button>
                <button class="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Icon name="lucide:video" size="16" />
                </button>
                <button class="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Icon name="lucide:more-vertical" size="16" />
                </button>
              </div>
            </div>

            <!-- messages -->
            <div ref="messagesContainer" class="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
              <div v-for="m in selectedConversation.messages" :key="m.id" :class="['flex', m.sender === 'me' ? 'justify-end' : 'justify-start']">
                <div :class="['max-w-[75%]', m.sender === 'me' ? 'text-right' : '']">
                  <div :class="['inline-block rounded-2xl px-4 py-2', m.sender === 'me' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white']">
                    <div class="text-sm">{{ m.text }}</div>
                  </div>
                  <div class="text-xs text-gray-500 dark:text-gray-400 mt-1" :class="m.sender === 'me' ? 'text-right' : ''">{{ m.time }}</div>
                </div>
              </div>

              <div v-if="isTyping" class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs font-semibold">
                  {{ selectedConversation.user.initials }}
                </div>
                <div class="bg-gray-100 dark:bg-gray-700 rounded-2xl px-3 py-2">
                  <div class="flex gap-1">
                    <div class="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                    <div class="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style="animation-delay:0.12s"></div>
                    <div class="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style="animation-delay:0.24s"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- input -->
            <div class="p-4 border-t border-gray-100 dark:border-gray-700">
              <div class="flex items-end gap-2">
                <button class="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"><Icon name="lucide:paperclip" size="16" /></button>
                <button class="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"><Icon name="lucide:image" size="16" /></button>
                <div class="flex-1">
                  <textarea v-model="newMessage" @keydown.enter.prevent="sendMessage" rows="1" class="w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-md text-sm text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none resize-none"></textarea>
                </div>
                <button :disabled="!newMessage.trim()" @click="sendMessage" class="p-2 rounded-md bg-blue-600 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700">
                  <Icon name="lucide:send" size="16" />
                </button>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Page meta
definePageMeta({ layout: false });

// router
const router = useRouter();

// reactive state
const searchQuery = ref('');
const selectedConversation = ref<any | null>(null);
const newMessage = ref('');
const isTyping = ref(false);
const messagesContainer = ref<HTMLElement | null>(null);
const activeSocialTab = ref<'requests' | 'suggested'>('requests');
const showChatOnly = ref(false);
const isMobile = ref(false);

// -- Sample data (consistent fields; replace with real data / API)
const conversations = ref<Array<any>>([
  {
    id: 'conv_1',
    user: { id: 'user_1', name: 'John Doe', initials: 'JD', username: 'johndoe', online: true, lastActive: '2025-11-19T10:30:00Z' },
    lastMessage: { text: 'See you at the match tomorrow!', timeLabel: '2m', lastAt: '2025-11-19T10:29:00Z' },
    unread: 2,
    messages: [
      { id: 'm1', sender: 'them', text: 'Hey! Are you going to the match?', time: '10:30 AM' },
      { id: 'm2', sender: 'me', text: 'Yes! I already got my tickets', time: '10:32 AM' },
    ],
  },
  {
    id: 'conv_2',
    user: { id: 'user_2', name: 'Sarah Smith', initials: 'SS', username: 'sarahsmith', online: false, lastActive: '2025-11-19T08:10:00Z' },
    lastMessage: { text: 'Thanks for the match highlights!', timeLabel: '1h', lastAt: '2025-11-19T09:45:00Z' },
    unread: 0,
    messages: [
      { id: 'm1', sender: 'them', text: 'Did you see the derby yesterday?', time: '9:15 AM' },
    ],
  },
  {
    id: 'conv_3',
    user: { id: 'user_3', name: 'Mike Johnson', initials: 'MJ', username: 'mikej', online: true, lastActive: '2025-11-19T09:50:00Z' },
    lastMessage: { text: 'Training starts at 4pm', timeLabel: '3h', lastAt: '2025-11-19T07:05:00Z' },
    unread: 1,
    messages: [
      { id: 'm1', sender: 'them', text: 'Are you coming to training today?', time: '2:00 PM' },
    ],
  },
]);

const friendRequests = ref<Array<any>>([
  { id: 'req_1', name: 'Alex Turner', username: 'alexturner', initials: 'AT', online: true, lastActive: '2025-11-19T10:20:00Z' },
  { id: 'req_2', name: 'Emma Wilson', username: 'emmaw', initials: 'EW', online: false, lastActive: '2025-11-18T18:00:00Z' },
]);

const suggestedUsers = ref<Array<any>>([
  { id: 'sugg_1', name: 'David Brown', username: 'davidbrown', initials: 'DB', online: true, lastActive: '2025-11-19T10:25:00Z' },
  { id: 'sugg_2', name: 'Jessica Lee', username: 'jessicaL', initials: 'JL', online: true, lastActive: '2025-11-19T09:55:00Z' },
  { id: 'sugg_3', name: 'Chris Martin', username: 'chrismartin', initials: 'CM', online: false, lastActive: '2025-11-17T12:00:00Z' },
]);

// Computed: conversations filtered by search
const filteredConversations = computed(() => {
  if (!searchQuery.value) return conversations.value;
  const q = searchQuery.value.toLowerCase();
  return conversations.value.filter(c => c.user.name.toLowerCase().includes(q) || (c.user.username && c.user.username.toLowerCase().includes(q)));
});

// Create a list of online users to show under search (small UI components).
// Strategy / sorting: show people who are currently online, sorted by lastActive (most recent first).
// We collect from conversations, suggestedUsers and friendRequests to show "other online people".
const onlineUsers = computed(() => {
  const pool: Record<string, any> = {};

  // helper to add user if online
  function add(u: any) {
    if (!u || !u.id) return;
    if (!pool[u.id]) pool[u.id] = { ...u };
    // prefer lastActive if present
    if (u.lastActive) pool[u.id].lastActive = u.lastActive;
  }

  conversations.value.forEach(c => add(c.user));
  suggestedUsers.value.forEach(add);
  friendRequests.value.forEach(add);

  // convert to array and filter online
  return Object.values(pool)
    .filter((u: any) => u.online)
    .map((u: any) => ({
      id: u.id,
      name: u.name,
      initials: u.initials,
      username: u.username,
      online: u.online,
      lastActive: u.lastActive || null,
      // small helper for UI
      firstName: u.name ? u.name.split(' ')[0] : u.username || '',
    }))
    .sort((a: any, b: any) => {
      // sort by most recent lastActive (descending). If missing, push to end.
      const ta = a.lastActive ? new Date(a.lastActive).getTime() : 0;
      const tb = b.lastActive ? new Date(b.lastActive).getTime() : 0;
      return tb - ta;
    })
    .slice(0, 8); // keep UI small + compact
});

// UI helpers
const tabBtnClass = (active: boolean) =>
  'px-2 py-1 rounded-md text-xs font-medium ' + (active ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200');

// class for chat pane to expand on mobile
const chatPaneClass = computed(() => {
  return showChatOnly.value ? 'lg:col-span-3 col-span-1' : 'lg:col-span-2';
});

// Methods: select conversation (open chat)
const selectConversation = (conv: any) => {
  selectedConversation.value = conv;
  conv.unread = 0;
  nextTick(scrollToBottom);
};

// When user clicks a conversation from list (on mobile this switches view)
const onConversationClick = (conv: any) => {
  selectConversation(conv);
  if (window.innerWidth < 1024) showChatOnly.value = true;
};

// start a chat from an online user (creates conversation if missing)
const startChatFromList = (user: any) => {
  // find by user.id if present or username
  const existing = conversations.value.find(c => c.user.id === user.id || c.user.username === user.username);
  if (existing) {
    onConversationClick(existing);
    return;
  }

  // create new conversation skeleton (client-side); backend integration should create on server
  const newConv = {
    id: 'conv_' + Date.now(),
    user: {
      id: user.id || 'u_' + Date.now(),
      name: user.name || user.username,
      initials: user.initials || (user.name ? user.name.split(' ').map((s: string) => s[0]).join('').slice(0,2).toUpperCase() : 'U'),
      username: user.username || '',
      online: true,
      lastActive: user.lastActive || new Date().toISOString(),
    },
    lastMessage: { text: 'No messages yet', timeLabel: 'now', lastAt: new Date().toISOString() },
    unread: 0,
    messages: [],
  };

  conversations.value.unshift(newConv);
  onConversationClick(newConv);
};

// close chat (mobile)
const closeChat = () => {
  showChatOnly.value = false;
  selectedConversation.value = null;
};

// sending message
const sendMessage = () => {
  if (!newMessage.value.trim() || !selectedConversation.value) return;

  const msg = {
    id: 'm_' + Date.now(),
    sender: 'me',
    text: newMessage.value.trim(),
    time: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }),
  };
  selectedConversation.value.messages.push(msg);
  selectedConversation.value.lastMessage = { text: msg.text, timeLabel: 'Just now', lastAt: new Date().toISOString() };
  newMessage.value = '';
  nextTick(scrollToBottom);

  // simulated reply (demo)
  setTimeout(() => {
    isTyping.value = true;
    setTimeout(() => {
      isTyping.value = false;
      const reply = {
        id: 'm_' + (Date.now() + 1),
        sender: 'them',
        text: 'Thanks — got it!',
        time: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }),
      };
      selectedConversation.value.messages.push(reply);
      nextTick(scrollToBottom);
    }, 1200);
  }, 800);
};

// scrolling helper
const scrollToBottom = () => {
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }
};

// friend requests actions
const acceptRequest = (id: string) => {
  const req = friendRequests.value.find(r => r.id === id);
  if (!req) return;
  // remove request locally
  friendRequests.value = friendRequests.value.filter(r => r.id !== id);
  // optionally create conversation / add to contacts
  const conv = {
    id: 'conv_' + Date.now(),
    user: { id: req.id, name: req.name, initials: req.initials, username: req.username || '', online: req.online, lastActive: req.lastActive || new Date().toISOString() },
    lastMessage: { text: 'You are now friends', timeLabel: 'now', lastAt: new Date().toISOString() },
    unread: 0,
    messages: [],
  };
  conversations.value.unshift(conv);
};

const rejectRequest = (id: string) => {
  friendRequests.value = friendRequests.value.filter(r => r.id !== id);
};

const sendFriendRequest = (id: string) => {
  suggestedUsers.value = suggestedUsers.value.filter(s => s.id !== id);
  // emit or call API to actually send request
};

// small actions
const openNewMessage = () => { /* open compose modal (implement) */ };
const openCreateGroup = () => { /* open create group modal (implement) */ };

// router/back
const handleBack = () => {
  if (window.history.length > 1) router.back();
  else router.push('/');
};

// responsive behavior
onMounted(() => {
  const update = () => {
    isMobile.value = window.innerWidth < 1024;
    if (!isMobile.value) {
      showChatOnly.value = false; // always show both on lg+
    }
  };
  update();
  window.addEventListener('resize', update);
  onUnmounted(() => window.removeEventListener('resize', update));
});
</script>

<style scoped>
/* minimal adjustments */
.scrollbar-thin::-webkit-scrollbar { height: 8px; width: 8px; }
.scrollbar-thin::-webkit-scrollbar-thumb { background-color: rgba(0,0,0,0.1); border-radius: 8px; }
</style>