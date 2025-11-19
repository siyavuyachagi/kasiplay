<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto p-4">
      <!-- Back Button -->
      <button
        @click="handleBack"
        class="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-4">
        <Icon name="lucide:arrow-left" size="20" />
        <span>Back</span>
      </button>

      <!-- Main Content Grid -->
      <div class="grid lg:grid-cols-3 gap-4 h-[calc(100vh-120px)]">
        <!-- Conversations List -->
        <div class="lg:col-span-1 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col">
          <!-- Header -->
          <div class="p-4 border-b border-gray-200 dark:border-gray-700">
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-xl font-bold text-gray-900 dark:text-white">Messages</h2>
              <button
                @click="openNewMessage"
                class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <Icon name="lucide:edit" size="20" class="text-blue-600 dark:text-blue-400" />
              </button>
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
                class="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 border border-transparent focus:border-blue-500 rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none transition-colors" />
            </div>
          </div>

          <!-- Conversations -->
          <div class="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
            <div
              v-for="conversation in filteredConversations"
              :key="conversation.id"
              @click="selectConversation(conversation)"
              class="flex items-start space-x-3 p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors border-b border-gray-200 dark:border-gray-700"
              :class="{
                'bg-blue-50 dark:bg-blue-900/20': selectedConversation?.id === conversation.id,
              }">
              <!-- Avatar -->
              <div class="relative flex-shrink-0">
                <div
                  class="w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span class="text-white font-bold">{{ conversation.user.initials }}</span>
                </div>
                <div
                  v-if="conversation.user.online"
                  class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></div>
              </div>

              <!-- Content -->
              <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between mb-1">
                  <p class="text-sm font-semibold text-gray-900 dark:text-white truncate">
                    {{ conversation.user.name }}
                  </p>
                  <span class="text-xs text-gray-500 dark:text-gray-400 flex-shrink-0 ml-2">
                    {{ conversation.lastMessage.time }}
                  </span>
                </div>
                <p
                  class="text-sm text-gray-600 dark:text-gray-400 truncate"
                  :class="{ 'font-semibold': conversation.unread > 0 }">
                  {{ conversation.lastMessage.text }}
                </p>
              </div>

              <!-- Unread Badge -->
              <div
                v-if="conversation.unread > 0"
                class="flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                <span class="text-xs font-bold text-white">{{ conversation.unread }}</span>
              </div>
            </div>

            <!-- Empty State -->
            <div
              v-if="filteredConversations.length === 0"
              class="p-8 text-center">
              <Icon name="lucide:inbox" size="48" class="mx-auto text-gray-400 mb-4" />
              <p class="text-sm text-gray-500 dark:text-gray-400">No conversations found</p>
            </div>
          </div>
        </div>

        <!-- Chat Window -->
        <div class="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col">
          <!-- No Conversation Selected -->
          <div
            v-if="!selectedConversation"
            class="flex-1 flex items-center justify-center p-8">
            <div class="text-center">
              <Icon name="lucide:message-circle" size="64" class="mx-auto text-gray-400 mb-4" />
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Your Messages</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Select a conversation to start messaging
              </p>
              <button
                @click="openNewMessage"
                class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                Send a message
              </button>
            </div>
          </div>

          <!-- Active Chat -->
          <template v-else>
            <!-- Chat Header -->
            <div class="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <div class="relative">
                  <div
                    class="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <span class="text-white font-bold text-sm">
                      {{ selectedConversation.user.initials }}
                    </span>
                  </div>
                  <div
                    v-if="selectedConversation.user.online"
                    class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></div>
                </div>
                <div>
                  <p class="font-semibold text-gray-900 dark:text-white">
                    {{ selectedConversation.user.name }}
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    {{ selectedConversation.user.online ? 'Online' : 'Offline' }}
                  </p>
                </div>
              </div>

              <div class="flex items-center space-x-2">
                <button
                  class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                  <Icon name="lucide:phone" size="20" class="text-gray-600 dark:text-gray-400" />
                </button>
                <button
                  class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                  <Icon name="lucide:video" size="20" class="text-gray-600 dark:text-gray-400" />
                </button>
                <button
                  class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                  <Icon name="lucide:more-vertical" size="20" class="text-gray-600 dark:text-gray-400" />
                </button>
              </div>
            </div>

            <!-- Messages -->
            <div
              ref="messagesContainer"
              class="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
              <div
                v-for="message in selectedConversation.messages"
                :key="message.id"
                class="flex"
                :class="{ 'justify-end': message.sender === 'me' }">
                <div
                  class="max-w-[70%]"
                  :class="{ 'order-2': message.sender !== 'me' }">
                  <div
                    class="rounded-2xl px-4 py-2"
                    :class="
                      message.sender === 'me'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                    ">
                    <p class="text-sm">{{ message.text }}</p>
                  </div>
                  <p
                    class="text-xs text-gray-500 dark:text-gray-400 mt-1"
                    :class="{ 'text-right': message.sender === 'me' }">
                    {{ message.time }}
                  </p>
                </div>
              </div>

              <!-- Typing Indicator -->
              <div v-if="isTyping" class="flex items-center space-x-2">
                <div class="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span class="text-xs font-bold">{{ selectedConversation.user.initials }}</span>
                </div>
                <div class="bg-gray-100 dark:bg-gray-700 rounded-2xl px-4 py-3">
                  <div class="flex space-x-1">
                    <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                    <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.4s"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Input Area -->
            <div class="p-4 border-t border-gray-200 dark:border-gray-700">
              <div class="flex items-end space-x-2">
                <button
                  class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                  <Icon name="lucide:paperclip" size="20" class="text-gray-600 dark:text-gray-400" />
                </button>
                <button
                  class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                  <Icon name="lucide:image" size="20" class="text-gray-600 dark:text-gray-400" />
                </button>
                <div class="flex-1">
                  <textarea
                    v-model="newMessage"
                    @keydown.enter.prevent="sendMessage"
                    placeholder="Type a message..."
                    rows="1"
                    class="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-transparent focus:border-blue-500 rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none resize-none"></textarea>
                </div>
                <button
                  @click="sendMessage"
                  :disabled="!newMessage.trim()"
                  class="p-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-colors">
                  <Icon name="lucide:send" size="20" />
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
definePageMeta({ layout: false });

