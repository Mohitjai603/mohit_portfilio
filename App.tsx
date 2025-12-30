
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
  CheckCircle2
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILLS, EXPERIENCES, EDUCATION } from './constants';
import AIChatAssistant from './components/AIChatAssistant';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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

  const stats = [
    { label: 'Years of Experience', value: '6+', icon: <Clock className="text-indigo-600" size={24} /> },
    { label: 'Apps Delivered', value: '13+', icon: <Rocket className="text-indigo-600" size={24} /> },
    { label: 'Projects Completed', value: '22+', icon: <CheckCircle2 className="text-indigo-600" size={24} /> },
    { label: 'Happy Clients', value: '9+', icon: <Users className="text-indigo-600" size={24} /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-40 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-200">
                M
              </div>
              <span className="font-bold text-xl tracking-tight hidden sm:block">{PERSONAL_INFO.name}</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {['Home', 'Skills', 'Projects', 'Experience', 'Education'].map((item) => (
                <button
                  key={item}
                  onClick={(e) => handleNavClick(e, item.toLowerCase())}
                  className={`text-sm font-semibold transition-colors hover:text-indigo-600 ${
                    activeSection === item.toLowerCase() ? 'text-indigo-600' : 'text-slate-600'
                  }`}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={(e) => handleNavClick(e, 'contact')}
                className="bg-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 active:scale-95"
              >
                Hire Me
              </button>
            </div>

            {/* Mobile Header Actions */}
            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={(e) => handleNavClick(e, 'contact')}
                className="bg-indigo-600 text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-indigo-700 transition-all shadow-md active:scale-95"
              >
                Hire Me
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 animate-in slide-in-from-top-2 duration-200 shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {['Home', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={(e) => handleNavClick(e, item.toLowerCase())}
                  className="block w-full text-left px-4 py-3 text-base font-semibold text-slate-600 hover:text-indigo-600 hover:bg-slate-50 rounded-lg"
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
        <section id="home" className="pt-32 pb-12 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-8 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-bold animate-pulse shadow-sm border border-indigo-100">
                <Zap size={16} fill="currentColor" />
                <span>Available for New Projects</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight tracking-tight">
                Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Mobile Experiences</span> That Matter.
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl leading-relaxed font-medium">
                {PERSONAL_INFO.summary}
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <button
                  onClick={(e) => handleNavClick(e, 'projects')}
                  className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 group active:scale-95"
                >
                  View My Work
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center gap-4 px-2">
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-2xl transition-all border border-slate-200 hover:border-indigo-100 shadow-sm hover:shadow-md"><Linkedin size={24} /></a>
                  <a href={PERSONAL_INFO.gitlab} target="_blank" rel="noopener noreferrer" className="p-4 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-2xl transition-all border border-slate-200 hover:border-indigo-100 shadow-sm hover:shadow-md"><Github size={24} /></a>
                </div>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative z-10 w-full aspect-square max-w-md mx-auto rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
                <img 
                  src={PERSONAL_INFO.profileImage} 
                  alt={PERSONAL_INFO.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-600 rounded-3xl -z-10 animate-pulse hidden md:block"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-slate-200 rounded-full -z-10 hidden md:block"></div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-12 bg-white border-y border-slate-100 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-2 group">
                <div className="p-3 bg-indigo-50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <h4 className="text-3xl md:text-4xl font-black text-slate-900">{stat.value}</h4>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Expertise - Bento Layout */}
        <section id="skills" className="py-24 bg-white px-4 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">Technical <span className="text-indigo-600">Expertise</span></h2>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Specialized Skillset & Architecture Mastery</p>
              <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full shadow-lg shadow-indigo-100"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[240px]">
              {/* Core Master Card - Flutter & Dart */}
              <div className="md:col-span-8 md:row-span-2 group relative overflow-hidden bg-gradient-to-br from-indigo-600 to-violet-700 rounded-[2.5rem] p-10 text-white shadow-2xl shadow-indigo-200 hover:-translate-y-2 transition-all duration-500">
                <div className="absolute top-0 right-0 p-12 opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-700">
                  <Smartphone size={240} />
                </div>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl">
                      <Zap size={32} className="text-white" />
                    </div>
                    <h3 className="text-3xl font-black">Mobile Mastery</h3>
                  </div>
                  <p className="text-indigo-100 text-lg font-medium max-w-lg mb-auto leading-relaxed">
                    Senior-level expertise in Flutter & Dart, building highly performant applications with clean architecture and advanced state management.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-8">
                    {['Flutter (iOS/Android)', 'Dart', 'GetX', 'Bloc', 'Provider', 'Riverpod'].map(skill => (
                      <span key={skill} className="px-5 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-sm font-black uppercase tracking-wider hover:bg-white hover:text-indigo-600 transition-all cursor-default shadow-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Backend Card */}
              <div className="md:col-span-4 md:row-span-1 group bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-xl hover:-translate-y-2 transition-all duration-500 border border-slate-800 flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-indigo-500/20 rounded-xl">
                    <Database size={24} className="text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-black">Back-End & Data</h3>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {SKILLS.find(s => s.title.includes('Back-End'))?.skills.map(skill => (
                    <span key={skill} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* DevOps Card */}
              <div className="md:col-span-4 md:row-span-1 group bg-white rounded-[2.5rem] p-8 text-slate-900 shadow-xl border border-slate-100 hover:-translate-y-2 transition-all duration-500 flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-indigo-50 rounded-xl">
                    <Cloud size={24} className="text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-black">Cloud & DevOps</h3>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {SKILLS.find(s => s.title.includes('DevOps'))?.skills.map(skill => (
                    <span key={skill} className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold text-slate-500 uppercase">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages Card */}
              <div className="md:col-span-6 md:row-span-1 group bg-indigo-50 rounded-[2.5rem] p-8 text-indigo-900 shadow-xl border border-indigo-100 hover:-translate-y-2 transition-all duration-500 flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    <Code size={24} className="text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-black">Programming Languages</h3>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {SKILLS.find(s => s.title.includes('Programming'))?.skills.map(skill => (
                    <span key={skill} className="px-4 py-2 bg-white rounded-xl text-sm font-bold text-indigo-600 shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Web Card */}
              <div className="md:col-span-6 md:row-span-1 group bg-white rounded-[2.5rem] p-8 text-slate-900 shadow-xl border border-slate-100 hover:-translate-y-2 transition-all duration-500 flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-slate-50 rounded-xl">
                    <Layout size={24} className="text-slate-600" />
                  </div>
                  <h3 className="text-xl font-black">Web Development</h3>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {['React Js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'].map(skill => (
                    <span key={skill} className="px-4 py-2 bg-slate-50 rounded-xl text-sm font-bold text-slate-600 border border-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-4 bg-slate-50 scroll-mt-20">
          <div className="max-w-7xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-black">Featured <span className="text-indigo-600">Projects</span></h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Real-world impacts and digital solutions</p>
            <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full"></div>
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PROJECTS.map((project) => (
              <div key={project.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-200 flex flex-col group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <div className="flex gap-4">
                      {project.androidUrl && (
                        <a href={project.androidUrl} target="_blank" rel="noopener noreferrer" className="bg-white text-indigo-600 p-3 rounded-2xl hover:bg-indigo-600 hover:text-white transition-all shadow-xl active:scale-90">
                          <Smartphone size={24} />
                        </a>
                      )}
                      {project.iosUrl && (
                        <a href={project.iosUrl} target="_blank" rel="noopener noreferrer" className="bg-white text-indigo-600 p-3 rounded-2xl hover:bg-indigo-600 hover:text-white transition-all shadow-xl active:scale-90">
                          <Globe size={24} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-black mb-4 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
                  <p className="text-slate-500 text-sm mb-6 line-clamp-3 leading-relaxed font-medium">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="text-[11px] font-black uppercase tracking-widest px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-xl border border-indigo-100">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Work History Section */}
        <section id="experience" className="py-24 bg-white px-4 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-20">
              <h2 className="text-4xl md:text-5xl font-black">Work <span className="text-indigo-600">History</span></h2>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">A professional journey of building and leading</p>
              <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full"></div>
            </div>

            <div className="max-w-5xl mx-auto relative">
              {/* Central Timeline Thread */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-600 via-indigo-200 to-transparent -translate-x-1/2 rounded-full opacity-30"></div>
              
              <div className="space-y-16">
                {EXPERIENCES.map((exp, idx) => (
                  <div key={idx} className="relative group">
                    {/* Year/Period Bubble */}
                    <div className="hidden md:flex absolute left-1/2 -top-10 items-center justify-center -translate-x-1/2 z-20">
                      <div className="px-6 py-2 bg-indigo-600 text-white rounded-full text-xs font-black shadow-lg shadow-indigo-100 uppercase tracking-widest">
                        {exp.period}
                      </div>
                    </div>

                    <div className={`flex flex-col md:flex-row items-center gap-12 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      {/* Experience Card */}
                      <div className="flex-1 w-full">
                        <div className="p-10 rounded-[3rem] bg-white border border-slate-100 shadow-xl group-hover:shadow-2xl group-hover:border-indigo-100 transition-all duration-500 group-hover:-translate-y-2 relative overflow-hidden">
                          <div className="absolute top-0 left-0 w-2 h-full bg-indigo-600"></div>
                          <div className="flex flex-col sm:flex-row justify-between items-start mb-8 gap-4">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <Briefcase className="text-indigo-600" size={20} />
                                <h3 className="text-2xl font-black text-slate-900 tracking-tight">{exp.role}</h3>
                              </div>
                              <p className="text-indigo-600 font-black text-lg flex items-center gap-2 uppercase tracking-wide">
                                @ {exp.company}
                              </p>
                            </div>
                            <span className="md:hidden text-xs font-black px-4 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600">
                              {exp.period}
                            </span>
                          </div>
                          <ul className="grid grid-cols-1 gap-4">
                            {exp.responsibilities.map((resp, rIdx) => (
                              <li key={rIdx} className="flex items-start gap-4 text-sm text-slate-600 leading-relaxed font-medium">
                                <div className="mt-1.5 w-2 h-2 rounded-full bg-indigo-600 shrink-0 shadow-[0_0_8px_rgba(79,70,229,0.5)]"></div>
                                {resp}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Timeline Central Icon */}
                      <div className="hidden md:flex absolute left-1/2 top-1/2 w-12 h-12 bg-white border-4 border-indigo-600 rounded-2xl -translate-x-1/2 -translate-y-1/2 z-10 shadow-xl shadow-indigo-100 items-center justify-center group-hover:scale-125 transition-transform duration-500 bg-white">
                        <History className="text-indigo-600" size={20} />
                      </div>

                      {/* Spacer for side content */}
                      <div className="flex-1 hidden md:block">
                        <div className={`flex flex-col ${idx % 2 === 0 ? 'items-end text-right' : 'items-start text-left'}`}>
                          <p className="text-slate-300 font-black text-6xl opacity-20 select-none">0{idx + 1}</p>
                          <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px] mt-2">Career Milestone</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-24 bg-slate-50 px-4 scroll-mt-20">
          <div className="max-w-7xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-black">Academic <span className="text-indigo-600">Base</span></h2>
            <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-200 flex items-center gap-8 hover:shadow-xl transition-all duration-500 group">
                <div className="w-20 h-20 bg-indigo-50 rounded-[2rem] flex items-center justify-center text-indigo-600 shrink-0 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-500">
                  <Award size={40} />
                </div>
                <div>
                  <h3 className="text-2xl font-black tracking-tight">{edu.degree}</h3>
                  <p className="text-slate-500 font-bold mb-3">{edu.institution}</p>
                  <div className="flex items-center gap-4">
                    <span className="font-black text-xs text-indigo-600 bg-indigo-50 px-3 py-1 rounded-lg border border-indigo-100 uppercase tracking-widest">{edu.year}</span>
                    <span className="text-slate-400 font-black text-xs uppercase tracking-tighter">Result: {edu.score}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section - Clean Direct Layout */}
        <section id="contact" className="py-32 bg-indigo-900 text-white px-4 relative overflow-hidden scroll-mt-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-800 rounded-full blur-[120px] -mr-48 -mt-48 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-800 rounded-full blur-[120px] -ml-48 -mb-48 opacity-30"></div>
          
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <div className="max-w-4xl mx-auto space-y-12">
              <h2 className="text-5xl md:text-8xl font-black leading-none tracking-tighter">
                Let's <span className="text-indigo-400">Scale</span> Your Next Mobile Vision.
              </h2>
              <p className="text-indigo-100 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto">
                Available for strategic roles, technical consulting, and architecting world-class Flutter solutions.
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 pt-8">
                <a href={`mailto:${PERSONAL_INFO.email}`} className="group flex flex-col items-center gap-4 transition-transform hover:scale-105">
                  <div className="w-20 h-20 bg-white/10 rounded-[2rem] flex items-center justify-center group-hover:bg-white group-hover:text-indigo-900 transition-all shadow-xl backdrop-blur-md">
                    <Mail size={36} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-[0.3em] text-indigo-300 font-black mb-1">Email Me</span>
                    <span className="text-2xl font-black tracking-tight">{PERSONAL_INFO.email}</span>
                  </div>
                </a>
                
                <div className="h-16 w-px bg-white/10 hidden md:block"></div>
                
                <a href={`tel:${PERSONAL_INFO.phone}`} className="group flex flex-col items-center gap-4 transition-transform hover:scale-105">
                  <div className="w-20 h-20 bg-white/10 rounded-[2rem] flex items-center justify-center group-hover:bg-white group-hover:text-indigo-900 transition-all shadow-xl backdrop-blur-md">
                    <Phone size={36} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-[0.3em] text-indigo-300 font-black mb-1">Call Me</span>
                    <span className="text-2xl font-black tracking-tight">{PERSONAL_INFO.phone}</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-16 bg-white text-slate-500 px-4 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="space-y-4">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-xl">M</div>
              <span className="font-black text-slate-900 text-2xl tracking-tighter">{PERSONAL_INFO.name}</span>
            </div>
            <p className="text-sm font-bold uppercase tracking-widest text-slate-400">© {new Date().getFullYear()} Senior Flutter Developer Portfolio</p>
          </div>
          
          <div className="flex gap-4">
             <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-50 hover:bg-indigo-600 hover:text-white rounded-[1.5rem] text-slate-400 transition-all border border-slate-100 shadow-sm"><Linkedin size={24} /></a>
             <a href={PERSONAL_INFO.gitlab} target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-50 hover:bg-indigo-600 hover:text-white rounded-[1.5rem] text-slate-400 transition-all border border-slate-100 shadow-sm"><Github size={24} /></a>
          </div>
        </div>
      </footer>

      {/* Persistent AI Chat Assistant Component */}
      <AIChatAssistant />
    </div>
  );
};

export default App;
