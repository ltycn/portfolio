import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, Github, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { navItems } from '../data';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith('en') ? 'zh' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter cursor-pointer"
        >
          PORTFOLIO<span className="text-orange-500">.</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:flex items-center glass rounded-full px-2 py-1.5"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all relative ${
                activeSection === item.id ? 'text-white' : 'text-white/50 hover:text-white/80'
              }`}
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-white/10 rounded-full"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              {t(item.nameKey)}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4"
        >
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium glass rounded-full hover:bg-white/10 transition-colors"
          >
            <Globe size={16} />
            <span>{i18n.language.startsWith('en') ? 'EN' : '中'}</span>
          </button>
          <button className="p-2 glass rounded-full hover:bg-white/10 transition-colors">
            <Github size={20} />
          </button>
          <button className="md:hidden p-2 glass rounded-full">
            <Menu size={20} />
          </button>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
