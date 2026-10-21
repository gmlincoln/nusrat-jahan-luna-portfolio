import React from 'react';
import { 
  Cpu, 
  Layers, 
  Eye, 
  FlaskConical, 
  BarChart3, 
  CheckCircle2, 
  Building2, 
  Calendar,
  Compass,
  FileCode2
} from 'lucide-react';

export default function ResearchExperience() {
  const activityGroups = [
    {
      id: 'group-1',
      title: 'Molecular Simulation',
      icon: Cpu,
      accent: 'border-l-blue-600',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      description: 'System preparation and dynamic trajectory investigation of molecular assemblies.',
      items: [
        'Molecular dynamics (MD) simulations.',
        'Energy minimization and trajectory analysis.',
        'System preparation using YASARA, Desmond, and GROMACS.'
      ],
      tools: ['YASARA', 'Desmond', 'GROMACS']
    },
    {
      id: 'group-2',
      title: 'Molecular Docking and Visualization',
      icon: Eye,
      accent: 'border-l-indigo-600',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      description: 'Conformational binding analysis and publication-grade macromolecular rendering.',
      items: [
        'Molecular docking calculations.',
        'Protein–ligand visualization and binding pocket inspection.',
        'Structural comparison and scientific figure preparation using PyMOL and ChimeraX.'
      ],
      tools: ['PyMOL', 'ChimeraX']
    },
    {
      id: 'group-3',
      title: 'Computational and Quantum Chemistry',
      icon: FlaskConical,
      accent: 'border-l-emerald-600',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      description: 'Ab initio and density functional calculations for electronic and energetic characterization.',
      items: [
        'Quantum chemical calculations using Gaussian for electronic structure analysis.',
        'Computational studies of Deep Eutectic Solvents (DES).'
      ],
      tools: ['Gaussian', 'DFT', 'Electronic Structure']
    },
    {
      id: 'group-4',
      title: 'Analysis and Research Support',
      icon: BarChart3,
      accent: 'border-l-amber-600',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      description: 'Post-simulation contact profiling, quantitative validation, and synthesis of research materials.',
      items: [
        'Intermolecular interaction analysis using Discovery Studio.',
        'Statistical analysis and plotting with GraphPad Prism.',
        'Assisted in data interpretation, result validation, and preparation of research materials.'
      ],
      tools: ['Discovery Studio', 'GraphPad Prism']
    }
  ];

  return (
    <section id="experience" className="py-20 lg:py-28 bg-white border-b academic-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-academic-accent mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-academic-accent"></span>
            <span>Laboratory &amp; Computational Affiliation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Research Experience
          </h2>
          <p className="mt-3 text-slateSubtle-600 text-base">
            Documented research activities and computational modeling workflows conducted at Red Green Research Center.
          </p>
          <div className="w-12 h-1 bg-navy-900 mt-4"></div>
        </div>

        {/* Primary Position Card */}
        <div className="bg-paper-50 rounded-2xl border academic-border p-6 sm:p-8 mb-10 shadow-subtle">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b academic-border">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
                  Current Appointment
                </span>
                <span className="text-xs text-slateSubtle-500 font-mono">
                  Computational Chemistry Group
                </span>
              </div>
              <h3 className="text-2xl font-bold text-navy-950 tracking-tight">
                Research Assistant
              </h3>
              <div className="flex items-center gap-2 text-navy-700 font-medium text-base mt-1">
                <Building2 className="w-4 h-4 text-academic-accent" />
                <span>Red Green Research Center</span>
              </div>
            </div>

            <div className="flex md:flex-col md:items-end text-sm text-slateSubtle-500 font-mono">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border academic-border shadow-2xs">
                <Calendar className="w-3.5 h-3.5 text-navy-800" />
                <span className="font-semibold text-navy-900">Sept &apos;25 – Present</span>
              </div>
            </div>
          </div>

          {/* Research Focus Statement Area */}
          <div className="mt-6 p-5 rounded-xl bg-white border academic-border">
            <div className="flex items-start gap-3">
              <Compass className="w-5 h-5 text-academic-accent mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-navy-950 uppercase tracking-wider font-mono">
                  Documented Research Focus
                </h4>
                <p className="text-slateSubtle-600 text-sm mt-1 leading-relaxed">
                  Investigation of <strong className="text-navy-900 font-semibold">Deep Eutectic Solvents (DES)</strong> using computational chemistry and molecular simulation methodologies. Work encompasses molecular dynamics simulations, conformational docking, quantum electronic structure calculations, and statistical post-processing to understand solvent-solute interactions and conformational stability.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Four Research Activity Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {activityGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.id}
                className={`bg-paper-50/60 rounded-xl border academic-border border-l-4 ${group.accent} p-6 hover:bg-white hover:shadow-academic transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-white border academic-border flex items-center justify-center text-navy-900 shadow-2xs">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-heading font-bold text-navy-950 text-lg leading-tight">
                        {group.title}
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs text-slateSubtle-500 mb-4 leading-relaxed font-sans">
                    {group.description}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {group.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slateSubtle-600">
                        <CheckCircle2 className="w-4 h-4 text-academic-accent mt-0.5 flex-shrink-0" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Software / Tools Chips */}
                <div className="pt-4 border-t academic-border flex flex-wrap gap-1.5 items-center">
                  <span className="text-[11px] font-mono text-slate-400 mr-1 uppercase">
                    Software:
                  </span>
                  {group.tools.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-white border border-slate-200 text-navy-900"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
