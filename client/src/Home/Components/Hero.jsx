import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isClicked, setIsClicked] = useState(false);
  
  // Add effect to force light mode
  useEffect(() => {
    // Add a meta tag to force light mode
    const metaTag = document.createElement('meta');
    metaTag.name = 'color-scheme';
    metaTag.content = 'light';
    document.head.appendChild(metaTag);
    
    // Optionally, you can also add a class to the html element
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
    
    return () => {
      // Clean up when component unmounts
      document.head.removeChild(metaTag);
    };
  }, []);

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
    <div className="h-screen w-full bg-orange-50 relative overflow-hidden flex items-center justify-center" style={{backgroundColor: '#fff9e5'}}>
      <motion.div
        className="max-w-6xl mx-auto text-center relative z-10 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {/* Label */}
        <motion.div
          className="flex items-center justify-center gap-2 text-[#cc0000] mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <Sparkles size={16} />
          <span className="text-xs sm:text-sm font-medium tracking-wider uppercase">
            CMAC – Where Innovation Begins
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          style={{color: '#111827'}}
        >
          Empowering Minds <br className="hidden sm:block" /> Powering Innovation
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 px-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          style={{color: '#4B5563'}}
        >
          The Council for Mathematics and Advanced Computing (CMAC) is a hub for intellectual growth, research, and technological breakthroughs. Join us in shaping the future.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-5 justify-center items-center px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
        >
          <button 
            className="w-full sm:w-auto px-8 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors text-sm sm:text-base focus:outline-none"
            style={{backgroundColor: '#111827', color: '#ffffff'}}
          >
            Join Council
          </button>
          <motion.button 
            className="w-full sm:w-auto px-8 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors text-sm sm:text-base border border-gray-200 focus:outline-none"
            onClick={handleLearnMoreClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
            style={{backgroundColor: '#ffffff', color: '#111827', borderColor: '#e5e7eb'}}
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;