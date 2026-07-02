# Himalaya — a timeless digital identity

A premium, static personal website with a Himalayan design language: cool snow,
deep pine forest, and a restrained temple-brass accent. Built with React, Vite,
TypeScript, Tailwind CSS, Framer Motion, React Router and Lucide icons. No
backend, no database, no SSR — it compiles to a fully static site.

Verified: `npm run build` passes type-checking and produces an optimized static
build (~116 KB gzipped across split chunks).

---

## Quick start

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + produce the static build in /dist
npm run preview  # preview the production build locally
```

Requires Node 18+ (built and tested on Node 22).

---

## Make it yours — edit ONE file

Everything personal lives in **`src/data/site.ts`**. Change the values there and
the whole site updates — no component code needs touching.

- **`profile`** — your name, role line, headline, intro, email, location, and an
  optional portrait. Set `portrait` to an image path (e.g. `"/portrait.jpg"` with
  the file in `public/`) or leave it `null` for the elegant monogram placeholder.
- **`social`** — your GitHub, LinkedIn, and website links.
- **`experiences`** — the four roles are pre-filled with neutral, honest
  descriptions. Replace the summaries, responsibilities and skills with your real
  details. Nothing about you was invented — placeholders are yours to complete.
- **`projects` / `posts` / `resourceGroups`** — replace the placeholder entries
  with real work as it exists. Empty arrays simply render an empty state.
- **`skillCategories`, `stats`, `about`** — edit freely.

Also update these for correct SEO/links before deploying:

- `index.html` — the `<title>`, meta description, and the `https://example.com`
  URLs in the canonical + Open Graph tags. Add an `og-image.jpg` to `public/`.
- `src/hooks/useSEO.ts` — set the `SITE` constant to your deployed URL.
- `public/robots.txt` — update the sitemap URL.

---

## Design system

| Token | Value | Meaning |
| --- | --- | --- |
| `snow` | `#F3F5F2` | cool high-altitude paper white |
| `pine` | `#1E4034` | deep forest — brand primary |
| `ink` | `#182420` | primary text |
| `brass` | `#B08535` | temple brass / marigold accent |
| `stone` / `slate` | greys | secondary + tertiary text |

Type: **Fraunces** (display serif), **Manrope** (body), **JetBrains Mono**
(labels/data). All tokens live in `tailwind.config.js`.

The signature motif is the **topographic contour ridgeline** (`src/components/
Contour.tsx`) — thin elevation lines of a Himalayan peak that draw in on scroll.

---

## Deploy to Cloudflare Pages

**Option A — connect your Git repo (recommended):**

1. Push this project to GitHub/GitLab.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**.
3. Set the build settings:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy. `public/_redirects` is already included so client-side routes (e.g.
   `/about`) resolve correctly on refresh and direct links.

**Option B — direct upload:** run `npm run build`, then drag the generated
`dist/` folder into **Pages → Create → Upload assets**.

Works the same on Netlify (the `_redirects` file is honored) or any static host —
for others, add an SPA fallback that serves `index.html` for unknown routes.

---

## Contact form

The form has no backend. On submit it opens the visitor's mail client with a
pre-filled message to your address. To handle submissions server-side, wire the
`handleSubmit` in `src/pages/Contact.tsx` to a form service like Formspree,
Web3Forms, or a Cloudflare Pages Function.

---

## Project structure

```
src/
├── data/site.ts        ← all personal content (edit this)
├── hooks/useSEO.ts     ← per-route meta tags
├── components/         ← Navbar, Footer, Contour (signature), Reveal,
│                          MagneticButton, AnimatedCounter, PageHeader, …
├── pages/              ← Home, About, Experience, Skills, Projects,
│                          Resources, Blog, Contact, NotFound
├── App.tsx             ← routes + page transitions
├── main.tsx            ← entry
└── index.css           ← Tailwind layers + base styles
```

## Accessibility & performance notes

- Semantic landmarks, a skip link, visible brass focus rings, labeled controls.
- `prefers-reduced-motion` is respected globally (animations collapse).
- Fonts preconnected; heavy libraries code-split into their own cache-friendly
  chunks; images lazy-load where used.
- Lighthouse-oriented: run an audit after setting your real URL and OG image.
```
