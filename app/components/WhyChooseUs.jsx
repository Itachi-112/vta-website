// Use icons from react-icons (lucide set bundled with react-icons)
import { LuCalculator, LuAward, LuClock } from "react-icons/lu";

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-14 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 
        
        className="text-[#56b4e9] text-center text-4xl font-extrabold md:text-6xl mb-10" >
          <span className='text-[#2F486B]'>W</span>hy Choose Attestation & Visa Services with VTA Global?
        </h2>

        {/* Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Box 1 - CHANGED */}
          <div className="bg-white hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-in-out rounded-xl shadow-md p-6 flex flex-col items-center text-center">
            {/* Use Calculator icon */}
            <LuCalculator className="w-20 h-20 text-[#2F486B] mb-4" />
            <h3 className="text-xl font-sans font-bold text-[#2F486B]">
              Instant Quote
            </h3>
            <p className="text-[#2f486b] font-sans font-bold text-l mt-2">
              Get fast and transparent pricing for all attestation services.
            </p>
          </div>

          {/* Box 2 - (No Change) */}
          <div className="bg-white hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-in-out rounded-xl shadow-md p-6 flex flex-col items-center text-center">
            <LuAward className="w-20 h-20 text-[#2F486B] mb-4" />
            <h3 className="text-xl font-bold font-sans text-[#2F486B]">
              99.9% Accuracy & Quality
            </h3>
            <p className="text-[#2f486b] font-bold font-sans text-l mt-2">
              Trusted professionals delivering reliable and precise services.
            </p>
          </div>    

          {/* Box 3 - CHANGED */}
          <div className="bg-white hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-in-out rounded-xl shadow-md p-6 flex flex-col items-center text-center">
            {/* Use Clock icon */}
            <LuClock className="w-20 h-20 text-[#2F486B] mb-4" />
            <h3 className="text-xl font-bold font-sans text-[#2F486B]">
              On-Time Service
            </h3>
            <p className="text-[#2f486b] font-bold font-sans text-l mt-2">
              Guaranteed timely processing for all visa and attestation needs.
            </p >
          </div>

        </div>
      </div>
    </section>
  );
}