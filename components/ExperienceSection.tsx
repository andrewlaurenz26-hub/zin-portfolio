
import React from 'react';
import { Experience } from '../types';

interface ExperienceSectionProps {
  experience: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience }) => {
  return (
    <div className="space-y-40">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 border-b border-white/5 pb-16">
        <div className="space-y-4">
          <div className="text-[#ff00ff] font-cyber text-[10px] tracking-[0.8em] uppercase opacity-60">System // Log Archive</div>
          <h2 className="font-bebas text-[100px] md:text-[140px] text-white leading-none tracking-tight">
            OPERATIONAL<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] to-[#00f3ff]">ARCHIVE</span>
          </h2>
        </div>
        <div className="max-w-md p-6 border border-white/5 bg-white/[0.02] cyber-card-alt">
            <div className="font-mono text-[11px] text-zinc-500 leading-relaxed">
                <span className="text-[#00f3ff]">{">>>"}</span> QUERYING_EXPERIENCE_RECORDS...<br/>
                <span className="text-[#00f3ff]">{">>>"}</span> STATUS: <span className="text-green-500">DECRYPTED</span><br/>
                <span className="text-[#00f3ff]">{">>>"}</span> ENTRIES_FOUND: {experience.length}<br/>
                <span className="text-[#00f3ff]">{">>>"}</span> ENCRYPTION: AES-512_HYPER
            </div>
        </div>
      </div>

      <div className="grid gap-32">
        {experience.map((exp, idx) => (
          <div key={idx} className="group relative grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Metadata Sidebar for Entry */}
            <div className="lg:col-span-3 space-y-6 lg:sticky lg:top-40">
                <div className="flex items-center space-x-3">
                    <div className="text-6xl font-bebas text-white opacity-20 group-hover:opacity-100 group-hover:text-[#00f3ff] transition-all duration-500">
                        0{idx + 1}
                    </div>
                    <div className="h-[1px] flex-grow bg-zinc-800"></div>
                </div>
                <div className="space-y-1">
                    <div className="text-[10px] font-cyber text-[#ff00ff] uppercase tracking-widest">TIMELINE_SPAN</div>
                    <div className="text-xl font-bebas text-white tracking-widest">{exp.duration.toUpperCase()}</div>
                </div>
                <div className="pt-8">
                    <div className="inline-block p-4 border border-white/5 bg-black/50 group-hover:border-[#00f3ff22] transition-all">
                        <div className="text-[8px] font-cyber text-zinc-600 mb-2">ENTRY_HASH</div>
                        <div className="text-[9px] font-mono text-zinc-400 break-all">{Math.random().toString(36).substring(2, 22).toUpperCase()}</div>
                    </div>
                </div>
            </div>

            {/* Content Body for Entry */}
            <div className="lg:col-span-9 relative p-12 bg-[#050505] border border-white/5 cyber-card group-hover:border-[#00f3ff33]">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#ff00ff] to-transparent opacity-30"></div>
                
                <div className="mb-10">
                    <h3 className="font-sync text-3xl font-black text-white group-hover:text-[#00f3ff] transition-colors tracking-tighter mb-2">
                        {exp.role.toUpperCase()}
                    </h3>
                    <div className="font-cyber text-sm text-[#ff00ff] uppercase tracking-[0.5em] font-bold">
                        {exp.company}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {exp.responsibilities.map((res, i) => (
                        <div key={i} className="flex items-start space-x-4 p-4 border border-white/5 hover:bg-white/[0.03] transition-all group/item">
                            <div className="mt-1.5 w-2 h-2 bg-[#00f3ff33] group-hover/item:bg-[#00f3ff] rotate-45 transition-all"></div>
                            <p className="text-zinc-400 text-sm leading-relaxed font-space">
                                {res}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Decorative Tech Accents */}
                <div className="absolute bottom-4 right-4 flex space-x-2">
                    {[...Array(6)].map((_, j) => (
                        <div key={j} className={`w-1 h-3 ${j < 4 ? 'bg-[#00f3ff33]' : 'bg-zinc-900'} animate-pulse`} style={{ animationDelay: `${j * 0.1}s` }}></div>
                    ))}
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
