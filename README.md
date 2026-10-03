# GateVio static website

This is a deployable static website for `gatevio.com`.

## GitHub Pages

The public preview is served from `main` at `https://srdjan-ethernal.github.io/GateVio/`.
Design previews are at `https://srdjan-ethernal.github.io/GateVio/design-proposals/`.
The `.nojekyll` marker publishes the existing static files without Jekyll processing.
All language navigation, assets and design preview links use relative paths and work under `/GateVio/` or on a custom domain.
Canonical metadata remains configured for the intended production domain, `gatevio.com`; the custom domain is not connected by this setup.

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

## Language detection

The root page (`/`) automatically redirects visitors to the best language version using, in order:

1. a `?lang=` URL override,
2. the visitor's previously selected language,
3. browser language preferences,
4. a time-zone based location fallback,
5. English.

Manual language selection is stored locally in the visitor's browser.

## Visual assets and testimonials

The site includes two generated WebP infrastructure visuals under `assets/`:

- `border-control-ai.webp`
- `urban-parking-ai.webp`

It also includes representative stakeholder testimonial cards. These are role-based buyer comments, not named customer references.

## Design previews

The new design gallery is at `/design-proposals/`, with three independent previews:

- `cinematic.html`: full-width border photography, slow image movement and lime accents.
- `city.html`: bright city panoramas, blue accents and an image-led solution gallery.
- `precision.html`: dark infrastructure photography, recognition scan animation and edge-to-cloud flow.

Each preview supports Serbian and English, keyboard navigation, motion pause and reduced-motion preferences. Sales links open the existing localized inquiry form. These are visual proposals, not evidence of live operational data. AI-generated photography is illustrative, not a customer installation reference.

The previous three proposals remain at `/design-proposals/classic.html`.
New locally bundled WebP assets are `connected-city-ai.webp` and `highway-network-ai.webp`.

Image generation used the built-in image tool with these briefs: a wide daylight photograph of a modern European boulevard with visible cars and access infrastructure; a wide daylight aerial photograph of a divided highway interchange with cars, trucks and traffic camera gantries. Neither image contains interface graphics, logos or text.

## Contact form

The form is intentionally static. It prepares an email to `sales@gatevio.com` with the inquiry details. Before production launch, replace that address in `assets/app.js` or connect a backend/form service.

## Public content policy

The site uses public-facing Machine Can See / GateVio technology claims from the source catalog and deliberately excludes internal partner pricing, sales scripts and confidential guidance.
