interface Project {
  title: string
  description: string
  status: 'idea' | 'building' | 'live' | 'paused' | 'killed'
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Build on Record',
    description:
      'A simple decision log for recording decisions, commitments, and outcomes over time. Designed to make progress and thinking visible, privately or in public.',
    status: 'building',
    href: '/projects/build-on-record',
  },
  {
    title: 'Sidewrks',
    description:
      'A quiet workspace for shipping side projects and learning from real outcomes. This site documents what gets built, paused, or killed.',
    status: 'live',
    href: '/',
  },
]

export default projectsData
