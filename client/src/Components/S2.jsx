import React from "react";
import { CheckCircle2 } from "lucide-react";

const S2 = () => {
  const plans = [
    {
      name: "Personal",
      description: "Designed for personal use and freelancers.",
      price: "64",
      features: [
        { name: "Ticketing system", included: true },
        { name: "Email, chat, voice, and more", included: true },
        { name: "1,000+ apps & integrations", included: true },
        { name: "Multiple ticket forms", included: false },
        { name: "Customer satisfaction (CSAT)", included: false }
      ],
      variant: "light",
      bgColor: "bg-[#EBFFDC]", // Updated color
    },
    {
      name: "Growth",
      description: "Best for small to medium-sized businesses.",
      price: "115",
      features: [
        { name: "Ticketing system", included: true },
        { name: "Email, chat, voice, and more", included: true },
        { name: "5,000+ apps & integrations", included: true },
        { name: "Multiple ticket forms", included: true },
        { name: "Customer satisfaction (CSAT)", included: true }
      ],
      variant: "dark",
      bgColor: "bg-[#0f3730]",
      popular: true,
    },
    {
      name: "Professional",
      description: "Perfect for large corporations and scaling startups.",
      price: "149",
      features: [
        { name: "Ticketing system", included: true },
        { name: "Email, chat, voice, and more", included: true },
        { name: "10,000+ apps & integrations", included: true },
        { name: "Multiple ticket forms", included: true },
        { name: "Customer satisfaction (CSAT)", included: true }
      ],
      variant: "light",
      bgColor: "bg-[#EBFFDC]", // Updated color
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-slate-50 overflow-hidden">
      {/* Wall Pattern Background with lighter opacity */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 opacity-10" />

      <div className="relative w-full max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <p className="text-[#CC0000] font-medium mb-4">PLANS AND PRICING</p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Transparent pricing for all</h2>
          <p className="text-slate-600">Every business is unique, find the perfect plan for you.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <div key={plan.name} className="flex flex-col">
              <div
                className={`rounded-3xl p-8 ${plan.bgColor} ${
                  plan.variant === "dark" ? "text-white" : "text-slate-900"
                }`}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  {plan.popular && (
                    <span className="px-3 py-1 text-xs bg-[#EBFFDC] text-slate-900 rounded-full">
                      MOST POPULAR
                    </span>
                  )}
                </div>
                <p className="text-sm opacity-80 mb-4">{plan.description}</p>
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="ml-2 opacity-80">/month</span>
                </div>
                <button
                  className={`w-full py-3 px-4 rounded-full font-medium transition-colors ${
                    plan.variant === "dark"
                      ? "bg-[#EBFFDC] text-slate-900 hover:bg-green-100"
                      : "bg-[#0f3730] text-white hover:bg-[#0a2922]"
                  }`}
                >
                  Get Started
                </button>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-sm flex-grow -mt-4">
                <p className="font-medium mb-6">Features</p>
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
  );
};

export default S2;