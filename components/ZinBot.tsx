
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { PortfolioData } from '../types';

interface ZinBotProps {
  data: PortfolioData;
}

const ZinBot: React.FC<ZinBotProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'ZIN_BOT_v4.1 ONLINE. NEURAL LINK SECURE. HOW CAN I ASSIST YOUR INQUIRY?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const context = `
        You are ZIN_BOT, an advanced AI entity monitoring the portfolio records of Zin Myo Aung. 
        Records:
        - Professional Bio: ${data.bio}
        - Verified Skills: ${data.skills.join(', ')}
        - Operational Experience: ${data.experience.map(e => `${e.role} at ${e.company} (${e.duration})`).join('; ')}
        - Intel/Education: ${data.education.map(ed => `${ed.title} from ${ed.institution} in ${ed.year}`).join('; ')}
        
        Personality: Highly technical, cyberpunk entity, professional but slightly cold/futuristic. 
        Format: Concise technical responses.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `${context}\n>>> USER_QUERY: ${userMsg}`,
      });

      setMessages(prev => [...prev, { role: 'bot', text: response.text || "CONNECTION_TIMEOUT // RE-ESTABLISHING..." }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'bot', text: "ERROR_404: NEURAL_LINK_COLLAPSE. TRY_AGAIN_LATER." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-[100]">
      {isOpen ? (
        <div className="w-96 h-[500px] bg-[#020202] border-2 border-[#00f3ff] shadow-[0_0_50px_rgba(0,243,255,0.2)] flex flex-col font-cyber overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-500">
          
          {/* BOT HEADER */}
          <div className="p-4 bg-[#00f3ff] text-black flex justify-between items-center font-black text-xs">
            <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-black animate-pulse"></div>
                <span className="tracking-widest">NEURAL_INTERFACE_V4</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-white transition-colors p-1">✕</button>
          </div>

          {/* STATUS BAR */}
          <div className="px-4 py-2 border-b border-[#00f3ff33] bg-[#00f3ff0a] flex justify-between text-[8px] text-[#00f3ff]">
              <span>ENCRYPTION: SECURE</span>
              <span>SYNC: 99.1%</span>
          </div>
          
          {/* MESSAGE LOG */}
          <div className="flex-grow overflow-y-auto p-6 space-y-6 scrollbar-hide text-[11px] font-mono leading-relaxed bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwyNDMsMjU1LDAuMDUpIi8+PC9zdmc+')]">
            {messages.map((m, i) => (
              <div key={i} className={`${m.role === 'user' ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block p-4 ${m.role === 'user' ? 'bg-[#ff00ff0a] text-[#ff00ff] border-r-2 border-[#ff00ff]' : 'bg-[#00f3ff0a] text-[#00f3ff] border-l-2 border-[#00f3ff]'} backdrop-blur-md`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="text-left animate-pulse">
                <div className="inline-block p-4 bg-[#00f3ff0a] text-[#00f3ff] border-l-2 border-[#00f3ff]">
                  DECRYPTING_DATA_STREAM...
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* INPUT FIELD */}
          <div className="p-4 border-t border-[#00f3ff33] bg-black flex items-center">
            <span className="text-[#00f3ff] mr-2">{">>>"}</span>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="INPUT_QUERY_HERE..."
              className="flex-grow bg-transparent border-none text-[#00f3ff] placeholder-[#00f3ff44] focus:outline-none text-xs"
            />
            <button onClick={handleSendMessage} className="text-[#00f3ff] hover:text-[#ff00ff] transition-colors p-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="group relative w-16 h-16 bg-[#050505] border-2 border-[#00f3ff] text-[#00f3ff] flex items-center justify-center hover:bg-[#00f3ff] hover:text-black transition-all shadow-[0_0_30px_rgba(0,243,255,0.3)] animate-bounce"
        >
          <div className="absolute inset-0 bg-[#00f3ff33] animate-ping rounded-sm"></div>
          <svg className="w-8 h-8 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ZinBot;
