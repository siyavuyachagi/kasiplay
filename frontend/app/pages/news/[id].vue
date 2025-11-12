<template>
  <div class="max-w-4xl mx-auto py-8 space-y-6">
    <!-- Breadcrumb -->
    <Breadcrumb :links="breadcrumbs" />

    <!-- Article Header -->
    <div>
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-2">
        {{ article.title }}
      </h1>
      <div
        class="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
        <span class="flex items-center space-x-1">
          <icon name="lucide:calendar" size="14" />
          <span>{{ article.date }}</span>
        </span>
        <span class="flex items-center space-x-1">
          <icon name="lucide:clock" size="14" />
          <span>8 min read</span>
        </span>
        <span class="flex items-center space-x-1">
          <icon name="lucide:user" size="14" />
          <span>{{ article.author.name }}</span>
        </span>
        <span class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
          Match Report
        </span>
      </div>
      <p class="text-gray-600 dark:text-gray-400">{{ article.excerpt }}</p>
    </div>

    <!-- Featured Image -->
    <div
      class="relative h-96 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700">
      <img
        :src="article.image"
        alt="Article Image"
        class="w-full h-full object-cover" />
    </div>

    <!-- Match Statistics -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
      <div class="text-center">
        <div class="text-3xl font-bold text-gray-900 dark:text-white mb-1">3 - 1</div>
        <p class="text-sm text-gray-500 dark:text-gray-400">Final Score</p>
      </div>
      <div class="text-center">
        <div class="text-3xl font-bold text-gray-900 dark:text-white mb-1">65%</div>
        <p class="text-sm text-gray-500 dark:text-gray-400">Pirates Possession</p>
      </div>
      <div class="text-center">
        <div class="text-3xl font-bold text-gray-900 dark:text-white mb-1">42,000</div>
        <p class="text-sm text-gray-500 dark:text-gray-400">Attendance</p>
      </div>
    </div>

    <!-- Article Content -->
    <div class="text-gray-800 dark:text-white/80 prose dark:prose-invert max-w-none">
      <p class="text-lg leading-relaxed">
        In what will be remembered as one of the most dominant performances in recent Soweto Derby history, 
        Orlando Pirates delivered a masterclass at FNB Stadium on Saturday evening. The Buccaneers' 3-1 victory 
        over their bitter rivals Kaizer Chiefs was not just a win—it was a statement of intent that echoed 
        throughout South African football.
      </p>

      <h2 class="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">First Half Domination</h2>
      <p>
        From the opening whistle, Pirates showed their tactical superiority. The home side controlled possession 
        with a mesmerizing display of passing football that left Chiefs chasing shadows for large periods of the match. 
        The breakthrough came in the 23rd minute when captain Thabiso Monyane delivered a pinpoint cross to 
        striker Patrick Maswanganyi, who made no mistake from six yards out.
      </p>

      <h2 class="text-gray-900 dark:text-white text-2xl font-bold mt-8 mb-4">Key Match Events</h2>
      <ul class="space-y-2">
        <li>
          <strong>23' - GOAL:</strong> Patrick Maswanganyi opens the scoring after brilliant build-up play from Pirates
        </li>
        <li>
          <strong>38' - GOAL:</strong> Monnapule Saleng doubles the lead with a stunning solo effort
        </li>
        <li>
          <strong>56' - GOAL:</strong> Chiefs pull one back through Ashley Du Preez
        </li>
        <li>
          <strong>78' - GOAL:</strong> Evidence Makgopa seals the victory with a clinical finish
        </li>
        <li>
          <strong>82' - RED CARD:</strong> Chiefs defender Edmilson Dove receives his marching orders for a second yellow
        </li>
      </ul>

      <h2 class="text-gray-900 dark:text-white text-2xl font-bold mt-8 mb-4">Tactical Masterclass</h2>
      <p>
        Pirates coach José Riveiro's tactical setup proved to be the difference on the night. The Spanish tactician 
        employed a high-pressing system that suffocated Chiefs' attempts to build from the back. The midfield trio 
        of Miguel Timm, Makhehlene Makhaula, and Relebohile Mofokeng dominated the center of the park, winning 
        crucial battles and dictating the tempo of the match.
      </p>

      <p>
        Chiefs coach Nasreddine Nabi will have plenty to ponder after this defeat. His team struggled to cope with 
        Pirates' intensity and rarely threatened goalkeeper Sipho Chaine. The few chances Amakhosi created were either 
        squandered or comfortably dealt with by the Pirates defense, marshaled expertly by Tapelo Xoki and Olisa Ndah.
      </p>

      <h2 class="text-gray-900 dark:text-white text-2xl font-bold mt-8 mb-4">Player of the Match</h2>
      <p>
        Monnapule Saleng was awarded the Player of the Match accolade for his scintillating performance. The winger 
        was unplayable throughout, tormenting the Chiefs defense with his pace, trickery, and direct running. His 
        goal in the 38th minute—a mazy dribble past three defenders before coolly slotting past the goalkeeper—will 
        be replayed for years to come.
      </p>

      <h2 class="text-gray-900 dark:text-white text-2xl font-bold mt-8 mb-4">What This Means for the Title Race</h2>
      <p>
        This victory propels Pirates to second place in the DStv Premiership table, just three points behind leaders 
        Mamelodi Sundowns with a game in hand. The confidence boost from such a comprehensive derby win could prove 
        invaluable as the Buccaneers chase their first league title since 2012. For Chiefs, this latest setback 
        leaves them in seventh place, now 10 points adrift of the top spot and facing an uphill battle to salvage 
        their season.
      </p>

      <p>
        The atmosphere at FNB Stadium was electric throughout, with 42,000 passionate fans creating an unforgettable 
        spectacle. As the final whistle blew, the Pirates faithful erupted in celebration, while their Chiefs 
        counterparts were left to contemplate another painful defeat in this historic rivalry.
      </p>
    </div>

    <!-- Author Info -->
    <div class="border-t border-b border-gray-200 dark:border-gray-700 py-6 my-8">
      <div class="flex items-start space-x-4">
        <div class="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
          <span class="text-white font-bold text-xl">{{ article.author.initials }}</span>
        </div>
        <div class="flex-1">
          <p class="text-lg font-bold text-gray-900 dark:text-white mb-1">
            {{ article.author.name }}
          </p>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Senior Sports Reporter | {{ article.author.specialization }}
          </p>
          <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            {{ article.author.bio }}
          </p>
          <div class="flex items-center space-x-4 mt-3 text-sm">
            <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline flex items-center space-x-1">
              <icon name="lucide:twitter" size="14" />
              <span>@{{ article.author.twitter }}</span>
            </a>
            <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline flex items-center space-x-1">
              <icon name="lucide:mail" size="14" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Share Article -->
    <div class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
      <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Share this article:</span>
      <div class="flex items-center space-x-3">
        <button class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          <icon name="lucide:facebook" size="18" class="text-blue-600" />
        </button>
        <button class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          <icon name="lucide:twitter" size="18" class="text-sky-500" />
        </button>
        <button class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          <icon name="lucide:linkedin" size="18" class="text-blue-700" />
        </button>
        <button class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          <icon name="lucide:link" size="18" class="text-gray-600 dark:text-gray-400" />
        </button>
      </div>
    </div>

    <!-- Read More / Related Articles -->
    <div class="mt-8 space-y-4">
      <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Related Articles
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <article
          v-for="related in relatedArticles"
          :key="related.id"
          class="group p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-500 transition-all cursor-pointer">
          <div class="h-32 bg-gray-200 dark:bg-gray-700 rounded-md mb-3 overflow-hidden">
            <img 
              src="https://via.placeholder.com/400x200" 
              alt="Related Article"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h4 class="text-base font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {{ related.title }}
          </h4>
          <p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
            {{ related.excerpt }}
          </p>
          <span class="text-xs text-blue-600 dark:text-blue-400 font-medium flex items-center space-x-1">
            <span>Read more</span>
            <icon name="lucide:arrow-right" size="12" />
          </span>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const Breadcrumb = defineAsyncComponent(
  () => import("~/components/ui/breadcrumb.vue")
);

