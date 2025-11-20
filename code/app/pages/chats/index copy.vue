<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Header -->
      <div class="mb-2 flex items-center justify-between">
        <div>
          <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-1">
            Chats
          </h1>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            Connect with players, teams, and fans
          </p>
        </div>
        <button
          @click="handleBack"
          class="inline-flex items-center space-x-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
          <Icon name="lucide:arrow-left" size="20" />
          <span>Back</span>
        </button>
      </div>

      <!-- Main Layout -->
      <div class="grid lg:grid-cols-12 gap-4">
        <!-- LEFT SIDEBAR - Navigation & Actions -->
        <div
          v-show="!showChatOnly || !isMobile"
          class="lg:col-span-3 space-y-4">
          <!-- Quick Actions -->
          <div
            class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
            <h3
              class="text-sm font-semibold text-gray-900 dark:text-white mb-3">
              Quick Actions
            </h3>
            <div class="space-y-2">
              <button
                @click="openNewMessage"
                class="w-full flex items-center gap-3 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Icon name="lucide:edit" size="20" />
                <span class="font-medium">New Message</span>
              </button>
              <button
                @click="openCreateGroup"
                class="w-full flex items-center gap-3 px-4 py-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                <Icon name="lucide:users-round" size="20" />
                <span class="font-medium">Create Group</span>
              </button>
            </div>
          </div>

          <!-- Chat Types -->
          <div
            class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
            <h3
              class="text-sm font-semibold text-gray-900 dark:text-white mb-3">
              Filter Chats
            </h3>
            <div class="space-y-2">
              <button
                v-for="type in chatTypes"
                :key="type.id"
                @click="selectedChatType = type.id"
                :class="[
                  'w-full flex items-center justify-between px-4 py-2.5 rounded-lg transition-colors',
                  selectedChatType === type.id
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700',
                ]">
                <div class="flex items-center gap-3">
                  <Icon :name="type.icon" size="18" />
                  <span class="text-sm font-medium">{{ type.label }}</span>
                </div>
                <span
                  v-if="type.count"
                  class="text-xs px-2 py-0.5 bg-gray-200 dark:bg-gray-700 rounded-full">
                  {{ type.count }}
                </span>
              </button>
            </div>
          </div>

          <!-- Active Groups -->
          <div
            class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
            <h3
              class="text-sm font-semibold text-gray-900 dark:text-white mb-3">
              Your Groups
            </h3>
            <div class="space-y-2">
              <button
                v-for="group in userGroups.slice(0, 5)"
                :key="group.id"
                @click="selectGroup(group)"
                class="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-left">
                <div
                  class="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-semibold text-sm">
                  {{ group.initials }}
                </div>
                <div class="flex-1 min-w-0">
                  <p
                    class="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {{ group.name }}
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    {{ group.members }} members
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>

        <!-- CENTER - Chat List & Window -->
        <div
          :class="centerPaneClass"
          class="lg:col-span-6 flex flex-col bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <!-- Chat List View -->
          <div
            v-if="!selectedConversation"
            class="flex flex-col h-[calc(100vh-200px)]">
            <!-- Search & Filter -->
            <div class="p-4 border-b border-gray-200 dark:border-gray-700">
              <div class="relative mb-4">
                <Icon
                  name="lucide:search"
                  size="18"
                  class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search chats, users, groups..."
                  class="w-full pl-10 pr-4 py-2.5 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>

              <!-- Online Users Carousel -->
              <div v-if="onlineUsers.length" class="mb-4">
                <div class="flex items-center justify-between mb-2">
                  <span
                    class="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">
                    Online Now ({{ onlineUsers.length }})
                  </span>
                  <button
                    class="text-xs text-blue-600 dark:text-blue-400 hover:underline">
                    See all
                  </button>
                </div>
                <div class="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                  <button
                    v-for="u in onlineUsers"
                    :key="u.id"
                    @click="startChatFromOnline(u)"
                    class="flex-shrink-0 flex flex-col items-center group">
                    <div
                      class="relative w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-semibold group-hover:ring-4 group-hover:ring-blue-400/50 transition">
                      {{ u.initials }}
                      <div
                        class="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></div>
                    </div>
                    <span
                      class="text-xs text-gray-700 dark:text-gray-300 mt-1.5 truncate w-20 text-center">
                      {{ u.firstName }}
                    </span>
                  </button>
                </div>
              </div>

              <!-- Tab Filters -->
              <div class="flex gap-2">
                <button
                  v-for="tab in chatTabs"
                  :key="tab.id"
                  @click="activeTab = tab.id"
                  :class="[
                    'px-3 py-1.5 rounded-lg text-sm font-medium transition-colors',
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600',
                  ]">
                  {{ tab.label }}
                  <span v-if="tab.badge" class="ml-1">({{ tab.badge }})</span>
                </button>
              </div>
            </div>

            <!-- Conversations List -->
            <div class="flex-1 overflow-y-auto scrollbar-thin">
              <div
                v-for="conv in filteredConversations"
                :key="conv.id"
                @click="selectConversation(conv)"
                class="flex items-start gap-3 p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer transition-colors border-b border-gray-100 dark:border-gray-700/50">
                <div class="relative flex-shrink-0">
                  <div
                    :class="[
                      'w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold',
                      conv.type === 'group'
                        ? 'bg-gradient-to-br from-purple-500 to-pink-600'
                        : 'bg-gradient-to-br from-blue-500 to-purple-600',
                    ]">
                    {{ conv.user.initials }}
                  </div>
                  <div
                    v-if="conv.user.online && conv.type !== 'group'"
                    class="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></div>
                  <Icon
                    v-if="conv.type === 'group'"
                    name="lucide:users"
                    size="14"
                    class="absolute bottom-0 right-0 bg-purple-600 text-white p-0.5 rounded-full border-2 border-white dark:border-gray-800" />
                </div>

                <div class="flex-1 min-w-0">
                  <div class="flex items-center justify-between mb-1">
                    <div class="flex items-center gap-2">
                      <span
                        class="text-sm font-semibold text-gray-900 dark:text-white truncate">
                        {{ conv.user.name }}
                      </span>
                      <Icon
                        v-if="conv.verified"
                        name="lucide:badge-check"
                        size="14"
                        class="text-blue-500 flex-shrink-0" />
                    </div>
                    <span
                      class="text-xs text-gray-500 dark:text-gray-400 ml-2 flex-shrink-0">
                      {{ conv.lastMessage.timeLabel }}
                    </span>
                  </div>
                  <div class="flex items-center justify-between">
                    <p
                      class="text-sm text-gray-600 dark:text-gray-400 truncate"
                      :class="{ 'font-semibold': conv.unread > 0 }">
                      <span v-if="conv.type === 'group'" class="mr-1">
                        {{ conv.lastMessage.sender }}:
                      </span>
                      {{ conv.lastMessage.text }}
                    </p>
                    <div
                      v-if="conv.unread > 0"
                      class="flex-shrink-0 ml-2 min-w-[20px] h-5 px-1.5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">
                      {{ conv.unread > 99 ? "99+" : conv.unread }}
                    </div>
                  </div>
                </div>
              </div>

              <!-- Empty State -->
              <div
                v-if="filteredConversations.length === 0"
                class="p-12 text-center">
                <Icon
                  name="lucide:message-circle-off"
                  size="56"
                  class="mx-auto mb-4 text-gray-400" />
                <h3
                  class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  No chats found
                </h3>
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Try adjusting your filters or start a new conversation
                </p>
                <button
                  @click="openNewMessage"
                  class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Start Chatting
                </button>
              </div>
            </div>
          </div>

          <!-- Active Chat View -->
          <div v-else class="flex flex-col h-[calc(100vh-200px)]">
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
                        ? 'bg-gradient-to-br from-purple-500 to-pink-600'
                        : 'bg-gradient-to-br from-blue-500 to-purple-600',
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
                    v-if="m.sender !== 'me' && selectedConversation.type === 'group'"
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

        <!-- RIGHT SIDEBAR - Social & Discovery -->
        <div
          v-show="!isMobile"
          class="lg:col-span-3 hidden lg:flex flex-col gap-4">
          <!-- Platform Search -->
          <div
            class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
            <h3
              class="text-sm font-semibold text-gray-900 dark:text-white mb-3">
              Find Users
            </h3>
            <div class="relative mb-3">
              <Icon
                name="lucide:search"
                size="16"
                class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                v-model="platformSearch"
                type="text"
                placeholder="Search all users..."
                class="w-full pl-9 pr-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div class="space-y-2 max-h-48 overflow-y-auto scrollbar-thin">
              <button
                v-for="user in searchedUsers"
                :key="user.id"
                @click="startChatWithUser(user)"
                class="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div
                  class="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-semibold text-xs">
                  {{ user.initials }}
                </div>
                <div class="flex-1 min-w-0 text-left">
                  <p
                    class="text-xs font-medium text-gray-900 dark:text-white truncate">
                    {{ user.name }}
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    @{{ user.username }}
                  </p>
                </div>
              </button>
            </div>
          </div>

          <!-- Friend Requests -->
          <div
            class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-sm font-semibold text-gray-900 dark:text-white">
                Friend Requests
              </h3>
              <span
                v-if="friendRequests.length"
                class="text-xs px-2 py-0.5 bg-blue-600 text-white rounded-full">
                {{ friendRequests.length }}
              </span>
            </div>
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
                class="text-xs text-gray-500 dark:text-gray-400 text-center py-4">
                No pending requests
              </p>
            </div>
          </div>

          <!-- Suggested Users -->
          <div
            class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
            <h3
              class="text-sm font-semibold text-gray-900 dark:text-white mb-3">
              Suggested Connections
            </h3>
            <div class="space-y-3">
              <div
                v-for="user in suggestedUsers.slice(0, 5)"
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
                  class="px-3 py-1.5 text-xs font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 flex-shrink-0">
                  Add
                </button>
              </div>
            </div>
          </div>

          <!-- Popular Groups -->
          <div
            class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
            <h3
              class="text-sm font-semibold text-gray-900 dark:text-white mb-3">
              Popular Groups
            </h3>
            <div class="space-y-3">
              <button
                v-for="group in popularGroups.slice(0, 4)"
                :key="group.id"
                @click="joinGroup(group)"
                class="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-left">
                <div
                  class="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
                  {{ group.initials }}
                </div>
                <div class="flex-1 min-w-0">
                  <p
                    class="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {{ group.name }}
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    {{ group.members }} members
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, nextTick } from 'vue';
import { useRouter } from 'vue-router';

