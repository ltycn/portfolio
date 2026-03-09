import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Download } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  date: string;
  location: string;
  type: string;
  bullets: string[];
  tech: string[];
}

const About = () => {
  const { t } = useTranslation();

  const paragraphs = t('about.paragraphs', { returnObjects: true }) as string[];
  const experienceList = t('about.experienceList', { returnObjects: true }) as ExperienceItem[];

  return (
    <div className="min-h-screen pt-32 px-6 max-w-7xl mx-auto mb-20">
      <div className="text-center mb-16">
        <span className="text-sm font-bold uppercase tracking-widest text-white/50 mb-4 block">
          {t('about.subtitle')}
        </span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
          {t('about.title1')}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
            {t('about.title2')}
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Side: About Text & Resume */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 text-white/70 text-lg leading-relaxed"
        >
          <p className="font-medium text-white text-xl">
            {t('about.intro')}
          </p>
          {paragraphs.map((p, index) => (
            <p key={index}>{p}</p>
          ))}

          <div className="pt-8 flex gap-4">
            <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-white/90 transition-colors">
              <Download size={18} />
              {t('about.resume')}
            </button>
          </div>
        </motion.div>

        {/* Right Side: The Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="mb-10">
            <h3 className="text-3xl font-bold text-white mb-2">{t('about.theExperience')}</h3>
            <p className="text-white text-xl mb-4">{t('about.experienceDesc')}</p>
            <p className="text-white/60 text-base">{t('about.experienceSub')}</p>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
            {experienceList.map((job, index) => (
              <div key={index} className="relative flex items-start group is-active pl-12">
                <div className="absolute left-0 translate-x-[4px] flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-black text-white shadow">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                </div>

                <div className="w-full">
                  <div className="flex flex-col mb-4">
                    <span className="text-white/50 text-sm font-semibold tracking-wide mb-2">{job.date}</span>
                    <h4 className="text-2xl font-bold text-white mb-1">{job.company}</h4>
                    <div className="text-white/60 text-sm mb-4">
                      {job.location} • {job.type}
                    </div>
                    <span className="text-white font-medium mb-4">{job.role}</span>
                  </div>
                  <ul className="text-white/70 space-y-4 text-sm mb-6">
                    {job.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-white/40 mt-1">▹</span>
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {job.tech.map((tItem, i) => (
                      <span key={i} className="text-sm font-medium text-white/50">{tItem}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
