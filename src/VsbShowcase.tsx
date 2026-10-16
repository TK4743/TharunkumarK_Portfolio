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
  BookOpen
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

                  {/* Profile Action Buttons */}
                  <div className="flex flex-row lg:flex-col gap-3 w-full lg:w-auto flex-shrink-0">
                    <a
                      href={profile.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 lg:flex-none px-5 py-3 rounded-2xl bg-slate-900 text-white hover:bg-slate-800 text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm"
                      title={`Visit ${profile.name}'s GitHub Profile`}
                    >
                      <Github size={16} />
                      <span>GitHub: @{profile.githubUsername}</span>
                      <ExternalLink size={12} />
                    </a>

                    {profile.linkedinUrl && (
                      <a
                        href={profile.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 lg:flex-none px-5 py-3 rounded-2xl bg-white text-slate-700 hover:text-theme hover:border-theme border border-slate-200 text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-xs"
                        title={`Connect with ${profile.name} on LinkedIn`}
                      >
                        <Linkedin size={16} />
                        <span>LinkedIn Profile</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
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
