import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Code2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { projects } from '../data';

interface ProjectCardProps {
  key?: string;
  titleKey: string;
  descriptionKey: string;
  image: string;
  tech: string[];
  featuresKeys: string[];
  reverse?: boolean;
}

const ProjectCard = ({ titleKey, descriptionKey, image, tech, featuresKeys, reverse = false }: ProjectCardProps) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 mb-20 group`}
    >
      <div className="lg:w-1/3 aspect-square rounded-3xl overflow-hidden glass relative">
        <img
          src={image}
          alt={t(titleKey)}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
          <button className="glass p-3 rounded-full">
            <ExternalLink size={24} />
          </button>
        </div>
      </div>

      <div className="lg:w-2/3 glass rounded-3xl p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
        {/* Decorative background gradient */}
        <div className={`absolute inset-0 opacity-10 pointer-events-none bg-gradient-to-br ${reverse ? 'from-cyan-500' : 'from-purple-500'} to-transparent`} />

        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <h3 className="text-3xl md:text-4xl font-bold">{t(titleKey)}</h3>
            <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-[10px] uppercase font-bold tracking-widest">{t('projects.featured')}</span>
          </div>

          <p className="text-white/60 text-lg mb-8 leading-relaxed">
            {t(descriptionKey)}
          </p>

          <ul className="space-y-3 mb-8">
            {featuresKeys.map((featureKey, i) => (
              <li key={i} className="flex items-start gap-3 text-white/50 text-sm">
                <div className="mt-1 text-cyan-400">
                  <Code2 size={16} />
                </div>
                {t(featureKey)}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {tech.map((t_tech) => (
              <div key={t_tech} className="flex items-center gap-2 glass px-3 py-1.5 rounded-lg text-xs font-medium">
                <div className="w-4 h-4 bg-white/10 rounded-sm" />
                {t_tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-20 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h6 className="text-sm font-bold tracking-[0.2em] text-white/40 uppercase mb-4">{t('projects.subtitle')}</h6>
        <h2 className="text-5xl md:text-6xl font-bold">{t('projects.title1')} <span className="text-gradient italic">{t('projects.title2')}</span></h2>
      </div>

      {projects.map((project, index) => (
        <ProjectCard
          key={project.titleKey}
          titleKey={project.titleKey}
          descriptionKey={project.descriptionKey}
          image={project.image}
          tech={project.tech}
          featuresKeys={project.featuresKeys}
          reverse={index % 2 !== 0}
        />
      ))}
    </section>
  );
};

export default Projects;
