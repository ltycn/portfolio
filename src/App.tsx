import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Linkedin, Twitter, ArrowRight, ExternalLink, Code2, Layers, Cpu, Globe, Mail, Sparkles } from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'About', id: 'about' },
  ];

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
              {item.name}
            </button>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4"
        >
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

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Blobs */}
      <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-radial-cyan opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] w-[600px] h-[600px] bg-radial-pink opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6">
            Turning business ideas <br />
            into scalable <span className="text-gradient italic">digital products</span>
          </h2>
          
          <p className="text-lg md:text-xl text-white/60 font-medium mb-4">
            Hey there! I'm Alex Chen 👋 <br className="md:hidden" /> a Full-Stack Software Engineer
          </p>
          
          <p className="text-base md:text-lg text-white/40 max-w-2xl mx-auto mb-10">
            Engineering high-performance, accessible, and scalable products <br className="hidden md:block" />
            for web and mobile ecosystems.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS'].map((skill) => (
              <span key={skill} className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-white/70">
                {skill}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-white/90 transition-all">
              View Projects
            </button>
            <button className="w-full sm:w-auto px-8 py-4 glass rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
              Get In Touch <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20 flex justify-center gap-8"
        >
          <div className="flex items-center gap-2 glass px-4 py-2 rounded-xl">
            <Sparkles size={18} className="text-cyan-400" />
            <span className="text-sm text-white/60">Performance-first</span>
          </div>
          <div className="flex items-center gap-2 glass px-4 py-2 rounded-xl">
            <Globe size={18} className="text-pink-400" />
            <span className="text-sm text-white/60">Accessible by design</span>
          </div>
          <div className="flex items-center gap-2 glass px-4 py-2 rounded-xl">
            <Layers size={18} className="text-blue-400" />
            <span className="text-sm text-white/60">Scalable systems</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  key?: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  reverse?: boolean;
}

