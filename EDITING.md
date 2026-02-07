# Editing Guide

## Update core profile content
- **Name, title, mission, location, email**: `app/data/site.js`
- **Hero stats**: `app/data/site.js` (`heroStats`)
- **About highlights**: `app/data/site.js` (`aboutHighlights`)
- **Skills list**: `app/data/site.js` (`skills`)
- **Social links**: `app/data/site.js` (`socialLinks`)

## Update projects
- `app/data/projects.js`
- Each project includes:
  - `title`, `category`, `summary`
  - `outcomes` (Findings & Remediation)
  - `focus` (tag pills)
  - `diagram` (path in `public/images/`)

## Update experience timeline
- `app/data/experience.js`
- Each role includes:
  - `company`, `role`, `period`, `summary`, `achievements`, `logo`

## Update certifications
- `app/data/certifications.js`
- Each cert includes:
  - `name`, `issuer`, `badge`

## Replace assets
Place all custom assets in `public/` so Next.js can serve them directly:

| Asset | File name | Location | Notes |
| --- | --- | --- | --- |
| Resume PDF | `resume.pdf` | `public/` | Replace the placeholder PDF with your actual resume. |
| Headshot | `headshot-placeholder.svg` | `public/images/` | Update filename and `app/page.js` if you rename it. |
| Project diagrams | `project-topology.svg`, `project-cloud.svg` | `public/images/` | Used in the Projects section. |
| Company logos | `sports-excitement-logo.svg`, `dreamstudio-logo.svg` | `public/images/` | Used in Experience timeline. |
| Stack icons | `aws-icon.svg`, `python-icon.svg`, `burp-icon.svg` | `public/images/` | Optional if you want to show stack visuals. |
| Certification badges | `osep-badge.svg`, `crte-badge.svg`, `aws-security-badge.svg` | `public/images/` | Used in Certifications section. |

## Quick preview
```bash
npm install
npm run dev
```
Open http://localhost:3000
