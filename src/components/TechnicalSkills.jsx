import React from 'react';
import { Terminal, Database, Laptop, Layers, CheckCircle } from 'lucide-react';

export default function TechnicalSkills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Terminal,
      description: 'Scientific scripting, data manipulation, algorithm implementation, and computational modeling languages.',
      skills: [
        { name: 'C', note: 'Procedural programming & algorithm design' },
        { name: 'C++', note: 'Object-oriented logic & high-performance computing basics' },
        { name: 'R', note: 'Statistical computing & dataset exploration' },
        { name: 'Python (Elementary)', note: 'Scientific scripting & data handling' },
      ],
      accent: 'border-l-blue-600',
    },
    {
      title: 'Computational Chemistry & Research Software',
      icon: Database,
      description: 'Specialized scientific packages for molecular dynamics, docking, quantum calculations, and structural visualization.',
      skills: [
        { name: 'YASARA', note: 'Molecular dynamics & system prep' },
        { name: 'Desmond', note: 'MD simulations & trajectory analysis' },
        { name: 'GROMACS', note: 'High-throughput classical MD simulations' },
        { name: 'PyMOL', note: 'Macromolecular rendering & figure prep' },
        { name: 'ChimeraX', note: 'Structural comparison & interactive visualization' },
        { name: 'Discovery Studio', note: 'Intermolecular contact & interaction analysis' },
        { name: 'GraphPad Prism', note: 'Statistical analysis & publication plotting' },
        { name: 'Gaussian', note: 'Quantum chemical & electronic structure calculations' },
      ],
      accent: 'border-l-indigo-600',
    },
    {
      title: 'Productivity & Collaboration',
      icon: Laptop,
      description: 'Modern office suites, asynchronous research communication, and cloud-based collaborative workflows.',
      skills: [
        { name: 'Microsoft Office', note: 'MS Word, Excel, PowerPoint formatting & analysis' },
        { name: 'Slack', note: 'Team coordination & research updates' },
        { name: 'Google Workspace', note: 'Cloud document collaboration & data sharing' },
      ],
      accent: 'border-l-emerald-600',
    },
  ];

  return (
    <section id="skills" className="py-20 lg:py-28 bg-white border-b academic-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-academic-accent mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-academic-accent"></span>
            <span>Tooling &amp; Software Proficiency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Technical Skills
          </h2>
          <p className="mt-3 text-slateSubtle-600 text-base">
            Verified technical toolstack categorized into programming languages, specialized computational chemistry suites, and collaborative environments.
          </p>
          <div className="w-12 h-1 bg-navy-900 mt-4"></div>
        </div>

        {/* 3 Skill Groups */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className={`bg-paper-50 rounded-2xl border academic-border border-l-4 ${cat.accent} p-6 shadow-subtle hover:shadow-academic transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-white border academic-border flex items-center justify-center text-navy-900 shadow-2xs">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-heading font-bold text-navy-950 text-base">
                      {cat.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slateSubtle-500 mb-6 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Elegant text-based skill tags */}
                  <div className="space-y-2.5">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 bg-white rounded-xl border border-slate-200/90 hover:border-slate-300 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-mono text-xs font-bold text-navy-950">
                            {skill.name}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        </div>
                        <p className="text-[11px] text-slateSubtle-500 leading-snug">
                          {skill.note}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t academic-border flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Count</span>
                  <span>{cat.skills.length} verified tools</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
