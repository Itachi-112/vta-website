import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const AboutHero = () => {
  return (
    <div className='bg-gray-50'>
    <section className="bg-gray-50 font-sans overflow-hidden relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
        
        {/* Left: Text Content */}
        <div className="mb-16 lg:mb-0 order-2 lg:order-1">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2f486b] mb-6 leading-[1.2] tracking-tight">
            We don't just process documents. <br />
            <span className="text-[#56b4e9]">We build bridges.</span>
          </h2>
          
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
            <p>
              VTA Global was founded with a simple mission: to simplify the complex world of international travel documentation. 
            </p>
            <p>
              What started as a small consultancy in New Delhi has grown into a trusted global partner for thousands of students, professionals, and businesses. We believe that borders shouldn't be barriers.
            </p>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-6 sm:items-center">
            <div className="flex items-center space-x-3">
              <div className="p-1 bg-green-100 rounded-full">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              </div>
              <span className="font-semibold text-[#2f486b]">ISO 0000:0000 Certified</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-1 bg-green-100 rounded-full">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              </div>
              <span className="font-semibold text-[#2f486b]">MEA Authorized Agents</span>
            </div>
          </div>
        </div>

        {/* Right: Visual (Clean & Professional) */}
        <div className="relative order-1 lg:order-2">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop" 
                alt="Professional team meeting" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#2f486b]/10 mix-blend-multiply pointer-events-none"></div>
          </div>
          
          {/* Simple Stat Box */}
          <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-50 max-w-[200px] hidden md:block">
              <p className="text-4xl font-bold text-[#56b4e9] mb-1">12k+</p>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Clients Served</p>
          </div>
        </div>

      </div>
    </section>
    </div>
  );
};

export default AboutHero;