import React from "react";
import Image from "next/image"; // Re-added Next.js component
import Link from "next/link"; // Re-added Next.js component
import TranslationProcess from "@/app/components/TranslationProcess";
import LanguageTranslationCountryCard from "@/app/components/LanguageTranslation";

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
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight font-sans">
              <span className="block text-white">Certified</span>
              <span className="block text-[#56b4e9] drop-shadow-lg">Document Translation</span>
            </h1>

            {/* Subtitle/Tagline - UPDATED */}
            <p className="text-lg sm:text-xl text-gray-200 drop-shadow-md max-w-md">
              Fast, reliable, and secure translation services for all your official documents.
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
                <span className=" font-sans">Certified Document Translation</span>
              </div>
            </div>
          </div>

        </div>
      </section>


      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-5xl font-extrabold font-sans text-[#56b4e9] tracking-tight">
              <span className='text-[#2f486b]'>C</span>ertified Translation Services
            </h2>
            <div className='flex pt-0 pb-10 justify-center'>
              <div className="mx-0 mb-2 mt-4 h-1.5 w-10 bg-[#56b4e9] rounded-2xl" ></div>
              <div className="mx-0 mb-2 h-1.5 mt-4 w-2 bg-[#56b4e9] rounded-2xl"></div>
              <div className="mx-0 mb-2 h-1.5 mt-4 w-2 bg-[#56b4e9] rounded-2xl"></div>
              <div className="mx-0 mb-2 h-1.5 w-2 mt-4 bg-[#56b4e9] rounded-2xl"></div>
            </div>
            <div className="max-w-7xl mx-auto text-left text-2xl text-gray-400 space-y-6 mb-16 lg:mb-20 font-sans">
              <p>
                We are a team of certified translators providing document and professional translation services to and from India in all foreign languages. Our mission is to help individuals and businesses with translation services to make their visa processing and other related procedures easy and hassle-free.
              </p>

              <p>
                We understand that the translation of papers is a critical step in immigration and legal procedures. That is why we offer certified translation services to cater to the needs of individuals who require translation services for various purposes.
              </p>

              <p>
                Our certified translation services are tailored to meet the requirements of different countries. We translate various documents, including but not limited to:
              </p>
              <ol className="list-disc list-inside space-y-2">
                <li>Degree certifications</li>
                <li>Mark sheets</li>
                <li>Birth Certificates</li>
                <li>Death Certificates</li>
                <li>Exprience Certificates</li>
                <li>Single status Affidavits</li>
                <li>Divorce certificates</li>
              </ol>
              <p>
                Our services are recognized by various embassies, consulates, and other institutions worldwide, ensuring that your attestations are accepted without any issues. We strive to deliver our services on time, within budget, and with the highest level of accuracy.
              </p>
            </div>
          </div>


          {/* Introductory Text (from image_60b4df.jpg) */}

          <section>
            <div className="text-center mb-12 pt-10 lg:mb-16">
              <h2 className="text-3xl lg:text-5xl font-extrabold font-sans text-[#56b4e9] tracking-tight">
                <span className='text-[#2f486b]'>W</span>hy our Translation Services are unique?
              </h2>
              <div className='flex pt-0 pb-10 justify-center'>
                <div className="mx-0 mb-2 mt-4 h-1.5 w-10 bg-[#56b4e9] rounded-2xl" ></div>
                <div className="mx-0 mb-2 h-1.5 mt-4 w-2 bg-[#56b4e9] rounded-2xl"></div>
                <div className="mx-0 mb-2 h-1.5 mt-4 w-2 bg-[#56b4e9] rounded-2xl"></div>
                <div className="mx-0 mb-2 h-1.5 w-2 mt-4 bg-[#56b4e9] rounded-2xl"></div>
              </div>
              <div className="max-w-7xl mx-auto  text-left text-2xl text-gray-400 space-y-6 mb-16 lg:mb-20 font-sans">
                <p>Regarding translation services, quality and accuracy are of the utmost importance. At VTA Global, we understand that nuances in language and cultural norms can significantly impact business communication. That's why we've created a passionate team ready to work closely with you, regardless of where you are or what you want to expand.</p>
                <p>Our end-to-end translation services are designed to provide you with the highest quality and accuracy possible. To ensure the security of your data, VTA Global is certified by the International Organization for Standardization (ISO). This certification is vital to our secure quality management system, and with our ISO 4001:2008 certification, we can demonstrate our commitment to meeting the core needs of our customers.</p>
                <p>We pride ourselves on offering a unique translation service that goes above and beyond what other translation companies can offer. Our team of certified translators is experienced in providing accurate translations of legal and personal documents, ensuring that your translations are accepted without any hassle.
                </p>
                <p>We take a personalized approach to our translation services, working closely with our clients to understand their needs and requirements. We understand that each document is unique and requires specialized attention, so we offer a range of services to cater to your needs.
                </p>
                <p>Our services are recognized by various embassies, consulates, and other institutions worldwide, ensuring that your translations are accepted without issues. We strive to deliver our services on time, within budget, and with the highest level of accuracy.
                </p>
              </div>
            </div>


            {/* Introductory Text (from image_60b4df.jpg) */}

            <div className="text-center mb-12 pt-10 lg:mb-16">
              <h2 className="text-3xl lg:text-5xl font-extrabold font-sans text-[#56b4e9] tracking-tight">
                <span className='text-[#2f486b]'>W</span>hy to choose our translation services?

              </h2>
              <div className='flex pt-0 pb-10 justify-center'>
                <div className="mx-0 mb-2 mt-4 h-1.5 w-10 bg-[#56b4e9] rounded-2xl" ></div>
                <div className="mx-0 mb-2 h-1.5 mt-4 w-2 bg-[#56b4e9] rounded-2xl"></div>
                <div className="mx-0 mb-2 h-1.5 mt-4 w-2 bg-[#56b4e9] rounded-2xl"></div>
                <div className="mx-0 mb-2 h-1.5 w-2 mt-4 bg-[#56b4e9] rounded-2xl"></div>
              </div>
              <div className="max-w-7xl mx-auto  text-left text-2xl text-gray-400 space-y-6 mb-16 lg:mb-20 font-sans">
                <p>We are committed to providing timely delivery of our translation services every time as we believe that deadlines are important. Prior to initiating your project translation, you will experience our commitment to deadlines, and failure in keeping our promise will give you 10% off each day delayed. Also, at VTA Global, we are using expert translators and current technological tools to ensure the highest quality of translation services. Also, we understand that people often change their mind, and thus we allow up to 10% change in source content with absolutely zero fees.</p>
              </div>
            </div>
          </section>
        </div>
        <TranslationProcess />
        <LanguageTranslationCountryCard />

      </section>

    </>
  );
};

export default TravelInsurancePage; // Changed export back

