# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Local development server (hot reload)
npm run dev

# Production build
npm run build

# Run production server locally
npm start

# Run linting
npm run lint
```

The dev server runs on `http://localhost:3000` by default. The site is deployed to Vercel: https://gcc-vjtw.vercel.app/

## Project Architecture

### High-Level Structure

**GCC International** is a Next.js 16 (App Router) marketing website with a premium dark-mode neumorphic design system. The architecture separates concerns across:

- **Design System** (`src/app/*.css`): Global tokens, component styles, animations
- **Components** (`src/components/`): Reusable UI and section components
- **Pages** (`src/app/`): Route pages using components
- **Assets** (`public/`): Logos, images

### Core Design System: Neumorphism

**Neumorphic UI** (soft shadow design) on dark navy background (`--bg-primary: #0B1437`):
- **Highlight shadow**: `rgba(95, 110, 160, ...)` — muted blue-gray (light source top-left)
- **Shade shadow**: `rgba(0, 0, 0, ...)` — deep black (depth)
- **Accent**: Electric azure (`#38BDF8`) — interactive highlights

Key token files:
- `src/app/design-tokens.css` — color scales (Ink/Navy, Ivory, Azure Accent), typography, spacing, motion curves
- `src/app/globals.css` — reset, typography, scrollbar, `.neu` / `.neu-sm` / `.neu-inset` utilities

### Button System: `.ggc-btn`

**File**: `src/app/buttons.css`

Three core variants:
1. **`.ggc-btn.on-dark`** (raised pillow) — primary CTAs
   - `--b-bg: #14224d` (lighter navy)
   - Outward dual shadows: `-5px/-7px/12px` highlight + `7px/7px/16px` shade
   - Hover: text → `#38BDF8`, shadows grow (`-7px/-7px/18px` + `10px/10px/22px`)
   - Active: inset shadows (sunken state)

2. **`.ggc-btn.on-dark.outline`** (sunken inset) — secondary CTAs
   - `--b-bg: #0b1437` (primary bg)
   - Inset dual shadows: `inset 4px 4px 8px` shade + `inset -3px -3px 6px` highlight
   - Hover: text → `#38BDF8`, shadows reduce

3. **`.ggc-btn.ghost`** (text-only) — tertiary/minimal actions
   - No shadows, transparent background
   - Hover: text → `#38BDF8`

**Sizes**: `.sm` (12px font, 12×22px padding) | `.lg` (13px font, 22×38px padding)

**Performance**: Uses `will-change: box-shadow, color;` and `contain: layout style;` to isolate rendering during hover/active transitions.

### Input Fields: `.neumorphic-input`

**File**: `src/app/sections.css`

Inset neumorphic styling matching buttons:
- Inset dual shadows (5px 5px 12px dark + -5px -5px 12px light)
- Focus: inset shadows + `2px rgba(56, 189, 248, 0.35)` blue ring
- Used in contact forms and multi-step inputs

### Navigation: Navbar Component

**Files**: 
- `src/components/Navbar.tsx` — React component with scroll-reactive state + mobile drawer
- `src/app/navbar.css` — styles and responsive layout

Features:
- **Scroll-reactive**: Toggles `.nav-solid` (backdrop blur, border) vs `.nav-transparent` (fade background)
- **Dual-button CTA pair** (`.nav-actions`):
  - "Explore Services" → `.nav-cta--secondary` (sunken inset)
  - "Get in Touch" → `.nav-cta` (raised pillow, primary)
- **Desktop**: Fixed top bar + nav-strip with links
- **Mobile** (≤768px): Hamburger menu → animated drawer with fade-up staggered links
- **Logo**: Height-based sizing (64px height) to preserve aspect ratio of cropped logo

### Hero Section: Full-Viewport Globe

**Files**:
- `src/components/sections/Hero.tsx` — layout, copy, stats, button CTAs
- `src/components/Globe.tsx` — 3D canvas-based rotating globe visualization

**Globe Highlights**:
- **Radius**: 52% of viewport (right-aligned at cx = W × 0.62)
- **Atmosphere**: 3 halos with gradient rings (opacity 0.07/0.12/0.18)
- **Grid**: Latitude lines (15° spacing) + longitude lines (18° spacing)
- **Routes**: 14 trade routes between 12 key cities (NYC, London, Singapore, Doha, Tokyo, Paris, Sydney, Mumbai, Cairo, São Paulo, Moscow, Nairobi)
- **Data packets**: Animated dots flowing along routes (triple-layer glows: 2.5px core + 6px inner + 11px outer)
- **City dots**: Dual pulse rings with depth-based opacity
- **Orbital particles**: 140 micro-dots at varying scales (0.6–2.4px) and alpha (0.15–0.70)
- **Rim glow**: Bottom azure glow for depth
- **Performance**: Uses `requestAnimationFrame` loop with depth-based opacity culling

