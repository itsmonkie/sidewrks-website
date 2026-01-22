import { Project } from '@/content/projects/types'

interface ProjectAudienceProps {
  audience: Project['audience']
}

export default function ProjectAudience({ audience }: ProjectAudienceProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        Audience
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
          <h3 className="mb-2 font-semibold text-green-800 dark:text-green-200">Who it's for</h3>
          <ul className="list-inside list-disc space-y-1 text-gray-600 dark:text-gray-400">
            {audience.whoItsFor.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
          <h3 className="mb-2 font-semibold text-red-800 dark:text-red-200">Who it's not for</h3>
          <ul className="list-inside list-disc space-y-1 text-gray-600 dark:text-gray-400">
            {audience.whoItsNotFor.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
