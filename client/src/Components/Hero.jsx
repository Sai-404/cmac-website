import React from 'react';
import { Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen w-full bg-orange-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10 px-4 py-12 sm:py-16 md:py-20">
        {/* Label */}
        <div className="flex items-center justify-center gap-2 text-emerald-600 mb-4 sm:mb-6">
          <Sparkles size={16} />
          <span className="text-xs sm:text-sm font-medium tracking-wider uppercase">CMAC – The Future of Mathematical Computing</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
          Empowering Minds <br className="hidden sm:block" />Powering Innovation
        </h1>

        {/* Subheading */}
        <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 sm:mb-12">
          The Council for Mathematics and Advanced Computing (CMAC) is a hub for intellectual growth, research, and technological breakthroughs. Join us in shaping the future.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16">
          <button className="px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors text-sm sm:text-base">
            Get Started
          </button>
          <button className="px-6 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors text-sm sm:text-base">
            View Demo
          </button>
        </div>

        {/* Logo Section */}
        <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12">
          <div className="flex flex-col items-center justify-center">
            <img 
              src="/api/placeholder/200/100"
              alt="SRM Logo" 
              className="h-12 sm:h-14 md:h-16 object-contain filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <img 
              src="/api/placeholder/200/100"
              alt="IIT Bombay Logo" 
              className="h-16 sm:h-20 md:h-24 object-contain filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <img 
              src="/api/placeholder/200/100"
              alt="IIT Palakkad Logo" 
              className="h-12 sm:h-14 md:h-16 object-contain filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <img 
              src="/api/placeholder/200/100"
              alt="NIT Rourkela Logo" 
              className="h-12 sm:h-14 md:h-16 object-contain filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;