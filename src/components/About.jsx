import React from 'react';
import { Microscope, MapPin, GraduationCap, Telescope, Sparkles, Binary } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-24 bg-paper-100/70 border-y academic-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-academic-accent mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-academic-accent"></span>
            <span>Academic Biography</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-1 bg-navy-900 mt-3"></div>
        </div>

        {/* Editorial Layout: Narrow text column with metadata side card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Biography Column (Editorial narrative) */}
          <div className="lg:col-span-7 space-y-6 text-slateSubtle-600 text-base sm:text-[17px] leading-relaxed">
            <p>
              I am an undergraduate student in the Department of Chemistry at <strong className="font-semibold text-navy-950">Eden Mohila College</strong>, Dhaka, Bangladesh. My academic journey is centered on investigating molecular properties through computational chemistry, molecular dynamics simulations, and electronic structure modeling.
            </p>

            <p>
              At the <strong className="font-semibold text-navy-950">Red Green Research Center</strong>, I serve as a Research Assistant focusing on <strong className="font-semibold text-navy-900">Deep Eutectic Solvents (DES)</strong>. My computational work involves system preparation, molecular docking, energy minimization, and trajectory analysis using software such as YASARA, Desmond, and GROMACS. I also perform quantum chemical calculations in Gaussian and analyze intermolecular interactions through Discovery Studio, PyMOL, and ChimeraX.
            </p>

            <p>
              Beyond computational modeling in the lab, I am actively engaged in scientific outreach and communication. As a volunteer with the <strong className="font-semibold text-navy-900">International Astronomical Union (IAU)</strong> and the <strong className="font-semibold text-navy-900">Bangladesh Astronomical Association (BDAA)</strong>, I have contributed to organizing observational workshops, evaluating astronomical instruments, and translating outreach materials into Bengali.
            </p>

            <p>
              Additionally, I contribute to student-led science and mathematics initiatives, including Olympiad training workshops with the <strong className="font-semibold text-navy-900">Deviation Scientific Society</strong>, educational writing for <strong className="font-semibold text-navy-900">The Daily Prothom Alo Gonit Ischool</strong>, and community activities with the Eden Mohila College Research Society.
            </p>

            {/* Subtle quote / core academic philosophy */}
            <div className="mt-6 p-5 rounded-xl bg-white border-l-4 border-navy-900 border academic-border shadow-subtle">
              <p className="font-heading italic text-navy-900 text-base sm:text-lg">
                &ldquo;Combining computational precision with open scientific communication to better understand molecular behavior and inspire scientific curiosity.&rdquo;
              </p>
            </div>
          </div>

          {/* Academic Snapshot Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border academic-border p-6 shadow-academic space-y-5">
              <div className="flex items-center gap-3 pb-4 border-b academic-border">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
                  <Microscope className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-navy-950">
                    Academic Summary
                  </h3>
                  <p className="text-xs text-slateSubtle-500 font-mono">
                    VERIFIED CURRICULUM VITAE DETAILS
                  </p>
                </div>
              </div>

              {/* Data points */}
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-4 h-4 text-academic-accent mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-navy-900 block text-xs uppercase tracking-wider text-slate-400">
                      Undergraduate Studies
                    </span>
                    <span className="text-navy-950 font-medium">
                      BS (Hons.), Department of Chemistry
                    </span>
                    <span className="text-xs text-slateSubtle-500 block">
                      Eden Mohila College, Dhaka (Enrolled Oct &apos;24)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Binary className="w-4 h-4 text-academic-accent mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-navy-900 block text-xs uppercase tracking-wider text-slate-400">
                      Current Research Role
                    </span>
                    <span className="text-navy-950 font-medium">
                      Research Assistant
                    </span>
                    <span className="text-xs text-slateSubtle-500 block">
                      Red Green Research Center (Sept &apos;25 – Present)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Telescope className="w-4 h-4 text-academic-accent mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-navy-900 block text-xs uppercase tracking-wider text-slate-400">
                      Public Engagement
                    </span>
                    <span className="text-navy-950 font-medium">
                      IAU National Outreach Volunteer
                    </span>
                    <span className="text-xs text-slateSubtle-500 block">
                      Bangladesh Astronomical Association (BDAA)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-academic-accent mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-navy-900 block text-xs uppercase tracking-wider text-slate-400">
                      Location
                    </span>
                    <span className="text-navy-950 font-medium">
                      Dhaka-1205, Bangladesh
                    </span>
                  </div>
                </div>
              </div>

              {/* Molecular Motif Graphic */}
              <div className="pt-4 border-t academic-border">
                <div className="p-3 bg-paper-50 rounded-xl border border-slate-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span className="text-xs font-mono text-navy-900 font-medium">
                      Primary Investigation System:
                    </span>
                  </div>
                  <span className="text-xs font-mono font-semibold text-academic-accent">
                    Deep Eutectic Solvents (DES)
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
