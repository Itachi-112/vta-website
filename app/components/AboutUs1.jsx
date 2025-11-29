import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-50 font-sans">
      {/* Increased max-width to make it more horizontal */}
      <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-stretch gap-10 lg:gap-16">
          
          {/* LEFT SIDE: Image Card */}
          <div className="w-full md:w-1/2">
            <div className="group bg-white p-2 rounded-2xl shadow-xl border border-gray-100 w-full h-full flex flex-col transition-all duration-500 hover:shadow-2xl hover:border-blue-100">
              <div className="relative rounded-xl overflow-hidden h-full w-full">
                {/* Image fills the container height perfectly */}
                <img 
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop" 
                  alt="Document Attestation and Verification" 
                  className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#2f486b]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Text Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            
            <div className="mb-6">
              {/* Context Badge - Reduced margin */}
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-8 bg-[#56b4e9]"></span>
                <span className="text-[#56b4e9] font-bold text-xs tracking-widest uppercase">About Us</span>
              </div>

              {/* Clean Headline - Reduced margin */}
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#2f486b] mb-4 leading-tight">
                We Simplify Your <br />
                <span className="text-[#56b4e9]">Global Journey.</span>
              </h2>

              {/* Clean, Readable Paragraphs - Reduced spacing */}
              <div className="pl-5 border-l-4 border-gray-100 space-y-3 mb-6">
                <p className="text-gray-600 text-base leading-relaxed">
                  VTA Global Services, LLP is an <span className="font-bold text-[#2f486b]">ISO 9001:2015</span> certified leader in document attestation and visa facilitation. Based in New Delhi, we have spent years building a reputation for speed, accuracy, and absolute reliability.
                </p>
                <p className="text-gray-600 text-base leading-relaxed">
                  Whether you are a student aspiring to study abroad, a professional seeking overseas employment, or a business expanding globally, we handle the complex paperwork so you don't have to.
                </p>
              </div>
            </div>

            {/* Organized Checklist - Reduced padding for a shorter look */}
            <div className="space-y-3">
              <div className="flex items-center space-x-4 px-5 py-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#56b4e9]/30 hover:bg-[#56b4e9]/5 transition-colors group">
                <div className="bg-white p-1.5 rounded-full shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#56b4e9]" />
                </div>
                <span className="text-[#2f486b] font-bold text-base">Secure Document Processing</span>
              </div>
              
              <div className="flex items-center space-x-4 px-5 py-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#56b4e9]/30 hover:bg-[#56b4e9]/5 transition-colors group">
                <div className="bg-white p-1.5 rounded-full shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#56b4e9]" />
                </div>
                <span className="text-[#2f486b] font-bold text-base">On-Time Delivery Guarantee</span>
              </div>
              
              <div className="flex items-center space-x-4 px-5 py-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#56b4e9]/30 hover:bg-[#56b4e9]/5 transition-colors group">
                <div className="bg-white p-1.5 rounded-full shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#56b4e9]" />
                </div>
                <span className="text-[#2f486b] font-bold text-base">Expert Consultation</span>
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;