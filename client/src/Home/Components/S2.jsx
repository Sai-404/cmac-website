import React from "react";
import { CheckCircle2 } from "lucide-react";
import IB from '../../assets/INTEGRALBEE.jpg';
import NH from '../../assets/NHLOGO.jpg';

const S2 = () => {
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
        { name: "NumeroHack will be an innovative, 5-hour, offline hackathon conducted by the Council for Mathematics and Advanced Computing as a part of Texus'25. It will challenge students to collaborate in pairs and use their mathematical and technical skills to develop creative solutions. This event will encourage teamwork, innovation, and the application of mathematical principles in a real-world, technical context. Participants will work on math-based projects, app development, or problem-solving tasks that require the application of algorithms, data analysis, and other mathematical concepts.", included: true },
      ],
      variant: "dark",
      bgColor: "bg-[#000000]",
      upcoming: true,
      hideRegister: true,
    }
  ];

  return (
    <div className="relative w-full min-h-screen bg-orange-50 overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 opacity-10" />

      <div className="relative w-full max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <p className="text-[#CC0000] font-medium mb-4">EVENTS</p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">The CMAC Club Events</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            The CMAC Club organizes events that seamlessly integrate the fields of mathematics and computer science. 
            These events foster innovation, encouraging participants to explore the intersection of these two dynamic 
            disciplines through various challenges and activities.
          </p>
        </div>

        {/* Centered Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {plans.map((plan) => (
              <div key={plan.name} className="flex flex-col">
                <div
                  className={`rounded-3xl p-8 ${plan.bgColor} ${
                    plan.variant === "dark" ? "text-white" : "text-slate-900"
                  }`}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">{plan.name}</h3>
                    {plan.upcoming && (
                      <span className="px-3 py-1 text-xs bg-[#CC0000] text-[#FFF7ED] rounded-full">
                        UPCOMING
                      </span>
                    )}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default S2;