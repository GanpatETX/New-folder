# Frontend Design Comparison: Design ATS vs Current Frontend

## Overview

| Aspect | Design ATS (`UUID/Design ATS`) | Current Frontend (`frontend`) |
|--------|-------------------------------|-------------------------------|
| **Project Name** | `@figma/my-make-file` v0.0.1 | `frontend` v0.0.0 |
| **Approach** | Standalone Figma-to-code prototype | Full-featured production app (after login) |
| **Entry Point** | `src/main.tsx` → `src/app/App.tsx` | `src/main.tsx` |→ `src/app/App.tsx` → `DashboardLayout` |
| **Base Font Size** | `16px` (default_shadcn_theme.css) | `15px` (src/styles/theme.css) |
| **Radius** | `0.625rem` (`10px`) | `0.5rem` (`8px`) |

---

## 1. Color Palette Differences

### Primary Colors
| Token | Design ATS | Current Frontend | Impact |
|-------|-----------|-----------------|--------|
| `--primary` | `#030213` (near-black) | `#1c1c1e` (dark gray) | Buttons, active states |
| `--primary-foreground` | `oklch(1 0 0)` (white) | `#ffffff` (white) | Text on primary buttons |
| `--secondary` | `oklch(0.95 0.0058 264.53)` (light lavender) | `#5c5c5e` (gray) | Secondary backgrounds |
| `--secondary-foreground` | `#030213` (near-black) | `#f7f8f9` (off-white) | Text on secondary |
| `--accent` | `#e9ebef` (light silver) | `#2c2c2e` (dark gray) | Accent elements |
| `--accent-foreground` | `#030213` (near-black) | `#ffffff` (white) | Text on accent |

### Light Mode Backgrounds
| Token | Design ATS | Current Frontend |
|-------|-----------|-----------------|
| `--background` | `#ffffff` (pure white) | `#f5f5f7` (off-white) |
| `--card` | `#ffffff` (pure white) | `#ffffff` (pure white) |
| `--popover` | `oklch(1 0 0)` (pure white) | `#ffffff` (pure white) |
| `--muted` | `#ececf0` (light gray) | `#e8e8ea` (warm light gray) |
| `--sidebar` | `oklch(0.985 0 0)` (warm white) | `#ffffff` (pure white) |