// Types (you can adapt these to match your backend or state shape)
interface User {
  id: string;
  name: string;
  username: string;
  initials: string;
  online: boolean;
}

interface Message {
  id: string;
  sender: 'me' | string; // "me" or userId
  senderName?: string;   // used for group messages
  text: string;
  time: string;
}

interface Conversation {
  id: string;
  type: 'group' | 'direct';
  user: User; // for direct, this is the other user; for group, maybe group metadata in user
  lastMessage: {
    text: string;
    timeLabel: string;
    sender?: string;
  };
  messages: Message[];
  unread: number;
  verified?: boolean;
  members?: number; // for group
}

interface ChatType {
  id: string;
  label: string;
  icon: string;
  count?: number;
}

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

const searchQuery = ref('');
const platformSearch = ref('');
const selectedConversation = ref<Conversation | null>(null);
const newMessage = ref('');
const isTyping = ref(false);
const messagesContainer = ref<HTMLElement | null>(null);
const showChatOnly = ref(false);
const isMobile = ref(false);
const activeTab = ref<'all' | 'groups' | 'unread'>('all');
const selectedChatType = ref<string>('all');

// Example static data — replace with real data
const chatTypes = ref<ChatType[]>([
  { id: 'all', label: 'All', icon: 'lucide:message-circle', count: undefined },
  { id: 'direct', label: 'Direct', icon: 'lucide:user', count: undefined },
  { id: 'group', label: 'Groups', icon: 'lucide:users', count: undefined },
]);

