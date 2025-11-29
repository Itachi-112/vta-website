import React from 'react'
import Image from 'next/image' 
import Link from 'next/link'
import AboutHero from '../components/AboutHero'
import ChooseUs from '../components/ChooseUs'

const page = () => {
  return (
    <>


    

    
     <section className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
        
        {/* Background Image using Next.js Image component */}
        <Image
          src="/contacthero.png" // Using the original image path as requested
          alt="MEA Attestation services"
          fill
          sizes="100vw"
          quality={100}
          priority={true}
          className="brightness-50 opacity-90 object-cover"
        />

        {/* Content Container */}
        <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Left-aligned Text Column */}
          <div className="max-w-xl text-left space-y-4">
            
            {/* Main Title - UPDATED */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight">
              <span className="block text-white">About </span> 
              <span className="block text-[#54b6e9] drop-shadow-lg">VTA Global</span>
            </h1>
           <p className="text-lg sm:text-xl text-gray-200 drop-shadow-md max-w-md">
              At VTA Global, we make your dream vacation happen..
            </p>

            
            {/* Breadcrumb - UPDATED */}
            <div className="pt-2">
              <div className="inline-flex items-center justify-center rounded-full bg-[#54b6e9] px-6 py-3 text-white font-semibold shadow-xl hover:bg-blue-700 transition transform hover:scale-105 mt-6">
                
                {/* Using Link component as requested */}
                <Link href="/" passHref className="text-white hover:text-blue-300 transition">
                  Home
                </Link>
                <span className="text-white mx-2">/</span>
               
                <span className="font-bold">About Us</span>
              </div>
            </div>
          </div>
          
        </div>
      </section>


      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-3xl lg:text-7xl font-extrabold font-sans text-[#54b6e9] tracking-tight">
              <span className='text-[#2f486b]'>A</span>bout Us
            </h1>
            <div className='flex pt-0 pb-10 justify-center'>
              <div className="mx-0 mb-2 mt-4 h-1.5 w-10 bg-[#54b6e9] rounded-2xl" ></div>
              <div className="mx-0 mb-2 h-1.5 mt-4 w-2 bg-[#54b6e9] rounded-2xl"></div>
              <div className="mx-0 mb-2 h-1.5 mt-4 w-2 bg-[#54b6e9] rounded-2xl"></div>
              <div className="mx-0 mb-2 h-1.5 w-2 mt-4 bg-[#54b6e9] rounded-2xl"></div>
            </div>

            <div className="max-w-7xl mx-auto text-left text-3xl text-gray-400 space-y-6 mb-16 lg:mb-20 font-sans">
              <p>
                <span className="text-[#54b6e9] font-bold">VTA Global</span> is a <span className="text-[#54b6e9] font-semibold">trusted global service provider</span> specializing in <span className="text-[#54b6e9] font-semibold">travel solutions</span>, <span className="text-[#54b6e9] font-semibold">visa assistance</span>, and <span className="text-[#54b6e9] font-semibold">professional document attestation</span> for individuals, businesses, and institutions around the world. With a commitment to <span className="text-[#54b6e9] font-semibold">efficiency</span>, <span className="text-[#54b6e9] font-semibold">reliability</span>, and <span className="text-[#54b6e9] font-semibold">customer satisfaction</span>, we help our clients navigate complex international requirements with complete confidence.
              </p>

              <p>
                Our services cover <span className="text-[#54b6e9] font-semibold">visa processing</span>, <span className="text-[#54b6e9] font-semibold">travel consulting</span>, document attestation by <span className="text-[#54b6e9] font-semibold">MEA</span>, <span className="text-[#54b6e9] font-semibold">Embassy legalization</span>, <span className="text-[#54b6e9] font-semibold">MOFA attestation</span>, <span className="text-[#54b6e9] font-semibold">HRD and university verification</span>, <span className="text-[#54b6e9] font-semibold">apostille services</span>, and more—ensuring that every step of your international journey is simple, secure, and stress-free.
              </p>

              <p>
                Backed by a team of experienced professionals, a strong global network, and a deep understanding of international compliance regulations, <span className="text-[#54b6e9] font-semibold">VTA Global</span> stands as a <span className="text-[#54b6e9] font-semibold">one-stop destination</span> for all travel and document authentication needs.
              </p>

              <p>
                We pride ourselves on delivering <span className="text-[#54b6e9] font-semibold">transparent processes</span>, <span className="text-[#54b6e9] font-semibold">timely service</span>, and <span className="text-[#54b6e9] font-semibold">personalized support</span>, making us the preferred partner for students, working professionals, travelers, and corporate clients worldwide.
              </p>
            </div>
          </div>

        </div>
        <AboutHero/>
        <ChooseUs/>
      </section>
      
    </>
  )
}

export default page