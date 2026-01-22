interface ProjectCurrentStateProps {
  currentState: string
  lastUpdated: string
}

export default function ProjectCurrentState({
  currentState,
  lastUpdated,
}: ProjectCurrentStateProps) {
  const formattedDate = new Date(lastUpdated).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <section className="space-y-4">
      <div className="flex items-baseline justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Current State
        </h2>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Last updated: {formattedDate}
        </span>
      </div>
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
        <p className="text-gray-700 dark:text-gray-300">{currentState}</p>
      </div>
    </section>
  )
}
