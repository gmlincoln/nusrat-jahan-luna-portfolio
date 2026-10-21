import React from 'react';
import { Newspaper, BookOpen, Calendar, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';

export default function ScientificWriting() {
  return (
    <section id="writing" className="py-20 lg:py-24 bg-paper-50 border-b academic-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-academic-accent mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-academic-accent"></span>
            <span>Publications &amp; Popular Science</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Scientific Writing
          </h2>
          <p className="mt-3 text-slateSubtle-600 text-base">
            Articles and educational mathematics expositions authored for national print and digital media.
          </p>
          <div className="w-12 h-1 bg-navy-900 mt-4"></div>
        </div>

        {/* Publication Style Card */}
        <div className="bg-white rounded-2xl border academic-border p-6 sm:p-8 shadow-subtle">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b academic-border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-paper-100 border academic-border flex items-center justify-center text-navy-900 flex-shrink-0 mt-0.5">
                <Newspaper className="w-6 h-6 text-academic-accent" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-paper-200 text-navy-900">
                    National Daily Publication
                  </span>
                  <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    7 Articles Published
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-navy-950">
                  Column Writer — The Daily Prothom Alo
                </h3>
                <p className="text-sm font-semibold text-navy-700 mt-0.5">
                  Prothom Alo Gonit Ischool (গণিত ইস্কুল)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-mono text-slateSubtle-500 bg-paper-50 px-3 py-1.5 rounded-lg border academic-border self-start sm:self-center">
              <Calendar className="w-3.5 h-3.5 text-navy-800" />
              <span>Mar 2021 – Jun 2023</span>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <p className="text-slateSubtle-600 text-sm leading-relaxed">
              Authored a total of <strong className="text-navy-900 font-semibold">seven educational articles</strong> in the <em>Prothom Alo Gonit Ischool</em> section, both individually and in collaborative authorship. The columns focused on breaking down mathematical reasoning and problem-solving techniques for primary, secondary, and Olympiad-level students nationwide.
            </p>

            <div className="p-4 rounded-xl bg-paper-50 border border-slate-200 text-xs sm:text-sm text-slateSubtle-600 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-academic-accent mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-navy-900">Editorial &amp; Formatting Workflow:</strong> Mastered Microsoft Office software suite (MS Word, Excel) for drafting, formatting mathematical notations, proofreading, and structuring print-ready articles.
              </div>
            </div>

            {/* Publication repository layout placeholder (structured, without fabricated titles/URLs) */}
            <div className="mt-8 pt-6 border-t academic-border">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-navy-900">
                  Article Archival Directory
                </h4>
                <span className="text-[11px] font-mono text-slate-400">
                  Detailed web URLs &amp; archival scan links updated upon official indexing
                </span>
              </div>

              <div className="border academic-border rounded-xl overflow-hidden divide-y divide-slate-100 text-xs sm:text-sm">
                <div className="p-3 bg-paper-50 font-mono text-xs text-slateSubtle-500 grid grid-cols-12 gap-2">
                  <span className="col-span-1">No.</span>
                  <span className="col-span-6">Publication / Outlet</span>
                  <span className="col-span-3">Coverage &amp; Format</span>
                  <span className="col-span-2 text-right">Status</span>
                </div>

                <div className="p-3.5 bg-white grid grid-cols-12 gap-2 items-center">
                  <span className="col-span-1 font-mono text-slate-400">01–07</span>
                  <span className="col-span-6 font-medium text-navy-900">
                    Prothom Alo Gonit Ischool Column Series
                    <span className="block text-xs text-slateSubtle-500 font-normal">
                      Single and collaborative mathematical exposition pieces
                    </span>
                  </span>
                  <span className="col-span-3 text-xs text-slateSubtle-600">
                    Print &amp; Digital Mathematics Outreach
                  </span>
                  <span className="col-span-2 text-right font-mono text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 inline-block self-center justify-self-end">
                    Published
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
