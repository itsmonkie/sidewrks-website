import { Project } from '@/content/projects/types'

interface ProjectHonestFramingProps {
  honestFraming: Project['honestFraming']
}

export default function ProjectHonestFraming({ honestFraming }: ProjectHonestFramingProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        Honest Framing
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
          <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">What it is</h3>
          <p className="text-gray-600 dark:text-gray-400">{honestFraming.whatItIs}</p>
        </div>
        {honestFraming.whatItIsNot && (
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">What it's not</h3>
            <p className="text-gray-600 dark:text-gray-400">{honestFraming.whatItIsNot}</p>
          </div>
        )}
      </div>
    </section>
  )
}
