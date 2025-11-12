<template>
  <Teleport to="body">
    <div
      v-if="visible && hasMedia"
      class="fixed inset-0 z-50 flex items-center justify-center p-4"
      @click.self="close">
      <!-- overlay -->
      <div class="absolute inset-0 bg-black/80" aria-hidden="true"></div>

      <!-- container -->
      <div
        ref="container"
        class="relative w-full max-w-[1200px] h-[85vh] bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-2xl flex flex-col"
        @keydown.escape.prevent="close"
        tabindex="-1">
        <!-- top controls -->
        <div class="absolute top-3 right-3 z-30 flex items-center gap-2">
          <button
            class="w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center"
            @click="close"
            aria-label="Close"
            title="Close">
            <icon name="lucide:x" size="20" />
          </button>
        </div>

        <!-- left arrow -->
        <button
          v-if="hasPrev"
          @click.stop="prev"
          class="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center"
          aria-label="Previous"
          title="Previous">
          <icon name="lucide:chevron-left" size="20" />
        </button>

        <!-- right arrow -->
        <button
          v-if="hasNext"
          @click.stop="next"
          class="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center"
          aria-label="Next"
          title="Next">
          <icon name="lucide:chevron-right" size="20" />
        </button>

        <!-- media area -->
        <div
          class="flex-1 flex items-center justify-center relative bg-black/5 dark:bg-white/5">
          <!-- IMAGE -->
          <img
            v-if="selected && selected.type === 'image'"
            :src="selected.url"
            :alt="selected.title || 'Image'"
            class="max-h-[78vh] max-w-full object-contain"
            @click.stop
            draggable="false" />

          <!-- VIDEO -->
          <video
            v-if="selected && selected.type === 'video'"
            :src="selected.url"
            :poster="selected.thumbnailUrl"
            controls
            playsinline
            class="max-h-[78vh] max-w-full bg-black" />

          <!-- AUDIO -->
          <div v-if="selected && selected.type === 'audio'" class="w-full px-6">
            <div class="mx-auto max-w-3xl w-full">
              <div class="mb-4 text-center">
                <icon
                  name="lucide:volume-2"
                  size="36"
                  class="mx-auto text-gray-500 dark:text-gray-300" />
                <h3
                  class="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
                  {{ selected.title }}
                </h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  {{ selected.description }}
                </p>
              </div>
              <audio :src="selected.url" controls class="w-full"></audio>
            </div>
          </div>

          <!-- DOCUMENT (embed fallback) -->
          <div
            v-if="selected && selected.type === 'document'"
            class="w-full h-full">
            <div class="h-full">
              <!-- try to embed, fallback to link -->
              <iframe
                v-if="isEmbeddableDocument(selected.mimeType)"
                :src="selected.url"
                class="w-full h-full"
                frameborder="0"></iframe>

              <div v-else class="flex h-full items-center justify-center p-6">
                <div class="text-center">
                  <icon
                    name="lucide:file"
                    size="48"
                    class="mx-auto text-gray-500 dark:text-gray-300" />
                  <p class="mt-3 text-gray-700 dark:text-gray-300">
                    {{ selected.title }}
                  </p>
                  <a
                    :href="selected.url"
                    target="_blank"
                    rel="noopener"
                    class="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Open Document
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- fallback -->
          <div v-if="!selected" class="text-white">No media selected</div>
        </div>

        <!-- info + actions -->
        <div class="border-t border-gray-100 dark:border-gray-700 p-4">
          <div class="flex items-start justify-between gap-4">
            <div class="min-w-0">
              <h3
                class="text-lg font-semibold text-gray-900 dark:text-white truncate">
                {{ selected?.title }}
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 truncate">
                {{ selected?.description }}
              </p>
              <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {{ readableMeta(selected) }}
              </p>
            </div>

            <div class="flex items-center gap-3">
              <!-- likes (display-only) -->
              <button
                v-if="typeof selected?.likes !== 'undefined'"
                class="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600"
                @click.stop="emitLike"
                title="Like">
                <icon name="lucide:heart" size="16" />
                <span>{{ selected?.likes }}</span>
              </button>

              <!-- share -->
              <button
                class="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600"
                @click.stop="shareSelected"
                title="Share">
                <icon name="lucide:share-2" size="16" />
                <span>Share</span>
              </button>

              <!-- download -->
              <a
                :href="selected?.url"
                download
                class="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600"
                @click.stop
                title="Download">
                <icon name="lucide:download" size="16" />
                <span>Download</span>
              </a>
            </div>
          </div>

          <!-- thumbnails strip (images & videos) -->
          <div v-if="mediaThumbnails.length" class="mt-3 overflow-x-auto">
            <div class="flex items-center gap-2">
              <div
                v-for="(m, i) in media"
                :key="m.id || i"
                class="flex-shrink-0">
                <button
                  @click.stop="select(i)"
                  :class="[
                    'rounded-md p-0.5 border',
                    currentIndex === i
                      ? 'border-blue-500'
                      : 'border-transparent',
                  ]">
                  <div
                    class="w-20 h-12 rounded-md bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                    <template v-if="m.type === 'image'">
                      <img :src="m.url" class="w-full h-full object-cover" />
                    </template>
                    <template v-else-if="m.type === 'video'">
                      <img
                        :src="m.thumbnailUrl || m.url"
                        class="w-full h-full object-cover opacity-80" />
                    </template>
                    <template v-else-if="m.type === 'audio'">
                      <icon
                        name="lucide:volume-2"
                        size="20"
                        class="text-gray-500 dark:text-gray-300" />
                    </template>
                    <template v-else>
                      <icon
                        name="lucide:file"
                        size="20"
                        class="text-gray-500 dark:text-gray-300" />
                    </template>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
