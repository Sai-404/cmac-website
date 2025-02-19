import React, { useState } from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "DR. SHAKEELA SATHISH",
      profession: "HOD OF MATHEMATICS DEPARTMENT SRMIST",
      text: "We love Growio because their API allows us to explore ways to get customer data in front of agents in ways that create a smoother, more personalized experience."
    },
    {
      name: "DR. GURUSWAMY ARUMUGAM",
      profession: "ASSISTANT PROFESSOR OF MATHEMATICS DEPARTMENT SRMIST",
      text: "Growio's integration capabilities, flexibility, and feature depth allow me to be creative with how we're using it. And they let us scale in really interesting and powerful ways."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  
  const handlePrev = () => {
    setActiveIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setActiveIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full py-20 px-4 md:px-6 lg:px-8 bg-orange-50">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#CC0000] font-normal text-xl mb-6">Our Testimonials</p>
        </div>
        
        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white shadow-lg rounded-xl p-8 mx-auto max-w-6xl">
                    <div className="mb-6">
                      <h3 className="text-2xl font-semibold text-gray-800">{testimonial.name}</h3>
                      <p className="text-gray-500 text-lg mt-2">{testimonial.profession}</p>
                    </div>
                    <p className="text-gray-600 text-lg">{testimonial.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-10">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 bg-white mr-2"
              aria-label="Previous testimonial"
            >
              <span className="text-gray-500">&lt;</span>
            </button>
            
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 mx-1 rounded-full ${
                  index === activeIndex ? 'bg-[#AD0000]' : 'bg-gray-300'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            
            <button 
              onClick={handleNext}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 bg-white ml-2"
              aria-label="Next testimonial"
            >
              <span className="text-gray-500">&gt;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;