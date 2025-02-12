import React from 'react';
import { Sparkles, MessageSquare, Users, Layers } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-[#0A1A1F] p-8 rounded-3xl flex flex-col gap-6">
    <div className="bg-[#1C2B31] w-12 h-12 rounded-xl flex items-center justify-center">
      <Icon className="text-[#E5FCC2] w-6 h-6" />
    </div>
    
    <div className="space-y-3">
      <h3 className="text-white text-2xl font-semibold">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
    
    <button className="flex items-center gap-2 text-white border border-gray-700 rounded-full px-6 py-3 w-fit hover:bg-gray-800 transition-colors">
      Explore
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.33334 8H12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.66667 4L12.6667 8L8.66667 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Universal inbox",
      description: "Manage all your communications from one universal inbox."
    },
    {
      icon: Users,
      title: "Contact management",
      description: "Create contact records, log sales activities, and view interactions."
    },
    {
      icon: Layers,
      title: "Pipeline management",
      description: "Easily add your deals, assign tasks to your team, and track your prospects."
    }
  ];

  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2 text-[#CC0000] mb-4">
            <Sparkles size={16} />
            <span className="text-sm font-medium tracking-wider uppercase">SMART + FAST</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Doing smarter, not harder
          </h2>
          
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Boost productivity, gain pipeline clarity, and grow your revenue with our advanced sales CRM.
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