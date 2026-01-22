import Link from '@/components/Link'
import { Artefact, ArtefactType } from '@/content/projects/types'

interface ProjectArtefactsProps {
  artefacts: Artefact[]
}

const typeIcons: Record<ArtefactType, string> = {
  document: '📄',
  prototype: '🔧',
  code: '💻',
  design: '🎨',
  video: '🎬',
  other: '📎',
}

export default function ProjectArtefacts({ artefacts }: ProjectArtefactsProps) {
  if (artefacts.length === 0) {
    return null
  }

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        Artefacts
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {artefacts.map((artefact, index) => (
          <div key={index} className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-start gap-3">
              <span className="text-2xl" role="img" aria-label={artefact.type}>
                {typeIcons[artefact.type]}
              </span>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  {artefact.url ? (
                    <Link
                      href={artefact.url}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      {artefact.title}
                    </Link>
                  ) : (
                    artefact.title
                  )}
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  {artefact.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
