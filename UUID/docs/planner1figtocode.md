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
┌─────────────────────────────────────────────────────┐
│ Row 1:  "The Guild ATS"    [Search] [Filter] [View] [Theme] [+ New Job]  │
│ Row 2:  [All] [Screening] [Fitment] [Technical] [PTC] [Founders] [...]   │
└─────────────────────────────────────────────────────┘
```

### Current Frontend Header (`DashboardLayout.tsx`):
```
┌─────────────────────────────────────────────────────┐
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

### Phase 2: Layout Header
4. Port Design ATS header structure into `MainATSContainer.tsx`:
   - Title with `FontFamily: 'Fauna One', letterSpacing: 0.06em`
   - Search bar, filter button, view toggle, theme toggle, "New Job" button
   - Pipeline status tabs row below

### Phase 3: Theme Toggle
5. Port `ThemeToggle.tsx` with ripple animation into `shared/components/ui/ThemeToggle.tsx`
6. Wire it to Zustand store's `theme` + `toggleTheme`

### Phase 4: Dashboard Page
7. Compare `frontend/src/modules/ats/pages/DashboardPage.tsx` with Design ATS's `DashboardPage.tsx`
8. Port card-based metrics layout, stat cards, department pipeline cards

### Phase 5: Remaining Pages
9. Compare `RequisitionsPage.tsx`, `InterviewsPage.tsx`, `ReferralsPage.tsx`, `AnalyticsPage.tsx` against Design ATS versions
10. Port any styling differences (card treatments, table styles, chart styling)

### Phase 6: Login Page
11. Style `frontend/src/app/pages/Login.tsx` with Design ATS color tokens if needed

### Phase 7: Final Polish
12. Run `npm run dev` on both projects, open in browser, compare side-by-side
13. Test dark mode toggle — verify colors match in both themes
14. Check border-radius consistency (all `rounded-xl` = `0.625rem` = `10px`)
15. Run `npm run lint` and `npm run typecheck` on the production frontend

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
