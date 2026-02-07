# Theming Guide (WCAG-safe)

This project uses semantic color tokens in `app/globals.css` for dark and light themes.

## Tokens

Defined in `:root` (dark) and `html.light` (light):

- `--bg`: page background
- `--surface`: base card/surface background
- `--surface-elevated`: elevated card layer
- `--text`: primary text
- `--text-muted`: secondary text
- `--text-subtle`: tertiary/helper text
- `--border`: borders and dividers
- `--accent`: accent labels/links
- `--accent-contrast`: text on accent backgrounds (buttons)
- `--focus-ring`: keyboard focus ring color

## Safe usage rules

- Use semantic utility classes in JSX (`text-main`, `text-muted`, `text-subtle`, `text-accent`, `btn-primary`, `btn-secondary`, `pill`, `tag`).
- Avoid hardcoded theme colors in components (`text-slate-*`, `text-white`, `dark:text-*`) for content text.
- Keep focus states visible in both themes (`:focus-visible` ring uses tokenized color/offset).

## Contrast validation

Run:

```bash
npm run check:contrast
```

The script verifies token contrast pairs for both themes and fails if a pair drops below WCAG AA thresholds.
