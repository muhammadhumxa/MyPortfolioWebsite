import { TOOLS_PLATFORMS } from '../data/portfolioData';
import { Layers, Search, Video, BarChart2, Globe, Palette, FileSpreadsheet } from 'lucide-react';

export default function ToolsPlatforms() {
  const getToolIcon = (name: string) => {
    switch (name) {
      case 'Meta Ads Manager':
        return <Layers className="w-5 h-5 text-blue-400" />;
      case 'Google Ads':
        return <Search className="w-5 h-5 text-cyan-400" />;
      case 'TikTok Ads Manager':
        return <Video className="w-5 h-5 text-purple-400" />;
      case 'Google Analytics':
        return <BarChart2 className="w-5 h-5 text-amber-400" />;
      case 'Google Search Console':
        return <Globe className="w-5 h-5 text-emerald-400" />;
      case 'Canva':
        return <Palette className="w-5 h-5 text-pink-400" />;
      case 'Microsoft Excel':
        return <FileSpreadsheet className="w-5 h-5 text-emerald-500" />;
      default:
        return <Layers className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="tools" className="py-20 lg:py-24 border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-indigo-400 uppercase mb-3">
            <span>Tools & Platforms</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Campaign Execution Stack</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight font-display text-balance">
            Software & Platforms Used For Campaign Management & Analysis
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            A practical, battle-tested toolset for building, tracking, reporting, and refining digital advertising campaigns.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {TOOLS_PLATFORMS.map((tool) => (
            <div
              key={tool.name}
              className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3.5">
                  <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/50">
                    {getToolIcon(tool.name)}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    {tool.category}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white tracking-tight mb-2">
                  {tool.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {tool.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px]">
                <span className="text-slate-500 font-medium">Application</span>
                <span className="text-indigo-400 font-medium">{tool.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
