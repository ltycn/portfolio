import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './i18n'; // Initialize i18n
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundOrbs from './components/BackgroundOrbs';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import HireMe from './pages/HireMe';
import Resume from './pages/Resume';

export default function App() {
  return (
    <BrowserRouter>
      <div className="font-sans selection:bg-cyan-500/30 relative z-0">
        <BackgroundOrbs />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/hire-me" element={<HireMe />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
