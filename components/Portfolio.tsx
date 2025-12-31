import React from 'react';
import { APPS_DATA } from '../constants';
import { ExternalLink, ShoppingCart, Footprints, IceCream, PenTool, Smartphone } from 'lucide-react';

const Portfolio: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'IceCream': return <IceCream size={64} className="text-white/90" />;
      case 'Footprints': return <Footprints size={64} className="text-white/90" />;
      case 'ShoppingCart': return <ShoppingCart size={64} className="text-white/90" />;
      default: return <Smartphone size={64} className="text-white/90" />;
    }
  };

  return (
    <section className="py-24" id="portfolio">
      <div className="container mx-auto px-6">
        <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Shipped <span className="gradient-text">Products</span></h2>
            
            <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
                    Real-world mobile applications and platforms driving engagement for major retail and F&B brands. From concept to launch, managed end-to-end.
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
                                "I don't just manage backlogs—I design. Hands-on in mobile app UI/UX design using <strong className="text-white">Adobe XD</strong> and <strong className="text-white">Figma</strong> to produce wireframes and screen flows that ensure usability."
                            </p>
                        </div>
                     </div>
                </div>
            </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {APPS_DATA.map((app) => (
            <div key={app.name} className="group flex flex-col bg-slate-800/50 rounded-3xl overflow-hidden border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10">
              
              {/* Solid Color Background Header */}
              <div 
                className="h-64 relative flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ backgroundColor: app.color }}
              >
                 <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"></div>
                 <div className="relative transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 drop-shadow-2xl">
                    {getIcon(app.icon)}
                 </div>
                 
                 {/* Brand Name Overlay (Subtle) */}
                 <div className="absolute bottom-4 left-6">
                    <span className="text-white/20 font-black text-4xl uppercase tracking-tighter select-none">
                        {app.name.split(' ')[0]}
                    </span>
                 </div>
              </div>

              <div className="p-8 flex flex-col flex-grow relative">
                <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{app.name}</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                  {app.description}
                </p>

                <div className="flex flex-col gap-3 mt-auto">
                    {app.iosLink && (
                        <a href={app.iosLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-4 py-3.5 rounded-xl bg-slate-800 border border-slate-700 text-sm font-semibold text-slate-300 hover:bg-white hover:text-slate-900 hover:border-white transition-all">
                            <span>App Store</span> <ExternalLink size={16} />
                        </a>
                    )}
                    {app.androidLink && (
                        <a href={app.androidLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-4 py-3.5 rounded-xl bg-slate-800 border border-slate-700 text-sm font-semibold text-slate-300 hover:bg-white hover:text-slate-900 hover:border-white transition-all">
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
