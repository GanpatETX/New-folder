# Frontend vs Design ATS Tool — Comparison & Alignment Plan

## Sources
- **Design reference**: `C:\Users\EtherealX\Downloads\Front-End-main (1)\Front-End-main\New folder\UUID\Design ATS Tool`
- **Current frontend**: `C:\Users\EtherealX\Downloads\Front-End-main (1)\Front-End-main\New folder\frontend`
- **Architecture docs**: `C:\Users\EtherealX\Downloads\Front-End-main (1)\Front-End-main\New folder\UUID\AllApis1.md` and `overallArchitecture1.md`

---

## 1. Overall Assessment

### What’s already aligned
- **Feature parity**: Both implement Kanban, List, Candidate Detail, Dashboard, Requisitions, Interviews, Referrals, Jobs, Settings, and Purchase modules.
- **Auth model**: Current frontend matches the Zoho SSO + JWT flow described in `AllApis1.md`. The design reference only has a hardcoded “Access Platform” button.
- **State/data layer**: Current frontend uses Zustand + React Query + Axios, which is a strict upgrade over the design reference’s inline `useState` + static mocks.
- **Tests**: 21 Vitest tests exist in `frontend/tests/`; the design reference has none.
- **Branding**: Sidebar logo, title phrasing (“The Guild ATS”), and engineering-drawing background already match the design reference’s visual direction.
- **Fonts in code**: `DashboardLayout.tsx` already declares `Fauna One` for the page title.

### What diverges
Almost everything **visual** is defined differently:
- CSS custom properties are missing in the current frontend.
- Fonts are referenced but not actually loaded in CSS.
- Colors, radii, transitions, and scrollbars all use Tailwind defaults rather than the design tokens.
- Component styling relies on utility classes that do not map back to the design’s token system.

---

## 2. File-to-File Comparison

### 2.1 Theme / Tokens

| Area | Design Reference (`UUID/Design ATS Tool`) | Current Frontend (`frontend/`) | Gap |
|---|---|---|---|
| **Theme file** | `src/styles/theme.css` — full CSS variable system | `src/shared/styles/index.css` — only Tailwind directives | Theme system not imported |
| **Font file** | `src/styles/fonts.css` — `@import` for Space Grotesk + Fauna One | No equivalent file | Fonts not actually loaded in CSS |
| **Light background** | `#f5f5f7` | Tailwind default `#ffffff` | Visible mismatch |
| **Light foreground** | `#1c1c1e` | Tailwind default `#0a0a0a` (approx) | Visible mismatch |
| **Dark background** | `#0d0d0d` | Tailwind default `#0a0a0a` | Very close, but not exact |
| **Dark foreground** | `#ececec` | Tailwind default `#fafafa` | Subtle mismatch |
| **Card (light)** | `#ffffff` | `#ffffff` (Tailwind default `card`) | Aligned |
| **Card (dark)** | `#161616` | Tailwind default `#171717` | Close but not exact |
| **Sidebar light** | `#ffffff` | `bg-card` (depends on undefined vars) | Likely wrong |
| **Sidebar dark** | `oklch(0.205 0 0)` | `bg-card` (depends on undefined vars) | Likely wrong |
| **Primary** | `#1c1c1e` light / `#f7f7f7` dark | Tailwind defaults | Mismatch |
| **Secondary** | `#5c5c5e` light / `#2c2c2c` dark | Tailwind defaults | Mismatch |
| **Muted** | `#e8e8ea` light / `#2c2c2c` dark | Tailwind defaults | Mismatch |
| **Accent** | `#2c2c2e` light / `#2c2c2e` dark | Tailwind defaults | Mismatch |
| **Border light** | `rgba(0, 0, 0, 0.08)` | Tailwind default `#e5e7eb` | Different opacity |
| **Border dark** | `rgba(255, 255, 255, 0.07)` | Tailwind default `rgba(255,255,255,0.1)` | Different opacity |
| **Radius** | `0.5rem` | `0.625rem` (shadcn default) | Mismatch |
| **Duration** | `0.3s cubic-bezier(0.4, 0, 0.2, 1)` | `duration-200` (0.2s) | Faster than design |
| **Soft green** | `#d4edda` light / `#2e3e2e` dark | Not defined | Missing |
| **Soft red** | `#f8d7da` light / `#3e2e2e` dark | Not defined | Missing |
| **Scrollbar** | Custom styled (`rgba(0,0,0,0.15)` thumb) | Not styled | Missing |
| **Base font size** | `15px` | `16px` (Tailwind default) | Mismatch |
| **Base font family** | `Space Grotesk` | System sans | Mismatch |
| **Title font family** | `Fauna One` | `Fauna One` in code | Partial only |
| **`@theme inline` block** | Present | Not present | Missing |

