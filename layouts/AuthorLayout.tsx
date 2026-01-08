import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, occupation, company, email, twitter, bluesky, linkedin, github } = content

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 pt-8 pb-8">
          <div className="mb-6">
            <h3 className="pb-2 text-2xl leading-8 font-bold tracking-tight">{name}</h3>
            {(occupation || company) && (
              <div className="space-y-1 text-gray-600 dark:text-gray-400">
                {occupation && <div>{occupation}</div>}
                {company && <div>{company}</div>}
              </div>
            )}
            <div className="flex space-x-3 pt-4">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="x" href={twitter} />
              <SocialIcon kind="bluesky" href={bluesky} />
            </div>
          </div>
          <div className="prose dark:prose-invert max-w-none">{children}</div>
        </div>
      </div>
    </>
  )
}
