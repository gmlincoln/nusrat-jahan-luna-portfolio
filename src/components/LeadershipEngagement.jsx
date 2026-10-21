import React from 'react';
import { Users2, Award, Calendar, BookOpen, Sparkles, Binary } from 'lucide-react';

export default function LeadershipEngagement() {
  const leadershipRoles = [
    {
      role: 'Co-Head, Camp and Workshops',
      organization: 'Deviation Scientific Society',
      period: 'Nov 2024 – Present (Active) · Initial tenure Mar 2021 – Jul 2021',
      description: 'Coordinated nationwide student scientific and mathematical training initiatives.',
      achievements: [
        'Managed 300+ students in national and regional Olympiad preparation camps and workshops.',
        'Organized two major online camps (including AL-BIRUNI GEO CAMP and AL-KHWARIZMI AL-JABR CAMP) engaging 700+ student participants.',
        'Arranged 3+ academic contests for camp and workshop participants in direct collaboration with DSS-Gonitzoggo.'
      ],
      badge: 'Academic Leadership',
    },
    {
      role: 'General Member',
      organization: 'Eden Mohila College Research Society',
      period: 'Nov 2024 – Present · Joined as fresher',
      description: 'Engaged in peer research culture, scholarly workshops, and collegiate science discussions.',
      achievements: [
        'Joined as a fresher to foster community with peers sharing common scientific and research interests.',
        'Active participant in institutional academic seminars, research presentations, and student workshops.'
      ],
      badge: 'Research Community',
    },
    {
      role: 'Campus Ambassador',
      organization: 'Gonitzoggo (gonitzoggo.com)',
      period: 'Apr 2022 – Sept 2022',
      description: 'Student outreach and mathematical typesetting for educational enrichment.',
      achievements: [
        'Advertised online workshops and gathered enthusiastic mathematics and science students across campuses.',
        'Learned LaTeX typesetting for mathematical problem formatting, structure, and curated problem sets.'
      ],
      badge: 'Student Outreach',
    }
  ];

  return (
    <section id="leadership" className="py-20 lg:py-28 bg-white border-b academic-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-academic-accent mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-academic-accent"></span>
            <span>Community &amp; Student Mentorship</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Leadership &amp; Academic Engagement
          </h2>
          <p className="mt-3 text-slateSubtle-600 text-base">
            Organizational leadership, STEM Olympiad training camps, and collaborative contributions across student scientific societies.
          </p>
          <div className="w-12 h-1 bg-navy-900 mt-4"></div>
        </div>

        {/* Compact Timeline Grid */}
        <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
          {leadershipRoles.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-navy-900 group-hover:border-academic-accent transition-colors shadow-2xs"></div>

              {/* Card */}
              <div className="bg-paper-50 rounded-2xl border academic-border p-6 sm:p-7 shadow-subtle hover:bg-white hover:shadow-academic transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b academic-border mb-4">
                  <div>
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-navy-900/5 text-navy-800 border border-navy-900/10 mb-1.5 inline-block">
                      {item.badge}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-navy-950">
                      {item.role}
                    </h3>
                    <p className="text-sm font-semibold text-navy-800">
                      {item.organization}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-slateSubtle-500 bg-white px-3 py-1 rounded-md border academic-border self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-navy-800" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <p className="text-xs text-slateSubtle-500 mb-4 font-mono">
                  {item.description}
                </p>

                <ul className="space-y-2 text-sm text-slateSubtle-600">
                  {item.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-navy-800 mt-2 flex-shrink-0"></span>
                      <span className="leading-relaxed">{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
