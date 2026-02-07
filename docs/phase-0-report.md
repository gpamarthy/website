# Phase 0 — Repo + baseline

## Framework + structure
- **Framework**: Next.js 15 (App Router) with Tailwind CSS and Framer Motion.
- **Key directories**:
  - `app/`: route pages and layout
  - `components/`: shared UI components
  - `public/images/`: static image assets for headshots, badges, and diagrams

## Local commands
```bash
npm install
npm run lint
npm run build
```

## Status
- `npm install` currently fails with a 403 when attempting to reach `registry.npmjs.org`.

## Baseline issues observed
- **Information architecture** is split across multiple pages; the requested single-page section layout (Hero, About, Skills, Projects, Experience, Certifications, Contact) is not yet implemented.
- **Navigation** lacks active section highlighting and smooth-scroll behavior for a single-page layout.
- **CTA coverage** is incomplete (no Resume/LinkedIn/GitHub links).
- **Data-driven content** is hard-coded in page files instead of centralized data files.
- **SEO**: No Open Graph/Twitter metadata, canonical URL, robots.txt, sitemap.xml, or schema.org JSON-LD.
- **Analytics**: No analytics integration or optional env-based configuration.
- **404**: No custom 404 page.
- **Accessibility**: No explicit focus states or skip-to-content link; limited aria labeling.
- **Performance**: Placeholder SVGs are used; no optimized asset pipeline or compression guidance.