**Hero Copy**:
- Eyebrow, H1, descriptor, dual-button CTA pair, stats grid (4 columns on desktop)
- Gradient overlay fades globe visibility from left (0.94 opacity) to right (0.05 opacity)
- Scroll cue with animated line at bottom

## Key Design Tokens

```css
/* Colors */
--bg-primary: #0B1437         /* Dark navy */
--ink-primary: #FAFAFA        /* Off-white text */
--accent-600: #38BDF8         /* Electric azure (hover/focus) */

/* Neumorphic Shadows */
--highlight: rgba(95, 110, 160, 0.4)    /* Light blue-gray */
--shade: rgba(0, 0, 0, 0.5)             /* Deep black */

/* Motion */
--ease-out: cubic-bezier(0.16, 1, 0.3, 1)    /* Smooth snappy easing */
--duration-base: 220ms                        /* Standard transition */
```

## Available Claude Code Skills

Load these via `/skill <name>` to enable specialized workflows:

### Content & Documentation
- **`init`** — Initialize CLAUDE.md (this file)
- **`review`** — Pull request review with automated analysis

### Development Setup
- **`session-start-hook`** — Configure test/lint hooks for web sessions
- **`update-config`** — Edit settings.json to auto-run commands, set env vars, manage permissions
- **`keybindings-help`** — Customize keyboard shortcuts

### Code Quality
- **`simplify`** — Scan changes for reuse, efficiency, and improvements
- **`security-review`** — Analyze pending changes for vulnerabilities
- **`fewer-permission-prompts`** — Auto-generate allowlist for common read-only operations

### Advanced
- **`loop`** — Run commands/prompts on recurring intervals (e.g., `/loop 5m npm run dev`)
- **`claude-api`** — Build/debug Claude API or Anthropic SDK integrations (this repo has `@anthropic-ai/sdk` as a dependency)

## Common Workflows

### Adding a New Component

1. Create component in `src/components/` with inline styles or CSS class references
2. Import and use in page or section component
3. If using neumorphic styling, apply `.neu` / `.neu-sm` / `.neumorphic-input` utility classes from `globals.css`
4. For custom button states, use `.ggc-btn.on-dark` or `.ggc-btn.on-dark.outline`

### Modifying Design Tokens

1. Edit `src/app/design-tokens.css` for color/spacing/typography changes
2. All CSS files import it, so changes cascade automatically
3. Use CSS variables (e.g., `color: var(--accent-600)`) in components for consistency

### Responsive Design

- Breakpoint: `max-width: 768px` (mobile) | `min-width: 769px` (desktop)
- Utilities: `.hide-mobile` / `.hide-desktop` in `globals.css`
- Container padding: `clamp(1.5rem, 7vw, 6rem)` for fluid responsive spacing

### Performance Optimizations

- Use `will-change: <property>` on frequently-animated elements (buttons, nav)
- Use `contain: layout style` to isolate rendering context
- Canvas-based Globe uses depth-based opacity culling (only render visible points)
- Framer Motion: Use `initial` + `animate` variants and `transition` timing for smooth 60fps animations

## Branch Conventions

- Development branch: `claude/setup-design-system-rh5Kv`
- Always push changes to the designated branch, not `main`
- Commit messages should reference the session URL for traceability

## Deployment

Site is deployed to Vercel at https://gcc-vjtw.vercel.app/. Next.js automatically builds from the repository root. Remote patterns for images are configured in `next.config.ts` (Unsplash is allowed).

## Notes for Future Sessions

- This is a **redesigned** site with a **new neumorphic design system** (dark navy + azure). The original README.md mentions gold/Playfair Display — ignore that; follow the design tokens and CSS files for the current system.
- The Globe component is CPU-intensive (canvas + 140+ particles + animations). Monitor performance on lower-end devices.
- Logo file: `gcc-logo-cropped.png` (332×380px, pre-cropped to remove transparent margins). Always use height-based sizing (`64px height, width: auto`) to preserve portrait aspect ratio.
- Button render times were optimized by removing background/transform from transitions and adding `will-change`/`contain` properties. Do not add those properties back to transition definitions.
