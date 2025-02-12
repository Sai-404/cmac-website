import React from 'react';

const StatsDisplay = () => {
  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Always show two columns using grid-cols-2 */}
        <div className="grid grid-cols-2 gap-8">
          {/* Higher leads */}
          <div className="text-center p-4">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">+24%</div>
            <div className="text-gray-600 text-xs sm:text-sm lg:text-base">Higher leads</div>
          </div>

          {/* Customer satisfaction score */}
          <div className="text-center p-4">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">99%</div>
            <div className="text-gray-600 text-xs sm:text-sm lg:text-base">Customer satisfaction score</div>
          </div>

          {/* Daily API calls */}
          <div className="text-center p-4">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">4B+</div>
            <div className="text-gray-600 text-xs sm:text-sm lg:text-base">Daily API calls</div>
          </div>

          {/* Messages sent */}
          <div className="text-center p-4">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">35B</div>
            <div className="text-gray-600 text-xs sm:text-sm lg:text-base">Messages sent in 2023</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsDisplay;