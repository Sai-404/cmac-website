import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion'; // Import Framer Motion

const Hero = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleLearnMoreClick = () => {
    const featuresSection = document.getElementById('features-section');
    console.log('Features Section:', featuresSection);

    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.error('Features section not found!');
    }

    // Update the state to indicate the button has been clicked
    setIsClicked(true);
  };

  return (
    <div className="h-screen w-full bg-orange-50 relative overflow-hidden flex items-center justify-center">
      <div className="max-w-6xl mx-auto text-center relative z-10 px-4">
        {/* Label */}
        <div className="flex items-center justify-center gap-2 text-[#cc0000] mb-8">
          <Sparkles size={16} />
          <span className="text-xs sm:text-sm font-medium tracking-wider uppercase">
            CMAC – The Future of Mathematical Computing
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
          Empowering Minds <br className="hidden sm:block" /> Powering Innovation
        </h1>

        {/* Subheading */}
        <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10">
          The Council for Mathematics and Advanced Computing (CMAC) is a hub for intellectual growth, research, and technological breakthroughs. Join us in shaping the future.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <button className="w-full sm:w-auto px-8 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors text-sm sm:text-base">
            Join Council
          </button>
          <button className="w-full sm:w-auto px-8 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors text-sm sm:text-base border border-gray-200">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;