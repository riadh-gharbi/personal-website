# Personal Digital Garden: Project Plan & Tutorial

> Status: **decided, Phase 0 done.** See §0 for the decisions and current progress.

## 0. Decisions & progress (2026-10-11)

| Topic | Decision |
|---|---|
| Sections | `/tech` (Tech) and `/interests` (Interests) |
| Base theme | AstroPaper v6.1 (Astro 7) |
| Hosting | GitHub Pages: free, no card. A custom domain and better hosting can come later. |
| Name / domain | `riadhgh` / `riadhgharden` later. The site title is `riadhgharden`. |
| Repo / URL | [riadhgharden/riadhgharden.github.io](https://github.com/riadhgharden/riadhgharden.github.io) → https://riadhgharden.github.io/ |
| Language | English only |
| v1 garden features | Tags + growth stages (no wikilinks or backlinks yet) |

Implementation notes (how it differs from the generic plan below):
- The theme's `posts` collection is kept, with two added fields: `garden` (`tech` | `interests`) and `stage`.
  Planted and tended dates map to the theme's `pubDatetime` / `modDatetime`.
- Notes live in `src/content/posts/{tech,interests}/` and are served at `/posts/<garden>/<slug>/`.
- Gardens and stages are defined in `src/gardens.ts`. A single dynamic route `src/pages/[garden]/` renders both listings.

Progress:
- [x] Phase 0: scaffolded, demo content removed, builds cleanly
- [x] Phase 1: live at https://riadhgharden.github.io/ (repo moved to the free `riadhgharden` org; old `riadh-gharbi.github.io` site unpublished)
- [x] Phase 2: config, nav, wording (LinkedIn/GitHub links set)
- [x] Phase 3: two gardens, home page with garden cards + recently tended
- [x] Phase 4 (reduced): stage badges, planted/tended dates, tags
- [ ] Phase 5: fill in the about page content (template is in place)
- [ ] Phase 6: own OG image / favicon, Lighthouse pass
- [ ] Phase 7: custom domain, Impressum/privacy if needed

---

## 1. The idea

A personal website that works as a **digital garden**: an evolving collection of notes and articles
instead of a strict, date-ordered blog. Posts can start rough and get better over time, and they link
to each other.

### Sections

| Route | Purpose | Content |
|---|---|---|
| `/` | Home | Short intro, recently tended notes from both gardens, links to sections |
| `/tech` | **Work & Tech** garden | Engineering, architecture, tooling, career, lessons learned |
| `/interests` | **Interests** garden | Everything else: books, sports, travel, cooking, projects… |
| `/notes/[slug]` | Single note/article | The content, metadata, backlinks, related notes |
| `/tags/[tag]` | Tag index | Cross-cutting topics (a tag can appear in both gardens) |
| `/about` | About me | Short bio, expertise, mini résumé, link to LinkedIn/GitHub/email |
| `/rss.xml` | Feed | RSS for both gardens (optionally one per garden) |
| `/search` | Search | Client-side full-text search |



### What makes it a "garden" rather than a blog

These ideas come from Maggie Appleton's
[digital garden essay](https://maggieappleton.com/garden-history) and her site's source
([MaggieAppleton/maggieappleton.com-V3](https://github.com/MaggieAppleton/maggieappleton.com-V3)):

1. **Growth stages:** each note is marked 🌱 *seedling* (rough idea), 🌿 *budding* (taking shape), or 🌳 *evergreen* (finished and maintained).
2. **"Planted" and "last tended" dates** take the place of a single publish date.
3. **Bidirectional links:** each note shows "Notes that link here" (backlinks).
4. **Topic-first navigation:** you browse by tags and section, not only by a timeline.
5. **Note types** (optional): `note` (short), `essay` (long-form), `til` (today I learned), `project`.

### Non-goals (for v1)
- No CMS or database. Content is Markdown/MDX in git.
- No user accounts. Comments are optional and come later.
- No custom backend. The site is fully static.

---

## 2. Ready-made designs & inspiration (checked Oct 2026)

| Project | Stack | Stars | Last activity | Why look at it |
|---|---|---|---|---|
| [satnaing/astro-paper](https://github.com/satnaing/astro-paper) | Astro | ~5.1k | Oct 2026 | Minimal, accessible, SEO-friendly. Very actively maintained. **Recommended base.** |
| [chrismwilliams/astro-theme-cactus](https://github.com/chrismwilliams/astro-theme-cactus) | Astro + Tailwind | ~1.7k | Sep 2026 | Clean, has a "notes" concept. People already fork it into gardens (e.g. [weisgarden](https://github.com/GeauxWeisbeck4/weisgarden)). |
| [cworld1/astro-theme-pure](https://github.com/cworld1/astro-theme-pure) | Astro | ~1.1k | Sep 2026 | Blog + docs hybrid, polished UI, good about-page ideas |
| [radishzzz/astro-theme-retypeset](https://github.com/radishzzz/astro-theme-retypeset) | Astro | ~700 | Apr 2026 | Typography-focused, elegant reading experience |
| [saicaca/fuwari](https://github.com/saicaca/fuwari) | Astro | ~5.1k | Mar 2026 | Colourful, card-based look. Less minimal. |
| [jackyzha0/quartz](https://github.com/jackyzha0/quartz) | Custom SSG | ~13.4k | Oct 2026 | *The* digital-garden tool: Obsidian-style wikilinks, graph view, backlinks. Less flexible for custom pages. |
| [timlrx/tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) | Next.js | ~10.5k | Feb 2026 | Full-featured, but heavier than this site needs |
| [adityatelange/hugo-PaperMod](https://github.com/adityatelange/hugo-PaperMod) | Hugo | ~14k | Aug 2026 | Most popular Hugo theme, if you want to avoid JS tooling |

More places to browse: [astro.build/themes](https://astro.build/themes) (filter by "Blog"),
[jamstackthemes.dev](https://jamstackthemes.dev), and the
[Digital Gardeners list](https://github.com/MaggieAppleton/digital-gardeners) for gardens to borrow ideas from.

---

## 3. Tech stack (recommendation)

| Concern | Choice | Reason |
|---|---|---|
| Framework | **Astro** (latest is 7.x) | Built for content sites. Static by default, so pages ship with no JS. Typed content collections, MDX support. |
| Content | Markdown / MDX in `src/content/` | Lives in git, portable, and you can write it in VS Code or Obsidian |
| Styling | Tailwind CSS (or plain CSS if the theme uses it) | Fast to iterate on |
| Search | [Pagefind](https://github.com/Pagefind/pagefind) | Static search index built at compile time. No server needed. |
| Comments (later) | [giscus](https://github.com/giscus/giscus) | Stored in GitHub Discussions. Free, no tracking. |
| Analytics (optional) | Cloudflare Web Analytics / Plausible / Umami | Privacy-friendly, no cookie banner needed |
| Hosting | **Cloudflare Pages** or **GitHub Pages** | Free, global CDN, deploys automatically on push |
| Domain | `riadhgh` / `riadhgharden` (later) | |

Why not Quartz? It's great for an Obsidian vault, but you want custom pages (two gardens, a résumé-style
about page), and Astro makes those much easier. We can still add wikilinks and backlinks to Astro.

Why not Next.js? It's more machinery than a static content site needs.

---

## 4. Content model

One collection, `notes`, with a `garden` field. That way tags, backlinks, and search work across both sections.

```ts
// src/content.config.ts  (verify against current Astro docs; API is per Astro 5+)
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const notes = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/notes" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    garden: z.enum(["tech", "interests"]),
    stage: z.enum(["seedling", "budding", "evergreen"]).default("seedling"),
    type: z.enum(["note", "essay", "til", "project"]).default("note"),
    tags: z.array(z.string()).default([]),
    planted: z.coerce.date(),
    tended: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    cover: z.string().optional(),
  }),
});

export const collections = { notes };
```

Example note, `src/content/notes/tech/hexagonal-architecture.md`:

```md
---
title: "Hexagonal architecture in practice"
description: "What ports & adapters actually buy you on a real project."
garden: tech
stage: budding
type: essay
tags: [architecture, ddd]
planted: 2026-10-12
---

Content… links to other notes like [[testing-strategy]] become backlinks.
```

The about-page data (skills, experience highlights, links) goes in a small typed file such as
`src/data/profile.ts`, so the page markup stays clean.

---

## 5. Project structure

```
personal-website/
├── public/                  # favicon, og-image, CV pdf (optional)
├── src/
│   ├── content/notes/
│   │   ├── tech/
│   │   └── interests/
│   ├── content.config.ts
│   ├── data/profile.ts      # about-page data
│   ├── components/          # NoteCard, StageBadge, Backlinks, TagList, Header, Footer
│   ├── layouts/             # BaseLayout, NoteLayout
│   ├── lib/                 # backlinks.ts, notes.ts (queries, sorting)
│   └── pages/
│       ├── index.astro
│       ├── tech/index.astro
│       ├── interests/index.astro
│       ├── notes/[...slug].astro
│       ├── tags/[tag].astro
│       ├── about.astro
│       ├── search.astro
│       └── rss.xml.ts
├── astro.config.mjs
└── .github/workflows/deploy.yml   # if GitHub Pages
```

---

## 6. Tutorial: step-by-step build

Each phase ends with something working and deployed. Ship early, then keep tending.

### Phase 0: Setup (≈30 min)
1. Prerequisites: Node 22 (installed), git, a GitHub account, VS Code with the Astro extension.
2. Scaffold from the chosen theme:
   `npm create astro@latest -- --template satnaing/astro-paper`
   (or start clean with `--template blog` if you want to learn every piece).
3. `git init`, make a first commit, and push to a new GitHub repo.
4. Run `npm run dev` and look around the theme.

### Phase 1: Deploy first (≈30 min)
Deploy before you customise anything, so every later change goes live with a `git push`.
- **Cloudflare Pages:** connect the GitHub repo, framework preset "Astro", build `npm run build`, output `dist`.
- **GitHub Pages (alternative):** use the official `withastro/action` workflow and set `site`/`base` in `astro.config.mjs`.
- Check that the `*.pages.dev` / `*.github.io` URL loads.

### Phase 2: Make it yours (≈2–3 h)
- Site config: name, description, author, social links (LinkedIn, GitHub).
- Remove the demo posts and set up the `notes` collection schema from §4.
- Choose fonts and colours, and keep the dark/light mode.
- Header nav: **Tech · Interests · Tags · About · Search**.

### Phase 3: The two gardens (≈2–3 h)
- `/tech` and `/interests` filter the collection by `garden`.
- Each garden index can be sorted by *last tended* and filtered by stage or tag.
- Home page: hero intro, plus "recently tended" from both gardens.
- `NoteCard` component showing title, description, stage badge, and tags.

### Phase 4: Garden features (≈3–4 h)
- `StageBadge` (🌱/🌿/🌳) and "planted / last tended" dates on each note.
- Wikilinks: add the `remark-wiki-link` plugin (or write a small custom remark plugin) so `[[slug]]` becomes a link.
- Backlinks: at build time, scan every note for links to other notes and build a reverse index (`src/lib/backlinks.ts`). Render it at the bottom of each note.
- Related notes: other notes that share tags.
- Tag pages: `/tags/[tag]`.

### Phase 5: About page (≈1–2 h)
- Photo, a 2–3 sentence intro, and what you work on now.
- Expertise as grouped skill chips (e.g. Backend · Cloud · Architecture).
- A short experience timeline with 3–4 entries, plus a prominent **"Full profile on LinkedIn →"** button.
- Contact: email (obfuscated) and socials. Optionally a downloadable CV PDF.

### Phase 6: Polish & SEO (≈2 h)
- `@astrojs/sitemap`, RSS (`@astrojs/rss`), canonical URLs, Open Graph images (generated per note or one default).
- Pagefind search page.
- Accessibility pass (Lighthouse, keyboard navigation, contrast). Aim for a Lighthouse score of 95+.
- 404 page.

### Phase 7: Production (≈1 h)
- Buy a domain and point DNS at Cloudflare/GitHub Pages. HTTPS is automatic.
- Privacy-friendly analytics (optional).
- Add an imprint (Impressum) and privacy page. **A personal site in Germany may need these** if it isn't purely private, so check your situation.

### Phase 8: Later ideas
- giscus comments
- Graph view of the note network
- "Now" page (`/now`), bookshelf, or uses page (`/uses`)
- Newsletter (Buttondown)
- Writing in Obsidian with the vault pointed at `src/content/notes`

---

## 7. Writing workflow (once built)

1. Create a `.md` file in `src/content/notes/<garden>/`, starting with `stage: seedling`.
2. Run `npm run dev` to preview.
3. `git commit && git push` builds and deploys automatically.
4. Come back later, improve the note, bump `tended` and `stage`.

---

## 8. Open questions

All resolved. See §0.
