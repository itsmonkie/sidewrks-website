import Image from '@/components/Image'
import StatusBadge from './StatusBadge'
import { Project } from '@/content/projects/types'

interface ProjectHeaderProps {
  project: Project
}

export default function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
    <header className="space-y-4">
      <div className="flex items-start gap-4">
        {project.logo && (
          <Image
            src={project.logo}
            alt={`${project.title} logo`}
            width={64}
            height={64}
            className="rounded-lg"
          />
        )}
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl leading-9 font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
              {project.title}
            </h1>
            <StatusBadge status={project.status} />
          </div>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">{project.tagline}</p>
        </div>
      </div>
      {project.heroImage && (
        <div className="mt-6">
          <Image
            src={project.heroImage}
            alt={project.title}
            width={1200}
            height={630}
            className="rounded-lg"
          />
        </div>
      )}
    </header>
  )
}
