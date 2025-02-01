import React from 'react';
import { Sparkles } from 'lucide-react';

const WhatsApp = () => {
  return (
    <div className="bg-[#0A1A1F] w-full rounded-3xl p-4 sm:p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 text-emerald-400 mb-6">
          <Sparkles size={16} className="text-emerald-400" />
          <span className="text-sm font-medium tracking-wider uppercase">Join the best</span>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
            The Best Club of<br />
            SRM IST Chennai
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 bg-[#E5FCC2] text-slate-900 rounded-full font-medium hover:bg-[#d8f5a5] transition-colors whitespace-nowrap">
              Get Started
            </button>
            <button className="px-6 py-3 bg-transparent text-white border border-gray-700 rounded-full font-medium hover:bg-slate-800 transition-colors whitespace-nowrap">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsApp;