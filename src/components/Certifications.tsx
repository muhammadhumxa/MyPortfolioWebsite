import { CERTIFICATIONS } from '../data/portfolioData';
import { Award, CheckCircle2, Clock, Sparkles } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 lg:py-28 border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-indigo-400 uppercase mb-3">
            <span>Certifications & Training</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Professional Development</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight font-display text-balance">
            Continuous Education & Verified Advertising Credentials
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Formal training across search marketing, paid social frameworks, AI-assisted workflows, and digital marketing strategy.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-[#0e1424] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-indigo-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded text-[11px] font-mono font-medium border ${
                      cert.status === 'Credential Issued'
                        ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                        : cert.status === 'In Progress'
                        ? 'bg-amber-500/10 text-amber-300 border-amber-500/20'
                        : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                    }`}
                  >
                    {cert.status}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white tracking-tight leading-snug mb-1">
                  {cert.title}
                </h3>
                <div className="text-xs text-indigo-400 font-medium mb-3">
                  {cert.issuer}
                </div>

                <div className="text-[11px] font-mono text-slate-400 mb-4">
                  {cert.yearOrDetails}
                </div>

                <div className="pt-3 border-t border-slate-800/80">
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-mono mb-2">
                    Key Topics Covered:
                  </div>
                  <ul className="space-y-1.5">
                    {cert.skillsFocus.map((focus, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        <span>{focus}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