const userGroups = ref<Group[]>([
  // fill from API
  { id: 'g1', name: 'Team Alpha', initials: 'TA', members: 5 },
  { id: 'g2', name: 'Gamers', initials: 'GM', members: 12 },
]);

const onlineUsers = ref<User[]>([
  // fill this possibly from sockets or presence
  { id: 'u1', name: 'Alice Johnson', username: 'alice', initials: 'AJ', online: true },
  { id: 'u2', name: 'Bob Smith', username: 'bob', initials: 'BS', online: true },
]);

const allConversations = ref<Conversation[]>([
  // example initial data
  {
    id: 'c1',
    type: 'direct',
    user: { id: 'u1', name: 'Alice Johnson', username: 'alice', initials: 'AJ', online: true },
    lastMessage: { text: 'Hey!', timeLabel: '2m ago' },
    messages: [
      { id: 'm1', sender: 'u1', senderName: 'Alice', text: 'Hello!', time: '10:00 AM' },
      { id: 'm2', sender: 'me', text: 'Hi Alice', time: '10:02 AM' },
    ],
    unread: 1,
    verified: false,
  },
  // more conversations...
]);

const friendRequests = ref<User[]>([
  { id: 'u3', name: 'Charlie Brown', username: 'charlie', initials: 'CB', online: false },
]);

