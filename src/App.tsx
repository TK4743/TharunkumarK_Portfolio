
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Cpu,
  Award,
  BookOpen,
  User,
  ChevronRight,
  Menu,
  X,
  MessageSquare,
  Sparkles,
  FileText,
  Search,
  Activity,
  Trophy,
  Gift,
  Star,
  GraduationCap,
  Users,
  Rocket,
  Lightbulb,
  Calendar,
  ShieldCheck,
  Layers,
  Briefcase,
  Check,
  Copy,
  FolderGit2,
  Globe,
  Link2,
  Box,
  Camera,
  Leaf
} from 'lucide-react';
import {
  PERSONAL_INFO,
  EDUCATION,
  TECHNICAL_SKILLS,
  CERTIFICATIONS,
  PROJECTS,
  LEADERSHIP,
  ACHIEVEMENTS
} from './constants';
import { Project, RoleItem, LeadershipItem, EducationItem } from './type';
import VsbShowcase from './VsbShowcase';
import infosysSpringboardImg from './assets/infosys-springboard.png';
import tcsIonImg from './assets/tcs-ion.png';
import futureSkillsImg from './assets/futureskills-prime.png';
import tataImg from './assets/tata.png';
import ciscoImg from './assets/cisco.png';

const THEMES = [
  { primary: '#059669', secondary: '#10b981', soft: '#ecfdf5', glow: 'rgba(16, 185, 129, 0.2)' }, // Emerald
  { primary: '#e11d48', secondary: '#fb7185', soft: '#fff1f2', glow: 'rgba(225, 29, 72, 0.2)' }, // Rose
  { primary: '#d97706', secondary: '#f59e0b', soft: '#fffbeb', glow: 'rgba(217, 119, 6, 0.2)' }, // Amber
  { primary: '#0891b2', secondary: '#06b6d4', soft: '#ecfeff', glow: 'rgba(8, 145, 178, 0.2)' }, // Cyan
  { primary: '#7c3aed', secondary: '#a78bfa', soft: '#f5f3ff', glow: 'rgba(124, 58, 237, 0.2)' }, // Violet
  { primary: '#2563eb', secondary: '#60a5fa', soft: '#eff6ff', glow: 'rgba(37, 99, 235, 0.2)' }, // Blue
  { primary: '#701a75', secondary: '#d946ef', soft: '#fdf4ff', glow: 'rgba(217, 70, 239, 0.2)' }, // Fuchsia
  { primary: '#0d9488', secondary: '#2dd4bf', soft: '#f0fdfa', glow: 'rgba(13, 148, 136, 0.2)' }, // Teal
  { primary: '#ea580c', secondary: '#f97316', soft: '#fff7ed', glow: 'rgba(234, 88, 12, 0.2)' }, // Orange
  { primary: '#65a30d', secondary: '#a3e635', soft: '#f7fee7', glow: 'rgba(101, 163, 13, 0.2)' }, // Lime
  { primary: '#be123c', secondary: '#fb7185', soft: '#fff1f2', glow: 'rgba(190, 18, 60, 0.2)' }, // Crimson
  { primary: '#0284c7', secondary: '#38bdf8', soft: '#f0f9ff', glow: 'rgba(2, 132, 199, 0.2)' }, // Sky
  { primary: '#9333ea', secondary: '#c084fc', soft: '#faf5ff', glow: 'rgba(147, 51, 234, 0.2)' }, // Purple
  { primary: '#db2777', secondary: '#f472b6', soft: '#fdf2f8', glow: 'rgba(219, 39, 119, 0.2)' }, // Pink
  { primary: '#15803d', secondary: '#22c55e', soft: '#f0fdf4', glow: 'rgba(21, 128, 61, 0.2)' }, // Green
  { primary: '#854d0e', secondary: '#ca8a04', soft: '#fefce8', glow: 'rgba(133, 77, 14, 0.2)' }, // Gold/Yellow
  { primary: '#6366f1', secondary: '#818cf8', soft: '#eef2ff', glow: 'rgba(99, 102, 241, 0.2)' }, // Indigo 500
  { primary: '#ec4899', secondary: '#f472b6', soft: '#fdf2f8', glow: 'rgba(236, 72, 153, 0.2)' }, // Modern Pink
  { primary: '#f97316', secondary: '#fb923c', soft: '#fff7ed', glow: 'rgba(249, 115, 22, 0.2)' }, // Vibrant Orange
  { primary: '#06b6d4', secondary: '#22d3ee', soft: '#ecfeff', glow: 'rgba(6, 182, 212, 0.2)' }, // Bright Cyan
];

interface NavProps {
  onOpenPalette: () => void;
}

const Nav: React.FC<NavProps> = ({ onOpenPalette }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Education', id: 'education' },
    { name: 'Projects', id: 'projects' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Certifications', id: 'certs' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 85; // exact fixed navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    let lastScrolled = false;

    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      if (scrolled !== lastScrolled) {
        lastScrolled = scrolled;
        setIsScrolled(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // High performance IntersectionObserver: avoids getBoundingClientRect forced reflows during scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm border-b border-slate-100' : 'bg-transparent py-6'}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a
          href="#"
          onClick={(e) => handleNavClick(e, 'top')}
          className="text-2xl font-black tracking-tighter text-theme hover:scale-105 transition-transform flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-lg border-2 border-theme text-theme bg-transparent flex items-center justify-center text-xs font-black shadow-sm">TK</div>
          <span className="gradient-text">Tharunkumar <span className="text-slate-400">K</span></span>
        </a>

        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`px-4 py-2 text-sm font-bold transition-colors rounded-xl hover:bg-theme-soft ${activeSection === link.id ? 'text-theme bg-theme-soft' : 'text-slate-600 hover:text-theme'}`}
            >
              {link.name}
            </a>
          ))}
          
          {/* Resume Link */}
          <a
            href={PERSONAL_INFO.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 ml-1 text-xs font-bold text-theme bg-theme-soft hover:bg-theme hover:text-white rounded-xl transition-all border border-theme/20 shadow-sm flex items-center gap-1.5"
            title="Open Resume"
          >
            <FileText size={14} /> Resume
          </a>

          {/* Command Palette Desktop Trigger */}
          <button
            onClick={onOpenPalette}
            className="p-2 ml-2 text-slate-500 hover:text-theme hover:bg-theme-soft rounded-xl transition-colors flex items-center gap-1.5 border border-slate-100"
            title="Search / Command Palette (Ctrl+K)"
          >
            <Search size={16} />
          </button>
        </div>

        <div className="flex items-center md:hidden">
          {/* Command Palette Mobile Trigger */}
          <button
            onClick={onOpenPalette}
            className="text-slate-500 p-2 hover:bg-slate-100 rounded-xl transition-colors mr-2 border border-slate-100"
            title="Search / Command Palette"
          >
            <Search size={20} />
          </button>

          <button
            className="text-slate-900 p-2 hover:bg-slate-100 rounded-xl transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-2xl overflow-hidden"
          >
            <div className="p-6 flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`px-4 py-4 text-lg font-bold rounded-2xl transition-all ${activeSection === link.id ? 'bg-theme-soft text-theme' : 'text-slate-800 hover:bg-theme-soft hover:text-theme'}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};



const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;

    let rAF: number | null = null;
    let isHoveringInteractive = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (rAF !== null) return;
      rAF = requestAnimationFrame(() => {
        rAF = null;
        el.style.transform = `translate3d(${e.clientX - 18}px, ${e.clientY - 18}px, 0px)`;

        if (el.style.display === 'none') {
          el.style.display = 'block';
        }

        const target = e.target as HTMLElement | null;
        const isInteractive = Boolean(target && (target.tagName === 'A' || target.tagName === 'BUTTON' || target.tagName === 'INPUT' || target.closest('a, button, input, textarea, [role="button"]')));

        if (isInteractive !== isHoveringInteractive) {
          isHoveringInteractive = isInteractive;
          if (isInteractive) {
            el.classList.add('scale-150', 'border-[2.5px]');
            el.style.boxShadow = '0 0 30px var(--theme-glow), 0 0 50px var(--theme-glow)';
          } else {
            el.classList.remove('scale-150', 'border-[2.5px]');
            el.style.boxShadow = '0 0 15px var(--theme-glow)';
          }
        }
      });
    };

    const handleMouseDown = () => el.classList.add('scale-75');
    const handleMouseUp = () => el.classList.remove('scale-75');
    const handleMouseLeave = () => { el.style.display = 'none'; };
    const handleMouseEnter = () => { el.style.display = 'block'; };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (rAF !== null) cancelAnimationFrame(rAF);
    };
  }, []);

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-9 h-9 rounded-full bg-transparent border-2 border-theme shadow-[0_0_15px_var(--theme-glow)] will-change-transform scale-100 transition-[scale,border-width,box-shadow] duration-100 ease-out"
        style={{
          display: 'none',
          transform: 'translate3d(-100px, -100px, 0px)'
        }}
      />
    </div>
  );
};

const CountUp: React.FC<{ value: number; suffix?: string; duration?: number }> = ({
  value,
  suffix = '',
  duration = 1200
}) => {
  const [count, setCount] = useState(0);
  const prevValueRef = useRef(0);

  useEffect(() => {
    const startVal = prevValueRef.current;
    const endVal = Number(value) || 0;
    prevValueRef.current = endVal;

    if (startVal === endVal) {
      setCount(endVal);
      return;
    }

    const startTime = performance.now();
    let animId: number;

    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Smooth ease-out cubic curve
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(startVal + (endVal - startVal) * easeProgress);
      setCount(current);

      if (progress < 1) {
        animId = requestAnimationFrame(updateCount);
      } else {
        setCount(endVal);
      }
    };

    animId = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animId);
  }, [value, duration]);

  return <span>{count}{suffix}</span>;
};

const TiltCard: React.FC<{ children: React.ReactNode; className?: string; onClick?: () => void }> = ({ children, className = '', onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const rAFRef = useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (rAFRef.current !== null) return;
    rAFRef.current = requestAnimationFrame(() => {
      rAFRef.current = null;
      el.style.setProperty('--card-x', `${x}px`);
      el.style.setProperty('--card-y', `${y}px`);
    });
  };

  useEffect(() => {
    return () => {
      if (rAFRef.current !== null) cancelAnimationFrame(rAFRef.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden transition-all duration-300 hover:scale-[1.025] hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_var(--theme-glow),0_0_30px_var(--theme-glow)] group/card ${className}`}
    >
      {/* Dynamic Cursor Spotlight Highlight */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(500px circle at var(--card-x, 50%) var(--card-y, 50%), var(--theme-glow), transparent 70%)`
        }}
      />
      <div className="relative z-10 w-full h-full flex flex-col">{children}</div>
    </div>
  );
};

const LeetCodeIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 22 }) => (
  <img
    src="https://img.icons8.com/?size=100&id=6cdjttfIiwc0&format=png"
    alt="LeetCode"
    style={{ width: size, height: size }}
    className={`object-contain transition-all ${className}`}
  />
);

const GeeksForGeeksIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 22 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`transition-all ${className}`}
  >
    {/* Left bracket < */}
    <path d="M9 7.5L4.5 12L9 16.5" />
    {/* Right bracket > */}
    <path d="M15 7.5l4.5 4.5-4.5 4.5" />
  </svg>
);



interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTheme: (idx: number) => void;
}

