import React from 'react';
import { ArrowRight } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Michelle Rivera",
      image: "/api/placeholder/48/48",
      text: "We love Growio because their API allows us to explore ways to get customer data in front of agents in ways that create a smoother, more personalized experience."
    },
    {
      name: "Ronald Richards",
      image: "/api/placeholder/48/48",
      text: "Growio's integration capabilities, flexibility, and feature depth allow me to be creative with how we're using it. And they let us scale in really interesting and powerful ways."
    }
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <svg className="w-4 h-4 text-emerald-500" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0L9.79611 6.20389L16 8L9.79611 9.79611L8 16L6.20389 9.79611L0 8L6.20389 6.20389L8 0Z" fill="currentColor"/>
          </svg>
          <span className="text-emerald-500 font-medium text-sm">CUSTOMER LOVE US</span>
        </div>
        
        <div className="flex justify-between items-center">
          <h2 className="text-[2.5rem] leading-tight text-slate-900 font-semibold max-w-md">
            Join over 10k+ of happy customers
          </h2>
          <button className="flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-slate-700">
            See all stories
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-lg font-medium text-slate-900 mb-1">
                  {testimonial.name}
                </h3>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
            <p className="text-lg text-slate-700 leading-relaxed">
              "{testimonial.text}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;