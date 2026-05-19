#!/bin/bash
# GCC Project - Session Start Hook
# Preloads available skills and displays session information

cat << 'EOF'

╔════════════════════════════════════════════════════════════════════════════╗
║                    GCC DESIGN SYSTEM - SESSION START                       ║
╚════════════════════════════════════════════════════════════════════════════╝

✓ Project: Global Group Corp (GCC) International Website
✓ Stack: Next.js 16, React 19, Framer Motion, Tailwind CSS v4
✓ Design: Dark Neumorphic (Navy #0B1437 + Azure #38BDF8 Accents)
✓ Branch: claude/setup-design-system-rh5Kv

📚 AVAILABLE SKILLS (17 Installed):

  DESIGN INTELLIGENCE:
  ✨ ui-ux-pro-max          AI-powered design system (67 styles, 96 palettes)
  🎨 taste-skill            Design taste & aesthetic guidance
  🖌️  soft-skill             Soft UI/neumorphism patterns
  🏴  brutalist-skill        Brutalist design approach
  ⚡ impeccable             Code quality & UX excellence

  ANIMATION & MOTION:
  🎬 motion-framer          Framer Motion animations for React

  COMPONENT GENERATION:
  🎯 image-to-code-skill    Convert design images to code
  🌐 imagegen-frontend-web  Web UI generation from prompts
  📱 imagegen-frontend-mobile Mobile UI generation

  REDESIGN & BRAND:
  ♻️  redesign-skill         Redesign & refactor UI patterns
  🎭 brandkit               Brand system & guidelines
  🏗️  stitch-skill           Component stitching & composition

  AUXILIARY:
  📊 graphify               Project structure visualization
  🔤 gpt-tasteskill         Enhanced taste skill
  ✍️  output-skill           Output formatting & documentation
  📄 llms.txt               LLMs context management

🔗 HOW TO USE SKILLS:
  • Skills are available automatically during development
  • For design decisions: Use ui-ux-pro-max with design system generator
  • For animations: Reference motion-framer SKILL.md for Framer Motion patterns
  • For quality: Use impeccable for code reviews before commits
  • Full documentation in CLAUDE.md - read it for detailed workflows

📖 START HERE:
  1. Read CLAUDE.md for architecture, tokens, and workflows
  2. Check .claude/skills/ for individual SKILL.md documentation
  3. Use Python for design system analysis:
     python3 .claude/skills/ui-ux-pro-max/scripts/search.py "your requirements" --design-system

🚀 QUICK COMMANDS:
  npm run dev       - Start local development
  npm run build     - Production build
  npm run lint      - Run linter
  git push -u      - Push changes to feature branch

═══════════════════════════════════════════════════════════════════════════════

EOF
