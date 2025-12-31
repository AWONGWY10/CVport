import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Bot, Send, User, Sparkles, Loader2 } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE_DATA, SKILLS_DATA } from '../constants';

const AIChat: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: "Hi! I'm Wai Yain's AI Assistant. Ask me anything about his experience in Loyalty or POS integrations!" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const prompt = `
        You are an AI assistant for Wong Wai Yain (Product Owner).
        Context about Wai Yain:
        - Role: ${PERSONAL_INFO.role}
        - Experience: ${JSON.stringify(EXPERIENCE_DATA)}
        - Skills: ${JSON.stringify(SKILLS_DATA)}
        - Key Achievements: ${PERSONAL_INFO.achievements.join(', ')}

        Answer concisely as his digital twin. Be professional, slightly fun, and emphasize his product ownership skills.
        User question: ${userMsg}
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      setMessages(prev => [...prev, { role: 'bot', text: response.text || "I'm having a bit of a server hiccup, but Wai Yain's loyalty systems are much more stable than me right now!" }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: "Error connecting to Wai Yain's brain. Please try again!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 bg-slate-900/80">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full text-sm font-bold mb-4">
            <Sparkles size={16} /> Digital Twin Beta
          </div>
          <h2 className="text-3xl font-bold text-white">Ask My <span className="gradient-text">Product Bot</span></h2>
          <p className="text-slate-400 mt-4 italic">Learn about my methodology through an interactive chat.</p>
        </div>

        <div className="glass-card rounded-3xl border border-slate-700/50 shadow-2xl overflow-hidden flex flex-col h-[500px]">
          <div className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar" ref={scrollRef}>
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl flex gap-3 ${
                  m.role === 'user' 
                    ? 'bg-indigo-600 text-white rounded-tr-none' 
                    : 'bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700'
                }`}>
                  <div className="mt-1 shrink-0">
                    {m.role === 'user' ? <User size={18} /> : <Bot size={18} className="text-indigo-400" />}
                  </div>
                  <p className="text-sm leading-relaxed">{m.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 border border-slate-700 p-4 rounded-2xl rounded-tl-none flex items-center gap-3">
                  <Loader2 size={18} className="animate-spin text-indigo-400" />
                  <span className="text-xs text-slate-400 italic">Synthesizing Product Insight...</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-slate-800/50 border-t border-slate-700/50 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder="Ask about my POS experience..."
              className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="p-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition-colors disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIChat;