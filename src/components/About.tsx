import { Check, ShieldCheck, Compass, Lightbulb, BarChart3, BookOpen } from 'lucide-react';
import { PERSONAL_DETAILS } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-indigo-400 uppercase mb-3">
            <span>About Me</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Professional Background</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight font-display text-balance">
            Disciplined Campaign Strategy Grounded in Digital Intent & Performance
          </h2>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-base sm:text-lg">
            <p>
              My focus in digital marketing centers squarely on <strong className="text-white font-semibold">paid advertising systems</strong>. In a crowded digital space, organic reach alone is rarely enough for predictable customer acquisition. I concentrate on understanding the underlying mechanics of <strong className="text-white font-semibold">Meta Ads, Google Ads, and TikTok Ads</strong>—how algorithms evaluate creative relevance, how consumer search intent differs from passive feed discovery, and how to direct ad spend with purpose.
            </p>
            <p>
              Rather than relying on arbitrary assumptions, I focus on the core fundamentals of paid traffic: conducting deep audience research, establishing structured campaign hierarchies, designing persuasive ad copy and visual hooks, and setting realistic budget pacing. Every platform plays a distinct role in a modern customer journey—from capturing immediate high-intent buyers on Google Search to igniting curiosity and brand recall through Meta and TikTok video feeds.
            </p>
            <p>
              A major part of my daily practice is <strong className="text-white font-semibold">campaign diagnostics and performance analysis</strong>. I monitor key health metrics like click-through rates, cost per click, creative drop-off curves, and search term query reports to spot waste early and uncover testing opportunities. Digital advertising is continuously evolving, and I maintain a strong commitment to structured continuous learning, staying current with platform policy shifts, tracking privacy updates, and algorithmic changes.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                No Fabricated Metrics or False Claims
              </span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span className="flex items-center gap-1.5 text-slate-200">
                <Compass className="w-4 h-4 text-indigo-400" />
                Strategic, Platform-Native Methodology
              </span>
            </div>
          </div>

          {/* Right Column: Key Pillars & Working Principles */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-white">Audience & Intent Mapping</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Analyzing customer friction points, demographics, search queries, and interest clusters to ensure ad dollars are put in front of genuinely prospective buyers.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-white">Continuous Diagnostics & Optimization</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Scrutinizing CTR trends, creative fatigue signals, negative keyword expansion, and frequency caps to protect advertising budgets from unnecessary waste.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-white">Rigorous Learning & Framework Testing</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Regularly testing creative frameworks, studying industry benchmarks, and completing recognized certifications to uphold high advertising standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