const router = useRouter();
const searchQuery = ref('');
const selectedConversation = ref<any>(null);
const newMessage = ref('');
const isTyping = ref(false);
const messagesContainer = ref<HTMLElement | null>(null);

const conversations = ref([
  {
    id: '1',
    user: {
      name: 'John Doe',
      initials: 'JD',
      online: true,
    },
    lastMessage: {
      text: 'See you at the match tomorrow!',
      time: '2m ago',
    },
    unread: 2,
    messages: [
      { id: '1', sender: 'them', text: 'Hey! Are you going to the match?', time: '10:30 AM' },
      { id: '2', sender: 'me', text: 'Yes! I already got my tickets', time: '10:32 AM' },
      { id: '3', sender: 'them', text: 'Awesome! See you at the match tomorrow!', time: '10:35 AM' },
    ],
  },
  {
    id: '2',
    user: {
      name: 'Sarah Smith',
      initials: 'SS',
      online: false,
    },
    lastMessage: {
      text: 'Thanks for the match highlights!',
      time: '1h ago',
    },
    unread: 0,
    messages: [
      { id: '1', sender: 'them', text: 'Did you see the derby yesterday?', time: '9:15 AM' },
      { id: '2', sender: 'me', text: 'Yes! What a game. Pirates dominated', time: '9:20 AM' },
      { id: '3', sender: 'them', text: 'Thanks for the match highlights!', time: '9:45 AM' },
    ],
  },
  {
    id: '3',
    user: {
      name: 'Mike Johnson',
      initials: 'MJ',
      online: true,
    },
    lastMessage: {
      text: 'Training starts at 4pm',
      time: '3h ago',
    },
    unread: 1,
    messages: [
      { id: '1', sender: 'them', text: 'Are you coming to training today?', time: '2:00 PM' },
      { id: '2', sender: 'me', text: 'Yes, what time?', time: '2:05 PM' },
      { id: '3', sender: 'them', text: 'Training starts at 4pm', time: '2:10 PM' },
    ],
  },
]);

const filteredConversations = computed(() => {
  if (!searchQuery.value) return conversations.value;
  return conversations.value.filter(c =>
    c.user.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const selectConversation = (conversation: any) => {
  selectedConversation.value = conversation;
  conversation.unread = 0;
  nextTick(() => {
    scrollToBottom();
  });
};

const sendMessage = () => {
  if (!newMessage.value.trim() || !selectedConversation.value) return;

  const message = {
    id: Date.now().toString(),
    sender: 'me',
    text: newMessage.value,
    time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
  };

  selectedConversation.value.messages.push(message);
  selectedConversation.value.lastMessage = {
    text: message.text,
    time: 'Just now',
  };

  newMessage.value = '';

  nextTick(() => {
    scrollToBottom();
  });

  // Simulate typing response
  setTimeout(() => {
    isTyping.value = true;
    setTimeout(() => {
      isTyping.value = false;
      const response = {
        id: (Date.now() + 1).toString(),
        sender: 'them',
        text: 'Got it! Thanks for the message 👍',
        time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
      };
      selectedConversation.value.messages.push(response);
      nextTick(() => {
        scrollToBottom();
      });
    }, 2000);
  }, 1000);
};

const scrollToBottom = () => {
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }
};

const openNewMessage = () => {
  // Implement new message modal/flow
  console.log('Open new message');
};

const handleBack = () => {
  if (window.history.length > 1) {
    router.back();
  } else {
    router.push('/');
  }
};
</script>