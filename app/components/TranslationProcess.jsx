import React from 'react';
// Import icons from lucide-react
import {
  Clock,
  BarChart3,
  BookOpen,
  ClipboardCheck,
  ShieldCheck,
  UserCheck,
  Award,
  Truck,
} from 'lucide-react';

// --- Process Step Data ---
// The 'icon' property now holds the lucide-react component
const processSteps = [
  {
    icon: Clock,
    title: "Developing Turnaround time",
  },
  {
    icon: BarChart3,
    title: "Analysing the translation project",
  },
  {
    icon: BookOpen,
    title: "Creating glossary and analysing the format",
  },
  {
    icon: ClipboardCheck,
    title: "Proofreading and controlling quality",
  },
  {
    icon: ShieldCheck,
    title: "Accuracy of formatting and professional translation",
  },
  {
    icon: UserCheck,
    title: "Assigning specialized translator",
  },
  {
    icon: Award,
    title: "Certification of translation",
  },
  {
    icon: Truck,
    title: "Delivery",
  },
];

// --- Main Component ---
export default function TranslationProcess() {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-8 mt-0 text-5xl font-extrabold text-[#56b4e9] font-sans">
          <span className='text-[#2f486b]'>O</span>ur Translation Process..
           <div className='flex pt-3 pb-10 justify-center'>
        <div className="mx-0 mb-2 h-1.5 w-10 bg-[#56b4e9] rounded-2xl" ></div>
        <div className="mx-0 mb-2 h-1.5 w-2 bg-[#56b4e9] rounded-2xl"></div>
        <div className="mx-0 mb-2 h-1.5 w-2 bg-[#56b4e9] rounded-2xl"></div>
        <div className="mx-0 mb-2 h-1.5 w-2 bg-[#56b4e9] rounded-2xl"></div>
        </div>
        </h2>
        </div>

        {/* Steps Grid */}
        <div className="mx-auto mt-10 max-w-none">
          <div className="grid grid-cols-1 gap-y-15 gap-x-11 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon; // Get the component from the array
              return (
                <div key={index} className="flex flex-col items-center text-center">
                  
                  {/* Icon - Using lucide-react */}
                  <div className="shrink-0">
                    {/* Re-added the circular border from the original design */}
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#56b4e9] bg-white shadow-md mb-2">
                      {/* Render the lucide-react icon component */}
                      <IconComponent
                        className="h-10 w-10 text-[#56b4e9]"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  {/* Text Box */}
                  <div className="mt-4 w-full">
                    <div className="flex items-center justify-center h-full min-h-20 rounded-lg bg-[#56b4e9] px-4 py-5 shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-lg">
                      <h3 className="font-semibold text-white">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Paragraph */}
        <div className="mt-16 text-center">
          <p className="mx-auto max-w-7xl text-lg leading-7 text-gray-500">
            We ensure that translations are of the original record or certified copy of the original document and must be authorized by a certified translator. Also, we ensure that if an accredited translator cannot provide translation services; there is also an affidavit with it. While translating sensitive documents, whether birth certificates, death certificates, or any personal document, VTA Global takes into account every single and minor detail, from signatures to stamps, dashes, seals, and formatting.
          </p>
        </div>
      </div>
    </section>
  );
}

