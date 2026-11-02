import { PERSONAL_DETAILS } from '../data/portfolioData';
import { Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080c14] border-t border-slate-800/80 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-slate-800/60">
          <div>
            <div className="text-base font-bold text-white tracking-tight">
              {PERSONAL_DETAILS.name}
            </div>
            <div className="text-xs text-indigo-400 font-medium mt-0.5">
              {PERSONAL_DETAILS.title}
            </div>
            <div className="text-xs text-slate-400 mt-1 font-mono">
              {PERSONAL_DETAILS.headline}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href={PERSONAL_DETAILS.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4 text-sky-400" />
              <span>LinkedIn Profile</span>
            </a>

            <a
              href={`mailto:${PERSONAL_DETAILS.email}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-indigo-400" />
              <span>{PERSONAL_DETAILS.email}</span>
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-[11px]">Back to top</span>
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {currentYear} {PERSONAL_DETAILS.name}. All rights reserved.
          </div>
          <div className="text-slate-400 text-center sm:text-right">
            Personal Portfolio · Digital Advertising Specialist · Lahore, Pakistan
          </div>
        </div>
      </div>
    </footer>
  );
}