const ProjectCard = ({ title, description, image, tech, reverse = false }: ProjectCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 mb-20 group`}
    >
      <div className="lg:w-1/3 aspect-square rounded-3xl overflow-hidden glass relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
          <button className="glass p-3 rounded-full">
            <ExternalLink size={24} />
          </button>
        </div>
      </div>
      
      <div className="lg:w-2/3 glass rounded-3xl p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
        {/* Decorative background gradient */}
        <div className={`absolute inset-0 opacity-10 pointer-events-none bg-gradient-to-br ${reverse ? 'from-cyan-500' : 'from-purple-500'} to-transparent`} />
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <h3 className="text-3xl md:text-4xl font-bold">{title}</h3>
            <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-[10px] uppercase font-bold tracking-widest">Featured</span>
          </div>
          
          <p className="text-white/60 text-lg mb-8 leading-relaxed">
            {description}
          </p>
          
          <ul className="space-y-3 mb-8">
            {['Advanced search functionality with intelligent filters', 'Real-time synchronization engine', 'Enterprise-grade security implementation'].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-white/50 text-sm">
                <div className="mt-1 text-cyan-400">
                  <Code2 size={16} />
                </div>
                {item}
              </li>
            ))}
          </ul>
          
          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <div key={t} className="flex items-center gap-2 glass px-3 py-1.5 rounded-lg text-xs font-medium">
                <div className="w-4 h-4 bg-white/10 rounded-sm" />
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Cloud Drive',
      description: 'A comprehensive cloud storage platform designed for modern teams, featuring real-time synchronization, granular sharing controls, and blazing-fast upload capabilities.',
      image: 'https://picsum.photos/seed/drive/800/800',
      tech: ['Next.js', 'TypeScript', 'MongoDB', 'AWS S3'],
    },
    {
      title: 'Messenger Pro',
      description: 'A modern real-time messaging application built for speed and reliability, featuring typing indicators, read receipts, and seamless group conversations.',
      image: 'https://picsum.photos/seed/chat/800/800',
      tech: ['React', 'Socket.io', 'Node.js', 'Redis'],
    },
  ];

  return (
    <section id="projects" className="py-20 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h6 className="text-sm font-bold tracking-[0.2em] text-white/40 uppercase mb-4">Featured Case Studies</h6>
        <h2 className="text-5xl md:text-6xl font-bold">Curated <span className="text-gradient italic">work</span></h2>
      </div>
      
      {projects.map((project, index) => (
        <ProjectCard 
          key={project.title} 
          title={project.title}
          description={project.description}
          image={project.image}
          tech={project.tech}
          reverse={index % 2 !== 0} 
        />
      ))}
    </section>
  );
};

const Skills = () => {
  const skills = [
    'ReactJS', 'NextJS', 'Tailwind CSS', 'Motion', 'NodeJS', 'TypeScript', 
    'Python', 'ExpressJS', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Git'
  ];

  return (
    <section id="skills" className="py-20 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h6 className="text-sm font-bold tracking-[0.2em] text-white/40 uppercase mb-4">Core Strengths</h6>
        <h2 className="text-5xl md:text-6xl font-bold">Competencies <span className="text-gradient italic">skills</span></h2>
      </div>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <motion.div
            key={skill}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 glass px-6 py-3 rounded-2xl border border-white/10 hover:border-white/30 transition-all cursor-default"
          >
            <div className="w-5 h-5 bg-white/10 rounded-full" />
            <span className="font-medium">{skill}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-3/5">
          <h6 className="text-sm font-bold tracking-[0.2em] text-white/40 uppercase mb-4">About Me</h6>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Software Engineer with a little bit of <span className="text-gradient italic">everything</span>
          </h2>
          
          <div className="space-y-6 text-white/60 text-lg leading-relaxed">
            <p>
              <span className="text-white font-semibold text-xl">I'm Alex Chen</span> — a driven Software Engineer with a passion for building engaging and efficient web applications. My toolkit is rooted in the JavaScript ecosystem and Python.
            </p>
            <p>
              When I'm not deep in code, I love to explore new ideas and fulfill my curiosity. I believe in balance and enjoy embracing every aspect of life.
            </p>
            <p>
              I believe each day is a fresh opportunity to grow, create, and make a difference! Every project is a chance to engineer something meaningful.
            </p>
          </div>

          <div className="flex gap-4 mt-10">
            {[Github, Linkedin, Twitter].map((Icon, i) => (
              <button key={i} className="p-3 glass rounded-full hover:text-orange-500 transition-colors">
                <Icon size={24} />
              </button>
            ))}
          </div>
          
          <button className="mt-10 flex items-center gap-3 group">
            <span className="text-lg font-medium">Work Experience</span>
            <div className="w-10 h-10 glass rounded-full flex items-center justify-center group-hover:bg-white/10 transition-all">
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>

        <div className="lg:w-2/5 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-600 blur-3xl opacity-20" />
            <img 
              src="https://picsum.photos/seed/profile/500/600" 
              alt="Profile" 
              className="w-full max-w-[400px] rounded-[50px] shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold tracking-tighter mb-6">PORTFOLIO<span className="text-orange-500">.</span></div>
            <p className="text-white/50 max-w-md mb-8">
              It was great having you here, my inbox is always open whether you have a question, a project in mind, or just want to say hi!
            </p>
            <div className="inline-flex items-center gap-3 glass px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-glow" />
              <span className="text-xs font-medium text-white/70 uppercase tracking-wider">Available for work</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-6">General</h4>
            <ul className="space-y-4 text-white/60">
              {['Home', 'About', 'Projects', 'Snippets'].map(item => (
                <li key={item} className="hover:text-white transition-colors cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-6">Social</h4>
            <ul className="space-y-4 text-white/60">
              {['Twitter', 'LinkedIn', 'Github', 'Instagram'].map(item => (
                <li key={item} className="hover:text-white transition-colors cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/5 text-white/40 text-sm">
          <p>© 2025 Alex Chen - Software Engineer</p>
          <div className="flex gap-8">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

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
