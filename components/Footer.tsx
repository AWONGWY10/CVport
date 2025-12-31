import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Linkedin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-slate-900 border-t border-slate-800 py-12 relative">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold text-white mb-2">Wong Wai Yain</h2>
                    <p className="text-slate-500 text-sm">Product Owner • Strategist • Builder</p>
                </div>

                <div className="flex gap-4">
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="p-3 rounded-full bg-slate-800 text-slate-400 hover:bg-white hover:text-slate-900 transition-all">
                        <Mail size={20} />
                    </a>
                    <a href="#" className="p-3 rounded-full bg-slate-800 text-slate-400 hover:bg-white hover:text-slate-900 transition-all">
                        <Linkedin size={20} />
                    </a>
                </div>
            </div>
            
            <div className="text-center mt-12 text-slate-600 text-xs">
                &copy; {new Date().getFullYear()} Wong Wai Yain. All rights reserved.
            </div>

            <button onClick={scrollToTop} className="absolute bottom-8 right-8 p-3 bg-slate-800 text-slate-400 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors hidden md:block shadow-lg">
                <ArrowUp size={20} />
            </button>
        </footer>
    )
}

export default Footer;