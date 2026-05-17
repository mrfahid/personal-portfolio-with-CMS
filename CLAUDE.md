# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Structure

This is a monorepo with two independent sub-projects:

- `front_end/` — Next.js 14 portfolio website (App Router, TypeScript)
- `backendsanity/` — Standalone Sanity Studio v3 (the CMS, JavaScript)

The frontend also embeds a Sanity Studio at `/admin` via `next-sanity`, so content can be managed from within the deployed site without running the standalone studio.

## Commands

### Frontend (`cd front_end`)

```bash
npm run dev      # Start Next.js dev server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint
```

### Sanity Studio standalone (`cd backendsanity`)

```bash
npm run dev      # Start Sanity Studio (localhost:3333)
npm run build    # Build the studio
npm run deploy   # Deploy studio to Sanity's hosted URL
```

There are no tests in this project.

## Architecture

### Data Flow

All dynamic content (about, work, skills, testimonials, brands, experiences, work experience, contact, posts) lives in Sanity's cloud. The frontend fetches it at runtime using GROQ queries via the Sanity client defined in `front_end/app/client.ts`. Page sections fetch their own data client-side inside `useEffect` hooks — there is no centralized data-fetching layer.

### Page Sections as HOC-wrapped Components

Every portfolio section (`About`, `Skills`, `Work`, `Testimonial`, `Footer`) is exported as a double-wrapped Higher-Order Component:

```ts
export default AppWrap(MotionWrap(Component, 'scss-class'), 'section-id', 'bg-class');
```

- **`MotionWrap`** — Wraps the component in a `framer-motion` div that animates it into view.
- **`AppWrap`** — Provides the full-page-section layout: adds `SocialMedia` links on the left, a copyright footer at the bottom, and `NavigationDots` on the right. It also applies the dark-mode background class.

`page.tsx` simply renders each section in order — no routing between them; it's a single-page layout with scroll-based navigation.

### Routing

| Route | Purpose |
|---|---|
| `/` | Home — all portfolio sections |
| `/admin/[[...index]]` | Embedded Sanity Studio |
| `/post/[slug]` | Individual blog post page (SSR, fetches by slug) |

### Styling Convention

SCSS modules (`*.scss`) are co-located with each component. Tailwind utility classes are used alongside the SCSS (not instead of it). Dark mode uses both Tailwind's `dark:` prefix and `next-themes` for the theme toggle.

### Chatbot

`ChatInterface` embeds a Dialogflow agent via an `<iframe>` (using `react-iframe`). It is a floating toggle button fixed to the page — it does not integrate with the rest of the app state.

### Sanity Configuration

The Sanity project ID is `k21eb9nx`, dataset `production`. The client config lives in `front_end/app/client.ts` and `front_end/sanity.config.ts`. The `urlFor` helper in `client.ts` wraps `@sanity/image-url` and is used throughout to resolve Sanity image references to CDN URLs.

### Content Types (Sanity Schemas)

Defined in `backendsanity/schemaTypes/`: `works`, `testimonials`, `brands`, `abouts`, `experiences`, `skills`, `workExperience`, `contact`, `post`.

### Image Domains

`next.config.mjs` allows remote images from `cdn.sanity.io` only. Add any new external image hostnames there.
