# Agent Rules

## Package Manager

Use `yarn` for all package management commands:

- `yarn` - Install dependencies
- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server

Do not use `npm`.

## Deployment

This project deploys via **Vercel**. There are no GitHub Actions for deployment.

## Environment Variables

- `.env.local` contains secrets and should never be committed
- For production, set environment variables in Vercel

## Content Structure

### Blog Posts

Blog posts are MDX files in `data/blog/`. Each post requires frontmatter:

```yaml
---
title: 'Post Title'
date: '2026-01-24'
lastmod: '2026-01-24'
tags: ['tag1', 'tag2']
draft: false
summary: "Post summary here"
images: []
authors: ['default']
---
```

**Important**: Use double quotes for `summary` if it contains apostrophes (e.g., "I've" not 'I've').

Posts are automatically picked up by Contentlayer and sorted by date. The homepage displays the 5 most recent posts.

### Projects

Projects are JSON files in `content/projects/`. See `content/projects/types.ts` for the schema.

To add a new project:

1. Create a JSON file in `content/projects/` (e.g., `my-project.json`)
2. Import and add it to the array in `lib/projects.ts`
3. Optionally add it to `data/projectsData.ts` for the projects listing page

Required fields: `slug`, `title`, `tagline`, `honestFraming`, `audience`, `status`, `currentState`, `lastUpdated`, `artefacts`, `experiments`, `links`

Valid status values: `idea`, `building`, `live`, `paused`, `killed`

### Project Links

Available link types in `ProjectLinks`:
- `homepage`
- `github`
- `demo`
- `x`
- `instagram`
- `linkedin`
- `buildOnRecordLog`

## Components

### Card Component

The `Card` component in `components/Card.tsx` displays project cards with equal heights. It accepts: `title`, `description`, `imgSrc` (optional), `href`.
