# Essar Sons Group Website

A multi-page marketing website for Essar Sons, built with Node.js, Express and EJS.

## Running the site

```bash
npm install
npm start
```

The site runs at [http://localhost:3000](http://localhost:3000) by default. Set the `PORT` environment variable to use a different port.

## Project structure

- `server.js` — Express app and routes.
- `data/` — content modules (divisions, projects, firms, contact units, team, clients). Edit these to update site copy without touching templates.
- `views/` — EJS templates. `views/partials/` holds shared components (nav, footer, marquee, division grid, stat grid, project slider, contact form).
- `public/css/style.css` — the full design system (colors, type, layout, animations).
- `public/js/main.js` — vanilla JS for nav behavior, word-reveal, scroll-reveal, parallax, sliders, stat counters, the homepage intro animation, the contact form, and the projects filter.
- `data/enquiries.json` — enquiry submissions from `POST /api/enquiry` are appended here (see `// TODO: wire up email/CRM delivery` in `server.js`).

## Real assets vs. remaining placeholders

The client supplied a folder of real photography, logos and a project video, now copied into `public/img/` (`logo-side.svg`, `logo-center.svg`, `public/img/team/*`, `public/img/clients/*`, `public/img/content/*`). Real assets are wired in wherever a matching one exists:

- **Logo** — `public/img/logo-side.svg` (horizontal lockup) is used in the nav and footer; `public/img/logo-center.svg` (mark) is used in the homepage intro overlay, crossfading into the side lockup as it animates into the nav position.
- **Client logos** — the homepage "Trusted by builders, brands and institutions." section renders the real supplied logo artwork for all 19 clients (`public/img/clients/`), not text chips.
- **Team photos** — all 7 director headshots (`public/img/team/`) are the real supplied photography, used on the About page and (Fakhruddin, Mohammadally) on the Lifting Equipment page.
- **Projects** (`data/projects.js`) — all three projects listed are real, client-supplied work, not placeholders: the Jivdhani Glass Skywalk (Virar) uses the real supplied video (`jivdhani-project.mp4`), autoplaying muted/looped in the project slider; the Meril Life Sciences glass bridge floor and the Indian Model School (Ulwe) facade each use the real supplied photo. There are only three because that's the real project history supplied — earlier placeholder/stock projects have been removed rather than padded out with invented ones.
- **Facility photography** — real photos of the Essar warehouse, processing floor, crane loading, on-site installation, and the original storefront gate signage are used across the homepage (Story band, Process band), About page (header band, Vision panel), and the division/firm pages (heroes, offerings, "Where It Started" sections).

A handful of images remain **stock placeholders** because no matching real photo was supplied — flag these for replacement before launch:
- A few secondary offering images (e.g. Windoors' "Aluminium Composite Wall Cladding Panels" and "Shower And Office Cubicles", Wholesale's transport fleet tile, Architectural's "Modular Glass Systems") where no real photo was supplied.
- **Map links** — "Get Directions" buttons point to `maps.google.com` search-query URLs built from each unit's address text, not verified pinned locations.

## Homepage hero video

The homepage hero now plays the real supplied 4K hallway video (`public/video/hero-hallway.mov`, ~85MB), muted/looped/slowed slightly (`playbackRate = 0.7`) for the "slow-motion" feel the brief calls for. A still photo sits behind it as a fallback — `public/js/main.js` swaps to it automatically if the browser fires a `video` error event.

Two things worth doing before this ships to production, since no `ffmpeg` was available in this environment to do them here:
- **Compress and transcode it.** An 85MB, 3840×2160 `.mov` as an autoplaying hero background is a lot of bytes for a first paint, especially on mobile. Re-encode to H.264/AAC `.mp4` at a smaller frame size (e.g. 1920×1080) and a web-friendly bitrate — this alone should cut it to a few MB.
- **The `<source>` intentionally has no `type` attribute.** Chromium-based browsers refused to even attempt loading the file when `type="video/quicktime"` was declared (they reject the MIME type outright without probing the bytes), but play it fine once the browser is left to sniff the container itself. Once transcoded to `.mp4`, add `type="video/mp4"` back for correctness.

## Notes

- No build step or front-end framework is required — everything is server-rendered EJS plus one stylesheet and one script file.
- The design respects `prefers-reduced-motion`: word-reveal, marquee scrolling, and parallax are disabled or short-circuited for users who request reduced motion.
- The mobile nav (hamburger menu below ~900px) is an original addition — the source brief was desktop-first and didn't specify mobile nav behavior.
