import React from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Award,
  Terminal,
  FolderGit2,
  CheckCircle2,
  Activity,
  Box,
  GraduationCap,
  Sparkles,
  ArrowLeft
} from 'lucide-react';
import { PERSONAL_INFO } from './constants';

interface VsbShowcaseProps {
  isDedicatedPage?: boolean;
  onNavigateHome?: () => void;
  gitStats?: {
    followers?: number;
    repos?: number;
    commits?: number;
  };
}

export const VsbShowcase: React.FC<VsbShowcaseProps> = ({ isDedicatedPage = false, onNavigateHome, gitStats }) => {
  const [liveStats, setLiveStats] = React.useState({
    repos: gitStats?.repos || 30,
    commits: gitStats?.commits || 3574
  });

  React.useEffect(() => {
    if (gitStats?.repos && gitStats?.commits) {
      setLiveStats({ repos: gitStats.repos, commits: gitStats.commits });
      return;
    }
    let isMounted = true;
    const fetchLive = async () => {
      try {
        const [userRes, commitsRes] = await Promise.allSettled([
          fetch('https://api.github.com/users/Tharun4743'),
          fetch('https://api.github.com/search/commits?q=author:Tharun4743')
        ]);
        let repos = 30;
        let commits = 3574;
        if (userRes.status === 'fulfilled' && userRes.value.ok) {
          const u = await userRes.value.json();
          if (typeof u.public_repos === 'number') repos = u.public_repos;
        }
        if (commitsRes.status === 'fulfilled' && commitsRes.value.ok) {
          const c = await commitsRes.value.json();
          if (typeof c.total_count === 'number' && c.total_count > 0) commits = c.total_count;
        }
        if (isMounted) {
          setLiveStats({ repos, commits });
        }
      } catch {
        // ignore
      }
    };
    fetchLive();
    return () => { isMounted = false; };
  }, [gitStats?.repos, gitStats?.commits]);

  const featuredRepos = [
    {
      name: 'taskmanager (VSBEC IT Vault)',
      title: 'VSBEC IT Vault — Academic Task Manager',
      description: 'Enterprise governance & placement assessment suite actively serving 365+ students across 6 departmental sections. Features sandboxed Monaco IDE, 3-tier proof verification, and daily LeetCode velocity sync.',
      githubUrl: 'https://github.com/Tharun4743/taskmanager',
      demoUrl: 'https://it-taskmanager.vercel.app/',
      highlight: 'SIH 2026 Top 50 Nominee & 365+ Campus Users',
      highlightColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      tags: ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL (35 Tables)', 'Monaco IDE', 'Cloudinary']
    },
    {
      name: 'GOAT-CE (GOAT Code Editor)',
      title: 'GOAT Code Editor — Cloud Collaborative IDE',
      description: 'Browser-based pair programming IDE with custom WebRTC peer voice mesh, race-condition-safe real-time cursor sync, and multi-language compilation. Won 1st Place Nationally at Code Thugs 2k26.',
      githubUrl: 'https://github.com/Tharun4743/GOAT-CE',
      demoUrl: 'https://goatcode-editor.onrender.com',
      highlight: '1st Place National Winner (Code Thugs 2K26 🥇)',
      highlightColor: 'bg-amber-50 text-amber-800 border-amber-200',
      tags: ['React 19', 'WebRTC Audio Mesh', 'Socket.IO', 'Monaco Editor', 'Piston API', 'PostgreSQL 16']
    },
    {
      name: 'findora-ai (FINDORA AI)',
      title: 'FINDORA AI — Campus Lost & Found Network',
      description: 'Campus lost & found network using Google Gemini 2.5 Flash for multimodal hybrid matching, zero-knowledge blind verification, optical GPS watermarking, and instant Telegram bot broadcasts.',
      githubUrl: 'https://github.com/Tharun4743/findora-ai',
      demoUrl: 'https://findoravsbec.vercel.app',
      highlight: '3rd Prize Winner (Neural Minds AIML Hackathon 🥉)',
      highlightColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      tags: ['React 19', 'Gemini 2.5 Flash', 'Supabase', 'Telegram Bot API', 'Cloudinary']
    },
    {
      name: 'github-profile-visualizer',
      title: 'GitHub Profile Visualizer (Action)',
      description: 'Published GitHub Marketplace Action and 13-in-1 SVG telemetry suite rendering 3D isometric contribution skylines, velocity waves, and multi-platform cards with zero runtime browser dependencies.',
      githubUrl: 'https://github.com/Tharun4743/github-profile-visualizer',
      demoUrl: 'https://github.com/marketplace/actions/github-profile-visualizer',
      highlight: 'Published GitHub Marketplace Action',
      highlightColor: 'bg-purple-50 text-purple-700 border-purple-200',
      tags: ['TypeScript', 'Node.js 20', 'GitHub Actions', 'SVG Vector Engine', 'Isometric Math']
    },
    {
      name: 'AGILE-INNOVATORS-smart-helmet-',
      title: 'Smart Helmet IoT Safety System',
      description: 'Dual-unit rider safety system with IR helmet wear verification, MQ-3 alcohol detection, eye-blink drowsiness fatigue monitoring, and RF 433MHz sub-500ms ignition cutoff.',
      githubUrl: 'https://github.com/Tharun4743/AGILE-INNOVATORS-smart-helmet-',
      highlight: 'SIH 2025 Top 50 National Nominee',
      highlightColor: 'bg-blue-50 text-blue-700 border-blue-200',
      tags: ['Arduino Nano/Uno', 'C/C++', 'RF 433MHz', 'MQ-3 Sensor', 'Relay Interlock']
    },
    {
      name: 'WorkSuite-HRMS',
      title: 'Work Suite HRMS — Workforce Platform',
      description: 'Workforce operations platform with 2-tier RBAC, automated payroll tax deduction engine, biometric attendance tracking, and leave state machines. National Finalist at Odoo × NMIT 2026.',
      githubUrl: 'https://github.com/Tharun4743/WorkSuite-HRMS',
      demoUrl: 'https://worksuite-hrms.onrender.com',
      highlight: 'Odoo × NMIT Bangalore 2026 Finalist',
      highlightColor: 'bg-rose-50 text-rose-700 border-rose-200',
      tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'RBAC', 'Payroll Automation']
    }
  ];

  const campusRoles = [
    {
      title: 'Department Student Coordinator',
      org: 'Department of Information Technology, VSBEC',
      period: '2024 – Present',
      desc: 'Appointed student coordinator for Information Technology. Leading departmental task digitization, academic initiatives, and peer technical mentoring.'
    },
    {
      title: 'SIH 2026 IT Department Coordinator',
      org: 'V.S.B. Engineering College, Karur',
      period: '2026',
      desc: 'Mentoring 15+ student hackathon teams, reviewing problem statements, and overseeing institutional project pipelines for Smart India Hackathon.'
    },
    {
      title: 'GeeksforGeeks Campus Mantri',
      org: 'GeeksforGeeks Ambassador Program',
      period: '2026',
      desc: 'Organized and hosted campus coding workshops, technical hackathons, and algorithmic problem-solving bootcamps for 200+ student developers.'
    }
  ];

  const coreSkills = [
    'React 19',
    'Next.js 15',
    'TypeScript',
    'Node.js',
    'Express.js',
    'PostgreSQL',
    'Supabase',
    'Google Gemini AI',
    'WebRTC Audio',
    'Socket.IO',
    'Monaco IDE',
    'Arduino C/C++',
    'Docker'
  ];

  return (
    <section
      id="vsb-github-showcase"
      className={`py-12 sm:py-20 bg-slate-50 relative overflow-hidden ${
        isDedicatedPage ? 'pt-28 sm:pt-32 min-h-screen' : ''
      }`}
    >
      {/* Subtle Ambient Glow */}
      <div
        className="absolute top-1/4 -left-32 w-80 h-80 rounded-full blur-[100px] pointer-events-none opacity-20"
        style={{ backgroundColor: 'var(--theme-glow)' }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full blur-[100px] pointer-events-none opacity-20"
        style={{ backgroundColor: 'var(--theme-glow)' }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        {/* Navigation Breadcrumb (when on dedicated page) */}
        {isDedicatedPage && (
          <div className="mb-8">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
              <a
                href="/"
                onClick={(e) => {
                  if (onNavigateHome) {
                    e.preventDefault();
                    onNavigateHome();
                  }
                }}
                className="hover:text-theme transition-colors"
              >
                Home
              </a>
              <span className="text-slate-300">/</span>
              <span className="text-theme">VSB Engineering College Showcase</span>
            </nav>

            {onNavigateHome && (
              <button
                onClick={onNavigateHome}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:text-theme hover:border-theme shadow-xs transition-all cursor-pointer"
              >
                <ArrowLeft size={14} /> Back to Full Portfolio
              </button>
            )}
          </div>
        )}

        {/* Clean, Authentic Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-theme-soft border border-theme/20 text-theme text-xs font-extrabold uppercase tracking-wider mb-3 shadow-xs">
            <FolderGit2 size={14} />
            <span>V.S.B. Engineering College, Karur &bull; Student Engineering Showcase</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Engineering Showcase — <span className="text-theme">Tharunkumar K</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            Highlighting real-world software platforms, national hackathon championships, and open-source contributions engineered by <strong>Tharunkumar K</strong> at <strong>V.S.B. Engineering College, Karur</strong> (Department of Information Technology, Batch 2024–2028).
          </p>
        </div>

        {/* Featured Developer Hero Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 mb-12">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 pb-8 border-b border-slate-100">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-theme text-white text-xs font-black rounded-lg uppercase tracking-wider shadow-xs">
                  Department Student Coordinator
                </span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-lg border border-slate-200">
                  B.Tech IT (2024–2028)
                </span>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-lg border border-emerald-200">
                  CGPA: 8.5 / 10
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
                Tharunkumar K <span className="text-slate-400 text-lg font-bold">(@Tharun4743)</span>
              </h2>

              <p className="text-sm font-bold text-theme mb-3">
                Full-Stack Systems Architect & AI Systems Developer &bull; V.S.B. Engineering College, Karur
              </p>

              <p className="text-sm text-slate-600 leading-relaxed font-medium max-w-3xl">
                2× Hackathon Winner (Code Thugs 2K26 🥇, Neural Minds 🥉), India Innovates 2026 & Odoo × NMIT 2026 National Finalist, and 2× SIH Top 50 Nominee. Creator of <strong>VSBEC IT Vault</strong> (adopted by 365+ daily students across 6 departmental sections) and published creator on the official GitHub Marketplace.
              </p>

              {/* Verified Metrics Chips */}
              <div className="flex flex-wrap items-center gap-2.5 mt-5">
                <span className="px-3.5 py-1.5 bg-emerald-50 text-emerald-800 text-xs font-black rounded-xl border border-emerald-200/80 flex items-center gap-1.5 shadow-2xs">
                  <Activity size={13} /> {liveStats.commits.toLocaleString()}+ Commits
                </span>
                <span className="px-3.5 py-1.5 bg-indigo-50 text-indigo-800 text-xs font-black rounded-xl border border-indigo-200/80 flex items-center gap-1.5 shadow-2xs">
                  <FolderGit2 size={13} /> {liveStats.repos}+ Public Repositories ({liveStats.repos + 5}+ Ecosystem)
                </span>
                <span className="px-3.5 py-1.5 bg-amber-50 text-amber-900 text-xs font-black rounded-xl border border-amber-200/80 flex items-center gap-1.5 shadow-2xs">
                  <Award size={13} /> 2× Hackathon Champion
                </span>
                <span className="px-3.5 py-1.5 bg-purple-50 text-purple-900 text-xs font-black rounded-xl border border-purple-200/80 flex items-center gap-1.5 shadow-2xs">
                  <Box size={13} /> GitHub Marketplace Author
                </span>
              </div>
            </div>

            {/* Quick Action Profile Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 gap-2.5 w-full lg:w-56 flex-shrink-0">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer me"
                className="px-4 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 text-xs font-bold transition-all flex items-center justify-between shadow-xs"
              >
                <div className="flex items-center gap-2">
                  <Github size={15} />
                  <span>GitHub</span>
                </div>
                <ExternalLink size={12} />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer me"
                className="px-4 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 text-xs font-bold transition-all flex items-center justify-between shadow-xs"
              >
                <div className="flex items-center gap-2">
                  <Linkedin size={15} />
                  <span>LinkedIn</span>
                </div>
                <ExternalLink size={12} />
              </a>

              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noopener noreferrer me"
                className="px-4 py-2.5 rounded-xl bg-amber-500/10 text-amber-800 hover:bg-amber-500 hover:text-white border border-amber-200 text-xs font-bold transition-all flex items-center justify-between shadow-xs"
              >
                <div className="flex items-center gap-2">
                  <Code size={15} />
                  <span>LeetCode</span>
                </div>
                <ExternalLink size={12} />
              </a>

              <a
                href="https://github.com/marketplace/actions/github-profile-visualizer"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-purple-50 text-purple-800 hover:bg-purple-600 hover:text-white border border-purple-200 text-xs font-bold transition-all flex items-center justify-between shadow-xs"
              >
                <div className="flex items-center gap-2">
                  <Box size={15} />
                  <span>Marketplace</span>
                </div>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Core Technical Strengths & Campus Leadership Row */}
          <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                <Code size={14} className="text-theme" />
                Technical Competencies
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {coreSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-lg border border-slate-200/80 hover:bg-theme-soft hover:text-theme transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                <GraduationCap size={14} className="text-theme" />
                Campus Leadership & Responsibilities
              </h3>
              <div className="space-y-3">
                {campusRoles.map((role, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="flex items-baseline justify-between gap-2 mb-1">
                      <span className="text-xs font-black text-slate-900">{role.title}</span>
                      <span className="text-[10px] font-bold text-slate-400">{role.period}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">{role.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Verified Flagship Projects Grid */}
        <div className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                <Terminal size={20} className="text-theme" />
                Verified Repositories & Real-World Implementations
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                Open-source codebases, institutional deployments, and national competition winning projects.
              </p>
            </div>
            <span className="self-start sm:self-auto px-3 py-1 bg-white border border-slate-200 text-slate-700 text-xs font-bold rounded-full shadow-2xs">
              6 Verified Systems
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredRepos.map((repo, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-theme/40 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-sm font-black text-slate-900 tracking-tight line-clamp-1">
                      {repo.title}
                    </h3>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      {repo.demoUrl && (
                        <a
                          href={repo.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 rounded bg-slate-100 hover:bg-theme hover:text-white text-slate-600 transition-colors"
                          title="Open Live Application"
                        >
                          <ExternalLink size={12} />
                        </a>
                      )}
                      <a
                        href={repo.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 rounded bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-600 transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github size={12} />
                      </a>
                    </div>
                  </div>

                  <span className={`inline-block px-2.5 py-0.5 mb-3 text-[10px] font-extrabold rounded-md uppercase tracking-wider border ${repo.highlightColor}`}>
                    {repo.highlight}
                  </span>

                  <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">
                    {repo.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 pt-3 border-t border-slate-100 mt-auto">
                  {repo.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 bg-slate-50 text-[10px] font-bold text-slate-500 rounded border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Clean, Professional Footer Note */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 text-center shadow-2xs">
          <p className="text-xs text-slate-500 leading-relaxed font-medium">
            Maintained by <strong>Tharunkumar K</strong> (Department Student Coordinator) to showcase software engineering architectures, institutional platforms, and hackathon accomplishments originating from the <strong>Department of Information Technology, V.S.B. Engineering College, Karur</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VsbShowcase;