const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, onSelectTheme }) => {
  const [search, setSearch] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        isOpen ? onClose() : void 0;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const items = [
    { name: 'Navigate: About', action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }), icon: <User size={18} /> },
    { name: 'Navigate: Skills', action: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }), icon: <Cpu size={18} /> },
    { name: 'Navigate: Experience', action: () => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }), icon: <User size={18} /> },
    { name: 'Navigate: Education', action: () => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' }), icon: <BookOpen size={18} /> },
    { name: 'Navigate: Projects', action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }), icon: <Code size={18} /> },
    { name: 'Open VSB GitHub Showcase Page', action: () => { window.location.href = '/vsb-engineering-college-github-profiles/'; }, icon: <FolderGit2 size={18} /> },
    { name: 'Navigate: Achievements', action: () => document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' }), icon: <Award size={18} /> },
    { name: 'Navigate: Certifications', action: () => document.getElementById('certs')?.scrollIntoView({ behavior: 'smooth' }), icon: <Award size={18} /> },
    { name: 'Navigate: Contact', action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), icon: <MessageSquare size={18} /> },
    { name: 'Copy Email Address', action: () => { navigator.clipboard.writeText(PERSONAL_INFO.email); alert('Email copied!'); }, icon: <Mail size={18} /> },
    { name: 'Open Resume', action: () => window.open(PERSONAL_INFO.resume, '_blank'), icon: <FileText size={18} /> },
    { name: 'Open GitHub Profile', action: () => window.open(PERSONAL_INFO.github, '_blank'), icon: <Github size={18} /> },
    { name: 'Open LinkedIn Profile', action: () => window.open(PERSONAL_INFO.linkedin, '_blank'), icon: <Linkedin size={18} /> },
  ];

  const filteredItems = items.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    setActiveIndex(0);
  }, [search]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeys = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex(prev => (prev + 1) % filteredItems.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex(prev => (prev - 1 + filteredItems.length) % filteredItems.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[activeIndex]) {
          filteredItems[activeIndex].action();
          onClose();
        }
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeys);
    return () => window.removeEventListener('keydown', handleKeys);
  }, [isOpen, filteredItems, activeIndex, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
        />

        {/* Modal body */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          className="w-full max-w-lg bg-white/95 rounded-3xl border border-slate-200 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.4)] overflow-hidden glass-effect z-10"
        >
          <div className="p-5 border-b border-slate-100 flex items-center gap-3">
            <Search className="text-slate-400" size={20} />
            <input
              type="text"
              autoFocus
              placeholder="Type a command or navigate..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full text-slate-800 placeholder-slate-400 bg-transparent border-none outline-none font-medium text-base"
            />
            <button onClick={onClose} className="p-1.5 hover:bg-slate-100 rounded-xl text-slate-400 hover:text-slate-700 transition-colors">
              <X size={18} />
            </button>
          </div>

          <div className="max-h-[300px] overflow-y-auto p-3 space-y-1">
            {filteredItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  item.action();
                  onClose();
                }}
                className={`w-full text-left p-3.5 rounded-2xl flex items-center gap-4 transition-all ${idx === activeIndex ? 'bg-theme-soft text-theme font-bold' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                <div className={`p-2 rounded-xl transition-all ${idx === activeIndex ? 'bg-theme text-white' : 'bg-slate-100 text-slate-500'}`}>
                  {item.icon}
                </div>
                <span className="text-sm">{item.name}</span>
                {idx === activeIndex && <ChevronRight size={16} className="ml-auto" />}
              </button>
            ))}
            {filteredItems.length === 0 && (
              <div className="p-8 text-center text-slate-400 text-sm">
                No matching actions found.
              </div>
            )}
          </div>

          {/* Theme Quick Switch Footer */}
          <div className="p-5 bg-slate-50/50 border-t border-slate-100">
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Palette Theme Selector</div>
            <div className="flex gap-3 overflow-x-auto pb-1">
              {THEMES.slice(0, 8).map((theme, i) => (
                <button
                  key={i}
                  onClick={() => onSelectTheme(i)}
                  className="w-7 h-7 rounded-full flex-shrink-0 border-2 border-white shadow-sm hover:scale-110 transition-transform"
                  style={{ backgroundColor: theme.primary }}
                  title="Switch Palette"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

interface AIChatbotProps {
  gitStats?: {
    followers?: number;
    repos?: number;
    commits?: number;
    loading?: boolean;
    error?: boolean;
  };
}

const AIChatbot: React.FC<AIChatbotProps> = ({ gitStats = { commits: 3574, repos: 30 } }) => {
  const ALL_QUESTIONS = [
    'What is your professional background?',
    'Can you detail your top projects?',
    'Where do you currently intern?',
    'How can I get in touch?',
    'What are your main technical skills?',
    'What is your college CGPA?',
    'Tell me about the Smart Helmet project',
    'What backend tech do you use?'
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [activeQuestions, setActiveQuestions] = useState<string[]>(ALL_QUESTIONS.slice(0, 3));
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string }>>([
    { sender: 'bot', text: "Hello! I am Tharun's AI Portfolio Assistant. Ask me anything about his background, projects, or experience!" }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const safeCommits = (gitStats?.commits ?? 3574).toLocaleString();
  const safeRepos = gitStats?.repos ?? 30;

  const qaPairs = [
    {
      keywords: ['who', 'tharun', 'background', 'profile', 'about'],
      answer: "Tharunkumar K is a passionate Full Stack Developer and IoT enthusiast from Tamil Nadu, currently pursuing a B.Tech in IT at VSB Engineering College (CGPA: 8.5). He specializes in React, Node.js, TypeScript, PostgreSQL, and embedded IoT designs."
    },
    {
      keywords: ['hackathon', 'award', 'prize', 'winner', 'neural', 'thugs', 'odoo', 'achievement'],
      answer: `Tharunkumar K is a 2× Hackathon Winner & holds the #1 Best GitHub Profile at VSB Engineering College:\n\n• Code Thugs 2K26 🥇: 1st Place National Winner for GOAT Code Editor.\n• Neural Minds 🥉: 3rd Prize in AI/ML Hackathon for FINDORA AI.\n• India Innovates 2026 & Odoo × NMIT 2026 Finalist 🇮🇳 for Work Suite HRMS.\n• Smart India Hackathon (SIH 2025 & 2026) Top 50 Nominee.\n• Best GitHub Profile @ VSB Engineering College (${safeCommits}+ commits, ${safeRepos}+ repos).`
    },
    {
      keywords: ['project', 'work', 'build', 'portfolio', 'top', 'technical', 'skills', 'tech', 'stack', 'helmet', 'backend', 'task', 'vsbec', 'goat', 'vault', 'sih'],
      answer: "Tharun has built several production-grade engineering platforms:\n\n• GOAT Code Editor: Real-time collaborative IDE with browser-native WebRTC voice calling mesh, Monaco kernel & 13+ language execution (Code Thugs 2k26 National 1st Place Winner 🥇).\n• VSBEC IT Vault: SIH 2026 Internal Hackathon Top 50 (out of 300+ campus teams, official SIH portal nominee) adopted by 365+ students with 3-tier proof audit, LeetCode sync, and sandboxed Monaco IDE.\n• FINDORA AI: Campus lost & found intelligence network with Google Gemini 2.5 Flash (Neural Minds AIML Hackathon 3rd Prize 🥉).\n• Smart Helmet IoT System: SIH 2025 Internal Hackathon Top 50 (out of 300+ campus teams, official SIH portal nominee) with RF 433MHz wireless ignition cutoff.\n• Work Suite HRMS: Enterprise workforce operations suite with RBAC and automated payroll (Odoo × NMIT 2026 National Finalist 🇮🇳).\n• Aura: 100% Offline Multimodal RAG workstation (Spring Boot, Llama-3, CLIP, Electron)."
    },
    {
      keywords: ['intern', 'experience', 'neura', 'infosys', 'job'],
      answer: "Currently, Tharun is a Fullstack Development Intern at Neura Global (Startup) where he builds production React/Node.js features. Previously, he completed a Software Development Internship with Infosys Springboard (StarWall employee dashboard)."
    },
    {
      keywords: ['education', 'college', 'gpa', 'study', 'graduation', 'cgpa'],
      answer: "Tharun is pursuing a Bachelor of Technology in Information Technology at VSB Engineering College, Karur, Tamil Nadu (Batch: 2024 - 2028). He currently holds a CGPA of 8.5 / 10."
    },
    {
      keywords: ['contact', 'email', 'phone', 'social', 'reach'],
      answer: "You can reach Tharun directly through:\n\n• Email: tharunkumark42007@gmail.com\n• Phone: +91 8760964830\n• LinkedIn: in.linkedin.com/in/tharunkumark4743?trk=profile-badge"
    }
  ];

  const handleQuestionClick = (questionText: string) => {
    setMessages(prev => [...prev, { sender: 'user', text: questionText }]);
    setIsTyping(true);

    const lowercaseQ = questionText.toLowerCase();
    let bestMatch = qaPairs.find(pair => pair.keywords.some(keyword => lowercaseQ.includes(keyword)));
    const responseText = bestMatch ? bestMatch.answer : "I'm not fully sure about that detail! Try asking about his projects, experience, education, or contact info.";

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { sender: 'bot', text: responseText }]);
    }, 1000);

    const remainingPool = ALL_QUESTIONS.filter(q => !activeQuestions.includes(q) && q !== questionText);
    const nextQuestion = remainingPool[Math.floor(Math.random() * remainingPool.length)];
    if (nextQuestion) {
      setActiveQuestions(prev => prev.map(q => q === questionText ? nextQuestion : q));
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[90] p-4 bg-theme hover:scale-105 active:scale-95 text-white rounded-full shadow-2xl transition-all flex items-center justify-center border-4 border-white"
        style={{ boxShadow: '0 10px 30px -5px var(--theme-glow)' }}
      >
        <MessageSquare size={26} className={isOpen ? 'rotate-90 transition-transform' : ''} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-[350px] sm:w-[400px] h-[500px] bg-white rounded-[2.5rem] border-2 border-slate-200/50 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.3)] overflow-hidden glass-effect flex flex-col z-[90]"
          >
            <div className="p-6 bg-theme text-white flex items-center justify-between shadow-md">
              <div className="flex items-center gap-3">
                <img src={PERSONAL_INFO.profileImage} alt="Tharunkumar K" className="w-10 h-10 min-w-[40px] rounded-xl object-cover object-top border-2 border-white/20 shadow-sm flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-sm">Tharun's Assistant</h3>
                  <p className="text-[10px] text-white/80">Online & Ready</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/20 rounded-lg transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start gap-2 items-end'}`}>
                  {msg.sender === 'bot' && (
                    <img src={PERSONAL_INFO.profileImage} alt="Assistant" className="w-6 h-6 rounded-full object-cover object-top shadow-sm flex-shrink-0 mb-1 border border-slate-200" />
                  )}
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-2xl text-[13.5px] leading-relaxed whitespace-pre-line shadow-sm ${
                      msg.sender === 'user' 
                        ? 'bg-theme text-white rounded-br-sm' 
                        : 'bg-white border border-slate-100 text-slate-700 rounded-bl-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="px-5 py-3 bg-slate-100 rounded-3xl rounded-bl-none text-slate-400 text-sm flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
            </div>

            <div className="p-3 bg-slate-50/80 border-t border-slate-100/60 overflow-x-auto whitespace-nowrap scrollbar-hide flex gap-2">
              <AnimatePresence mode="popLayout">
                {activeQuestions.map((q) => (
                  <motion.button
                    key={q}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    onClick={() => handleQuestionClick(q)}
                    className="flex-shrink-0 px-3 py-1.5 bg-white text-[11px] font-bold text-slate-600 border border-slate-200 hover:border-theme hover:text-theme rounded-full shadow-sm"
                  >
                    {q}
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

interface GitHubWidgetProps {
  primaryColor: string;
  gitStats: {
    followers: number;
    repos: number;
    commits: number;
    loading: boolean;
    error: boolean;
  };
}

const GitHubWidget: React.FC<GitHubWidgetProps> = ({ primaryColor, gitStats }) => {
  const chartUrl = '/contribution-chart.svg';

  return (
    <section className="py-16 sm:py-20 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="GitHub Analytics"
          subtitle="Real-time repository statistics and contributions activity tracker."
          icon={<Github size={24} />}
        />

        <div className="max-w-4xl mx-auto flex flex-col gap-4 sm:gap-6">
          <div className="flex items-center justify-end pb-2">
            <a
              href="https://github.com/Tharun4743"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-theme hover:underline flex items-center gap-1"
            >
              View on GitHub <ExternalLink size={12} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 text-center">
            <a
              href="https://github.com/Tharun4743?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <TiltCard className="p-4 sm:p-5 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-theme hover:shadow-lg transition-all h-full">
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 group-hover:text-theme transition-colors">Public Repos</h4>
                <p className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-theme transition-colors">
                  {gitStats.loading ? (
                    <span className="animate-pulse text-slate-400">...</span>
                  ) : (
                    <CountUp value={gitStats.repos} />
                  )}
                </p>
              </TiltCard>
            </a>

            <a
              href="https://github.com/Tharun4743"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <TiltCard className="p-4 sm:p-5 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-theme hover:shadow-lg transition-all h-full">
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 group-hover:text-theme transition-colors">Lifetime Commits</h4>
                <p className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-theme transition-colors">
                  {gitStats.loading ? (
                    <span className="animate-pulse text-slate-400">...</span>
                  ) : (
                    <CountUp value={gitStats.commits || 3574} />
                  )}
                </p>
              </TiltCard>
            </a>

            <a
              href="https://github.com/Tharun4743?tab=followers"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <TiltCard className="p-4 sm:p-5 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-theme hover:shadow-lg transition-all h-full">
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 group-hover:text-theme transition-colors">Followers</h4>
                <p className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-theme transition-colors">
                  {gitStats.loading ? (
                    <span className="animate-pulse text-slate-400">...</span>
                  ) : (
                    <CountUp value={gitStats.followers} />
                  )}
                </p>
              </TiltCard>
            </a>
          </div>

          <div className="p-4 sm:p-6 bg-white rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-3 px-1">
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Contributions Activity Grid (53 Weeks)</h4>
              <span className="text-[10px] font-bold text-theme flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Native Visualizer Engine
              </span>
            </div>
            <div className="w-full overflow-x-auto scrollbar-thin">
              <div className="inline-block min-w-[650px] max-w-full p-1">
                <img
                  src={chartUrl}
                  alt="Tharunkumar K GitHub Contributions Chart"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto mx-auto select-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSlider: React.FC = () => {
  const contactItems = [
    { label: 'Drop me a message', value: PERSONAL_INFO.email, link: `https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}`, icon: <Mail size={24} />, borderHover: 'hover:border-blue-500', iconHover: 'group-hover:text-blue-600 group-hover:bg-blue-50 group-hover:border-blue-300' },
    { label: 'Give me a call', value: PERSONAL_INFO.phone, link: `tel:${PERSONAL_INFO.phone}`, icon: <Phone size={24} />, accentColor: 'from-emerald-500 to-teal-600', borderHover: 'hover:border-emerald-500', iconHover: 'group-hover:text-emerald-600 group-hover:bg-emerald-50 group-hover:border-emerald-300' },
    { label: 'Connect on', value: 'GitHub', link: PERSONAL_INFO.github, icon: <Github size={24} />, borderHover: 'hover:border-slate-800', iconHover: 'group-hover:text-slate-900 group-hover:bg-slate-100 group-hover:border-slate-400' },
    { label: 'Connect on', value: 'LinkedIn', link: PERSONAL_INFO.linkedin, icon: <Linkedin size={24} />, borderHover: 'hover:border-blue-600', iconHover: 'group-hover:text-blue-700 group-hover:bg-blue-50 group-hover:border-blue-400' },
    { label: 'Connect on', value: 'LeetCode', link: PERSONAL_INFO.leetcode, icon: <LeetCodeIcon size={24} />, borderHover: 'hover:border-amber-500', iconHover: 'group-hover:text-amber-600 group-hover:bg-amber-50 group-hover:border-amber-300' },
    { label: 'Connect on', value: 'GeeksForGeeks', link: PERSONAL_INFO.geeksforgeeks, icon: <GeeksForGeeksIcon size={24} />, borderHover: 'hover:border-green-600', iconHover: 'group-hover:text-green-700 group-hover:bg-green-50 group-hover:border-green-300' }
  ];

  // Duplicated items for seamless continuous infinite marquee
  const marqueeItems = [...contactItems, ...contactItems];

  return (
    <div className="w-full overflow-hidden relative py-4 group [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
      <div className="flex gap-4 w-max animate-marquee">
        {marqueeItems.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer me"
            className={`w-64 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all flex flex-col items-center text-center gap-3 flex-shrink-0 group/item ${item.borderHover}`}
          >
            <div className="w-12 h-12 rounded-xl bg-transparent border-2 border-slate-200 text-slate-800 flex items-center justify-center shadow-sm group-hover/item:scale-105 group-hover/item:border-theme transition-all duration-300">
              {item.icon}
            </div>
            <div className="w-full overflow-hidden">
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">{item.label}</h4>
              <p className="text-sm font-bold text-slate-900 truncate w-full px-1">{item.value}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};





const AchievementsTimeline: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'hackathon' | 'creative' | 'leadership' | 'ambassador'>('all');

  const featuredAchievement = ACHIEVEMENTS.find((item) => item.featured);

  const filteredAchievements = ACHIEVEMENTS.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'creative') return item.category === 'creative' || item.category === 'presentation';
    return item.category === activeFilter;
  });

  const getJourneyIcon = (iconName?: string) => {
    switch (iconName) {
      case 'trophy':
        return <Trophy size={20} className="text-theme" />;
      case 'rocket':
        return <Rocket size={20} className="text-theme" />;
      case 'lightbulb':
        return <Lightbulb size={20} className="text-theme" />;
      case 'graduation':
        return <GraduationCap size={20} className="text-theme" />;
      case 'shield':
        return <ShieldCheck size={20} className="text-theme" />;
      case 'code':
        return <Code size={20} className="text-theme" />;
      case 'star':
        return <Star size={20} className="text-theme" />;
      case 'camera':
        return <Camera size={20} className="text-theme" />;
      case 'leaf':
        return <Leaf size={20} className="text-theme" />;
      default:
        return <Award size={20} className="text-theme" />;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
      {/* Category Filter Pills with Outlined Vector Icons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {[
          { id: 'all', label: 'All Milestones', icon: <Layers size={13} /> },
          { id: 'hackathon', label: 'Hackathons & Wins', icon: <Trophy size={13} /> },
          { id: 'creative', label: 'Creative & Presentations', icon: <Camera size={13} /> },
          { id: 'leadership', label: 'Department Leadership', icon: <GraduationCap size={13} /> },
          { id: 'ambassador', label: 'Campus Ambassador', icon: <Users size={13} /> },
        ].map((tab) => (
          <motion.button
            key={tab.id}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setActiveFilter(tab.id as any)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeFilter === tab.id
                ? 'bg-theme text-white shadow-md shadow-theme/20'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {tab.icon}
            {tab.label}
          </motion.button>
        ))}
      </div>

      {/* Featured Competitive Technical Accomplishment Spotlight Card */}
      {featuredAchievement && (activeFilter === 'all' || activeFilter === 'hackathon') && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full mb-8"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500/[0.08] via-amber-500/[0.02] to-amber-500/[0.05] border-2 border-amber-400/80 p-6 sm:p-8 shadow-xl shadow-amber-500/10">
            {/* Shimmer background decoration */}
            <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-gradient-to-br from-amber-400/20 via-amber-300/10 to-transparent blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full bg-gradient-to-tr from-theme/15 to-transparent blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex-1">
                {/* Featured Badge & Meta */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 flex items-center gap-1.5 shadow-sm">
                    <Trophy size={13} className="fill-slate-950" /> Featured Technical Accomplishment
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300 flex items-center gap-1">
                    <Star size={11} className="fill-amber-500 text-amber-500" /> 1st Place National Winner
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white text-slate-700 border border-slate-200 flex items-center gap-1">
                    <Calendar size={12} className="text-slate-400" /> {featuredAchievement.date || featuredAchievement.year}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
                  {featuredAchievement.title}
                </h3>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm font-semibold text-slate-600 mb-3">
                  <span className="text-amber-800 font-bold">{featuredAchievement.event}</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-700">{featuredAchievement.organization}</span>
                  {featuredAchievement.prize && (
                    <>
                      <span className="text-slate-300">•</span>
                      <span className="text-emerald-700 font-bold flex items-center gap-1">
                        <Gift size={13} /> {featuredAchievement.prize}
                      </span>
                    </>
                  )}
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium max-w-3xl">
                  {featuredAchievement.description}
                </p>
              </div>

              {/* Action Button */}
              {featuredAchievement.certificateUrl && (
                <div className="w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col gap-2.5 flex-shrink-0">
                  <a
                    href={featuredAchievement.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all text-center"
                  >
                    <Award size={16} />
                    <span>View Verified Certificate</span>
                    <ExternalLink size={14} />
                  </a>
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200 shadow-xs hover:border-slate-300 transition-all text-center"
                  >
                    <Code size={14} className="text-theme" />
                    <span>Explore GOAT Code Editor</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}

      {/* 2-Column Responsive Grid Layout */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <AnimatePresence mode="popLayout">
          {filteredAchievements.map((item, idx) => (
            <motion.div
              key={item.title}
              layout
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: idx * 0.04 }}
              whileHover={{ y: -4 }}
              className="h-full"
            >
              <TiltCard className={`p-4 sm:p-5 rounded-2xl bg-white border transition-all overflow-hidden relative h-full flex flex-col group ${
                item.featured 
                  ? 'border-amber-300 ring-2 ring-amber-400/30 shadow-md hover:border-amber-400' 
                  : 'border-slate-100 shadow-sm hover:shadow-xl hover:border-theme'
              }`}>
                {/* Shimmer Ambient Glow on Card Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-theme-soft/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="flex flex-wrap justify-between items-start gap-2 mb-3 relative z-10">
                  <div className="flex items-center gap-2">
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.08 }}
                      className={`w-10 h-10 rounded-xl bg-transparent border-2 flex items-center justify-center flex-shrink-0 transition-all shadow-sm ${
                        item.featured ? 'border-amber-500 text-amber-600' : 'border-theme text-theme'
                      }`}
                    >
                      {getJourneyIcon(item.iconName)}
                    </motion.div>
                    <div className="flex flex-col">
                      <span className="px-2.5 py-0.5 bg-slate-50 text-slate-700 font-bold rounded-lg text-[11px] border border-slate-200 flex items-center gap-1.5 shadow-sm">
                        <Calendar size={12} className="text-slate-400" /> {item.date || item.year}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 items-center">
                    {item.featured && (
                      <span className="px-2 py-0.5 bg-amber-500 text-slate-950 font-black rounded-lg text-[10px] flex items-center gap-1 shadow-sm">
                        <Star size={11} className="fill-slate-950" /> FEATURED
                      </span>
                    )}
                    {item.event && (
                      <span className="px-2 py-0.5 bg-slate-100 text-slate-700 font-semibold rounded-lg text-[10px] border border-slate-200">
                        {item.event}
                      </span>
                    )}
                    {item.prize && (
                      <motion.span whileHover={{ scale: 1.04 }} className="px-2 py-0.5 bg-amber-50 text-amber-700 font-bold rounded-lg text-[10px] border border-amber-200 shadow-sm flex items-center gap-1">
                        <Gift size={11} className="text-amber-600" /> {item.prize}
                      </motion.span>
                    )}
                    {item.score && (
                      <motion.span whileHover={{ scale: 1.04 }} className="px-2 py-0.5 bg-emerald-50 text-emerald-700 font-bold rounded-lg text-[10px] border border-emerald-200 shadow-sm flex items-center gap-1">
                        <Star size={11} className="text-emerald-600" /> {item.score}
                      </motion.span>
                    )}
                    {item.type && (
                      <motion.span whileHover={{ scale: 1.04 }} className="px-2.5 py-0.5 bg-theme-soft text-theme font-bold rounded-lg text-[10px] border border-theme/20 shadow-sm">
                        {item.type}
                      </motion.span>
                    )}
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-theme transition-colors mb-0.5 leading-snug relative z-10">
                  {item.title}
                </h3>
                <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 relative z-10">
                  {item.department ? `${item.department} • ` : ''}{item.organization}
                </h4>

                {item.teamName && (
                  <div className="relative z-10 mb-2.5 px-2.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center gap-1.5 text-[11px] text-slate-600">
                    <Users size={12} className="text-theme flex-shrink-0" />
                    <span><strong className="text-slate-800">Team {item.teamName}:</strong> {item.teamMembers?.join(', ')}</span>
                  </div>
                )}

                <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed relative z-10 mb-3">
                  {item.description}
                </p>

                {item.certificateUrl && (
                  <div className="relative z-10 mt-auto pt-3 border-t border-slate-100 flex items-center justify-between">
                    <a
                      href={item.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-theme hover:underline group/cert"
                    >
                      <Award size={13} />
                      <span>View Verified Certificate</span>
                      <ExternalLink size={11} className="group-hover/cert:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                )}
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

const SectionHeader: React.FC<{ title: string; subtitle?: string; icon: React.ReactNode }> = ({ title, subtitle, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    className="mb-10 sm:mb-12"
  >
    <div className="flex items-center gap-3.5 mb-2.5">
      <motion.div
        whileHover={{ scale: 1.08, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="w-11 h-11 rounded-xl bg-transparent border-2 border-theme text-slate-900 flex items-center justify-center transition-all cursor-pointer shadow-md shadow-theme/10"
        style={{ boxShadow: '0 0 15px var(--theme-glow)' }}
      >
        {icon}
      </motion.div>
      <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter">{title}</h2>
    </div>
    {subtitle && <p className="text-slate-500 max-w-2xl text-sm sm:text-base font-medium ml-1 mr-auto">{subtitle}</p>}
  </motion.div>
);

const HeroHighlightBadge: React.FC = () => {
  const [index, setIndex] = useState(0);

  const highlights = [
    {
      icon: <Award size={20} />,
      subtitle: '2× Hackathon Winner',
      title: 'Code Thugs 🥇 & Neural Minds 🥉'
    },
    {
      icon: <Trophy size={20} />,
      subtitle: 'Rank #1 Best GitHub Profile',
      title: 'VSB Engineering College'
    },
    {
      icon: <Award size={20} />,
      subtitle: 'SIH 2025 & 2026 Top 50',
      title: 'Smart India Hackathon'
    },
    {
      icon: <Sparkles size={20} />,
      subtitle: 'National Finalist',
      title: 'India Innovates & Odoo × NMIT'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % highlights.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [highlights.length]);

  const current = highlights[index];

  return (
    <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-white p-4 sm:p-5 rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-3.5 hover:scale-105 transition-transform z-10 max-w-[280px] sm:max-w-[320px] overflow-hidden">
      <div className="w-10 h-10 rounded-xl bg-transparent border-2 border-theme text-theme flex items-center justify-center flex-shrink-0 shadow-sm">
        {current.icon}
      </div>
      <div className="overflow-hidden relative h-10 flex flex-col justify-center min-w-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest leading-none mb-1 truncate">
              {current.subtitle}
            </p>
            <p className="text-xs sm:text-sm font-black text-slate-900 leading-none truncate">
              {current.title}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const SpotlightBackground: React.FC = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = spotlightRef.current;
    if (!el) return;

    let rAF: number | null = null;
    const handleMouseMove = (e: MouseEvent) => {
      if (rAF !== null) return;
      rAF = requestAnimationFrame(() => {
        rAF = null;
        el.style.background = `radial-gradient(400px at ${e.clientX}px ${e.clientY}px, var(--theme-glow), transparent 80%)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rAF !== null) cancelAnimationFrame(rAF);
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="pointer-events-none fixed inset-0 z-30 opacity-40 hidden md:block"
    />
  );
};

const App: React.FC = () => {
  const [activeThemeIndex, setActiveThemeIndex] = useState(0);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isDedicatedShowcase, setIsDedicatedShowcase] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'fullstack' | 'ai' | 'iot'>('all');
  const [gitStats, setGitStats] = useState({
    followers: 7,
    repos: 30,
    commits: 3574,
    loading: false,
    error: false
  });

  // Lock body scroll and handle Escape key when project modal is active
  useEffect(() => {
    if (activeProject) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setActiveProject(null);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = prevOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [activeProject]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      if (path.includes('vsb-engineering-college-github-profiles')) {
        setIsDedicatedShowcase(true);
      }
    }
  }, []);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * THEMES.length);
    setActiveThemeIndex(randomIndex);
  }, []);

  useEffect(() => {
    const theme = THEMES[activeThemeIndex];
    if (theme) {
      const root = document.documentElement;
      root.style.setProperty('--theme-primary', theme.primary);
      root.style.setProperty('--theme-secondary', theme.secondary);
      root.style.setProperty('--theme-bg-soft', theme.soft);
      root.style.setProperty('--theme-glow', theme.glow);
    }
  }, [activeThemeIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsPaletteOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeProject]);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const fetchLiveGitHub = async () => {
      try {
        const [userRes, commitsRes] = await Promise.allSettled([
          fetch('https://api.github.com/users/Tharun4743', {
            signal: controller.signal,
            headers: {
              'Accept': 'application/vnd.github.v3+json'
            }
          }),
          fetch('https://api.github.com/search/commits?q=author:Tharun4743', {
            signal: controller.signal,
            headers: {
              'Accept': 'application/vnd.github.v3+json'
            }
          })
        ]);
        clearTimeout(timeoutId);

        let liveFollowers = 7;
        let liveRepos = 30;
        let liveCommits = 3574;

        if (userRes.status === 'fulfilled' && userRes.value.ok) {
          const userJson = await userRes.value.json();
          liveFollowers = typeof userJson.followers === 'number' ? userJson.followers : (Number(userJson.followers) || 7);
          liveRepos = typeof userJson.public_repos === 'number' ? userJson.public_repos : (Number(userJson.public_repos) || 30);
        }

        if (commitsRes.status === 'fulfilled' && commitsRes.value.ok) {
          const commitsJson = await commitsRes.value.json();
          if (typeof commitsJson.total_count === 'number' && commitsJson.total_count > 0) {
            liveCommits = commitsJson.total_count;
          }
        }

        if (isMounted) {
          setGitStats({
            followers: liveFollowers,
            repos: liveRepos,
            commits: liveCommits,
            loading: false,
            error: false
          });
        }
      } catch (err) {
        if (isMounted) {
          setGitStats(prev => ({ ...prev, loading: false }));
        }
      }
    };

    fetchLiveGitHub();
    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, []);

  if (isDedicatedShowcase) {
    return (
      <div className="min-h-screen bg-slate-50 selection:bg-theme-soft selection:text-theme relative">
        <CustomCursor />
        <SpotlightBackground />
        <Nav onOpenPalette={() => setIsPaletteOpen(true)} />
        <main>
          <VsbShowcase
            isDedicatedPage={true}
            gitStats={gitStats}
            onNavigateHome={() => {
              window.history.pushState({}, '', '/');
              setIsDedicatedShowcase(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </main>
        <footer className="py-12 bg-white border-t border-slate-100 text-center">
          <p className="text-slate-400 font-bold text-xs tracking-widest uppercase">
            &copy; {new Date().getFullYear()} THARUNKUMAR K &bull; V.S.B. ENGINEERING COLLEGE, KARUR
          </p>
        </footer>
        <CommandPalette
          isOpen={isPaletteOpen}
          onClose={() => setIsPaletteOpen(false)}
          onSelectTheme={(idx) => setActiveThemeIndex(idx)}
        />
        <AIChatbot />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-theme-soft selection:text-theme relative">
      <CustomCursor />
      {/* Background Blobs (GPU Accelerated) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-20 opacity-30">
        <div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-[100px] animate-blob-1"
          style={{ backgroundColor: 'var(--theme-glow)' }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full blur-[100px] animate-blob-2"
          style={{ backgroundColor: 'var(--theme-glow)' }}
        />
      </div>

      {/* Dynamic Cursor Spotlight (Zero-re-render component) */}
      <SpotlightBackground />

      <Nav onOpenPalette={() => setIsPaletteOpen(true)} />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
        <div
          className="absolute -top-20 -right-20 w-96 h-96 blur-[100px] rounded-full -z-10 opacity-30 animate-blob-1"
          style={{ backgroundColor: 'var(--theme-glow)' }}
        />

        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-3/5 text-center lg:text-left order-2 lg:order-1"
            >

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-theme-soft border border-theme/20 text-theme text-xs font-bold uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-theme animate-ping" />
                Tharunkumar K &bull; Full Stack &amp; AI Systems Developer
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tighter">
                Building Intelligent <br />
                <span className="text-theme">Software Solutions</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-700 mb-10 leading-relaxed max-w-2xl font-medium mx-auto lg:mx-0">
                Hi, I'm <strong className="text-slate-900">Tharunkumar K</strong>. I build intelligent web applications, desktop software, and safety IoT systems that solve real-world problems.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 items-center">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px var(--theme-glow)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-4 bg-theme hover:brightness-110 text-white rounded-[2rem] font-bold transition-all flex items-center gap-2 group shadow-lg text-sm sm:text-base"
                >
                  Explore My Work
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>


                <motion.a
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px var(--theme-glow)" }}
                  whileTap={{ scale: 0.95 }}
                  href={PERSONAL_INFO.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-5 bg-white text-theme border-2 border-theme-soft hover:border-theme hover:bg-theme-soft rounded-[2rem] font-bold transition-all flex items-center gap-3 group shadow-sm"
                >
                  <FileText size={20} className="group-hover:scale-110 transition-transform" />
                  Resume
                </motion.a>

                <div className="flex items-center gap-3">
                  {[
                    { icon: <Github size={22} />, link: PERSONAL_INFO.github, label: 'GitHub' },
                    { icon: <Linkedin size={22} />, link: PERSONAL_INFO.linkedin, label: 'LinkedIn' },
                    { icon: <LeetCodeIcon size={22} />, link: PERSONAL_INFO.leetcode, label: 'LeetCode' },
                    { icon: <GeeksForGeeksIcon size={22} />, link: PERSONAL_INFO.geeksforgeeks, label: 'GeeksForGeeks' },
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                      whileHover={{ y: -8, scale: 1.1, backgroundColor: '#fff', borderColor: 'var(--theme-primary)' }}
                      className="p-4 rounded-2xl bg-white border border-slate-100 shadow-md transition-all text-slate-500 hover:text-theme hover:shadow-lg"
                      title={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* HERO PHOTO - ENSURE IT IS VISIBLE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full lg:w-2/5 order-1 lg:order-2 flex justify-center"
            >
              <div className="relative group max-w-[400px] w-full px-4 lg:px-0">
                {/* Glow Backdrop */}
                <div className="absolute -inset-8 bg-theme-soft rounded-[4rem] blur-[50px] -z-10 transition-colors opacity-50" style={{ backgroundColor: 'var(--theme-glow)' }}></div>

                <div
                  className="w-full aspect-[3/4] bg-slate-100 rounded-[3rem] shadow-2xl relative overflow-hidden transition-all duration-700 border-[8px] border-white ring-1 ring-slate-100 animate-float-avatar will-change-transform"
                >
                  <img
                    src={PERSONAL_INFO.profileImage}
                    alt={PERSONAL_INFO.name}
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-1000"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop';
                    }}
                  />
                </div>

                <HeroHighlightBadge />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section - Photo Always Visible Here Too */}
      <section id="about" className="py-16 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="About Me"
            subtitle="My journey in the world of technology."
            icon={<User size={24} />}
          />
          <div className="max-w-4xl mx-auto">

            <motion.div
              initial={{ opacity: 0, x: -40, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="flex flex-col gap-4 sm:gap-6"
            >
              <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-100 text-center sm:text-left hover:shadow-lg transition-all">
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                  {PERSONAL_INFO.profileSummary}
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="p-5 bg-white shadow-sm rounded-2xl border border-slate-100 group hover:border-theme hover:shadow-md transition-all">
                  <MapPin size={20} className="text-theme mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Location</h4>
                  <p className="text-sm sm:text-base font-bold text-slate-900 truncate">{PERSONAL_INFO.location}</p>
                </div>
                <div className="p-5 bg-white shadow-sm rounded-2xl border border-slate-100 group hover:border-theme hover:shadow-md transition-all">
                  <Mail size={20} className="text-theme mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Contact</h4>
                  <p className="text-sm sm:text-base font-bold text-slate-900 truncate">{PERSONAL_INFO.email}</p>
                </div>
              </div>

              {(() => {
                const aboutStats = [
                  { label: 'Projects Built', value: PROJECTS.length, suffix: '', loading: false, error: false },
                  { label: 'Certifications', value: CERTIFICATIONS.length, suffix: '', loading: false, error: false },
                  { label: 'GitHub Repos', value: gitStats.repos, suffix: '', loading: gitStats.loading, error: gitStats.error }
                ].filter(s => !s.error);

                return (
                  <div className={`grid grid-cols-2 ${aboutStats.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-3 sm:gap-5 text-center`}>
                    {aboutStats.map((stat, i) => (
                  <div key={i} className="p-4 bg-white shadow-sm rounded-xl border border-slate-100 hover:border-theme hover:shadow-md transition-all">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                    <p className="text-base sm:text-lg font-black text-slate-900 truncate">
                      {stat.loading ? (
                        '...'
                      ) : (
                        <CountUp value={stat.value} suffix={stat.suffix} />
                      )}
                    </p>
                  </div>
                ))}
                  </div>
                );
              })()}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Technical Arsenal"
            subtitle="The tools and languages I use to bring ideas to life."
            icon={<Cpu size={24} />}
          />
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {TECHNICAL_SKILLS.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -40, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: idx * 0.06 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.33%-1rem)] will-change-transform"
              >
                <TiltCard className="p-5 sm:p-6 rounded-2xl bg-white shadow-sm border border-slate-100 hover:shadow-xl hover:border-theme transition-all group h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-theme-soft/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <h3 className="text-theme font-black mb-3.5 uppercase tracking-wider text-xs flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-theme animate-ping"></div>
                    {cat.name}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill: string, sIdx: number) => (
                      <motion.span
                        key={sIdx}
                        whileHover={{ scale: 1.04, color: 'var(--theme-primary)' }}
                        className="px-2.5 py-1 bg-white rounded-lg text-xs font-semibold text-slate-700 border border-slate-200 group-hover:border-theme-soft shadow-xs"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education Journey Timeline Section (Feature 9) */}
      <section id="experience" className="py-16 sm:py-20 bg-slate-50 relative">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="My Journey"
            subtitle="Professional experience, key achievements, and education history."
            icon={<Activity size={24} />}
          />

          <div className="relative max-w-4xl mx-auto mt-12 sm:mt-16">
            {/* Central Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 -translate-x-1/2" />

            <div className="space-y-8 sm:space-y-10">
              {(() => {
                const getStartYear = (period: string) => {
                  const match = period.match(/\b\d{4}\b/);
                  return match ? parseInt(match[0], 10) : 0;
                };

                const timelineItems = [
                  ...LEADERSHIP.map((item: LeadershipItem) => ({
                    type: 'work',
                    title: item.title,
                    org: item.organization,
                    period: item.period,
                    description: item.description
                  })),
                  ...EDUCATION.map((item: EducationItem) => ({
                    type: 'education',
                    title: item.degree,
                    org: item.institution,
                    period: item.period,
                    description: item.details
                  }))
                ].sort((a, b) => getStartYear(b.period) - getStartYear(a.period));

                const firstEduIdx = timelineItems.findIndex(item => item.type === 'education');

                return timelineItems.map((item, idx) => {
                  const isLeft = idx % 2 === 0;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: isLeft ? -40 : 40, scale: 0.95 }}
                      whileInView={{ opacity: 1, x: 0, scale: 1 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ type: "spring", stiffness: 260, damping: 20, delay: idx * 0.08 }}
                      whileHover={{ y: -4, scale: 1.01 }}
                      className={`relative flex flex-col md:flex-row ${isLeft ? 'md:flex-row-reverse' : ''} items-start md:items-center`}
                    >
                      {idx === firstEduIdx && <div id="education" className="absolute -top-24" />}
                      {/* Node Marker */}
                      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-2 border-theme bg-white shadow-sm z-10 flex items-center justify-center text-slate-800 transition-transform hover:scale-110">
                        {item.type === 'work' ? (
                          <Briefcase size={14} className="text-slate-800" />
                        ) : (
                          <GraduationCap size={14} className="text-slate-800" />
                        )}
                      </div>

                      {/* Content Card */}
                      <div className={`w-full md:w-[calc(50%-1.75rem)] ml-10 md:ml-0 ${isLeft ? 'md:pr-6' : 'md:pl-6'}`}>
                        <TiltCard className="p-5 sm:p-6 bg-white shadow-sm border border-slate-100 rounded-2xl hover:border-theme hover:shadow-lg transition-all group">
                          <div className="flex justify-between items-center gap-3 mb-2.5 flex-wrap">
                            <span className="px-2.5 py-0.5 bg-theme-soft text-theme font-bold rounded-md text-[11px] border border-theme/10">
                              {item.period}
                            </span>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                              {item.type}
                            </span>
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-theme transition-colors mb-0.5 leading-snug">
                            {item.title}
                          </h3>
                          <h4 className="text-xs font-semibold text-slate-500 mb-3">{item.org}</h4>
                          <div className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium space-y-1">
                            {item.description.split(' | ').map((desc: string, i: number, arr: string[]) => (
                              <div key={i} className="flex items-start gap-1.5">
                                {arr.length > 1 && (
                                  <span className="w-1.5 h-1.5 rounded-full bg-theme/40 mt-1.5 flex-shrink-0" />
                                )}
                                <span>{desc}</span>
                              </div>
                            ))}
                          </div>
                        </TiltCard>
                      </div>
                    </motion.div>
                  );
                });
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Projects"
            subtitle="Real-world applications built with cutting-edge tech."
            icon={<Code size={24} />}
          />

          {/* Project Filtering Buttons (Feature 3) */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-8 sm:mb-10">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'fullstack', label: 'Full-Stack & Web' },
              { id: 'ai', label: 'AI & Systems' },
              { id: 'iot', label: 'IoT & Embedded' }
            ].map(cat => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider border transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-theme border-theme text-white shadow-md shadow-theme/20'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid: 3 columns x 2 rows on desktop */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            <AnimatePresence mode="popLayout">
              {PROJECTS.filter(p => selectedCategory === 'all' || p.category === selectedCategory).map((project, idx) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, x: -40, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -20, scale: 0.95 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: idx * 0.05 }}
                  className="w-full"
                >
                  <TiltCard
                    onClick={() => setActiveProject(project)}
                    className="group bg-white rounded-2xl border border-slate-100 hover:border-theme transition-all cursor-pointer h-full shadow-xs hover:shadow-xl"
                  >
                    <div className="p-4 sm:p-5 flex flex-col h-full items-center text-center">
                    {/* 1. Project Logo / Icon */}
                    <div className="mb-2.5 flex justify-center">
                      <motion.div
                        whileHover={{ rotate: 5, scale: 1.08 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-white shadow-sm ring-1 ring-slate-200/60 relative flex-shrink-0 cursor-pointer flex items-center justify-center bg-gradient-to-br from-theme-soft to-slate-100"
                      >
                        {project.image ? (
                          <img src={project.image} alt={project.title} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                        ) : (
                          <Code size={24} className="text-theme" />
                        )}
                      </motion.div>
                    </div>

                    {/* 2. Category Badge */}
                    <span className="px-2.5 py-0.5 bg-theme-soft text-theme font-bold rounded-md text-[10px] uppercase tracking-wider mb-1.5">
                      {project.category === 'fullstack'
                        ? 'Full-Stack Platform'
                        : project.category === 'ai'
                        ? 'AI & Machine Learning'
                        : project.category === 'iot'
                        ? 'IoT & Safety'
                        : project.category}
                    </span>

                    {/* 3. Title */}
                    <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-theme transition-colors tracking-tight mb-1 line-clamp-1">
                      {project.title}
                    </h3>

                    {/* 4. Short Description */}
                    <p className="text-xs text-slate-600 leading-relaxed mb-2 font-medium max-w-xs line-clamp-2">
                      {project.description}
                    </p>

                    {/* 5. Status Badges */}
                    {(project.status || (project.realWorldImplementation && project.title === 'VSBEC IT Vault')) && (
                      <div className="flex flex-wrap justify-center gap-1 mb-2.5">
                        {project.status && (
                          <motion.span whileHover={{ scale: 1.04 }} className="px-2 py-0.5 bg-emerald-50 text-emerald-600 font-extrabold rounded-md text-[9px] border border-emerald-100 uppercase tracking-wider shadow-xs">
                            {project.status}
                          </motion.span>
                        )}
                        {project.realWorldImplementation && project.title === 'VSBEC IT Vault' && (
                          <motion.span whileHover={{ scale: 1.04 }} className="px-2 py-0.5 bg-indigo-50 text-indigo-600 font-extrabold rounded-md text-[9px] border border-indigo-100 uppercase tracking-wider shadow-xs">
                            Production (350+ Students)
                          </motion.span>
                        )}
                      </div>
                    )}

                    {/* 6. Technology Badges (Top 4 + More Pill) */}
                    <div className="mt-auto flex flex-wrap justify-center gap-1 mb-3">
                      {project.tags.slice(0, 4).map((tag: string, tIdx: number) => (
                        <motion.span whileHover={{ scale: 1.04 }} key={tIdx} className="px-2 py-0.5 bg-slate-50 text-[10px] font-semibold text-slate-500 rounded-md border border-slate-200/80 uppercase tracking-wider group-hover:border-theme-soft group-hover:text-theme transition-colors">
                          {tag}
                        </motion.span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-1.5 py-0.5 bg-theme-soft text-theme text-[9px] font-bold rounded-md border border-theme/20">
                          +{project.tags.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* 7. Action Button */}
                    <div className="w-full flex justify-center gap-2 pt-2.5 border-t border-slate-100" onClick={(e) => e.stopPropagation()}>
                      <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => setActiveProject(project)}
                        className="px-3.5 py-1.5 bg-theme text-white text-xs font-bold rounded-lg shadow-sm hover:brightness-110 transition-all flex items-center gap-1"
                      >
                        View Project <ChevronRight size={13} />
                      </motion.button>
                      {project.link && project.link !== '#' && (
                        <motion.a
                          whileHover={{ scale: 1.08 }}
                          whileTap={{ scale: 0.92 }}
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 bg-slate-50 rounded-lg text-slate-500 hover:text-theme border border-slate-200 transition-colors flex items-center justify-center"
                          title="Live Demo"
                        >
                          <ExternalLink size={14} />
                        </motion.a>
                      )}
                      {project.githubLink && (
                        <motion.a
                          whileHover={{ scale: 1.08 }}
                          whileTap={{ scale: 0.92 }}
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 bg-slate-50 rounded-lg text-slate-500 hover:text-theme border border-slate-200 transition-colors flex items-center justify-center"
                          title="GitHub Repository"
                        >
                          <Github size={14} />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </TiltCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24 sm:py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Achievements"
            subtitle="National hackathon championships, competitive technical accomplishments, verified credentials, and institutional recognitions."
            icon={<Award size={28} />}
          />
          <AchievementsTimeline />
        </div>
      </section>

      <GitHubWidget gitStats={gitStats} primaryColor={THEMES[activeThemeIndex]?.primary || '#4f46e5'} />

      {/* Certifications Section */}
      <section id="certs" className="py-16 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Professional Certifications"
            subtitle="Continuous learning, accredited credentials, and job simulation milestones."
            icon={<Award size={24} />}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {CERTIFICATIONS.map((cert, idx) => {
              const getCompanyIcon = (issuer: string, title: string) => {
                const norm = `${issuer} ${title}`.toLowerCase();
                if (norm.includes('pega')) {
                  return (
                    <span className="w-8 h-8 rounded-lg bg-[#001f5f] text-cyan-400 flex items-center justify-center font-black text-[10px] tracking-tight shadow-xs">
                      PEGA
                    </span>
                  );
                }
                if (norm.includes('code thugs') || norm.includes('shriram')) {
                  return <Trophy size={22} className="text-amber-500 group-hover:scale-110 transition-transform" />;
                }
                if (norm.includes('neural minds')) {
                  return <Award size={22} className="text-indigo-500 group-hover:scale-110 transition-transform" />;
                }
                if (norm.includes('photography') || norm.includes('videography')) {
                  return <Camera size={22} className="text-rose-500 group-hover:scale-110 transition-transform" />;
                }
                if (norm.includes('eco-club') || norm.includes('civil')) {
                  return <Leaf size={22} className="text-emerald-500 group-hover:scale-110 transition-transform" />;
                }
                if (norm.includes('google')) {
                  return (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                    </svg>
                  );
                }
                if (norm.includes('infosys') || norm.includes('springboard')) {
                  return (
                    <img
                      src={infosysSpringboardImg}
                      alt="Infosys Springboard"
                      loading="lazy"
                      decoding="async"
                      className="w-8 h-8 object-contain"
                    />
                  );
                }
                if (norm.includes('tcs')) {
                  return (
                    <img
                      src={tcsIonImg}
                      alt="TCS iON"
                      loading="lazy"
                      decoding="async"
                      className="w-8 h-8 object-contain"
                    />
                  );
                }
                if (norm.includes('tata') || norm.includes('forage')) {
                  return (
                    <img
                      src={tataImg}
                      alt="Tata"
                      loading="lazy"
                      decoding="async"
                      className="w-8 h-8 object-contain"
                    />
                  );
                }
                if (norm.includes('salesforce') || norm.includes('trailhead')) {
                  return (
                    <img
                      src="https://img.icons8.com/?size=100&id=38804&format=png"
                      alt="Salesforce"
                      loading="lazy"
                      decoding="async"
                      className="w-7 h-7 object-contain"
                    />
                  );
                }
                if (norm.includes('cisco')) {
                  return (
                    <img
                      src={ciscoImg}
                      alt="Cisco"
                      loading="lazy"
                      decoding="async"
                      className="w-8 h-8 object-contain"
                    />
                  );
                }
                if (norm.includes('nasscom') || norm.includes('futureskills') || norm.includes('prime')) {
                  return (
                    <img
                      src={futureSkillsImg}
                      alt="FutureSkills Prime"
                      loading="lazy"
                      decoding="async"
                      className="w-8 h-8 object-contain"
                    />
                  );
                }
                if (norm.includes('algo')) {
                  return <Code size={22} className="text-slate-800 group-hover:text-theme transition-colors" />;
                }
                return <Award size={22} className="text-slate-800 group-hover:text-theme transition-colors" />;
              };

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -40, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: idx * 0.04 }}
                  className="w-full"
                >
                  <TiltCard className="p-4 sm:p-5 bg-white rounded-2xl border border-slate-100 hover:border-theme transition-all group h-full shadow-xs hover:shadow-lg">
                    <div className="flex flex-col items-center text-center gap-2.5 w-full h-full">
                      <div className="w-12 h-12 rounded-xl bg-transparent border-2 border-slate-200 group-hover:border-theme text-slate-800 flex items-center justify-center group-hover:scale-105 transition-all shadow-xs flex-shrink-0">
                        {getCompanyIcon(cert.issuer, cert.title)}
                      </div>
                      <div className="flex flex-col items-center text-center w-full">
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug mb-1 group-hover:text-theme transition-colors line-clamp-2">
                          {cert.title}
                        </h3>
                        <div className="flex items-center justify-center gap-1.5 mb-1.5">
                          {cert.type && (
                            <span className="px-2 py-0.5 bg-theme-soft text-theme font-bold rounded-md text-[9px] border border-theme/20 uppercase tracking-wider">
                              {cert.type}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                          {cert.issuer}
                        </p>
                        {cert.link && cert.link !== '#' && (
                          <a 
                            href={cert.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="mt-2.5 inline-flex items-center gap-1 text-xs font-bold text-theme hover:underline"
                          >
                            View {cert.type === 'BADGE' ? 'Badge' : 'Certificate'} <ExternalLink size={11} />
                          </a>
                        )}
                      </div>
                    </div>
                  </TiltCard>
              </motion.div>
            );
          })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Let's Connect"
            subtitle="I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision."
            icon={<MessageSquare size={24} />}
          />
          <ContactSlider />
        </div>
      </section>

      {/* Footer & Official Verified Links Directory */}
      <footer id="official-links" className="pt-20 pb-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto mb-16 p-6 sm:p-8 rounded-3xl bg-slate-50/80 border border-slate-200/80 shadow-xs">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-200/60">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-theme-soft text-theme text-[10px] font-black uppercase tracking-wider mb-2">
                  <Link2 size={12} />
                  <span>Verified Identity &amp; Developer Directory</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 tracking-tight">
                  Best GitHub Profile in VSB Engineering College — Official Links
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                  Verified profiles and codebases for Tharunkumar K (@Tharun4743), B.Tech Information Technology, V.S.B. Engineering College, Karur.
                </p>
              </div>
              <a
                href="/vsb-engineering-college-github-profiles/"
                className="self-start md:self-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-theme text-white text-xs font-bold shadow-xs hover:opacity-90 transition-opacity"
              >
                <span>VSB Showcase Page</span>
                <ChevronRight size={14} />
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="me noopener noreferrer"
                className="p-3 rounded-xl bg-white border border-slate-200/70 hover:border-theme hover:text-theme transition-all font-bold flex items-center gap-2 group shadow-2xs"
                title="Tharunkumar K GitHub Profile — Best GitHub Profile VSB Engineering College"
              >
                <Github size={16} className="text-slate-700 group-hover:text-theme flex-shrink-0" />
                <span className="truncate">GitHub (@Tharun4743)</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="me noopener noreferrer"
                className="p-3 rounded-xl bg-white border border-slate-200/70 hover:border-blue-600 hover:text-blue-600 transition-all font-bold flex items-center gap-2 group shadow-2xs"
                title="Tharunkumar K LinkedIn Profile — VSB Engineering College"
              >
                <Linkedin size={16} className="text-blue-600 flex-shrink-0" />
                <span className="truncate">LinkedIn Profile</span>
              </a>

              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="me noopener noreferrer"
                className="p-3 rounded-xl bg-white border border-slate-200/70 hover:border-amber-600 hover:text-amber-600 transition-all font-bold flex items-center gap-2 group shadow-2xs"
                title="Tharunkumar K LeetCode Profile"
              >
                <Code size={16} className="text-amber-600 flex-shrink-0" />
                <span className="truncate">LeetCode Profile</span>
              </a>

              <a
                href={PERSONAL_INFO.geeksforgeeks}
                target="_blank"
                rel="me noopener noreferrer"
                className="p-3 rounded-xl bg-white border border-slate-200/70 hover:border-emerald-600 hover:text-emerald-600 transition-all font-bold flex items-center gap-2 group shadow-2xs"
                title="Tharunkumar K GeeksforGeeks Profile"
              >
                <Award size={16} className="text-emerald-600 flex-shrink-0" />
                <span className="truncate">GeeksforGeeks</span>
              </a>

              <a
                href="https://github.com/Tharun4743?tab=repositories"
                target="_blank"
                rel="me noopener noreferrer"
                className="p-3 rounded-xl bg-white border border-slate-200/70 hover:border-theme hover:text-theme transition-all font-bold flex items-center gap-2 group shadow-2xs"
                title={`Tharunkumar K ${gitStats.repos}+ GitHub Repositories`}
              >
                <FolderGit2 size={16} className="text-slate-700 group-hover:text-theme flex-shrink-0" />
                <span className="truncate">{gitStats.repos}+ Repositories</span>
              </a>

              <a
                href="https://github.com/marketplace/actions/github-profile-visualizer"
                target="_blank"
                rel="me noopener noreferrer"
                className="p-3 rounded-xl bg-white border border-slate-200/70 hover:border-purple-600 hover:text-purple-600 transition-all font-bold flex items-center gap-2 group shadow-2xs"
                title="GitHub Profile Visualizer on GitHub Marketplace"
              >
                <Box size={16} className="text-purple-600 flex-shrink-0" />
                <span className="truncate">Marketplace Action</span>
              </a>

              <a
                href="https://tharunkumark4743.netlify.app/"
                className="p-3 rounded-xl bg-white border border-slate-200/70 hover:border-theme hover:text-theme transition-all font-bold flex items-center gap-2 group shadow-2xs"
                title="Tharunkumar K Official Developer Portfolio"
              >
                <Globe size={16} className="text-theme flex-shrink-0" />
                <span className="truncate">Web Portfolio</span>
              </a>

              <a
                href="/vsb-engineering-college-github-profiles/"
                className="p-3 rounded-xl bg-white border border-slate-200/70 hover:border-indigo-600 hover:text-indigo-600 transition-all font-bold flex items-center gap-2 group shadow-2xs"
                title="VSB Engineering College GitHub Profiles &amp; Student Developers"
              >
                <FolderGit2 size={16} className="text-indigo-600 flex-shrink-0" />
                <span className="truncate">VSB Showcase</span>
              </a>
            </div>


          </div>

          <div className="text-center">
            <p className="text-slate-400 font-bold text-xs tracking-widest uppercase">
              &copy; {new Date().getFullYear()} THARUNKUMAR K &bull; V.S.B. ENGINEERING COLLEGE, KARUR &bull; ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </footer>

      {/* Interactive Detailed Project Modals (Global Viewport Centered Overlay) */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-hidden">
            {/* Dark Blur Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActiveProject(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            />
            
            {/* Perfectly Centered Modal Card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl bg-white rounded-3xl border border-slate-200 shadow-2xl z-10 text-left relative flex flex-col max-h-[85vh] sm:max-h-[88vh] overflow-hidden"
            >
              {/* Floating Top Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-5 right-5 z-30 p-2.5 bg-white hover:bg-slate-100 rounded-full text-slate-500 hover:text-slate-900 shadow-md border border-slate-200 transition-all cursor-pointer"
                title="Close Modal"
              >
                <X size={20} />
              </button>

              {/* Single Scrollable Container */}
              <div className="overflow-y-auto flex-1 min-h-0 scrollbar-thin">
                {/* Modal Hero Header Section */}
                <div className="p-8 sm:p-10 border-b border-slate-100 bg-slate-50/70 flex flex-col items-center text-center">
                  {/* 1. Logo */}
                  {activeProject.image && (
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-2xl ring-1 ring-slate-200/60 mb-4 flex-shrink-0">
                      <img src={activeProject.image} alt={activeProject.title} className="w-full h-full object-cover" />
                    </div>
                  )}

                  {/* 2. Category */}
                  <span className="px-3.5 py-1 bg-theme-soft text-theme font-bold rounded-lg text-xs uppercase tracking-wider mb-2">
                    {activeProject.category === 'fullstack' ? 'Full-Stack Web Application' : activeProject.category === 'iot' ? 'IoT & Embedded Safety System' : activeProject.category}
                  </span>

                  {/* 3. Title */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tighter mb-3">
                    {activeProject.title}
                  </h3>

                  {/* 4. Short Summary */}
                  <p className="text-slate-600 text-sm sm:text-base font-medium max-w-xl mb-4">
                    {activeProject.description}
                  </p>

                  {/* 5. Status & Role Badges */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {activeProject.date && (
                      <span className="px-3.5 py-1 bg-theme-soft text-theme font-bold rounded-lg text-xs border border-theme/10">
                        {activeProject.date}
                      </span>
                    )}
                    {activeProject.status && (
                      <span className="px-3.5 py-1 bg-emerald-50 text-emerald-600 font-bold rounded-lg text-xs border border-emerald-100">
                        {activeProject.status}
                      </span>
                    )}
                    {activeProject.myRole && (
                      <span className="px-3.5 py-1 bg-slate-100 text-slate-700 font-bold rounded-lg text-xs border border-slate-200">
                        {activeProject.myRole}
                      </span>
                    )}
                  </div>

                  {/* 6. Action CTA Buttons */}
                  <div className="flex flex-wrap justify-center gap-3">
                    {activeProject.link && activeProject.link !== '#' && (
                      <a
                        href={activeProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 bg-theme text-white rounded-xl text-xs font-bold flex items-center gap-2 hover:brightness-110 transition-colors shadow-md"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                    {activeProject.githubLink && (
                      <a
                        href={activeProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold flex items-center gap-2 hover:bg-black transition-colors shadow-md"
                      >
                        <Github size={16} /> GitHub Repository
                      </a>
                    )}
                    {activeProject.driveLink && (
                      <a
                        href={activeProject.driveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 bg-slate-200 text-slate-700 rounded-xl text-xs font-bold flex items-center gap-2 hover:bg-slate-300 transition-colors"
                      >
                        <FileText size={16} /> Project Resources
                      </a>
                    )}
                  </div>
                </div>

                {/* Modal Scrollable Body */}
                <div className="p-8 sm:p-10 space-y-6">
                  {activeProject.realWorldImplementation && (
                    <div className="p-5 bg-indigo-50/70 rounded-2xl border border-indigo-200/70 flex items-start gap-3">
                      <Sparkles className="text-indigo-600 flex-shrink-0 mt-0.5" size={20} />
                      <div>
                        <h4 className="text-[10px] sm:text-xs font-black text-indigo-600 uppercase tracking-widest mb-1">Real-World Implementation</h4>
                        <p className="text-slate-800 text-xs sm:text-sm font-bold leading-relaxed">
                          {activeProject.realWorldImplementation}
                        </p>
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Overview</h4>
                    <p className="text-slate-600 leading-relaxed font-medium text-base whitespace-pre-line">
                      {activeProject.longDescription || activeProject.description}
                    </p>
                  </div>

                  {activeProject.problem && (
                    <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                      <h4 className="text-[10px] sm:text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Problem Statement</h4>
                      <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
                        {activeProject.problem}
                      </p>
                    </div>
                  )}

                  {activeProject.solution && (
                    <div className="p-5 bg-emerald-50/40 rounded-2xl border border-emerald-100/50">
                      <h4 className="text-[10px] sm:text-xs font-black text-emerald-600 uppercase tracking-widest mb-2">Solution</h4>
                      <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
                        {activeProject.solution}
                      </p>
                    </div>
                  )}

                  {activeProject.roleStructure && (
                    <div>
                      <h4 className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Role-Based Architecture</h4>
                      <div className="grid gap-3">
                        {activeProject.roleStructure.map((roleItem: RoleItem, rIdx: number) => (
                          <div key={rIdx} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                            <span className="text-xs font-black text-slate-900 block mb-1">{roleItem.role}</span>
                            <p className="text-slate-600 text-xs font-medium leading-relaxed">{roleItem.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Dynamic Custom Features */}
                  {activeProject.features && (
                    <div>
                      <h4 className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Key Features</h4>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {activeProject.features.map((feat: string, fIdx: number) => (
                          <li key={fIdx} className="p-3 bg-slate-50 rounded-xl text-slate-600 text-xs font-bold border border-slate-100 flex items-start gap-2.5">
                            <span className="text-theme mt-0.5">•</span>
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Custom Architecture Block */}
                  {activeProject.architecture && (
                    <div className="p-5 bg-blue-50/40 rounded-2xl border border-blue-100/50">
                      <h4 className="text-[10px] sm:text-xs font-black text-blue-500 uppercase tracking-widest mb-2">System Architecture & Data Isolation</h4>
                      <p className="text-slate-700 text-xs leading-relaxed font-medium">
                        {activeProject.architecture}
                      </p>
                    </div>
                  )}

                  {/* Custom Engineering Challenge Block */}
                  {activeProject.challenges && (
                    <div className="p-5 bg-red-50/40 rounded-2xl border border-red-100/50">
                      <h4 className="text-[10px] sm:text-xs font-black text-red-500 uppercase tracking-widest mb-2">Technical Challenges & Solutions</h4>
                      <p className="text-slate-700 text-xs leading-relaxed font-medium">
                        {activeProject.challenges}
                      </p>
                    </div>
                  )}

                  {/* Impact Block */}
                  {activeProject.impact && (
                    <div className="p-5 bg-amber-50/40 rounded-2xl border border-amber-100/50">
                      <h4 className="text-[10px] sm:text-xs font-black text-amber-600 uppercase tracking-widest mb-2">Impact & Results</h4>
                      <p className="text-slate-700 text-xs leading-relaxed font-medium whitespace-pre-line">
                        {activeProject.impact}
                      </p>
                    </div>
                  )}

                  {/* Key Learnings Block */}
                  {activeProject.keyLearnings && (
                    <div className="p-5 bg-purple-50/40 rounded-2xl border border-purple-100/50">
                      <h4 className="text-[10px] sm:text-xs font-black text-purple-600 uppercase tracking-widest mb-2">Key Learnings</h4>
                      <p className="text-slate-700 text-xs leading-relaxed font-medium">
                        {activeProject.keyLearnings}
                      </p>
                    </div>
                  )}

                  {/* Tags */}
                  <div>
                    <h4 className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.tags.map((tag: string, tIdx: number) => (
                        <span key={tIdx} className="px-3.5 py-1.5 bg-slate-50 text-xs font-black text-slate-500 rounded-lg border border-slate-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Modern 2026 Interactive Upgrades (Features 1 & 13) */}
      <CommandPalette
        isOpen={isPaletteOpen}
        onClose={() => setIsPaletteOpen(false)}
        onSelectTheme={(idx) => setActiveThemeIndex(idx)}
      />
      <AIChatbot gitStats={gitStats} />
    </div>
  );
};

export default App;


