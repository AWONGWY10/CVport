import React, { useState, useEffect } from 'react';
import { CX_NODES } from '../constants';
import { Settings, Gift, Clock, Split, ShoppingBag, BellRing } from 'lucide-react';

// Define layout coordinates for perfect alignment
// Nodes index: 0:Wait, 1:Condition, 2:Voucher(Top), 3:Points(Bottom), 4:Delay, 5:Email
const NODE_WIDTH = 176; // w-44 = 11rem = 176px
const NODE_HEIGHT = 100;
const LAYOUT = [
  { x: 40, y: 160 },   // Node 0: Wait Event
  { x: 280, y: 160 },  // Node 1: Condition
  { x: 550, y: 60 },   // Node 2: Voucher (Top)
  { x: 550, y: 260 },  // Node 3: Points (Bottom)
  { x: 820, y: 60 },   // Node 4: Wait Delay
  { x: 1080, y: 60 },  // Node 5: Email
];

const CXBuilderDemo: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % (CX_NODES.length + 3)); 
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const getNodeIcon = (type: string) => {
    switch (type) {
      case 'trigger': return <ShoppingBag size={20} />;
      case 'condition': return <Split size={20} />;
      case 'action': return <Gift size={20} />;
      case 'wait': return <Clock size={20} />;
      default: return <Settings size={20} />;
    }
  };

  const getNodeStyle = (type: string, isActive: boolean) => {
    const base = "shadow-lg transition-all duration-500 border absolute flex flex-col gap-2 p-5 rounded-2xl z-10 w-44";
    const activeClass = isActive 
        ? "scale-105 opacity-100 ring-2 ring-indigo-400/50" 
        : "opacity-60 scale-95 grayscale-[0.5]";
    
    let colorClass = "";
    switch (type) {
      case 'trigger': colorClass = "bg-blue-500/10 border-blue-500/30 text-blue-300"; break;
      case 'condition': colorClass = "bg-orange-500/10 border-orange-500/30 text-orange-300"; break;
      case 'action': colorClass = "bg-green-500/10 border-green-500/30 text-green-300"; break;
      case 'wait': colorClass = "bg-purple-500/10 border-purple-500/30 text-purple-300"; break;
      default: colorClass = "bg-slate-800 border-slate-700"; break;
    }
    return `${base} ${activeClass} ${colorClass}`;
  };

  // Helper to draw bezier or straight lines
  const drawConnection = (startIdx: number, endIdx: number) => {
    const start = LAYOUT[startIdx];
    const end = LAYOUT[endIdx];
    
    const startX = start.x + NODE_WIDTH;
    const startY = start.y + (NODE_HEIGHT / 2) - 10; // Adjust for padding/header
    const endX = end.x;
    const endY = end.y + (NODE_HEIGHT / 2) - 10;

    // Straight line
    if (startY === endY) {
      return <path d={`M${startX} ${startY} L${endX} ${endY}`} stroke="#475569" strokeWidth="2" fill="none" />;
    }
    
    // Curved line (Bezier)
    const controlPoint1 = startX + (endX - startX) / 2;
    return <path d={`M${startX} ${startY} C${controlPoint1} ${startY}, ${controlPoint1} ${endY}, ${endX} ${endY}`} stroke="#475569" strokeWidth="2" fill="none" />;
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Mastering <span className="gradient-text">Customer Journeys</span>
            </h2>
            <p className="text-slate-400 text-lg">
                One of my flagship achievements: <strong>CX Builder</strong>. A no-code tool that empowers marketing teams to design complex automation flows—without needing an engineer.
            </p>
        </div>

        {/* Canvas Area with horizontal scroll for responsiveness */}
        <div className="w-full max-w-6xl mx-auto h-[500px] glass-card rounded-3xl border border-slate-700/50 shadow-2xl relative flex flex-col">
            
            {/* Toolbar Header */}
            <div className="h-14 bg-slate-800/50 border-b border-slate-700/50 flex items-center justify-between px-6 z-20 backdrop-blur-md rounded-t-3xl shrink-0">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                </div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Automation Canvas</div>
                <div className="px-3 py-1 bg-indigo-600 text-white text-xs rounded-full font-medium shadow-lg shadow-indigo-600/20">Active</div>
            </div>

            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-x-auto overflow-y-hidden relative no-scrollbar">
                <div className="absolute inset-0 min-w-[1300px] h-full">
                    
                    {/* Background Grid */}
                    <div className="absolute inset-0 opacity-20" 
                         style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
                    </div>

                    {/* SVG Connections */}
                    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                        {drawConnection(0, 1)} {/* Wait -> Condition */}
                        {drawConnection(1, 2)} {/* Condition -> Top Branch */}
                        {drawConnection(1, 3)} {/* Condition -> Bottom Branch */}
                        {drawConnection(2, 4)} {/* Top -> Wait */}
                        {drawConnection(4, 5)} {/* Wait -> Email */}
                    </svg>

                    {/* Render Nodes */}
                    {CX_NODES.map((node, index) => {
                        const isActive = index <= activeStep;
                        const isCurrent = index === activeStep;
                        const pos = LAYOUT[index] || { x: 0, y: 0 };

                        return (
                            <div 
                                key={node.id}
                                className={getNodeStyle(node.type, isActive)}
                                style={{ left: pos.x, top: pos.y }}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="p-2 rounded-lg bg-white/5 w-fit">
                                        {getNodeIcon(node.type)}
                                    </div>
                                    {isCurrent && <span className="flex h-2 w-2 relative">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                                    </span>}
                                </div>
                                <div>
                                    <div className="font-bold text-sm text-slate-100">{node.label}</div>
                                    <div className="text-xs font-medium opacity-80">{node.subLabel}</div>
                                </div>
                            </div>
                        );
                    })}

                    {/* Success Toast */}
                    <div className={`absolute bg-slate-800 border border-slate-700 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 transition-all duration-500 z-30`}
                         style={{ 
                             left: LAYOUT[5].x, 
                             top: LAYOUT[5].y + 120, // Position below the last node
                             opacity: activeStep >= CX_NODES.length ? 1 : 0,
                             transform: activeStep >= CX_NODES.length ? 'translateY(0)' : 'translateY(10px)'
                         }}>
                        <div className="p-2 bg-green-500 rounded-lg">
                            <BellRing size={16} fill="currentColor" />
                        </div>
                        <div>
                            <div className="font-bold text-sm">Flow Complete</div>
                            <div className="text-xs text-slate-400">Campaign sent successfully</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CXBuilderDemo;