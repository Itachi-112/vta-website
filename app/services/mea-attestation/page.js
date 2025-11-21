import React from "react";
import Image from "next/image"; // Re-added Next.js component
import Link from "next/link"; // Re-added Next.js component

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
              <span className="block text-white">MEA </span>
              <span className="block text-[#56b4e9] drop-shadow-lg">Attestation</span>
            </h1>

            {/* Subtitle/Tagline - UPDATED */}
            <p className="text-lg sm:text-xl text-gray-200 drop-shadow-md max-w-md">
              Fast, reliable, and secure attestation services for all your official documents.
            </p>

            {/* Breadcrumb - UPDATED */}
            <div className="pt-2">
              <div className="inline-flex items-center font-sans justify-center rounded-full bg-[#56b4e9] px-6 py-3 text-white font-semibold shadow-xl hover:bg-blue-700 transition transform hover:scale-105 mt-6">

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
                <span className="font-medium">MEA Attestation</span>
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
              <span className='text-[#2f486b]'>M</span>EA & Apostille ATTESTATION SERVICES
            </h2>
            <div className='flex pt-0 pb-10 justify-center'>
              <div className="mx-0 mb-2 mt-4 h-1.5 w-10 bg-[#56b4e9] rounded-2xl" ></div>
              <div className="mx-0 mb-2 h-1.5 mt-4 w-2 bg-[#56b4e9] rounded-2xl"></div>
              <div className="mx-0 mb-2 h-1.5 mt-4 w-2 bg-[#56b4e9] rounded-2xl"></div>
              <div className="mx-0 mb-2 h-1.5 w-2 mt-4 bg-[#56b4e9] rounded-2xl"></div>
            </div>          </div>


          {/* Introductory Text (from image_60b4df.jpg) */}
          <div className="max-w-7xl mx-auto text-left text-2xl text-gray-400 space-y-6 mb-16 lg:mb-20 font-sans">
            <p>
              VTA Global is your one-stop solution for all your MEA & Apostille attestation needs. We understand the importance of genuine attestations that government bodies, universities, MNCs, and courthouses worldwide accept. That's why we work closely with ministry agents to ensure that our attestation services are of the highest quality.            </p>
            <p>
              Our team of certified experts is highly skilled and experienced in authentication, attestation, and Apostille for any documentation, all under a single roof. At VTA Global, we offer two categories of attestation done by MEA, ensuring that we provide the best services for our clients.            </p>
            <p>
              MEA attestation is essential for countries such as China, the Middle East, Taiwan, Thailand, Vietnam, etc. We understand the complexities and requirements of different countries, and our services are designed to ensure that your attestation needs are met efficiently and effectively.            </p>
            <p>
              Our services are recognized by various embassies, consulates, and other institutions worldwide, ensuring that your attestations are accepted without any issues. We strive to deliver our services on time, within budget, and with the highest level of accuracy.
            </p>
          </div>

          {/* Two-Column Card Layout (from image_60b7c1.png) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* Left Card: Apostille Attestation */}
            <div className="bg-white font-serif text-lg p-8 rounded-lg shadow-lg border border-gray-200 transition-all duration-300 ease-in-out
                           hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]">
              <h3 className="text-2xl font-bold text-[#2f486b] mb-4">
                Apostille Attestation
              </h3>
              <p className="text-gray-400 mb-6">
                Apostille is the authentication stamp that allows acceptance of the documents by hundreds of countries across the world. We aim to complete our Apostille service in merely 24 hours. We at VTA Global offer genuine Apostille Attestation for
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <StarIcon />
                  <span className="ml-3 text-gray-700">Personal documents such as birth, death and marriage certificates</span>
                </li>
                <li className="flex items-start">
                  <StarIcon />
                  <span className="ml-3 text-gray-700">Commercial & non-commercial documents</span>
                </li>
                <li className="flex items-start">
                  <StarIcon />
                  <span className="ml-3 text-gray-700">Affidavits</span>
                </li>
                <li className="flex items-start">
                  <StarIcon />
                  <span className="ml-3 text-gray-700">Educational documents including degrees, diploma</span>
                </li>
                <li className="flex items-start">
                  <StarIcon />
                  <span className="ml-3 text-gray-700">Matriculation certificates</span>
                </li>
                <li className="flex items-start">
                  <StarIcon />
                  <span className="ml-3 text-gray-700">Power of attorney</span>
                </li>
              </ul>
              <p className="text-gray-400">
                Since the requirement of legalization of foreign public documents eliminated by the Hague Apostille Convention in 1961, India as the member of Hague Convention abolished the need of attestation of a document apostilled by the member country for using such apostilled document in the country. We at VTA Global accepted that in India, an apostilled document is a legalized document used for every single purpose following the international obligation under the Convention. Apostille services are satisfactory At VTA Global and is chiefly done for personal documents.
              </p>
            </div>

            {/* Right Card: Normal Attestation */}
            <div className="bg-white font-serif text-lg p-8 rounded-lg shadow-lg border border-gray-200 transition-all duration-300 ease-in-out
                          hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]">
              <h3 className="text-2xl font-bold text-[#2f486b] mb-4">
                Normal Attestation
              </h3>
              <p className="text-gray-400 mb-6">
                Normal Attestation is done for all those regions where Apostille is not accepted and those are not a member of Hague Convention. At VTA Global, we are providing e-services for document verification & attestation. The Indian citizens can obtain the services following the below process
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <StarIcon />
                  <span className="ml-3 text-gray-700">Applicant Visits website for online application</span>
                </li>
                <li className="flex items-start">
                  <StarIcon />
                  <span className="ml-3 text-gray-700">Pay the fees online</span>
                </li>
                <li className="flex items-start">
                  <StarIcon />
                  <span className="ml-3 text-gray-700">Information is made available to MEA</span>
                </li>
                <li className="flex items-start">
                  <StarIcon />
                  <span className="ml-3 text-gray-700">Documents are verified digitally by all concerned</span>
                </li>
                <li className="flex items-start">
                  <StarIcon />
                  <span className="ml-3 text-gray-700">MEA verifies pre-approved and digitally signed documents</span>
                </li>
                <li className="flex items-start">
                  <StarIcon />
                  <span className="ml-3 text-gray-700">Dispatches the attested documents having apostille sticker to applicant</span>
                </li>
              </ul>
              <p className="text-gray-400">
                Our highly qualified teams at VTA Global also consider legalisation of documents by MAE based on the signature of the designated authorities of Union Territory or State Government, outsourcing of receipt, decentralising Apostille/attestation services and delivery of documents. The applicants at VTA Global are requested to approach their respective RPOs/Branch secretariats to acquire requisite services of attestation/Apostille as needed.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default TravelInsurancePage; // Changed export back

