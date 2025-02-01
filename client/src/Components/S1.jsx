import React from "react";

const S1 = () => {
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
    <div className="bg-emerald-950 min-h-screen p-8 text-white font-sans rounded-2xl">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-emerald-400 mb-4 text-sm tracking-wide">MODERN AND SCALEABLE</p>
          <h1 className="text-5xl font-normal mb-4 tracking-tight">Scale, flex, and innovate</h1>
          <p className="text-gray-300 font-light">Built for everyone, our platform reduces operational complexities.</p>
        </div>

        <div className="bg-[#f2ffe6] text-emerald-950 rounded-3xl mb-8">
          <div className="p-8">
            <div className="flex justify-between items-start gap-12">
              <div className="max-w-md">
                <h2 className="text-3xl font-normal mb-4 tracking-tight text-[#1a322b]">Integrates with tools</h2>
                <p className="text-gray-600 mb-6 font-light">
                  Seamlessly connect the databases and applications you rely on to scale your business.
                </p>
                <button className="bg-emerald-950 text-white px-6 py-3 rounded-full inline-flex items-center text-sm">
                  Explore
                  <span className="ml-2">→</span>
                </button>
              </div>
              <div className="grid grid-cols-4 gap-3 flex-1">
                {integrationIcons.map((tool, index) => (
                  <div key={index} className="bg-white p-3 rounded-2xl shadow-sm flex items-center justify-center" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                    <span className="text-2xl">{tool.icon}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-emerald-900/50 p-8 rounded-2xl backdrop-blur-sm">
              <span className="text-3xl mb-4 block">{feature.icon}</span>
              <h3 className="text-xl font-normal mb-3">{feature.title}</h3>
              <p className="text-gray-300 font-light text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default S1;
