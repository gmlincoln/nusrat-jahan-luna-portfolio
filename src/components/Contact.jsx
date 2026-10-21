import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, Sparkles, MessageSquare, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const emailAddress = 'nusratjahan17.423@gmail.com';
  const phoneNumber = '+880 13044 08422';
  const phoneFormatted = '+8801304408422';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-paper-100/70 border-b academic-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-academic-accent mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-academic-accent"></span>
            <span>Academic Correspondence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Open to Scientific Conversations and Collaboration
          </h2>
          <p className="mt-3 text-slateSubtle-600 text-base leading-relaxed">
            I welcome inquiries from research supervisors, scientific collaborators, academic mentors, and STEM outreach organizers.
          </p>
          <div className="w-12 h-1 bg-navy-900 mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Email Card */}
            <div className="bg-white rounded-2xl border academic-border p-6 shadow-subtle hover:shadow-academic transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 block tracking-wider">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${emailAddress}`}
                      className="font-medium text-navy-950 hover:text-academic-accent transition-colors text-base break-all"
                    >
                      {emailAddress}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg text-slate-400 hover:text-navy-900 hover:bg-paper-100 transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copiedEmail && (
                <p className="text-[11px] font-mono text-emerald-600 mt-2">
                  ✓ Email copied to clipboard
                </p>
              )}
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-2xl border academic-border p-6 shadow-subtle hover:shadow-academic transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 block tracking-wider">
                      Telephone
                    </span>
                    <a
                      href={`tel:${phoneFormatted}`}
                      className="font-medium text-navy-950 hover:text-academic-accent transition-colors text-base"
                    >
                      {phoneNumber}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg text-slate-400 hover:text-navy-900 hover:bg-paper-100 transition-colors"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copiedPhone && (
                <p className="text-[11px] font-mono text-emerald-600 mt-2">
                  ✓ Phone number copied to clipboard
                </p>
              )}
            </div>

            {/* Academic Location Card */}
            <div className="bg-white rounded-2xl border academic-border p-6 shadow-subtle">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-paper-100 text-navy-900 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-400 block tracking-wider">
                    Institutional Location
                  </span>
                  <p className="font-semibold text-navy-950 text-sm mt-0.5">
                    Bangamata Sheikh Fazilatunnesa Mujib Hall
                  </p>
                  <p className="text-slateSubtle-600 text-sm">
                    Eden Mohila College, Dhaka-1205, Bangladesh
                  </p>
                </div>
              </div>
            </div>

            {/* Note regarding official profiles */}
            <div className="p-4 rounded-xl bg-white/70 border border-slate-200 text-xs text-slateSubtle-500 leading-relaxed font-mono">
              Note: Verified profiles (ORCID, Google Scholar, LinkedIn) will be linked here as peer-reviewed publications and formal scholarly profiles are indexed.
            </div>

          </div>

          {/* Right Column: Academic Inquiry Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border academic-border p-6 sm:p-8 shadow-academic">
              
              <div className="flex items-center justify-between pb-4 border-b academic-border mb-6">
                <div>
                  <h3 className="text-lg font-bold text-navy-950">
                    Send an Academic Inquiry
                  </h3>
                  <p className="text-xs text-slateSubtle-500 font-mono mt-0.5">
                    DISPATCH A MESSAGE OR COLLABORATION REQUEST
                  </p>
                </div>
                {/* Front-end demo pill clearly distinguishes this from a production backend */}
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-paper-100 border academic-border text-[11px] font-mono text-slateSubtle-600">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                  <span>Frontend Interactive Demo</span>
                </div>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-emerald-900 text-lg">
                    Inquiry Prepared Successfully
                  </h4>
                  <p className="text-emerald-800 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name || 'Collaborator'}</strong>! As this is a static client-side deployment, click below to open your preferred mail client with this draft, or copy the direct address.
                  </p>
                  <div className="pt-3 flex flex-wrap gap-3 justify-center">
                    <a
                      href={`mailto:${emailAddress}?subject=${encodeURIComponent(formData.subject || 'Research Inquiry')}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-700 text-white text-xs font-semibold hover:bg-emerald-800 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Open in Email Client</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="px-4 py-2 rounded-lg border border-emerald-300 text-emerald-900 text-xs font-semibold hover:bg-emerald-100 transition-colors"
                    >
                      Draft Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-navy-900 uppercase font-mono tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. / Prof. / Scholar Name"
                        className="w-full px-3.5 py-2.5 rounded-lg border academic-border bg-paper-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-navy-900 text-sm text-navy-950 placeholder:text-slate-400 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-navy-900 uppercase font-mono tracking-wider mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="researcher@university.edu"
                        className="w-full px-3.5 py-2.5 rounded-lg border academic-border bg-paper-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-navy-900 text-sm text-navy-950 placeholder:text-slate-400 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-navy-900 uppercase font-mono tracking-wider mb-1.5">
                      Subject / Research Inquiry Topic *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g., Deep Eutectic Solvent Simulation Collaboration"
                      className="w-full px-3.5 py-2.5 rounded-lg border academic-border bg-paper-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-navy-900 text-sm text-navy-950 placeholder:text-slate-400 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-navy-900 uppercase font-mono tracking-wider mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Detail your scientific inquiry, collaborative project, or academic query..."
                      className="w-full px-3.5 py-2.5 rounded-lg border academic-border bg-paper-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-navy-900 text-sm text-navy-950 placeholder:text-slate-400 transition-all resize-y"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-slateSubtle-500 font-mono">
                      * Directly routes to <span className="text-navy-900">nusratjahan17.423@gmail.com</span>
                    </span>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-navy-900 text-white font-medium text-xs sm:text-sm hover:bg-navy-800 transition-all shadow-subtle group"
                    >
                      <span>Send Inquiry</span>
                      <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
