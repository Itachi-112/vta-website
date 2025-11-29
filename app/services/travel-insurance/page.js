import React from "react";
import Image from "next/image"; // Re-added Next.js component
import Link from "next/link"; // Re-added Next.js component

// Changed component name back to be specific
const TravelInsurancePage = () => {
  return (
    <>
      {/* This is the hero section, adapted from your ContactHero code.
        The text has been changed for this specific service.
      */}
      <section className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
        
        {/* Background Image using Next.js Image component */}
        <Image
          src="/contacthero.png" // Using the original image path as requested
          alt="MEA Attestation services"
          fill
          sizes="100vw"
          quality={100}
          className="brightness-50 opacity-90 object-cover"
          priority={true}
        />

        {/* Content Container */}
        <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Left-aligned Text Column */}
          <div className="max-w-xl text-left space-y-4">
            
            {/* Main Title - UPDATED */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight">
              <span className="block text-white">TRAVEL  </span> 
              <span className="block text-[#56b4e9] drop-shadow-lg">Insurance</span>
            </h1>

            {/* Subtitle/Tagline - UPDATED */}
            <p className="text-lg sm:text-xl text-gray-200 drop-shadow-md max-w-md">
              Fast, reliable, and secure travel insurance for all your trips.
            </p>
            
            {/* Breadcrumb - UPDATED */}
            <div className="pt-2">
              <div className="inline-flex font-sans items-center justify-center rounded-full bg-[#56b4e9] px-6 py-3 text-white font-semibold shadow-xl hover:bg-blue-700 transition transform hover:scale-105 mt-6">
                
                {/* Using Link component as requested */}
                <Link href="/" passHref className="text-white hover:text-blue-300 transition">
                  Home
                </Link>
                <span className="text-white mx-2">/</span>
                {/* Using Link component as requested */}
                <span className="text-white hover:text-blue-300 transition">
                  Services
                </span>
                <span className="text-white mx-2">/</span>
                <span className="font-bold">Travel Insurance</span>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-5xl font-extrabold font-sans text-[#56b4e9] tracking-tight">
              <span className='text-[#2f486b]'>T</span>ravel Insurance Services
            </h2>
            <div className='flex pt-0 pb-10 justify-center'>
              <div className="mx-0 mb-2 mt-4 h-1.5 w-10 bg-[#56b4e9] rounded-2xl" ></div>
              <div className="mx-0 mb-2 h-1.5 mt-4 w-2 bg-[#56b4e9] rounded-2xl"></div>
              <div className="mx-0 mb-2 h-1.5 mt-4 w-2 bg-[#56b4e9] rounded-2xl"></div>
              <div className="mx-0 mb-2 h-1.5 w-2 mt-4 bg-[#56b4e9] rounded-2xl"></div>
            </div>
            <div className="max-w-7xl mx-auto text-left text-2xl text-gray-400 space-y-6 mb-16 lg:mb-20 font-sans">
              <p>
                At VTA Global, we understand that travel insurance is a critical component of any trip. Whether you're traveling for leisure, business, or education, our comprehensive travel insurance plans protect you against unforeseen circumstances and provide peace of mind throughout your journey.
              </p>

              <p>
                We partner with leading international insurance providers to offer you flexible, affordable, and comprehensive travel insurance coverage. Our goal is to ensure that you're protected against medical emergencies, trip cancellations, lost baggage, and other travel-related risks.
              </p>

              <p>
                Our travel insurance services cover:
              </p>
              <ol className="list-disc list-inside space-y-2">
                <li>Medical emergency coverage abroad</li>
                <li>Trip cancellation and interruption protection</li>
                <li>Baggage loss and delay coverage</li>
                <li>Flight delay and missed connection protection</li>
                <li>Emergency evacuation and repatriation</li>
                <li>Personal liability coverage</li>
                <li>Adventure sports coverage options</li>
              </ol>
              <p>
                We believe that travel should be worry-free. Our insurance specialists work with you to understand your travel plans and recommend the most suitable coverage options for your specific needs and destination. With our guidance, you can choose from a range of plans that offer maximum protection at the best possible price.
              </p>
            </div>
          </div>

          <section>
            <div className="text-center mb-12 pt-10 lg:mb-16">
              <h2 className="text-3xl lg:text-5xl font-extrabold font-sans text-[#56b4e9] tracking-tight">
                <span className='text-[#2f486b]'>W</span>hy our Travel Insurance Services are unique?
              </h2>
              <div className='flex pt-0 pb-10 justify-center'>
                <div className="mx-0 mb-2 mt-4 h-1.5 w-10 bg-[#56b4e9] rounded-2xl" ></div>
                <div className="mx-0 mb-2 h-1.5 mt-4 w-2 bg-[#56b4e9] rounded-2xl"></div>
                <div className="mx-0 mb-2 h-1.5 mt-4 w-2 bg-[#56b4e9] rounded-2xl"></div>
                <div className="mx-0 mb-2 h-1.5 w-2 mt-4 bg-[#56b4e9] rounded-2xl"></div>
              </div>
              <div className="max-w-7xl mx-auto text-left text-2xl text-gray-400 space-y-6 mb-16 lg:mb-20 font-sans">
                <p>Our travel insurance expertise goes beyond standard policy recommendations. We provide comprehensive guidance on coverage options, helping you understand what's included, what's excluded, and how to maximize your protection while traveling.</p>
                <p>With access to multiple insurance providers, we can offer you competitive rates and customized coverage that meets your unique travel needs. Our partnerships with global insurers ensure that you receive recognition and support wherever you travel in the world.</p>
                <p>We're committed to making the insurance process transparent and easy to understand. Our team will explain all the details of your coverage in clear language, ensuring you know exactly what protection you have for your trip.</p>
                <p>In the event of a claim, our team is here to support you throughout the process. We'll help you file claims, communicate with insurers, and ensure that your concerns are addressed promptly and fairly.</p>
                <p>Travel insurance isn't just about protection – it's about having the confidence to explore the world knowing you're covered for unexpected situations.</p>
              </div>
            </div>

            <div className="text-center mb-12 pt-10 lg:mb-16">
              <h2 className="text-3xl lg:text-5xl font-extrabold font-sans text-[#56b4e9] tracking-tight">
                <span className='text-[#2f486b]'>W</span>hy choose our travel insurance services?
              </h2>
              <div className='flex pt-0 pb-10 justify-center'>
                <div className="mx-0 mb-2 mt-4 h-1.5 w-10 bg-[#56b4e9] rounded-2xl" ></div>
                <div className="mx-0 mb-2 h-1.5 mt-4 w-2 bg-[#56b4e9] rounded-2xl"></div>
                <div className="mx-0 mb-2 h-1.5 mt-4 w-2 bg-[#56b4e9] rounded-2xl"></div>
                <div className="mx-0 mb-2 h-1.5 w-2 mt-4 bg-[#56b4e9] rounded-2xl"></div>
              </div>
              <div className="max-w-7xl mx-auto text-left text-2xl text-gray-400 space-y-6 mb-16 lg:mb-20 font-sans">
                <p>We are dedicated to helping you find the right balance between comprehensive coverage and affordable premiums. Our expert advisors work with you to identify your specific travel risks and recommend coverage that provides the best value for your investment. With flexible payment options and no hidden charges, you can book with confidence knowing exactly what you're paying for and what you're protected against.</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default TravelInsurancePage; // Changed export back

