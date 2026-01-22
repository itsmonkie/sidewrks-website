import { Experiment, ExperimentStatus } from '@/content/projects/types'

interface ProjectExperimentsProps {
  experiments: Experiment[]
}

const statusConfig: Record<ExperimentStatus, { label: string; className: string }> = {
  active: {
    label: 'Active',
    className: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  },
  completed: {
    label: 'Completed',
    className: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  },
  abandoned: {
    label: 'Abandoned',
    className: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
  },
}

export default function ProjectExperiments({ experiments }: ProjectExperimentsProps) {
  if (experiments.length === 0) {
    return null
  }

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        Experiments
      </h2>
      <div className="space-y-4">
        {experiments.map((experiment, index) => {
          const config = statusConfig[experiment.status]
          return (
            <div key={index} className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  {experiment.title}
                </h3>
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${config.className}`}
                >
                  {config.label}
                </span>
              </div>
              <p className="mt-2 text-gray-600 dark:text-gray-400">{experiment.description}</p>
              <div className="border-primary-500 mt-3 rounded border-l-4 bg-gray-50 py-2 pl-3 dark:bg-gray-800">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-medium text-gray-900 dark:text-gray-100">
                    Signal looking for:{' '}
                  </span>
                  {experiment.signalLookingFor}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
