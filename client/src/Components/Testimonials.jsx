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
    <section className="w-full py-12 px-4 md:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-blue-600 mb-2">
            CUSTOMER LOVE US
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Join over 10k+ of happy customers
            </h3>
            <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
              See all stories
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;