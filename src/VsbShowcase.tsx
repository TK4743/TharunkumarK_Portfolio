import React from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  ExternalLink,
  Code,
  FileText,
  Activity,
  Award,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  FolderGit2,
  Sparkles,
  ArrowRight,
  BookOpen,
  Globe,
  Link2,
  Box
} from 'lucide-react';
import { VSB_GITHUB_PROFILES, SHOWCASE_CRITERIA, PERSONAL_INFO } from './constants';
import { VsbStudentProfile } from './type';

interface VsbShowcaseProps {
  isDedicatedPage?: boolean;
  onNavigateHome?: () => void;
}

export const VsbShowcase: React.FC<VsbShowcaseProps> = ({ isDedicatedPage = false, onNavigateHome }) => {
  const getCriteriaIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code size={20} className="text-theme" />;
      case 'fileText':
        return <FileText size={20} className="text-theme" />;
      case 'activity':
        return <Activity size={20} className="text-theme" />;
      case 'award':
        return <Award size={20} className="text-theme" />;
      default:
        return <ShieldCheck size={20} className="text-theme" />;
    }
  };

  return (
    <section
      id="vsb-github-showcase"
      className={`py-16 sm:py-24 bg-slate-50 relative overflow-hidden ${
        isDedicatedPage ? 'pt-32 min-h-screen' : ''
      }`}
    >
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full blur-[120px] pointer-events-none opacity-25" style={{ backgroundColor: 'var(--theme-glow)' }} />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full blur-[120px] pointer-events-none opacity-25" style={{ backgroundColor: 'var(--theme-glow)' }} />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Navigation Breadcrumb when on dedicated page */}
        {isDedicatedPage && (
          <div className="max-w-6xl mx-auto mb-8">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
              <a
                href="/"
                onClick={(e) => {
                  if (onNavigateHome) {
                    e.preventDefault();
                    onNavigateHome();
                  }
                }}
                className="hover:text-theme transition-colors flex items-center gap-1"
              >
                Home
              </a>
              <span className="text-slate-300">/</span>
              <span className="text-theme">VSB Engineering College GitHub Profiles</span>
            </nav>
            {onNavigateHome && (
              <button
                onClick={onNavigateHome}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:text-theme hover:border-theme shadow-xs transition-all"
              >
                &larr; Back to Main Portfolio
              </button>
            )}
          </div>
        )}

        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-theme-soft border border-theme/20 text-theme text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <FolderGit2 size={14} />
            <span>V.S.B. Engineering College, Karur &bull; Student Developer Community</span>
          </div>

          {isDedicatedPage ? (
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-4">
              Best GitHub Profiles — <span className="text-theme">VSB Engineering College</span>
            </h1>
          ) : (
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
              Best GitHub Profiles — <span className="text-theme">VSB Engineering College</span>
            </h2>
          )}

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto">
            Explore GitHub profiles and software projects from students associated with <strong>V.S.B. Engineering College, Karur</strong>. Discover coding work, repositories, technologies, and student-led innovation across Information Technology, full-stack software development, AI systems, and modern software engineering.
          </p>

          {!isDedicatedPage && (
            <div className="mt-4">
              <a
                href="/vsb-engineering-college-github-profiles/"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-theme hover:underline"
              >
                View dedicated showcase page <ArrowRight size={13} />
              </a>
            </div>
          )}
        </div>

        {/* Transparent Methodology & Criteria Cards */}
        <div className="max-w-6xl mx-auto mb-14">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-100">
              <div>
                <h3 className="text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
                  <Sparkles size={18} className="text-theme" />
                  Showcase Evaluation Methodology
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                  Profiles and repositories in this showcase are curated using transparent technical benchmarks, rather than superficial follower metrics.
                </p>
              </div>
              <span className="self-start md:self-auto px-3 py-1 bg-slate-100 text-slate-600 font-bold text-[11px] rounded-full uppercase tracking-wider">
                Transparent Criteria
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {SHOWCASE_CRITERIA.map((criterion, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100 hover:border-theme/30 hover:bg-theme-soft/30 transition-all"
                >
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-theme flex items-center justify-center mb-3 shadow-xs">
                    {getCriteriaIcon(criterion.iconName)}
                  </div>
                  <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider mb-1.5">
                    {criterion.title}
                  </h4>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {criterion.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Profiles Cards */}
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12">
          {VSB_GITHUB_PROFILES.map((profile: VsbStudentProfile, pIdx: number) => {
            const isTharun = profile.githubUsername.toLowerCase() === 'tharun4743';

            return (
              <motion.article
                key={profile.githubUsername}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: pIdx * 0.1 }}
                className={`bg-white rounded-3xl sm:rounded-[2.5rem] border ${
                  isTharun ? 'border-theme/30 ring-2 ring-theme/10 shadow-lg' : 'border-slate-200/80 shadow-sm'
                } p-6 sm:p-10 transition-all hover:shadow-xl`}
              >
                {/* Header & Bio */}
                <div className="flex flex-col lg:flex-row items-start justify-between gap-6 pb-8 border-b border-slate-100">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-theme text-white text-xs font-black rounded-lg uppercase tracking-wider shadow-xs">
                        {isTharun ? 'Featured Lead Developer' : 'Student Developer'}
                      </span>
                      <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-lg border border-slate-200">
                        {profile.batch}
                      </span>
                      <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-lg border border-slate-200">
                        {profile.department}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-1">
                      {profile.name}{' '}
                      <span className="text-slate-400 text-lg font-bold">(@{profile.githubUsername})</span>
                    </h3>

                    <p className="text-sm font-bold text-theme mb-3">
                      {profile.role} &bull; {profile.college}
                    </p>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium max-w-3xl">
                      {profile.description}
                    </p>

                    {/* Metrics Pills */}
                    <div className="flex flex-wrap items-center gap-2 mt-4">
                      {profile.metrics.commits && (
                        <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-extrabold rounded-lg border border-emerald-200 flex items-center gap-1.5 shadow-xs">
                          <Activity size={12} /> {profile.metrics.commits}
                        </span>
                      )}
                      {profile.metrics.repos && (
                        <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-extrabold rounded-lg border border-indigo-200 flex items-center gap-1.5 shadow-xs">
                          <FolderGit2 size={12} /> {profile.metrics.repos}
                        </span>
                      )}
                      {profile.metrics.achievements && (
                        <span className="px-3 py-1 bg-amber-50 text-amber-800 text-xs font-extrabold rounded-lg border border-amber-200 flex items-center gap-1.5 shadow-xs">
                          <Award size={12} /> {profile.metrics.achievements}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Profile Action Buttons Grid */}
                  <div className="flex flex-wrap lg:flex-col gap-2.5 w-full lg:w-64 flex-shrink-0">
                    <a
                      href={profile.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer me"
                      className="flex-1 lg:flex-none px-4 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 text-xs font-bold transition-all flex items-center justify-between shadow-sm"
                      title="Visit Tharunkumar K's GitHub Profile"
                    >
                      <div className="flex items-center gap-2">
                        <Github size={15} />
                        <span>GitHub Profile</span>
                      </div>
                      <ExternalLink size={12} />
                    </a>

                    {profile.linkedinUrl && (
                      <a
                        href={profile.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer me"
                        className="flex-1 lg:flex-none px-4 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 text-xs font-bold transition-all flex items-center justify-between shadow-xs"
                        title="Connect with Tharunkumar K on LinkedIn"
                      >
                        <div className="flex items-center gap-2">
                          <Linkedin size={15} />
                          <span>LinkedIn Profile</span>
                        </div>
                        <ExternalLink size={12} />
                      </a>
                    )}

                    <a
                      href={PERSONAL_INFO.leetcode}
                      target="_blank"
                      rel="noopener noreferrer me"
                      className="flex-1 lg:flex-none px-4 py-2.5 rounded-xl bg-amber-500/10 text-amber-800 hover:bg-amber-500 hover:text-white border border-amber-200 text-xs font-bold transition-all flex items-center justify-between shadow-xs"
                      title="View Tharunkumar K on LeetCode"
                    >
                      <div className="flex items-center gap-2">
                        <Code size={15} />
                        <span>LeetCode Profile</span>
                      </div>
                      <ExternalLink size={12} />
                    </a>

                    <a
                      href={PERSONAL_INFO.geeksforgeeks}
                      target="_blank"
                      rel="noopener noreferrer me"
                      className="flex-1 lg:flex-none px-4 py-2.5 rounded-xl bg-emerald-500/10 text-emerald-800 hover:bg-emerald-600 hover:text-white border border-emerald-200 text-xs font-bold transition-all flex items-center justify-between shadow-xs"
                      title="View Tharunkumar K on GeeksforGeeks"
                    >
                      <div className="flex items-center gap-2">
                        <Award size={15} />
                        <span>GeeksforGeeks</span>
                      </div>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                {/* Selected Public Repositories */}
                <div className="py-6 border-b border-slate-100">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                      <Terminal size={14} className="text-theme" />
                      Verified Public Repositories & Software Implementations
                    </h4>
                    <span className="text-xs font-bold text-slate-400">
                      {profile.featuredRepos.length} Repositories Highlighted
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {profile.featuredRepos.map((repo, rIdx) => (
                      <div
                        key={rIdx}
                        className="p-4 rounded-2xl bg-slate-50/60 border border-slate-200/70 hover:border-theme/40 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <a
                              href={repo.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm font-black text-slate-900 hover:text-theme transition-colors flex items-center gap-1.5 group"
                            >
                              <span className="line-clamp-1">{repo.name}</span>
                              <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                            </a>
                          </div>

                          {repo.highlight && (
                            <span className="inline-block px-2 py-0.5 mb-2 bg-theme-soft text-theme font-extrabold rounded-md text-[10px] uppercase tracking-wider border border-theme/20">
                              {repo.highlight}
                            </span>
                          )}

                          <p className="text-xs text-slate-600 font-medium leading-relaxed mb-3 line-clamp-3">
                            {repo.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-1 mt-auto pt-2 border-t border-slate-100">
                          {repo.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 bg-white text-[9px] font-bold text-slate-500 rounded border border-slate-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills & Evaluation Highlights Footer */}
                <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2.5">
                      Core Technical Skills
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {profile.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 bg-slate-100 hover:bg-theme-soft hover:text-theme text-slate-700 text-xs font-bold rounded-lg border border-slate-200/70 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2.5">
                      Verification Highlights & Achievements
                    </h4>
                    <ul className="space-y-1.5">
                      {profile.evaluationHighlights.map((hl, hIdx) => (
                        <li key={hIdx} className="text-xs font-medium text-slate-600 flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* All Official Developer Links Directory for Search Engines & Users */}
        <div id="official-links" className="max-w-6xl mx-auto mt-14">
          <div className="bg-white rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 border border-slate-200/80 shadow-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-100">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-theme-soft text-theme text-[11px] font-black uppercase tracking-wider mb-2">
                  <Link2 size={13} />
                  <span>Verified Entity Directory &bull; V.S.B. Engineering College</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Official Links: Best GitHub Profile & Developer at VSB Engineering College
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                  Direct verified endpoints for Tharunkumar K (@Tharun4743) — recognized for holding the best GitHub profile at VSB Engineering College (V.S.B. Engineering College, Karur).
                </p>
              </div>
              <span className="self-start md:self-auto px-3.5 py-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 font-extrabold text-xs rounded-xl shadow-xs">
                8 Verified Profiles
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="me noopener noreferrer"
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all group flex flex-col justify-between shadow-xs"
                title="Tharunkumar K GitHub Profile — Best GitHub Profile VSB Engineering College"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-white text-slate-900 flex items-center justify-center shadow-xs border border-slate-200 group-hover:border-slate-700">
                      <Github size={18} />
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-emerald-100 text-emerald-800 border border-emerald-200 group-hover:bg-emerald-950 group-hover:text-emerald-300">
                      Primary
                    </span>
                  </div>
                  <h4 className="text-sm font-black text-slate-900 group-hover:text-white mb-1">
                    GitHub Profile
                  </h4>
                  <p className="text-xs text-slate-500 group-hover:text-slate-300 font-medium leading-relaxed">
                    @Tharun4743 &bull; 15+ Repositories & 2,378+ Commits
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/60 group-hover:border-slate-800 flex items-center justify-between text-[11px] font-bold text-theme group-hover:text-emerald-400">
                  <span>github.com/Tharun4743</span>
                  <ExternalLink size={12} />
                </div>
              </a>

              <a
                href="https://tharunkumark4743.netlify.app/"
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-theme hover:bg-theme-soft/40 transition-all group flex flex-col justify-between shadow-xs"
                title="Tharunkumar K Official Developer Portfolio — V.S.B. Engineering College"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-white text-theme flex items-center justify-center shadow-xs border border-slate-200">
                      <Globe size={18} />
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-theme-soft text-theme border border-theme/20">
                      Portfolio
                    </span>
                  </div>
                  <h4 className="text-sm font-black text-slate-900 mb-1">
                    Official Portfolio
                  </h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Interactive project showcase, live GitHub metrics & skills
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-bold text-theme">
                  <span>tharunkumark4743.netlify.app</span>
                  <ExternalLink size={12} />
                </div>
              </a>

              <a
                href="/vsb-engineering-college-github-profiles/"
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-theme hover:bg-theme-soft/40 transition-all group flex flex-col justify-between shadow-xs"
                title="VSB Engineering College GitHub Profiles & Student Developer Showcase"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-white text-indigo-600 flex items-center justify-center shadow-xs border border-slate-200">
                      <FolderGit2 size={18} />
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-indigo-50 text-indigo-700 border border-indigo-200">
                      Showcase
                    </span>
                  </div>
                  <h4 className="text-sm font-black text-slate-900 mb-1">
                    VSB GitHub Showcase
                  </h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Dedicated guide to GitHub profiles at VSB Engineering College
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-bold text-indigo-600">
                  <span>/vsb-engineering-college...</span>
                  <ExternalLink size={12} />
                </div>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="me noopener noreferrer"
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-600 hover:bg-blue-600 hover:text-white transition-all group flex flex-col justify-between shadow-xs"
                title="Tharunkumar K LinkedIn Profile — Lead Developer at V.S.B. Engineering College"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-white text-blue-600 flex items-center justify-center shadow-xs border border-slate-200">
                      <Linkedin size={18} />
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-blue-50 text-blue-700 border border-blue-200 group-hover:bg-blue-900 group-hover:text-blue-200">
                      Professional
                    </span>
                  </div>
                  <h4 className="text-sm font-black text-slate-900 group-hover:text-white mb-1">
                    LinkedIn Profile
                  </h4>
                  <p className="text-xs text-slate-500 group-hover:text-blue-100 font-medium leading-relaxed">
                    Verified public profile & software engineering experience
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/60 group-hover:border-blue-500 flex items-center justify-between text-[11px] font-bold text-blue-600 group-hover:text-white">
                  <span>in/tharunkumark4743</span>
                  <ExternalLink size={12} />
                </div>
              </a>

              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="me noopener noreferrer"
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-amber-500 hover:bg-amber-500 hover:text-white transition-all group flex flex-col justify-between shadow-xs"
                title="Tharunkumar K LeetCode Profile — Algorithmic Problem Solving"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-white text-amber-600 flex items-center justify-center shadow-xs border border-slate-200">
                      <Code size={18} />
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-amber-50 text-amber-800 border border-amber-200 group-hover:bg-amber-900 group-hover:text-amber-200">
                      Algorithms
                    </span>
                  </div>
                  <h4 className="text-sm font-black text-slate-900 group-hover:text-white mb-1">
                    LeetCode Profile
                  </h4>
                  <p className="text-xs text-slate-500 group-hover:text-amber-100 font-medium leading-relaxed">
                    @Tharunkumar__K &bull; Data structures and algorithms
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/60 group-hover:border-amber-400 flex items-center justify-between text-[11px] font-bold text-amber-700 group-hover:text-white">
                  <span>leetcode.com/u/Tharun...</span>
                  <ExternalLink size={12} />
                </div>
              </a>

              <a
                href={PERSONAL_INFO.geeksforgeeks}
                target="_blank"
                rel="me noopener noreferrer"
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-600 hover:bg-emerald-600 hover:text-white transition-all group flex flex-col justify-between shadow-xs"
                title="Tharunkumar K GeeksforGeeks Profile — Campus Mantri 2026"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-white text-emerald-600 flex items-center justify-center shadow-xs border border-slate-200">
                      <Award size={18} />
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-emerald-50 text-emerald-700 border border-emerald-200 group-hover:bg-emerald-900 group-hover:text-emerald-200">
                      Ambassador
                    </span>
                  </div>
                  <h4 className="text-sm font-black text-slate-900 group-hover:text-white mb-1">
                    GeeksforGeeks Profile
                  </h4>
                  <p className="text-xs text-slate-500 group-hover:text-emerald-100 font-medium leading-relaxed">
                    Campus Mantri 2026 & technical problem solver
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/60 group-hover:border-emerald-500 flex items-center justify-between text-[11px] font-bold text-emerald-700 group-hover:text-white">
                  <span>geeksforgeeks.org/profile</span>
                  <ExternalLink size={12} />
                </div>
              </a>

              <a
                href="https://github.com/Tharun4743?tab=repositories"
                target="_blank"
                rel="me noopener noreferrer"
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-800 hover:bg-slate-800 hover:text-white transition-all group flex flex-col justify-between shadow-xs"
                title="Tharunkumar K Public Repositories on GitHub — VSB Engineering College"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-white text-slate-800 flex items-center justify-center shadow-xs border border-slate-200">
                      <Terminal size={18} />
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-slate-200 text-slate-800 group-hover:bg-slate-700 group-hover:text-slate-200">
                      15+ Repos
                    </span>
                  </div>
                  <h4 className="text-sm font-black text-slate-900 group-hover:text-white mb-1">
                    GitHub Repositories
                  </h4>
                  <p className="text-xs text-slate-500 group-hover:text-slate-300 font-medium leading-relaxed">
                    Full-stack web apps, IoT hardware systems, and AI tools
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/60 group-hover:border-slate-700 flex items-center justify-between text-[11px] font-bold text-slate-700 group-hover:text-emerald-400">
                  <span>?tab=repositories</span>
                  <ExternalLink size={12} />
                </div>
              </a>

              <a
                href="https://github.com/marketplace/actions/github-profile-visualizer"
                target="_blank"
                rel="me noopener noreferrer"
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-purple-600 hover:bg-purple-600 hover:text-white transition-all group flex flex-col justify-between shadow-xs"
                title="GitHub Profile Visualizer Action on GitHub Marketplace"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-white text-purple-600 flex items-center justify-center shadow-xs border border-slate-200">
                      <Box size={18} />
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-purple-50 text-purple-700 border border-purple-200 group-hover:bg-purple-900 group-hover:text-purple-200">
                      Marketplace
                    </span>
                  </div>
                  <h4 className="text-sm font-black text-slate-900 group-hover:text-white mb-1">
                    Marketplace Action
                  </h4>
                  <p className="text-xs text-slate-500 group-hover:text-purple-100 font-medium leading-relaxed">
                    Published GitHub Action: Profile Visualizer 3D Skyline
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/60 group-hover:border-purple-500 flex items-center justify-between text-[11px] font-bold text-purple-700 group-hover:text-white">
                  <span>marketplace/actions</span>
                  <ExternalLink size={12} />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Institutional Non-Affiliation / Transparency Disclaimer */}
        <div className="max-w-4xl mx-auto mt-14 p-6 rounded-2xl bg-white border border-slate-200 text-center shadow-xs">
          <p className="text-xs text-slate-500 leading-relaxed font-medium">
            <strong>Transparency & Attribution Notice:</strong> This page is an independent student-led portfolio showcase maintained by Tharunkumar K to highlight software engineering projects and public GitHub profiles associated with <strong>V.S.B. Engineering College, Karur</strong>. Inclusion in this showcase does not imply official institutional endorsement or administrative representation by V.S.B. Engineering College. Profile details are based on verified public GitHub repositories and student academic credentials.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VsbShowcase;
