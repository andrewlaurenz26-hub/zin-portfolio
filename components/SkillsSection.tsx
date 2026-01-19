
import React from 'react';

interface SkillsSectionProps {
  skills: string[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const getLevel = (skill: string) => {
    const levels: Record<string, number> = {
      'IT Infrastructure': 95,
      'Networking': 90,
      'Javascript': 88,
      'HTML': 98,
      'CSS': 92,
      'AI & Data Science': 82,
      'UI Design': 90,
      'Figma': 85,
      'Git': 90,
      'SASS': 88
    };
    return levels[skill] || 80;
  };

  return (
    <div className="space-y-40 relative">
      <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
        <div className="inline-block py-2 px-6 border border-[#ff00ff22] text-[#ff00ff] font-cyber text-[10px] tracking-[0.8em] uppercase">
            Neurolink Augmentations
        </div>
        <h2 className="font-bebas text-[100px] md:text-[160px] text-white tracking-widest leading-none">
            SKILL<span className="text-[#00f3ff]">_</span>MATRIX
        </h2>
        <div className="flex items-center justify-center space-x-12 pt-4">
            <div className="text-[10px] font-cyber text-zinc-500 uppercase tracking-widest">Core_Processing: <span className="text-white">Active</span></div>
            <div className="text-[10px] font-cyber text-zinc-500 uppercase tracking-widest">Mod_Sync: <span className="text-[#ff00ff]">99.8%</span></div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {skills.map((skill, idx) => {
          const level = getLevel(skill);
          return (
            <div key={idx} className="relative group cursor-pointer h-64 border border-white/5 bg-[#050505] hover:border-[#00f3ff33] transition-all flex flex-col justify-between p-6 overflow-hidden">
              
              {/* Background index number */}
              <div className="absolute top-0 right-0 text-[100px] font-black text-white/[0.02] leading-none translate-x-1/4 -translate-y-1/4 group-hover:text-[#00f3ff05] transition-all">
                {idx.toString().padStart(2, '0')}
              </div>

              <div className="space-y-4 relative z-10">
                <div className="text-[9px] font-cyber text-[#00f3ff] tracking-widest">MOD_TYPE_SYS</div>
                <h3 className="font-sync font-bold text-xs text-white leading-tight uppercase group-hover:text-[#00f3ff] transition-colors">
                  {skill}
                </h3>
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex justify-between items-end">
                    <div className="text-[10px] font-cyber text-zinc-600">INTENSITY</div>
                    <div className="text-xl font-bebas text-white group-hover:text-[#ff00ff] transition-colors">{level}%</div>
                </div>
                <div className="h-1 w-full bg-zinc-900 relative overflow-hidden">
                    <div 
                        className="h-full bg-gradient-to-r from-[#00f3ff] to-[#ff00ff] transition-all duration-1000 group-hover:shadow-[0_0_15px_#00f3ff]" 
                        style={{ width: `${level}%` }}
                    ></div>
                </div>
              </div>

              {/* Hover highlight border */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#00f3ff] group-hover:w-full transition-all duration-500"></div>
            </div>
          );
        })}
      </div>

      {/* Decorative Technical Centerpiece */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-dashed border-white/5 rounded-full animate-[spin_60s_linear_infinite]"></div>
      </div>
    </div>
  );
};

export default SkillsSection;
