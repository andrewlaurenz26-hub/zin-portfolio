
import React from 'react';

interface ContactSectionProps {
  contact: {
    github: string;
    email: string;
    phone: string;
    line: string;
  };
}

const ContactSection: React.FC<ContactSectionProps> = ({ contact }) => {
  return (
    <div className="space-y-24">
       <div className="flex flex-col md:flex-row items-center justify-between border-b border-white/5 pb-10">
          <h2 className="font-bebas text-9xl text-white leading-none">
            GET<br/><span className="text-[#00f3ff]">SYNCED</span>
          </h2>
          <div className="text-right space-y-2 max-w-sm">
             <div className="font-cyber text-[10px] text-[#ff00ff] tracking-widest">ENCRYPTION: AES-256</div>
             <p className="text-zinc-500 font-light italic text-sm">Initiating secure handshake Protocol. Select preferred frequency for neural transmission.</p>
          </div>
       </div>

       <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
             <div className="grid gap-6">
                {[
                  { label: 'EMAIL_FREQ', val: contact.email, color: '#00f3ff', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', href: `mailto:${contact.email}` },
                  { label: 'GIT_GATEWAY', val: `@${contact.github}`, color: '#ff00ff', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', href: `https://github.com/${contact.github}` },
                  { label: 'VOICE_LINE', val: contact.phone, color: '#f0f000', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', href: '#' },
                  { label: 'LINE_NODE', val: contact.line, color: '#00ff00', icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.808-1.232L3 20l1.232-4.192C3.232 14.03 3 12.418 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z', href: '#' }
                ].map((item, i) => (
                  <a 
                    key={i}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : '_self'}
                    className="group relative flex items-center p-8 bg-zinc-900 border border-white/5 hover:border-white transition-all overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-16 h-16 opacity-[0.03] group-hover:opacity-[0.1] transition-opacity">
                       <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d={item.icon} /></svg>
                    </div>
                    <div className="flex-grow space-y-1">
                      <div className="font-cyber text-[8px] tracking-[0.4em] text-zinc-600 group-hover:text-white transition-colors">{item.label}</div>
                      <div className="font-sync font-bold text-lg text-white group-hover:text-[#00f3ff] transition-colors">{item.val}</div>
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center border border-white/10 group-hover:border-[#00f3ff] group-hover:scale-110 transition-all">
                       <svg className="w-5 h-5 text-white/20 group-hover:text-[#00f3ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </div>
                    {/* Background Progress Hover Decoration */}
                    <div className="absolute bottom-0 left-0 h-[2px] bg-[#00f3ff] w-0 group-hover:w-full transition-all duration-500"></div>
                  </a>
                ))}
             </div>
          </div>

          <div className="relative">
             <div className="sticky top-32 space-y-10">
                <div className="bg-black border-2 border-[#ff00ff] p-10 relative overflow-hidden clip-path-polygon">
                   <div className="absolute top-0 right-0 p-2 font-cyber text-[10px] text-[#ff00ff66]">ID: {Math.random().toString(16).slice(2, 10).toUpperCase()}</div>
                   <div className="space-y-6">
                      <h3 className="font-bebas text-5xl text-white">HIRE_PROTOCOL</h3>
                      <p className="text-zinc-400 font-mono text-xs leading-relaxed">
                        Currently accepting external contracts. Infrastructure optimization, full-stack deployment, and neural-net architecture design available for verified entities.
                      </p>
                      <div className="flex space-x-2">
                        {[...Array(20)].map((_, i) => (
                          <div key={i} className={`w-1 h-4 ${i < 15 ? 'bg-[#ff00ff]' : 'bg-zinc-800'}`}></div>
                        ))}
                      </div>
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                   <div className="p-4 bg-zinc-900 border border-white/5 text-center">
                      <div className="font-cyber text-[8px] text-zinc-600 mb-1">AVAILABILITY</div>
                      <div className="font-sync font-bold text-xs text-green-500">OPEN_LINK</div>
                   </div>
                   <div className="p-4 bg-zinc-900 border border-white/5 text-center">
                      <div className="font-cyber text-[8px] text-zinc-600 mb-1">LOCATION</div>
                      <div className="font-sync font-bold text-xs text-[#00f3ff]">GLOBAL_OPS</div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};

export default ContactSection;
