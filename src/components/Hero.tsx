import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Globe, Layers } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { coreSkills } from '../data';

const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  Globe,
  Layers,
};

const Hero = () => {
  const { t } = useTranslation();

  const features = [
    { key: 'hero.features.performance', icon: 'Sparkles', color: 'text-cyan-400' },
    { key: 'hero.features.accessible', icon: 'Globe', color: 'text-pink-400' },
    { key: 'hero.features.scalable', icon: 'Layers', color: 'text-blue-400' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Blobs */}
      <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-radial-cyan opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] w-[600px] h-[600px] bg-radial-pink opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6">
            {t('hero.title1')} <br />
            {t('hero.title2')} <span className="text-gradient italic">{t('hero.title3')}</span>
          </h2>

          <p className="text-lg md:text-xl text-white/60 font-medium mb-4">
            {t('hero.greeting')} <br className="md:hidden" /> {t('hero.role')}
          </p>

          <p className="text-base md:text-lg text-white/40 max-w-2xl mx-auto mb-10">
            {t('hero.description1')} <br className="hidden md:block" />
            {t('hero.description2')}
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {coreSkills.map((skill) => (
              <span key={skill} className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-white/70">
                {skill}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-white/90 transition-all">
              {t('hero.viewProjects')}
            </button>
            <button className="w-full sm:w-auto px-8 py-4 glass rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
              {t('hero.getInTouch')} <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20 flex justify-center flex-wrap gap-4 md:gap-8"
        >
          {features.map((feature, idx) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div key={idx} className="flex items-center gap-2 glass px-4 py-2 rounded-xl">
                {IconComponent && <IconComponent size={18} className={feature.color} />}
                <span className="text-sm text-white/60">{t(feature.key)}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
