import React, { useState } from 'react';
import { Star, Gift, Trophy, ArrowRight, MousePointer2, CheckCircle2 } from 'lucide-react';
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
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="glass-card rounded-[2.5rem] border border-slate-700/50 p-10 md:p-16 overflow-hidden relative shadow-2xl">
          {/* Decorative gradients */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-2xl flex items-center justify-center text-yellow-500 border border-yellow-500/30">
                  <Star size={24} fill="currentColor" />
                </div>
                <h2 className="text-3xl font-bold text-white">The Loyalty <span className="text-yellow-500">Simulator</span></h2>
              </div>
              
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                I build systems that reward engagement. Try it yourself! 
                <strong> Collect 100 points</strong> by exploring my skills to unlock my full "Reward Catalogue" (contact info).
              </p>

              <div className="bg-slate-900/50 rounded-3xl p-8 border border-slate-700/50 backdrop-blur-md">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Your Balance</div>
                    <div className="text-4xl font-black text-white flex items-baseline gap-2">
                      {points} <span className="text-sm font-medium text-yellow-500">Pts</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Status</div>
                    <div className="text-sm font-bold text-indigo-400">
                      {unlocked ? 'Diamond Member' : points >= 50 ? 'Gold Member' : 'Silver Member'}
                    </div>
                  </div>
                </div>

                <div className="h-4 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                  <div 
                    className="h-full bg-gradient-to-r from-yellow-500 to-indigo-500 transition-all duration-700 ease-out"
                    style={{ width: `${Math.min(points, 100)}%` }}
                  ></div>
                </div>
                
                <div className="mt-4 flex justify-between text-[10px] font-bold text-slate-500 uppercase tracking-tighter">
                  <span>0 Pts</span>
                  <span>50 Pts</span>
                  <span>Goal: 100 Pts</span>
                </div>
              </div>

              {unlocked && (
                <div className="mt-8 animate-bounce flex items-center gap-3 text-emerald-400 font-bold bg-emerald-400/10 p-4 rounded-2xl border border-emerald-400/20">
                  <Trophy size={20} />
                  <span>Achievement Unlocked: Master Connector!</span>
                </div>
              )}
            </div>

            <div className="relative">
              {!unlocked ? (
                <div className="grid grid-cols-2 gap-3">
                  {allSkills.slice(0, 10).map((skill, i) => (
                    <button
                      key={i}
                      onClick={() => handleSkillClick(skill)}
                      disabled={clickedSkills.includes(skill)}
                      className={`group relative p-4 rounded-2xl border text-left transition-all duration-300 ${
                        clickedSkills.includes(skill)
                          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 cursor-default'
                          : 'bg-slate-800/40 border-slate-700/50 text-slate-300 hover:border-indigo-500/50 hover:bg-slate-800'
                      }`}
                    >
                      <div className="text-xs font-bold mb-1 opacity-50 uppercase tracking-tighter">Skill Node</div>
                      <div className="font-semibold text-sm flex items-center justify-between">
                        {skill}
                        {clickedSkills.includes(skill) ? <CheckCircle2 size={14} /> : <MousePointer2 size={14} className="opacity-0 group-hover:opacity-100" />}
                      </div>
                      {!clickedSkills.includes(skill) && (
                        <div className="absolute top-2 right-2 text-[10px] font-black text-yellow-500">+10</div>
                      )}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-10 text-white shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                  <div className="flex justify-between items-start mb-8">
                    <Gift size={48} className="text-white/80" />
                    <div className="px-3 py-1 bg-white/20 rounded-full text-xs font-bold backdrop-blur-md">Exclusive Access</div>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">You've reached <br/>Diamond Tier!</h3>
                  <p className="text-indigo-100 mb-8 leading-relaxed">
                    Thank you for engaging with my career highlights. You've earned direct access to my network.
                  </p>
                  
                  <div className="space-y-4">
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center justify-between bg-white text-indigo-900 p-4 rounded-2xl font-bold hover:bg-indigo-50 transition-colors">
                      Email Me Directly <ArrowRight size={18} />
                    </a>
                    <div className="text-center text-xs font-bold text-indigo-200 uppercase tracking-widest">
                      {PERSONAL_INFO.phone}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoyaltySim;