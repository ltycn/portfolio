import React from 'react';
import { useTranslation } from 'react-i18next';
import { footerLinks } from '../data';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-20 border-t border-white/5 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold tracking-tighter mb-6">PORTFOLIO<span className="text-orange-500">.</span></div>
            <p className="text-white/50 max-w-md mb-8">
              {t('footer.message')}
            </p>
            <div className="inline-flex items-center gap-3 glass px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-glow" />
              <span className="text-xs font-medium text-white/70 uppercase tracking-wider">{t('footer.available')}</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-6">{t('footer.general')}</h4>
            <ul className="space-y-4 text-white/60">
              {footerLinks.general.map(item => (
                <li key={item.id} className="hover:text-white transition-colors cursor-pointer">{t(item.nameKey)}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-6">{t('footer.social')}</h4>
            <ul className="space-y-4 text-white/60">
              {footerLinks.social.map(item => (
                <li key={item.id} className="hover:text-white transition-colors cursor-pointer">{t(item.nameKey)}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/5 text-white/40 text-sm">
          <p>{t('footer.copyright')}</p>
          <div className="flex gap-8">
            <span>{t('footer.privacy')}</span>
            <span>{t('footer.terms')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
