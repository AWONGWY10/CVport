
import React, { useState } from 'react';
// Fixed: Removed incorrect 'pointer' import as it is not exported by 'lucide-react' and is unused in this component.
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
    <section className="py-24 relative overflow-hidden" id="loyalty-sim">
      <div className="container mx-auto px-6">
        <div className="glass-card rounded-[2.5rem] border border-slate-700/50 p-10 md:p-16 overflow-hidden relative shadow-2xl">
          {/* Decorative backgrounds */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-500/10 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 text-yellow-500 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-yellow-500/20 animate-pulse">
                <Sparkles size={12} /> Interactive Experience
              </div>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-2xl flex items-center justify-center text-yellow-500 border border-yellow-500/30 shadow-[0_0_20px_rgba(234,179,8,0.2)]">
                  <Star size={24} fill="currentColor" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">The Loyalty <span className="text-yellow-500">Simulator</span></h2>
              </div>
              
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                I own and shape engagement-driven experiences. 
                <span className="text-white font-bold underline decoration-yellow-500 underline-offset-4">Tap my skills</span> on the right to collect 100 points and unlock my full “Rewards” (Contact info).
              </p>

              <div className="bg-slate-900/80 rounded-3xl p-8 border border-slate-700/50 backdrop-blur-md shadow-inner relative group">
                {/* Visual Progress Goal Indicator */}
                <div className="absolute -top-3 -right-3 bg-indigo-600 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg border border-indigo-400 z-20">
                    TARGET: 100 PTS
                </div>

                <div className="flex justify-between items-end mb-4">
                  <div>
                    <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Total Points Earned</div>
                    <div className="text-5xl font-black text-white flex items-baseline gap-2 transition-all">
                      {points} <span className="text-sm font-medium text-yellow-500 animate-bounce">Pts</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Member Status</div>
                    <div className="text-sm font-bold text-indigo-400 flex items-center gap-2 justify-end">
                      <div className={`w-2 h-2 rounded-full ${unlocked ? 'bg-emerald-400 shadow-[0_0_8px_#34d399]' : 'bg-slate-600'}`}></div>
                      {unlocked ? 'Diamond Member' : points >= 50 ? 'Gold Member' : 'Silver Member'}
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
                  <span className={points >= 0 ? 'text-slate-300' : ''}>Standard</span>
                  <span className={points >= 50 ? 'text-indigo-400' : ''}>Elite (50)</span>
                  <span className={points >= 100 ? 'text-yellow-500' : ''}>Diamond (100)</span>
                </div>
              </div>

              {unlocked && (
                <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 flex items-center gap-3 text-emerald-400 font-bold bg-emerald-400/10 p-5 rounded-2xl border border-emerald-400/30">
                  <Trophy size={24} className="animate-bounce" />
                  <div>
                    <div className="text-sm">Achievement Unlocked!</div>
                    <div className="text-xs opacity-80">You've successfully simulated a high-engagement user journey.</div>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              {!unlocked ? (
                <div className="relative">
                  {/* Floating Hint for interaction */}
                  {points === 0 && (
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-slate-900 px-4 py-2 rounded-xl text-xs font-black shadow-2xl flex items-center gap-2 animate-bounce z-30">
                        <MousePointer2 size={14} fill="currentColor" /> CLICK TO EARN POINTS!
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45"></div>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4">
                    {allSkills.slice(0, 10).map((skill, i) => (
                      <button
                        key={i}
                        onClick={() => handleSkillClick(skill)}
                        disabled={clickedSkills.includes(skill)}
                        className={`group relative p-5 rounded-2xl border text-left transition-all duration-500 transform hover:-translate-y-1 active:scale-95 ${
                          clickedSkills.includes(skill)
                            ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 cursor-default scale-95 opacity-80'
                            : 'bg-slate-800/60 border-slate-700/80 text-slate-100 hover:border-yellow-500/50 hover:bg-slate-800 hover:shadow-[0_10px_30px_rgba(234,179,8,0.1)] animate-pulse-subtle'
                        }`}
                      >
                        <div className={`text-[10px] font-black mb-2 uppercase tracking-tighter transition-colors ${clickedSkills.includes(skill) ? 'text-emerald-500/50' : 'text-yellow-500'}`}>
                           {clickedSkills.includes(skill) ? 'Claimed' : '+10 Points'}
                        </div>
                        <div className="font-bold text-sm flex items-center justify-between">
                          {skill}
                          {clickedSkills.includes(skill) ? (
                            <CheckCircle2 size={16} className="text-emerald-400" />
                          ) : (
                            <div className="w-6 h-6 rounded-full bg-slate-700/50 flex items-center justify-center group-hover:bg-yellow-500/20 group-hover:text-yellow-500 transition-colors">
                                <MousePointer2 size={12} className="opacity-50 group-hover:opacity-100" />
                            </div>
                          )}
                        </div>
                        
                        {/* Flying point indicator on click (simplified placeholder for effect) */}
                        {!clickedSkills.includes(skill) && (
                            <div className="absolute inset-0 bg-yellow-500/0 group-active:bg-yellow-500/10 transition-colors rounded-2xl"></div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 rounded-[2rem] p-10 text-white shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-700 border border-white/10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Trophy size={160} />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-10">
                        <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-xl border border-white/20">
                            <Gift size={32} className="text-yellow-400" />
                        </div>
                        <div className="px-4 py-1.5 bg-yellow-500 text-slate-900 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">Reward Unlocked</div>
                    </div>
                    
                    <h3 className="text-4xl font-black mb-4 leading-tight">Welcome to <br/>Diamond Tier!</h3>
                    <p className="text-indigo-100 mb-10 leading-relaxed text-lg font-medium opacity-90">
                        You've proven your engagement. As a token of appreciation, here is my direct line.
                    </p>
                    
                    <div className="space-y-4">
                        <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center justify-between bg-white text-indigo-900 p-5 rounded-2xl font-black hover:bg-yellow-50 transition-all shadow-xl hover:translate-x-2 group">
                        Email Me Directly <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <div className="flex items-center justify-center gap-3 p-4 bg-indigo-900/40 rounded-2xl border border-white/10 text-indigo-100 font-bold tracking-widest">
                        <span className="opacity-50 text-xs">WHATSAPP / CALL:</span> {PERSONAL_INFO.phone}
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
        @keyframes pulse-subtle {
          0%, 100% { transform: scale(1); border-color: rgba(51, 65, 85, 0.8); }
          50% { transform: scale(1.02); border-color: rgba(234, 179, 8, 0.3); }
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 3s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default LoyaltySim;
