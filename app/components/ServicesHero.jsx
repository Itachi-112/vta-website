// components/ContactHero.jsx

import React from "react";
import Image from "next/image";
import Link from "next/link";

const ContactHero = () => {
  return (
    // Set a minimum height for the hero and make it relative for absolute positioning of the image
    <section className="relative h-[400px] sm:h-[500px] lg:h-[200px] overflow-hidden">
      
      {/* Background Image using Next.js Image component */}
      <Image
        src="/serviceshero.png" 
        alt="A scenic horizon"
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
        quality={100}
        // Apply strong brightness filter and opacity to ensure text stands out
        className="brightness-50 opacity-90"
      />
    </section>
  );
};

export default ContactHero;