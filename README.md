# GateVio static website

This is a deployable static website for `gatevio.com`.

## Languages

The site now includes first-class static pages for:

- English (`/en/`)
- Serbian (`/sr/`)
- German (`/de/`)
- French (`/fr/`)
- Spanish (`/es/`)
- Arabic (`/ar/`, right-to-left)
- Russian (`/ru/`)
- Chinese Simplified (`/zh/`)

Each language has its own metadata, canonical URL, OpenGraph fields, contact form labels and hreflang alternates.

## Contact form

The form is intentionally static. It prepares an email to `sales@gatevio.com` with the inquiry details. Before production launch, replace that address in `assets/app.js` or connect a backend/form service.

## Public content policy

The site uses public-facing Machine Can See / GateVio technology claims from the source catalog and deliberately excludes internal partner pricing, sales scripts and confidential guidance.
