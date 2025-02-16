import React from 'react';
import { Sparkles } from 'lucide-react';

const WhatsApp = () => {
  // Function to handle the button click and redirect to the WhatsApp group link
  const handleJoinClick = () => {
    window.location.href = 'https://chat.whatsapp.com/CertMxstQW9208y8L5wn8K';
  };

  return (
    <div className="bg-[#0A1A1F] w-full rounded-3xl p-4 sm:p-8 md:p-16 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <div className="flex items-center justify-center gap-2 text-[#CC0000] mb-6">
          <Sparkles size={16} className="text-[#CC0000]" />
          <span className="text-sm font-medium tracking-wider uppercase">Join the best</span>
        </div>
        
        <div className="flex flex-col items-center text-center md:flex-row md:justify-between md:items-start gap-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
            Join Our WhatsApp Group<br />
            for More Information
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleJoinClick} // Add the onClick event handler
              className="px-6 py-3 bg-[#E5FCC2] text-slate-900 rounded-full font-medium hover:bg-[#d8f5a5] transition-colors whitespace-nowrap"
            >
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsApp;