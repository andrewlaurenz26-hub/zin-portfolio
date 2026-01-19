
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour12: false }));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { id: 'hero', label: 'CORE', sub: '0x00' },
    { id: 'experience', label: 'LOGS', sub: '0x01' },
    { id: 'skills', label: 'MODS', sub: '0x02' },
    { id: 'education', label: 'ARCH', sub: '0x03' },
    { id: 'contact', label: 'LINK', sub: '0x04' },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] p-6 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Left HUD */}
        <div 
          className="group cursor-pointer flex items-center bg-black/40 backdrop-blur-md border border-white/10 px-6 py-3 clip-path-polygon hover:border-[#00f3ff] transition-all"
          onClick={() => scrollToSection('hero')}
        >
          <div className="relative w-8 h-8 mr-4">
             <div className="absolute inset-0 border-2 border-[#00f3ff] group-hover:rotate-45 transition-transform"></div>
             <div className="absolute inset-2 bg-[#ff00ff] animate-pulse"></div>
          </div>
          <div className="font-sync text-sm font-bold tracking-tighter text-white">
            ZIN<span className="text-[#00f3ff]">_</span>SYS<span className="text-[#ff00ff]">.</span>X
          </div>
        </div>
        
        {/* Nav HUD */}
        <div className="hidden lg:flex items-center space-x-1 bg-black/40 backdrop-blur-md border border-white/10 p-1 rounded-sm">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-6 py-3 font-cyber text-[10px] font-bold tracking-[0.2em] transition-all overflow-hidden group ${
                activeSection === item.id ? 'text-black' : 'text-zinc-500 hover:text-white'
              }`}
            >
              <div className={`absolute inset-0 transition-transform duration-300 ${activeSection === item.id ? 'bg-[#00f3ff]' : 'bg-white/5 translate-y-full group-hover:translate-y-0'}`}></div>
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Right HUD */}
        <div className="hidden md:flex items-center space-x-6 bg-black/40 backdrop-blur-md border border-white/10 px-6 py-3 clip-path-polygon hover:border-[#ff00ff] transition-all">
          <div className="text-right">
             <div className="text-[8px] font-cyber text-zinc-500 uppercase tracking-widest">System_Timer</div>
             <div className="text-xs font-mono text-[#ff00ff]">{time}</div>
          </div>
          <div className="w-1 h-8 bg-white/10"></div>
          <div className="flex flex-col items-center">
             <div className="w-3 h-3 border border-[#00f3ff] flex items-center justify-center">
                <div className="w-1 h-1 bg-[#00f3ff] animate-ping"></div>
             </div>
             <span className="text-[7px] font-cyber text-[#00f3ff] mt-1">LINK_SECURE</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
