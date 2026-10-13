# riadhgharden

My personal digital garden: evolving notes on **tech** and **interests**, plus a short **about** page.

Built with [Astro](https://astro.build/) and the [AstroPaper](https://github.com/satnaing/astro-paper) theme (v6.1).
Deployed to GitHub Pages for free (no credit card needed).

## Commands

| Command                           | Action                                                |
| --------------------------------- | ----------------------------------------------------- |
| `npm install`                     | Install dependencies                                  |
| `npm run dev`                     | Dev server at `http://localhost:4321`                 |
| `npm run build`                   | Type-check, build to `dist/`, build the search index  |
| `npm run preview`                 | Preview the production build (search only works here) |
| `npm run lint` / `npm run format` | ESLint / Prettier                                     |

## Writing a note

1. Copy `src/content/posts/_template.md` into `src/content/posts/tech/` or `src/content/posts/interests/`.
2. Rename it. The file name becomes the URL: `tech/my-note.md` → `/posts/tech/my-note/`.
3. Fill in the frontmatter:

   | Field                       | Meaning                                             |
   | --------------------------- | --------------------------------------------------- |
   | `garden`                    | `tech` or `interests`: which section lists the note |
   | `stage`                     | `seedling` 🌱, `budding` 🌿 or `evergreen` 🌳       |
   | `pubDatetime`               | When the note was planted                           |
   | `modDatetime`               | When it was last tended (shown as "Tended")         |
   | `tags`, `featured`, `draft` | Tags, pin to home page, hide from the site          |

4. Run `npm run dev` to preview, then commit and push to deploy.

## Where things live

| Path                           | What                                                |
| ------------------------------ | --------------------------------------------------- |
| `astro-paper.config.ts`        | Site title, URL, author, socials, features          |
| `src/gardens.ts`               | Garden sections and growth stages                   |
| `src/content/posts/`           | Notes (files/folders starting with `_` are ignored) |
| `src/content/pages/about.md`   | About page                                          |
| `src/pages/[garden]/`          | `/tech/` and `/interests/` listing pages            |
| `src/pages/index.astro`        | Home page                                           |
| `src/styles/theme.css`         | Colours (light & dark)                              |
| `.github/workflows/deploy.yml` | GitHub Pages deployment                             |

For theme features (colour schemes, OG images, giscus comments, LaTeX), see the
[AstroPaper docs posts](https://github.com/satnaing/astro-paper/tree/main/src/content/posts).

## Deploying to GitHub Pages

The site is published at **https://riadhgharden.github.io/**
from [riadhgharden/riadhgharden.github.io](https://github.com/riadhgharden/riadhgharden.github.io)
(a free GitHub organization owned by riadh-gharbi).

One-time setup: in the repo go to **Settings → Pages → Source: GitHub Actions**.
After that, each push to `main` builds and deploys the site (see the **Actions** tab).

The repo is named `<org>.github.io`, so the site is served from the root (no `base` path).
If the repo is ever renamed, the site moves to `https://<org>.github.io/<repo>/` and needs
`base: "/<repo>"` in `astro.config.ts`.

### Moving to a custom domain later

1. Repo **Settings → Pages → Custom domain**, then add the DNS records your registrar shows.
2. Set `site.url` in `astro-paper.config.ts` to the new domain.
