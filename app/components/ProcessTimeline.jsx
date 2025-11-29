import React from 'react';
import { 
  Phone, 
  FileSearch, 
  CreditCard, 
  Truck, 
  Stamp, 
  Smile,
  ArrowRight
} from 'lucide-react';

const StepCard = ({ step, isLast }) => (
  <div className="relative group">
    {/* Connector Line (Desktop only, hides on last item) */}
    {!isLast && (
      <div className="hidden lg:block absolute top-1/2 -right-8 w-16 h-[2px] bg-[#56b4e9]/20 z-0">
        <div className="absolute right-0 -top-2 text-[#56b4e9]">
          <ArrowRight size={24} />
        </div>
      </div>
    )}

    {/* Increased padding (p-10) and added min-height for larger feel */}
    <div className="relative z-10 h-full bg-white rounded-3xl p-10 border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#56b4e9] hover:-translate-y-2">
      
      {/* Icon & Number Header */}
      <div className="flex justify-between items-start mb-8">
        {/* Increased icon container size */}
        <div className="w-16 h-16 rounded-2xl bg-[#56b4e9]/10 text-[#56b4e9] flex items-center justify-center group-hover:bg-[#56b4e9] group-hover:text-white transition-colors duration-300 shadow-sm">
          <step.icon size={32} strokeWidth={1.5} />
        </div>
        {/* Increased number size */}
        <span className="text-5xl font-black text-[#56b4e9] opacity-90 group-hover:opacity-100 transition-all duration-300">
          {step.id}
        </span>
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-[#2f486b] mb-4 group-hover:text-[#56b4e9] transition-colors">
        {step.title}
      </h3>
      <p className="text-base text-gray-600 leading-relaxed">
        {step.desc}
      </p>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-8 right-8 h-1.5 bg-[#56b4e9] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
    </div>
  </div>
);

const ProcessTimeline = () => {
  const steps = [
    {
      id: "01",
      title: "Initiate Request",
      desc: "Send us your documents via WhatsApp or Email for a preliminary feasibility check.",
      icon: Phone,
    },
    {
      id: "02",
      title: "Get Free Quote",
      desc: "We analyze the papers and provide a transparent, all-inclusive price and timeline.",
      icon: FileSearch,
    },
    {
      id: "03",
      title: "Processing Begins",
      desc: "Once approved, we immediately start the attestation or visa application process.",
      icon: CreditCard,
    },
    {
      id: "04",
      title: "Live Tracking",
      desc: "Get a unique tracking ID to monitor your document's status in real-time.",
      icon: Truck,
    },
    {
      id: "05",
      title: "Submission",
      desc: "We handle all submissions to the MEA, SDM, and Embassies personally.",
      icon: Stamp,
    },
    {
      id: "06",
      title: "Delivery",
      desc: "Receive your attested documents or stamped visa safely at your doorstep.",
      icon: Smile,
    },
  ];

  return (
    <section className="py-28 bg-gray-50 relative overflow-hidden font-sans">
      
      {/* Removed radial gradient background div for a flat design */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-24">
          <div className="inline-flex items-center space-x-3 bg-white border border-[#56b4e9] rounded-full px-5 py-2 mb-8 shadow-sm">
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#56b4e9] animate-pulse"></span>
            <span className="text-[#2f486b] text-sm font-bold tracking-widest uppercase">Simple 6-Step Process</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight">
            <span className="text-[#2f486b]">F</span><span className="text-[#56b4e9]">rom Application to Approval.</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We've stripped away the complexity. No hidden steps, no confusing jargon—just a clear path to getting your visa or attestation done.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-y-20">
          {steps.map((step, index) => (
            <StepCard 
              key={index} 
              step={step} 
              isLast={(index + 1) % 3 === 0} // Hides arrow on every 3rd card (end of row)
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <p className="text-gray-600 mb-8 text-lg">Ready to get started?</p>
          <a 
            href="tel:+91 8368032103" 
            className="inline-flex items-center justify-center px-12 py-5 text-lg font-bold text-white bg-[#56b4e9] rounded-2xl hover:bg-[#2f486b] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
          >
            Start Your Application
            <ArrowRight className="ml-3 w-6 h-6" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProcessTimeline;