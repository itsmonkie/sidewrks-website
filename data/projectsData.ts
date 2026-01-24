interface Project {
  title: string
  description: string
  status: 'idea' | 'building' | 'live' | 'paused' | 'killed'
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'rcordr',
    description:
      'A lightweight tool for recording activity, outcomes, and metrics, and tracking progress against goals.',
    status: 'building',
    href: 'https://rcordr.com',
  },
  {
    title: 'Build on Record',
    description:
      'A simple decision log for recording decisions, commitments, and outcomes over time. Designed to make progress and thinking visible, privately or in public.',
    status: 'building',
    href: 'https://buildonrecord.com',
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
