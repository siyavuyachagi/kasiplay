# Layout design
- Grid layouts with flex box components

## Layout Design

### Three layouts
1. `default.vue`
2. `dashboard.vue`
3. `account.vue`

### Landing Page Design (Social Media Style)

The main landing page (`pages/index.vue`) follows a **3-column social media layout** inspired by Twitter/X and Facebook:

```
┌─────────────────────────────────────────────────────────────┐
│                         HEADER                              │
│                    (Logo, Search, Profile)                  │
├─────────────────────────────────────────────────────────────┤
│                     Live Match Banner (Sticky)              │
├──────────────┬─────────────────────────┬────────────────────┤
│              │                         │                    │
│   LEFT       │      CENTER FEED        │    RIGHT          │
│   SIDEBAR    │      (Main Content)     │    SIDEBAR        │
│   (25%)      │         (50%)           │    (25%)          │
│              │                         │                    │
│ - Navigation │ - Create Post Card      │ - Announcements   │
│ - Trending   │ - Filter Tabs           │ - League Table    │
│ - Fixtures   │ - Social Posts Feed     │ - Who to Follow   │
│              │ - Load More Button      │ - Footer Links    │
│              │                         │                    │
│  (Sticky)    │   (Scrollable)          │   (Sticky)        │
└──────────────┴─────────────────────────┴────────────────────┘
│                     Footer                                  │
└─────────────────────────────────────────────────────────────┘
```

Other index pages (`pages/fixtures`)
```
┌─────────────────────────────────────────────────────────────┐
│                         HEADER                              │
│                    (Logo, Search, Profile)                  │
├─────────────────────────────────────────────────────────────┤
│                     Live Match Banner (Sticky)              │
├──────────────┬──────────────────────────────────────────────┤
│              │                                              │
│   LEFT       │           CENTER FEED                        │
│   SIDEBAR    │           (Main Content)                     │
│   (30%)      │              (70%)                           │
│              │                                              │
│ - Navigation │ - Create Post Card                           │
│ - Trending   │ - Filter Tabs                                │
│ - Fixtures   │ - Social Posts Feed                          │
│              │ - Load More Button                           │
│              │                                              │
│  (Sticky)    │   (Scrollable)                               │
└──────────────┴──────────────────────────────────────────────┘
│                     Footer                                  │
└─────────────────────────────────────────────────────────────┘
```
Details pages (`pages/fixtures/[id]`)
```
┌─────────────────────────────────────────────────────────────┐
│                         HEADER                              │
│                    (Logo, Search, Profile)                  │
├─────────────────────────────────────────────────────────────┤
│                     Live Match Banner (Sticky)              │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                    CENTER FEED                              │
│                    (Main Content)                           │
│                       (100%)                                │
│                                                             │
│              - Create Post Card                             │
│              - Filter Tabs                                  │
│              - Social Posts Feed                            │
│              - Load More Button                             │
│                                                             │
│                   (Scrollable)                              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
│                     Footer                                  │
└─────────────────────────────────────────────────────────────┘
```
All columns in each page independantly scrollable without scrollbars

### Responsive Breakpoints

```css
/* Mobile: < 1024px */
- Single column layout
- Sidebars hidden
- Simplified navigation

/* Desktop: >= 1024px | lg */
- Three column layout (lg:grid-cols-12)
- Left sidebar: lg:col-span-3
- Center feed: lg:col-span-6
- Right sidebar: lg:col-span-3
```

---

## UI/UX Patterns

### 1. Live Match Banner
**Design**: Full-width sticky banner at the top of the page

**Features**:
- Pulsing red "LIVE" indicator
- Current match score
- Quick "Watch" CTA button
- Gradient background (red-500 to red-600)
- Always visible (z-index: 40)

```vue
<div class="sticky top-0 z-40 bg-linear-to-r from-red-500 to-red-600">
  <span class="relative flex h-2.5 w-2.5">
    <span class="animate-ping absolute"></span>
    <span class="relative rounded-full bg-white"></span>
  </span>
</div>
```

### 2. Post Card Structure

**Anatomy of a Post**:
```
┌─────────────────────────────────────┐
│ ┌──┐  Author Name  [Badge] ✓       │
│ │  │  Team • Timestamp              │
│ └──┘                                │
│                                     │
│ Post content text...                │
│ #Hashtags                           │
│                                     │
│ [Media: Image/Video/Match Score]    │
│                                     │
├─────────────────────────────────────┤
│ ❤️ 234  💬 45  🔄 12  ↗️ Share     │
├─────────────────────────────────────┤
│ Top Comment Preview                 │
│ "View all X comments"               │
└─────────────────────────────────────┘
```

**Post Types**:
1. **Text Post**: Simple text with hashtags
2. **Media Post**: Text + Image or Video
3. **Match Result Post**: Includes embedded match score card
4. **Announcement Post**: From federations/clubs

### 3. User Type Differentiation

**Visual Indicators**:
- **Avatar**: Gradient circle with initials
- **Badge**: Colored pill showing user type
- **Verification**: Blue checkmark for verified accounts
- **Team Association**: Displayed under name (if applicable)

```vue
<div class="flex items-center space-x-2">
  <span class="font-semibold">John Doe</span>
  <icon name="lucide:badge-check" class="text-blue-500" />
  <span class="px-2 py-0.5 bg-green-100 text-green-600 rounded-full">
    Player
  </span>
</div>
```

### 4. Interactive Elements

**Action Buttons**:
- **Like** (Heart): Red hover state
- **Comment** (Message): Blue hover state
- **Repost** (Repeat): Green hover state
- **Share**: Purple hover state

**Hover Effects**:
```css
.hover\:bg-red-50 {
  transition: all 0.2s ease;
}

/* Pattern for all action buttons */
hover:text-[color]-600
hover:bg-[color]-50
dark:hover:bg-[color]-900/10
```

### 5. Card Hover States

All cards use consistent hover patterns:
```css
hover:bg-gray-50 
dark:hover:bg-gray-700/50 
transition-colors
```

### 6. Sticky Sidebars

Both sidebars are sticky positioned:
```css
.sticky {
  position: sticky;
  top: 80px; /* Below live banner */
}
```

---
