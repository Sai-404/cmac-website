import React from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import IB from '../../assets/INTEGRALBEE.jpg';
import NH from '../../assets/NHLOGO.jpg';

const Events = () => {
  const plans = [
    {
      name: "INTEGRAL BEE",
      image: IB,
      features: [
        { name: "The Integral Bee was a mathematics competition conducted by CMAC on the 23rd of December, where participants demonstrated their skills in solving integrals, ranging from basic concepts to advanced techniques. This event was designed to challenge students' calculus knowledge, encourage quick thinking, and celebrate mathematical problem-solving in honor of Srinivasa Ramanujan, whose work greatly influenced the field.", included: true },
      ],
      variant: "light",
      bgColor: "bg-[#FFDE59]",
      hideRegister: true,
    },
    {
      name: "NUMEROHACK",
      image: NH,
      features: [
        { name: "NumeroHack was an innovative, 5-hour, offline hackathon conducted by the Council for Mathematics and Advanced Computing as a part of Texus'25. It challenged students to collaborate in pairs and use their mathematical and technical skills to develop creative solutions. The event encouraged teamwork, innovation, and the application of mathematical principles in a real-world, technical context. Participants worked on math-based projects, app development, or problem-solving tasks that required the application of algorithms, data analysis, and other mathematical concepts.", included: true },
      ],
      variant: "dark",
      bgColor: "bg-[#000000]",
      hideRegister: true,
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3 // Delay between each card animation
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 100 }, // Start from right side
    visible: { 
      opacity: 1, 
      x: 0,      // Animate to original position
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-orange-50 overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 opacity-10" />

      <div className="relative w-full max-w-7xl mx-auto px-4 py-16">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ 
            once: true,
            amount: 0.3 // Trigger when 30% of the element is visible
          }}
          variants={headerVariants}
        >
          <motion.p 
            className="text-[#CC0000] font-medium mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            EVENTS
          </motion.p>
          <motion.h2 
            className="text-4xl font-bold text-slate-900 mb-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            The CMAC Club Events
          </motion.h2>
          <motion.p 
            className="text-slate-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            The CMAC Club organizes events that seamlessly integrate the fields of mathematics and computer science. 
            These events foster innovation, encouraging participants to explore the intersection of these two dynamic 
            disciplines through various challenges and activities.
          </motion.p>
        </motion.div>

        {/* Centered Grid with Animation */}
        <div className="flex justify-center">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ 
              once: true, 
              amount: 0.2, // Trigger when just 20% of the component is visible
              margin: "0px 0px -100px 0px" // Negative bottom margin to trigger earlier
            }}
          >
            {plans.map((plan, index) => (
              <motion.div 
                key={plan.name} 
                className="flex flex-col"
                variants={cardVariants}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                custom={index} // Pass index to enable proper staggering
              >
                <div
                  className={`rounded-3xl p-8 ${plan.bgColor} ${
                    plan.variant === "dark" ? "text-white" : "text-slate-900"
                  }`}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">{plan.name}</h3>
                  </div>
                  {plan.image && (
                    <div className="mb-4">
                      <img src={plan.image} alt={plan.name} className="w-full h-48 object-contain rounded-lg" />
                    </div>
                  )}
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-sm flex-grow -mt-4">
                  <p className="font-medium mb-6">Event Details</p>
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature.name} className="flex items-center">
                        <CheckCircle2
                          className={`w-5 h-5 mr-3 ${feature.included ? "text-[#0f3730]" : "text-slate-200"}`}
                        />
                        <span className={feature.included ? "text-slate-900" : "text-slate-400"}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Events;