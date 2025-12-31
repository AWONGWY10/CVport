import React from 'react';
import { MapPin, Mail, Linkedin, Layout, ArrowRight, Star, Gift, Zap } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center pt-24 pb-12 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]"></div>
        
        {/* Floating Icons */}
        <div className="absolute top-[15%] left-[5%] animate-bounce opacity-20" style={{ animationDuration: '3s' }}>
          <Star size={48} className="text-yellow-400" />
        </div>
        <div className="absolute top-[40%] right-[10%] animate-pulse opacity-20" style={{ animationDuration: '5s' }}>
          <Gift size={64} className="text-pink-400" />
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
               Product Owner specializing in <span className="text-white font-medium underline decoration-indigo-500 underline-offset-4">Loyalty & CX</span>.
            </h2>
          </div>
            
          <div className="space-y-6 max-w-xl text-slate-300 text-lg leading-relaxed border-l-2 border-indigo-500/30 pl-6">
            <p>
              I turn complex business logic into <strong className="text-white">seamless customer journeys</strong>. From F&B hyper-growth to retail ecosystems.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-10">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="group flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-all shadow-xl shadow-indigo-500/10 hover:-translate-y-1">
              <Mail size={18} />
              <span>Let's Talk Shop</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-slate-800/40 text-white border border-slate-700/50 px-8 py-4 rounded-xl font-medium hover:bg-slate-800 transition-all hover:-translate-y-1 backdrop-blur-sm">
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
                            <div className="text-[10px] font-bold text-indigo-400 tracking-[0.2em] uppercase mb-2">KPI Dashboard</div>
                            <div className="text-3xl font-bold text-white">Metrics Driver</div>
                            <div className="text-slate-400 text-sm mt-1">Growth & Engagement</div>
                        </div>
                        <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                            WY
                        </div>
                    </div>

                    <div className="space-y-7">
                         <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-300">User Retention</span>
                                <span className="text-indigo-400">92%</span>
                            </div>
                            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full w-[92%] bg-indigo-500"></div>
                            </div>
                        </div>
                         <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-300">System Uptime</span>
                                <span className="text-purple-400">99.9%</span>
                            </div>
                            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full w-[99.9%] bg-purple-500"></div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 pt-8 border-t border-slate-700/50 grid grid-cols-3 gap-4">
                        <div className="bg-slate-800/40 rounded-2xl p-4 text-center">
                            <div className="text-2xl font-bold text-white">5+</div>
                            <div className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Years</div>
                        </div>
                        <div className="bg-slate-800/40 rounded-2xl p-4 text-center">
                            <div className="text-2xl font-bold text-white">POS</div>
                            <div className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Integr.</div>
                        </div>
                        <div className="bg-slate-800/40 rounded-2xl p-4 text-center">
                            <div className="text-2xl font-bold text-white">UX</div>
                            <div className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Design</div>
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