### Dark Mode Backgrounds
| Token | Design ATS | Current Frontend |
|-------|-----------|-----------------|
| `--background` | `oklch(0.145 0 0)` (dark gray) | `#0d0d0d` (near-black) |
| `--card` | `oklch(0.145 0 0)` (dark gray) | `#161616` (dark charcoal) |
| `--popover` | `oklch(0.145 0 0)` (dark gray) | `#1c1c1c` (dark charcoal) |
| `--muted` | `oklch(0.269 0 0)` (~#1a1a1e) | `#2c2c2c` (charcoal) |
| `--sidebar` | `oklch(0.205 0 0)` (~#1c1c1e) | `oklch(0.488 0.243 264.376)` (purple tint) |

### Foreground/Text Colors
| Token | Design ATS | Current Frontend |
|-------|-----------|-----------------|
| `--foreground` (light) | `oklch(0.145 0 0)` | `#1c1c1e` |
| `--foreground` (dark) | `oklch(0.985 0 0)` | `#ececec` |
| `--muted-foreground` | `#717182` | `#6e6e73` |
| `--ring` | `oklch(0.708 0 0)` | `#3c3c3e` |

### Destructive/Alert Colors
| Token | Design ATS | Current Frontend |
|-------|-----------|-----------------|
| Light | `#d4183d` (deeper red) | `#dc2626` |
| Dark | `oklch(0.396 0.141 25.723)` | `#ef4444` |

### Additional Tokens (Current Frontend ONLY)
- `--soft-green: #d4edda` / `#2e3e2e` (dark) — Used for status badges
- `--soft-red: #f8d7da` / `#3e2e2e` (dark) — Used for status badges
- `--switch-background: #cbced4` / `#8c8c8e` — Switch inputs

### Additional Tokens (Design ATS ONLY)
- `--input-background: #f3f3f5` — Input background fill (light)
- `--switch-background: #cbced4` — Same default

---

## 2. Typography & Font Differences

| Aspect | Design ATS | Current Frontend |
|--------|-----------|-----------------|
| **Base Font** | `'Space Grotesk', sans-serif` | `'Space Grotesk', sans-serif` |
| **Title Font** | `'Fauna One', serif` (specified in globals) | `'Fauna One', serif` (inline styles) |
| **Inline Title Font** | `'Fauna Thin, serif'` | `'Fauna One, serif'` |
| **Title Font Weight** | `100` (Fauna Thin) | `100` (Fauna One) |
| **Title Letter-Spacing** | `0.06em` | `0.02em` |
| **Body Font Size** | `16px` base | `15px` base |
| **Font Weights** | 400, 500 | 400, 500 |

**Key mismatch**: Design ATS uses `'Fauna Thin'` as the display font, while current frontend uses `'Fauna One'`. The Google Fonts import in both is `Fauna One`, meaning Design ATS may not be loading the correct font weight variation.

---

## 3. Component Architecture Differences

### Design ATS (Prototype Architecture)
```
src/
├── main.tsx
├── app/
│   ├── App.tsx          ← ALL state in one file (monolithic ~1031 lines)
│   └── components/
│       ├── ui/          ← 25+ shadcn/ui component files
│       ├── KanbanBoard.tsx
│       ├── ListView.tsx
│       ├── RolesView.tsx
│       ├── CandidateCard.tsx
│       ├── SettingsPage.tsx
│       ├── RequisitionPage.tsx
│       ├── Purchase/    ← 5 files for purchase module
│       └── ...
├── Data/                ← Mock data (Departments, Jobs, Candidates, etc.)
├── imports/             ← Figma-generated assets and design docs
└── styles/
    ├── fonts.css
    ├── tailwind.css
    ├── theme.css
    └── index.css
```

### Current Frontend (Production Architecture)
```
src/
├── main.tsx
├── app/
│   ├── App.tsx           ← Router setup
│   ├── store.ts          ← Zustand global state
│   ├── providers.tsx     ← Context providers
│   └── pages/            ← Login, AuthCallback
├── modules/
│   ├── ats/              ← ATS module (pages/, components/, hooks/, api/)
│   └── purchase/         ← Purchase module
├── shared/
│   ├── components/
│   │   ├── GuildLogo.tsx
│   │   ├── layout/
│   │   │   └── DashboardLayout.tsx  ← Shared layout
│   │   └── ui/          ← shadcn/ui components
│   ├── theme/           ← Empty (should have theme management)
│   ├── constants/
│   ├── hooks/
│   ├── types/
│   └── utils/
├── styles/
│   ├── fonts.css
│   ├── tailwind.css
│   └── theme.css
├── index.css
└── assets/
```

---

## 4. Layout / Structural Differences

### Design ATS Layout
- **Single file `App.tsx`** contains ALL layout, sidebar, header, profile dropdown, and body views
- `DndProvider` wraps everything
- State management via `useState` in App.tsx
- Theme handled via local `theme` state + `document.documentElement.classList`
- Views rendered via inline conditionals
- Engineering pattern background with SVG decorative elements
- Sidebar width: `220px`
- Custom `ThemeToggle` component from `./components/ThemeToggle`

### Current Frontend Layout
- **`DashboardLayout`** handles sidebar, header, profile section
- **Zustand store** (`src/app/store.ts`) manages all state
- **React Router** handles navigation
- Theme via Zustand store `theme` field + `toggleTheme` action
- `MainATSContainer` handles ATS-specific rendering
- Engineering pattern background (identical SVG)
- Sidebar width: `220px`
- Theme toggle via inline SVG swap (different from Design ATS's `ThemeToggle`)

---

## 5. Theme/Toggle Implementation Difference

| Feature | Design ATS | Current Frontend |
|---------|-----------|-----------------|
| Toggle Component | Dedicated `ThemeToggle.tsx` with ripple animation | Inline SVG in `DashboardLayout.tsx` |
| Circular Animation | Yes — ripple/spin animation | No — simple icon swap |
| State Source | `useState<theme>` in App.tsx | Zustand store |

---

## 6. Technical Differences

### Design ATS → Current Frontend

| Item | Design ATS | Current Frontend | Issue |
|------|-----------|-----------------|-------|
| `react-redux` | ✗ Not present | ✓ Present | Unused in Design ATS |
| `zustand` | ✗ Not present | ✓ Present | Used for state management |
| `motion` (Framer) | ✓ Present | ✓ Present | Same version |
| `react-router` | ✓ But unused (no router) | ✓ Routing used | Missing in Design ATS |
| `next-themes` | ✓ Present | ✓ Present | Same version |
| `vite` | `6.3.5` | `5.4.21` | Version mismatch |
| `@vitejs/plugin-react` | `4.7.0` | `4.3.1` | Version mismatch |
| `peerDependencies` | `react: 18.3.1` (optional) | Not specified | Different config style |
| `MUI` | ✓ Installed | ✓ Installed | Both have MUI, unclear if used |
| `profile menu` | Hardcoded `"Gautham Mayur N"`, `"Cheif Of Staff"` | Dynamic from store: `user?.name`, `user?.roles?.[0]` | Frontend correctly uses dynamic data |
| `header title` | Dynamic: `"The Guild ATS"` / `"The Guild Procurement"` | Hardcoded: `"The Guild ATS"` | Design ATS handles purchase module title |
| `purchase module` | Inline in App.tsx, shares sidebar | Separate `PurchaseModule` component, separate sidebar items | Structure difference |

---

## 7. Detailed Change Plan

### Phase 1: Design Token Alignment
1. **Update `frontend/src/styles/theme.css`** to match Design ATS color tokens:
   - Change `--background` from `#f5f5f7` → match "pure white" approach for light, deeper charcoal for dark
   - Change `--primary` to use near-black `#030213` for light mode, lighter for dark
   - Update `--secondary`, `--accent`, `--sidebar` tokens
   - **Decision point**: Choose either Design ATS or current, then systematically align
2. **Remove `--soft-green` and `--soft-red`** if not used, or document where they are applied
3. **Update border radius** from `0.5rem` → `0.625rem` if aligning with Design ATS

### Phase 2: Typography Alignment
1. **Confirm font loading**: Both use `Fauna One` from Google Fonts, but Design ATS references `Fauna Thin` in `style` props. Need to decide final font stack.
2. **Standardize the display font**: Either use `Fauna One` everywhere or load `Fauna Thin` separately
3. **Update header title** in `DashboardLayout.tsx` to dynamically show "The Guild ATS" vs "The Guild Procurement"

### Phase 3: Theme Toggle Component
1. **Replace inline SVG toggle** with Design ATS's `ThemeToggle.tsx` component (with animation)
2. **Port ripple/spin animation** from Design ATS → current frontend

### Phase 4: Layout Restructure
1. **Port `DashboardLayout` enhancements** from Design ATS:
   - Add search bar (currently hardcoded in Design ATS's App.tsx, missing from current DashboardLayout)
   - Add filter, view toggle (kanban/list) controls to header
   - Add "New Job" / "New Request" primary action button to header
   - Add pipeline status tabs row below header
2. **Confirm sidebar sharing** — current separates ATS vs Purchase sidebar items; Design ATS does too (it's fine if they differ in implementation)

### Phase 5: Component Migration (from Design ATS → current)
1. **Port missing components** to `frontend/src/modules/ats/components/`:
   - `KanbanBoard.tsx` (drag & drop pipeline)
   - `ListView.tsx` (table view)
   - `CandidateCard.tsx`
   - `CandidateProfile.tsx`
   - `FilterPanel.tsx`
   - `NewJobModal.tsx`
   - `StageTransitionModal.tsx`
   - `SettingsPage.tsx`
   - `CandidateProfile.tsx`
   - `BackButton.tsx`
   - `GuildLogo` → Already exists but port animation improvements
2. **Port data files** to `frontend/src/modules/ats/data/`:
   - `Departments.tsx`, `Jobs.tsx`, `Candidates.tsx`, `Interviews.tsx`, `Recruiters.tsx`

### Phase 6: Screen-Specific Alignment

#### Login Page
- Check current `frontend/src/app/pages/Login.tsx` vs Design ATS (no login in Design ATS)
- **Action**: Style Login page with Design ATS color tokens and fonts

#### Dashboard Page
- Current: `frontend/src/modules/ats/pages/DashboardPage.tsx`
- Design ATS: Components + inline rendering in App.tsx
- **Action**: Rewrite Dashboard page to match Design ATS's card-based metrics layout

#### Requisitions Page
- Design ATS has `RequisitionsPage.tsx` with `activeRequisitionCategory`
- Check current `frontend/src/modules/ats/pages/RequisitionsPage.tsx`
- **Action**: Port requisitions redesign from Design ATS

#### Interviews Page
- Design ATS: `InterviewsPage.tsx` (rich UI with scheduling)
- **Action**: Ensure current interviews page matches Design ATS visual treatment

#### Referrals Page
- Design ATS: `ReferralsPage.tsx`
- **Action**: Verify alignment

#### Settings Page
- Design ATS: `SettingsPage.tsx` with tabs
- **Action**: Verify alignment

#### Analytics Page
- Design ATS: `AnalyticsPage.tsx` with charts
- Current: `frontend/src/modules/ats/pages/AnalyticsPage.tsx`
- **Action**: Verify chart styling, card treatments match

### Phase 7: Engineering Pattern Background
1. **Keep as-is** — both projects already use identical SVG pattern backgrounds with `opacity-[0.03]` (light) / `dark:opacity-[0.02]`
2. **Ensure it stays consistent** across all pages

### Phase 8: Dependency Cleanup
1. **Upgrade vite** to `6.3.5` (or downgrade Design ATS to match)
2. **Check unused dependencies** in current frontend: `@reduxjs/toolkit`, `react-popper`
3. **Add `zustand`** to Design ATS if migrating its state pattern

### Phase 9: Content & Text Alignment
1. **Header grouping**: Design ATS splits header into "top row" (title + controls) and "bottom row" (pipeline status tabs). Current only has top row. **Add bottom row tab bar.**
2. **Department cards**: Design ATS has rich department cards with stats (open roles, shortlisted, hires, avg age). Current uses simple routing. **Replace or augment.**
3. **Search placeholder**: Design ATS uses `"Search candidates..."` / `"Search requisitions..."`. Verify current uses same copy.
4. **Empty states**: Design ATS has specific empty states ("No candidates for this role yet." with icon). Verify current has equivalents.

### Phase 10: Quality Check
1. **Visual regression test** — run both dev servers, compare side-by-side
2. **Dark mode test** — verify both light and dark mode look consistent
3. **Responsive check** — ensure `220px` sidebar and content layout works
4. **Font loading verification** — check Fauna One vs Fauna Thin in browser dev tools
5. **Lint & typecheck** — ensure no errors from migrated code

---

## Summary of Key Mismatches

| Category | Severity | Description |
|----------|----------|-------------|
| 🎨 Design Tokens | **HIGH** | Colors are significantly different — primary, secondary, accent, background differ |
| 🔤 Typography | **MEDIUM** | Base font size mismatch (15px vs 16px), title font reference mismatch (Fauna One vs Fauna Thin) |
| 📐 Layout | **HIGH** | Dashboard missing: search bar, filter button, view toggle, pipeline tabs, primary action button |
| 🧩 Components | **HIGH** | Current missing KanbanBoard, ListView, FilterPanel, NewJobModal, StageTransitionModal, SettingsPage |
| 🔄 State Mgmt | **MEDIUM** | Design ATS uses useState; current uses Zustand. Migration needed for new components |
| 🔘 Theme Toggle | **LOW** | Animation style differs — Design ATS has ripple, current is icon swap |
| 🔗 Routing | **MEDIUM** | Design ATS has no URL routing; current uses React Router. Components need to work within router |
| 📦 Build Tools | **LOW** | Vite version mismatch (6.3.5 vs 5.4.21) |
| 📄 Content | **MEDIUM** | Department cards, pipeline tabs, empty states, search placeholders need alignment |
| 🔙 Profile Menu | **LOW** | Design ATS hardcodes user data; current uses dynamic store data |
