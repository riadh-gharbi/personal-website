---
title: "Building this garden with Astro"
description: "Why this site is a digital garden, and how it is built and deployed for free."
garden: tech
stage: seedling
pubDatetime: 2026-10-11T20:00:00Z
tags:
  - astro
  - meta
featured: true
---

This site is built with [Astro](https://astro.build/) on top of the
[AstroPaper](https://github.com/satnaing/astro-paper) theme, and deployed to
GitHub Pages on every push.

## Why a garden?

A blog suggests finished, dated articles. A garden lets notes start small and
grow. Each note carries a growth stage:

- 🌱 **Seedling**: a rough idea
- 🌿 **Budding**: taking shape
- 🌳 **Evergreen**: mature and maintained

## How it works

- Notes are Markdown files in `src/content/posts/`, one folder per garden.
- Frontmatter declares the garden, the stage and the tags.
- Pushing to `main` triggers a GitHub Actions build and deploy.

More on this soon. This note is still a seedling.
