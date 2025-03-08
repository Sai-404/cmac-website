import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Code, BookOpen, Sparkles } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, isClicked, onClick }) => (
  <motion.div
    className="bg-[#0A1A1F] p-8 rounded-3xl flex flex-col gap-6 cursor-pointer"
    onClick={onClick}
    initial={{ opacity: 0, y: 50 }} // Start from below and invisible
    whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position when in view
    viewport={{ once: true, margin: "-100px 0px" }} // Only animate once when in viewport
    transition={{ duration: 0.6, ease: 'easeOut' }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }} // Subtle hover effect
    whileTap={{ scale: 0.98 }} // Subtle click effect
    animate={isClicked ? { scale: 1.05 } : {}} // Additional animation when clicked
  >
    <div className="bg-[#1C2B31] w-12 h-12 rounded-xl flex items-center justify-center">
      <Icon className="text-[#cc0000] w-6 h-6" />
    </div>
    
    <div className="space-y-3">
      <h3 className="text-white text-2xl font-semibold">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const Features = () => {
  const [clickedIndex, setClickedIndex] = useState(null);
  
  const features = [
    {
      icon: FlaskConical,
      title: "Research & Innovation",
      description: "Fuel your curiosity with cutting-edge projects, collaborative research, and transformative ideas that bridge academia and industry."
    },
    {
      icon: Code,
      title: "Technical Events",
      description: "Participate in hackathons, workshops, and seminars designed to challenge, inspire, and elevate your technical prowess."
    },
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "Excel in mathematics and computing through mentorship, resources, and a vibrant learning community."
    }
  ];
  
  // Stagger the animations for a more dynamic effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Delay between each child animation
      }
    }
  };
  
  return (
    <motion.div 
      className="w-full py-16 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Animation */}
        <motion.div 
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.div 
            className="flex items-center justify-center gap-2 text-[#CC0000] mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Sparkles size={16} />
            <span className="text-sm font-medium tracking-wider uppercase">SMART + FAST</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Innovate with Precision, Lead with Vision
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Empowering minds, fostering research, and shaping the future with mathematics and advanced computing.
          </motion.p>
        </motion.div>
        
        {/* Features Grid with Staggered Animation */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px 0px" }}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              isClicked={clickedIndex === index}
              onClick={() => setClickedIndex(index)}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Features;