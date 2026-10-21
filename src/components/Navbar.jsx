import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, ExternalLink } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-paper-50/95 backdrop-blur-md shadow-sm border-b academic-border py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Typographic Logo */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 focus:outline-none"
            aria-label="Nusrat Jahan Luna Home"
          >
            <div className="w-8 h-8 rounded-lg bg-navy-900 text-white flex items-center justify-center font-heading font-bold text-sm tracking-tight group-hover:bg-academic-accent transition-colors">
              NJL
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-semibold text-navy-950 text-base leading-none tracking-tight">
                Nusrat Jahan Luna
              </span>
              <span className="font-mono text-[10px] text-slateSubtle-500 tracking-wider uppercase mt-1">
                Computational Chemistry
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-6 list-none m-0 p-0">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[13.5px] font-medium text-slateSubtle-600 hover:text-navy-950 transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-navy-900"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="h-4 w-px bg-slate-300 mx-1" aria-hidden="true"></div>

            {/* Download CV Button */}
            <a
              href="/Nusrat_Jahan_Luna_CV.pdf"
              download="Nusrat_Jahan_Luna_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-md border border-navy-800 text-navy-900 bg-white hover:bg-navy-900 hover:text-white transition-all shadow-subtle group"
              id="nav-download-cv-btn"
            >
              <FileDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              <span>Download CV</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="/Nusrat_Jahan_Luna_CV.pdf"
              download="Nusrat_Jahan_Luna_CV.pdf"
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded border border-navy-800 text-navy-900 bg-white"
            >
              <FileDown className="w-3 h-3" />
              <span>CV</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-navy-900 hover:bg-paper-200 transition-colors focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t academic-border bg-paper-50 rounded-b-xl shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-2 px-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slateSubtle-600 hover:text-navy-950 hover:bg-paper-200 rounded-md transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t academic-border mt-2">
                <a
                  href="/Nusrat_Jahan_Luna_CV.pdf"
                  download="Nusrat_Jahan_Luna_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-md bg-navy-900 text-white hover:bg-navy-800 transition-colors"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Curriculum Vitae (PDF)</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