### 2.2 Layout / Structure

| Area | Design Reference | Current Frontend | Gap |
|---|---|---|---|
| **App shell** | `src/app/App.tsx` (monolithic) | Split into `App.tsx`, `providers.tsx`, `store.ts`, `modules/ats/pages/*` | Architecture is already better |
| **Sidebar width** | `220px` | `220px` | Aligned |
| **Sidebar background** | `#ffffff` / `oklch(0.205 0 0)` | `bg-card` (token undefined) | Will fix with theme tokens |
| **Profile section** | Bottom, status dot, notifications, dropdown | Same structure | Aligned |
| **Engineering background** | SVG grid + concentric shapes | Same SVG pattern + opacity values | Aligned |
| **Tab switching** | `activeTab` state + `setActiveTab` | Zustand `activeTab` + `setActiveTab` | Aligned (better) |

### 2.3 Components

#### Dashboard
- **Design reference**: `DashboardPage.tsx` with 40px title (`font-['Space_Grotesk']`), subtitle, procurement ops KPI cards.
- **Current frontend**: `modules/ats/pages/DashboardPage.tsx` — same content structure, but KPI cards and pipeline cards rely on undefined CSS tokens for backgrounds/borders.
- **Gap**: Styling will look correct once `--background`, `--card`, `--border` are wired.

#### Kanban
- **Design reference**: `KanbanBoard.tsx` + `CandidateCard.tsx` in `src/app/components/`.
- **Current frontend**: `modules/ats/components/kanban/KanbanBoard.tsx` + `candidate/CandidateCard.tsx`.
- **Gap**: None functionally; styling depends on missing theme tokens.

#### List
- **Design reference**: `ListView.tsx` in `src/app/components/`.
- **Current frontend**: `modules/ats/components/list/ListView.tsx`.
- **Gap**: None functionally; styling depends on missing theme tokens.

#### Filters
- **Design reference**: `FilterPanel.tsx`.
- **Current frontend**: `modules/ats/components/filters/FilterPanel.tsx`.
- **Gap**: None functionally; styling depends on missing theme tokens.

#### Theme Toggle
- **Design reference**: `ThemeToggle.tsx` in `src/app/components/`.
- **Current frontend**: `shared/components/common/ThemeToggle.tsx`.
- **Gap**: None; moved during restructure.

#### Purchase Module
- **Design reference**: `components/Purchase/PurchaseDashboard.tsx`, `RequisitionPage.tsx`, `RequisitionWorkspace.tsx`.
- **Current frontend**: `modules/purchase/components/PurchaseDashboard.tsx`, `RequisitionPage.tsx` (pages), `RequisitionWorkspace.tsx`.
- **Gap**: None structurally; styling depends on missing theme tokens.

#### Interviews / Referrals / Settings
- **Design reference**: `InterviewsPage.tsx`, `ReferralsPage.tsx`, `SettingsPage.tsx`, plus `ReferralForm.tsx`, `ReferralConfirmation.tsx`.
- **Current frontend**: `modules/ats/components/interviews/InterviewsPage.tsx`, `modules/ats/pages/ReferralsPage.tsx`, `modules/ats/pages/SettingsPage.tsx`, `modules/ats/components/referrals/ReferralForm.tsx`, `ReferralConfirmation.tsx`.
- **Gap**: None structurally; styling depends on missing theme tokens.

