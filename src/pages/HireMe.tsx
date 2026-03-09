import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface Point {
  title: string;
  desc: string;
  icon: string;
}

export default function HireMe() {
  const { t } = useTranslation();

  const hireMePoints = t('hire.hireMePoints', { returnObjects: true }) as Point[];
  const lookForPoints = t('hire.lookForPoints', { returnObjects: true }) as Point[];

  return (
    <div className="min-h-screen pt-32 px-6 max-w-3xl mx-auto mb-32">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
          {t('hire.title1')} {t('hire.title2')}
        </h1>
        <div className="text-white/80 text-lg leading-relaxed space-y-6">
          <p>{t('hire.subtitle')}</p>
          <p>{t('hire.intro')}</p>
          <p>{t('hire.intro2')}</p>
        </div>
      </div>

      <div className="space-y-6 mt-12">
        {hireMePoints.map((point, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="text-white/80 text-lg leading-relaxed"
          >
            {point.icon} <strong className="text-white">{point.title}.</strong> {point.desc}
          </motion.p>
        ))}
      </div>

      <div className="mt-20">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
          {t('hire.lookForTitle')}
        </h2>
        <div className="space-y-6">
          {lookForPoints.map((point, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="text-white/80 text-lg leading-relaxed"
            >
              {point.icon} <strong className="text-white">{point.title}.</strong> {point.desc}
            </motion.p>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
          {t('hire.connect')}
        </h2>
        <p className="text-white/80 text-lg leading-relaxed mb-6">
          {t('hire.connectDesc')}{' '}
          <a href="mailto:hello@example.com" className="text-orange-400 hover:text-orange-300 transition-colors underline decoration-white/20 underline-offset-4">
            hello@example.com
          </a>
          {' '}{t('hire.connectOr')}{' '}
          <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors underline decoration-white/20 underline-offset-4">
            LinkedIn
          </a>.
        </p>
        <p className="text-white/80 text-lg leading-relaxed">
          {t('hire.cvDetails')}{' '}
          <Link to="/resume" className="text-orange-400 hover:text-orange-300 transition-colors underline decoration-white/20 underline-offset-4">
            {t('nav.resume')}
          </Link>.
        </p>
      </div>
    </div>
  );
}
