import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { hireMePoints, lookForPoints } from '../data';

export default function HireMe() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-32 px-6 max-w-4xl mx-auto mb-32">
      <div className="text-center mb-16">
        <span className="text-sm font-bold uppercase tracking-widest text-white/50 mb-4 block">
          {t('hire.title1')} {t('hire.title2')}
        </span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
          {t('hire.subtitle')}
        </h2>
        <div className="text-left text-white/70 text-lg leading-relaxed space-y-6 mt-12 max-w-3xl mx-auto">
          <p>{t('hire.intro')}</p>
          <p>{t('hire.intro2')}</p>
        </div>
      </div>

      <div className="space-y-12 mt-20">
        {hireMePoints.map((point, index) => (
          <motion.div
            key={point.titleKey}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex gap-6 items-start"
          >
            <div className="text-4xl shrink-0 bg-white/5 p-4 rounded-2xl border border-white/10">
              {point.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{t(point.titleKey)}</h3>
              <p className="text-white/60 text-lg leading-relaxed">{t(point.descKey)}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-32">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-16 text-center">
          {t('hire.lookForTitle')}
        </h2>
        <div className="space-y-12">
          {lookForPoints.map((point, index) => (
            <motion.div
              key={point.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6 items-start"
            >
              <div className="text-4xl shrink-0 bg-white/5 p-4 rounded-2xl border border-white/10">
                {point.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{t(point.titleKey)}</h3>
                <p className="text-white/60 text-lg leading-relaxed">{t(point.descKey)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-32 glass p-12 rounded-3xl text-center border-t border-white/10">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
          {t('hire.connect')}
        </h2>
        <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          {t('hire.connectDesc')}
        </p>
        <a
          href="mailto:hello@example.com"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-400 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform"
        >
          hello@example.com
        </a>
      </div>
    </div>
  );
}
