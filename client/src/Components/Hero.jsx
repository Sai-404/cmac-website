import React from 'react';

const DecorativeSquares = ({ position }) => {
  // Array of squares with different colors
  const squares = [
    { color: 'bg-white border border-gray-200', size: 'w-12 h-12' },
    { color: 'bg-green-400', size: 'w-12 h-12' },
    { color: 'bg-yellow-400', size: 'w-12 h-12' },
  ];

  return (
    <div className={`absolute ${position} grid grid-cols-3 gap-2 opacity-80`}>
      {squares.map((square, index) => (
        <div
          key={index}
          className={`rounded-lg ${square.color} ${square.size} transform transition-transform`}
        ></div>
      ))}
      <div className="col-span-3 grid grid-cols-3 gap-2">
        {Array(6).fill().map((_, index) => (
          <div
            key={`sub-${index}`}
            className="w-12 h-12 rounded-lg bg-white border border-gray-200"
          ></div>
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Decorative Squares */}
      <DecorativeSquares position="left-10 top-40" />
      <DecorativeSquares position="right-10 bottom-40" />

      {/* Main Content */}
      <div className="text-center max-w-5xl mx-auto z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
          Lorem ipsum dolor sit amet <br />
          <br />
          consectetur adipiscing elit
        </h1>
        
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
          Invest in 1,000+ equities for real-time 
          insights and tailored reporting
        </p>

        <button className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;