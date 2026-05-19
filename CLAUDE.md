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

Skills are specialized tools that augment Claude Code workflows. Load any skill via `/skill <name>` to enable its capabilities.

### When & How to Use Each Skill

#### Documentation
- **`init`** — Initialize or improve CLAUDE.md
  - **When**: At session start if CLAUDE.md doesn't exist, or when docs need updating
  - **How**: Type `/skill init`, then provide codebase analysis context. The skill will scan your project and generate/improve the file.
  - **Example**: "Create CLAUDE.md with commands, architecture, and key patterns"

#### Code Review & Quality
- **`review`** — Automated pull request analysis
  - **When**: Before merging a PR or after pushing changes to validate quality
  - **How**: Type `/skill review` when you have a pending PR. The skill will analyze diffs and suggest improvements.
  - **Example**: Point to a PR URL and ask for code review feedback

- **`simplify`** — Detect code smells and inefficiencies
  - **When**: After making changes, before committing
  - **How**: Type `/skill simplify`. The skill scans your uncommitted changes for duplication, unnecessary complexity, and improvement opportunities.
  - **Use Case**: "Review my changes for reuse and efficiency before I commit"

- **`security-review`** — Detect vulnerabilities and security issues
  - **When**: Before pushing security-sensitive code (auth, forms, API calls)
  - **How**: Type `/skill security-review`. The skill analyzes pending changes for OWASP top 10, injection risks, XSS, etc.
  - **Use Case**: "Check contact form inputs for security issues"

**ANIMATION & MOTION:**

**6. motion-framer** — Framer Motion animation library for React
- **When**: Building interactive UI, micro-interactions, page transitions, scroll effects, drag-and-drop
- **Installed**: Yes (comprehensive guide in `.claude/skills/motion-framer/SKILL.md`)
- **Tech**: Framer Motion / Motion v11+ for React 18+
- **Use case**: Hero animations, button hover effects, modal transitions, scroll-triggered animations
- **Current usage**: Hero section with stagger animations, navbar scroll-reactivity
- **Key concepts**:
  - `motion` components for declarative animations
  - `variants` for animation states
  - `transition` for duration, timing, easing
  - Gesture props: `whileHover`, `whileTap`, `whileDrag`, `whileFocus`
  - Layout animations for auto-layout changes

**COMPONENT GENERATION & REDESIGN:**

**7. image-to-code-skill** — Convert design images/mockups to HTML/React code
- **When**: Converting Figma designs, UI mockups, or screenshots to code
- **Use case**: "Convert this button design to React component", "Turn this layout mockup into code"

**8. imagegen-frontend-web** — Generate web UI from natural language descriptions
- **When**: Need to generate complete web pages or sections from prompts
- **Use case**: "Create a dashboard layout with cards and charts"

**9. imagegen-frontend-mobile** — Generate mobile UI components and screens
- **When**: Building mobile interfaces or responsive components
- **Use case**: "Design mobile navigation drawer", "Create responsive form layout"

**10. redesign-skill** — Redesign and refactor UI patterns
- **When**: Improving existing designs, updating patterns, modernizing interfaces
- **Use case**: "Redesign contact form for better UX", "Modernize button styles"

**11. stitch-skill** — Component composition and assembly
- **When**: Combining components, managing component composition, building complex layouts
- **Use case**: "Assemble landing page from components", "Compose dashboard sections"

**BRAND & STYLE SYSTEMS:**

**12. brandkit** — Brand guidelines, design systems, and brand consistency
- **When**: Creating/maintaining design systems, ensuring brand consistency
- **Use case**: "Define brand color scale", "Create typography system", "Document brand guidelines"

**13. gpt-tasteskill** — Enhanced taste evaluation (variant of taste-skill)
- **When**: Advanced aesthetic evaluation and design critique
- **Use case**: "Evaluate design composition", "Review visual balance and harmony"

**AUXILIARY TOOLS:**

**14. graphify** — Project structure visualization and knowledge graph mapping
- **When**: Understanding project architecture, analyzing codebase relationships
- **How**: `graphify .` to generate project graph, relationships, and dependencies
- **Outputs**: Interactive graph.html, GRAPH_REPORT.md, graph.json
- **Use case**: "Map project structure for documentation", "Visualize component relationships"

**15. output-skill** — Output formatting, documentation, and report generation
- **When**: Formatting output, generating documentation, creating reports
- **Use case**: "Format code output", "Generate documentation", "Create style guides"

