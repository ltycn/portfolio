import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, Github, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navItems = t('navItems', { returnObjects: true }) as Array<{ name: string, path: string }>;

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
          className="text-2xl font-bold tracking-tighter"
        >
          <NavLink to="/">
            PORTFOLIO<span className="text-orange-500">.</span>
          </NavLink>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:flex items-center glass rounded-full px-2 py-1.5 relative"
        >
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all relative z-10 ${
                  isActive ? 'text-white' : 'text-white/50 hover:text-white/80'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-glow-slider"
                    className="absolute inset-0 bg-white/10 rounded-full z-[-1]"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-full shadow-[0_-2px_15px_8px_rgba(255,255,255,0.4)]" />
                  </motion.div>
                )}
                <span className="relative z-10">{item.name}</span>
              </NavLink>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4"
        >
          <NavLink
            to="/resume"
            className="hidden md:flex items-center gap-2 px-4 py-1.5 text-sm font-medium bg-white text-black rounded-full hover:bg-white/90 transition-colors"
          >
            {t('nav.resume')}
          </NavLink>
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
