# Portfolio Website (Next.js 15)

A single-page, data-driven portfolio with dark/light theming and a declassified enterprise aesthetic.

## Local preview instructions

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Open the preview:
   - http://localhost:3000

## GitHub Pages preview (manual deploy)

This project is configured for static export (`output: "export"`) so you can deploy it to GitHub Pages manually.

1. Build static output:
   ```bash
   npm run build
   ```
2. The generated site will be in:
   - `out/`
3. Deploy the `out/` folder to GitHub Pages (for example, publish to `gh-pages` branch root).

4. (Optional) for non-GitHub hosting that supports runtime headers, enable:
   - `ENABLE_RUNTIME_HEADERS=true`

### Repo path support (`/new-website/`)
If deploying to `https://<user>.github.io/new-website/`, the defaults already work.
Set these explicitly if needed:
- `NEXT_PUBLIC_SITE_URL=https://<user>.github.io/new-website/`
- `NEXT_PUBLIC_BASE_PATH=/new-website`

For a custom apex domain, set `NEXT_PUBLIC_BASE_PATH=` (empty).

## Custom domain hosting (GitHub Pages)

If you want a custom domain (e.g., `gouthampamarthy.com`):

1. Create a file at:
   - `public/CNAME`
2. Put your domain in that file (single line), for example:
   ```
   gouthampamarthy.com
   ```
3. Build again:
   ```bash
   npm run build
   ```
4. Deploy `out/` to GitHub Pages.
5. In GitHub repo settings → Pages:
   - Set Custom domain to your domain.
   - Enable **Enforce HTTPS**.

### DNS records for GitHub Pages

At your DNS provider:

- For apex domain (`gouthampamarthy.com`), add **A** records:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- For `www`, add **CNAME**:
  - `www` → `<your-github-username>.github.io`

## Asset downloads & placement (exact names + locations)

If an image is missing or named differently, it will not render. Use the exact file names below.

### 1) Put files in the correct folders

- **All images/icons/badges/logos:** `public/images/`
- **Resume PDF:** `public/resume.pdf`

### 2) Use these exact image file names

| Section | Required file name | Put it here | Referenced from |
| --- | --- | --- | --- |
| Hero headshot | `headshot-placeholder.svg` | `public/images/headshot-placeholder.svg` | `app/page.js` |
| Project 1 diagram | `project-topology.svg` | `public/images/project-topology.svg` | `app/data/projects.js` |
| Project 2 diagram | `project-cloud.svg` | `public/images/project-cloud.svg` | `app/data/projects.js` |
| Experience logo (SportsExcitement) | `sports-excitement-logo.svg` | `public/images/sports-excitement-logo.svg` | `app/data/experience.js` |
| Experience logo (DreamStudio) | `dreamstudio-logo.svg` | `public/images/dreamstudio-logo.svg` | `app/data/experience.js` |
| Certification badge (OSEP) | `osep-badge.svg` | `public/images/osep-badge.svg` | `app/data/certifications.js` |
| Certification badge (CRTE) | `crte-badge.svg` | `public/images/crte-badge.svg` | `app/data/certifications.js` |
| Certification badge (AWS Security Specialty) | `aws-security-badge.svg` | `public/images/aws-security-badge.svg` | `app/data/certifications.js` |
| Certification badge (Security+) | `security-plus-badge.svg` | `public/images/security-plus-badge.svg` | `app/data/certifications.js` |
| Certification badge ((ISC)² CC) | `isc2-cc-badge.svg` | `public/images/isc2-cc-badge.svg` | `app/data/certifications.js` |
| OpenGraph card image | `og-card.svg` | `public/images/og-card.svg` | metadata/social preview |
| Optional icon | `aws-icon.svg` | `public/images/aws-icon.svg` | optional visual asset |
| Optional icon | `burp-icon.svg` | `public/images/burp-icon.svg` | optional visual asset |
| Optional icon | `python-icon.svg` | `public/images/python-icon.svg` | optional visual asset |

### 3) Resume file

- Replace `public/resume.pdf` with your real resume.
- The site links to it via `resumeUrl` in `app/data/site.js`.

### 4) If you want different file names

You can rename files, but you must also update the matching paths in code:

- `app/page.js` (hero/headshot and any hardcoded images)
- `app/data/projects.js` (project diagrams)
- `app/data/experience.js` (company logos)
- `app/data/certifications.js` (certification badges)
- `app/data/site.js` (resume URL)

Quick check after replacing assets:

```bash
npm run build
npm run check:content
```

## Docs

- `EDITING.md` — update content (projects, experience, certifications, assets).
- `DEPLOYMENT.md` — deployment and domain setup.
- `THEMING.md` — theme tokens and contrast-safe color customization.
