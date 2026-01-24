import { Project, ProjectCard } from '@/content/projects/types'
import rcordr from '@/content/projects/rcordr.json'
import buildOnRecord from '@/content/projects/build-on-record.json'
import sidewrks from '@/content/projects/sidewrks.json'

const projects: Project[] = [rcordr as Project, buildOnRecord as Project, sidewrks as Project]

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug)
}

export function getProjectsForCards(): ProjectCard[] {
  return projects.map((p) => ({
    slug: p.slug,
    title: p.title,
    description: p.tagline,
    status: p.status,
    imgSrc: p.heroImage,
    href: `/projects/${p.slug}`,
  }))
}
