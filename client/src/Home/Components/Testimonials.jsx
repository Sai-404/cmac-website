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
          <h2 className="text-3xl font-bold">Our Testimonials</h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
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
