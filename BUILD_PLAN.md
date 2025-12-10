## Probemas Services – Build Guide

Use this as a living checklist while building the landing/site.

### 1) Prereqs
- Node 18+ (Vercel-compatible), npm or pnpm.
- Vercel account with target domain `services.probemas.com`.

### 2) Bootstrap
- `npx create-next-app@latest probemas-services --typescript --eslint --tailwind --app`
- Optional slider: `npm i embla-carousel-react`
- Run `npm run dev` to verify baseline.

### 3) Global theming
- Add Raleway via `next/font/google` in `app/layout.tsx`; set `className={`${raleway.variable} font-sans`}` on `<body>`.
- Tailwind: extend `colors.probemas` (bg, bgSoft, primary, primarySoft, accent, text, muted) and `fontFamily.sans` with `var(--font-raleway)` in `tailwind.config.ts`.
- `globals.css`: add `.page-container { @apply max-w-6xl mx-auto px-4 md:px-6; }` and `html { scroll-behavior: smooth; }`.

### 4) File tree scaffold
- `app/`: `layout.tsx`, `page.tsx`
- `components/`: `Navbar.tsx`, `Hero.tsx`, `Features.tsx`, `ServicesTabs.tsx`, `Testimonials.tsx`, `Steps.tsx`, `DiscordSection.tsx`, `VideoSection.tsx`, `FAQ.tsx`, `PaymentMethods.tsx`, `Footer.tsx`, `SectionHeading.tsx`
- `lib/content.ts`: all page data arrays
- `public/images` and `public/logos` for art/payment logos

### 5) Content modeling (`lib/content.ts`)
- `navLinks`, `features`, `servicesCategories`, `testimonials`, `steps`, `faqs`, `paymentMethods`
- Keep IDs for sections: features, services, reviews, how-it-works, faq.

### 6) Build order (recommended)
1. Theme baseline: fonts, Tailwind palette, globals, smooth scroll.
2. Base layout + `Navbar` + `SectionHeading`.
3. `Hero` with CTA to Discord section and trust row.
4. `Features` grid.
5. `ServicesTabs`: static content then tab state.
6. `Testimonials`: static cards; add carousel (Embla/manual) if time.
7. `DiscordSection` + `Steps` (id `how-it-works`).
8. `VideoSection` with YouTube embed + CTA.
9. `FAQ` accordion.
10. `PaymentMethods` + `Footer`.
11. Polish: hover/focus states, meta/OG in `layout.tsx`, link Discord invite/external URLs.

### 7) Component notes (quick reminders)
- Navbar: sticky, dark bg, logo left, nav links center, currency dropdown + Sign In right; hamburger on mobile.
- Hero: two columns (stack on mobile); gradient bg; CTA uses `bg-probemas.primary`; trust badges row.
- Features: 2x3 cards, soft bg/border, id `features`.
- ServicesTabs: left vertical tabs (horizontal scroll on mobile), right content with gallery/slider.
- Testimonials: rating card + review cards; desktop 3-up with dots.
- Discord/Steps: discord card + bullets/CTA; below that steps row (3 cards).
- VideoSection: heading + iframe + CTA.
- FAQ: image/card left, accordion right (useState open id).
- PaymentMethods: title + logos row/grid; yellow underline.
- Footer: logo + blurb + socials; product/more/help columns; bottom bar.

### 8) Deployment
- Push to Vercel; set domain `services.probemas.com` via CNAME to Vercel target.
- Smoke test mobile/desktop; verify links and section anchors.

