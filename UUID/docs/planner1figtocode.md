# Design Alignment Plan: Production Frontend → Design ATS Visuals

> **Objective**: Make `frontend/` look identical to `UUID/Design ATS` in terms of colors, fonts, spacing, and component styling — **without** changing the production folder structure or architecture.

---

## 1. Color Token Alignment

**Target**: `frontend/src/styles/theme.css` — overwrite current values with Design ATS values.

### Light Mode Changes

| Token | Current Value | **Target (Design ATS)** | Notes |
|-------|--------------|------------------------|-------|
| `--background` | `#f5f5f7` | `#ffffff` | Pure white |
| `--foreground` | `#1c1c1e` | `oklch(0.145 0 0)` | Near-black (oklch equivalent) |
| `--primary` | `#1c1c1e` | `#030213` | Deeper near-black |
| `--primary-foreground` | `#ffffff` | `oklch(1 0 0)` | White (oklch) |
| `--secondary` | `#5c5c5e` | `oklch(0.95 0.0058 264.53)` | Light lavender |
| `--secondary-foreground` | `#f7f8f9` | `#030213` | Near-black |
| `--muted` | `#e8e8ea` | `#ececf0` | Slightly cooler gray |
| `--muted-foreground` | `#6e6e73` | `#717182` | Muted text |
| `--accent` | `#2c2c2e` | `#e9ebef` | Light silver (reversed role) |
| `--accent-foreground` | `#ffffff` | `#030213` | Near-black |
| `--destructive` | `#dc2626` | `#d4183d` | Deeper red |
| `--border` | `rgba(0, 0, 0, 0.08)` | `rgba(0, 0, 0, 0.1)` | Slightly stronger border |
| `--ring` | `#3c3c3e` | `oklch(0.708 0 0)` | Medium gray |
| `--sidebar` | `#ffffff` | `oklch(0.985 0 0)` | Warm white |
| `--sidebar-foreground` | `#1c1c1e` | `oklch(0.145 0 0)` | Near-black |
| `--sidebar-primary` | `#1c1c1e` | `#030213` | Near-black |
| `--sidebar-primary-foreground` | `#ffffff` | `oklch(0.985 0 0)` | Warm white |
| `--sidebar-accent` | `#f5f5f7` | `oklch(0.97 0 0)` | Warmer accent |
| `--sidebar-accent-foreground` | `#1c1c1e` | `oklch(0.205 0 0)` | Dark text |
| `--sidebar-border` | `rgba(0, 0, 0, 0.08)` | `oklch(0.922 0 0)` | Light border |
| `--sidebar-ring` | `#6e6e73` | `oklch(0.708 0 0)` | Medium gray |
| `--input-background` | `#fafbfc` | `#f3f3f5` | Slightly darker input fill |
| `--switch-background` | `#8c8c8e` | `#cbced4` | Lighter switch track |

### Dark Mode Changes

