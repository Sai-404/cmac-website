import React from "react";
import { ArrowRight } from "lucide-react";

const Blogs = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Header Section */}
      <div className="text-center mb-16">
        <span className="text-emerald-500 font-medium uppercase tracking-wide text-sm mb-4 inline-block">
          Resources
        </span>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          All resources you need
        </h2>
        <p className="text-gray-600 text-lg">
          Articles on CRM, AI and Automation, Product, and more.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Large Card */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm p-6">
          <div className="aspect-video rounded-2xl bg-orange-50 mb-6">
            <img
              src="/api/placeholder/800/600"
              alt="Blog post cover"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Customer experience automation (CXA): Definition + examples
          </h3>
          <button className="inline-flex items-center text-gray-900 font-medium">
            Read more
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>

        {/* Right Column Stack */}
        <div className="space-y-8">
          {/* First Small Card */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm p-6 flex gap-6 items-center">
            <div className="w-32 h-32 flex-shrink-0 rounded-2xl bg-orange-50 overflow-hidden">
              <img
                src="/api/placeholder/128/128"
                alt="Blog post thumbnail"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Building AI-powered experiences for humans—with Brent Pliskow
              </h3>
              <button className="inline-flex items-center text-gray-900 font-medium">
                Read more
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Second Small Card */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm p-6 flex gap-6 items-center">
            <div className="w-32 h-32 flex-shrink-0 rounded-2xl bg-emerald-50 overflow-hidden">
              <img
                src="/api/placeholder/128/128"
                alt="Blog post thumbnail"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Employee recognition: Why it matters + how to deliver it
              </h3>
              <button className="inline-flex items-center text-gray-900 font-medium">
                Read more
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;