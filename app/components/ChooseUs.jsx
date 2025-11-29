import React from 'react';
import { ShieldCheck, Zap, Layers } from 'lucide-react';

const ChooseUs = () => {
  return (
    <section className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-gray-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-gray-50 "></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-start">
          
          {/* Left Column: Headline & Stats */}
          <div className="mb-16 lg:mb-0 sticky top-10">
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#2f486b] mb-6 leading-tight">
              Redefining the standard for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#56b4e9] to-[#2f486b]">Global Mobility.</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              We navigate the bureaucracy so you don't have to. Our streamlined process ensures your documents are processed faster, safer, and with zero errors.
            </p>
            
            <div className="grid grid-cols-2 gap-8 border-t border-gray-200 pt-8">
              <div className="pl-4 border-l-4 border-[#56b4e9]">
                <div className="text-4xl font-extrabold text-[#2f486b] mb-1">99.9%</div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Approval Rate</div>
              </div>
              <div className="pl-4 border-l-4 border-[#56b4e9]">
                <div className="text-4xl font-extrabold text-[#2f486b] mb-1">50+</div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Languages</div>
              </div>
            </div>
          </div>

          {/* Right Column: Feature List */}
          <div className="space-y-6">
            
            {/* Feature 1 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#56b4e9]/10 p-3 rounded-xl">
                  <ShieldCheck className="w-6 h-6 text-[#56b4e9]" />
                </div>
                <div className="ml-5">
                  <h4 className="text-xl font-bold text-[#2f486b] mb-2">Multi-Level Verification</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Every document undergoes a rigorous 3-step pre-check process by our experts to ensure compliance and prevent avoidable rejections.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#56b4e9]/10 p-3 rounded-xl">
                  <Zap className="w-6 h-6 text-[#56b4e9]" />
                </div>
                <div className="ml-5">
                  <h4 className="text-xl font-bold text-[#2f486b] mb-2">Express Tracks</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    In a hurry? Our expedited channels with MEA and select embassies can cut processing times by up to 50% for urgent cases.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#56b4e9]/10 p-3 rounded-xl">
                  <Layers className="w-6 h-6 text-[#56b4e9]" />
                </div>
                <div className="ml-5">
                  <h4 className="text-xl font-bold text-[#2f486b] mb-2">End-to-End Tracking</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Never wonder where your passport is. You get a dedicated tracking ID to monitor every stage of the attestation process live.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ChooseUs;