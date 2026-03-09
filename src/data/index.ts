export const navItems = [
  { nameKey: 'nav.home', id: 'home' },
  { nameKey: 'nav.projects', id: 'projects' },
  { nameKey: 'nav.skills', id: 'skills' },
  { nameKey: 'nav.about', id: 'about' },
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
    { nameKey: 'nav.home', id: 'home' },
    { nameKey: 'nav.about', id: 'about' },
    { nameKey: 'nav.projects', id: 'projects' },
    { nameKey: 'footer.snippets', id: 'snippets' }
  ],
  social: [
    { nameKey: 'footer.twitter', id: 'twitter' },
    { nameKey: 'footer.linkedin', id: 'linkedin' },
    { nameKey: 'footer.github', id: 'github' },
    { nameKey: 'footer.instagram', id: 'instagram' }
  ]
};
