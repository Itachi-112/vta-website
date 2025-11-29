// components/ContactHero.jsx

import React from "react";
import Image from "next/image";
import Link from "next/link";

const ContactHero = () => {
  return (
    // Set a minimum height for the hero and make it relative for absolute positioning of the image
    <section className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
      
      {/* Background Image using Next.js Image component */}
      <Image
        src="/contacthero.png" 
        alt="A scenic horizon"
        fill
        sizes="100vw"
        quality={100}
        priority={true}
        // Apply strong brightness filter and opacity to ensure text stands out
        className="brightness-50 opacity-90 object-cover"
      />

      {/* Content Container (relative and z-index 10 to ensure it's above the image) */}
      <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Left-aligned Text Column - takes up about half the width on large screens */}
        <div className="max-w-xl text-left space-y-4">
          
          {/* Main Title with Blue and White Theme */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight">
            <span className="block text-white">Explore New </span> 
            <span className="block text-[#56b4e9] drop-shadow-lg">Horizons</span>
          </h1>

          {/* Subtitle/Tagline */}
          <p className="text-lg sm:text-xl text-gray-200 drop-shadow-md max-w-md">
            Your journey starts here. Reach out to our expert consultants today.
          </p>
          

           <div className="pt-2">
            <div  className="inline-flex items-center justify-center rounded-full bg-[#56b4e9] px-6 py-3 text-white font-semibold shadow-xl hover:bg-blue-700 transition transform hover:scale-105 mt-6"
          >
              <Link href="/" passHref className="text-white hover:text-blue-300 transition">
                Home
              </Link>
              <span className="text-white">/</span>
              <span className="text-white">Contact Us</span>
            </div>
          </div>
        </div>
        
        {/* The right side (Map/Empty) will be covered by the background image */}
      </div>
    </section>
  );
};

export default ContactHero;