import React from 'react';
import { EXPERIENCE_DATA, SKILLS_DATA } from '../constants';
import { Briefcase, Layers, GraduationCap } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900/50" id="experience">
      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12">
        
        {/* Left Column: Timeline */}
        <div className="lg:col-span-8">
          <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
             <span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400"><Briefcase size={24}/></span>
             Experience
          </h2>

          <div className="space-y-8 relative">
            {/* Vertical Line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-slate-800"></div>

            {EXPERIENCE_DATA.map((job) => (
              <div key={job.id} className="relative pl-12">
                {/* Dot */}
                <div className="absolute left-[13px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-indigo-500 z-10"></div>
                
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white">{job.role}</h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400 mt-1">
                    <span className="font-semibold text-indigo-300">{job.company}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                    <span>{job.period}</span>
                  </div>
                </div>

                <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600 transition-colors">
                    <ul className="space-y-3">
                    {job.description.map((point, i) => (
                        <li key={i} className="text-slate-300 text-sm leading-relaxed flex items-start gap-3">
                        <span className="text-indigo-500 mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0"></span>
                        <span>{point}</span>
                        </li>
                    ))}
                    </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Skills & Education */}
        <div className="lg:col-span-4 space-y-8">
            <div className="glass-card rounded-2xl p-6 sticky top-8">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <Layers size={20} className="text-purple-400"/> Skills & Design
                </h3>
                
                <div className="space-y-8">
                    {SKILLS_DATA.map((cat, idx) => (
                        <div key={idx}>
                            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">{cat.category}</h4>
                            <div className="flex flex-wrap gap-2">
                                {cat.skills.map(skill => (
                                    <span key={skill} className="px-3 py-1.5 bg-slate-800 text-slate-300 text-sm rounded-lg border border-slate-700 hover:border-indigo-500/50 hover:bg-slate-700 transition-colors cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 pt-8 border-t border-slate-700/50">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6 flex items-center gap-2">
                      < GraduationCap size={18} className="text-indigo-400" /> Education
                    </h3>
                    <div className="space-y-6">
                        <div className="group">
                            <div className="flex justify-between items-start mb-1">
                              <div className="text-white font-bold text-sm group-hover:text-indigo-400 transition-colors">BA (Hons) Business Admin</div>
                              <div className="text-[10px] font-black text-emerald-400 uppercase tracking-tighter bg-emerald-400/10 px-1.5 py-0.5 rounded">1st Class</div>
                            </div>
                            <div className="text-slate-400 text-xs">University of Hertfordshire</div>
                            <div className="mt-2 text-[10px] text-slate-500 italic">Grade: First Class Honours (2015 – 2017)</div>
                        </div>
                        
                        <div className="group">
                            <div className="flex justify-between items-start mb-1">
                              <div className="text-white font-bold text-sm group-hover:text-indigo-400 transition-colors">Diploma in Business</div>
                              <div className="text-[10px] font-black text-emerald-400 uppercase tracking-tighter bg-emerald-400/10 px-1.5 py-0.5 rounded">3.38 CGPA</div>
                            </div>
                            <div className="text-slate-400 text-xs">INTI International College Penang</div>
                            <div className="mt-2 text-[10px] text-slate-500 italic">Grade: CGPA 3.38 (2013 – 2015)</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
