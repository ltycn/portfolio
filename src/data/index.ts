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

export const skillsList = [
  'ReactJS', 'NextJS', 'Tailwind CSS', 'Motion', 'NodeJS', 'TypeScript',
  'Python', 'ExpressJS', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Git'
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
