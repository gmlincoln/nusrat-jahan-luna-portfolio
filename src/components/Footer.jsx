import React from 'react';
import { ArrowUp, Mail, FileDown } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Research', href: '#research' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Outreach', href: '#outreach' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-navy-950 text-white pt-16 pb-12 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-navy-900">
          
          {/* Brand & Academic Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white text-navy-950 flex items-center justify-center font-heading font-bold text-sm">
                NJL
              </div>
              <h3 className="font-heading font-bold text-xl text-white tracking-tight">
                Nusrat Jahan Luna
              </h3>
            </div>

            <p className="font-heading text-slate-300 text-sm">
              Chemistry, Computation &amp; Scientific Discovery
            </p>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Undergraduate chemistry researcher at Red Green Research Center exploring Deep Eutectic Solvents (DES), molecular dynamics simulations, and public astronomy outreach with IAU Bangladesh.
            </p>

            <div className="pt-2">
              <a
                href="/Nusrat_Jahan_Luna_CV.pdf"
                download="Nusrat_Jahan_Luna_CV.pdf"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-navy-850 hover:bg-navy-800 border border-navy-700 text-xs font-mono text-slate-200 transition-colors"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Curriculum Vitae (PDF)</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
              Portfolio Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs text-slate-300 hover:text-white transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Direct Communication */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
              Direct Contact
            </h4>
            <a
              href="mailto:nusratjahan17.423@gmail.com"
              className="flex items-center gap-2 text-xs text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>nusratjahan17.423@gmail.com</span>
            </a>
            <p className="text-xs text-slate-400 font-mono">
              Eden Mohila College, Dhaka-1205
            </p>
            <p className="text-xs text-slate-400 font-mono">
              Dhaka, Bangladesh
            </p>
          </div>

        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {currentYear} Nusrat Jahan Luna. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-slate-500">
              Designed for Academic &amp; Research Portfolio Presentation
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors p-1"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
