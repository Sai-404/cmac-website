import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram } from "lucide-react";
import Header from "../Home/Components/Header.jsx";
import Footer from "../Home/Components/Footer.jsx";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/api/placeholder/400/400",
      bio: "10+ years of experience in building and scaling startups. Previously led product at major tech companies.",
      instagram: "#",
      linkedin: "#"
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      image: "/api/placeholder/400/400",
      bio: "Full-stack developer with expertise in AI and machine learning. Led engineering teams at Fortune 500 companies.",
      instagram: "#",
      linkedin: "#"
    },
    {
      name: "Emma Davis",
      role: "Head of Design",
      image: "/api/placeholder/400/400",
      bio: "Award-winning designer specializing in user experience and brand identity. Previously designed for top tech brands.",
      instagram: "#",
      linkedin: "#"
    },
    {
      name: "James Wilson",
      role: "Product Manager",
      image: "/api/placeholder/400/400",
      bio: "Strategic product leader with a track record of launching successful products. Expert in agile methodologies.",
      instagram: "#",
      linkedin: "#"
    }
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
          We're a diverse group of passionate individuals working together to create amazing experiences for our customers.
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
              <img
                src={teamMembers[0].image}
                alt={teamMembers[0].name}
                className="w-64 h-64 rounded-lg object-cover shadow-lg"
              />
              <div className="flex-1">
                <h3 className="text-4xl font-semibold mb-4">
                  {teamMembers[0].name}
                </h3>
                <p className="text-emerald-400 font-medium mb-6 text-2xl">
                  {teamMembers[0].role}
                </p>
                <p className="text-gray-300 mb-8 text-xl leading-relaxed">
                  {teamMembers[0].bio}
                </p>
                <div className="flex items-center gap-8">
                  <a
                    href={teamMembers[0].instagram}
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                    aria-label={`${teamMembers[0].name}'s Instagram`}
                  >
                    <Instagram className="w-8 h-8" />
                  </a>
                  <a
                    href={teamMembers[0].linkedin}
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                    aria-label={`${teamMembers[0].name}'s LinkedIn`}
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
                <img
                  src={teamMembers[1].image}
                  alt={teamMembers[1].name}
                  className="w-36 h-36 rounded-lg object-cover mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">
                  {teamMembers[1].name}
                </h3>
                <p className="text-emerald-400 font-medium mb-3">
                  {teamMembers[1].role}
                </p>
                <p className="text-gray-300 text-sm mb-4">
                  {teamMembers[1].bio}
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href={teamMembers[1].instagram}
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                    aria-label={`${teamMembers[1].name}'s Instagram`}
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={teamMembers[1].linkedin}
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                    aria-label={`${teamMembers[1].name}'s LinkedIn`}
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
                <img
                  src={teamMembers[2].image}
                  alt={teamMembers[2].name}
                  className="w-36 h-36 rounded-lg object-cover mb-4"
                />
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
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={teamMembers[2].linkedin}
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                    aria-label={`${teamMembers[2].name}'s LinkedIn`}
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