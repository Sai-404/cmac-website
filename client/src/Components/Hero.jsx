import React from 'react';
import { Sparkles } from 'lucide-react';

// Import logos
import srmLogo from '../assets/srmlogo.png';
import iitbLogo from '../assets/IITBOMBAY.png';
import iitpkdLogo from '../assets/IITPKD.png';
import nitrLogo from '../assets/NIT_Rourkela_Colour_Logo.png';

const Hero = () => {
  return (
    <div className="w-full bg-gray-50 py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Label */}
        <div className="flex items-center justify-center gap-2 text-emerald-600 mb-6">
          <Sparkles size={16} />
          <span className="text-sm font-medium tracking-wider uppercase">CMAC – The Future of Mathematical Computing</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Empowering Minds <br />Powering Innovation
        </h1>

        {/* Subheading */}
        <p className="text-gray-600 text-xl max-w-3xl mx-auto mb-12">
          The Council for Mathematics and Advanced Computing (CMAC) is a hub for intellectual growth, research, and technological breakthroughs. Join us in shaping the future.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center mb-16">
          <button className="px-6 py-3 bg-[#0A1A1F] text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
            Get Started
          </button>
          <button className="px-6 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors">
            View Demo
          </button>
        </div>

        {/* Logo Section */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          <div className="flex flex-col items-center">
            <img 
              src={srmLogo} 
              alt="SRM Logo" 
              className="h-12 md:h-16 object-contain filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
            />
          </div>
          <div className="flex flex-col items-center">
            <img 
              src={iitbLogo} 
              alt="IIT Bombay Logo" 
              className="h-16 md:h-24 object-contain filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
            />
          </div>
          <div className="flex flex-col items-center">
            <img 
              src={iitpkdLogo} 
              alt="IIT Palakkad Logo" 
              className="h-12 md:h-16 object-contain filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
            />
          </div>
          <div className="flex flex-col items-center">
            <img 
              src={nitrLogo} 
              alt="NIT Rourkela Logo" 
              className="h-12 md:h-16 object-contain filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;