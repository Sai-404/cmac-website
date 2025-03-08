import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import iitbLogo from '../../assets/IITBOMBAY.png';
import iitpkdLogo from '../../assets/IITPKD.png';
import nitLogo from '../../assets/NIT_Rourkela_Colour_Logo.png';
import srmLogo from '../../assets/srmlogo.png';

const Trusted = () => {
  return (
    <div className="bg-[#FFF7ED] py-8 min-h-[50vh] flex items-center justify-center">
      <div className="container mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-center text-2xl font-semibold mb-8"
          initial={{ opacity: 0, y: 50 }} // Start off-screen at the bottom
          whileInView={{ opacity: 1, y: 0 }} // Animate when in view
          transition={{ duration: 0.8, ease: 'easeOut' }} // Animation duration and easing
          viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the component is visible
          onViewportEnter={() => console.log('Heading in view')} // Debugging
        >
          In Collaboration With
        </motion.h2>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12">
          {/* SRM Logo */}
          <motion.div
            className="flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.5 }}
            onViewportEnter={() => console.log('SRM Logo in view')} // Debugging
          >
            <img 
              src={srmLogo} 
              alt="SRM Logo" 
              className="h-12 sm:h-14 md:h-16 object-contain filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
            />
          </motion.div>

          {/* IIT Bombay Logo */}
          <motion.div
            className="flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.5 }}
            onViewportEnter={() => console.log('IIT Bombay Logo in view')} // Debugging
          >
            <img 
              src={iitbLogo} 
              alt="IIT Bombay Logo" 
              className="h-12 sm:h-14 md:h-16 object-contain filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
            />
          </motion.div>

          {/* IIT Palakkad Logo */}
          <motion.div
            className="flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.5 }}
            onViewportEnter={() => console.log('IIT Palakkad Logo in view')} // Debugging
          >
            <img 
              src={iitpkdLogo} 
              alt="IIT Palakkad Logo" 
              className="h-12 sm:h-14 md:h-16 object-contain filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
            />
          </motion.div>

          {/* NIT Rourkela Logo */}
          <motion.div
            className="flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.5 }}
            onViewportEnter={() => console.log('NIT Rourkela Logo in view')} // Debugging
          >
            <img 
              src={nitLogo} 
              alt="NIT Rourkela Logo" 
              className="h-12 sm:h-14 md:h-16 object-contain filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Trusted;