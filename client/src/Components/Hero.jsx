import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-beige-100 to-beige-200 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated Title */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-gray-800 mb-6"
        >
          Welcome to <span className="text-blue-600">CMAC</span>
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl text-gray-600 mb-8"
        >
          Where <span className="font-semibold">Innovation</span> Meets <span className="font-semibold">Excellence</span>
        </motion.p>

        {/* Animated Description */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-gray-700 mb-12"
        >
          Join SRMIST's premier council for Mathematics and Advanced Computing. Dive into the world of{' '}
          <span className="font-semibold">Machine Learning</span>, <span className="font-semibold">Data Science</span>,{' '}
          <span className="font-semibold">Artificial Intelligence</span>, and{' '}
          <span className="font-semibold">Emerging Technologies</span> with us.
        </motion.p>

        {/* Animated Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex justify-center space-x-4"
        >
          <a
            href="#join"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Join Us
          </a>
          <a
            href="#learn-more"
            className="bg-transparent border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Learn More
          </a>
        </motion.div>

        {/* Animated Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Workshops & Hackathons</h3>
            <p className="text-gray-600">Hands-on learning experiences to sharpen your skills.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Technical Sessions</h3>
            <p className="text-gray-600">Learn from experts and industry leaders.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Collaborations</h3>
            <p className="text-gray-600">Work with IITs, NITs, and top industry professionals.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;