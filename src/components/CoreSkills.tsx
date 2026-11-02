import { useState } from 'react';
import { CORE_SKILLS } from '../data/portfolioData';
import { Check, Layers, Search, Video, ArrowRight } from 'lucide-react';

export default function CoreSkills() {
  const [activeTab, setActiveTab] = useState<'all' | 'meta' | 'google' | 'tiktok'>('all');

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'Meta Ads':
        return <Layers className="w-5 h-5 text-blue-400" />;
      case 'Google Ads':
        return <Search className="w-5 h-5 text-cyan-400" />;
      case 'TikTok Ads':
        return <Video className="w-5 h-5 text-purple-400" />;
      default:
        return <Layers className="w-5 h-5 text-indigo-400" />;
    }
  };

  const filteredSkills = CORE_SKILLS.filter((skill) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'meta') return skill.platform === 'Meta Ads';
    if (activeTab === 'google') return skill.platform === 'Google Ads';
    if (activeTab === 'tiktok') return skill.platform === 'TikTok Ads';
    return true;
  });

  return (
    <section id="skills" className="py-20 lg:py-28 border-b border-slate-800/60 bg-[#0c111e]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Interactive Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-indigo-400 uppercase mb-3">
              <span>My Core Specializations</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Three Paid Pillars</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight font-display text-balance">
              Strategic Advertising Across The World’s Top 3 Paid Ad Networks
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400">
              Each network serves a distinct psychological stage in the conversion funnel. Here is my structured breakdown across Meta, Google, and TikTok.
            </p>
          </div>

          {/* Interactive filter control */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl shrink-0 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Specializations
            </button>
            <button
              onClick={() => setActiveTab('meta')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeTab === 'meta'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Meta Ads
            </button>
            <button
              onClick={() => setActiveTab('google')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeTab === 'google'
                  ? 'bg-cyan-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Google Ads
            </button>
            <button
              onClick={() => setActiveTab('tiktok')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeTab === 'tiktok'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              TikTok Ads
            </button>
          </div>
        </div>

        {/* 3 Core Specialization Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#0e1424] border border-slate-800/90 hover:border-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-950/20"
            >
              <div>
                {/* Header Row: Platform Icon & Name */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700/60 shadow-sm">
                      {getPlatformIcon(skill.platform)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight font-display">
                        {skill.name}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400">
                        Paid Advertising Pillar
                      </span>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {skill.summary}
                </p>

                {/* Sub-Specialization Capabilities Checklist */}
                <div className="mb-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                    Core Capabilities & Methods
                  </div>
                  <ul className="space-y-2.5">
                    {skill.coreCapabilities.map((capability, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-indigo-400 mt-0.5 shrink-0" />
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Strategic Approach Note Box */}
              <div className="pt-5 border-t border-slate-800/90">
                <div className="text-[11px] uppercase tracking-wider font-mono text-indigo-400 mb-1.5 font-semibold">
                  Strategic Methodology
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {skill.approach}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
