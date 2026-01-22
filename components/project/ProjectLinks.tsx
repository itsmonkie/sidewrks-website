import SocialIcon from '@/components/social-icons'
import Link from '@/components/Link'
import { ProjectLinks as ProjectLinksType } from '@/content/projects/types'

interface ProjectLinksProps {
  links: ProjectLinksType
}

export default function ProjectLinks({ links }: ProjectLinksProps) {
  const hasLinks =
    links.homepage ||
    links.github ||
    links.demo ||
    links.x ||
    links.instagram ||
    links.linkedin ||
    links.buildOnRecordLog

  if (!hasLinks) {
    return null
  }

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Links</h2>
      <div className="flex flex-wrap gap-4">
        {links.homepage && (
          <Link
            href={links.homepage}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            Homepage
          </Link>
        )}
        {links.demo && (
          <Link
            href={links.demo}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
            Demo
          </Link>
        )}
        {links.buildOnRecordLog && (
          <Link
            href={links.buildOnRecordLog}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path
                fillRule="evenodd"
                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                clipRule="evenodd"
              />
            </svg>
            Build Log
          </Link>
        )}
        <div className="flex items-center gap-3">
          <SocialIcon kind="github" href={links.github} size={6} />
          <SocialIcon kind="x" href={links.x} size={6} />
          <SocialIcon kind="instagram" href={links.instagram} size={6} />
          <SocialIcon kind="linkedin" href={links.linkedin} size={6} />
        </div>
      </div>
    </section>
  )
}