**16. llms.txt** — LLM context management and file indexing
- **When**: Managing context, creating searchable project indexes
- **Use case**: "Create llms.txt manifest for project", "Index documentation"

#### Development Setup
- **`session-start-hook`** — Auto-run commands at session start
  - **When**: You want linting/tests to run automatically each time you spin up a web session
  - **How**: Type `/skill session-start-hook`. Configure it to run `npm run lint` or `npm run build` on startup.
  - **Example**: "Run `npm run lint` automatically when I start a web session"

- **`update-config`** — Modify project settings.json for automated behaviors
  - **When**: You want recurring workflows (e.g., "always run lint before commits", "auto-fetch and build on startup")
  - **How**: Type `/skill update-config`. You can:
    - Add permissions (e.g., "allow npm install globally")
    - Set environment variables (e.g., `DEBUG=true`)
    - Configure hooks to run commands before/after tool calls
    - Reduce permission prompts by auto-allowing safe operations
  - **Example**: "Add a hook to run `npm run lint` before each git commit"

- **`keybindings-help`** — Customize keyboard shortcuts
  - **When**: You want to rebind keys or add chord shortcuts
  - **How**: Type `/skill keybindings-help`. Modify `~/.claude/keybindings.json` to rebind keys or add new shortcuts.
  - **Example**: "Rebind Ctrl+S to git push", "Add Alt+T to open terminal"

#### Permission Management
- **`fewer-permission-prompts`** — Auto-generate allowlist for common operations
  - **When**: You're tired of confirming permissions for safe read-only operations
  - **How**: Type `/skill fewer-permission-prompts`. The skill scans your transcript for common Bash and MCP tool calls, then adds them to `.claude/settings.json` as an allowlist.
  - **Result**: Future sessions skip prompts for those whitelisted operations.
  - **Use Case**: "Stop asking me to confirm `git status`, `npm run dev`, etc."

#### Advanced Workflows
- **`loop`** — Run commands or prompts on recurring intervals
  - **When**: You need to poll for status, monitor logs, or run something repeatedly
  - **How**: Type `/skill loop` then specify interval and command
  - **Examples**:
    - `/loop 5m npm run dev` — Restart dev server every 5 minutes
    - `/loop 30s git fetch` — Poll git every 30 seconds
    - `/loop /babysit-prs` — Monitor PRs on 5-minute intervals (custom prompt)
  - **Note**: Omit interval to let the skill self-pace

- **`claude-api`** — Build and debug Claude API / Anthropic SDK apps
  - **When**: Working with `@anthropic-ai/sdk` code (this repo has it as a dependency)
  - **How**: Type `/skill claude-api`. Use it to:
    - Build new API integrations
    - Debug SDK code
    - Add/modify features (caching, streaming, function calling, vision, etc.)
    - Migrate between Claude model versions
  - **Use Case**: "Add prompt caching to our API calls", "Integrate Claude AI into the contact form backend"

#### Design Intelligence & Aesthetics (Installed)

**CORE DESIGN SKILLS (17 Total):**

**1. ui-ux-pro-max** — AI-powered design system generation and UX guidance
- **When**: Designing UI components, choosing colors/typography, reviewing UX, validating design decisions
- **How**: Python design system generator:
  ```bash
  python3 .claude/skills/ui-ux-pro-max/scripts/search.py "dark neumorphic trading platform" --design-system -p "GCC"
  ```
- **Resources**: 67 UI styles, 96 color palettes, 57 font pairings, 99 UX guidelines, 25 chart types
- **Example**: "Generate design system for contact form", "Review button styling against guidelines"

**2. taste-skill** — Design taste, aesthetics, and visual polish
- **When**: Evaluating visual hierarchy, color harmony, spacing consistency, overall design quality
- **How**: Reference SKILL.md for aesthetic principles and review checklist
- **Covers**: Visual harmony, brand consistency, typography pairing, color psychology, composition rules

