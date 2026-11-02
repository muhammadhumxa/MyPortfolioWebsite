import { useState } from 'react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ArrowUpRight, Info, Layers, Search, Video, Sparkles, Target } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Meta Ads' | 'Google Ads' | 'TikTok Ads' | 'Multi-Platform'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'All') return true;
    return p.category === activeFilter;
  });

  const getPlatformIcon = (cat: string) => {
    switch (cat) {
      case 'Meta Ads':
        return <Layers className="w-4 h-4 text-blue-400" />;
      case 'Google Ads':
        return <Search className="w-4 h-4 text-cyan-400" />;
      case 'TikTok Ads':
        return <Video className="w-4 h-4 text-purple-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-indigo-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 lg:py-28 border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Interactive Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-indigo-400 uppercase mb-3">
              <span>Portfolio Projects</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Six Case Demonstrations</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight font-display text-balance">
              Strategic Advertising Systems & Campaign Architectures
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400">
              In-depth campaign blueprints developed to showcase audience segmentation, messaging hierarchies, ad creatives, and performance diagnostics.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl shrink-0 self-start md:self-auto">
            {(['All', 'Meta Ads', 'Google Ads', 'TikTok Ads', 'Multi-Platform'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Projects Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl bg-[#0e1424] border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-950/20 overflow-hidden"
            >
              <div>
                {/* Visual Thumbnail or Mockup */}
                <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden border-b border-slate-800/80">
                  {project.creativeMockup.imagePath ? (
                    <img
                      src={project.creativeMockup.imagePath}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-900 to-indigo-950/40">
                      <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 mb-2">
                        {getPlatformIcon(project.category)}
                      </div>
                      <span className="text-xs font-mono text-indigo-400">{project.brand}</span>
                      <span className="text-sm font-bold text-white mt-1">{project.category} Architecture</span>
                    </div>
                  )}

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1424] via-transparent to-transparent opacity-60" />

                  {/* Platform Tag */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/90 backdrop-blur-md border border-slate-700 text-xs font-medium text-slate-200">
                    {getPlatformIcon(project.category)}
                    <span>{project.category}</span>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  {/* Mandatory Concept Project Label */}
                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-amber-300/90 mb-3 bg-amber-500/10 px-2 py-1 rounded border border-amber-500/20 w-fit">
                    <Info className="w-3.5 h-3.5 shrink-0" />
                    <span>Self-Initiated Concept Project — Portfolio Demonstration</span>
                  </div>

                  {/* Title & Brand */}
                  <h3 className="text-lg font-bold text-white tracking-tight font-display group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-xs text-slate-400 mt-0.5 mb-3 font-mono">
                    {project.brand} · {project.tagline}
                  </div>

                  {/* Objective */}
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
                    {project.objective}
                  </p>

                  {/* Key Target Audience Bullet */}
                  <div className="pt-3 border-t border-slate-800/80 text-xs text-slate-400 flex items-start gap-2">
                    <Target className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{project.targetAudience.primary}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-5 sm:p-6 pt-0">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-indigo-600 text-slate-200 hover:text-white border border-slate-800 hover:border-indigo-500 text-xs font-semibold transition-all duration-200 cursor-pointer"
                >
                  <span>Explore Campaign Architecture</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
