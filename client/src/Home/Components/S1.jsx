import React, { useState } from 'react';

const CombinedSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const integrationIcons = [
    { name: 'Slack', icon: '🔲' },
    { name: 'Notion', icon: '🔲' },
    { name: 'Trello', icon: '🔲' },
    { name: 'Box', icon: '🔲' },
    { name: 'Analytics', icon: '📊' },
    { name: 'Asana', icon: '⭕' },
    { name: 'MailChimp', icon: '🐵' },
    { name: 'Zapier', icon: '⚡' },
    { name: 'Google Ads', icon: '🎯' },
    { name: 'Meta', icon: '📱' },
    { name: 'Google', icon: '🔍' },
    { name: 'Tools', icon: '🔧' }
  ];

  const features = [
    {
      icon: '⌛',
      title: 'Improve time to value',
      description: 'Solve customer problems right away, rather than configuring software.'
    },
    {
      icon: '🔧',
      title: 'Reduce effort per ticket',
      description: 'Self-service and automation deflect up to 15% of agent contacts.'
    },
    {
      icon: '💰',
      title: 'Keep costs low',
      description: "You don't need a developer army or an influx of agents to use Joule."
    }
  ];

  return (
    <div className="p-6 space-y-12">
      {/* Header Section */}
      <div className="text-center">
        <h2 className="text-sm font-semibold tracking-wide uppercase text-blue-600">
          MODERN AND SCALEABLE
        </h2>
        <h3 className="mt-2 text-3xl font-bold">
          Scale, flex, and innovate
        </h3>
        <p className="mt-4 text-gray-600">
          Built for everyone, our platform reduces operational complexities.
        </p>
      </div>

      {/* Integration Section */}
      <div className="bg-gray-50 rounded-2xl p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold">
            Integrates with tools
          </h3>
          <p className="mt-4 text-gray-600">
            Seamlessly connect the databases and applications you rely on to scale your business.
          </p>
          <button className="mt-4 inline-flex items-center text-blue-600 font-medium">
            Explore <span className="ml-2">→</span>
          </button>
        </div>
        
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4">
          {integrationIcons.map((tool, index) => (
            <div key={index} className="flex items-center justify-center p-2 text-2xl">
              {tool.icon}
            </div>
          ))}
        </div>
      </div>

      {/* Feature Tabs */}
      <div className="flex flex-col md:flex-row gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            onClick={() => setActiveTab(index)}
            className={`p-6 rounded-lg cursor-pointer transition-all duration-200 ${
              activeTab === index 
                ? 'bg-gray-800 text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            <div className="text-3xl mb-3">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className={activeTab === index ? 'text-gray-200' : 'text-gray-600'}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CombinedSection;