/**
 * MediaLightbox.vue
 * Props:
 *  - visible: boolean  -> show/hide modal (controlled by parent)
 *  - media: AnyMedia[] -> list of media objects (image/video/audio/document)
 *  - startIndex?: number -> optional initial index
 *
 * Emits:
 *  - close
 *  - like (index)
 *  - change (index) -> when user navigates
 *
 * Minimal, practical, and accessible.
 */

import {
  ref,
  watch,
  computed,
  onMounted,
  onBeforeUnmount,
  nextTick,
} from "vue";
import type { Media } from "~/dtos/media.dto";
const { isVisible, openMediaModal, closeMediaModal } = useMediaLightBox();

const props = defineProps<{
  visible: boolean;
  media: Media[];
  startIndex?: number;
}>();

const emits = defineEmits<{
  (e: "close"): void;
  (e: "change", index: number): void;
  (e: "like", index: number): void;
}>();

const visible = ref(props.visible);
watch(
  () => props.visible,
  (v) => (visible.value = v)
);
watch(visible, (v) => {
  // When visible changes externally, body overflow must be handled
  toggleBodyScroll(v);
  if (v) focusContainer();
});

const media = computed(() => props.media || []);
const hasMedia = computed(
  () => Array.isArray(media.value) && media.value.length > 0
);

const currentIndex = ref(
  typeof props.startIndex === "number" ? props.startIndex : 0
);
watch(
  () => props.startIndex,
  (v) => {
    if (typeof v === "number") currentIndex.value = v;
  }
);

// update parent if index changes
watch(currentIndex, (idx) => {
  emits("change", idx);
});

const selected = computed(() =>
  hasMedia.value ? media.value[currentIndex.value] : null
);

const hasPrev = computed(() => hasMedia.value && currentIndex.value > 0);
const hasNext = computed(
  () => hasMedia.value && currentIndex.value < media.value.length - 1
);

function prev() {
  if (!hasPrev.value) return;
  currentIndex.value--;
}
function next() {
  if (!hasNext.value) return;
  currentIndex.value++;
}
function select(i: number) {
  if (i < 0 || i >= media.value.length) return;
  currentIndex.value = i;
}

function close() {
  visible.value = false;
  emits("close");
  toggleBodyScroll(false);
}

function emitLike() {
  emits("like", currentIndex.value);
}

// share (navigator.share fallback)
async function shareSelected() {
  if (!selected.value) return;
  const url = selected.value.url;
  const title = selected.value.title || "Shared media";
  if (navigator.share) {
    try {
      await navigator.share({ title, url });
    } catch (e) {
      /* user canceled or failed */
    }
    return;
  }
  // fallback: copy link
  try {
    await navigator.clipboard.writeText(url);
    // small toast could be emitted by parent — keep logic light here
    // we can also notify visually, but keeping minimal.
  } catch (e) {
    // ignore
  }
}

// utility: readable meta (date + mime/size)
function readableMeta(m?: Media) {
  if (!m) return "";
  const parts: string[] = [];
  if (m.createdAt) {
    const dt =
      typeof m.createdAt === "string" ? new Date(m.createdAt) : m.createdAt;
    if (dt) parts.push(new Date(dt).toLocaleString());
  }
  if (m.mimeType) parts.push(m.mimeType.split("/")[1] ?? m.mimeType);
  if (m.size) parts.push(humanFileSize(m.size));
  return parts.join(" • ");
}

function humanFileSize(bytes: number) {
  if (!bytes && bytes !== 0) return "";
  const thresh = 1024;
  if (Math.abs(bytes) < thresh) return bytes + " B";
  const units = ["KB", "MB", "GB", "TB"];
  let u = -1;
  do {
    bytes /= thresh;
    ++u;
  } while (Math.abs(bytes) >= thresh && u < units.length - 1);
  return bytes.toFixed(1) + " " + units[u];
}

// simple document embed check
function isEmbeddableDocument(mime?: string) {
  if (!mime) return false;
  const embeddable = ["application/pdf", "text/html"];
  return embeddable.includes(mime.toLowerCase());
}

// thumbnails list: images & videos and small fallback icons
const mediaThumbnails = computed(() => {
  if (!hasMedia.value) return [];
  return media.value.map((m) => ({
    id: m.id,
    type: m.type,
    src:
      m.type === "image"
        ? m.url
        : m.type === "video"
        ? m.thumbnailUrl || m.url
        : undefined,
  }));
});

// keyboard nav (left/right)
function onKeydown(e: KeyboardEvent) {
  if (!visible.value) return;
  if (e.key === "ArrowLeft") {
    e.preventDefault();
    prev();
  }
  if (e.key === "ArrowRight") {
    e.preventDefault();
    next();
  }
  if (e.key === "Escape") {
    e.preventDefault();
    close();
  }
}

onMounted(() => {
  window.addEventListener("keydown", onKeydown);
  // apply body state if already visible
  toggleBodyScroll(visible.value);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", onKeydown);
  toggleBodyScroll(false);
});

// focus container for keyboard accessibility
const container = ref<HTMLElement | null>(null);
async function focusContainer() {
  await nextTick();
  container.value?.focus();
}

// toggle body scroll — tailwind class addition
function toggleBodyScroll(enable: boolean) {
  try {
    if (enable) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  } catch (e) {
    // ignore, server or no document
    console.error("Error toggling body scroll", e);
  }
}
</script>

<style scoped>
/* small tweak: ensure Teleport container doesn't inherit pointer events from overlay */
</style>
