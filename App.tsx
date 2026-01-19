
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import ZinBot from './components/ZinBot';
import { PORTFOLIO_DATA } from './constants';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [loadProgress, setLoadProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'experience', 'skills', 'education', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -300 && rect.top <= 300) {
            setActiveSection(section);
          }
        }
      }
    };

    const interval = setInterval(() => {
        setLoadProgress(prev => (prev < 100 ? prev + 1 : 100));
    }, 20);

    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
        clearInterval(interval);
    };
  }, []);

  if (loadProgress < 100) {
      return (
          <div className="h-screen w-screen bg-[#010101] flex flex-col items-center justify-center space-y-4 font-cyber">
              <div className="text-[#00f3ff] text-2xl tracking-[1em] animate-pulse">INITIALIZING_SYSTEM</div>
              <div className="w-64 h-1 bg-zinc-900 overflow-hidden relative">
                  <div className="h-full bg-[#ff00ff]" style={{ width: `${loadProgress}%` }}></div>
              </div>
              <div className="text-[10px] text-zinc-500">KERNEL_V4.0 // ARCHIVE_DECRYPT_{loadProgress}%</div>
          </div>
      );
  }

  return (
    <div className="min-h-screen relative bg-[#010101] selection:bg-[#ff00ff] selection:text-white overflow-x-hidden">
      
      {/* SIDEBAR TECHNICAL READOUT */}
      <div className="fixed left-0 top-0 bottom-0 w-16 z-[70] hidden xl:flex flex-col items-center justify-between py-10 border-r border-white/5 bg-black/50 backdrop-blur-md">
          <div className="flex flex-col space-y-8 items-center">
              <div className="w-1 h-20 bg-gradient-to-b from-[#00f3ff] to-transparent"></div>
              <div className="rotate-[-90deg] origin-center text-[10px] font-cyber text-zinc-600 tracking-[0.5em] whitespace-nowrap">
                  SYS_CORE_MONITOR
              </div>
          </div>
          <div className="flex flex-col space-y-4 items-center">
              <div className="w-2 h-2 rounded-full bg-[#ff00ff] animate-ping"></div>
              <div className="w-1 h-32 bg-gradient-to-t from-[#ff00ff] to-transparent"></div>
          </div>
      </div>

      {/* AMBIENT BACKGROUND LAYER */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#00f3ff03,transparent_80%)]"></div>
        
        {/* Animated Digital Rain Particles */}
        {[...Array(15)].map((_, i) => (
            <div 
                key={i} 
                className="absolute bg-gradient-to-b from-[#00f3ff] to-transparent opacity-[0.05]"
                style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: '1px',
                    height: `${Math.random() * 200 + 50}px`,
                    animation: `fall ${Math.random() * 5 + 5}s linear infinite`
                }}
            ></div>
        ))}
      </div>

      <Header activeSection={activeSection} />
      
      <main className="relative z-10 xl:ml-16 max-w-7xl mx-auto px-6 pt-32 pb-40">
        <section id="hero" className="min-h-screen flex items-center mb-60 relative">
          <Hero data={PORTFOLIO_DATA} />
          {/* Section Marker */}
          <div className="absolute -bottom-20 left-0 text-[10px] font-cyber text-zinc-700">REF: SECTION_01 // HERO_BLOCK</div>
        </section>

        <section id="experience" className="py-40 mb-60 relative">
          <ExperienceSection experience={PORTFOLIO_DATA.experience} />
          <div className="absolute -bottom-20 right-0 text-[10px] font-cyber text-zinc-700">REF: SECTION_02 // HISTORY_DB</div>
        </section>

        <section id="skills" className="py-40 mb-60 relative">
          <SkillsSection skills={PORTFOLIO_DATA.skills} />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[1px] bg-gradient-to-b from-[#00f3ff11] via-[#ff00ff11] to-transparent"></div>
        </section>

        <section id="education" className="py-40 mb-60 relative">
          <EducationSection education={PORTFOLIO_DATA.education} />
        </section>

        <section id="contact" className="py-40 relative">
          <ContactSection contact={PORTFOLIO_DATA.contact} />
        </section>
      </main>

      <ZinBot data={PORTFOLIO_DATA} />

      <footer className="relative z-20 xl:ml-16 bg-[#050505] pt-20 pb-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 opacity-40 hover:opacity-100 transition-opacity">
            <div className="font-sync text-sm tracking-widest text-[#00f3ff]">
              ZIN_SYS <span className="text-white">v4.0.2-ALPHA</span>
            </div>
            <div className="flex space-x-12">
                <div className="text-[9px] font-cyber text-zinc-500">COORDS: 37.7749° N, 122.4194° W</div>
                <div className="text-[9px] font-cyber text-zinc-500 uppercase tracking-widest">Neural Link: Established</div>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fall {
            from { transform: translateY(-100%); }
            to { transform: translateY(100vh); }
        }
      `}</style>
    </div>
  );
};

export default App;
