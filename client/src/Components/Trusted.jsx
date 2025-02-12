import React from 'react';
import iitbLogo from '../assets/IITBOMBAY.png';
import iitpkdLogo from '../assets/IITPKD.png';
import nitLogo from '../assets/NIT_Rourkela_Colour_Logo.png';
import srmLogo from '../assets/srmlogo.png';

const Trusted = () => {
  return (
    <div className="bg-[#FFF7ED] py-8">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl font-semibold mb-8">In Collaboration With</h2>
        <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12">
          <div className="flex flex-col items-center justify-center">
            <img 
              src={srmLogo} 
              alt="SRM Logo" 
              className="h-12 sm:h-14 md:h-16 object-contain filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <img 
              src={iitbLogo} 
              alt="IIT Bombay Logo" 
              className="h-12 sm:h-14 md:h-16 object-contain filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <img 
              src={iitpkdLogo} 
              alt="IIT Palakkad Logo" 
              className="h-12 sm:h-14 md:h-16 object-contain filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <img 
              src={nitLogo} 
              alt="NIT Rourkela Logo" 
              className="h-12 sm:h-14 md:h-16 object-contain filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trusted;