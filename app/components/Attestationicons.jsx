// components/AttestationVisaServices.jsx

import {
  FileText, // For documents in general
  GraduationCap, // For educational certificates
  Building2, // For commercial/company documents
  HeartHandshake, // For marriage certificates
  Fingerprint, // For birth/death certificates (personal docs)
  ScrollText, // For legal/affidavit documents
  Plane, // General for visa/travel
  Briefcase, // For work/employment visa
  BookUser, // For dependent/family visa
  Handshake, // For business visa
  MessageSquareMore, // For interview/consultation
  CheckCircle, // For application processing/approval
} from "lucide-react";

export default function AttestationVisaServices() {
  // Data for the services and their icons
  const attestationServices = [
    { name: "Educational Certificates", icon: GraduationCap },
    { name: "Personal Documents", icon: Fingerprint },
    { name: "Commercial Documents", icon: Building2 },
    { name: "Marriage Certificates", icon: HeartHandshake },
    { name: "Birth/Death Certificates", icon: FileText }, // FileText as a general document
    { name: "Legal/Affidavit Services", icon: ScrollText },
  ];

  const visaServices = [
    { name: "Visa Consultation", icon: MessageSquareMore },
    { name: "Work Visa Assistance", icon: Briefcase },
    { name: "Business Visa", icon: Handshake },
    { name: "Family/Dependent Visa", icon: BookUser },
    { name: "Tourist Visa", icon: Plane }, // Plane for general travel/tourism
    { name: "Application Processing", icon: CheckCircle },
  ];

  return (
    <section  className="bg-gray-50 py-16 px-6">
      <div className="mx-auto max-w-7xl text-center">
        {/* Main Heading */}
        <h1 className="mb-4 text-4xl font-extrabold font-sans text-[#56b4e9] md:text-7xl">
          <span className='text-[#2F486B]'>C</span>ertified MEA Attestation and Visa Services
        </h1>

        {/* Sub-heading/Description */}
        <p className="mb-16 text-xl font-sans text-gray-600 opacity-90">
          We provide unmatched MEA attestation and Visa Services for various needs.
        </p>

        {/* Icons Grid Container */}
        <div className="space-y-12"> {/* Space between the two rows */}
          {/* Attestation Services Row */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {attestationServices.map((service, index) => (
              <div key={`attest-${index}`} className="flex flex-col items-center">
                <div className=" hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-in-out flex h-24 w-24 items-center justify-center rounded-full border-[#2F486B] border-8 bg-white shadow-lg md:h-31 md:w-31">
                  <service.icon 
                  className="h-12 w-12 text-[#2F486B] md:h-16 md:w-16" />
                </div>
                <p className="mt-5 text-center text-lg font-bold font-sans text-[#2F486B] md:text-base">
                  {service.name}
                </p>
              </div>
            ))}
          </div>

          {/* Visa Services Row */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {visaServices.map((service, index) => (
              <div key={`visa-${index}`} className="  flex flex-col items-center">
                <div className=" hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-in-out flex h-24 w-24 items-center justify-center rounded-full border-[#2F486B] border-8 bg-white shadow-lg md:h-31 md:w-31">
                  <service.icon className="h-12 w-12 text-[#2F486B] md:h-16 md:w-16" />
                </div>
                <p className="mt-4 text-center text-lg font-bold font-sans text-[#2F486B] md:text-base">
                  {service.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* "View All" Button */}
        
      </div>
    </section>
  );
}