### 2.4 Colors — Side-by-Side

| Token | Design (Light) | Design (Dark) | Current Effect (without tokens) |
|---|---|---|---|
| Page bg | `#f5f5f7` | `#0d0d0d` | White / near-black |
| Text | `#1c1c1e` | `#ececec` | Near-black / near-white |
| Sidebar bg | `#ffffff` | `oklch(0.205 0 0)` | White / near-black |
| Card bg | `#ffffff` | `#161616` | White / `#171717` |
| Border | `rgba(0,0,0,0.08)` | `rgba(255,255,255,0.07)` | `#e5e7eb` / `rgba(255,255,255,0.1)` |
| Primary | `#1c1c1e` | `#f7f7f7` | Tailwind primary |
| Muted text | `#6e6e73` | `#8c8c8c` | `#6b7280` / `#9ca3af` |
| Accent | `#2c2c2e` | `#2c2c2e` | Tailwind accent |
| Danger | `#dc2626` | `#ef4444` | Close ✅ |
| Soft green | `#d4edda` / `#2e3e2e` | — | Not defined |
| Soft red | `#f8d7da` / `#3e2e2e` | — | Not defined |

### 2.5 Typography

| Aspect | Design Reference | Current Frontend |
|---|---|---|
| Base family | Space Grotesk | System sans |
| Title family | Fauna One | Fauna One (only in Dashboard title) |
| Base size | `15px` | `16px` |
| H1 style | `text-2xl`, weight 500 | Unclear |
| Body weight | `400` normal | Unclear |

---

## 3. Detailed Gap List (What is “mismatched”)

### 3.1 Design System
1. **No `theme.css`** — All CSS custom properties (`--background`, `--foreground`, `--card`, `--border`, `--radius`, etc.) are missing.
2. **No `fonts.css`** — Space Grotesk and Fauna One are not actually loaded in the current frontend’s CSS pipeline.
3. **No `@theme inline` mapping** — Tailwind cannot resolve `bg-background`, `text-foreground`, etc. to anything meaningful because the variables do not exist.
4. **Wrong radius** — Design uses `0.5rem`; current app effectively uses `0.625rem` (shadcn default).

### 3.2 Color Mismatches
5. **Page background** — Should be `#f5f5f7` (light) and `#0d0d0d` (dark).
6. **Foreground text** — Should be `#1c1c1e` (light) and `#ececec` (dark).
7. **Card background** — Should be `#ffffff` (light) and `#161616` (dark).
8. **Sidebar background** — Should be `#ffffff` (light) and `oklch(0.205 0 0)` (dark).
9. **Border opacity** — Should be `rgba(0,0,0,0.08)` (light) and `rgba(255,255,255,0.07)` (dark).
10. **Custom semantic colors** (`--soft-green`, `--soft-red`) — Missing.

### 3.3 Motion / Timing
11. **Global transition speed** — Design uses `0.3s`; current code uses `duration-200` on many elements.
12. **Easing** — Design uses `cubic-bezier(0.4, 0, 0.2, 1)` everywhere; current code uses the default `ease`.

### 3.4 Typography
13. **Base font family** — Should be Space Grotesk across the app.
14. **Base font size** — Should be `15px`, not `16px`.
15. **Title font** — Fauna One should be applied consistently to headings, not just the dashboard title.

### 3.5 Scrollbars
16. **Scrollbar styling** — Design provides custom scrollbar rules; current frontend has none.

---

## 4. Implementation Plan

