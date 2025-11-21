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
        />

        {/* Content Container */}
        <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Left-aligned Text Column */}
          <div className="max-w-xl text-left space-y-4">

            {/* Main Title - UPDATED */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight">
              <span className="block text-white">Embassy</span>
              <span className="block text-[#56b4e9] drop-shadow-lg">Legalization</span>
            </h1>

            {/* Subtitle/Tagline - UPDATED */}
            <p className="text-lg sm:text-xl text-gray-200 drop-shadow-md max-w-md">
              Fast, reliable, and secure legalization services for all your official documents.
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
                <span className="font-sans">Embassy Legalization</span>
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
              <span className='text-[#2f486b]'>E</span>mbassy Legalization
            </h2>
            <div className='flex pt-0 pb-10 justify-center'>
              <div className="mx-0 mb-2 mt-4 h-1.5 w-10 bg-[#56b4e9] rounded-2xl" ></div>
              <div className="mx-0 mb-2 h-1.5 mt-4 w-2 bg-[#56b4e9] rounded-2xl"></div>
              <div className="mx-0 mb-2 h-1.5 mt-4 w-2 bg-[#56b4e9] rounded-2xl"></div>
              <div className="mx-0 mb-2 h-1.5 w-2 mt-4 bg-[#56b4e9] rounded-2xl"></div>
            </div>
            <div className="max-w-7xl mx-auto text-left text-2xl text-gray-400 space-y-6 mb-16 lg:mb-20 font-sans">
              <p>
                Legalizing Indian documents for use in foreign countries is often a time consuming task. Many countries now request the apostille and additional embassy legalization.
              </p>
              <p>
                This involves working with the embassies and consulates across India. Experience in submitting the documents correctly ensures that the process is completed efficiently without delay. Whether you are based in the INDIA or living abroad with INDIA documents that need legalizing we can assist you.
              </p>
              <p>
                Document legalization varies from one embassy to another which is why our attestation service is so popular. Each embassy or consulate has their own prescribed process of handling documents. Some documents do not require embassy legalization and simply require the apostille certificate.
              </p>
            </div>
          </div>


          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-5xl font-extrabold font-sans text-[#56b4e9] tracking-tight">
              <span className='text-[#2f486b]'>D</span>edicated Embassy legalization Services
            </h2>
            <div className='flex pt-0 pb-10 justify-center'>
              <div className="mx-0 mb-2 mt-4 h-1.5 w-10 bg-[#56b4e9] rounded-2xl" ></div>
              <div className="mx-0 mb-2 h-1.5 mt-4 w-2 bg-[#56b4e9] rounded-2xl"></div>
              <div className="mx-0 mb-2 h-1.5 mt-4 w-2 bg-[#56b4e9] rounded-2xl"></div>
              <div className="mx-0 mb-2 h-1.5 w-2 mt-4 bg-[#56b4e9] rounded-2xl"></div>
            </div>
            <div className="max-w-7xl mx-auto text-left text-2xl text-gray-400 space-y-6 mb-16 lg:mb-20 font-sans">
              <p>
                Our embassy legalisation service saves you time researching how to prepare, certify and submit documents to the various embassies. Instead of guessing how to legalise your documents let our team of experts hand process your order with ease.
              </p>
              <p>
                Our fully inclusive service ensures documents are legalised as quickly as possible. Embassies may require that your documents are issued with a INDIA apostille before they will accept the document.
              </p>
              <p>
                Not all documents will be accepted and it is essential that documents are correctly presented to avoid delays. We can assist you with the apostille service if required to help speed up processing times.
              </p>
              <p>Many embassies insist that documents are processed and stamped by the chamber of commerce. Our all inclusive service will ensure that all necessary steps are taken to obtain the correct embassy legalisation. Our apostille and embassy legalisation service is the simple route to legalising documents for use in another country.
              </p>
            </div>
          </div>

        </div>
      </section>


    </>
  );
};

export default TravelInsurancePage; // Changed export back

