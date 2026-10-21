import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ResearchExperience from './components/ResearchExperience';
import ResearchInterests from './components/ResearchInterests';
import TechnicalSkills from './components/TechnicalSkills';
import ScientificOutreach from './components/ScientificOutreach';
import LeadershipEngagement from './components/LeadershipEngagement';
import ScientificWriting from './components/ScientificWriting';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-paper-50 text-navy-900 selection:bg-indigo-100 selection:text-navy-900 font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <ResearchExperience />
        <ResearchInterests />
        <TechnicalSkills />
        <ScientificOutreach />
        <LeadershipEngagement />
        <ScientificWriting />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
