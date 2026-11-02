import { useState, useEffect } from 'react';
import { X, Copy, Check, Info, Layers, Target, FileText, BarChart3, Image as ImageIcon, Sparkles } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'strategy' | 'audience' | 'funnel' | 'copy' | 'creative' | 'optimization'>('strategy');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c1220] border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100 animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Modal Top Bar */}
        <div className="p-5 sm:p-6 border-b border-slate-800/80 flex items-start justify-between gap-4 bg-slate-900/40">
          <div>
            {/* Mandatory Demonstration Disclaimer Banner */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[11px] font-medium mb-3">
              <Info className="w-3.5 h-3.5 shrink-0" />
              <span>{project.disclaimer}</span>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400 mb-1">
              <span className="text-indigo-400 font-semibold">{project.category}</span>
              <span>·</span>
              <span>{project.brand}</span>
              <span>·</span>
              <span>{project.tagline}</span>
            </div>
            <h2 id="modal-project-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight font-display">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer shrink-0"
            aria-label="Close case study modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="px-5 sm:px-6 py-2.5 border-b border-slate-800/80 bg-slate-900/20 flex items-center gap-2 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('strategy')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'strategy' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Strategy & Objective
          </button>
          <button
            onClick={() => setActiveTab('audience')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'audience' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Target Audience
          </button>
          <button
            onClick={() => setActiveTab('funnel')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'funnel' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Campaign Structure
          </button>
          <button
            onClick={() => setActiveTab('copy')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'copy' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Sample Ad Copy
          </button>
          <button
            onClick={() => setActiveTab('creative')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'creative' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Creative Concept
          </button>
          <button
            onClick={() => setActiveTab('optimization')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'optimization' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Optimization & Diagnostics
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 text-sm text-slate-300 leading-relaxed">
          {/* TAB 1: STRATEGY */}
          {activeTab === 'strategy' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xs uppercase font-mono tracking-wider text-indigo-400 mb-2">
                  Campaign Objective
                </h3>
                <p className="text-base text-white font-medium bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  {project.objective}
                </p>
              </div>

              <div>
                <h3 className="text-xs uppercase font-mono tracking-wider text-indigo-400 mb-2">
                  Comprehensive Advertising Strategy
                </h3>
                <p className="text-slate-300 leading-relaxed bg-slate-900/30 p-4 rounded-xl border border-slate-800/80">
                  {project.strategy}
                </p>
              </div>

              {/* Sample illustrative targets */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs uppercase font-mono tracking-wider text-slate-400">
                    Sample Benchmark Targets (Illustrative Demonstration Data)
                  </h3>
                  <span className="text-[11px] text-amber-400 font-mono">Simulated Goals</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.sampleMetrics.map((metric, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                      <div className="text-[11px] text-slate-400">{metric.label}</div>
                      <div className="text-lg font-bold text-white mt-1 font-mono tabular-nums">{metric.value}</div>
                      <div className="text-[11px] text-slate-500 mt-1">{metric.context}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: AUDIENCE */}
          {activeTab === 'audience' && (
            <div className="space-y-5">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-xs font-mono uppercase text-indigo-400 mb-1">Primary Persona</div>
                <p className="text-white font-medium">{project.targetAudience.primary}</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-xs font-mono uppercase text-indigo-400 mb-1">Demographics & Locations</div>
                <p className="text-slate-300">{project.targetAudience.demographics}</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-xs font-mono uppercase text-indigo-400 mb-2">Interests, Queries & Behavioral Targeting</div>
                <ul className="space-y-2">
                  {project.targetAudience.interestsAndBehaviors.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <Target className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {project.targetAudience.exclusions && (
                <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-900/40">
                  <div className="text-xs font-mono uppercase text-rose-400 mb-1">Negative Exclusions & Budget Safeguards</div>
                  <ul className="space-y-1">
                    {project.targetAudience.exclusions.map((item, i) => (
                      <li key={i} className="text-xs text-rose-200/80">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: FUNNEL / STRUCTURE */}
          {activeTab === 'funnel' && (
            <div className="space-y-4">
              <div className="text-xs text-slate-400">
                Structured campaign hierarchy breaking down budget pacing and ad groups:
              </div>

              <div className="space-y-3">
                {project.campaignStructure.map((tier, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-sm font-bold text-white font-display">
                        {tier.stage}
                      </span>
                      <span className="text-xs font-mono text-indigo-400">
                        {tier.objective}
                      </span>
                    </div>

                    <div className="mb-2">
                      <div className="text-[11px] font-mono uppercase text-slate-400 mb-1">Ad Sets / Groups:</div>
                      <div className="flex flex-wrap gap-1.5">
                        {tier.adSetsOrGroups.map((group, gIdx) => (
                          <span key={gIdx} className="px-2.5 py-1 rounded bg-slate-800 text-xs text-slate-300 border border-slate-700/60">
                            {group}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                      <strong className="text-slate-300">Bidding & Budget:</strong> {tier.biddingAndBudget}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: SAMPLE AD COPY */}
          {activeTab === 'copy' && (
            <div className="space-y-5">
              {project.sampleAdCopy.hookOrAngle && (
                <div className="p-3.5 rounded-lg bg-indigo-950/30 border border-indigo-800/50 flex items-center gap-2 text-xs text-indigo-300">
                  <Sparkles className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span><strong>Core Psychological Hook / Angle:</strong> {project.sampleAdCopy.hookOrAngle}</span>
                </div>
              )}

              <div>
                <div className="text-xs font-mono uppercase text-slate-400 mb-2">Sample Headlines</div>
                <div className="space-y-2">
                  {project.sampleAdCopy.headlines.map((headline, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-xs sm:text-sm font-medium text-white">{headline}</span>
                      <button
                        onClick={() => handleCopy(headline, i)}
                        className="text-xs text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 cursor-pointer flex items-center gap-1 shrink-0"
                        title="Copy headline"
                      >
                        {copiedIndex === i ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span className="text-[10px]">{copiedIndex === i ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs font-mono uppercase text-slate-400 mb-2">Sample Primary Ad Text</div>
                <div className="space-y-2.5">
                  {project.sampleAdCopy.primaryText.map((text, i) => {
                    const copyIndex = 100 + i;
                    return (
                      <div key={i} className="p-4 rounded-xl bg-slate-900 border border-slate-800 relative">
                        <p className="text-xs sm:text-sm text-slate-300 pr-12 leading-relaxed">{text}</p>
                        <button
                          onClick={() => handleCopy(text, copyIndex)}
                          className="absolute top-3 right-3 text-xs text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 cursor-pointer flex items-center gap-1"
                          title="Copy copy block"
                        >
                          {copiedIndex === copyIndex ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                          <span className="text-[10px]">{copiedIndex === copyIndex ? 'Copied' : 'Copy'}</span>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">Call-To-Action (CTA) Button Formulation:</span>
                <span className="font-bold text-indigo-400">{project.sampleAdCopy.callToAction}</span>
              </div>
            </div>
          )}

          {/* TAB 5: CREATIVE CONCEPT & MOCKUP */}
          {activeTab === 'creative' && (
            <div className="space-y-5">
              {project.creativeMockup.imagePath && (
                <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 aspect-video max-h-72">
                  <img
                    src={project.creativeMockup.imagePath}
                    alt={`${project.brand} Ad Creative Mockup`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-xs font-mono uppercase text-indigo-400 mb-1">Ad Format & Aspect Ratio</div>
                <div className="text-sm font-semibold text-white">{project.creativeMockup.format}</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-xs font-mono uppercase text-indigo-400 mb-1">Visual Concept & Execution</div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.creativeMockup.conceptDescription}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-xs font-mono uppercase text-indigo-400 mb-1">Art Direction & Production Notes</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {project.creativeMockup.visualNotes}
                </p>
              </div>
            </div>
          )}

          {/* TAB 6: OPTIMIZATION & DIAGNOSTICS */}
          {activeTab === 'optimization' && (
            <div className="space-y-4">
              <div className="text-xs text-slate-400 mb-2">
                Routine maintenance, hygiene audits, and scaling guidelines applied:
              </div>

              <div className="space-y-2.5">
                {project.optimizationApproach.map((step, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {step}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 mt-4">
                <strong>Demonstration Note:</strong> All metric models and ROAS targets referenced in this case study represent strategic simulated frameworks built to demonstrate full-funnel paid media competency.
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-800/80 bg-slate-900/50 flex flex-wrap items-center justify-between gap-3 text-xs">
          <span className="text-slate-400">
            Case study created by <strong className="text-white">Muhammad Hamza</strong>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg font-medium transition-colors cursor-pointer"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
