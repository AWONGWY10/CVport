import React from 'react';
import { APPS_DATA } from '../constants';
import { ExternalLink, Smartphone, PenTool } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section className="py-24" id="portfolio">
      <div className="container mx-auto px-6">
        <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Shipped <span className="gradient-text">Products</span></h2>
            
            <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
                    Real-world loyalty applications driving engagement for major retail and F&B brands. From concept to launch, managed end-to-end.
                </p>

                {/* Design Capabilities Highlight */}
                <div className="flex-1 max-w-2xl bg-gradient-to-r from-slate-800/50 to-indigo-900/20 border border-indigo-500/30 rounded-2xl p-5 relative overflow-hidden backdrop-blur-sm">
                     <div className="flex gap-4">
                        <div className="mt-1 bg-indigo-500/20 p-2.5 rounded-xl h-fit">
                            <PenTool size={20} className="text-indigo-400" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-sm mb-1">Design & Prototyping</h4>
                            <p className="text-sm text-slate-300 italic">
                                "I don't just manage backlogs—I design. Hands-on in mobile app UI/UX design using <strong className="text-white">Adobe XD</strong>, producing wireframes and screen flows; collaborating in <strong className="text-white">Figma</strong> to ensure usability."
                            </p>
                        </div>
                     </div>
                </div>
            </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {APPS_DATA.map((app) => (
            <div key={app.name} className="group flex flex-col bg-slate-800/50 rounded-3xl overflow-hidden border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1">
              
              {/* Image Header */}
              <div className={`h-56 relative overflow-hidden flex items-center justify-center ${app.color} bg-opacity-20`}>
                 <div className={`absolute inset-0 ${app.color} opacity-20`}></div>
                 {/* Abstract decorative circles */}
                 <div className="absolute top-[-50%] right-[-50%] w-full h-full rounded-full bg-white/5 blur-3xl"></div>
                 
                 <div className="relative z-10 w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-xl transform transition-transform duration-500 group-hover:scale-110">
                    <Smartphone className="text-slate-900" size={36} />
                 </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3">{app.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                  {app.description}
                </p>

                <div className="flex flex-col gap-3 mt-auto">
                    {app.iosLink && (
                        <a href={app.iosLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-sm font-medium text-slate-300 hover:bg-indigo-600 hover:text-white hover:border-indigo-500 transition-all">
                            <span>App Store</span> <ExternalLink size={16} />
                        </a>
                    )}
                    {app.androidLink && (
                        <a href={app.androidLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-sm font-medium text-slate-300 hover:bg-indigo-600 hover:text-white hover:border-indigo-500 transition-all">
                            <span>Play Store</span> <ExternalLink size={16} />
                        </a>
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;