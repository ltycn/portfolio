import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './i18n'; // Initialize i18n
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import HireMe from './pages/HireMe';
import Snippets from './pages/Snippets';

export default function App() {
  return (
    <BrowserRouter>
      <div className="font-sans selection:bg-cyan-500/30">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/hire-me" element={<HireMe />} />
          <Route path="/snippets" element={<Snippets />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
