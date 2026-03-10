import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();
  const skillsList = t('skillsList', { returnObjects: true }) as string[];

  return (
    <section id="skills" className="py-20 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h6 className="text-sm font-bold tracking-[0.2em] text-white/40 uppercase mb-4">{t('skills.subtitle')}</h6>
        <h2 className="text-5xl md:text-6xl font-bold">{t('skills.title1')} <span className="text-gradient italic">{t('skills.title2')}</span></h2>
      </div>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skillsList.map((skill) => (
          <motion.div
            key={skill}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 glass px-6 py-3 rounded-2xl border border-white/10 hover:border-white/30 transition-all cursor-default"
          >
            <div className="w-5 h-5 bg-white/10 rounded-full" />
            <span className="font-medium">{skill}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
