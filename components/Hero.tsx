import React from 'react';
import { Mail, Linkedin, ArrowRight, Settings, Zap, Shield, Database, PenTool, Layout, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center pt-24 pb-12 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]"></div>
        
        {/* Abstract Floating Icons */}
        <div className="absolute top-[15%] left-[5%] animate-bounce opacity-20" style={{ animationDuration: '3s' }}>
          <Settings size={48} className="text-slate-400" />
        </div>
        <div className="absolute top-[40%] right-[10%] animate-pulse opacity-20" style={{ animationDuration: '5s' }}>
          <Layout size={64} className="text-indigo-400" />
        </div>
        <div className="absolute bottom-[20%] left-[15%] animate-bounce opacity-20" style={{ animationDuration: '4s' }}>
          <Zap size={40} className="text-blue-400" />
        </div>
      </div>

      <div className="container mx-auto px-6 z-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="w-fit mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-medium backdrop-blur-sm shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for New Challenges
          </div>

          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight leading-[0.9] mb-4">
              Wong <br />
              <span className="gradient-text">Wai Yain</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-400 font-light mt-4">
               Strategic <span className="text-white font-medium underline decoration-indigo-500 underline-offset-4">Product Owner / Manager</span>.
            </h2>
          </div>
            
          <div className="space-y-6 max-w-xl text-slate-300 text-lg leading-relaxed border-l-2 border-indigo-500/30 pl-6">
            <p>
              I bridge the gap between <strong className="text-white">business strategy</strong> and <strong className="text-white">technical execution</strong>. 5+ years experience shipping revenue-impacting features in fast-moving environments.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-10">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="group flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-all shadow-xl shadow-indigo-500/10 hover:-translate-y-1">
              <Mail size={18} />
              <span>Let's talk</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="https://www.linkedin.com/in/wai-yain-wong-00271b6a/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-slate-800/40 text-white border border-slate-700/50 px-8 py-4 rounded-xl font-medium hover:bg-slate-800 transition-all hover:-translate-y-1 backdrop-blur-sm">
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative z-10 transform translate-x-4">
                <div className="glass-card rounded-[2rem] p-8 border border-slate-700/50 shadow-2xl bg-slate-900/60 backdrop-blur-xl relative overflow-hidden group">
                    <div className="flex justify-between items-start mb-10">
                        <div>
                            <div className="text-[10px] font-bold text-indigo-400 tracking-[0.2em] uppercase mb-2">Product DNA</div>
                            <div className="text-3xl font-bold text-white">Core Expertise</div>
                            <div className="text-slate-400 text-sm mt-1">Foundational Capabilities</div>
                        </div>
                        <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                            WY
                        </div>
                    </div>

                    <div className="space-y-4">
                         <div className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-indigo-500/30 transition-colors">
                            <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400">
                                <Layers size={18} />
                            </div>
                            <div className="flex-1">
                                <div className="text-sm font-bold text-white">Backlog Prioritization</div>
                                <div className="text-[10px] text-slate-500 uppercase font-semibold">Grooming & Roadmap Planning</div>
                            </div>
                         </div>

                         <div className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-colors">
                            <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
                                <Shield size={18} />
                            </div>
                            <div className="flex-1">
                                <div className="text-sm font-bold text-white">Stakeholder Management</div>
                                <div className="text-[10px] text-slate-500 uppercase font-semibold">Client & Team Alignment</div>
                            </div>
                         </div>

                         <div className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-colors">
                            <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400">
                                <Database size={18} />
                            </div>
                            <div className="flex-1">
                                <div className="text-sm font-bold text-white">Data-Driven Insights</div>
                                <div className="text-[10px] text-slate-500 uppercase font-semibold">SQL / Postman / Analysis</div>
                            </div>
                         </div>

                         <div className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-pink-500/30 transition-colors">
                            <div className="p-2 bg-pink-500/20 rounded-lg text-pink-400">
                                <PenTool size={18} />
                            </div>
                            <div className="flex-1">
                                <div className="text-sm font-bold text-white">Product Design</div>
                                <div className="text-[10px] text-slate-500 uppercase font-semibold">Figma / Adobe XD Prototyping</div>
                            </div>
                         </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-700/50 grid grid-cols-3 gap-4">
                        <div className="text-center">
                            <div className="text-xl font-bold text-white">5+</div>
                            <div className="text-[8px] text-slate-500 uppercase tracking-widest font-black">Years XP</div>
                        </div>
                        <div className="text-center">
                            <div className="text-xl font-bold text-white">E2E</div>
                            <div className="text-[8px] text-slate-500 uppercase tracking-widest font-black">Concept-Launch</div>
                        </div>
                        <div className="text-center">
                            <div className="text-xl font-bold text-white">SaaS</div>
                            <div className="text-[8px] text-slate-500 uppercase tracking-widest font-black">Focus</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
