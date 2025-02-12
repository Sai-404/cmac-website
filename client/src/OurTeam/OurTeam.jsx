import React from 'react';
import { Mail, Linkedin, Twitter } from "lucide-react";
import Header from "../Home/Components/Header.jsx";
import Footer from "../Home/Components/Footer.jsx";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/api/placeholder/400/400",
      bio: "10+ years of experience in building and scaling startups. Previously led product at major tech companies.",
      email: "sarah@company.com",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      image: "/api/placeholder/400/400",
      bio: "Full-stack developer with expertise in AI and machine learning. Led engineering teams at Fortune 500 companies.",
      email: "michael@company.com",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Emma Davis",
      role: "Head of Design",
      image: "/api/placeholder/400/400",
      bio: "Award-winning designer specializing in user experience and brand identity. Previously designed for top tech brands.",
      email: "emma@company.com",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "James Wilson",
      role: "Product Manager",
      image: "/api/placeholder/400/400",
      bio: "Strategic product leader with a track record of launching successful products. Expert in agile methodologies.",
      email: "james@company.com",
      linkedin: "#",
      twitter: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24 px-4">
      <Header />

      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Meet Our Team
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          We're a diverse group of passionate individuals working together to create amazing experiences for our customers.
        </p>
      </div>

      {/* Team Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <div 
            key={member.name} 
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full aspect-square object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-1">
                {member.name}
              </h3>
              <p className="text-emerald-600 font-medium mb-3">
                {member.role}
              </p>
              <p className="text-slate-600 text-sm mb-4">
                {member.bio}
              </p>
              <div className="flex items-center gap-4">
                <a
                  href={`mailto:${member.email}`}
                  className="text-slate-600 hover:text-emerald-600 transition-colors duration-300"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href={member.linkedin}
                  className="text-slate-600 hover:text-emerald-600 transition-colors duration-300"
                  aria-label={`${member.name}'s LinkedIn`}
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={member.twitter}
                  className="text-slate-600 hover:text-emerald-600 transition-colors duration-300"
                  aria-label={`${member.name}'s Twitter`}
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default OurTeam;