
import React from 'react';
import { EducationItem } from '../types';

interface EducationSectionProps {
  education: EducationItem[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  return (
    <div className="space-y-12">
      <div className="flex items-center space-x-4">
        <h2 className="font-cyber text-3xl font-bold text-white uppercase tracking-tighter">
          Knowledge <span className="text-[#00f3ff]">Archive</span>
        </h2>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-[#00f3ff] to-transparent"></div>
      </div>

      <div className="grid gap-6">
        {education.map((item, idx) => (
          <div 
            key={idx} 
            className="flex flex-col md:flex-row md:items-center p-6 border-l-4 border-[#ff00ff] bg-[#0a0a0a] hover:bg-[#ff00ff11] transition-colors"
          >
            <div className="md:w-32 font-cyber text-2xl font-black text-[#ff00ff] mb-2 md:mb-0">
              {item.year}
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">{item.title}</h3>
              <p className="text-sm text-[#888]">{item.institution}</p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="px-3 py-1 text-[10px] font-cyber bg-[#00f3ff22] text-[#00f3ff] border border-[#00f3ff33]">
                CERTIFIED
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
