<template>
  <div>
    <!-- Hero Section -->
    <section
      class="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white overflow-hidden">
      <!-- Background Pattern -->
      <div
        class="absolute inset-0 opacity-10"
        style="
          background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
        "></div>

      <div class="container mx-auto px-4 py-16 lg:py-24 relative">
        <div class="max-w-4xl mx-auto text-center space-y-6 lg:space-y-8">
          <!-- Badge -->
          <nuxt-link
            to="/"
            class="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-200">
            <span
              class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span class="text-sm font-medium"
              >Explore the KasiPlay platform</span
            >
          </nuxt-link>

          <!-- Heading -->
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Experience the Future of
            <span
              class="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Sports Management
            </span>
          </h1>

          <!-- Subheading -->
          <p
            class="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            From local leagues to community tournaments, KasiPlay connects
            teams, fans, and players in one powerful digital hub.
          </p>

          <!-- CTA Buttons -->
          <div
            class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <nuxt-link
              to="/auth/register"
              class="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl">
              <span>Get Started Free</span>
              <icon name="lucide:arrow-right" size="20" />
            </nuxt-link>

            <nuxt-link
              to="#features"
              class="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-200 border border-white/20">
              <icon name="lucide:play-circle" size="20" />
              <span>Watch Demo</span>
            </nuxt-link>
          </div>

          <!-- Stats -->
          <div
            class="grid grid-cols-3 gap-4 md:gap-8 pt-8 lg:pt-12 max-w-3xl mx-auto">
            <div class="space-y-1">
              <div class="text-3xl md:text-4xl font-bold">500+</div>
              <div class="text-sm md:text-base text-blue-100">Active Teams</div>
            </div>
            <div class="space-y-1">
              <div class="text-3xl md:text-4xl font-bold">10K+</div>
              <div class="text-sm md:text-base text-blue-100">
                Registered Players
              </div>
            </div>
            <div class="space-y-1">
              <div class="text-3xl md:text-4xl font-bold">50K+</div>
              <div class="text-sm md:text-base text-blue-100">
                Matches Tracked
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Wave Divider -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-full h-auto">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            class="fill-gray-50 dark:fill-gray-900" />
        </svg>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div
            class="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-4">
            <icon name="lucide:sparkles" size="16" />
            <span>Features</span>
          </div>
          <h2
            class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Everything You Need to Succeed
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400">
            Powerful tools designed for modern sports teams and federations
          </p>
        </div>

        <!-- Features Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="bg-white dark:bg-gray-800 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group">
            <div
              class="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
              :class="feature.color">
              <icon :name="feature.icon" size="24" class="text-white" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {{ feature.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="py-16 lg:py-24 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div
            class="inline-flex items-center space-x-2 px-4 py-2 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-4">
            <icon name="lucide:zap" size="16" />
            <span>Simple Process</span>
          </div>
          <h2
            class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get Started in Minutes
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400">
            Three simple steps to transform your team management
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          <div
            v-for="(step, index) in steps"
            :key="step.title"
            class="text-center space-y-4">
            <div class="relative inline-flex">
              <div
                class="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white"
                :class="step.color">
                {{ index + 1 }}
              </div>
              <div
                v-if="index < steps.length - 1"
                class="hidden md:block absolute -right-24 top-1/2 transform -translate-y-1/2">
                <icon
                  name="lucide:arrow-right"
                  size="24"
                  class="text-gray-300 dark:text-gray-600" />
              </div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">
              {{ step.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400">
              {{ step.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div
            class="inline-flex items-center space-x-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full text-sm font-medium mb-4">
            <icon name="lucide:heart" size="16" />
            <span>Testimonials</span>
          </div>
          <h2
            class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Top Teams
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400">
            See what coaches and managers are saying about KasiPlay
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 lg:gap-8">
          <div
            v-for="testimonial in testimonials"
            :key="testimonial.name"
            class="bg-white dark:bg-gray-800 rounded-xl p-6 lg:p-8 shadow-sm border border-gray-200 dark:border-gray-700">
            <div class="flex items-center mb-4">
              <div v-for="star in 5" :key="star" class="text-yellow-400">
                <icon name="lucide:star" size="16" class="fill-current" />
              </div>
            </div>
            <p class="text-gray-600 dark:text-gray-400 mb-6">
              "{{ testimonial.comment }}"
            </p>
            <div class="flex items-center space-x-3">
              <div
                class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-semibold">
                {{ testimonial.initials }}
              </div>
              <div>
                <div class="font-semibold text-gray-900 dark:text-white">
                  {{ testimonial.name }}
                </div>
                <div class="text-sm text-gray-600 dark:text-gray-400">
                  {{ testimonial.role }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      class="py-16 lg:py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white relative overflow-hidden">
      <div
        class="absolute inset-0 opacity-10"
        style="
          background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
        "></div>
      <div class="container mx-auto px-4 relative">
        <div class="max-w-4xl mx-auto text-center space-y-6 lg:space-y-8">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Ready to Transform Your Team?
          </h2>
          <p class="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Join hundreds of teams already using KasiPlay to manage their
            operations and engage with fans.
          </p>
          <div
            class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <nuxt-link
              to="/auth/register"
              class="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl">
              <span>Start Free Trial</span>
              <icon name="lucide:arrow-right" size="20" />
            </nuxt-link>
            <nuxt-link
              to="/contact"
              class="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-200 border border-white/20">
              <icon name="lucide:phone" size="20" />
              <span>Contact Sales</span>
            </nuxt-link>
          </div>
          <p class="text-sm text-blue-100">
            No credit card required • 30-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">

interface Feature {
  icon: string;
  title: string;
  description: string;
  color: string;
}

interface Step {
  title: string;
  description: string;
  color: string;
}

interface Testimonial {
  name: string;
  role: string;
  comment: string;
  initials: string;
}

const features: Feature[] = [
  {
    icon: "lucide:users",
    title: "Player Management",
    description:
      "Complete player database with profiles, statistics, and performance tracking",
    color: "bg-blue-600",
  },
  {
    icon: "lucide:calendar",
    title: "Match Scheduling",
    description:
      "Organize fixtures, track results, and manage your team's calendar effortlessly",
    color: "bg-green-600",
  },
  {
    icon: "lucide:bar-chart",
    title: "Performance Analytics",
    description:
      "Deep insights into player and team performance with detailed statistics",
    color: "bg-purple-600",
  },
  {
    icon: "lucide:message-circle",
    title: "Team Communication",
    description:
      "Real-time messaging, announcements, and forums to keep everyone connected",
    color: "bg-orange-600",
  },
  {
    icon: "lucide:video",
    title: "Media Sharing",
    description:
      "Upload and share training videos, match highlights, and team content",
    color: "bg-pink-600",
  },
  {
    icon: "lucide:shield-check",
    title: "Role-Based Access",
    description:
      "Secure access control for managers, coaches, players, and fans",
    color: "bg-indigo-600",
  },
];

const steps: Step[] = [
  {
    title: "Create Your Team",
    description: "Sign up and set up your team profile in just a few clicks",
    color: "bg-blue-600",
  },
  {
    title: "Add Players & Staff",
    description: "Invite your players, coaches, and staff to join the platform",
    color: "bg-purple-600",
  },
  {
    title: "Start Managing",
    description: "Schedule matches, track performance, and engage with fans",
    color: "bg-green-600",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Thabo Mkhize",
    role: "Head Coach, Chiefs FC",
    comment:
      "KasiPlay transformed how we manage our team. Everything is now in one place and communication has never been better.",
    initials: "TM",
  },
  {
    name: "Nomsa Dlamini",
    role: "Club Manager, Pirates United",
    comment:
      "The player management and analytics features are game-changers. We can track everything and make data-driven decisions.",
    initials: "ND",
  },
  {
    name: "Sipho Ndlovu",
    role: "Team Captain, Sundowns",
    comment:
      "As a player, I love having all my stats and team info in one app. It's intuitive and easy to use.",
    initials: "SN",
  },
];
</script>
