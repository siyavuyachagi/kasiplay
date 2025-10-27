<template>
  <article
    v-for="post in feedPosts"
    :key="post.id"
    class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
    <div class="p-3 sm:p-4">
      <div class="flex items-start space-x-3">
        <div
          :class="[
            'w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0',
            post.authorGradient,
          ]">
          {{ post.authorInitials }}
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-start justify-between">
            <div class="flex flex-wrap items-center gap-2 min-w-0">
              <span
                class="font-semibold text-sm sm:text-base text-gray-900 dark:text-white truncate"
                >{{ post.authorName }}</span
              >
              <icon
                v-if="post.verified"
                name="lucide:badge-check"
                size="16"
                class="text-blue-500 flex-shrink-0" />
              <span
                :class="[
                  'px-2 py-0.5 text-xs font-semibold rounded-full flex-shrink-0',
                  post.authorTypeColor,
                ]">
                {{ post.authorType }}
              </span>
            </div>
            <button
              class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 flex-shrink-0 ml-2">
              <icon name="lucide:more-horizontal" size="20" />
            </button>
          </div>
          <div
            class="flex flex-wrap items-center gap-1 text-xs text-gray-500 dark:text-gray-400 mt-1">
            <span v-if="post.authorTeam">{{ post.authorTeam }}</span>
            <span v-if="post.authorTeam">•</span>
            <span>{{ post.timestamp }}</span>
          </div>
        </div>
      </div>

      <div class="mt-3">
        <p
          class="text-sm sm:text-base text-gray-900 dark:text-white whitespace-pre-line">
          {{ post.content }}
        </p>
        <div v-if="post.hashtags" class="mt-2 flex flex-wrap gap-2">
          <span
            v-for="tag in post.hashtags"
            :key="tag"
            class="text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
            {{ tag }}
          </span>
        </div>
      </div>

      <div v-if="post.media" class="mt-3 rounded-lg overflow-hidden">
        <div
          v-if="post.media.type === 'image'"
          class="w-full h-48 sm:h-64 md:h-80 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
          <icon
            name="lucide:image"
            size="48"
            class="text-gray-400 dark:text-gray-500" />
        </div>
        <div
          v-else-if="post.media.type === 'video'"
          class="w-full h-48 sm:h-64 md:h-80 bg-gradient-to-br from-blue-200 to-blue-300 dark:from-blue-900 dark:to-blue-800 flex items-center justify-center">
          <icon
            name="lucide:play-circle"
            size="48"
            class="text-blue-500 dark:text-blue-400" />
        </div>
      </div>

      <div
        v-if="post.matchScore"
        class="mt-3 p-3 sm:p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600">
        <div class="flex items-center justify-between gap-2">
          <div class="flex items-center space-x-2 min-w-0">
            <div
              class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center flex-shrink-0">
              <icon name="lucide:shield" size="14" class="text-blue-600" />
            </div>
            <span
              class="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white truncate"
              >{{ post.matchScore.home }}</span
            >
          </div>
          <div class="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            <span
              class="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white">
              {{ post.matchScore.homeScore }} -
              {{ post.matchScore.awayScore }}
            </span>
          </div>
          <div class="flex items-center space-x-2 min-w-0">
            <span
              class="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white truncate"
              >{{ post.matchScore.away }}</span
            >
            <div
              class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center flex-shrink-0">
              <icon name="lucide:shield" size="14" class="text-green-600" />
            </div>
          </div>
        </div>
        <div class="text-xs text-center text-gray-500 dark:text-gray-400 mt-2">
          {{ post.matchScore.status }}
        </div>
      </div>
    </div>

    <div
      class="px-3 sm:px-4 py-3 border-t border-gray-200 dark:border-gray-700">
      <div class="flex items-center justify-between gap-1">
        <button
          class="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1.5 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-lg transition-colors">
          <icon name="lucide:heart" size="18" />
          <span class="text-xs sm:text-sm font-medium">{{ post.likes }}</span>
        </button>
        <button
          class="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1.5 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/10 rounded-lg transition-colors">
          <icon name="lucide:message-circle" size="18" />
          <span class="text-xs sm:text-sm font-medium">{{
            post.comments
          }}</span>
        </button>
        <button
          class="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1.5 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/10 rounded-lg transition-colors">
          <icon name="lucide:repeat-2" size="18" />
          <span class="text-xs sm:text-sm font-medium">{{ post.shares }}</span>
        </button>
        <button
          class="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1.5 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/10 rounded-lg transition-colors">
          <icon name="lucide:share-2" size="18" />
        </button>
      </div>
    </div>

    <div
      v-if="post.topComment"
      class="px-3 sm:px-4 py-3 bg-gray-50 dark:bg-gray-700/30 border-t border-gray-200 dark:border-gray-700">
      <div class="flex items-start space-x-2">
        <div
          class="w-6 h-6 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
          {{ post.topComment.authorInitials }}
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center space-x-2">
            <span
              class="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white"
              >{{ post.topComment.author }}</span
            >
            <span class="text-xs text-gray-500 dark:text-gray-400">{{
              post.topComment.timestamp
            }}</span>
          </div>
          <p class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mt-1">
            {{ post.topComment.content }}
          </p>
        </div>
      </div>
      <button
        class="text-xs text-blue-600 dark:text-blue-400 hover:underline mt-2">
        View all {{ post.comments }} comments
      </button>
    </div>
  </article>
</template>

<script setup lang="ts">
interface Post {
  id: number;
  authorName: string;
  authorInitials: string;
  authorType: "Federation" | "Club" | "Player" | "Fan" | "Official";
  authorTypeColor: string;
  authorGradient: string;
  authorTeam?: string;
  verified: boolean;
  timestamp: string;
  content: string;
  hashtags?: string[];
  media?: {
    type: "image" | "video";
  };
  matchScore?: {
    home: string;
    away: string;
    homeScore: number;
    awayScore: number;
    status: string;
  };
  likes: number;
  comments: number;
  shares: number;
  topComment?: {
    author: string;
    authorInitials: string;
    content: string;
    timestamp: string;
  };
}

const feedPosts: Post[] = [
  {
    id: 1,
    authorName: "SAFA Gauteng",
    authorInitials: "SG",
    authorType: "Federation",
    authorTypeColor:
      "bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400",
    authorGradient: "bg-gradient-to-br from-purple-500 to-purple-700",
    verified: true,
    timestamp: "2 hours ago",
    content:
      "🏆 ANNOUNCEMENT: The Kasi Premier League Finals have been scheduled for December 15th at FNB Stadium!\n\nTicket sales open November 1st. This is going to be the biggest event of the year! 🎉",
    hashtags: ["#KasiPremierLeague", "#SAFAGauteng", "#Finals2025"],
    likes: 2453,
    comments: 189,
    shares: 567,
    topComment: {
      author: "Thabo M.",
      authorInitials: "TM",
      content: "Can't wait! Already planning to take the whole family 🔥",
      timestamp: "1 hour ago",
    },
  },
  {
    id: 2,
    authorName: "Chiefs FC Official",
    authorInitials: "CF",
    authorType: "Club",
    authorTypeColor:
      "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
    authorGradient: "bg-gradient-to-br from-blue-500 to-blue-700",
    authorTeam: "Chiefs FC",
    verified: true,
    timestamp: "3 hours ago",
    content:
      "FULL TIME! What a performance from the boys! ⚽🔥\n\nSibusiso with another brace! That's 15 goals this season. MVP material right there! 👑",
    hashtags: ["#ChiefsFC", "#KasiPremierLeague", "#Amakhosi"],
    media: { type: "image" },
    matchScore: {
      home: "Chiefs FC",
      away: "Pirates United",
      homeScore: 3,
      awayScore: 1,
      status: "Full Time",
    },
    likes: 3891,
    comments: 432,
    shares: 289,
    topComment: {
      author: "Nomsa D.",
      authorInitials: "ND",
      content: "Sibusiso is on fire this season! 🔥🔥🔥",
      timestamp: "2 hours ago",
    },
  },
  {
    id: 3,
    authorName: "Sibusiso Mthembu",
    authorInitials: "SM",
    authorType: "Player",
    authorTypeColor:
      "bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400",
    authorGradient: "bg-gradient-to-br from-green-500 to-green-700",
    authorTeam: "Chiefs FC",
    verified: true,
    timestamp: "5 hours ago",
    content:
      "Big game today! 💪 Been working hard all week in training. Time to show what we're made of. Let's get this W for the fans! 🦅",
    hashtags: ["#Matchday", "#ChiefsFC", "#Focus"],
    media: { type: "image" },
    likes: 1823,
    comments: 267,
    shares: 145,
  },
  {
    id: 4,
    authorName: 'Thabo "TK" Khumalo',
    authorInitials: "TK",
    authorType: "Fan",
    authorTypeColor:
      "bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400",
    authorGradient: "bg-gradient-to-br from-orange-500 to-orange-700",
    verified: false,
    timestamp: "8 hours ago",
    content:
      "Who else is hyped for today's derby?! 🔥 Chiefs vs Pirates is always fire! Predictions?\n\nI'm going 2-1 Chiefs. Sibusiso to score first! ⚽",
    hashtags: ["#SowetoDerby", "#KasiFootball", "#Predictions"],
    likes: 634,
    comments: 198,
    shares: 42,
    topComment: {
      author: "Mandla S.",
      authorInitials: "MS",
      content: "Pirates 3-2! We coming for that top spot 💪",
      timestamp: "7 hours ago",
    },
  },
  {
    id: 5,
    authorName: "Pirates United Official",
    authorInitials: "PU",
    authorType: "Club",
    authorTypeColor:
      "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
    authorGradient: "bg-gradient-to-br from-gray-700 to-gray-900",
    authorTeam: "Pirates United",
    verified: true,
    timestamp: "10 hours ago",
    content:
      "🏴‍☠️ SQUAD ANNOUNCEMENT 🏴‍☠️\n\nOur starting XI for today's massive clash! Coach has made some interesting changes. What do you think of the lineup? 👀",
    hashtags: ["#PiratesUnited", "#SquadAnnouncement", "#OnceAPirate"],
    media: { type: "image" },
    likes: 2156,
    comments: 387,
    shares: 203,
  },
  {
    id: 6,
    authorName: "Referee David Mokoena",
    authorInitials: "DM",
    authorType: "Official",
    authorTypeColor:
      "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400",
    authorGradient: "bg-gradient-to-br from-yellow-500 to-yellow-700",
    verified: true,
    timestamp: "12 hours ago",
    content:
      "Looking forward to officiating today's big game. Expecting a competitive but fair match. Let's keep it clean and respect the beautiful game! ⚽👏",
    hashtags: ["#Respect", "#FairPlay", "#KasiFootball"],
    likes: 892,
    comments: 56,
    shares: 28,
  },
];
</script>
