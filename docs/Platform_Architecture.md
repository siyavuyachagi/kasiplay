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

### Page Components

#### `pages/index.vue` (Landing Page)
```
index.vue
├── Live Match Banner
├── Container Grid (3 columns)
│   ├── Left Sidebar
│   │   ├── Navigation Widget
│   │   ├── Trending Topics Widget
│   │   └── Today's Fixtures Widget
│   │
│   ├── Center Feed
│   │   ├── Create Post Card
│   │   ├── Filter Tabs
│   │   ├── Posts Feed
│   │   │   └── Post Card (v-for)
│   │   │       ├── Post Header
│   │   │       ├── Post Content
│   │   │       ├── Post Media
│   │   │       ├── Match Score (conditional)
│   │   │       ├── Action Buttons
│   │   │       └── Top Comment (conditional)
│   │   └── Load More Button
│   │
│   └── Right Sidebar
│       ├── Announcements Widget
│       ├── League Standings Widget
│       ├── Who to Follow Widget
│       └── Footer Links Widget
```

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
- `signIn(responseData, rememberMe)`: Authenticate user
- `signOut(returnUrl)`: Clear auth state and redirect

**Storage**: Uses cookies for persistent auth
```typescript
const STORAGE_KEY = "kp-dashboard-auth-store";
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

## Routing Structure

### Public Routes (Unauthenticated)
```
/                     → Landing page (social feed)
/platform             → Marketing/info page
/matches              → All matches
/teams                → All teams
/players              → All players
/news                 → News & updates
/gallery              → Media gallery
/about                → About page
/auth/login           → Login page
/auth/register        → Registration page
```

### Protected Routes (Future)
```
/dashboard            → User dashboard
/profile              → User profile
/settings             → Account settings
```

### Middleware

**Global Middleware** (`auth.global.ts`):
- Runs on every route
- Currently commented out (to be implemented)

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

## Design System

### Color Palette

**User Type Colors**:
```css
/* Federation */
Purple: bg-purple-100 dark:bg-purple-900/20 
        text-purple-600 dark:text-purple-400

/* Club */
Blue:   bg-blue-100 dark:bg-blue-900/20 
        text-blue-600 dark:text-blue-400

/* Player */
Green:  bg-green-100 dark:bg-green-900/20 
        text-green-600 dark:text-green-400

/* Fan */
Orange: bg-orange-100 dark:bg-orange-900/20 
        text-orange-600 dark:text-orange-400

/* Official */
Yellow: bg-yellow-100 dark:bg-yellow-900/20 
        text-yellow-700 dark:text-yellow-400
```

**Action Colors**:
```css
Like:    Red     (text-red-600, hover:bg-red-50)
Comment: Blue    (text-blue-600, hover:bg-blue-50)
Repost:  Green   (text-green-600, hover:bg-green-50)
Share:   Purple  (text-purple-600, hover:bg-purple-50)
```

**Brand Colors**:
```css
Primary:   Blue-600 to Purple-600 (gradient)
Secondary: Gray-50 / Gray-900 (light/dark)
Accent:    Yellow-500 (highlights)
```

### Typography

**Font Sizes**:
```css
Hero:        text-4xl md:text-5xl lg:text-6xl
Section:     text-3xl md:text-4xl lg:text-5xl
Card Title:  text-lg (18px)
Body:        text-sm (14px)
Caption:     text-xs (12px)
```

**Font Weights**:
```css
Bold:      font-bold (700)
Semibold:  font-semibold (600)
Medium:    font-medium (500)
Regular:   (400 - default)
```

### Spacing System

**Container**:
```css
container mx-auto px-4
max-width: 1280px (default)
```

**Grid Gaps**:
```css
gap-4    /* 16px - small */
gap-6    /* 24px - medium */
gap-8    /* 32px - large */
```

**Card Padding**:
```css
p-2      /* Compact widget */
p-3      /* Standard widget header */
p-4      /* Post card */
```

### Border Radius

```css
rounded-md    /* 6px - buttons */
rounded-lg    /* 8px - cards */
rounded-xl    /* 12px - large containers */
rounded-full  /* Pills, badges, avatars */
```

### Shadows

```css
shadow-sm     /* Subtle card elevation */
shadow-lg     /* CTA buttons */
shadow-xl     /* Hover states */
```

### Icons

**Library**: Lucide Icons via `@nuxt/icon`

**Common Icons**:
```
lucide:home           → Home
lucide:calendar       → Matches
lucide:users          → Teams
lucide:user           → Player
lucide:shield         → Team badge
lucide:trophy         → League/Awards
lucide:heart          → Like
lucide:message-circle → Comment
lucide:repeat-2       → Repost
lucide:share-2        → Share
lucide:badge-check    → Verification
lucide:megaphone      → Announcements
```

**Icon Sizes**:
```vue
size="14"  → Small (widget icons)
size="16"  → Standard (inline icons)
size="18"  → Medium (action buttons)
size="20"  → Large (navigation)
size="24"  → Extra large (mobile menu)
```

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