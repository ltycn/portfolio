import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, Globe, Layers } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { coreSkills } from '../data';

const POSSIBILITIES = [
  { part1: 'fficiency', part2: 'ngineer' },
  { part1: 'xperiment', part2: 'ngineer' },
  { part1: 'nablement', part2: 'ngineer' },
  { part1: 'xplore', part2: 'verything' },
  { part1: 'ver', part2: 'volving' },
  { part1: 'verything', part2: 'ngineered' },
];

const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  Globe,
  Layers,
};

const Hero = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % POSSIBILITIES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const features = [
    { key: 'hero.features.performance', icon: 'Sparkles', color: 'text-cyan-400' },
    { key: 'hero.features.accessible', icon: 'Globe', color: 'text-pink-400' },
    { key: 'hero.features.scalable', icon: 'Layers', color: 'text-blue-400' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated terry.ee Title */}
          <motion.div
            layout
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap justify-center items-baseline text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-[1.2] py-4 mb-6"
          >
            {/* Fixed "terry." */}
            <motion.span layout className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
              terry.
            </motion.span>

            {/* First "e" + rotating part */}
            <motion.div layout className="flex items-baseline">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-orange-400 via-red-500 to-rose-600 transition-all duration-700 pr-2 -mr-2 pb-2 -mb-2">
                e
              </span>
              <motion.div
                layout
                className="relative h-[1.2em] overflow-hidden inline-flex items-baseline pr-2 -mr-2"
              >
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={`part1-${index}`}
                    initial={{ y: '100%', opacity: 0, scale: 0.95 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: '-100%', opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-clip-text text-transparent bg-gradient-to-b from-orange-400 via-red-500 to-rose-600 block whitespace-nowrap transition-all duration-700 pr-2 pb-2 -mb-2"
                  >
                    {POSSIBILITIES[index].part1}
                  </motion.span>
                </AnimatePresence>
              </motion.div>
            </motion.div>

            {/* Space */}
            <motion.span layout className="w-[0.2em] -ml-2" />

            {/* Second "e" + rotating part */}
            <motion.div layout className="flex items-baseline">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-orange-400 via-red-500 to-rose-600 transition-all duration-700 pr-2 -mr-2 pb-2 -mb-2">
                e
              </span>
              <motion.div
                layout
                className="relative h-[1.2em] overflow-hidden inline-flex items-baseline pr-2 -mr-2"
              >
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={`part2-${index}`}
                    initial={{ y: '100%', opacity: 0, scale: 0.95 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: '-100%', opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
                    className="bg-clip-text text-transparent bg-gradient-to-b from-orange-400 via-red-500 to-rose-600 block whitespace-nowrap transition-all duration-700 pr-2 pb-2 -mb-2"
                  >
                    {POSSIBILITIES[index].part2}
                  </motion.span>
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </motion.div>

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
