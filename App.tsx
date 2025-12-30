
import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ChevronRight, 
  Code, 
  Smartphone, 
  Database, 
  Layout, 
  Terminal,
  Cpu,
  Award,
  BookOpen,
  ArrowUpRight,
  Layers,
  Zap,
  ShieldCheck,
  Globe,
  Cloud,
  Menu,
  X,
  History,
  Briefcase,
  Users,
  Rocket,
  Clock,
  CheckCircle2,
  ExternalLink,
  Target,
  Trophy,
  MessageSquare,
  Sun,
  Moon
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILLS, EXPERIENCES, EDUCATION, CERTIFICATIONS, STATS } from './constants';
import AIChatAssistant from './components/AIChatAssistant';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return (savedTheme as 'light' | 'dark') || 
             (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'projects', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
      setIsMenuOpen(false);
    }
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300 selection:bg-indigo-100 dark:selection:bg-indigo-900/50 selection:text-indigo-900 dark:selection:text-indigo-200">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-40 border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-200 dark:shadow-none">
                M
              </div>
              <div className="hidden sm:block">
                <span className="font-bold text-xl tracking-tight block leading-none dark:text-white">{PERSONAL_INFO.name}</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest">Sr. Flutter Developer</span>
              </div>
            </div>

            {/* Navigation Actions */}
            <div className="flex items-center gap-2 md:gap-8">
              {/* Desktop Navigation Links */}
              <div className="hidden md:flex items-center gap-8">
                {['Home', 'Skills', 'Projects', 'Experience', 'Education'].map((item) => (
                  <button
                    key={item}
                    onClick={(e) => handleNavClick(e, item.toLowerCase())}
                    className={`text-sm font-bold transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 ${
                      activeSection === item.toLowerCase() ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              {/* Theme Toggle & Hire Me (Desktop & Mobile) */}
              <div className="flex items-center gap-2 md:gap-4">
                <button
                  onClick={toggleTheme}
                  className="p-2.5 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
                  aria-label="Toggle Theme"
                >
                  {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                </button>

                {/* Hire Me Button - Always visible in header */}
                <button
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="bg-indigo-600 text-white px-4 md:px-6 py-2.5 rounded-full text-xs md:text-sm font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 dark:shadow-none active:scale-95 flex items-center gap-2 group"
                >
                  <Briefcase size={16} className="group-hover:rotate-12 transition-transform shrink-0" />
                  <span className="hidden sm:inline">Hire Me</span>
                  <span className="sm:hidden">Hire</span>
                </button>

                {/* Mobile Menu Toggle */}
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)} 
                  className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 animate-in slide-in-from-top-2 duration-200 shadow-xl transition-colors">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {['Home', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={(e) => handleNavClick(e, item.toLowerCase())}
                  className={`block w-full text-left px-4 py-3 text-base font-bold rounded-lg transition-colors ${
                    activeSection === item.toLowerCase() 
                      ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400' 
                      : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="pt-32 pb-12 px-4 overflow-hidden scroll-mt-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-8 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-black shadow-sm border border-indigo-100 dark:border-indigo-800 uppercase tracking-widest">
                <Target size={14} className="animate-pulse" />
                <span>Open for Technical Leadership Roles</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-tight tracking-tight">
                Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">Scalable Mobile</span> Ecosystems.
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-medium">
                {PERSONAL_INFO.summary}
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <button
                  onClick={(e) => handleNavClick(e, 'projects')}
                  className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 dark:shadow-none group active:scale-95"
                >
                  Explore Portfolio
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center gap-4 px-2">
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-2xl transition-all border border-slate-200 dark:border-slate-800 hover:border-indigo-100 dark:hover:border-indigo-800 shadow-sm hover:shadow-md"><Linkedin size={24} /></a>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="p-4 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-2xl transition-all border border-slate-200 dark:border-slate-800 hover:border-indigo-100 dark:hover:border-indigo-800 shadow-sm hover:shadow-md"><Mail size={24} /></a>
                </div>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative z-10 w-full aspect-square max-w-md mx-auto rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800 group">
                <img 
                  src={PERSONAL_INFO.profileImage} 
                  alt={PERSONAL_INFO.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-600 rounded-3xl -z-10 animate-pulse hidden md:block opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-slate-200 dark:bg-slate-800 rounded-full -z-10 hidden md:block opacity-50"></div>
            </div>
          </div>
        </section>

        {/* Dynamic Stats Section */}
        <section className="py-16 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 px-4 transition-colors">
          <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-5 gap-8">
            {STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-1">
                <h4 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tighter">{stat.value}</h4>
                <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Expertise */}
        <section id="skills" className="py-24 bg-white dark:bg-slate-950 px-4 scroll-mt-20 transition-colors">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight dark:text-white">Technical <span className="text-indigo-600 dark:text-indigo-400">Arsenal</span></h2>
              <p className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-sm">Frameworks, Tools & Architectures</p>
              <div className="h-2 w-24 bg-indigo-600 dark:bg-indigo-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SKILLS.map((category, idx) => (
                <div key={idx} className="bg-slate-50 dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-700 hover:bg-white dark:hover:bg-slate-800/50 hover:shadow-xl dark:hover:shadow-indigo-900/10 transition-all duration-500 group">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      {idx === 0 ? <Smartphone size={24} /> : idx === 1 ? <Layers size={24} /> : <Cpu size={24} />}
                    </div>
                    <h3 className="text-xl font-black tracking-tight dark:text-white">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 shadow-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Projects Section */}
        <section id="projects" className="py-24 px-4 bg-slate-50 dark:bg-slate-900 scroll-mt-20 transition-colors">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-black dark:text-white">Strategic <span className="text-indigo-600 dark:text-indigo-400">Projects</span></h2>
              <p className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-sm">High-Impact Mobile & Backend Solutions</p>
              <div className="h-2 w-24 bg-indigo-600 dark:bg-indigo-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {PROJECTS.map((project) => (
                <div key={project.id} className="bg-white dark:bg-slate-950 rounded-[3rem] overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col group hover:shadow-2xl dark:hover:shadow-indigo-500/5 transition-all duration-500 hover:-translate-y-2">
                  <div className="h-72 relative overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent p-10 flex flex-col justify-end">
                      <div className="flex gap-4">
                        {project.androidUrl && (
                          <a href={project.androidUrl} target="_blank" rel="noopener noreferrer" className="bg-white/20 backdrop-blur-md text-white p-3 rounded-2xl hover:bg-white hover:text-indigo-600 transition-all active:scale-90">
                            <Smartphone size={20} />
                          </a>
                        )}
                        {project.iosUrl && (
                          <a href={project.iosUrl} target="_blank" rel="noopener noreferrer" className="bg-white/20 backdrop-blur-md text-white p-3 rounded-2xl hover:bg-white hover:text-indigo-600 transition-all active:scale-90">
                            <Globe size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="p-10 space-y-6">
                    <div>
                      <h3 className="text-3xl font-black mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors dark:text-white">{project.title}</h3>
                      <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{project.description}</p>
                    </div>
                    {project.impact && (
                      <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-2xl border border-indigo-100 dark:border-indigo-800">
                        <p className="text-indigo-900 dark:text-indigo-200 text-sm font-bold">Impact: <span className="font-medium text-slate-700 dark:text-slate-300">{project.impact}</span></p>
                      </div>
                    )}
                    <ul className="space-y-2">
                      {project.achievements?.map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400 font-medium">
                          <CheckCircle2 size={16} className="text-indigo-600 dark:text-indigo-400 mt-0.5 shrink-0" />
                          {ach}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.techStack.map((tech, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-lg">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 bg-white dark:bg-slate-950 px-4 scroll-mt-20 transition-colors">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-20">
              <h2 className="text-4xl md:text-5xl font-black dark:text-white">Professional <span className="text-indigo-600 dark:text-indigo-400">Journey</span></h2>
              <p className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-sm">Building Production-Grade Platforms</p>
              <div className="h-2 w-24 bg-indigo-600 dark:bg-indigo-500 mx-auto rounded-full"></div>
            </div>

            <div className="max-w-5xl mx-auto space-y-12">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="relative group">
                  <div className="p-10 rounded-[3rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm group-hover:shadow-2xl dark:group-hover:shadow-indigo-500/5 group-hover:border-indigo-100 dark:group-hover:border-indigo-900 transition-all duration-500 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-indigo-600 dark:bg-indigo-500"></div>
                    <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
                      <div>
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">{exp.role}</h3>
                        <p className="text-indigo-600 dark:text-indigo-400 font-black text-lg uppercase tracking-wide">
                          {exp.company} <span className="text-slate-400 dark:text-slate-500 font-medium text-sm ml-2">| {exp.location}</span>
                        </p>
                      </div>
                      <span className="text-xs font-black px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 rounded-full text-indigo-600 dark:text-indigo-300 uppercase tracking-widest">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-4">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-500 shrink-0"></div>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section id="education" className="py-24 bg-slate-50 dark:bg-slate-900 px-4 scroll-mt-20 transition-colors">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="space-y-4 mb-10">
                <h2 className="text-3xl font-black dark:text-white">Academic <span className="text-indigo-600 dark:text-indigo-400">Roots</span></h2>
                <div className="h-1.5 w-16 bg-indigo-600 dark:bg-indigo-500 rounded-full"></div>
              </div>
              <div className="space-y-6">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="bg-white dark:bg-slate-950 p-8 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-800 flex items-center gap-6 group hover:shadow-lg dark:hover:shadow-indigo-500/5 transition-all">
                    <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0 group-hover:bg-indigo-600 dark:group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                      <Award size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl font-black tracking-tight dark:text-white">{edu.degree}</h3>
                      <p className="text-slate-500 dark:text-slate-400 font-bold text-sm mb-1">{edu.institution}</p>
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">{edu.year}</span>
                        <span className="text-slate-400 dark:text-slate-500 font-black text-[10px] uppercase tracking-tighter">Score: {edu.score}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="space-y-4 mb-10">
                <h2 className="text-3xl font-black dark:text-white">Professional <span className="text-indigo-600 dark:text-indigo-400">Badges</span></h2>
                <div className="h-1.5 w-16 bg-indigo-600 dark:bg-indigo-500 rounded-full"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CERTIFICATIONS.map((cert, idx) => (
                  <div key={idx} className="bg-white dark:bg-slate-950 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800 flex flex-col justify-center items-center text-center group hover:border-indigo-200 dark:hover:border-indigo-700 transition-all">
                    <Trophy className="text-indigo-600 dark:text-indigo-400 mb-3 group-hover:scale-110 transition-transform" size={24} />
                    <h4 className="font-black text-sm mb-1 dark:text-white">{cert.title}</h4>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 bg-indigo-900 dark:bg-slate-900 text-white px-4 relative overflow-hidden scroll-mt-20 border-t border-slate-800 transition-colors">
          <div className="max-w-7xl mx-auto relative z-10 text-center space-y-12">
            <h2 className="text-5xl md:text-8xl font-black leading-none tracking-tighter">
              Let's Scale <span className="text-indigo-400 dark:text-indigo-500 italic">Together.</span>
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 pt-8">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="group flex flex-col items-center gap-4">
                <div className="w-20 h-20 bg-white/10 dark:bg-slate-800 rounded-[2rem] flex items-center justify-center group-hover:bg-white dark:group-hover:bg-indigo-600 group-hover:text-indigo-900 dark:group-hover:text-white transition-all shadow-xl backdrop-blur-md">
                  <Mail size={36} />
                </div>
                <span className="text-2xl font-black tracking-tight">{PERSONAL_INFO.email}</span>
              </a>
              <div className="h-12 w-px bg-white/10 hidden md:block"></div>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-4">
                <div className="w-20 h-20 bg-white/10 dark:bg-slate-800 rounded-[2rem] flex items-center justify-center group-hover:bg-white dark:group-hover:bg-indigo-600 group-hover:text-indigo-900 dark:group-hover:text-white transition-all shadow-xl backdrop-blur-md">
                  <Linkedin size={36} />
                </div>
                <span className="text-2xl font-black tracking-tight">LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-16 bg-white dark:bg-slate-950 text-slate-500 dark:text-slate-400 px-4 border-t border-slate-100 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-black text-lg">M</div>
            <span className="font-black text-slate-900 dark:text-white text-xl tracking-tighter">{PERSONAL_INFO.name}</span>
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 dark:text-slate-700">© {new Date().getFullYear()} Senior Flutter Developer Portfolio</p>
          <div className="flex gap-6">
             <a href={PERSONAL_INFO.gitlab} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"><Github size={20} /></a>
             <a href={PERSONAL_INFO.linkedin} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
      </footer>

      <AIChatAssistant />
    </div>
  );
};

export default App;