| Token | Current Value | **Target (Design ATS)** | Notes |
|-------|--------------|------------------------|-------|
| `--background` | `#0d0d0d` | `oklch(0.145 0 0)` | Dark gray (not pure black) |
| `--foreground` | `#ececec` | `oklch(0.985 0 0)` | Near-white |
| `--primary` | *(not defined in dark)* | `oklch(0.985 0 0)` | Near-white primary |
| `--primary-foreground` | *(not defined)* | `oklch(0.205 0 0)` | Dark on primary |
| `--secondary` | `#2c2c2c` | `oklch(0.269 0 0)` | Slightly lighter |
| `--secondary-foreground` | `#ececec` | `oklch(0.985 0 0)` | Near-white |
| `--muted` | `#2c2c2c` | `oklch(0.269 0 0)` | Same as secondary |
| `--muted-foreground` | `#8c8c8c` | `oklch(0.708 0 0)` | Medium gray |
| `--accent` | `#2c2c2c` | `oklch(0.269 0 0)` | Same as muted |
| `--accent-foreground` | `#ececec` | `oklch(0.985 0 0)` | Near-white |
| `--destructive` | `#ef4444` | `oklch(0.396 0.141 25.723)` | Deeper red |
| `--destructive-foreground` | `#ffffff` | `oklch(0.637 0.237 25.331)` | Light red text |
| `--border` | `rgba(255, 255, 255, 0.07)` | `oklch(0.269 0 0)` | Solid dark border |
| `--input` | `#2c2c2c` | `oklch(0.269 0 0)` | Match |
| `--ring` | `#5c5c5c` | `oklch(0.439 0 0)` | Medium gray |
| `--sidebar` | *(not defined)* | `oklch(0.205 0 0)` | Dark sidebar |
| `--sidebar-foreground` | *(not defined)* | `oklch(0.985 0 0)` | Near-white |
| `--sidebar-primary` | *(not defined)* | `oklch(0.488 0.243 264.376)` | Purple tint |
| `--sidebar-primary-foreground` | *(not defined)* | `oklch(0.985 0 0)` | Near-white |
| `--sidebar-accent` | *(not defined)* | `oklch(0.269 0 0)` | Match muted |
| `--sidebar-accent-foreground` | *(not defined)* | `oklch(0.985 0 0)` | Near-white |
| `--sidebar-border` | *(not defined)* | `oklch(0.269 0 0)` | Match |
| `--sidebar-ring` | *(not defined)* | `oklch(0.439 0 0)` | Match ring |
| `--soft-green` | `#2e3e2e` | *(remove — not in Design ATS)* | Verify usage first |
| `--soft-red` | `#3e2e2e` | *(remove — not in Design ATS)* | Verify usage first |

### Shared Changes
| Token | Current | **Target** |
|-------|---------|-----------|
| `--font-size` | `15px` | `16px` |
| `--radius` | `0.5rem` | `0.625rem` |
| `--chart-1` through `--chart-5` | Already match (oklch values identical) | ✅ No change |

