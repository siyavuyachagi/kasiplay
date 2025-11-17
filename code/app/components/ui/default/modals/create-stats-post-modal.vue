<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-start justify-center bg-black/50 dark:bg-black/70 backdrop-blur-sm overflow-y-auto pt-20 pb-10"
        @click.self="closeModal">
        <div
          class="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 relative transition-all duration-300 mx-4">
          <!-- Header -->
          <div
            class="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 class="text-xl font-bold text-gray-900 dark:text-white">
              Share Match Stats
            </h2>
            <button
              @click="closeModal"
              class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Close">
              <icon name="lucide:x" size="20" class="text-gray-500" />
            </button>
          </div>

          <!-- Content -->
          <form @submit.prevent="handleSubmit" class="p-4 space-y-4">
            <!-- User Info -->
            <div class="flex items-center space-x-3">
              <div
                class="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold shrink-0">
                SC
              </div>
              <div>
                <p class="font-semibold text-gray-900 dark:text-white">
                  Siyavuya Chagi
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  @siyavuyachagi
                </p>
              </div>
            </div>

            <!-- Caption -->
            <textarea
              v-model="form.caption"
              rows="3"
              placeholder="Write about this match..."
              class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none resize-none placeholder-gray-400 dark:placeholder-gray-500"></textarea>

            <!-- Match Info -->
            <div class="space-y-4">
              <h3 class="font-semibold text-gray-900 dark:text-white">
                Match Details
              </h3>

              <div class="grid grid-cols-2 gap-4">
                <!-- Home Team -->
                <div>
                  <label
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Home Team *
                  </label>
                  <input
                    v-model="form.homeTeam"
                    type="text"
                    required
                    placeholder="Team name"
                    class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>

                <!-- Away Team -->
                <div>
                  <label
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Away Team *
                  </label>
                  <input
                    v-model="form.awayTeam"
                    type="text"
                    required
                    placeholder="Team name"
                    class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>

                <!-- Home Score -->
                <div>
                  <label
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Home Score *
                  </label>
                  <input
                    v-model.number="form.homeScore"
                    type="number"
                    min="0"
                    required
                    placeholder="0"
                    class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>

                <!-- Away Score -->
                <div>
                  <label
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Away Score *
                  </label>
                  <input
                    v-model.number="form.awayScore"
                    type="number"
                    min="0"
                    required
                    placeholder="0"
                    class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
              </div>

              <!-- Match Status -->
              <div>
                <label
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Match Status *
                </label>
                <select
                  v-model="form.status"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                  <option value="Full Time">Full Time</option>
                  <option value="Half Time">Half Time</option>
                  <option value="Live">Live</option>
                  <option value="Upcoming">Upcoming</option>
                </select>
              </div>
            </div>

            <!-- Additional Stats (Optional) -->
            <div class="space-y-3">
              <button
                type="button"
                @click="showAdvanced = !showAdvanced"
                class="flex items-center space-x-2 text-sm text-blue-600 dark:text-blue-400 hover:underline">
                <icon
                  :name="
                    showAdvanced
                      ? 'lucide:chevron-down'
                      : 'lucide:chevron-right'
                  "
                  size="16" />
                <span>{{ showAdvanced ? "Hide" : "Show" }} advanced stats</span>
              </button>

              <div v-if="showAdvanced" class="space-y-3 pl-4">
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      class="block text-sm text-gray-600 dark:text-gray-400 mb-1">
                      Possession (%)
                    </label>
                    <input
                      v-model.number="form.possession"
                      type="number"
                      min="0"
                      max="100"
                      placeholder="50"
                      class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                  <div>
                    <label
                      class="block text-sm text-gray-600 dark:text-gray-400 mb-1">
                      Shots on Target
                    </label>
                    <input
                      v-model.number="form.shotsOnTarget"
                      type="number"
                      min="0"
                      placeholder="0"
                      class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                  <div>
                    <label
                      class="block text-sm text-gray-600 dark:text-gray-400 mb-1">
                      Corners
                    </label>
                    <input
                      v-model.number="form.corners"
                      type="number"
                      min="0"
                      placeholder="0"
                      class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                  <div>
                    <label
                      class="block text-sm text-gray-600 dark:text-gray-400 mb-1">
                      Fouls
                    </label>
                    <input
                      v-model.number="form.fouls"
                      type="number"
                      min="0"
                      placeholder="0"
                      class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                </div>
              </div>
            </div>

            <!-- Hashtags -->
            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Hashtags (optional)
              </label>
              <input
                v-model="form.hashtags"
                type="text"
                placeholder="#MatchStats #FullTime"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>

            <!-- Actions -->
            <div
              class="flex items-center justify-end space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button
                type="button"
                @click="closeModal"
                class="px-4 py-2 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                Cancel
              </button>
              <button
                type="submit"
                :disabled="loading || !isValid"
                class="px-6 py-2 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all">
                <span v-if="!loading">Post Stats</span>
                <span v-else class="flex items-center space-x-2">
                  <icon name="lucide:loader-2" size="16" class="animate-spin" />
                  <span>Posting...</span>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const { activeModal, closeModal } = useCreatePost();

const loading = ref(false);
const showAdvanced = ref(false);

const form = reactive({
  caption: "",
  homeTeam: "",
  awayTeam: "",
  homeScore: 0,
  awayScore: 0,
  status: "Full Time",
  possession: null as number | null,
  shotsOnTarget: null as number | null,
  corners: null as number | null,
  fouls: null as number | null,
  hashtags: "",
});

const isOpen = computed(() => activeModal.value === "stats");

const isValid = computed(() => {
  return (
    form.homeTeam.trim() !== "" &&
    form.awayTeam.trim() !== "" &&
    form.homeScore >= 0 &&
    form.awayScore >= 0
  );
});

const handleSubmit = async () => {
  if (!isValid.value) return;

  loading.value = true;
  try {
    // TODO: Implement API call to create stats post
    console.log("Creating stats post:", form);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Reset form
    form.caption = "";
    form.homeTeam = "";
    form.awayTeam = "";
    form.homeScore = 0;
    form.awayScore = 0;
    form.status = "Full Time";
    form.possession = null;
    form.shotsOnTarget = null;
    form.corners = null;
    form.fouls = null;
    form.hashtags = "";

    closeModal();
  } catch (error) {
    console.error("Error creating stats post:", error);
  } finally {
    loading.value = false;
  }
};

// Reset form when modal closes
watch(isOpen, (newVal) => {
  if (!newVal) {
    form.caption = "";
    form.homeTeam = "";
    form.awayTeam = "";
    form.homeScore = 0;
    form.awayScore = 0;
    form.status = "Full Time";
    form.possession = null;
    form.shotsOnTarget = null;
    form.corners = null;
    form.fouls = null;
    form.hashtags = "";
    showAdvanced.value = false;
  }
});
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
