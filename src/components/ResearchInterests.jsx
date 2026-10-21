import React from 'react';

export default function ResearchInterests() {
  const interests = [
    {
      title: 'Computational Chemistry',
      explanation: 'Application of mathematical models and computational algorithms to study chemical phenomena, molecular energy profiles, and reaction mechanisms.',
      svgIcon: (
        <svg viewBox="0 0 48 48" className="w-8 h-8 stroke-navy-900 fill-none" strokeWidth="1.75">
          <circle cx="24" cy="24" r="5" className="fill-blue-500/20 stroke-blue-600" />
          <ellipse cx="24" cy="24" rx="20" ry="7" transform="rotate(30 24 24)" strokeDasharray="3 2" />
          <ellipse cx="24" cy="24" rx="20" ry="7" transform="rotate(-30 24 24)" />
          <circle cx="38" cy="16" r="2.5" className="fill-indigo-600 stroke-indigo-600" />
          <circle cx="10" cy="32" r="2.5" className="fill-indigo-600 stroke-indigo-600" />
        </svg>
      )
    },
    {
      title: 'Deep Eutectic Solvents',
      explanation: 'Analysis of low-melting ionic mixtures formed via complex hydrogen-bond networks between hydrogen-bond donors and acceptors, exploring solvent structural dynamics.',
      svgIcon: (
        <svg viewBox="0 0 48 48" className="w-8 h-8 stroke-navy-900 fill-none" strokeWidth="1.75">
          <circle cx="16" cy="18" r="6" className="fill-emerald-500/20 stroke-emerald-600" />
          <circle cx="34" cy="30" r="7" className="fill-indigo-500/20 stroke-indigo-600" />
          <line x1="21" y1="21" x2="28" y2="26" strokeDasharray="3 3" className="stroke-indigo-600" strokeWidth="2" />
          <circle cx="16" cy="18" r="2" className="fill-emerald-600" />
          <circle cx="34" cy="30" r="2.5" className="fill-indigo-600" />
          <path d="M 28 14 Q 38 16 38 22" strokeDasharray="2 2" className="stroke-slate-400" />
        </svg>
      )
    },
    {
      title: 'Molecular Dynamics Simulation',
      explanation: 'Investigating time-dependent physical movements and thermodynamic trajectories of multi-atom systems across nano- to micro-second timescales.',
      svgIcon: (
        <svg viewBox="0 0 48 48" className="w-8 h-8 stroke-navy-900 fill-none" strokeWidth="1.75">
          <path d="M 8 36 C 16 36, 14 16, 24 16 C 34 16, 32 32, 40 32" strokeLinecap="round" />
          <circle cx="12" cy="32" r="3" className="fill-blue-600 stroke-blue-600" />
          <circle cx="24" cy="16" r="3" className="fill-blue-600 stroke-blue-600" />
          <circle cx="36" cy="28" r="3" className="fill-blue-600 stroke-blue-600" />
          <line x1="6" y1="42" x2="42" y2="42" strokeDasharray="2 2" className="stroke-slate-300" />
        </svg>
      )
    },
    {
      title: 'Molecular Docking',
      explanation: 'Computational prediction of the preferred orientation of a ligand when bound to a macromolecular target to evaluate potential intermolecular complexes.',
      svgIcon: (
        <svg viewBox="0 0 48 48" className="w-8 h-8 stroke-navy-900 fill-none" strokeWidth="1.75">
          <path d="M 10 14 C 10 28, 38 28, 38 14" strokeLinecap="round" strokeWidth="2" />
          <circle cx="24" cy="22" r="4" className="fill-amber-500/20 stroke-amber-600" />
          <line x1="24" y1="12" x2="24" y2="18" strokeDasharray="2 2" className="stroke-amber-600" />
          <circle cx="24" cy="10" r="2.5" className="fill-amber-600 stroke-amber-600" />
        </svg>
      )
    },
    {
      title: 'Protein–Ligand Interactions',
      explanation: 'Evaluating contact surfaces, hydrogen bonding, hydrophobic pockets, and salt bridges between biological macromolecules and candidate small molecules.',
      svgIcon: (
        <svg viewBox="0 0 48 48" className="w-8 h-8 stroke-navy-900 fill-none" strokeWidth="1.75">
          <rect x="8" y="10" width="18" height="28" rx="4" className="fill-slate-100 stroke-navy-800" />
          <circle cx="34" cy="24" r="6" className="fill-rose-500/20 stroke-rose-600" />
          <line x1="26" y1="24" x2="28" y2="24" strokeDasharray="2 2" className="stroke-rose-600" strokeWidth="2" />
          <circle cx="17" cy="18" r="2" className="fill-slate-400 stroke-slate-400" />
          <circle cx="17" cy="30" r="2" className="fill-slate-400 stroke-slate-400" />
        </svg>
      )
    },
    {
      title: 'Quantum Chemical Calculations',
      explanation: 'Electronic structure determinations utilizing Hartree-Fock and Density Functional Theory (DFT) in Gaussian to calculate frontier orbital distributions (HOMO-LUMO) and electrostatic maps.',
      svgIcon: (
        <svg viewBox="0 0 48 48" className="w-8 h-8 stroke-navy-900 fill-none" strokeWidth="1.75">
          <line x1="10" y1="36" x2="38" y2="36" strokeWidth="2" />
          <line x1="10" y1="16" x2="38" y2="16" strokeWidth="2" />
          <path d="M 18 36 L 18 16" strokeDasharray="3 3" className="stroke-academic-accent" />
          <path d="M 30 16 L 30 36" strokeDasharray="3 3" className="stroke-academic-accent" />
          <circle cx="18" cy="26" r="2.5" className="fill-academic-accent" />
          <circle cx="30" cy="26" r="2.5" className="fill-academic-accent" />
          <text x="39" y="19" className="font-mono text-[9px] fill-slate-500 select-none">LUMO</text>
          <text x="39" y="39" className="font-mono text-[9px] fill-slate-500 select-none">HOMO</text>
        </svg>
      )
    },
    {
      title: 'Molecular Visualization',
      explanation: 'High-resolution rendering of complex macromolecules, electrostatic potentials, and binding cavity surfaces using PyMOL and ChimeraX for clear structural representation.',
      svgIcon: (
        <svg viewBox="0 0 48 48" className="w-8 h-8 stroke-navy-900 fill-none" strokeWidth="1.75">
          <circle cx="24" cy="24" r="16" strokeDasharray="3 3" className="stroke-slate-300" />
          <path d="M 14 24 Q 24 14 34 24 Q 24 34 14 24 Z" className="fill-indigo-500/10 stroke-indigo-600" />
          <circle cx="24" cy="24" r="3.5" className="fill-indigo-600 stroke-indigo-600" />
          <line x1="24" y1="8" x2="24" y2="40" className="stroke-slate-200" />
          <line x1="8" y1="24" x2="40" y2="24" className="stroke-slate-200" />
        </svg>
      )
    }
  ];

  return (
    <section id="research" className="py-20 lg:py-28 bg-paper-50 border-b academic-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with exact prompt quote */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-academic-accent mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-academic-accent"></span>
            <span>Scientific Domains</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Research Interests
          </h2>
          <p className="mt-3 text-slateSubtle-600 text-lg leading-relaxed font-sans font-medium text-navy-800">
            &ldquo;My research experience brings together computational methods, molecular modeling, and scientific analysis.&rdquo;
          </p>
          <div className="w-12 h-1 bg-navy-900 mt-4"></div>
        </div>

        {/* 7 Research Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-xl border academic-border p-6 shadow-subtle hover:shadow-academic hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between ${
                idx === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-paper-100 border academic-border flex items-center justify-center mb-4">
                  {item.svgIcon}
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-[11px] text-slate-400">0{idx + 1}</span>
                  <h3 className="font-heading font-bold text-navy-950 text-base leading-snug">
                    {item.title}
                  </h3>
                </div>

                <p className="text-slateSubtle-600 text-xs sm:text-sm leading-relaxed">
                  {item.explanation}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t academic-border flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Methodology</span>
                <span className="text-navy-700 font-medium">In Silico</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