const breadcrumbs = [{ label: "News", route: "/news" }, { label: "Article" }];

const article = {
  id: 1,
  title: "Orlando Pirates Secure Historic Victory in Soweto Derby",
  excerpt:
    "In a thrilling encounter at FNB Stadium, Orlando Pirates defeated Kaizer Chiefs 3-1 to claim bragging rights in the Soweto Derby. The Buccaneers dominated proceedings with a tactical masterclass that left Amakhosi struggling throughout the match.",
  date: "Nov 1, 2025",
  image: "https://via.placeholder.com/800x400", // Replace with real image
  author: { 
    name: "John Smith", 
    initials: "JS",
    specialization: "PSL Football Expert",
    bio: "John has been covering South African football for over 15 years, specializing in PSL matches and derby fixtures. His in-depth analysis and match reports are read by thousands of fans across the country.",
    twitter: "johnsmith_sport"
  },
};

const relatedArticles = [
  {
    id: 2,
    title: "Mamelodi Sundowns Announce Major Signing from Europe",
    excerpt:
      "The Brazilians have secured the services of highly-rated midfielder Lucas Silva from Portuguese side FC Porto in a club-record deal...",
  },
  {
    id: 3,
    title: "Khuliso Mudau Earns International Recognition",
    excerpt:
      "The Sundowns defender has been nominated for the CAF Player of the Year award following his stellar performances...",
  },
  {
    id: 4,
    title: "Kaizer Chiefs Announce Coaching Changes",
    excerpt:
      "In the wake of recent poor results, Amakhosi management confirms restructuring of technical team ahead of crucial fixtures...",
  },
];
</script>

<style scoped>
/* Optional: Enhance typography for dark mode */
.prose a {
  color: #2563eb; /* Tailwind blue-600 */
}
</style>