### Phase 1: Restore the design tokens
1. Copy `UUID/Design ATS Tool/src/styles/theme.css` → `frontend/src/shared/theme/theme.css`.
2. Copy `UUID/Design ATS Tool/src/styles/fonts.css` → `frontend/src/shared/theme/fonts.css`.
3. Create `frontend/src/shared/theme/index.ts` that exports the CSS import path (or directly import the CSS in `frontend/src/styles/index.css`).

### Phase 2: Wire theme into the app
4. Update `frontend/src/styles/index.css` to:
   - Import `@/shared/theme/fonts.css`
   - Import `@/shared/theme/theme.css`
   - Keep existing Tailwind directives.

### Phase 3: Align Tailwind config
5. Ensure `tailwind.config.ts` (or `vite.config.ts` CSS handling) respects the CSS custom properties.
6. Consider moving from the current Tailwind v4 `@tailwindcss/vite` setup to one that consumes the CSS variables correctly.

### Phase 4: Fix tokens to match design
7. Update `--radius` from `0.625rem` → `0.5rem`.
8. Add global `transition` rules to `body`:
   - `transition-duration: 0.3s;`
   - `transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);`
   - `transition-property: background-color, border-color, color, fill, stroke;`

### Phase 5: Audit components
9. Review components that hardcode colors or durations:
   - `DashboardLayout.tsx` — sidebar bg, header, transitions
   - `PurchaseDashboard.tsx` — KPI card backgrounds/borders
   - `GuildLogo.tsx` — hover scale timing
   - All `*Page.tsx` files — text color, card bg, border opacity
10. Replace hardcoded values with token-based utilities (`bg-background`, `text-foreground`, `border-border`, `rounded-md`).

### Phase 6: Typography pass
11. Ensure `index.css` sets `font-family: var(--font-family-base)` on `body`.
12. Verify all headings use `font-family: var(--font-family-title)`.
13. Confirm base `font-size: 15px` is applied via `html`.

### Phase 7: Verify
14. Run the dev server and visually inspect both light and dark modes.
15. Run `npm run test` to ensure no regressions from CSS changes.

---

## 5. Priority Matrix

| Priority | Item | Effort | Impact |
|---|---|---|---|
| P0 | Add `theme.css` + `fonts.css` imports | Low | High |
| P0 | Define CSS custom properties | Low | High |
| P1 | Align radius to `0.5rem` | Low | Medium |
| P1 | Apply global `0.3s` transition | Low | Medium |
| P1 | Style scrollbars | Low | Medium |
| P2 | Fix sidebar/card/border colors | Medium | Medium |
| P2 | Typography pass (Space Grotesk base, 15px) | Medium | Medium |
| P3 | Add `--soft-green` / `--soft-red` tokens | Low | Low |
| P3 | Fine-tune component-level classes | High | Low |

---

## 6. Files to Modify

| File | Change |
|---|---|
| `frontend/src/styles/index.css` | Import theme + fonts CSS |
| `frontend/src/shared/theme/theme.css` | **Create** — copy from design reference |
| `frontend/src/shared/theme/fonts.css` | **Create** — copy from design reference |
| `frontend/src/shared/components/layout/DashboardLayout.tsx` | Replace hardcoded colors with tokens |
| `frontend/src/modules/ats/pages/DashboardPage.tsx` | Replace hardcoded colors with tokens |
| `frontend/src/modules/purchase/components/PurchaseDashboard.tsx` | Replace hardcoded colors with tokens |
| `frontend/src/modules/ats/components/GuildLogo.tsx` | Align hover transition duration |
| `frontend/tailwind.config.ts` | Verify token consumption |

---

## 7. What NOT to Change

- **Architecture** (file/folder structure): Already better than the design reference.
- **State management**: Zustand + React Query is an improvement.
- **Test suite**: Keep all 21 tests; do not remove or refactor tests during theming work.
- **API layer**: Keep the existing Axios + React Query hooks.

---

*Drafted by comparing `UUID\Design ATS Tool` against `frontend\src` on 2026-06-09.*
