import React from 'react';
import './i18n'; // Initialize i18n
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans selection:bg-cyan-500/30">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Footer />
    </div>
  );
}
