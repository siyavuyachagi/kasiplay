<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Mobile Header -->
    <header
      class="sticky top-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm"
    >
      <div class="container mx-auto px-4">
        <!-- Top Bar -->
        <div class="flex items-center justify-between py-3">
          <!-- Logo -->
          <nuxt-link to="/" class="flex items-center space-x-2">
            <div
              class="w-9 h-9 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"
            >
              <span class="text-white text-lg font-bold">⚽</span>
            </div>
            <span
              class="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              KasiPlay
            </span>
          </nuxt-link>

          <!-- Mobile Actions -->
          <div class="flex items-center space-x-2">
            <!-- Theme Toggle -->
            <button
              @click="toggleTheme"
              class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <icon
                v-if="isDark"
                name="lucide:sun"
                size="20"
                class="text-yellow-500"
              />
              <icon
                v-else
                name="lucide:moon"
                size="20"
                class="text-gray-600"
              />
            </button>

            <!-- Mobile Menu Toggle -->
            <button
              @click="mobileMenuOpen = !mobileMenuOpen"
              class="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <icon
                v-if="!mobileMenuOpen"
                name="lucide:menu"
                size="24"
                class="text-gray-700 dark:text-gray-300"
              />
              <icon
                v-else
                name="lucide:x"
                size="24"
                class="text-gray-700 dark:text-gray-300"
              />
            </button>

            <!-- Desktop CTA -->
            <nuxt-link
              to="/auth/login"
              class="hidden lg:inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              <icon name="lucide:log-in" size="18" />
              <span>Sign In</span>
            </nuxt-link>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-1 pb-3">
          <nuxt-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            active-class="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
          >
            <div class="flex items-center space-x-2">
              <icon :name="item.icon" size="18" />
              <span>{{ item.label }}</span>
            </div>
          </nuxt-link>
        </nav>
      </div>

      <!-- Mobile Menu Dropdown -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="mobileMenuOpen"
          class="lg:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
        >
          <nav class="px-4 py-3 space-y-1">
            <nuxt-link
              v-for="item in navItems"
              :key="item.path"
              :to="item.path"
              @click="mobileMenuOpen = false"
              class="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              active-class="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
            >
              <icon :name="item.icon" size="20" />
              <span class="font-medium">{{ item.label }}</span>
            </nuxt-link>

            <div class="pt-3 mt-3 border-t border-gray-200 dark:border-gray-700">
              <nuxt-link
                to="/auth/login"
                @click="mobileMenuOpen = false"
                class="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                <icon name="lucide:log-in" size="20" />
                <span>Sign In</span>
              </nuxt-link>
            </div>
          </nav>
        </div>
      </transition>
    </header>

    <!-- Main Content -->
    <main class="min-h-[calc(100vh-280px)]">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16">
      <div class="container mx-auto px-4 py-8 lg:py-12">
        <!-- Footer Content -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <!-- Brand Section -->
          <div class="space-y-4">
            <div class="flex items-center space-x-2">
              <div
                class="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"
              >
                <span class="text-white text-xl font-bold">⚽</span>
              </div>
              <span
                class="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                KasiPlay
              </span>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Your ultimate sports team management and content sharing platform.
            </p>
            <!-- Social Links -->
            <div class="flex items-center space-x-3">
              <a
                href="#"
                class="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <icon name="lucide:facebook" size="18" class="text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="#"
                class="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <icon name="lucide:twitter" size="18" class="text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="#"
                class="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <icon name="lucide:instagram" size="18" class="text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="#"
                class="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <icon name="lucide:youtube" size="18" class="text-gray-700 dark:text-gray-300" />
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul class="space-y-2">
              <li>
                <nuxt-link
                  to="/about"
                  class="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  About Us
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/features"
                  class="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Features
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/pricing"
                  class="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Pricing
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/blog"
                  class="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Blog
                </nuxt-link>
              </li>
            </ul>
          </div>

          <!-- Support -->
          <div>
            <h3 class="font-semibold text-gray-900 dark:text-white mb-4">
              Support
            </h3>
            <ul class="space-y-2">
              <li>
                <nuxt-link
                  to="/help"
                  class="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Help Center
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/contact"
                  class="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Contact Us
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/privacy"
                  class="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/terms"
                  class="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Terms of Service
                </nuxt-link>
              </li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h3 class="font-semibold text-gray-900 dark:text-white mb-4">
              Get in Touch
            </h3>
            <ul class="space-y-3">
              <li class="flex items-start space-x-3">
                <icon name="lucide:mail" size="18" class="text-gray-600 dark:text-gray-400 mt-0.5" />
                <span class="text-sm text-gray-600 dark:text-gray-400">
                  support@kasiplay.com
                </span>
              </li>
              <li class="flex items-start space-x-3">
                <icon name="lucide:phone" size="18" class="text-gray-600 dark:text-gray-400 mt-0.5" />
                <span class="text-sm text-gray-600 dark:text-gray-400">
                  +27 63 961 5361
                </span>
              </li>
              <li class="flex items-start space-x-3">
                <icon name="lucide:map-pin" size="18" class="text-gray-600 dark:text-gray-400 mt-0.5" />
                <span class="text-sm text-gray-600 dark:text-gray-400">
                  Johannesburg, South Africa
                </span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div
          class="pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
        >
          <p class="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
            © {{ new Date().getFullYear() }} KasiPlay. All rights reserved. Built
            by
            <a
              href="https://github.com/siyavuyachagi"
              target="_blank"
              class="text-blue-600 dark:text-blue-400 hover:underline"
            >
              @siyavuyachagi
            </a>
          </p>
          <div class="flex items-center space-x-4">
            <nuxt-link
              to="/sitemap.xml"
              class="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Sitemap
            </nuxt-link>
            <nuxt-link
              to="/rss"
              class="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              RSS
            </nuxt-link>
          </div>
        </div>
      </div>
    </footer>

    <!-- Mobile Menu Overlay -->
    <transition
      enter-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-150"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="mobileMenuOpen"
        @click="mobileMenuOpen = false"
        class="fixed inset-0 bg-black/50 z-40 lg:hidden"
      ></div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const themeStore = useThemeStore();
const isDark = computed(() => themeStore.isDark);
const mobileMenuOpen = ref(false);

const toggleTheme = () => {
  themeStore.toggleTheme();
};

interface NavItem {
  label: string;
  path: string;
  icon: string;
}

const navItems: NavItem[] = [
  { label: "Home", path: "/", icon: "lucide:home" },
  { label: "Matches", path: "/matches", icon: "lucide:calendar" },
  { label: "Teams", path: "/teams", icon: "lucide:users" },
  { label: "News", path: "/news", icon: "lucide:newspaper" },
  { label: "Gallery", path: "/gallery", icon: "lucide:image" },
  { label: "About", path: "/about", icon: "lucide:info" },
];
</script>