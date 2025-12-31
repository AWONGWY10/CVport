import React, { useState } from 'react';
import { Star, Gift, Trophy, ArrowRight, MousePointer2, CheckCircle2, Sparkles } from 'lucide-react';
import { SKILLS_DATA, PERSONAL_INFO } from '../constants';

const LoyaltySim: React.FC = () => {
  const [points, setPoints] = useState(0);
  const [unlocked, setUnlocked] = useState(false);
  const [clickedSkills, setClickedSkills] = useState<string[]>([]);

  const handleSkillClick = (skill: string) => {
    if (clickedSkills.includes(skill)) return;
    
    const newPoints = points + 10;
    setClickedSkills([...clickedSkills, skill]);
    setPoints(newPoints);
    
    if (newPoints >= 100) {
      setUnlocked(true);
    }
  };

  const allSkills = SKILLS_DATA.flatMap(cat => cat.skills);

  return (
    <section className="py-24 relative" id="loyalty-sim">
      <div className="container mx-auto px-6">
        {/* Removed overflow-hidden from the main card to prevent clipping the floating hint */}
        <div className="glass-card rounded-[2.5rem] border border-slate-700/50 p-10 md:p-16 relative shadow-2xl">
          {/* Decorative backgrounds - contained within a separate absolute div with overflow hidden if needed */}
          <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-500/10 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px]"></div>
          </div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 text-yellow-500 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-yellow-500/20 animate-pulse">
                <Sparkles size={12} /> Interactive Reward Engine
              </div>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-2xl flex items-center justify-center text-yellow-500 border border-yellow-500/30 shadow-[0_0_20px_rgba(234,179,8,0.2)]">
                  <Star size={24} fill="currentColor" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">The Loyalty <span className="text-yellow-500">Simulator</span></h2>
              </div>
              
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                I own and shape engagement-driven experiences. 
                <span className="text-white font-bold block mt-2 p-3 bg-white/5 border-l-4 border-yellow-500 rounded-r-xl">
                    👉 Tap my skills on the grid to collect 100 points and unlock my full “Rewards” (Contact info).
                </span>
              </p>

              <div className="bg-slate-900/80 rounded-3xl p-8 border border-slate-700/50 backdrop-blur-md shadow-inner relative group">
                {/* Visual Progress Goal Indicator */}
                <div className="absolute -top-3 -right-3 bg-indigo-600 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg border border-indigo-400 z-20">
                    GOAL: 100 PTS
                </div>

                <div className="flex justify-between items-end mb-4">
                  <div>
                    <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Your Earnings</div>
                    <div className="text-5xl font-black text-white flex items-baseline gap-2 transition-all tabular-nums">
                      {points} <span className="text-sm font-medium text-yellow-500">Pts</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Status</div>
                    <div className="text-sm font-bold text-indigo-400 flex items-center gap-2 justify-end">
                      <div className={`w-2 h-2 rounded-full ${unlocked ? 'bg-emerald-400 shadow-[0_0_8px_#34d399]' : 'bg-slate-600'}`}></div>
                      {unlocked ? 'Diamond Elite' : points >= 50 ? 'Gold' : 'Silver'}
                    </div>
                  </div>
                </div>

                <div className="h-5 bg-slate-800/80 rounded-full overflow-hidden border border-slate-700 p-1">
                  <div 
                    className="h-full bg-gradient-to-r from-yellow-500 via-orange-500 to-indigo-500 rounded-full transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(234,179,8,0.3)]"
                    style={{ width: `${Math.min(points, 100)}%` }}
                  ></div>
                </div>
                
                <div className="mt-4 flex justify-between text-[10px] font-black text-slate-500 uppercase tracking-widest">
                  <span className={points >= 0 ? 'text-slate-300' : ''}>0</span>
                  <span className={points >= 50 ? 'text-indigo-400' : ''}>50 (Level Up)</span>
                  <span className={points >= 100 ? 'text-yellow-500' : ''}>100 (Unlock)</span>
                </div>
              </div>

              {unlocked && (
                <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 flex items-center gap-3 text-emerald-400 font-bold bg-emerald-400/10 p-5 rounded-2xl border border-emerald-400/30">
                  <Trophy size={24} className="animate-bounce" />
                  <div>
                    <div className="text-sm">Reward Unlocked!</div>
                    <div className="text-xs opacity-80">You've successfully completed the loyalty loop.</div>
                  </div>
                </div>
              )}
            </div>

            <div className="relative min-h-[450px] flex flex-col justify-end">
              {!unlocked ? (
                <div className="relative pt-12">
                  {/* Floating Hand Hint for interaction - Adjusted position and z-index */}
                  {points === 0 && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-yellow-500 text-slate-900 px-5 py-2.5 rounded-2xl text-xs font-black shadow-[0_10px_30px_rgba(234,179,8,0.4)] flex items-center gap-2 animate-bounce z-40 ring-4 ring-yellow-500/20 whitespace-nowrap">
                        <MousePointer2 size={16} fill="currentColor" /> CLICK HERE TO START!
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-yellow-500 rotate-45"></div>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4">
                    {allSkills.slice(0, 10).map((skill, i) => (
                      <button
                        key={i}
                        onClick={() => handleSkillClick(skill)}
                        disabled={clickedSkills.includes(skill)}
                        className={`group relative p-5 rounded-2xl border text-left transition-all duration-300 transform active:scale-95 ${
                          clickedSkills.includes(skill)
                            ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400 cursor-default scale-95 opacity-60'
                            : 'bg-slate-800/80 border-slate-700 text-slate-100 hover:border-yellow-500 hover:bg-slate-800 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(234,179,8,0.15)] animate-glow-subtle'
                        }`}
                      >
                        <div className={`text-[10px] font-black mb-2 uppercase tracking-tighter flex items-center justify-between ${clickedSkills.includes(skill) ? 'text-emerald-500/50' : 'text-yellow-500'}`}>
                           <span>{clickedSkills.includes(skill) ? 'Claimed' : '+10 Pts'}</span>
                           {!clickedSkills.includes(skill) && <Sparkles size={10} className="animate-pulse" />}
                        </div>
                        <div className="font-bold text-sm flex items-center justify-between gap-2">
                          <span className="truncate">{skill}</span>
                          {clickedSkills.includes(skill) ? (
                            <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                          ) : (
                            <div className="w-6 h-6 rounded-full bg-slate-700/50 flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-slate-900 transition-colors shrink-0 shadow-lg">
                                <MousePointer2 size={12} />
                            </div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 rounded-[2.5rem] p-10 text-white shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 border border-white/20 relative overflow-hidden h-full min-h-[400px] flex flex-col justify-center">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Trophy size={200} />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-10">
                        <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-xl border border-white/30 shadow-xl">
                            <Gift size={32} className="text-yellow-300" />
                        </div>
                        <div className="px-4 py-1.5 bg-yellow-500 text-slate-900 rounded-full text-[10px] font-black uppercase tracking-widest shadow-[0_5px_15px_rgba(234,179,8,0.3)]">Reward Unlocked</div>
                    </div>
                    
                    <h3 className="text-4xl font-black mb-4 leading-tight">Diamond Elite <br/>Access!</h3>
                    <p className="text-indigo-100 mb-10 leading-relaxed text-lg font-medium opacity-90">
                        Engagement pays off. Here is my direct contact for your next big product launch.
                    </p>
                    
                    <div className="space-y-4">
                        <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center justify-between bg-white text-indigo-900 p-5 rounded-2xl font-black hover:bg-yellow-50 transition-all shadow-xl hover:translate-x-2 group">
                            Email Me Directly <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <div className="flex items-center justify-center gap-3 p-4 bg-indigo-900/40 rounded-2xl border border-white/10 text-indigo-100 font-bold tracking-widest text-sm">
                            <span className="opacity-50 text-[10px]">MOBILE:</span> {PERSONAL_INFO.phone}
                        </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes glow-subtle {
          0%, 100% { border-color: rgba(51, 65, 85, 0.6); box-shadow: 0 0 0 rgba(234, 179, 8, 0); }
          50% { border-color: rgba(234, 179, 8, 0.4); box-shadow: 0 0 15px rgba(234, 179, 8, 0.05); }
        }
        .animate-glow-subtle {
          animation: glow-subtle 3s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default LoyaltySim;