**3. soft-skill** — Soft UI and neumorphism patterns (perfect for GCC's design)
- **When**: Implementing neumorphic shadows, depth effects, subtle animations
- **How**: Use as reference for dual-shadow techniques, padding scales, border-radius patterns
- **Aligns with**: Current `.neu`, `.neu-sm`, `.neu-inset` CSS utilities

**4. brutalist-skill** — Brutalist design (intentionally raw, minimal, functional)
- **When**: Designing stripped-down, raw, functional interfaces (opposite of ornamental)
- **Use case**: Can contrast with neumorphism for specific sections needing stark clarity

**5. impeccable** — Code quality, maintainability, and UX excellence
- **When**: Before commits, during code reviews, ensuring best practices
- **How**: Check impeccable SKILL.md for code quality patterns and checks
- **Focuses on**: Performance, accessibility, maintainability, user experience standards

### Session-Start Hook

When you start each session, `.claude/hooks/session-start.sh` automatically displays:
- All 17 installed skills
- Quick reference guide
- Project overview (stack, design system, branch)

This ensures you always know what's available.

### Recommended Workflow for This Project

**0. Session Start** (Automatic)
- Hook displays all 17 available skills
- Review CLAUDE.md for architecture and tokens
- Check what enhancements are needed

**1. Design Decisions**
- Validate design choices with ui-ux-pro-max:
  ```bash
  python3 .claude/skills/ui-ux-pro-max/scripts/search.py "dark neumorphic enterprise trade" --design-system
  ```
- Review aesthetic/taste alignment with taste-skill
- Check neumorphic patterns with soft-skill

**2. Component Development**
- Reference motion-framer for animations
- Use image-to-code-skill if converting designs
- Apply taste-skill principles to visual polish
- Ensure impeccable code quality

**3. Before Changes**
- Use `/skill simplify` for refactoring/consolidation
- Check touch/hover/focus states (motion-framer + accessibility)

**4. After Changes**
- Use `/skill security-review` for forms/API code
- Use `/skill simplify` for all code changes
- Use `/skill impeccable` for quality standards
- Verify responsive design (375px, 768px, 1024px, 1440px)

**5. Documentation & Reporting**
- Use graphify to visualize project structure
- Use output-skill for documentation formatting
- Use llms.txt for context management

**6. Before Pushing**
- Use `/skill review` if creating a PR
- Ensure all pre-commit checks pass (lint, types, tests)
- Verify accessibility compliance (WCAG AA minimum)

**7. Quality Gates**
- Use `/skill update-config` to setup pre-commit hooks
- Use `/skill fewer-permission-prompts` to whitelist safe operations
- Monitor DevTools metrics (render times, bundle size, performance)

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

## Installed Skills Directory

All 17 skills are in `.claude/skills/`:

```
.claude/skills/
├── ui-ux-pro-max/          # Design system generation (PRIMARY)
├── motion-framer/          # Framer Motion animations for React
├── taste-skill/            # Design aesthetics and visual polish
├── soft-skill/             # Soft UI & neumorphism patterns
├── brutalist-skill/        # Brutalist design approach
├── impeccable/             # Code quality and UX excellence
├── image-to-code-skill/    # Design to code conversion
├── imagegen-frontend-web/  # Web UI generation
├── imagegen-frontend-mobile/ # Mobile UI generation
├── redesign-skill/         # UI redesign and refactoring
├── stitch-skill/           # Component composition
├── brandkit/               # Brand guidelines and systems
├── gpt-tasteskill/         # Enhanced taste evaluation
├── graphify/               # Project structure visualization
├── output-skill/           # Output formatting
├── llms.txt/               # Context management
└── SKILL.md files in each  # Individual documentation
```

**To access skill documentation:**
- View any skill's guide: `cat .claude/skills/[skill-name]/SKILL.md`
- Example: `cat .claude/skills/motion-framer/SKILL.md`
- Python tools: `python3 .claude/skills/ui-ux-pro-max/scripts/search.py --help`

## Notes for Future Sessions

- This is a **redesigned** site with a **new neumorphic design system** (dark navy + azure). The original README.md mentions gold/Playfair Display — ignore that; follow the design tokens and CSS files for the current system.
- The Globe component is CPU-intensive (canvas + 140+ particles + animations). Monitor performance on lower-end devices.
- Logo file: `gcc-logo-cropped.png` (332×380px, pre-cropped to remove transparent margins). Always use height-based sizing (`64px height, width: auto`) to preserve portrait aspect ratio.
- Button render times were optimized by removing background/transform from transitions and adding `will-change`/`contain` properties. Do not add those properties back to transition definitions.
- **17 skills are now installed and preloaded automatically** via `.claude/hooks/session-start.sh`. Each skill has a SKILL.md with detailed documentation and use cases.
- Use `ui-ux-pro-max` as your primary design intelligence tool for all design decisions. It validates against 67 UI styles, 96 color palettes, and 99 UX guidelines.
- `motion-framer` SKILL.md is comprehensive guide for Framer Motion — reference it when building animations.
- For code quality, use `impeccable` skill before commits to ensure standards.
