# Agent Instructions — fernandosalomao.github.io

Personal blog for Fernando Salomao. Jekyll site using the [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) theme, hosted on GitHub Pages.

## Local Development

```bash
bundle exec jekyll serve          # serve with live reload (http://localhost:4000)
bundle exec jekyll serve --drafts # include draft posts
bundle exec jekyll build          # build only (output to _site/)
```

> **Important**: `_config.yml` changes require a server restart — Jekyll does not hot-reload it.

## Project Structure

| Path | Purpose |
|------|---------|
| `_config.yml` | Site-wide settings (theme, plugins, author, SEO) |
| `_posts/` | Blog posts — filename must be `YYYY-MM-DD-slug.md` |
| `_pages/` | Static pages (about, certs, 404) |
| `_data/navigation.yml` | Main nav links |
| `assets/images/` | Images referenced in posts/pages |
| `_site/` | **Generated output — never edit directly** |
| `vendor/` | Bundler cache — ignore |

## Content Conventions

### Blog Posts (`_posts/`)

Required frontmatter:

```yaml
---
title: "Post Title"
date: YYYY-MM-DDTHH:MM:SS-03:00       # Brazil/São Paulo offset
last_modified_at: YYYY-MM-DDTHH:MM:SS-03:00
excerpt: "One-sentence summary shown in listings."
categories:
  - Blog
tags:
  - tag-one
  - tag-two
toc: true   # omit or false for short posts
---
```

- Categories use title case (`Blog`, `Link`)
- Tags use lowercase kebab-case (`platform-engineering`, `devops`)
- Writing style: opinionated, practical, grounded — not marketing copy (see existing posts for tone)

### Static Pages (`_pages/`)

Required frontmatter:

```yaml
---
permalink: /page-slug/
title: "Page Title"
layout: single        # or splash for landing-style pages
---
```

### Certifications Page (`_pages/certs.md`)

Uses `layout: splash` with custom feature-row collections. Follow the commented-out examples in the file when adding new certifications.

### Navigation (`_data/navigation.yml`)

Add new top-level pages here to appear in the masthead:

```yaml
main:
  - title: "Page Title"
    url: /page-slug/
```

## Theme — Minimal Mistakes

- **Remote theme**: `mmistakes/minimal-mistakes` (no local theme files to edit)
- **Skin**: `dark`
- [Theme docs](https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/)
- Override layouts/includes by creating matching files in `_layouts/` or `_includes/` (Jekyll shadow-copies)

## Deployment

Pushing to `main` triggers GitHub Pages to build and deploy automatically. No CI configuration needed. Custom domain is `www.fernandosalomao.com` (set in `CNAME`).

## Content Topics

Posts cover: cloud architecture, platform engineering, DevOps/SRE, Azure/AWS, Infrastructure as Code, reliability, and engineering leadership. Keep new posts consistent with this focus.