const suggestedUsers = ref<User[]>([
  { id: 'u4', name: 'Dana White', username: 'dana', initials: 'DW', online: false },
  { id: 'u5', name: 'Evan Green', username: 'evan', initials: 'EG', online: false },
]);

const popularGroups = ref<Group[]>([
  { id: 'g3', name: 'Pro Players', initials: 'PP', members: 23 },
  { id: 'g4', name: 'Casual Gamers', initials: 'CG', members: 45 },
]);

const chatTabs = ref<Tab[]>([
  { id: 'all', label: 'All', badge: undefined },
  { id: 'unread', label: 'Unread', badge: computed(() => allConversations.value.filter(c => c.unread > 0).length).value },
  { id: 'groups', label: 'Groups', badge: undefined },
]);

// Computed: filter conversations based on chat type + search + activeTab
const filteredConversations = computed(() => {
  let convs = allConversations.value;

  // Filter by chat type (all / direct / group)
  if (selectedChatType.value !== 'all') {
    convs = convs.filter(c => c.type === selectedChatType.value);
  }

  // Filter by active tab (unread, groups, all)
  if (activeTab.value === 'unread') {
    convs = convs.filter(c => c.unread > 0);
  } else if (activeTab.value === 'groups') {
    convs = convs.filter(c => c.type === 'group');
  }

  // Filter by search query
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase();
    convs = convs.filter(c => {
      return c.user.name.toLowerCase().includes(q)
        || c.lastMessage.text.toLowerCase().includes(q);
    });
  }

  return convs;
});

// Methods
function handleBack() {
  router.back();
}

function openNewMessage() {
  // Possibly navigate to "start new conversation" page 
  // or open a modal
  // For now, clear selectedConversation so user sees chat list
  selectedConversation.value = null;
  // You may also open a UI modal for selecting a user
}

function openCreateGroup() {
  // Open a group creation flow (modal, page, etc)
  console.log('Create group clicked');
}

// When the user clicks on a group or conversation in the list
function selectConversation(conv: Conversation) {
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
    id: `m-${Date.now()}`, // replace with real id from backend
    sender: 'me',
    text,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  };

  // Append locally
  selectedConversation.value.messages.push(msg);

  // Reset input
  newMessage.value = '';

  // Simulate sending to backend
  try {
    // await api.sendMessage(selectedConversation.id, msg)
    // On success, maybe mark as sent
  } catch (err) {
    console.error('Failed to send message', err);
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
function startChatFromOnline(user: User) {
  // Check if conversation already exists
  let conv = allConversations.value.find(c => c.user.id === user.id && c.type === 'direct');
  if (!conv) {
    conv = {
      id: `c-${Date.now()}`,
      type: 'direct',
      user,
      lastMessage: { text: '', timeLabel: '' },
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
  friendRequests.value = friendRequests.value.filter(u => u.id !== userId);
  console.log('Accepted friend request from', userId);
}

function rejectRequest(userId: string) {
  friendRequests.value = friendRequests.value.filter(u => u.id !== userId);
  console.log('Rejected friend request from', userId);
}

function sendFriendRequest(userId: string) {
  console.log('Send friend request to', userId);
  // Trigger API call
}

// Joining groups
function joinGroup(group: Group) {
  console.log('Join this group:', group);
  // call API or add to userGroups
}

// Select a group from sidebar
function selectGroup(group: Group) {
  // Find or create a conversation for this group
  let conv = allConversations.value.find(c => c.id === group.id && c.type === 'group');
  if (!conv) {
    conv = {
      id: group.id,
      type: 'group',
      user: { // using user object to store group info is a hack; replace as needed
        id: group.id,
        name: group.name,
        username: '',
        initials: group.initials,
        online: false,
      },
      lastMessage: { text: '', timeLabel: '' },
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
  window.addEventListener('resize', updateIsMobile);
});
  
// Watch newMessage to trigger typing indicator
watch(newMessage, (val, oldVal) => {
  if (val && !oldVal) {
    startTyping();
  } else if (!val && oldVal) {
    stopTyping();
  }
});

// Expose for template
// (all reactive variables and methods above are usable in template directly in `<script setup>`)

</script>
