# KasiPlay Platform Architecture Documentation

## Project Overview
**KasiPlay** is a sports team management and social content sharing platform designed for South African community football. The platform connects federations, clubs, players, officials, and fans in a unified digital ecosystem.

---

## Table of Contents
1. [System Architecture](#system-architecture)
2. [User Entities](#user-entities)
3. [Frontend Structure](#frontend-structure)
4. [Layout Design](#layout-design)
5. [UI/UX Patterns](#uiux-patterns)
6. [Component Hierarchy](#component-hierarchy)
7. [State Management](#state-management)
8. [Routing Structure](#routing-structure)
9. [Theme System](#theme-system)
10. [Design System](#design-system)

---

## System Architecture

### Tech Stack
- **Framework**: Nuxt 3 (Vue.js)
- **Styling**: Tailwind CSS 4.0 (via @tailwindcss/vite)
- **State Management**: Pinia
- **Icons**: Nuxt Icon (Lucide icons)
- **Images**: Nuxt Image
- **SEO**: Nuxt Sitemap

## User Entities

The platform supports **6 distinct user types**, each with specific roles and permissions:

### 1. **ApplicationUser** (Super Admin)
- Full system access
- Manage all federations, clubs, and users
- System configuration and settings
- Analytics and reporting

### 2. **Administrators** (Management)
- Federation-level management
- Club oversight and approval
- User management within scope
- Content moderation

### 3. **Staff** (Operations)
- Day-to-day operations
- Match scheduling and management
- Content creation and publishing
- Customer support

### 4. **Officials**
- Referees, coaches, technical staff
- Match officiating
- Training session management
- Player assessments
- **Badge Color**: Yellow (`bg-yellow-100 text-yellow-700`)

### 5. **Players**
- Individual athlete accounts
- Personal statistics and profiles
- Team membership
- Social content creation
- **Badge Color**: Green (`bg-green-100 text-green-600`)

### 6. **Fans**
- Public user accounts
- Follow teams and players
- Engage with content (like, comment, share)
- Community participation
- **Badge Color**: Orange (`bg-orange-100 text-orange-600`)

### Additional Entity Types

#### **Federations**
- Governing bodies (e.g., SAFA Gauteng, SAFA Western Cape)
- Official announcements
- Tournament organization
- **Badge Color**: Purple (`bg-purple-100 text-purple-600`)
- **Verification**: Always verified (blue checkmark)

#### **Clubs/Teams**
- Official team accounts
- Match updates and scores
- Squad announcements
- Fan engagement
- **Badge Color**: Blue (`bg-blue-100 text-blue-600`)
- **Verification**: Verified teams get blue checkmark

---

## Frontend Structure

### Layout Architecture

The application uses **three primary layouts**:

#### 1. Default Layout (`layouts/default.vue`)
**Purpose**: Public-facing pages for unauthenticated users

**Components**:
- **Sticky Header**
  - Logo and branding
  - Theme toggle (light/dark mode)
  - Mobile menu toggle
  - Desktop navigation menu
  - Sign In CTA button
  
- **Navigation Items**:
  - Home (`/`)
  - Matches (`/matches`)
  - Teams (`/teams`)
  - News (`/news`)
  - Gallery (`/gallery`)
  - About (`/about`)

- **Footer**:
  - Brand section with social links
  - Quick links
  - Support links
  - Contact information
  - Copyright and credits

**Features**:
- Responsive design (mobile-first)
- Mobile dropdown menu with overlay
- Smooth transitions and animations
- Dark mode support throughout

#### 2. Account Layout (`layouts/account.vue`)
**Purpose**: Authenticated user dashboard (to be implemented)

#### 3. Account Layout (`layouts/dashboard.vue`)
**Purpose**: Authenticated organizations (Federation / Club) dashboard
---

## Component Hierarchy

### Reusable Patterns

**Widget Container**:
```vue
<div class="bg-white dark:bg-gray-800 rounded-lg border">
  <div class="p-3 bg-gray-50 dark:bg-gray-700/50 border-b">
    <h3 class="font-semibold text-sm">Widget Title</h3>
  </div>
  <div class="p-3">
    <!-- Widget content -->
  </div>
</div>
```

**Action Button**:
```vue
<button class="flex items-center space-x-2 px-3 py-1.5 
  text-gray-600 dark:text-gray-400 
  hover:text-[color]-600 dark:hover:text-[color]-400 
  hover:bg-[color]-50 dark:hover:bg-[color]-900/10 
  rounded-md transition-colors">
  <icon name="lucide:heart" size="20" />
  <span class="text-sm font-medium">234</span>
</button>
```

---

## State Management

### Pinia Stores

#### 1. Auth Store (`stores/auth.ts`)

**Purpose**: Manage user authentication state

**State**:
```typescript
{
  user: User | null,
  accessToken: string | null,
  refreshToken: string | null,
  isAuthenticated: computed boolean
}
```

**Actions**:
- `init()`: Load auth data from cookies on app start
- `signIn(responseData, rememberMe, returnUrl)`: Authenticate user
- `signOut(returnUrl)`: Clear auth state and redirect

**Storage**: Uses cookies for persistent auth
```typescript
const STORAGE_KEY = "kp-auth-store";
```

#### 2. Theme Store (`stores/theme.ts`)

**Purpose**: Manage light/dark mode

**State**:
```typescript
{
  isDark: boolean,
  theme: computed ("light" | "dark")
}
```

**Actions**:
- `init()`: Load theme from localStorage or detect system preference
- `toggleTheme()`: Switch between light/dark mode
- `applyTheme()`: Update DOM classes
- `saveToStorage()`: Persist to localStorage

**Implementation**:
```typescript
// Apply theme to HTML element
document.documentElement.classList.add("dark");
document.documentElement.setAttribute("data-theme", "dark");
```

**Custom Variant**:
```css
/* In app.css */
@custom-variant dark (&:where([data-theme="dark"], [data-theme="dark"] *));
```

---


### Protected Routes (Future)
```
/dashboard/            → Organization routes
/account/              → User settings routes
/admin                 → Administrators settings
```

### Middleware

**Global Middleware** (`auth.global.ts`):
- Runs on every route

**Route Middleware** (`auth.ts`):
- Applied to specific routes via `definePageMeta`
- Checks authentication before route access

---

## Theme System

### Dark Mode Implementation

**CSS Variable Approach**:
```css
/* Tailwind classes automatically handle dark mode */
bg-white dark:bg-gray-800
text-gray-900 dark:text-white
border-gray-200 dark:border-gray-700
```

**Theme Toggle Button**:
```vue
<button @click="toggleTheme">
  <icon v-if="isDark" name="lucide:sun" class="text-yellow-500" />
  <icon v-else name="lucide:moon" class="text-gray-600" />
</button>
```

**Initialization Flow**:
1. Plugin loads (`theme.client.ts`)
2. Store checks localStorage for saved preference
3. Falls back to system preference (`prefers-color-scheme`)
4. Applies theme to DOM immediately
5. Watches for changes and persists to localStorage

---

## Key Features Summary

### Social Features
✅ Multi-user type system (6 types)
✅ User verification badges
✅ Color-coded user types
✅ Social interactions (like, comment, share, repost)
✅ Rich media posts (images, videos)
✅ Match score embeds
✅ Comment previews
✅ Hashtag support
✅ Trending topics
✅ Follow suggestions

### Real-time Features
✅ Live match banner (sticky)
✅ Live match indicators (animated)
✅ Today's fixtures widget
✅ League standings
✅ Announcements

### Navigation
✅ Filter tabs (All, Federations, Clubs, Players, Fans)
✅ Quick navigation sidebar
✅ Mobile-responsive menu
✅ Sticky sidebars

### Engagement
✅ Create post prompt (logged out state)
✅ "Sign in to post" CTA
✅ Action buttons with counters
✅ Load more pagination

---

## Future Enhancements

### Phase 1 (MVP)
- [ ] Implement authentication
- [ ] User registration flow
- [ ] Profile pages
- [ ] Real post creation
- [ ] Comment system

### Phase 2 (Core Features)
- [ ] Real-time updates (WebSocket)
- [ ] Notification system
- [ ] Direct messaging
- [ ] Team/Club pages
- [ ] Player statistics

### Phase 3 (Advanced)
- [ ] Video streaming
- [ ] Live match commentary
- [ ] Fantasy league
- [ ] Betting integration
- [ ] Mobile app (React Native/Flutter)

---

## Development Guidelines

### Code Style
- Use TypeScript interfaces for type safety
- Follow Vue 3 Composition API patterns
- Use `<script setup>` syntax
- Keep components under 300 lines
- Extract reusable logic to composables

### Naming Conventions
```typescript
// Components: PascalCase
PostCard.vue, UserAvatar.vue

// Composables: camelCase with "use" prefix
useAuth(), useTheme(), usePosts()

// Stores: camelCase with "Store" suffix
authStore, themeStore, postsStore

// CSS Classes: Tailwind utilities
class="flex items-center space-x-2"
```

### Performance
- Use `v-show` for frequently toggled elements
- Use `v-if` for conditionally rendered content
- Lazy load images with `<NuxtImg>`
- Implement virtual scrolling for long lists (future)

### Accessibility
- Use semantic HTML
- Provide `alt` text for images
- Ensure keyboard navigation
- Maintain color contrast ratios (WCAG AA)
- Use ARIA labels where appropriate

---

## Contact & Credits

**Developer**: Siyavuya Chagi (@siyavuyachagi)
**Email**: syavuya08@gmail.com
**GitHub**: https://github.com/siyavuyachagi

**Built with**:
- Nuxt 3
- Vue.js
- Tailwind CSS
- Pinia
- TypeScript

---

*Last Updated: October 25, 2025*