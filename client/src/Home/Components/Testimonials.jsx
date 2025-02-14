import React from 'react';

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
    <section className="w-full py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#CC0000] font-normal text-xl mb-6">Our Testimonials</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl p-8">
              <div className="flex items-center mb-6">
                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mr-6" />
                <h3 className="text-2xl font-semibold text-gray-800">{testimonial.name}</h3>
              </div>
              <p className="text-gray-600 text-lg">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;