import React from 'react';

const StatsDisplay = () => {
  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center px-4">
          {/* Higher leads */}
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">+24%</div>
            <div className="text-gray-600">Higher leads</div>
          </div>

          {/* Customer satisfaction score */}
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">99%</div>
            <div className="text-gray-600">Customer satisfaction score</div>
          </div>

          {/* Daily API calls */}
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">4B+</div>
            <div className="text-gray-600">Daily API calls</div>
          </div>

          {/* Messages sent */}
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">35B</div>
            <div className="text-gray-600">Messages sent in 2023</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsDisplay;