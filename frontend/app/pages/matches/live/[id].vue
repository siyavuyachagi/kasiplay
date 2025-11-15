<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto p-4 space-y-4">
      <!-- Back Button -->
      <NuxtLink
        to="/matches"
        class="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
        <icon name="lucide:arrow-left" size="20" />
        <span>Back to Matches</span>
      </NuxtLink>

      <!-- Main Content Grid -->
      <div class="grid lg:grid-cols-3 gap-4">
        <!-- Left Column: Video Player & Match Info -->
        <div class="lg:col-span-2 space-y-4">
          <!-- Video Player -->
          <div class="bg-black rounded-xl overflow-hidden relative group">
            <!-- Live Badge -->
            <div
              v-if="match.isLive"
              class="absolute top-4 left-4 z-20 px-3 py-1 bg-red-600 rounded-full flex items-center space-x-2">
              <span class="relative flex h-2 w-2">
                <span
                  class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span
                  class="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <span class="text-white text-sm font-bold">LIVE</span>
            </div>

            <!-- Video Element -->
            <div class="relative w-full" style="padding-bottom: 56.25%">
              <video
                ref="videoPlayer"
                class="absolute inset-0 w-full h-full"
                :poster="match.thumbnail"
                @loadedmetadata="onVideoLoaded">
                <source :src="streamUrl" type="application/x-mpegURL" />
                Your browser does not support video playback.
              </video>

              <!-- Loading Spinner -->
              <div
                v-if="isLoading"
                class="absolute inset-0 flex items-center justify-center bg-black/50">
                <icon
                  name="lucide:loader-2"
                  size="48"
                  class="text-white animate-spin" />
              </div>

              <!-- Error Message -->
              <div
                v-if="hasError"
                class="absolute inset-0 flex items-center justify-center bg-black/80">
                <div class="text-center text-white px-6">
                  <icon
                    name="lucide:alert-circle"
                    size="48"
                    class="mx-auto mb-4" />
                  <p class="text-xl font-bold mb-2">Stream Error</p>
                  <p class="text-sm opacity-75">{{ errorMessage }}</p>
                  <button
                    @click="retryStream"
                    class="mt-4 px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-medium transition-colors">
                    Retry
                  </button>
                </div>
              </div>

              <!-- Controls Overlay -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                <!-- Top Controls -->
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-3">
                    <span class="text-white text-sm font-medium">
                      {{ match.competition }}
                    </span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <!-- Quality Selector -->
                    <div class="relative" ref="qualityMenuRef">
                      <button
                        @click="showQualityMenu = !showQualityMenu"
                        class="p-2 rounded-lg bg-black/50 hover:bg-black/70 text-white transition-colors">
                        <icon name="lucide:settings" size="20" />
                      </button>
                      <div
                        v-if="showQualityMenu"
                        class="absolute right-0 top-full mt-2 bg-gray-900 rounded-lg shadow-xl py-2 min-w-[120px]">
                        <button
                          v-for="q in qualities"
                          :key="q"
                          @click="changeQuality(q)"
                          class="w-full px-4 py-2 text-left text-white hover:bg-gray-800 transition-colors flex items-center justify-between">
                          <span>{{ q }}</span>
                          <icon
                            v-if="quality === q"
                            name="lucide:check"
                            size="16"
                            class="text-blue-500" />
                        </button>
                      </div>
                    </div>

                    <!-- PiP Toggle -->
                    <button
                      @click="togglePiP"
                      class="p-2 rounded-lg bg-black/50 hover:bg-black/70 text-white transition-colors">
                      <icon name="lucide:picture-in-picture-2" size="20" />
                    </button>
                  </div>
                </div>

                <!-- Center Play Button -->
                <div class="flex items-center justify-center">
                  <button
                    @click="togglePlay"
                    class="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center justify-center transition-all transform hover:scale-110">
                    <icon
                      :name="isPlaying ? 'lucide:pause' : 'lucide:play'"
                      size="32"
                      class="text-white"
                      :class="{ 'ml-1': !isPlaying }" />
                  </button>
                </div>

                <!-- Bottom Controls -->
                <div class="space-y-3">
                  <!-- Progress Bar -->
                  <div v-if="!match.isLive" class="flex items-center space-x-3">
                    <span class="text-white text-sm font-medium min-w-[45px]">
                      {{ formatTime(currentTime) }}
                    </span>
                    <div class="flex-1 relative group/progress">
                      <input
                        type="range"
                        :value="currentTime"
                        :max="duration"
                        @input="seekTo($event)"
                        class="w-full h-1 bg-white/30 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:cursor-pointer group-hover/progress:[&::-webkit-slider-thumb]:scale-125 transition-transform" />
                    </div>
                    <span class="text-white text-sm font-medium min-w-[45px]">
                      {{ formatTime(duration) }}
                    </span>
                  </div>

                  <!-- Control Buttons -->
                  <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-2">
                      <!-- Play/Pause -->
                      <button
                        @click="togglePlay"
                        class="p-2 rounded-lg hover:bg-white/10 text-white transition-colors">
                        <icon
                          :name="isPlaying ? 'lucide:pause' : 'lucide:play'"
                          size="24" />
                      </button>

                      <!-- Skip Controls (for replays) -->
                      <template v-if="!match.isLive">
                        <button
                          @click="skip(-10)"
                          class="p-2 rounded-lg hover:bg-white/10 text-white transition-colors">
                          <icon name="lucide:rotate-ccw" size="20" />
                        </button>
                        <button
                          @click="skip(10)"
                          class="p-2 rounded-lg hover:bg-white/10 text-white transition-colors">
                          <icon name="lucide:rotate-cw" size="20" />
                        </button>
                      </template>

                      <!-- Volume -->
                      <div class="flex items-center space-x-2">
                        <button
                          @click="toggleMute"
                          class="p-2 rounded-lg hover:bg-white/10 text-white transition-colors">
                          <icon
                            :name="
                              isMuted
                                ? 'lucide:volume-x'
                                : volume > 0.5
                                ? 'lucide:volume-2'
                                : 'lucide:volume-1'
                            "
                            size="20" />
                        </button>
                        <input
                          type="range"
                          :value="volume"
                          min="0"
                          max="1"
                          step="0.1"
                          @input="changeVolume($event)"
                          class="w-20 h-1 bg-white/30 rounded-full appearance-none cursor-pointer slider-thumb-small" />
                      </div>
                    </div>

                    <div class="flex items-center space-x-2">
                      <!-- Playback Speed (for replays) -->
                      <div
                        v-if="!match.isLive"
                        class="relative"
                        ref="speedMenuRef">
                        <button
                          @click="showSpeedMenu = !showSpeedMenu"
                          class="px-3 py-1 rounded-lg bg-black/50 hover:bg-black/70 text-white text-sm font-medium transition-colors">
                          {{ playbackRate }}x
                        </button>
                        <div
                          v-if="showSpeedMenu"
                          class="absolute right-0 bottom-full mb-2 bg-gray-900 rounded-lg shadow-xl py-2 min-w-[80px]">
                          <button
                            v-for="rate in playbackRates"
                            :key="rate"
                            @click="changeSpeed(rate)"
                            class="w-full px-4 py-2 text-left text-white hover:bg-gray-800 transition-colors flex items-center justify-between">
                            <span>{{ rate }}x</span>
                            <icon
                              v-if="playbackRate === rate"
                              name="lucide:check"
                              size="16"
                              class="text-blue-500" />
                          </button>
                        </div>
                      </div>

                      <!-- Fullscreen -->
                      <button
                        @click="toggleFullscreen"
                        class="p-2 rounded-lg hover:bg-white/10 text-white transition-colors">
                        <icon
                          :name="
                            isFullscreen ? 'lucide:minimize' : 'lucide:maximize'
                          "
                          size="20" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Match Score Card -->
          <div
            class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <div class="flex items-center justify-between mb-6">
              <span
                class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-medium rounded-full">
                {{ match.competition }}
              </span>
              <div
                v-if="match.isLive"
                class="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <icon name="lucide:clock" size="16" />
                <span class="text-sm font-medium">{{ match.minute }}'</span>
              </div>
            </div>

            <div class="grid grid-cols-3 gap-6 items-center">
              <!-- Home Team -->
              <div class="text-center">
                <div
                  class="w-20 h-20 mx-auto bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center mb-3">
                  <icon name="lucide:shield" size="40" class="text-gray-400" />
                </div>
                <h3 class="font-bold text-gray-900 dark:text-white mb-1">
                  {{ match.homeTeam }}
                </h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">Home</p>
              </div>

              <!-- Score -->
              <div class="text-center">
                <div
                  class="text-5xl font-bold text-gray-900 dark:text-white mb-2">
                  {{ match.homeScore }} - {{ match.awayScore }}
                </div>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  {{ match.date }} • {{ match.time }}
                </p>
              </div>

              <!-- Away Team -->
              <div class="text-center">
                <div
                  class="w-20 h-20 mx-auto bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center mb-3">
                  <icon name="lucide:shield" size="40" class="text-gray-400" />
                </div>
                <h3 class="font-bold text-gray-900 dark:text-white mb-1">
                  {{ match.awayTeam }}
                </h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">Away</p>
              </div>
            </div>
          </div>

          <!-- Tabs -->
          <div
            class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <div
              class="flex border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
              <button
                v-for="tab in tabs"
                :key="tab.id"
                @click="activeTab = tab.id"
                class="px-6 py-3 font-medium text-sm whitespace-nowrap transition-colors"
                :class="
                  activeTab === tab.id
                    ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                ">
                {{ tab.label }}
              </button>
            </div>

            <div class="p-6">
              <!-- Timeline Tab -->
              <div v-if="activeTab === 'timeline'" class="space-y-3">
                <div
                  v-for="event in matchEvents"
                  :key="event.id"
                  class="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div class="w-12 text-center flex-shrink-0">
                    <span
                      class="text-sm font-bold text-gray-900 dark:text-white">
                      {{ event.minute }}'
                    </span>
                  </div>
                  <div class="flex-shrink-0">
                    <div
                      class="w-8 h-8 rounded-full flex items-center justify-center"
                      :class="getEventColor(event.type)">
                      <icon :name="getEventIcon(event.type)" size="16" />
                    </div>
                  </div>
                  <div class="flex-1">
                    <p class="font-medium text-gray-900 dark:text-white">
                      {{ event.player }}
                    </p>
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                      {{ event.description }}
                    </p>
                  </div>
                </div>
              </div>

              <!-- Stats Tab -->
              <div v-if="activeTab === 'stats'" class="space-y-4">
                <div v-for="stat in matchStats" :key="stat.label">
                  <div class="flex items-center justify-between text-sm mb-2">
                    <span class="font-medium text-gray-900 dark:text-white">
                      {{ stat.home }}
                    </span>
                    <span class="text-gray-500 dark:text-gray-400">
                      {{ stat.label }}
                    </span>
                    <span class="font-medium text-gray-900 dark:text-white">
                      {{ stat.away }}
                    </span>
                  </div>
                  <div
                    class="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      class="absolute left-0 h-full bg-blue-600 rounded-full"
                      :style="{ width: stat.homePercent + '%' }"></div>
                    <div
                      class="absolute right-0 h-full bg-purple-600 rounded-full"
                      :style="{ width: stat.awayPercent + '%' }"></div>
                  </div>
                </div>
              </div>

              <!-- Lineups Tab -->
              <div
                v-if="activeTab === 'lineups'"
                class="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 class="font-bold text-gray-900 dark:text-white mb-4">
                    {{ match.homeTeam }}
                  </h4>
                  <div class="space-y-2">
                    <div
                      v-for="player in homeLineup"
                      :key="player.number"
                      class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                      <div
                        class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {{ player.number }}
                      </div>
                      <span class="text-sm text-gray-900 dark:text-white">
                        {{ player.name }}
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 class="font-bold text-gray-900 dark:text-white mb-4">
                    {{ match.awayTeam }}
                  </h4>
                  <div class="space-y-2">
                    <div
                      v-for="player in awayLineup"
                      :key="player.number"
                      class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                      <div
                        class="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {{ player.number }}
                      </div>
                      <span class="text-sm text-gray-900 dark:text-white">
                        {{ player.name }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Live Chat & Updates -->
        <div class="space-y-4">
          <!-- Viewers Count -->
          <div
            class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <icon
                  name="lucide:eye"
                  size="20"
                  class="text-blue-600 dark:text-blue-400" />
                <span class="text-sm text-gray-600 dark:text-gray-400"
                  >Watching now</span
                >
              </div>
              <span class="text-2xl font-bold text-gray-900 dark:text-white">
                {{ match.viewers.toLocaleString() }}
              </span>
            </div>
          </div>

          <!-- Live Comments -->
          <div
            class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div class="p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 class="font-bold text-gray-900 dark:text-white">
                Live Comments
              </h3>
            </div>
            <div
              class="h-[500px] overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-gray-100 dark:scrollbar-track-gray-700">
              <div
                v-for="comment in liveComments"
                :key="comment.id"
                class="flex items-start space-x-3">
                <div
                  class="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <span class="text-white text-xs font-bold">
                    {{ comment.user.charAt(0) }}
                  </span>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-baseline space-x-2">
                    <span
                      class="text-sm font-medium text-gray-900 dark:text-white">
                      {{ comment.user }}
                    </span>
                    <span class="text-xs text-gray-500 dark:text-gray-400">
                      {{ comment.time }}
                    </span>
                  </div>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    {{ comment.message }}
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 border-t border-gray-200 dark:border-gray-700">
              <div class="flex items-center space-x-2">
                <input
                  v-model="newComment"
                  type="text"
                  placeholder="Add a comment..."
                  class="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  @keyup.enter="sendComment" />
                <button
                  @click="sendComment"
                  class="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                  <icon name="lucide:send" size="20" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const mediaPlayer = useMediaPlayer();

const {
  playerRef,
  isPlaying,
  isPaused,
  isLoading,
  isMuted,
  isFullscreen,
  currentTime,
  duration,
  volume,
  playbackRate,
  quality,
  hasError,
  errorMessage,
  qualities,
  playbackRates,
  initPlayer,
  togglePlay,
  seek,
  skip,
  setVolume,
  toggleMute,
  setPlaybackRate,
  setQuality,
  toggleFullscreen,
  togglePiP,
  formatTime,
} = mediaPlayer;

definePageMeta({ layout: false });

// Video player refs
const videoPlayer = ref<HTMLVideoElement | null>(null);
const qualityMenuRef = ref<HTMLElement | null>(null);
const speedMenuRef = ref<HTMLElement | null>(null);

// UI State
const showQualityMenu = ref(false);
const showSpeedMenu = ref(false);
const activeTab = ref("timeline");
const newComment = ref("");

// Match data
const match = ref({
  id: route.params.id,
  homeTeam: "Orlando Pirates",
  awayTeam: "Kaizer Chiefs",
  homeScore: 2,
  awayScore: 1,
  competition: "Kasi Premier League",
  date: "Nov 15, 2025",
  time: "15:00",
  venue: "FNB Stadium",
  isLive: true,
  minute: 67,
  viewers: 42568,
  thumbnail: "https://via.placeholder.com/1920x1080",
});

// Stream URL (in production, this would come from your streaming service)
const streamUrl = ref("https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8");

const tabs = [
  { id: "timeline", label: "Timeline" },
  { id: "stats", label: "Statistics" },
  { id: "lineups", label: "Lineups" },
];

const matchEvents = ref([
  {
    id: 1,
    minute: 67,
    type: "goal",
    player: "Monnapule Saleng",
    description: "Goal! Assisted by Thabiso Monyane",
    team: "home",
  },
  {
    id: 2,
    minute: 56,
    type: "goal",
    player: "Ashley Du Preez",
    description: "Goal! Solo effort",
    team: "away",
  },
  {
    id: 3,
    minute: 45,
    type: "yellow",
    player: "Yusuf Maart",
    description: "Yellow card for tactical foul",
    team: "away",
  },
  {
    id: 4,
    minute: 38,
    type: "goal",
    player: "Patrick Maswanganyi",
    description: "Goal! Header from corner",
    team: "home",
  },
]);

const matchStats = ref([
  { label: "Possession", home: 65, away: 35, homePercent: 65, awayPercent: 35 },
  { label: "Shots", home: 14, away: 8, homePercent: 64, awayPercent: 36 },
  {
    label: "Shots on Target",
    home: 7,
    away: 3,
    homePercent: 70,
    awayPercent: 30,
  },
  { label: "Corners", home: 6, away: 2, homePercent: 75, awayPercent: 25 },
  { label: "Fouls", home: 9, away: 12, homePercent: 43, awayPercent: 57 },
]);

const homeLineup = ref([
  { number: 1, name: "Sipho Chaine" },
  { number: 2, name: "Thabiso Monyane" },
  { number: 4, name: "Olisa Ndah" },
  { number: 5, name: "Innocent Maela" },
  { number: 6, name: "Miguel Timm" },
  { number: 10, name: "Patrick Maswanganyi" },
  { number: 11, name: "Monnapule Saleng" },
  { number: 9, name: "Evidence Makgopa" },
]);

const awayLineup = ref([
  { number: 1, name: "Itumeleng Khune" },
  { number: 2, name: "Reeve Frosler" },
  { number: 4, name: "Thatayaone Ditlhokwe" },
  { number: 6, name: "Yusuf Maart" },
  { number: 10, name: "Mduduzi Shabalala" },
  { number: 9, name: "Ashley Du Preez" },
]);

const liveComments = ref([
  {
    id: 1,
    user: "John Doe",
    message: "What a goal by Saleng! 🔥",
    time: "2m ago",
  },
  {
    id: 2,
    user: "Sarah Smith",
    message: "Pirates dominating this match!",
    time: "3m ago",
  },
  {
    id: 3,
    user: "Mike Johnson",
    message: "Chiefs need to wake up!",
    time: "5m ago",
  },
]);

// Initialize player
onMounted(() => {
  if (videoPlayer.value) {
    initPlayer(videoPlayer.value);
    playerRef.value = videoPlayer.value;
  }

  // Click outside to close menus
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});

// Methods
const onVideoLoaded = () => {
  console.log("Video loaded");
};

const retryStream = () => {
  if (videoPlayer.value) {
    videoPlayer.value.load();
  }
};

const changeQuality = (newQuality: string) => {
  setQuality(newQuality);
  showQualityMenu.value = false;
};

const changeSpeed = (rate: number) => {
  setPlaybackRate(rate);
  showSpeedMenu.value = false;
};

const changeVolume = (event: Event) => {
  const target = event.target as HTMLInputElement;
  setVolume(parseFloat(target.value));
};

const seekTo = (event: Event) => {
  const target = event.target as HTMLInputElement;
  seek(parseFloat(target.value));
};

const sendComment = () => {
  if (!newComment.value.trim()) return;

  liveComments.value.unshift({
    id: Date.now(),
    user: "You",
    message: newComment.value,
    time: "Just now",
  });

  newComment.value = "";
};

const getEventIcon = (type: string) => {
  switch (type) {
    case "goal":
      return "lucide:circle-dot";
    case "yellow":
      return "lucide:square";
    case "red":
      return "lucide:square";
    case "substitution":
      return "lucide:repeat";
    case "kickoff":
      return "lucide:play-circle";
    default:
      return "lucide:info";
  }
};

const getEventColor = (type: string) => {
  switch (type) {
    case "goal":
      return "bg-green-500 text-white";
    case "yellow":
      return "bg-yellow-500 text-white";
    case "red":
      return "bg-red-500 text-white";
    case "substitution":
      return "bg-blue-500 text-white";
    case "kickoff":
      return "bg-gray-500 text-white";
    default:
      return "bg-gray-500 text-white";
  }
};

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement;

  if (qualityMenuRef.value && !qualityMenuRef.value.contains(target)) {
    showQualityMenu.value = false;
  }

  if (speedMenuRef.value && !speedMenuRef.value.contains(target)) {
    showSpeedMenu.value = false;
  }
};

