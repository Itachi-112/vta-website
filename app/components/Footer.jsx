import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram, Home, Info, Headphones, FileText, CheckCircle, Plane, Shield, ChevronRight } from 'lucide-react';
import Link from 'next/link';


/**
 * A modern, responsive footer component for VTA GLOBAL SERVICES LLP.
 * Uses Tailwind CSS and lucide-react for icons.
 */
const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About Us', href: '/about', icon: Info },
    { name: 'Contact Us', href: '/contact', icon: Headphones },
  
  ];

  const services = [
    { name: 'MEA Attestation', href: '/services/mea-attestation', icon: CheckCircle },
    { name: 'Certified Documents Translation', href: '/services/translation', icon: FileText },
    { name: 'Embassy Legalization', href: '/services/legalization', icon: CheckCircle },
    { name: 'Visa Assistance', href: '/services/visa-assistance', icon: Headphones },
    { name: 'Flight Bookings', href: '/services/flight-bookings', icon: Plane },
    { name: 'Travel Insurance', href: '/services/travel-insurance', icon: Shield },
  ];

  return (
    <footer className="bg-linear-to-b from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6">
            
            {/* Company Info - Takes up 5 columns on large screens */}
            <div className="lg:col-span-3 space-y-8">
              {/* Logo with proper sizing */}
              <div className="inline-block">
                <div className="shrink-0 lg:ml-0 flex items-center gap-4">
             
              {/* 2VTA SVG Logo beside the text logo */}
              <Link href="/" className=''>
                <img 
                  src="/main-vta.svg" 
                  alt="VTA Global Logo"
                  className="h-24 w-40 sm:h-24 sm:w-70 object-contain"
                />
              </Link>
            </div>
              </div>
              
              {/* Mission Statement */}
              <p className="text-lg text-gray-700 leading-relaxed">B2B Visa Facilitation & Document Attestation Services</p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Take your first steps towards a beautiful journey. Stay updated with the latest news, trips, and events!
              </p>
                {/* Social links (first column bottom) */}
                <div className="mt-6 flex items-center gap-4 justify-center md:justify-start">
                  <a href="#" aria-label="Facebook" className="text-gray-700 hover:text-blue-700 transition-colors">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" aria-label="Twitter" className="text-gray-700 hover:text-blue-700 transition-colors">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="#" aria-label="LinkedIn" className="text-gray-700 hover:text-blue-700 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="#" aria-label="Instagram" className="text-gray-700 hover:text-blue-700 transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
            </div>

            {/* Quick Links & Services - 7 columns split into 3 sections */}
            <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              
              {/* Quick Links Section */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-[#2f486b]">Quick Links</h3>
                <ul className="space-y-3">
                  {quickLinks.map((link) => {
                    const IconComponent = link.icon;
                    return (
                      <li key={link.name}>
                        <Link 
                          href={link.href}
                          className="flex items-center gap-2 text-lg text-gray-700 hover:text-blue-700 transition-colors duration-200 group pb-1 border-b-2 border-gray-700 hover:border-blue-700"
                        >
                          <span>{link.name}</span>
                          <ChevronRight className="w-4 h-4 shrink-0 text-gray-700 group-hover:text-blue-700 transition-all group-hover:translate-x-1" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Services Section */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-[#2f486b]">Our Services</h3>
                <ul className="space-y-3">
                  {services.map((service) => {
                    const IconComponent = service.icon;
                    return (
                      <li key={service.name}>
                        <Link 
                          href={service.href}
                          className="flex items-center gap-2 text-lg text-gray-700 hover:text-blue-700 transition-colors duration-200 group pb-1 border-b-2 border-gray-700 hover:border-blue-700"
                        >
                          <span>{service.name}</span>
                          <ChevronRight className="w-4 h-4 shrink-0 text-gray-700 group-hover:text-blue-700 transition-all group-hover:translate-x-1" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Contact Info Section */}
              <div className="space-y-6 sm:col-span-2 lg:col-span-1">
                <h3 className="text-xl ml-7 font-bold text-[#2f486b]">Get in Touch</h3>
                <ul className="space-y-2">
                  <li className="flex gap-3">
                    <MapPin className="w-6 h-6 text-blue-700 shrink-0 mt-1" />
                    <span className="text-lg font-sans text-gray-700">
                      VTA Global Services LLP, <p></p>B-204 RG complex, Next to Novotel Hotel, opp Deshbandu Gupta Road, Paharganj, New Delhi -110055, India
                    </span>
                  </li>
                  
                  <li className="space-y-3">
                    <div className="flex gap-3">
                      <Phone className="w-6 h-6 text-blue-700 shrink-0" />
                      <div className="space-y-1">
                        <a href="tel:+919911928612" className="block text-lg font-sans text-gray-700 hover:text-blue-700 transition-colors">
                          +91-9911928612
                        </a>
                        <a href="tel:+918368032103" className="block text-lg font-sans text-gray-700 hover:text-blue-700 transition-colors">
                          +91-8368032103
                        </a>
                        <a href="tel:+917088551500" className="block font-sans text-lg text-gray-700 hover:text-blue-700 transition-colors">
                          +91-7088551500
                        </a>
                      </div>
                    </div>
                  </li>

                  <li className="flex gap-3">
                    <Mail className="w-6 h-6 text-blue-700 shrink-0" />
                    <a href="mailto:info@vtaglobal.in" className="text-lg font-sans text-gray-700 hover:text-blue-700 transition-colors">
                      info@vtaglobal.in
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="py-6 border-t border-gray-200">
          <p className="text-center text-lg text-gray-700">
            &copy; {new Date().getFullYear()} VTA GLOBAL SERVICES LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

