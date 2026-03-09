import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

interface FeaturedProject {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
}

interface RepositoryProject {
  title: string;
  description: string;
  tech: string;
  url: string;
}

const ProjectsComponent = () => {
  const { t } = useTranslation();

  const featuredList = t('projects.featuredList', { returnObjects: true }) as FeaturedProject[];
  const repositoriesList = t('projects.repositoriesList', { returnObjects: true }) as RepositoryProject[];

  return (
    <div className="py-20 max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <span className="text-sm font-bold uppercase tracking-widest text-white/50 mb-4 block">
          {t('projects.heroSubtitle')}
        </span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
          {t('projects.heroTitle1')}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
            {t('projects.heroTitle2')}
          </span>
        </h2>
        <p className="max-w-2xl mx-auto text-white/60 text-lg leading-relaxed">
          {t('projects.heroDesc')}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-32">
        {featuredList.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 rounded-3xl z-10" />
            <img
              src={project.image}
              alt={project.title}
              className="w-full aspect-[4/3] object-cover rounded-3xl grayscale group-hover:grayscale-0 transition-all duration-700"
            />

            <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md rounded-full text-white">
                      {t('projects.featured')}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                </div>
                <button className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 transform group-hover:-translate-y-2 group-hover:translate-x-2">
                  <ExternalLink size={20} />
                </button>
              </div>

              <p className="text-white/70 mb-6 line-clamp-2">
                {project.description}
              </p>

              <div className="flex gap-3">
                {project.tech.map(tech => (
                  <span key={tech} className="px-3 py-1 text-sm bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-white/80">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* The Repositories Section */}
      <div className="mt-20">
        <div className="text-center mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-white/50 mb-4 block">
            {t('projects.repositoriesTitle')}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
            {t('projects.repositoriesDesc')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repositoriesList.map((repo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 relative group"
            >
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <a href={repo.url} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white">
                  <ExternalLink size={20} />
                </a>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 pr-8">{repo.title}</h3>
              <p className="text-white/60 mb-8 min-h-[4rem]">{repo.description}</p>

              <div className="flex items-center gap-2 border-t border-white/10 pt-6">
                <span className="text-sm font-medium px-3 py-1 bg-white/10 rounded-full text-white/80">
                  {repo.tech}
                </span>
                <Github size={16} className="text-white/40 ml-auto" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsComponent;
