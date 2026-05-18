# GCC International Website

Redesigned website for Global Consolidated Contractors International Limited.

## Stack

- **Next.js 16** (App Router)
- **Tailwind CSS v4**
- **Framer Motion 12**
- **Lucide React**
- **Playfair Display + Inter** (Google Fonts)

## Design System

- **Background**: Deep space navy (`#040D1A`)
- **Accent**: Gold (`#C9943C` / `#E8B84B`)
- **Typography**: Playfair Display (headings) + Inter (body)
- **Animations**: Framer Motion with `[0.16, 1, 0.3, 1]` ease curves

## Sections

1. Hero — full-viewport with animated orbs
2. Stats — animated counters (180+ projects, 2,670+ staff, 23 years)
3. Sectors — Infrastructure, Defence & Security, Oil & Gas
4. Clients — marquee (UN, NATO, World Bank, USAID, US DoD)
5. About — company story + mission
6. Certifications — ISO 9001/14001, OHSAS, TRACE, UN Vendor
7. Offices — London HQ, New York, Doha
8. CTA + Footer

## Setup

```bash
npm install
npm run dev
```

Deploy to Vercel by pointing the root directory to `gcc-intl-website/`.
