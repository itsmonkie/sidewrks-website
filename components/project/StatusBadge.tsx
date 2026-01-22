import { ProjectStatus } from '@/content/projects/types'

interface StatusBadgeProps {
  status: ProjectStatus
}

const statusConfig: Record<ProjectStatus, { label: string; className: string }> = {
  idea: {
    label: 'Idea',
    className: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  },
  building: {
    label: 'Building',
    className: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  },
  live: {
    label: 'Live',
    className: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  },
  paused: {
    label: 'Paused',
    className: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
  },
  killed: {
    label: 'Killed',
    className: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  },
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status]

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${config.className}`}
    >
      {config.label}
    </span>
  )
}
