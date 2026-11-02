import { ArrowRight, Mail } from 'lucide-react';

interface HireMeCtaProps {
  onContactClick: () => void;
}

export default function HireMeCta({ onContactClick }: HireMeCtaProps) {
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-indigo-950/70 via-slate-900 to-blue-950/70 border border-indigo-500/30 p-8 sm:p-12 text-center shadow-2xl overflow-hidden">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-indigo-400 uppercase mb-3">
              <span>Hire Muhammad Hamza</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Available For Opportunities</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-display text-balance mb-4">
              Ready to Grow Your Business With Digital Advertising?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              Let's discuss your advertising goals and explore how Meta Ads, Google Ads, and TikTok Ads can support your business growth.
            </p>

            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-xl transition-all shadow-lg shadow-indigo-600/30 cursor-pointer"
            >
              <span>Contact Me</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
