export const navItems = [
  { nameKey: 'nav.home', path: '/' },
  { nameKey: 'nav.about', path: '/about' },
  { nameKey: 'nav.projects', path: '/projects' },
  { nameKey: 'nav.hireMe', path: '/hire-me' },
  { nameKey: 'nav.snippets', path: '/snippets' }
];

export const coreSkills = [
  'TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS'
];

export const heroFeatures = [
  { key: 'hero.features.performance', icon: 'Sparkles', color: 'text-cyan-400' },
  { key: 'hero.features.accessible', icon: 'Globe', color: 'text-pink-400' },
  { key: 'hero.features.scalable', icon: 'Layers', color: 'text-blue-400' }
];

export const projects = [
  {
    titleKey: 'projects.cloudDrive.title',
    descriptionKey: 'projects.cloudDrive.description',
    image: 'https://picsum.photos/seed/drive/800/800',
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'AWS S3'],
    featuresKeys: [
      'projects.features.search',
      'projects.features.sync',
      'projects.features.security'
    ]
  },
  {
    titleKey: 'projects.messengerPro.title',
    descriptionKey: 'projects.messengerPro.description',
    image: 'https://picsum.photos/seed/chat/800/800',
    tech: ['React', 'Socket.io', 'Node.js', 'Redis'],
    featuresKeys: [
      'projects.features.search',
      'projects.features.sync',
      'projects.features.security'
    ]
  },
];

export const repositories = [
  {
    titleKey: 'projects.messengerPro.title',
    descriptionKey: 'projects.messengerPro.description',
    tech: 'TypeScript',
    url: 'https://github.com/example/messenger'
  },
  {
    titleKey: 'projects.cloudDrive.title',
    descriptionKey: 'projects.cloudDrive.description',
    tech: 'JavaScript',
    url: 'https://github.com/example/drive'
  },
  {
    titleKey: 'projects.ats.title',
    descriptionKey: 'projects.ats.description',
    tech: 'JavaScript',
    url: 'https://github.com/example/ats'
  },
  {
    titleKey: 'projects.projectsTeam.title',
    descriptionKey: 'projects.projectsTeam.description',
    tech: 'JavaScript',
    url: 'https://github.com/example/projects'
  },
  {
    titleKey: 'projects.jwtAuth.title',
    descriptionKey: 'projects.jwtAuth.description',
    tech: 'TypeScript',
    url: 'https://github.com/example/jwt'
  },
  {
    titleKey: 'projects.nextBoilerplate.title',
    descriptionKey: 'projects.nextBoilerplate.description',
    tech: 'TypeScript',
    url: 'https://github.com/example/boilerplate'
  }
];

export const skillsList = [
  'ReactJS', 'NextJS', 'Tailwind CSS', 'Motion', 'NodeJS', 'TypeScript',
  'Python', 'ExpressJS', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Git'
];

export const workExperience = [
  {
    companyKey: 'about.experience.company1',
    roleKey: 'about.experience.role1',
    dateKey: 'about.experience.date1',
    locationKey: 'about.experience.location1',
    typeKey: 'about.experience.type1',
    bullets: ['about.experience.bullet1_1', 'about.experience.bullet1_2', 'about.experience.bullet1_3'],
    tech: ['React', 'Next.js', 'TypeScript', 'MongoDB', 'Python', 'FastAPI', 'Docker']
  },
  {
    companyKey: 'about.experience.company2',
    roleKey: 'about.experience.role2',
    dateKey: 'about.experience.date2',
    locationKey: 'about.experience.location2',
    typeKey: 'about.experience.type2',
    bullets: ['about.experience.bullet2_1', 'about.experience.bullet2_2', 'about.experience.bullet2_3'],
    tech: ['React', 'Material UI', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'AWS S3']
  }
];

export const hireMePoints = [
  { titleKey: 'hire.customSoftware.title', descKey: 'hire.customSoftware.desc', icon: '🧰' },
  { titleKey: 'hire.processEnhancement.title', descKey: 'hire.processEnhancement.desc', icon: '⚙️' },
  { titleKey: 'hire.codeReview.title', descKey: 'hire.codeReview.desc', icon: '🔍' },
  { titleKey: 'hire.fullStack.title', descKey: 'hire.fullStack.desc', icon: '📚' },
  { titleKey: 'hire.designSystem.title', descKey: 'hire.designSystem.desc', icon: '📐' },
];

export const lookForPoints = [
  { titleKey: 'hire.remoteFirst.title', descKey: 'hire.remoteFirst.desc', icon: '🏡' },
  { titleKey: 'hire.asyncComm.title', descKey: 'hire.asyncComm.desc', icon: '📧' },
  { titleKey: 'hire.fewerMeetings.title', descKey: 'hire.fewerMeetings.desc', icon: '📅' },
  { titleKey: 'hire.positiveCulture.title', descKey: 'hire.positiveCulture.desc', icon: '☕' },
  { titleKey: 'hire.dataDecisions.title', descKey: 'hire.dataDecisions.desc', icon: '📊' },
  { titleKey: 'hire.workLifeBalance.title', descKey: 'hire.workLifeBalance.desc', icon: '🏞️' },
];

export const snippetsList = [
  {
    id: 'debounce',
    titleKey: 'snippets.debounce.title',
    descKey: 'snippets.debounce.desc',
    icon: 'javascript',
    color: 'bg-[#F7DF1E]'
  },
  {
    id: 'sitemap',
    titleKey: 'snippets.sitemap.title',
    descKey: 'snippets.sitemap.desc',
    icon: 'nextjs',
    color: 'bg-white'
  }
];

export const footerLinks = {
  general: [
    { nameKey: 'nav.home', path: '/' },
    { nameKey: 'nav.about', path: '/about' },
    { nameKey: 'nav.projects', path: '/projects' },
    { nameKey: 'nav.snippets', path: '/snippets' }
  ],
  specifics: [
    { nameKey: 'nav.hireMe', path: '/hire-me' },
    { nameKey: 'footer.privacy', path: '/privacy-policy' },
  ],
  social: [
    { nameKey: 'footer.twitter', path: '#' },
    { nameKey: 'footer.linkedin', path: '#' },
    { nameKey: 'footer.github', path: '#' },
    { nameKey: 'footer.instagram', path: '#' }
  ]
};