// Simulate live updates for demo
onMounted(() => {
  if (match.value.isLive) {
    const updateInterval = setInterval(() => {
      match.value.minute++;

      // Simulate random viewer changes
      match.value.viewers += Math.floor(Math.random() * 100) - 50;

      // Stop at 90 minutes
      if (match.value.minute >= 90) {
        clearInterval(updateInterval);
        match.value.isLive = false;
      }
    }, 60000); // Update every minute

    onUnmounted(() => {
      clearInterval(updateInterval);
    });
  }
});

// Keyboard shortcuts
onMounted(() => {
  const handleKeyPress = (e: KeyboardEvent) => {
    if (
      e.target instanceof HTMLInputElement ||
      e.target instanceof HTMLTextAreaElement
    ) {
      return;
    }

    switch (e.key.toLowerCase()) {
      case " ":
      case "k":
        e.preventDefault();
        togglePlay();
        break;
      case "f":
        e.preventDefault();
        toggleFullscreen();
        break;
      case "m":
        e.preventDefault();
        toggleMute();
        break;
      case "arrowleft":
        e.preventDefault();
        skip(-10);
        break;
      case "arrowright":
        e.preventDefault();
        skip(10);
        break;
      case "arrowup":
        e.preventDefault();
        setVolume(Math.min(1, volume.value + 0.1));
        break;
      case "arrowdown":
        e.preventDefault();
        setVolume(Math.max(0, volume.value - 0.1));
        break;
    }
  };

  window.addEventListener("keydown", handleKeyPress);

  onUnmounted(() => {
    window.removeEventListener("keydown", handleKeyPress);
  });
});
</script>

