import React from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion'; // Import Framer Motion

const Hero = () => {
  return (
    <div className="h-screen w-full bg-orange-50 relative overflow-hidden flex items-center justify-center">
      <motion.div
        className="max-w-6xl mx-auto text-center relative z-10 px-4"
        initial={{ opacity: 0, y: 100 }} // Start off-screen at the bottom
        animate={{ opacity: 1, y: 0 }} // Animate to the center
        transition={{ duration: 1, ease: 'easeOut' }} // Animation duration and easing
      >
        {/* Label */}
        <motion.div
          className="flex items-center justify-center gap-2 text-[#cc0000] mb-8"
          initial={{ opacity: 0, y: 50 }} // Slight delay for staggered effect
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <Sparkles size={16} />
          <span className="text-xs sm:text-sm font-medium tracking-wider uppercase">
            CMAC – The Future of Mathematical Computing
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          Empowering Minds <br className="hidden sm:block" /> Powering Innovation
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
        >
          The Council for Mathematics and Advanced Computing (CMAC) is a hub for intellectual growth, research, and technological breakthroughs. Join us in shaping the future.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
        >
          <button className="w-full sm:w-auto px-8 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors text-sm sm:text-base">
            Join Council
          </button>
          <button className="w-full sm:w-auto px-8 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors text-sm sm:text-base border border-gray-200">
            Learn More
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;