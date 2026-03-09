import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Resume() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-32 px-6 max-w-7xl mx-auto mb-20 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white">
        {t('nav.resume')}
      </h2>
      <div className="w-full max-w-5xl aspect-[1/1.4] bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-xl">
        <iframe
          src="/resume.pdf"
          className="w-full h-full"
          title="Resume PDF"
        />
      </div>
    </div>
  );
}