<style scoped>
/* app/assets/app.css */

@import "tailwindcss";

/* Custom Slider Thumb Styles */
.slider-thumb::-webkit-slider-thumb {
  appearance: none;
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 9999px;
  background-color: white;
  cursor: pointer;
  transition: transform 0.2s;
}

.slider-thumb:hover::-webkit-slider-thumb {
  transform: scale(1.25);
}

.slider-thumb::-moz-range-thumb {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 9999px;
  background-color: white;
  cursor: pointer;
  border: none;
}

.slider-thumb-small::-webkit-slider-thumb {
  appearance: none;
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 9999px;
  background-color: white;
  cursor: pointer;
}

.slider-thumb-small::-moz-range-thumb {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 9999px;
  background-color: white;
  cursor: pointer;
  border: none;
}

/* Custom Scrollbar Styles */
.scrollbar-thin {
  scrollbar-width: thin;
}

.scrollbar-thin::-webkit-scrollbar {
  width: 6px;
}

.scrollbar-thumb-gray-300::-webkit-scrollbar-thumb {
  background-color: rgb(209 213 219);
  border-radius: 9999px;
}

.scrollbar-thumb-gray-600::-webkit-scrollbar-thumb {
  background-color: rgb(75 85 99);
  border-radius: 9999px;
}

.scrollbar-track-gray-100::-webkit-scrollbar-track {
  background-color: rgb(243 244 246);
  border-radius: 9999px;
}

.scrollbar-track-gray-700::-webkit-scrollbar-track {
  background-color: rgb(55 65 81);
  border-radius: 9999px;
}

.scrollbar-thumb-gray-300::-webkit-scrollbar-thumb:hover,
.scrollbar-thumb-gray-600::-webkit-scrollbar-thumb:hover {
  background-color: rgb(156 163 175);
}

/* Dark mode scrollbar */
.dark .scrollbar-thumb-gray-600::-webkit-scrollbar-thumb {
  background-color: rgb(75 85 99);
}

.dark .scrollbar-thumb-gray-600::-webkit-scrollbar-thumb:hover {
  background-color: rgb(107 114 128);
}

.dark .scrollbar-track-gray-700::-webkit-scrollbar-track {
  background-color: rgb(55 65 81);
}
</style>
