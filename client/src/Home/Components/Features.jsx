import React from 'react';
import { FlaskConical, Code, BookOpen, Sparkles } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-[#0A1A1F] p-8 rounded-3xl flex flex-col gap-6">
    <div className="bg-[#1C2B31] w-12 h-12 rounded-xl flex items-center justify-center">
      <Icon className="text-[#cc0000] w-6 h-6" />
    </div>
    
    <div className="space-y-3">
      <h3 className="text-white text-2xl font-semibold">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  </div>
);

const Features = () => {
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

  return (
    <div id="features-section" className="w-full py-16 px-4"> {/* Add id here */}
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2 text-[#CC0000] mb-4">
            <Sparkles size={16} />
            <span className="text-sm font-medium tracking-wider uppercase">SMART + FAST</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Innovate with Precision, Lead with Vision
          </h2>
          
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Empowering minds, fostering research, and shaping the future with mathematics and advanced computing.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;