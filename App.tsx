import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import CXBuilderDemo from './components/CXBuilderDemo';
import AIChat from './components/AIChat';
import LoyaltySim from './components/LoyaltySim';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 selection:bg-indigo-500 selection:text-white">
      <Hero />
      <div className="relative">
         {/* Abstract ambient background */}
         <div className="fixed top-0 left-0 right-0 h-screen overflow-hidden -z-20 pointer-events-none">
            <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]"></div>
         </div>
         
         <Portfolio />
         <LoyaltySim />
         <CXBuilderDemo />
         <AIChat />
         <Experience />
      </div>
      <Footer />
    </div>
  );
}

export default App;