import React from "react";
import Image from "next/image"; // Re-added Next.js component
import Link from "next/link"; // Re-added Next.js component
import CountrySelector from "@/app/components/CountriesSelector";

const StarIcon = () => (
  <svg
    className="w-5 h-5 text-[#56b4e9] shrink-0"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95.69l1.07-3.292z" />
  </svg>
);

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
        />

        {/* Content Container */}
        <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Left-aligned Text Column */}
          <div className="max-w-xl text-left space-y-4">

            {/* Main Title - UPDATED */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight">
              <span className="block text-white">Visa</span>
              <span className="block text-[#56b4e9] drop-shadow-lg">Assistance</span>
            </h1>

            {/* Subtitle/Tagline - UPDATED */}
            <p className="text-lg sm:text-xl text-gray-200 drop-shadow-md max-w-md">
              Fast, reliable, and secure assistance for all your visa documents.
            </p>

            {/* Breadcrumb - UPDATED */}
            <div className="pt-2">
              <div className="inline-flex items-center justify-center rounded-full bg-[#56b4e9] px-6 py-3 text-white font-semibold shadow-xl hover:bg-[#56b4e9] transition transform hover:scale-105 mt-6">

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
                <span className="font-sans">Visa-Assistance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Title (from image_60b4df.jpg) */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-5xl font-extrabold font-sans text-[#56b4e9] tracking-tight">
              <span className='text-[#2f486b]'>V</span>isa Assistance
            </h2>
            <div className='flex pt-0 pb-10 justify-center'>
              <div className="mx-0 mb-0 mt-4 h-1.5 w-10 bg-[#56b4e9] rounded-2xl" ></div>
              <div className="mx-0 mb-0 h-1.5 mt-4 w-2 bg-[#56b4e9] rounded-2xl"></div>
              <div className="mx-0 mb-0 h-1.5 mt-4 w-2 bg-[#56b4e9] rounded-2xl"></div>
              <div className="mx-0 mb-0 h-1.5 w-2 mt-4 bg-[#56b4e9] rounded-2xl"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 ">

              {/* Left Card: Apostille Attestation */}
              <div className="text-2xl">

                <p className="text-gray-400 mb-6 text-left">
                  We dedicate ourselves in providing immigration & visa application services for individuals and institutions. With expertise in the arena of visa assistance, we can help you in acquiring visas without struggling with foreign government agencies, offices and embassies. You can apply for a visa for the below categories
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <StarIcon />
                    <span className="ml-3 text-gray-400">Tourist Visa</span>
                  </li>
                  <li className="flex items-start">
                    <StarIcon />
                    <span className="ml-3 text-gray-400">Business Visa</span>
                  </li>
                  <li className="flex items-start">
                    <StarIcon />
                    <span className="ml-3 text-gray-400">Study Visa</span>
                  </li>
                  <li className="flex items-start">
                    <StarIcon />
                    <span className="ml-3 text-gray-400">Family Reunification Visa</span>
                  </li>
                  <li className="flex items-start">
                    <StarIcon />
                    <span className="ml-3 text-gray-400">Visa stamping</span>
                  </li>
                </ul>
              </div>
              <div>
                 <img src="/visahero1.webp"></img>
                
              </div>

            </div>
          </div>


          {/* Introductory Text (from image_60b4df.jpg) */}

          {/* Two-Column Card Layout (from image_60b7c1.png) */}

        </div>
        <div className="max-w-7xl mx-auto text-left text-2xl text-gray-400 space-y-6 mb-16 lg:mb-20 font-sans">
          <p>
            At VTA Global, we are committed to provide an error-free visa application by ensuring complete documentation as we believe that incomplete documentation is the core reason behind visa rejection. We found that nearby 85% of countries visa department accept certified translation (translation on accuracy certificate, company letterhead with seal & signature of authorized signature), these are inclusive of UK, USA, Netherlands, Switzetland, Germany and most European countries.
          </p>
          <p>
            With the combined efforts of our visa translation experts who are able to translate every single document needed while applying for visa, we have been successfully delivering high quality translation services with top quality assurance alternatives for ensuring accuracy of translations. At VTA Global, the teams can assure fast delivery and low translation cost, in fact often deliver service before estimated time. Also, we are offering urgent translation services that are quite useful when urgent document translation is needed for the completion of visa application process.
          </p>
         
          <p>
            We are distributing translation quotes to help you check out the best rates available for getting visa translation services as per your own requirements. You can also get in touch with our team through a contact form to resolve any queries or to meet special requests. At VTA Global, we are committed to save your money, time and efforts while leading to higher success rate for stronger visa applications since our entire process is proven.          </p>
        </div>
        <CountrySelector/>
      </section>

    </>
  );
};

export default TravelInsurancePage; // Changed export back

