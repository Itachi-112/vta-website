// components/ServicesProvided.jsx
import Image from 'next/image';
import Link from 'next/link'; // Import Next.js Link for navigation

export default function ServicesProvided() {
  const services = [
    {
      id: 1,
      name: "MEA Attestation",
      imageSrc: "/attestation.jpeg", // Placeholder image
      link: "/services/mea-attestation", // Link to the specific service page
    },
    {
      id: 2,
      name: "Certified Document Translation",
      imageSrc: "/dctrans.png", // Placeholder image
      link: "/services/translation",
    },
    {
      id: 3,
      name: "Embassy Legalization",
      imageSrc: "/embassy.webp", // Placeholder image
      link: "/services/legalization",
    },
    {
      id: 4,
      name: "Visa Assistance",
      imageSrc: "/visa-assistance.png", // Placeholder image
      link: "/services/visa-assistance",
    },
    {
      id: 5,
      name: "Flight Bookings",
      imageSrc: "/flightbooking.jpeg", // Placeholder image
      link: "/services/flight-bookings",
    },
    {
      id: 6,
      name: "Travel Insurance",
      imageSrc: "/travel.jpeg", // Placeholder image
      link: "/services/travel-insurance",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="mx-auto max-w-7xl text-center">
        {/* Main Heading */}
        <h2 className="mb-8  mt-10 text-7xl font-extrabold font-sans text-[#56b4e9] ">
          <span className='text-[#2F486B]'>S</span>ervices we provide..
           <div className='flex pt-3 pb-10 justify-center'>
        <div className="mx-0 mb-0 h-1.5 w-10 bg-[#56b4e9] rounded-2xl" ></div>
        <div className="mx-0 mb-0 h-1.5 w-2 bg-[#56b4e9] rounded-2xl"></div>
        <div className="mx-0 mb-0 h-1.5 w-2 bg-[#56b4e9] rounded-2xl"></div>
        <div className="mx-0 mb-0 h-1.5 w-2 bg-[#56b4e9] rounded-2xl"></div>
        </div>
        </h2>

        {/* Grid for Service Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link href={service.link} key={service.id} passHref>
              <div
                className="group relative flex h-64 w-full cursor-pointer flex-col justify-end overflow-hidden rounded-lg bg-gray-50 p-6 shadow-lg 
                           transition-all duration-300 ease-in-out
                           hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]" // Hover 3D effect
              >
                {/* Image Placeholder with optional overlay */}
                <Image
                  src={service.imageSrc}
                  alt={service.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-105 object-cover" // Image scales on hover
                />
                <div
                  className="absolute inset-0 z-10 bg-linear-to-t from-black/30 via-black/1 to-transparent
                             transition-opacity duration-300 group-hover:from-black/20 group-hover:via-black/40" // Gradient overlay
                ></div>

                {/* Service Name (Text Button) */}
                <h3 className="relative z-20 text-left text-3xl font-bold font-sans text-gray-50">
                  {service.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}