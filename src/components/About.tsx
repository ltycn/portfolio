import React from 'react';
import { Github, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-3/5">
          <h6 className="text-sm font-bold tracking-[0.2em] text-white/40 uppercase mb-4">{t('about.subtitle')}</h6>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            {t('about.title1')} <span className="text-gradient italic">{t('about.title2')}</span>
          </h2>

          <div className="space-y-6 text-white/60 text-lg leading-relaxed">
            <p>
              <Trans i18nKey="about.intro" components={[<span className="text-white font-semibold text-xl" />]} />
            </p>
            <p>
              {t('about.p1')}
            </p>
            <p>
              {t('about.p2')}
            </p>
          </div>

          <div className="flex gap-4 mt-10">
            {[Github, Linkedin, Twitter].map((Icon, i) => (
              <button key={i} className="p-3 glass rounded-full hover:text-orange-500 transition-colors">
                <Icon size={24} />
              </button>
            ))}
          </div>

          <button className="mt-10 flex items-center gap-3 group">
            <span className="text-lg font-medium">{t('about.workExperience')}</span>
            <div className="w-10 h-10 glass rounded-full flex items-center justify-center group-hover:bg-white/10 transition-all">
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>

        <div className="lg:w-2/5 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-600 blur-3xl opacity-20" />
            <img
              src="https://picsum.photos/seed/profile/500/600"
              alt="Profile"
              className="w-full max-w-[400px] rounded-[50px] shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
