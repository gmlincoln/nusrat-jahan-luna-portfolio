import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, BookOpen, School } from 'lucide-react';

export default function Education() {
  const educationHistory = [
    {
      institution: 'Eden Mohila College',
      location: 'Dhaka, Bangladesh',
      degree: 'BS (Hons.), Department of Chemistry',
      period: 'Oct 2024 (Enrolled / In Progress)',
      description: 'Undergraduate concentration in pure and applied chemistry, with specialized research pursuits in computational chemistry, molecular dynamics simulations, and electronic structure modeling.',
      highlight: 'Department of Chemistry',
      gpa: null,
      current: true,
    },
    {
      institution: 'Viqarunnisa Noon College (Main Campus)',
      location: 'Dhaka, Bangladesh',
      degree: 'Higher Secondary School Certificate (HSC), Science',
      period: 'Dec 2023',
      description: 'Pre-university science curriculum with rigorous coursework in Chemistry, Physics, Mathematics, and Biology.',
      highlight: 'Perfect Academic Standing',
      gpa: 'GPA 5.00 / 5.00',
      current: false,
    },
    {
      institution: "Matripith Government Girls' High School",
      location: 'Chandpur, Bangladesh',
      degree: 'Secondary School Certificate (SSC), Science',
      period: 'Jan 2021',
      description: 'Secondary science curriculum establishing foundational excellence in physical and biological sciences and advanced mathematics.',
      highlight: 'Perfect Academic Standing',
      gpa: 'GPA 5.00 / 5.00',
      current: false,
    },
  ];

  return (
    <section id="education" className="py-20 lg:py-28 bg-white border-b academic-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-academic-accent mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-academic-accent"></span>
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Education
          </h2>
          <p className="mt-3 text-slateSubtle-600 text-base">
            Formal scientific education and academic milestones verified from the curriculum vitae.
          </p>
          <div className="w-12 h-1 bg-navy-900 mt-4"></div>
        </div>

        {/* Education Cards Grid */}
        <div className="space-y-6">
          {educationHistory.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border academic-border p-6 sm:p-8 transition-all ${
                item.current
                  ? 'bg-paper-50/80 border-navy-900/20 shadow-academic ring-1 ring-navy-900/5'
                  : 'bg-white hover:bg-paper-50/50 shadow-subtle'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b academic-border mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    {item.current ? (
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-blue-50 text-blue-800 border border-blue-200">
                        Undergraduate Studies
                      </span>
                    ) : (
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slateSubtle-100 text-slateSubtle-600 border border-slate-200">
                        Completed Examination
                      </span>
                    )}

                    {item.gpa && (
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                        <Award className="w-3 h-3" />
                        {item.gpa}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-navy-950">
                    {item.institution}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-3 text-sm text-navy-800 font-medium mt-1">
                    <span className="text-academic-accent font-semibold">{item.degree}</span>
                    <span className="text-slate-300">·</span>
                    <span className="inline-flex items-center gap-1 text-slateSubtle-500 font-normal">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-slateSubtle-500 bg-white px-3 py-1.5 rounded-lg border academic-border self-start lg:self-center shadow-2xs">
                  <Calendar className="w-3.5 h-3.5 text-navy-800" />
                  <span>{item.period}</span>
                </div>
              </div>

              <p className="text-slateSubtle-600 text-sm leading-relaxed max-w-4xl">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
