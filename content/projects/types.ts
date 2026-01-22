export type ProjectStatus = 'idea' | 'building' | 'live' | 'paused' | 'killed'

export type ArtefactType = 'document' | 'prototype' | 'code' | 'design' | 'video' | 'other'

export type ExperimentStatus = 'active' | 'completed' | 'abandoned'

export interface Artefact {
  title: string
  description: string
  url?: string
  type: ArtefactType
}

export interface Experiment {
  title: string
  description: string
  signalLookingFor: string
  status: ExperimentStatus
}

export interface ProjectLinks {
  homepage?: string
  github?: string
  demo?: string
  x?: string
  instagram?: string
  linkedin?: string
  buildOnRecordLog?: string
}

export interface Project {
  slug: string
  title: string
  tagline: string
  logo?: string
  heroImage?: string
  honestFraming: {
    whatItIs: string
    whatItIsNot?: string
  }
  audience: {
    whoItsFor: string[]
    whoItsNotFor: string[]
  }
  status: ProjectStatus
  currentState: string
  lastUpdated: string // ISO date
  artefacts: Artefact[]
  experiments: Experiment[]
  links: ProjectLinks
  seoDescription?: string
}

export interface ProjectCard {
  slug: string
  title: string
  description: string
  status: ProjectStatus
  imgSrc?: string
  href: string
}