### Actions
1. **Overwrite `frontend/src/styles/theme.css`** with Design ATS's token values (both light and dark blocks)
2. **Add `--primary` / `--primary-foreground` / `--input` to dark mode** block if missing
3. **Decide on `--soft-green` / `--soft-red`** — grep `frontend/src` for usage. If used for status badges, either keep them (they're additive, not conflicting) or replace with Design ATS's approach
4. **Remove `@custom-variant dark (&:is(.dark *))`** line if Design ATS doesn't use it (it uses `.dark` block directly)

---

## 2. Typography Alignment

### Changes Required

| Item | Current | **Target (Design ATS)** |
|------|---------|------------------------|
| Base font size | `15px` | `16px` |
| Title font family | `'Fauna One, serif'` | `'Fauna Thin, serif'` |
| Title font weight | `100` | `100` (same, but different font) |
| Title letter-spacing | `0.02em` | `0.06em` |

### Critical Font Issue

**Design ATS references `'Fauna Thin'`** in inline styles, but both projects only import `Fauna One` from Google Fonts. `Fauna Thin` is not a standard Google Fonts weight for `Fauna One`.

**Decision needed**:
- **Option A**: Use `font-weight: 100` with `'Fauna One, serif'` — this will load the thinnest available weight of Fauna One (which is weight 400 by default from Google Fonts, but can be requested at 200 if available)
- **Option B**: Import a different thin serif font (e.g., `Cormorant Garamond` weight 300, or `Playfair Display` weight 400) as `'Fauna Thin'`
- **Option C**: Keep current `Fauna One` but accept that the "thin" look won't match

**Recommended**: Option B — load `Cormorant Garamond:wght@300` as the `'Fauna Thin'` family, or simply use `'Fauna One'` at `font-weight: 100` and let the browser synthesize thin rendering.

### Actions
1. **Update `DashboardLayout.tsx`** header title style:
   ```tsx
   style={{ fontFamily: "'Fauna One', serif", fontWeight: 100, letterSpacing: '0.06em' }}
   ```
2. **Update `Design ATS\default_shadcn_theme.css` reference** — if Design ATS's `App.tsx` uses `'Fauna Thin, serif'`, replace all occurrences with `'Fauna One, serif'` in the **current frontend's** DashboardLayout
3. **Consider adding `Cormorant Garamond`** to `frontend/src/styles/fonts.css` IF the client specifically wants an ultra-thin serif look that `Fauna One` can't provide

---

## 3. Dashboard Header Layout Alignment

**This is the biggest structural/visual gap.** Design ATS's header has **two rows**; current `DashboardLayout` has only **one**.

### Design ATS Header Structure (in `App.tsx`):
```
┌─────────────────────────────────────────────────────┝
│ Row 1:  "The Guild ATS"    [Search] [Filter] [View] [Theme] [+ New Job]  │
│ Row 2:  [All] [Screening] [Fitment] [Technical] [PTC] [Founders] [...]   │
└─────────────────────────────────────────────────────┘
```

### Current Frontend Header (`DashboardLayout.tsx`):
```
┌─────────────────────────────────────────────────────┝
│ Row 1:  "The Guild ATS"                    [Theme]  │
└─────────────────────────────────────────────────────┘
```

### Required Changes to `DashboardLayout.tsx`

The pipeline status tabs (Row 2) and search/filter/view controls belong in the **ATS-specific container** (`MainATSContainer`), not the shared `DashboardLayout`. Design ATS places them in `App.tsx` which is the ATS container.

**Action**: Add these elements to `frontend/src/modules/ats/components/MainATSContainer.tsx` **above** the tab content area, matching Design ATS's header structure:

1. **Header bar** (Row 1) — move from `DashboardLayout` to `MainATSContainer`:
   - Title: `"The Guild ATS"` or `"The Guild Procurement"` (dynamic based on module)
   - Search input (visible for candidates + jobs tabs)
   - Filter toggle button (candidates tab only)
   - Kanban/List view toggle (candidates + jobs tabs)
   - Theme toggle (keep from DashboardLayout or move here)
   - "New Job" / "New Request" primary button

2. **Pipeline tabs** (Row 2) — add below header bar:
   - `[All · N] [Screening · N] [Fitment Evaluation · N] ...`
   - Only visible on candidates tab (`showPipelineHeader`)
   - Horizontal scroll on overflow

3. **Update `DashboardLayout.tsx`** to remove the title+theme-toggle from its header (since MainATSContainer will now own it), OR keep DashboardLayout minimal and pass header rendering responsibility down.

**Best approach for production code**: Keep `DashboardLayout` as the shell, but add an optional `headerExtra` slot or let `MainATSContainer` render its own full header above the `<main>` content. Match Design ATS's structure where the ATS container owns the full header.

---

## 4. Theme Toggle Animation

### Design ATS (`ThemeToggle.tsx`)
- Ripple/spread animation on click (radial gradient expanding from click point)
- Sun/Moon icon swap with scale + opacity transition
- Sun icon rotates 45° on hover; Moon icon rotates -12° on hover
- Hover background: `accent/10`
- Size: `w-5 h-5` icons

### Current Frontend (`DashboardLayout.tsx`)
- Inline SVG moon/sun swap, no animation
- No ripple effect
- No hover rotation
- Hover background: `foreground/[0.07]`

### Action
**Port `ThemeToggle.tsx` from Design ATS into the current frontend** at a shared location (e.g., `frontend/src/shared/components/ui/ThemeToggle.tsx`), updating its props to use Zustand's `theme` and `toggleTheme` instead of `useState`. Then replace the inline SVG in `DashboardLayout.tsx` with `<ThemeToggle />`.

---

## 5. GuildLogo Alignment

Both projects' `GuildLogo.tsx` are **identical** — same filter logic, same sizing, same transition. ✅ No changes needed.

---

## 6. Engineering Background Pattern

Both projects use **identical** SVG pattern with `opacity-[0.03]` (light) / `dark:opacity-[0.02]`. ✅ No changes needed.

---

## 7. Component Style Verification (No Code Moves)

All 6 key components exist in the current frontend. For each, **visually compare** the Design ATS version against the current version and port any missing styles:

| Component | Current Location | Verify Against |
|-----------|-----------------|----------------|
| `KanbanBoard` | `modules/ats/components/kanban/KanbanBoard.tsx` | Design ATS's card styling, column headers, drag indicators |
| `ListView` | `modules/ats/components/list/ListView.tsx` | Table row styling, status badges, hover states |
| `FilterPanel` | `modules/ats/components/filters/FilterPanel.tsx` | Panel styling, backdrop blur, input styles |
| `NewJobModal` | `modules/ats/components/jobs/NewJobModal.tsx` | Modal container, form field styling |
| `StageTransitionModal` | `modules/ats/components/candidate/StageTransitionModal.tsx` | Modal styling, stage selector UI |
| `CandidateProfile` | `modules/ats/components/candidate/CandidateProfile.tsx` | Profile card, tab styling |
| `SettingsPage` | `modules/ats/pages/SettingsPage.tsx` | Verify it exists and matches |
| `DashboardPage` | `modules/ats/pages/DashboardPage.tsx` | Port card-based metrics layout from Design ATS |

**For each component**: compare Tailwind classes, border radius values, color usage, spacing, and shadow treatments. Port any Design ATS–specific styling that makes the UI look different.

---

## 8. Page-by-Page Priority Order

Execute in this order (highest visual impact first):

### Phase 1: Global Tokens (does everything at once)
1. Update `frontend/src/styles/theme.css` with Design ATS color tokens (light + dark)
2. Change `--font-size: 16px`, `--radius: 0.625rem`
3. Verify font import in `fonts.css` — both already import `Space Grotesk` + `Fauna One`

### Phase 2: Layout Header (see Section 5 for per-page details)
4. Port Design ATS header structure into `MainATSContainer.tsx` and each page component:
   - Title with `FontFamily: 'Fauna One', letterSpacing: 0.06em`
   - Search bar, filter button, view toggle, theme toggle, "New Job" button (pages that need them)
   - Pipeline/category status tabs row below (pages that have them)
   - **See Section 5 (page-by-page) for tab-specific header requirements**

### Phase 3: Theme Toggle
5. Port `ThemeToggle.tsx` with ripple animation into `shared/components/ui/ThemeToggle.tsx`
6. Wire it to Zustand store's `theme` + `toggleTheme`

### Phase 4: Dashboard Page (see 5.1)
7. Compare `frontend/src/modules/ats/pages/DashboardPage.tsx` with Design ATS's `DashboardPage.tsx`
8. Port card-based metrics layout, stat cards, department pipeline cards
9. Fix `showPipelineHeader` to be `false` on Dashboard tab

### Phase 5: Candidates & Jobs Pages (see 5.2, 5.3)
10. Verify Candidates tab header (Row 1 + Row 2) matches Design ATS exactly
11. Verify Jobs 3-level flow (Departments ? Roles ? Role Pipeline) breadcrumb and card styling

### Phase 6: Requisitions, Interviews, Referrals, Analytics, Settings (see 5.4�5.8)
12. **Requisitions (5.4)** � Biggest gap: convert inline header to `<header>` with Row 2 clickable status tabs
13. **Interviews (5.5)** � Wrap header in `<header>` with backdrop-blur
14. **Referrals (5.6)** � Wrap header in `<header>` with backdrop-blur
15. **Analytics (5.7)** � Fix card radius `rounded-lg ? rounded-xl`, padding `p-4 ? p-5`
16. **Settings (5.8)** � Already close, verify inner card components after token updates

### Phase 7: Login Page
17. Style `frontend/src/app/pages/Login.tsx` with Design ATS color tokens if needed

### Phase 8: Final Polish
18. Run `npm run dev` on both projects, open in browser, compare side-by-side
19. Test dark mode toggle � verify colors match in both themes
20. Check border-radius consistency (all `rounded-xl` = `0.625rem` = `10px`)
21. Run `npm run lint` and `npm run typecheck` on the production frontend

---

## Summary of What NOT to Change

- ❌ Keep `MainATSContainer.tsx` as the ATS state orchestrator (don't revert to monolithic `App.tsx`)
- ❌ Keep Zustand store for global state
- ❌ Keep React Router for navigation
- ❌ Keep domain-based component folders (`kanban/`, `list/`, `filters/`, etc.)
- ❌ Keep ERP access flow (login → module catalog → ATS)
- ❌ Don't touch `package.json` dependencies
- ❌ Don't touch `vite.config.ts` or build tooling

---

## Single-Line Summary

> **Replace `frontend/src/styles/theme.css` tokens with Design ATS values, update header layout + pipeline tabs in `MainATSContainer.tsx`, port the animated `ThemeToggle`, fix font references, and verify component styling parity — keep all production architecture intact.**

## Page-by-Page Header & Layout Alignment

The **header pattern below is universal across all non-Dashboard pages** in Design ATS. Every tab � Candidates, Jobs, Requisitions, Interviews, Referrals, Analytics, Settings � uses either the **full header** (Row 1 + Row 2) or a **simplified header** depending on whether the page has a secondary filter row.

### Universal Header Pattern (Design ATS)

**Full header** (Row 1 + Row 2) � used on tabs that have a secondary filter category row:
```
Row 1: [Page Title]              [Search] [Filter btn] [View toggle] [Theme] [+ Primary Action]
Row 2: [All � N] [StatusA � N] [StatusB � N] [StatusC � N] ...   (horizontal scroll)
```

**Simplified header** (Row 1 only) � used on pages without a category filter row:
```
Row 1: [Page Title]    [Type dropdown or other controls]
```

---

### 5.1 Dashboard Page
**File:** `frontend/src/modules/ats/pages/DashboardPage.tsx`

| Aspect | Design ATS | Current Frontend |
|--------|-----------|-----------------|
| Header owner | `MainATSContainer.tsx` (header outside page) | `DashboardPage.tsx` inside content area |
| Title | "The Guild ATS" (in container header) | DashboardPage has its own `<h2>` inside content |
| Secondary row | Pipeline status tabs (All, Screening, Fitment�) | ? Missing � tabs are in `MainATSContainer` but not connected to Dashboard |

**Design ATS behavior:**
- Dashboard tab does **not** show pipeline tabs (Row 2 hidden)
- Shows stat cards, department pipeline, upcoming interviews, bottleneck alerts
- "New Job" button visible

**Fix for current frontend:**
- Keep `DashboardPage.tsx` content-as-is (stat cards etc.)
- Ensure `showPipelineHeader` is `false` when `activeTab === 'dashboard'` (currently it checks `activeTab === 'candidates'`, needs to also exclude dashboard)
- Title and actions stay in `MainATSContainer` header

---

### 5.2 Candidates Page (Tab: `candidates`)
**File:** `frontend/src/modules/ats/components/MainATSContainer.tsx`

This is the **primary case** already covered in Section 4.

| Row | Elements |
|-----|---------|
| **Row 1** | Title: "The Guild ATS" � Search (placeholder: "Search candidates...") � Filter btn � Kanban/List toggle � ThemeToggle � [+ New Job] |
| **Row 2** | Pipeline tabs: [All] [Screening] [Fitment Evaluation] [Technical Interview] [PTC Interview] [Founders' Interview] [Selected] [Rejected] [Talent Pool] � each with candidate count |

**Current gap:** Row 2 tabs ARE present in `MainATSContainer` but Row 1 search/filter/view/button controls may not match Design ATS's exact classes. Verify:
- Search input: `pl-8 pr-3 py-1.5 text-xs bg-muted/30 border border-border rounded-lg w-64 focus:outline-none focus:ring-1 focus:ring-foreground/20 focus:bg-card`
- Filter button: `p-1.5 rounded-lg`, active state `bg-foreground/15 shadow-sm`, inactive `hover:bg-foreground/[0.07]`
- View toggle: `flex items-center gap-0.5 bg-muted/30 rounded-lg p-0.5`, active `bg-card shadow-sm`
- New Job button: `px-3 py-1.5 text-xs bg-primary text-primary-foreground rounded-lg`

---

### 5.3 Jobs / Requisitions Tab (Tab: `jobs`)
**File:** `frontend/src/modules/ats/components/MainATSContainer.tsx` ? `renderJobsView()`

Design ATS jobs flow has **three levels**:
```
Level 1: Departments grid ? (click dept) ?
Level 2: Roles list ? (click role) ?
Level 3: Role Candidate Pipeline (Kanban/List)
```

| Level | Header (Row 1) | Header (Row 2) |
|-------|---------------|---------------|
| Level 1 (Departments) | "The Guild ATS" + controls | Pipeline tabs (same as Candidates) |
| Level 2 (Roles) | Breadcrumb: Back to Roles + Role title + dept name + applicant count | ? No secondary row |
| Level 3 (Role Pipeline) | Breadcrumb: Back to Roles + Role title + dept + count | ? No secondary row |

**Current frontend (`MainATSContainer`):**
- Level 1: Has `renderJobsView()` when `!selectedDepartment` � shows department cards grid
- Level 2: Has `RolesView` component
- Level 3: Shows `KanbanBoard` or `ListView` for that role

**Design ATS-specific styling to port:**
- Breadcrumb area: `px-5 pt-4 pb-3 border-b border-border/40`
- `BackButton` component with `label="Back to Roles"` and `className="mb-2"`
- Title: `text-base font-semibold`
- Subtitle: `text-xs text-muted-foreground mt-0.5`
- Department cards: `p-5 rounded-xl border border-border bg-card hover:bg-muted/20 dark:hover:bg-white/[0.04] transition-all duration-200`

---

### 5.4 Requisitions Tab (Tab: `requisitions`)
**File:** `frontend/src/modules/ats/pages/RequisitionPage.tsx`

**This is the biggest mismatch � different header structure entirely.**

#### Design ATS Header (dedicated `<header>` with two rows):
```
Row 1 (inside <header>):
  px-5 py-3
  [Title: "Requisitions"]                    [Search] [Filter btn] [View toggle]

Row 2 (inside <header>, below Row 1):
  mt-3 overflow-x-auto
  [All � N] [Draft � N] [Approved � N] [Open � N] [Closed � N]   (clickable buttons)
```

#### Current Frontend Header (inside content `<div>`, NOT a `<header>`):
```
Inside <div className="h-full flex flex-col bg-background">:

  [Title: "Requisitions"]              ? h2, text-xl, no header wrapper
  [Subtitle: "N requisitions..."]      ? p, text-xs

  [Status chips as <span> elements]   ? NOT clickable! Displayed as muted text spans
  [Search input]                       ? Different style (w-[260px] pl-10 pr-4 py-2)
  [View toggle buttons]               ? Different styling (p-2 rounded-lg, bg-muted active)
  ? NO Filter button
  ? NO <header> wrapper with border/backdrop-blur
  ? NO clickable status tabs (they are static spans)
```

#### Required Changes to `RequisitionPage.tsx`

1. **Convert header to `<header>` element** with Design ATS's class structure:
   ```tsx
   <header className="border-b border-border/50 bg-card/60 backdrop-blur-md shadow-sm flex-shrink-0">
     <div className="px-5 py-3">
  ```

2. **Row 1 � Title + controls:**
   - Title: `h1` with `text-xl tracking-tight` and `fontFamily: 'Fauna One', letterSpacing: '0.02em'`
   - Search: same pattern as ATS (Design ATS) � `pl-8 pr-3 py-1.5 text-xs bg-muted/30 border border-border rounded-lg w-64`
   - Filter button: `p-1.5 rounded-lg`, with active state `bg-foreground/15 shadow-sm`
   - View toggle: inside `bg-muted/30 rounded-lg p-0.5` container

3. **Row 2 � Status tabs (CRITICAL):**
   - Change from static `<span>` to **clickable `<button>` elements**
   - Each tab: `px-3 py-1 rounded-lg text-xs font-medium`
   - Active: `bg-foreground/15 text-foreground shadow-sm`
   - Inactive: `hover:bg-foreground/[0.07] text-muted-foreground hover:text-foreground`
   - Add `onClick` to set `activeCategory` state
   - Add `handleCategoryClick` function matching Design ATS pattern
   - Already has `activeCategory` state � just needs to be wired to UI

4. **Add `FilterPanel` integration:**
   - Add `showFilterPanel` state
   - Wire filter button to toggle it
   - Already exists in component imports

5. **Main content area:**
   - Wrap kanban/list in `p-5` padding div
   - Keep existing board/list components

---

### 5.5 Interviews Page (Tab: `interviews`)
**File:** `frontend/src/modules/ats/components/interviews/InterviewsPage.tsx`

| Aspect | Design ATS | Current Frontend |
|--------|-----------|-----------------|
| Header wrapper | ? No `<header>` � uses inline `<div>` | ? No `<header>` � uses inline `<div>` |
| Title | `h2` with `text-xl font-semibold tracking-tight` | Same ? |
| Subtitle | `text-xs text-muted-foreground` with counts | Same ? |
| Controls | `<select>` for interview type filter | Same `<select>` ? |
| Secondary row | Status tabs: [All] [Scheduled] [Pending Feedback] [Completed] � **clickable buttons** | Same tabs ? (clickable buttons) |

**Gap:**
- Header is **inside content area** (`px-6 pt-6 pb-8 space-y-6`), not in a fixed `<header>` with backdrop-blur like other pages
- No border/shadow treatment on header
- Current has `selectedType` dropdown for filtering � Design ATS also has this ?

**Fix:**
- Wrap title + controls in a `<header>` with `border-b border-border/50 bg-card/60 backdrop-blur-md shadow-sm`
- Use `px-5 py-3` padding inside header
- Move status tabs into the header (Row 2)
- Content below gets `flex-1 overflow-auto`

---

### 5.6 Referrals Page (Tab: `referrals`)
**File:** `frontend/src/modules/ats/pages/ReferralsPage.tsx`

| Aspect | Design ATS | Current Frontend |
|--------|-----------|-----------------|
| Header wrapper | ? No `<header>` | ? No `<header>` |
| Title | `h2` `text-xl font-semibold tracking-tight` | Same ? |
| Subtitle | `text-xs text-muted-foreground` | Same ? |
| Controls | None (referral form is a separate view) | Same ? |
| Secondary row | Filter tabs: [All] [Pending] [Interviewed] [Hired] | Same tabs ? |

**Gap:**
- Same as Interviews � header is in content area, not a proper `<header>` with border/backdrop-blur
- "New Referral" button may be missing or styled differently

**Fix:**
- Wrap header in `<header>` with Design ATS backdrop-blur treatment
- Ensure filter tabs are styled with active/inactive states matching Design ATS (`bg-foreground/15` vs `hover:bg-foreground/[0.07]`)
- Verify "New Referral" primary button styling matches `px-3 py-1.5 text-xs bg-primary text-primary-foreground rounded-lg`

---

### 5.7 Analytics Page (Tab: `analytics`)
**File:** `frontend/src/modules/ats/pages/AnalyticsPage.tsx`

| Aspect | Design ATS | Current Frontend |
|--------|-----------|-----------------|
| Header | Title + subtitle + [Export btn?] | Title + subtitle ? |
| Secondary row | None � simple header | None ? |
| Card treatments | `bg-card border border-border rounded-xl p-5` | `bg-card border border-border rounded-lg p-4` � radius/spacing mismatch |
| Chart styling | Uses recharts with Design ATS colors | Uses custom VBars/HBar components |

**Gap:**
- Card radius: Design ATS uses `rounded-xl` (10px), current uses `rounded-lg` (8px)
- Card padding: Design ATS uses `p-5`, current uses `p-4`
- No chart library � uses custom bar components

**Fix:**
- Update card classes: `rounded-lg` ? `rounded-xl`, `p-4` ? `p-5`
- Verify chart bar colors match Design ATS token values after token alignment
- Add header backdrop-blur treatment if missing

---

### 5.8 Settings Page (Tab: `settings`)
**File:** `frontend/src/modules/ats/pages/SettingsPage.tsx`

| Aspect | Design ATS | Current Frontend |
|--------|-----------|-----------------|
| Layout | Sidebar (`w-64`) + Content (`flex-1`) | Sidebar (`w-64`) + Content (`flex-1`) ? |
| Sidebar bg | `bg-card/60` | `bg-card/60` ? |
| Sidebar active | `bg-foreground/10 text-foreground shadow-sm` | Same ? |
| Chevron on active | `ChevronRight` with `ml-auto` | Same ? |
| Content padding | `px-6 pt-6 pb-8` | `px-6 pt-6 pb-8` ? |
| Section titles | `text-xl font-semibold tracking-tight` | Same ? |

**Gap:**
- Settings page is **already very close** � minimal changes needed
- Ensure all inner card/table components use `rounded-xl` and `p-5` after token updates

---

### 5.9 Jobs ? Role Pipeline View (Tab: `jobs` ? role selected)
**File:** `frontend/src/modules/ats/components/MainATSContainer.tsx` ? `renderJobsView()`

When a user navigates: Jobs ? Department ? Role, they see the role's candidate pipeline:

| Aspect | Design ATS | Current Frontend |
|--------|-----------|-----------------|
| Breadcrumb | `px-5 pt-4 pb-3 border-b border-border/40` with BackButton | Header area inside `MainATSContainer` |
| Back button | `BackButton` with `label="Back to Roles"` | Uses `BackButton` component ? |
| Title | `text-base font-semibold` | Same pattern ? |
| Subtitle | `text-xs text-muted-foreground mt-0.5` with dept + count | ? |
| Pipeline content | `p-5` padding around KanbanBoard or ListView | ? |
| Empty state | Centered icon + "No candidates for this role yet." | Verify exists |

**Fix:**
- Ensure breadcrumb styling matches exactly: `border-b border-border/40`, `pb-3`, `pt-4`
- Verify empty state matches Design ATS: `<Users className="w-8 h-8 mb-2 opacity-30" />` + `<p className="text-sm text-muted-foreground">No candidates for this role yet.</p>`

---

### Universal Header CSS Reference

For all pages, the shared header treatment is:

```tsx
<header className="border-b border-border/50 bg-card/60 backdrop-blur-md shadow-sm flex-shrink-0">
  <div className="px-5 py-3">
    {/* Row 1: Title + Controls */}
    <div className="flex items-center justify-between">
      <h1 className="text-xl tracking-tight" style={{ fontFamily: "'Fauna One', serif", fontWeight: 100, letterSpacing: '0.02em' }}>
        {pageTitle}
      </h1>
      <div className="flex items-center gap-2 flex-wrap">
        {/* Search, filter, view toggle, theme toggle, action button */}
      </div>
    </div>
    {/* Row 2: Status/Category Tabs (if applicable) */}
    {hasTabs && (
      <div className="flex items-center gap-1 mt-3 overflow-x-auto pb-1 scrollbar-thin">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => handleClick(tab)}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-all duration-200 whitespace-nowrap ${
              active === tab
                ? 'bg-foreground/15 text-foreground shadow-sm'
                : 'hover:bg-foreground/[0.07] text-muted-foreground hover:text-foreground'
            }`}
          >
            {tabLabel} � {count}
          </button>
        ))}
      </div>
    )}
  </div>
</header>
```

**Pages with Row 2 tabs:** Candidates, Requisitions, Interviews, Referrals, Jobs (levels 1-3)
**Pages without Row 2 tabs:** Dashboard, Analytics, Settings
