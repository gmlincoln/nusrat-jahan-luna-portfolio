import React from 'react';
import { Telescope, Globe2, Moon, Calendar, CheckCircle2, Languages, Compass, Radio } from 'lucide-react';

export default function ScientificOutreach() {
  return (
    <section id="outreach" className="py-20 lg:py-28 bg-paper-100/60 border-b academic-border relative overflow-hidden">
      {/* Decorative celestial background watermark */}
      <div className="absolute top-12 right-12 opacity-5 pointer-events-none select-none -z-0">
        <svg width="340" height="340" viewBox="0 0 100 100" className="stroke-navy-950 fill-none">
          <circle cx="50" cy="50" r="45" strokeDasharray="2 3" />
          <circle cx="50" cy="50" r="30" strokeDasharray="4 2" />
          <circle cx="50" cy="50" r="15" />
          <line x1="50" y1="5" x2="50" y2="95" strokeDasharray="1 3" />
          <line x1="5" y1="50" x2="95" y2="50" strokeDasharray="1 3" />
          <circle cx="75" cy="35" r="2" className="fill-navy-950" />
          <circle cx="35" cy="70" r="1.5" className="fill-navy-950" />
          <circle cx="20" cy="30" r="2.5" className="fill-navy-950" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-indigo-700 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
            <span>Public Science &amp; Astronomical Engagement</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Scientific Outreach &amp; Communication
          </h2>
          <p className="mt-3 text-slateSubtle-600 text-base leading-relaxed">
            Bridging fundamental science with public literacy through observational workshops, bilingual translation of astronomical knowledge, and hands-on stargazing events.
          </p>
          <div className="w-12 h-1 bg-indigo-600 mt-4"></div>
        </div>

        {/* Two Outreach Editorial Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Organization 1: International Astronomical Union (IAU) */}
          <div className="bg-white rounded-2xl border academic-border p-7 sm:p-8 shadow-subtle hover:shadow-academic transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-5 border-b academic-border mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-indigo-50 text-indigo-800 border border-indigo-200">
                      International Body
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-navy-950">
                    International Astronomical Union (IAU)
                  </h3>
                  <p className="text-sm font-medium text-navy-700 mt-0.5">
                    Volunteer, National Outreach Coordinator (Bangladesh)
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-slateSubtle-500 bg-paper-50 px-3 py-1.5 rounded-lg border academic-border">
                  <Calendar className="w-3.5 h-3.5 text-navy-800" />
                  <span>Jan &apos;25 – Present</span>
                </div>
              </div>

              {/* Responsibilities & Impact */}
              <ul className="space-y-3.5 mb-6 text-sm text-slateSubtle-600">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span>
                    Organized the three-day <strong className="text-navy-900 font-semibold">17th Abdul Jabbar Astronomy Workshop</strong>, overseeing comprehensive logistics, scheduling, and participant engagement.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span>
                    Led event operations in direct coordination with executive management and volunteer teams.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span>
                    Evaluated telescope options through technical and market analysis to support IAU-funded procurement.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span>
                    Translated astronomy outreach content from English into Bengali to broaden local community access.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span>
                    Created outreach-focused visuals for events, social media, and promotional campaigns.
                  </span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t academic-border flex items-center justify-between text-xs font-mono text-slate-500">
              <span className="flex items-center gap-1.5 text-indigo-800">
                <Globe2 className="w-3.5 h-3.5" /> Global Scientific Outreach
              </span>
              <span>Bangladesh Chapter</span>
            </div>
          </div>

          {/* Organization 2: Bangladesh Astronomical Association (BDAA) */}
          <div className="bg-white rounded-2xl border academic-border p-7 sm:p-8 shadow-subtle hover:shadow-academic transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-5 border-b academic-border mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-blue-50 text-blue-800 border border-blue-200">
                      National Association
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-navy-950">
                    Bangladesh Astronomical Association (BDAA)
                  </h3>
                  <p className="text-sm font-medium text-navy-700 mt-0.5">
                    Volunteer · Akash Porjobekkhon Team
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-slateSubtle-500 bg-paper-50 px-3 py-1.5 rounded-lg border academic-border">
                  <Calendar className="w-3.5 h-3.5 text-navy-800" />
                  <span>Jan &apos;25 – Present</span>
                </div>
              </div>

              {/* Responsibilities & Activities */}
              <ul className="space-y-3.5 mb-6 text-sm text-slateSubtle-600">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>
                    Successfully completed a intensive <strong className="text-navy-900 font-semibold">Two-Day Observational Astronomy Workshop</strong>, a collaborative program between BDAA and the Russian House in Dhaka, enhancing practical observational skills.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>
                    Served as an active member of the <strong className="text-navy-900 font-semibold">Akash Porjobekkhon Team</strong>, contributing to public astronomy outreach initiatives and star-gazing sessions.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>
                    Assisted in organizing and facilitating a one-day sky observation event, guiding participants in viewing celestial objects (<strong className="text-navy-900 font-semibold">Moon, Venus, Mars</strong>) through an 8-inch reflective telescope.
                  </span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t academic-border flex items-center justify-between text-xs font-mono text-slate-500">
              <span className="flex items-center gap-1.5 text-blue-800">
                <Moon className="w-3.5 h-3.5" /> 8-inch Reflective Telescope
              </span>
              <span>Russian House &amp; BDAA</span>
            </div>
          </div>

        </div>

        {/* Astronomy & Public Communication Note */}
        <div className="mt-8 p-4 rounded-xl bg-white border academic-border flex items-center gap-3">
          <Telescope className="w-5 h-5 text-indigo-600 flex-shrink-0" />
          <p className="text-xs sm:text-sm text-slateSubtle-600">
            <strong>Complementary Perspective:</strong> Observational astronomy and community workshops strengthen scientific pedagogy, bilingual communication, and public engagement alongside laboratory computational chemistry.
          </p>
        </div>

      </div>
    </section>
  );
}
