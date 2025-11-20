# 🧩 INTERNAL RULES

**KasiPlay Frontend Standards & Conventions**

> Built with Nuxt.js + TypeScript + TailwindCSS
> Clean. Consistent. Performant.

---

## 1. Philosophy

* Code must be clean, predictable, and easy to maintain.
* Always prioritize performance and readability over “clever” shortcuts.
* Don’t over-engineer. If something can be simple, keep it simple.
* Think in **user experience** first — smooth UI, minimal load times.

---

## 2. Naming Conventions

### Files & Folders

* Always use **kebab-case** for file and folder names.
* Example:

  * `user-profile.vue`
  * `team-list.vue`
  * `use-auth.ts`
  * `match-card.vue`

### Variables & Functions

* Use **camelCase** for variables and functions.

  * `playerName`, `fetchTeams`, `loadMatches`

### Components

* Component file names are **kebab-case**, but the component name (inside template) uses **PascalCase**.

  * File: `team-card.vue`
  * Usage: `<TeamCard />`

### Constants

* Use **UPPER_SNAKE_CASE** for constants.

  * `API_BASE_URL`, `MAX_TEAM_SIZE`
  - Usage:
```typescript
export const COMPETITION = {
  LEAGUE: 'league',
  CUP: 'cup',
  KNOCKOUT: 'knockout'
}
````

### Types & Interfaces

* Use **PascalCase**.

  * `Player`, `MatchDetails`, `TournamentResult`

---

## 3. Folder Structure

```
/assets          → Images, fonts, global styles
/components      → Reusable UI components
/composables     → Logic utilities (Vue composables)
/layouts         → App layouts (default, dashboard, etc.)
/pages           → Page-level views
/plugins         → Nuxt plugins (e.g., axios, toast)
/stores          → Pinia stores (state)
/utils           → Helper functions (date, formatters)
/middleware      → Navigation guards, route logic
```

---

## 4. Components Rules

### Do’s

* Keep components **focused** — one responsibility only.
* Use **props** and **emits** clearly.
* Use **slots** when flexible content is needed.
* Use **defineProps** and **defineEmits** with full TypeScript typing.
* Keep styles **scoped** when necessary.
* Add clear comment blocks at the top of complex components.

### Don’ts

* Don’t make direct API calls inside components — use composables or services.
* Don’t put multiple large features in one `.vue` file.
* Don’t use unnecessary watchers when computed properties can handle it.
* Don’t use inline styles — use Tailwind or CSS classes.

---

## 5. Composables

### Do’s

* Prefix all composables with `use` (e.g., `useAuth`, `useTeams`, `useApi`).
* Keep them **pure and reusable**.
* Always type return values.
* Handle all API logic here, not in components.

### Don’ts

* Don’t directly modify store state from a composable unless it’s store-related logic.
* Don’t use composables for single-use logic — keep that local to the component.

---

## 6. State Management (Pinia)

### Do’s

* Each store handles **one domain** (e.g., `useUserStore`, `useMatchStore`).
* Always define a **state interface**.
* Use **actions** for async logic, not direct state mutations.
* Use `persistedState` or localStorage for caching when needed.

### Don’ts

* Don’t store unnecessary data (e.g., entire user objects if only IDs are needed).
* Don’t mutate state outside the store.
* Don’t use getters for logic — use computed in components.

---

## 7. API Calls

### Do’s

* All requests go through a centralized `api` composable or service.
* Base URL comes from environment variables.
* Always handle loading, success, and error states.
* Use proper HTTP verbs (`GET`, `POST`, `PUT`, `DELETE`).

### Don’ts

* Don’t hardcode URLs.
* Don’t ignore error handling.
* Don’t fetch the same data multiple times unnecessarily — cache it.

---

## 8. Performance Rules

* Lazy-load all non-critical components.
* Use `<NuxtImg>` for images with proper sizes.
* Paginate or infinite-scroll large lists.
* Avoid unnecessary reactivity — don’t wrap static data in `ref()`.
* Preload only critical assets.
* Optimize imports — don’t import the entire library if you need one function.

---

## 9. CSS & Styling

* Use **TailwindCSS** utilities, not inline styles.
* Define global variables in `/assets/css`.
* Keep layout components clean — no color logic inside them.
* Reuse consistent spacing and font sizes.
* Use `dark:` variants when applicable.

---

## 10. Git Rules

* Always pull latest before merge.
* One logical change per commit.
* Commit rules:
- When updating documents only i.e → `docs: docs only`
- When changes does not effect functionality i.e → `chore: maintenance, meta, config`
- When fixing a bug i.e → `fix: bug fix`
- When adding new feature i.e → `feat: new feature`

---

## 11. Documentation

* Every composable, store, or major component needs a short description comment at the top.
* Keep README files in major folders explaining their structure.
* Update this doc when introducing a new rule or pattern.
* Use clear naming so the code explains itself.

---

## 12. Do’s & Don’ts (Quick Summary)

**Do**

* Keep it small, typed, and reusable.
* Optimize performance early.
* Comment complex logic.
* Respect the folder structure.
* Keep UI smooth — test in slow networks.

**Don’t**

* Mix logic layers (UI, state, API).
* Write spaghetti code.
* Leave TODOs for “later”.
* Break naming conventions.
* Push broken builds.

---

## 13. Mindset

You’re not coding for yourself — you’re coding for the **next developer** who reads it.
If they can’t understand your code in 5 minutes, it’s not clean enough.

---