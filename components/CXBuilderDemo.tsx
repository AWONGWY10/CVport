import React, { useState, useEffect, useRef } from 'react';
import { CX_NODES } from '../constants';
import { Settings, Gift, Clock, Split, ShoppingBag, BellRing, ChevronRight, ChevronLeft } from 'lucide-react';

const NODE_WIDTH = 176; 
const NODE_HEIGHT = 100;
const LAYOUT = [
  { x: 50, y: 160 },   // Node 0: Wait Event
  { x: 280, y: 160 },  // Node 1: Condition
  { x: 520, y: 60 },   // Node 2: Voucher (Top)
  { x: 520, y: 260 },  // Node 3: Points (Bottom)
  { x: 760, y: 60 },   // Node 4: Wait Delay
  { x: 1000, y: 60 },  // Node 5: Email
];

const CXBuilderDemo: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<(HTMLDivElement | null)[]>([]);

  // Auto-advance logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % (CX_NODES.length + 2)); 
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll logic: Keep the active node in focus
  useEffect(() => {
    if (scrollContainerRef.current && activeStep < LAYOUT.length) {
      const activeNodePos = LAYOUT[activeStep].x;
      const containerWidth = scrollContainerRef.current.offsetWidth;
      const targetScroll = activeNodePos - (containerWidth / 2) + (NODE_WIDTH / 2);
      
      scrollContainerRef.current.scrollTo({
        left: Math.max(0, targetScroll),
        behavior: 'smooth'
      });
    }
  }, [activeStep]);

  const getNodeIcon = (type: string) => {
    switch (type) {
      case 'trigger': return <ShoppingBag size={20} />;
      case 'condition': return <Split size={20} />;
      case 'action': return <Gift size={20} />;
      case 'wait': return <Clock size={20} />;
      default: return <Settings size={20} />;
    }
  };

  const getNodeStyle = (type: string, isActive: boolean, isCurrent: boolean) => {
    const base = "shadow-xl transition-all duration-700 border absolute flex flex-col gap-2 p-5 rounded-2xl z-20 w-44 backdrop-blur-md";
    const statusClass = isCurrent 
        ? "scale-110 opacity-100 ring-4 ring-indigo-500/30 border-indigo-400 translate-y-[-4px]" 
        : isActive 
          ? "opacity-90 scale-100 border-slate-600 grayscale-0"
          : "opacity-40 scale-95 grayscale-[0.8]";
    
    let colorClass = "";
    switch (type) {
      case 'trigger': colorClass = "bg-blue-500/10 border-blue-500/20 text-blue-300"; break;
      case 'condition': colorClass = "bg-orange-500/10 border-orange-500/20 text-orange-300"; break;
      case 'action': colorClass = "bg-green-500/10 border-green-500/20 text-green-300"; break;
      case 'wait': colorClass = "bg-purple-500/10 border-purple-500/20 text-purple-300"; break;
      default: colorClass = "bg-slate-800 border-slate-700"; break;
    }
    return `${base} ${statusClass} ${colorClass}`;
  };

  const drawConnection = (startIdx: number, endIdx: number) => {
    const start = LAYOUT[startIdx];
    const end = LAYOUT[endIdx];
    
    const startX = start.x + NODE_WIDTH;
    const startY = start.y + (NODE_HEIGHT / 2) - 10;
    const endX = end.x;
    const endY = end.y + (NODE_HEIGHT / 2) - 10;

    const isActive = activeStep > startIdx;
    const color = isActive ? "#818cf8" : "#334155";
    const opacity = isActive ? "1" : "0.3";

    // Smooth Bezier path
    const cp1 = startX + (endX - startX) * 0.5;
    const path = `M${startX} ${startY} C${cp1} ${startY}, ${cp1} ${endY}, ${endX} ${endY}`;
    
    return (
      <g key={`conn-${startIdx}-${endIdx}`}>
        <path d={path} stroke={color} strokeWidth="2" fill="none" opacity={opacity} className="transition-all duration-700" />
        {isActive && (
          <circle r="3" fill="#fff" className="animate-flow-dash">
            <animateMotion dur="2s" repeatCount="indefinite" path={path} />
          </circle>
        )}
      </g>
    );
  };

  return (
    <section className="py-24 relative overflow-hidden" id="cx-builder">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Event-Driven <span className="gradient-text">CX Automation</span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                    Managed and owned the roadmap for this <strong>Event-Driven</strong> orchestration engine. I defined the user journeys, and functional requirements to ship a platform capable of processing millions of real-time customer events.
                </p>
            </div>
            
            <div className="flex gap-2 bg-slate-800/50 p-1.5 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
                <button 
                  onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                  className="p-3 hover:bg-slate-700 rounded-xl transition-colors text-slate-400"
                >
                  <ChevronLeft size={20} />
                </button>
                <div className="px-4 flex items-center text-xs font-bold text-slate-500 uppercase tracking-widest border-x border-slate-700/50">
                    Step {Math.min(activeStep + 1, CX_NODES.length)} / {CX_NODES.length}
                </div>
                <button 
                  onClick={() => setActiveStep(prev => (prev + 1) % CX_NODES.length)}
                  className="p-3 hover:bg-slate-700 rounded-xl transition-colors text-slate-400"
                >
                  <ChevronRight size={20} />
                </button>
            </div>
        </div>

        <div className="w-full max-w-6xl mx-auto h-[550px] glass-card rounded-[2.5rem] border border-slate-700/30 shadow-2xl relative flex flex-col group/canvas">
            
            <div className="h-16 bg-slate-800/40 border-b border-slate-700/30 flex items-center justify-between px-8 z-30 backdrop-blur-xl rounded-t-[2.5rem] shrink-0">
                <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-rose-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
                    </div>
                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] ml-2">Product Strategy Sandbox</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-xs font-bold text-white tracking-wide">Strategy Visualization</span>
                </div>
            </div>

            <div 
              ref={scrollContainerRef}
              className="flex-1 overflow-x-auto overflow-y-hidden relative no-scrollbar cursor-grab active:cursor-grabbing"
            >
                <div className="absolute inset-0 min-w-[1300px] h-full">
                    
                    {/* Visual Grid */}
                    <div className="absolute inset-0 opacity-[0.03]" 
                         style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                    </div>

                    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
                        {drawConnection(0, 1)}
                        {drawConnection(1, 2)}
                        {drawConnection(1, 3)}
                        {drawConnection(2, 4)}
                        {drawConnection(4, 5)}
                    </svg>

                    {CX_NODES.map((node, index) => {
                        const isCurrent = index === activeStep;
                        const isActive = index <= activeStep;
                        const pos = LAYOUT[index] || { x: 0, y: 0 };

                        return (
                            <div 
                                key={node.id}
                                ref={el => { nodesRef.current[index] = el; }}
                                className={getNodeStyle(node.type, isActive, isCurrent)}
                                style={{ left: pos.x, top: pos.y }}
                            >
                                <div className="flex items-center justify-between mb-1">
                                    <div className={`p-2 rounded-xl bg-white/5 transition-colors ${isCurrent ? 'text-white' : ''}`}>
                                        {getNodeIcon(node.type)}
                                    </div>
                                    {isCurrent && (
                                        <div className="px-2 py-0.5 rounded-full bg-indigo-500 text-[8px] font-black uppercase text-white animate-pulse">
                                            Validating
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <div className="font-bold text-sm text-slate-100 group-hover:text-white transition-colors">{node.label}</div>
                                    <div className="text-[10px] font-bold opacity-60 uppercase tracking-wider">{node.subLabel}</div>
                                </div>
                            </div>
                        );
                    })}

                    {/* Completion Modal */}
                    <div className={`absolute bg-slate-800 border border-slate-700 text-white p-6 rounded-3xl shadow-2xl flex flex-col gap-4 transition-all duration-700 z-40`}
                         style={{ 
                             left: LAYOUT[5].x + 50, 
                             top: LAYOUT[5].y + 130,
                             opacity: activeStep >= CX_NODES.length ? 1 : 0,
                             transform: activeStep >= CX_NODES.length ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(20px)',
                             visibility: activeStep >= CX_NODES.length ? 'visible' : 'hidden'
                         }}>
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-emerald-500 rounded-2xl shadow-lg shadow-emerald-500/20">
                                <BellRing size={20} className="text-white" />
                            </div>
                            <div>
                                <div className="font-bold text-base">Campaign Executed</div>
                                <div className="text-xs text-slate-400">Successfully synced with 48k users</div>
                            </div>
                        </div>
                        <div className="h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 w-[100%]"></div>
                        </div>
                    </div>

                </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="h-1 bg-slate-800/50 shrink-0">
                <div 
                    className="h-full bg-indigo-500/50 transition-all duration-700 ease-out"
                    style={{ 
                        width: `${(scrollContainerRef.current?.offsetWidth || 0) / 1300 * 100}%`,
                        marginLeft: `${(scrollContainerRef.current?.scrollLeft || 0) / 1300 * 100}%`
                    }}
                ></div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CXBuilderDemo;
