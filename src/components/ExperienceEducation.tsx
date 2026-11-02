import { WORK_EXPERIENCE, EDUCATION_LIST } from '../data/portfolioData';
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export default function ExperienceEducation() {
  return (
    <section id="experience" className="py-20 lg:py-28 border-b border-slate-800/60 bg-[#0c111e]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* Professional Experience Column */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-indigo-400 uppercase mb-3">
              <span>Career History</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Professional Experience</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display mb-3">
              Professional Work Experience
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mb-8 leading-relaxed">
              Demonstrated background in data integrity, digital document verification, and methodical workflow execution.
            </p>

            <div className="space-y-6">
              {WORK_EXPERIENCE.map((job, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#0e1424] border border-slate-800 hover:border-slate-700/80 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {job.role}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-indigo-400 font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{job.period}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-4 font-medium">
                    <span className="text-slate-200">{job.company}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      {job.location}
                    </span>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-300">
                    {job.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400/90 mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-indigo-400 uppercase mb-3">
              <span>Academic Foundation</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Education</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display mb-3">
              Education & Degrees
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mb-8 leading-relaxed">
              Foundational grounding in communications, media studies, and research principles.
            </p>

            <div className="space-y-5">
              {EDUCATION_LIST.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-[#0e1424] border border-slate-800 hover:border-slate-700/80 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight">
                        {edu.degree}
                      </h3>
                      <div className="text-xs text-indigo-400 font-medium mt-0.5">
                        {edu.institution}
                      </div>
                    </div>
                    {edu.status && (
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-slate-300 border border-slate-700/60">
                        {edu.status}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-400 mt-4 pt-3 border-t border-slate-800/80 font-mono">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      {edu.location}
                    </span>
                    <span>{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
