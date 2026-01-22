import { Project } from '@/content/projects/types'
import SectionContainer from '@/components/SectionContainer'
import ProjectHeader from '@/components/project/ProjectHeader'
import ProjectHonestFraming from '@/components/project/ProjectHonestFraming'
import ProjectAudience from '@/components/project/ProjectAudience'
import ProjectCurrentState from '@/components/project/ProjectCurrentState'
import ProjectArtefacts from '@/components/project/ProjectArtefacts'
import ProjectExperiments from '@/components/project/ProjectExperiments'
import ProjectLinks from '@/components/project/ProjectLinks'
import Link from '@/components/Link'

interface ProjectLayoutProps {
  project: Project
}

export default function ProjectLayout({ project }: ProjectLayoutProps) {
  return (
    <SectionContainer>
      <article className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-8 py-8">
          <ProjectHeader project={project} />
          <ProjectHonestFraming honestFraming={project.honestFraming} />
          <ProjectAudience audience={project.audience} />
          <ProjectCurrentState
            currentState={project.currentState}
            lastUpdated={project.lastUpdated}
          />
          <ProjectArtefacts artefacts={project.artefacts} />
          <ProjectExperiments experiments={project.experiments} />
          <ProjectLinks links={project.links} />
        </div>
        <footer className="pt-8">
          <Link
            href="/projects"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >
            &larr; Back to projects
          </Link>
        </footer>
      </article>
    </SectionContainer>
  )
}
