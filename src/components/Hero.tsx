import { useState } from 'react';
import { ArrowDown, Mail, ExternalLink, Sparkles, Layers, Target, TrendingUp, CheckCircle2 } from 'lucide-react';
import { PERSONAL_DETAILS } from '../data/portfolioData';

interface HeroProps {
  onViewProjects: () => void;
  onWorkTogether: () => void;
}

export default function Hero({ onViewProjects, onWorkTogether }: HeroProps) {
  const [customPhoto, setCustomPhoto] = useState<string | null>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setCustomPhoto(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden border-b border-slate-800/60">
      {/* Background ambient glow highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-900/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 -left-48 w-[400px] h-[300px] bg-blue-900/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Kicker with typographic separator */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-indigo-400 uppercase mb-4">
              <span>{PERSONAL_DETAILS.title}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">{PERSONAL_DETAILS.location}</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-5 font-display text-balance">
              {PERSONAL_DETAILS.heroHeadline}
            </h1>

            {/* Professional Headline Badges */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-medium text-slate-300 mb-6">
              <span className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/60 text-slate-200">
                Meta Ads
              </span>
              <span className="text-slate-600">/</span>
              <span className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/60 text-slate-200">
                Google Ads
              </span>
              <span className="text-slate-600">/</span>
              <span className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/60 text-slate-200">
                TikTok Ads
              </span>
            </div>

            {/* Introduction Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              {PERSONAL_DETAILS.intro}
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onViewProjects}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-xl transition-all shadow-lg shadow-indigo-600/20 cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={onWorkTogether}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-slate-600 rounded-xl transition-all cursor-pointer"
              >
                <span>Let's Work Together</span>
                <Mail className="w-4 h-4 text-indigo-400" />
              </button>
            </div>

            {/* Quick credentials / Trust line */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                <span>Audience Targeting & Funnels</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                <span>Creative Strategy & Hook Design</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                <span>Budget Efficiency & Diagnostics</span>
              </div>
            </div>
          </div>

          {/* Right Column: Profile & Advertising Architecture Mockup */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md mx-auto">
              {/* Outer Decorative Gradient Frame */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-indigo-500/20 via-blue-500/10 to-purple-500/20 blur-md" />

              <div className="relative bg-[#0e1424] border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-2xl overflow-hidden">
                {/* Profile Image Frame */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-700/60 group">
                  <img
                    src={customPhoto || PERSONAL_DETAILS.profileImage}
                    alt="Muhammad Hamza - Digital Advertising Specialist"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                  />

                  {/* Gentle gradient scrim at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1424] via-transparent to-transparent opacity-80" />

                  {/* Floating Identity Overlay on Image */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 bg-slate-900/90 backdrop-blur-md border border-slate-700/70 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold text-white tracking-tight">
                          {PERSONAL_DETAILS.name}
                        </div>
                        <div className="text-xs text-indigo-400 font-medium">
                          Digital Advertising Specialist
                        </div>
                      </div>
                      <div className="text-[11px] font-mono text-slate-400 text-right">
                        Lahore, PK
                      </div>
                    </div>
                  </div>
                </div>

                {/* Profile Photo Replacement Tooltip / Control */}
                <div className="mt-3.5 flex items-center justify-between gap-2 px-1">
                  <span className="text-[11px] text-slate-400">
                    Professional profile placeholder
                  </span>
                  <label className="text-[11px] font-medium text-indigo-400 hover:text-indigo-300 cursor-pointer underline decoration-dotted transition-colors">
                    <span>Replace photo preview</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                  </label>
                </div>

                {/* Mini Platform Strategy Indicator */}
                <div className="mt-4 pt-4 border-t border-slate-800 grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] text-slate-400 uppercase font-mono">Platform</div>
                    <div className="text-xs font-semibold text-blue-400 mt-0.5">Meta Ads</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] text-slate-400 uppercase font-mono">Platform</div>
                    <div className="text-xs font-semibold text-cyan-400 mt-0.5">Google Ads</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] text-slate-400 uppercase font-mono">Platform</div>
                    <div className="text-xs font-semibold text-purple-400 mt-0.5">TikTok Ads</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Full-Width Key Pillars Strip Below Hero Split */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Audience Targeting</div>
              <div className="text-xs text-slate-400 mt-0.5">
                Precision demographic, interest, and intent-based mapping.
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Campaign Architecture</div>
              <div className="text-xs text-slate-400 mt-0.5">
                Structured TOFU, MOFU, and BOFU full-funnel systems.
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Ad Creative Strategy</div>
              <div className="text-xs text-slate-400 mt-0.5">
                Hook-first video concepts, carousels, and high-CTR copy.
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Budget & Diagnostics</div>
              <div className="text-xs text-slate-400 mt-0.5">
                Waste elimination, negative keywords, and scaling metrics.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
