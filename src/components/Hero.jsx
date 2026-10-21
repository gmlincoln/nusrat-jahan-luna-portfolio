import React from 'react';
import { ArrowRight, Compass, Atom, Orbit, Sparkles, BookOpen } from 'lucide-react';
import MolecularIllustration from './MolecularIllustration';

export default function Hero() {
  const focusAreas = [
    {
      title: 'Computational Chemistry',
      desc: 'Quantum calculations, DES systems & electronic structure modeling',
      icon: Atom,
    },
    {
      title: 'Molecular Simulation',
      desc: 'MD simulations, docking, trajectory analysis & system preparation',
      icon: Orbit,
    },
    {
      title: 'Science Outreach',
      desc: 'IAU coordination, astronomy workshops & bilingual public science',
      icon: Sparkles,
    },
  ];

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden academic-grid-pattern">
      {/* Delicate background ambient lights */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-50/50 rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Academic Credentials & Hero Statement */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Subtle affiliation tag */}
            <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-navy-900/5 border border-navy-900/10 text-navy-800 text-xs font-mono mb-6">
              <span className="w-2 h-2 rounded-full bg-academic-accent"></span>
              <span>Research Assistant · Red Green Research Center</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-navy-950 tracking-tight leading-[1.12] mb-4">
              Nusrat Jahan Luna
            </h1>

            <p className="font-heading text-xl sm:text-2xl font-medium text-navy-700 tracking-tight mb-6">
              Chemistry, Computation &amp; Scientific Discovery
            </p>

            <p className="text-slateSubtle-600 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-normal">
              I am a Chemistry undergraduate with research experience in computational chemistry,
              molecular simulation, and scientific analysis. My interests also extend to astronomy
              outreach, scientific communication, and making science accessible to wider communities.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href="#research"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-navy-900 text-white font-medium text-sm hover:bg-navy-800 transition-all shadow-subtle hover:shadow-academic group"
              >
                <span>Explore Research</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 bg-white text-navy-900 font-medium text-sm hover:bg-paper-100 hover:border-slate-400 transition-all shadow-subtle"
              >
                <Compass className="w-4 h-4 text-academic-accent" />
                <span>View Experience</span>
              </a>
            </div>

            {/* Three Professional Focus Areas */}
            <div className="pt-8 border-t academic-border">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {focusAreas.map((area, index) => {
                  const Icon = area.icon;
                  return (
                    <div 
                      key={index} 
                      className="p-3.5 rounded-xl bg-white/70 border academic-border hover:bg-white hover:shadow-subtle transition-all"
                    >
                      <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center mb-2.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h2 className="font-heading font-semibold text-navy-900 text-sm leading-snug mb-1">
                        {area.title}
                      </h2>
                      <p className="text-slateSubtle-500 text-xs leading-relaxed">
                        {area.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Sophisticated Scientific Molecular Illustration */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full">
              <MolecularIllustration />
              
              {/* Context caption */}
              <div className="mt-3 text-center">
                <p className="text-[11px] font-mono text-slateSubtle-500">
                  Interactive representation of hydrogen-bonding networks in Deep Eutectic Solvents (DES)
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
