import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, Copy, Check, Info, ArrowUpRight } from 'lucide-react';
import { PERSONAL_DETAILS } from '../data/portfolioData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedDraft, setCopiedDraft] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Direct mailto generation for authentic email transmission
    const subjectEncoded = encodeURIComponent(formData.subject || `Inquiry from ${formData.name} regarding Paid Advertising`);
    const bodyEncoded = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${PERSONAL_DETAILS.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    setSubmittedStatus('Draft prepared! Opening your mail client...');
    window.location.href = mailtoUrl;
  };

  const copyMessageToClipboard = () => {
    const fullText = `To: ${PERSONAL_DETAILS.email}\nSubject: ${formData.subject || 'Advertising Project Inquiry'}\nFrom: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`;
    navigator.clipboard.writeText(fullText);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2500);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-indigo-400 uppercase mb-3">
            <span>Get In Touch</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Direct Contact</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight font-display text-balance">
            Let’s Discuss Your Next Advertising Campaign
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Reach out directly for freelance campaign planning, account audits, full-funnel strategy, or full-time roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-start">
          {/* Left Column: Direct Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#0e1424] border border-slate-800 space-y-5">
              <h3 className="text-base font-bold text-white tracking-tight">
                Direct Contact Channels
              </h3>

              {/* Email */}
              <a
                href={`mailto:${PERSONAL_DETAILS.email}`}
                className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-800/60 transition-colors group"
              >
                <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-400">Email Address</div>
                  <div className="text-sm font-medium text-white group-hover:text-indigo-300 transition-colors break-all">
                    {PERSONAL_DETAILS.email}
                  </div>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${PERSONAL_DETAILS.phone.replace(/\s+/g, '')}`}
                className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-800/60 transition-colors group"
              >
                <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-400">Phone & WhatsApp</div>
                  <div className="text-sm font-medium text-white group-hover:text-blue-300 transition-colors">
                    {PERSONAL_DETAILS.phoneDisplay}
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3.5 p-3 rounded-xl">
                <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-400">Location</div>
                  <div className="text-sm font-medium text-white">
                    {PERSONAL_DETAILS.location}
                  </div>
                </div>
              </div>

              {/* LinkedIn */}
              <a
                href={PERSONAL_DETAILS.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900 border border-slate-700/60 hover:border-indigo-500 transition-all text-xs font-semibold text-white group"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-sky-400" />
                  <span>Connect on LinkedIn</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
              </a>
            </div>

            {/* Specialization reminder */}
            <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800 text-xs text-slate-400 leading-relaxed">
              <strong className="text-slate-200">Advertising Scope:</strong> Focused on Meta Ads (Facebook & Instagram), Google Search Ads, and TikTok Ads. Transparent, data-guided campaign architecture.
            </div>
          </div>

          {/* Right Column: Contact Form with Transparent Dispatch Explanation */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0e1424] border border-slate-800">
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="text-lg font-bold text-white tracking-tight font-display">
                  Send A Direct Message
                </h3>
                <span className="text-xs text-indigo-400 font-semibold">Let's Work Together</span>
              </div>

              {/* Transparent Integration Disclaimer as required by prompt */}
              <div className="p-3.5 rounded-xl bg-indigo-950/30 border border-indigo-800/40 text-xs text-indigo-300 leading-relaxed mb-6 flex items-start gap-2.5">
                <Info className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Note on message dispatch:</strong> This static frontend interface directs inquiries to your local email application via authenticated <code className="text-indigo-200 font-mono">mailto:</code> protocols. You can also copy your message draft directly to the clipboard below.
                </div>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Name <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Email <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. sarah@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Subject / Project Scope
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Meta & TikTok Ads Campaign Strategy for E-Commerce"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Message <span className="text-indigo-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your target audience, current advertising setup, or project goals..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                {submittedStatus && (
                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300">
                    {submittedStatus}
                  </div>
                )}

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-xl transition-all shadow-md shadow-indigo-600/20 cursor-pointer"
                  >
                    <span>Send Message via Email</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={copyMessageToClipboard}
                    className="inline-flex items-center gap-2 px-4 py-3 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-xl border border-slate-700 transition-colors cursor-pointer"
                  >
                    {copiedDraft ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedDraft ? 'Draft Copied!' : 'Copy Draft'}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
