import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/projects'
import ProjectLayout from '@/layouts/ProjectLayout'
import siteMetadata from '@/data/siteMetadata'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {}
  }

  return {
    title: project.title,
    description: project.seoDescription || project.tagline,
    openGraph: {
      title: project.title,
      description: project.seoDescription || project.tagline,
      siteName: siteMetadata.title,
      type: 'article',
      images: project.heroImage ? [project.heroImage] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.seoDescription || project.tagline,
      images: project.heroImage ? [project.heroImage] : [],
    },
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return <ProjectLayout project={project} />
}
