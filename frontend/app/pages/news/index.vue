<template>
  <div class="lg:grid lg:grid-cols-12 lg:gap-6">
    <!-- Left Sidebar -->
    <LeftSidebar />

    <!-- Main Content -->
    <div class="lg:col-span-9 max-w-7xl mx-auto space-y-4">
      <!-- Breadcrumb  -->
      <Breadcrumb :links="breadcrumbs" />


    </div>
  </div>
</template>

<script setup lang="ts">

const Breadcrumb = defineAsyncComponent(
  () => import("~/components/ui/breadcrumb.vue")
);
const breadcrumbs = [{ label: "News", route: "/news" }];
const router = useRouter();
definePageMeta({
  layout: "default",
});
import { generateRandomUUID } from "~/utilities/generate-random-uuid";

const selectedCategory = ref("All");
const categories = [
  "All",
  "Matches",
  "Transfers",
  "Interviews",
  "Analysis",
  "Youth",
];

const articles = ref([
  {
    id: generateRandomUUID(),
    title: "Mamelodi Sundowns Announce Major Signing",
    excerpt:
      "The Brazilians have secured the services of a highly-rated midfielder from Europe...",
    category: "Transfers",
    date: "Oct 31, 2025",
    views: "2.3k",
    comments: 45,
    author: { name: "Sarah Johnson", initials: "SJ" },
  },
  {
    id: generateRandomUUID(),
    title: "Young Star Shines in Youth League Final",
    excerpt:
      "A 17-year-old forward scored a hat-trick to lead his team to victory...",
    category: "Youth",
    date: "Oct 30, 2025",
    views: "1.8k",
    comments: 32,
    author: { name: "David Moyo", initials: "DM" },
  },
  {
    id: generateRandomUUID(),
    title: "Coach Interview: Building a Winning Culture",
    excerpt:
      "Exclusive sit-down with one of the league's most successful coaches...",
    category: "Interviews",
    date: "Oct 29, 2025",
    views: "3.1k",
    comments: 67,
    author: { name: "Lisa Khumalo", initials: "LK" },
  },
  {
    id: generateRandomUUID(),
    title: "Tactical Analysis: The Rise of High-Pressing",
    excerpt: "How local teams are adopting modern tactical approaches...",
    category: "Analysis",
    date: "Oct 28, 2025",
    views: "1.5k",
    comments: 23,
    author: { name: "Michael Dube", initials: "MD" },
  },
]);
</script>
