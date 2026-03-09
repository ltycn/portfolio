import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Code, ExternalLink } from 'lucide-react';
import { snippetsList } from '../data';

export default function Snippets() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-32 px-6 max-w-7xl mx-auto mb-32">
      <div className="text-center mb-16">
        <span className="text-sm font-bold uppercase tracking-widest text-white/50 mb-4 block">
          {t('snippets.title1')} {t('snippets.title2')}
        </span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
          {t('snippets.subtitle')}
        </h2>
        <p className="text-xl text-white/60 max-w-2xl mx-auto">
          {t('snippets.desc')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
        {snippetsList.map((snippet, idx) => (
          <motion.div
            key={snippet.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="glass p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 relative group flex flex-col h-full"
          >
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white/50 hover:text-white cursor-pointer">
                <ExternalLink size={20} />
              </span>
            </div>

            <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center ${snippet.color}`}>
              <Code size={24} className={snippet.color.includes('white') ? 'text-black' : 'text-black/80'} />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 pr-8">{t(snippet.titleKey)}</h3>
            <p className="text-white/60 flex-grow">{t(snippet.descKey)}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
