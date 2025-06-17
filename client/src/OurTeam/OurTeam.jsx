import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram } from "lucide-react";
import Header from "../Home/Components/Header.jsx";
import Footer from "../Home/Components/Footer.jsx";
import saiImage from "../assets/sai.jpg"; // Import images
import anirudhImage from "../assets/anirudh.jpg";
import suriyaImage from "../assets/suriya.jpg";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Sai Prashanth",
      role: "Founding President",
      image: saiImage, // Use imported image
      bio: "The Wonder Boy, Coding Maven and Genius Mathematician.",
      instagram: "https://www.instagram.com/thesaiprashanth/",
      linkedin: "https://www.linkedin.com/in/thesaiprashanth/"
    },
    {
      name: "Sree Anirudh",
      role: "Vice President",
      image: anirudhImage, // Use imported image
      bio: "The Strategic Thinker, Effiency Expert and Logistics Guru.",
      instagram: "https://www.instagram.com/a.sree_anirudhan/",
      linkedin: "https://www.linkedin.com/in/sree-anirudh-alwar-0b6ba5334/"
    },
    {
      name: "Suriya",
      role: "Head of Management",
      image: suriyaImage, // Use imported image
      bio: "The Meticulous Planner, Marketing Maestro and Management Maverick.",
      instagram: "https://www.instagram.com/ad__suriya/",
      linkedin: "https://www.linkedin.com/in/ad-suriya-5465b0298/?originalSubdomain=in"
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF7ED] pt-24 px-4">
      <Header />

      {/* Header Section with Animation */}
      <motion.div 
        className="max-w-6xl mx-auto text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={headerVariants}
      >
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Meet Our Team
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        At the Council for Mathematics and Advanced Computing (CMAC), we are a team of dedicated individuals passionate about mathematics, computing, and innovation. Our goal is to foster a community where problem-solving, research, and technical excellence thrive.
        </p>
      </motion.div>

      {/* Custom Layout based on Illustration */}
      <div className="max-w-6xl mx-auto mb-16">
        {/* First row - MUCH larger box spanning full width with increased height */}
        <motion.div 
          className="w-full mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div 
            className="bg-[#0A1A1F] rounded-xl p-12 text-white shadow-xl"
            variants={itemVariants}
          >
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-48 h-auto">
                <img
                  src={teamMembers[0].image}
                  alt={teamMembers[0].name}
                  className="w-full rounded-lg shadow-lg object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-4xl font-semibold mb-4">
                  {teamMembers[0].name}
                </h3>
                <p className="text-rose-600 font-medium mb-6 text-2xl">
                  {teamMembers[0].role}
                </p>
                <p className="text-gray-300 mb-8 text-xl leading-relaxed">
                  {teamMembers[0].bio}
                </p>
                <div className="flex items-center gap-8">
                  <a
                    href={teamMembers[0].instagram}
                    className="text-gray-300 hover:text-rose-600 transition-colors duration-300"
                    aria-label={`${teamMembers[0].name}'s Instagram`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-8 h-8" />
                  </a>
                  <a
                    href={teamMembers[0].linkedin}
                    className="text-gray-300 hover:text-rose-600 transition-colors duration-300"
                    aria-label={`${teamMembers[0].name}'s LinkedIn`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Second row - two equal-sized boxes side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First box */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div 
              className="bg-[#0A1A1F] rounded-xl p-6 text-white h-full shadow-lg"
              variants={itemVariants}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-36 h-auto mb-4">
                  <img
                    src={teamMembers[1].image}
                    alt={teamMembers[1].name}
                    className="w-full rounded-lg object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {teamMembers[1].name}
                </h3>
                <p className="text-yellow-500 font-medium mb-3">
                  {teamMembers[1].role}
                </p>
                <p className="text-gray-300 text-sm mb-4">
                  {teamMembers[1].bio}
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href={teamMembers[1].instagram}
                    className="text-gray-300 hover:text-yellow-500 transition-colors duration-300"
                    aria-label={`${teamMembers[1].name}'s Instagram`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={teamMembers[1].linkedin}
                    className="text-gray-300 hover:text-yellow-500 transition-colors duration-300"
                    aria-label={`${teamMembers[1].name}'s LinkedIn`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Second box */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div 
              className="bg-[#0A1A1F] rounded-xl p-6 text-white h-full shadow-lg"
              variants={itemVariants}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-36 h-auto mb-4">
                  <img
                    src={teamMembers[2].image}
                    alt={teamMembers[2].name}
                    className="w-full rounded-lg object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {teamMembers[2].name}
                </h3>
                <p className="text-emerald-400 font-medium mb-3">
                  {teamMembers[2].role}
                </p>
                <p className="text-gray-300 text-sm mb-4">
                  {teamMembers[2].bio}
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href={teamMembers[2].instagram}
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                    aria-label={`${teamMembers[2].name}'s Instagram`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={teamMembers[2].linkedin}
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                    aria-label={`${teamMembers[2].name}'s LinkedIn`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OurTeam;