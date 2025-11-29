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
              <span className="block text-white">Flight </span> 
              <span className="block text-[#56b4e9] drop-shadow-lg">Bookings</span>
            </h1>

            {/* Subtitle/Tagline - UPDATED */}
            <p className="text-lg sm:text-xl text-gray-200 drop-shadow-md max-w-md">
              Fast, reliable, and secure flight bookings for all your vacations.
            </p>
            
            {/* Breadcrumb - UPDATED */}
            <div className="pt-2">
              <div className="inline-flex items-center justify-center rounded-full bg-[#56b4e9] px-6 py-3 text-white font-semibold shadow-xl hover:bg-blue-700 transition transform hover:scale-105 mt-6">
                
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
                <span className="font-bold">Flight Bookings</span>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-5xl font-extrabold font-sans text-[#56b4e9] tracking-tight">
              <span className='text-[#2f486b]'>F</span>light Booking Services
            </h2>
            <div className='flex pt-0 pb-10 justify-center'>
              <div className="mx-0 mb-2 mt-4 h-1.5 w-10 bg-[#56b4e9] rounded-2xl" ></div>
              <div className="mx-0 mb-2 h-1.5 mt-4 w-2 bg-[#56b4e9] rounded-2xl"></div>
              <div className="mx-0 mb-2 h-1.5 mt-4 w-2 bg-[#56b4e9] rounded-2xl"></div>
              <div className="mx-0 mb-2 h-1.5 w-2 mt-4 bg-[#56b4e9] rounded-2xl"></div>
            </div>
            <div className="max-w-7xl mx-auto text-left text-2xl text-gray-400 space-y-6 mb-16 lg:mb-20 font-sans">
              <p>
                At VTA Global, we specialize in providing comprehensive flight booking services for individuals and businesses. Whether you're planning a leisure trip, business travel, or an educational journey, our expert team is here to help you find the best flight options at competitive prices.
              </p>

              <p>
                We understand that booking flights can be complex and time-consuming. That's why we've created a personalized service that takes care of all the details, ensuring you get the best value for your money while minimizing stress and hassle.
              </p>

              <p>
                Our flight booking services include:
              </p>
              <ol className="list-disc list-inside space-y-2">
                <li>Domestic and international flight bookings</li>
                <li>Group travel arrangements</li>
                <li>Flight fare comparison and negotiation</li>
                <li>Visa-friendly booking strategies</li>
                <li>Travel package customization</li>
                <li>24/7 customer support for booking changes</li>
                <li>Competitive pricing on all major airlines</li>
              </ol>
              <p>
                With our extensive network of airline partners and travel suppliers, we can offer you flexible options and competitive rates that you won't find elsewhere. We work with all major airlines and global booking systems to ensure you get the best possible deal on your flight bookings.
              </p>
            </div>
          </div>

          <section>
            <div className="text-center mb-12 pt-10 lg:mb-16">
              <h2 className="text-3xl lg:text-5xl font-extrabold font-sans text-[#56b4e9] tracking-tight">
                <span className='text-[#2f486b]'>W</span>hy our Flight Booking Services are unique?
              </h2>
              <div className='flex pt-0 pb-10 justify-center'>
                <div className="mx-0 mb-2 mt-4 h-1.5 w-10 bg-[#56b4e9] rounded-2xl" ></div>
                <div className="mx-0 mb-2 h-1.5 mt-4 w-2 bg-[#56b4e9] rounded-2xl"></div>
                <div className="mx-0 mb-2 h-1.5 mt-4 w-2 bg-[#56b4e9] rounded-2xl"></div>
                <div className="mx-0 mb-2 h-1.5 w-2 mt-4 bg-[#56b4e9] rounded-2xl"></div>
              </div>
              <div className="max-w-7xl mx-auto text-left text-2xl text-gray-400 space-y-6 mb-16 lg:mb-20 font-sans">
                <p>Our flight booking team combines industry expertise with personalized service to deliver exceptional results. We go beyond simply booking flights – we create travel solutions tailored to your specific needs and budget requirements.</p>
                <p>With years of experience in the travel industry, we've developed strong relationships with airlines, travel agencies, and tour operators worldwide. This allows us to access exclusive deals and special rates that are not always available to the general public.</p>
                <p>We pride ourselves on transparency and honesty in all our dealings. There are no hidden charges or surprise fees – you'll always know exactly what you're paying for before confirming your booking.</p>
                <p>Our team is available 24/7 to assist you with any questions, changes, or special requests related to your flight bookings. We understand that travel plans can change, and we're here to help you navigate those changes smoothly.</p>
                <p>Whether you're a first-time traveler or a seasoned globe-trotter, our flight booking services are designed to make your journey as seamless and enjoyable as possible.</p>
              </div>
            </div>

            <div className="text-center mb-12 pt-10 lg:mb-16">
              <h2 className="text-3xl lg:text-5xl font-extrabold font-sans text-[#56b4e9] tracking-tight">
                <span className='text-[#2f486b]'>W</span>hy choose our flight booking services?
              </h2>
              <div className='flex pt-0 pb-10 justify-center'>
                <div className="mx-0 mb-2 mt-4 h-1.5 w-10 bg-[#56b4e9] rounded-2xl" ></div>
                <div className="mx-0 mb-2 h-1.5 mt-4 w-2 bg-[#56b4e9] rounded-2xl"></div>
                <div className="mx-0 mb-2 h-1.5 mt-4 w-2 bg-[#56b4e9] rounded-2xl"></div>
                <div className="mx-0 mb-2 h-1.5 w-2 mt-4 bg-[#56b4e9] rounded-2xl"></div>
              </div>
              <div className="max-w-7xl mx-auto text-left text-2xl text-gray-400 space-y-6 mb-16 lg:mb-20 font-sans">
                <p>We are committed to providing the best value for your money, utilizing our extensive network and negotiation skills to secure competitive rates on all bookings. Our team works diligently to compare options and identify the best flights that match your preferences, budget, and travel schedule. With our dedicated service, you can focus on planning your trip while we handle all the booking logistics.</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default TravelInsurancePage; // Changed export back

