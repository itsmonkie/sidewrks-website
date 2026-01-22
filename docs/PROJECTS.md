# Projects System

This document describes the projects system for the Sidewrks website.

## Overview

Projects are stored as JSON files in `data/projects/` and rendered as individual pages at `/projects/[slug]`. The listing page at `/projects` displays cards that link to individual project pages.

## File Structure

```
content/projects/
├── types.ts                 # TypeScript interfaces
├── build-on-record.json     # Project data
└── sidewrks.json            # Project data

lib/
└── projects.ts              # Data loading utilities

components/project/
├── StatusBadge.tsx          # Status badge component
├── ProjectHeader.tsx        # Logo, title, tagline, status
├── ProjectHonestFraming.tsx # What it is / what it's not
├── ProjectAudience.tsx      # Who it's for / not for
├── ProjectCurrentState.tsx  # Current state section
├── ProjectArtefacts.tsx     # Artefacts list
├── ProjectExperiments.tsx   # Experiments section
└── ProjectLinks.tsx         # External links with icons

layouts/
└── ProjectLayout.tsx        # Layout assembling all sections

app/projects/
├── page.tsx                 # Listing page
└── [slug]/
    └── page.tsx             # Individual project page
```

## Adding a New Project

1. Create a new JSON file in `content/projects/` (e.g., `my-project.json`)
2. Add the import to `lib/projects.ts` and include it in the `projects` array
3. The project will automatically appear on the listing page and have its own page at `/projects/my-project`

## Project Schema

```typescript
interface Project {
  slug: string                    // URL slug (must match filename)
  title: string                   // Project name
  tagline: string                 // Short description
  logo?: string                   // Path to logo image
  heroImage?: string              // Path to hero image
  honestFraming: {
    whatItIs: string              // Honest description
    whatItIsNot?: string          // What it's NOT trying to be
  }
  audience: {
    whoItsFor: string[]           // Target audience
    whoItsNotFor: string[]        // Who should look elsewhere
  }
  status: 'idea' | 'building' | 'live' | 'paused' | 'killed'
  currentState: string            // Current state description
  lastUpdated: string             // ISO date (YYYY-MM-DD)
  artefacts: Array<{
    title: string
    description: string
    url?: string
    type: 'document' | 'prototype' | 'code' | 'design' | 'video' | 'other'
  }>
  experiments: Array<{
    title: string
    description: string
    signalLookingFor: string
    status: 'active' | 'completed' | 'abandoned'
  }>
  links: {
    homepage?: string
    github?: string
    demo?: string
    x?: string
    instagram?: string
    linkedin?: string
    buildOnRecordLog?: string
  }
  seoDescription?: string         // For meta tags (defaults to tagline)
}
```

## Status Definitions

| Status | Meaning |
|--------|---------|
| `idea` | Just an idea, not yet started |
| `building` | Actively being developed |
| `live` | Released and available |
| `paused` | On hold, may resume later |
| `killed` | Stopped, not continuing |

## Data Loading Functions

Available in `lib/projects.ts`:

- `getAllProjects()` - Returns all project data
- `getProjectBySlug(slug)` - Returns a single project or undefined
- `getAllProjectSlugs()` - Returns array of slugs (for static generation)
- `getProjectsForCards()` - Returns data formatted for the listing page cards

## Example Project JSON

```json
{
  "slug": "example-project",
  "title": "Example Project",
  "tagline": "A short description of the project.",
  "honestFraming": {
    "whatItIs": "A tool that helps with X.",
    "whatItIsNot": "Not trying to replace Y."
  },
  "audience": {
    "whoItsFor": ["People who need X", "Developers building Y"],
    "whoItsNotFor": ["Enterprise teams", "Those who already have Z"]
  },
  "status": "building",
  "currentState": "Working on the core features.",
  "lastUpdated": "2025-01-22",
  "artefacts": [],
  "experiments": [
    {
      "title": "Feature experiment",
      "description": "Testing if users want this feature",
      "signalLookingFor": "Usage metrics and feedback",
      "status": "active"
    }
  ],
  "links": {
    "homepage": "https://example.com"
  },
  "seoDescription": "Example Project - A tool that helps with X."
}
```
