
import React from 'react';
import { PortfolioData } from '../types';

interface HeroProps {
  data: PortfolioData;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <div className="w-full grid lg:grid-cols-12 gap-10 items-center">
      
      {/* LEFT CONTENT: TEXT & INTEL */}
      <div className="lg:col-span-7 space-y-12 relative z-10">
        
        {/* Background Ticker Decoration */}
        <div className="absolute -left-20 top-0 text-[180px] font-black text-white/[0.015] select-none pointer-events-none rotate-[-5deg]">
          DATA
        </div>

        <div className="space-y-6">
            <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#00f3ff]"></div>
                <div className="text-[10px] font-cyber tracking-[0.5em] text-[#00f3ff] uppercase bg-[#00f3ff0a] px-3 py-1 border-y border-[#00f3ff22]">
                    Protocol // Identity Verified
                </div>
            </div>
            
            <div className="relative group">
                <h1 className="font-bebas text-[110px] md:text-[180px] leading-[0.8] tracking-tighter text-white">
                    ZIN MYO<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f3ff] via-white to-[#ff00ff] glitch-text" data-text="AUNG">AUNG</span>
                </h1>
            </div>

            <div className="max-w-2xl relative p-8 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 backdrop-blur-xl cyber-card">
                <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#ff00ff]"></div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#00f3ff]"></div>
                <p className="text-zinc-400 text-lg leading-relaxed font-space tracking-wide">
                    {data.bio}
                </p>
                <div className="mt-6 flex items-center space-x-2 text-[10px] font-cyber text-zinc-600">
                    <span className="w-10 h-[1px] bg-zinc-800"></span>
                    <span>CORE_BIO_EXTRACTED</span>
                </div>
            </div>
        </div>

        <div className="flex flex-wrap gap-8">
            <button 
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-10 py-5 bg-transparent overflow-hidden border border-[#00f3ff] transition-all hover:shadow-[0_0_30px_rgba(0,243,255,0.3)]"
            >
                <div className="absolute inset-0 bg-[#00f3ff] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative z-10 font-cyber font-black text-xs text-[#00f3ff] group-hover:text-black tracking-[0.3em]">INIT_HISTORY_STREAM</span>
            </button>
            
            <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-10 py-5 border border-white/10 overflow-hidden transition-all hover:border-[#ff00ff]"
            >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff00ff] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <span className="font-cyber font-black text-xs text-white group-hover:text-[#ff00ff] tracking-[0.3em]">ESTABLISH_UPLINK</span>
            </button>
        </div>
      </div>

      {/* RIGHT CONTENT: HOLOGRAPHIC CORE */}
      <div className="lg:col-span-5 relative flex justify-center items-center h-[500px] lg:h-[700px]">
        
        {/* Holographic Ring Cluster */}
        <div className="absolute w-[450px] h-[450px] border border-[#00f3ff11] rounded-full animate-[spin_40s_linear_infinite]"></div>
        <div className="absolute w-[350px] h-[350px] border border-dashed border-[#ff00ff22] rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
        <div className="absolute w-[550px] h-[550px] border-t border-l border-[#00f3ff05] rounded-full animate-[pulse_5s_ease-in-out_infinite]"></div>

        {/* Floating Technical Labels */}
        <div className="absolute top-20 right-0 p-4 border-l border-[#ff00ff] bg-black/50 backdrop-blur-md animate-bounce">
            <div className="text-[10px] font-cyber text-[#ff00ff] mb-1">TARGET_STATUS</div>
            <div className="text-[8px] font-mono text-white opacity-60">OPTIMAL_READY</div>
        </div>

        <div className="absolute bottom-20 left-0 p-4 border-r border-[#00f3ff] bg-black/50 backdrop-blur-md">
            <div className="text-[10px] font-cyber text-[#00f3ff] mb-1">NEURAL_ID</div>
            <div className="text-[8px] font-mono text-white opacity-60">0x7F22_BETA</div>
        </div>

        {/* Main Central Visual */}
        <div className="relative w-80 h-[500px] bg-[#050505] border-2 border-[#00f3ff] shadow-[0_0_60px_rgba(0,243,255,0.15)] clip-path-polygon-alt group overflow-hidden">
            <img 
                src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=800" 
                alt="Cyber Matrix" 
                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
            />
            {/* Scanlines inside the frame */}
            <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,243,255,0.1)_3px)]"></div>
            
            {/* Holographic scanning laser */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#ff00ff] to-transparent shadow-[0_0_15px_#ff00ff] animate-[scan_4s_linear_infinite]"></div>
            
            {/* Branding over image */}
            <div className="absolute bottom-10 left-0 right-0 text-center">
                <div className="font-sync text-[10px] font-black text-white tracking-[1em] opacity-40">ZIN_SYS</div>
            </div>
        </div>
      </div>

      <style>{`
        .clip-path-polygon-alt {
            clip-path: polygon(15% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%, 0% 15%);
        }
        @keyframes scan {
            0% { top: 0%; }
            100% { top: 100%; }
        }
      `}</style>
    </div>
  );
};

export default Hero;
