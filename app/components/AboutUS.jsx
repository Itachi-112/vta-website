import React from 'react';
 import Image from 'next/image';

/**
 * AboutUs Component
 *
 * A responsive "About Us" section for a Next.js/Tailwind project.
 * It features a two-column layout with a stylish image wrapper
 * and descriptive text.
 */
export default function AboutUs() {
  return (
    <>
      {/* Section wrapper with vertical padding and a light background */}
      <section className="bg-gray-50 py-16 md:py-24">
        {/* Centered container with horizontal padding */}
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Grid layout - MODIFIED for 50/50 split and alignment */}
          <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-2">
            
            {/* --- Column 1: Stylish Image Container --- */}
            <div className="flex justify-center lg:justify-start lg:col-span-1">
              {/* Outer wrapper for the stylish card effect */}
              <div className="relative w-full rounded-2xl bg-linear-to-br from-blue-50 to-indigo-100 p-8 shadow-xl transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-2xl">
                {/* Optional decorative overlay */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/50 opacity-20"></div>
                
               <Image
                    src="/aboutsec.jpg" // <-- REPLACE THIS
                    alt="About VTA Global Services" // <-- Update this alt text
                    width={500} // Set appropriate width/height for your image's aspect ratio
                    height={400} // These are example values. Adjust as needed.
                    className="rounded-lg object-cover w-full h-80"
                    priority
                  />
              </div>
            </div>
            {/* -------------------------------------------------- */}


            {/* Column 2: Text Content - MODIFIED for vertical centering */}
            <div className="flex flex-col justify-center text-center lg:text-left lg:col-span-1">
              {/* Main Heading */}
              <h2 className="text-5xl font-extrabold tracking-tight text-[#2F486B] sm:text-4xl">
                Document Attestation and Visa Services at <span className='text-blue-400'>VTA</span>.
              </h2>

              {/* Paragraph Text */}
              <p className="mt-6 text-lg leading-8 font-sans text-[#666666]">
                VTA Global Services, LLP is an <span className='text-blue-400'>ISO 9001:2015</span> certified company with
                headquarters in New Delhi. Over the past couple of months, the
                company has been providing the best certified/notarized MEA
                Attestation, Apostille Attestation, Embassy Attestation,
                Document translations, Travel insurance, Visa assistance services
                across different regions in India.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

