// components/ContactPageContent.jsx

import Link from "next/link";
import React from "react";

const ContactPageContent = () => {
    // Icons are defined as simple SVG paths for inline use (similar to your previous request)
    const IconMapPin = (props) => (
        <svg className="w-5 h-5 text-sky-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.899a2 2 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    );
    const IconPhone = (props) => (
        <svg className="w-5 h-5 text-sky-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
    );
    const IconMail = (props) => (
        <svg className="w-5 h-5 text-sky-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    );
    const IconClock = (props) => (
        <svg className="w-5 h-5 text-sky-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );
    const IconGlobe = (props) => (
        <svg className="w-5 h-5 text-sky-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9c-.161 0-.32 0-.476.014L3 12h18z" />
        </svg>
    );

    return (
        <div className="bg-gray-50 py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white font-sans rounded-xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

                    {/* LEFT COLUMN: Contact Information */}
                    <div className="p-8 sm:p-12 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                Contact Us
                            </h2>
                            <p className="text-lg text-gray-600">
                                Have questions about studying abroad? Need guidance on university applications, visas, or scholarships? Our expert consultants are here to help!
                            </p>
                        </div>

                        {/* Contact Details Grid */}
                        <div className="space-y-6 text-gray-700">

                            {/* Office Address */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-3 font-semibold text-gray-900">
                                    <IconMapPin />
                                    <span>Office Address</span>
                                </div>
                                <p className="ml-8">
                                    VTA Global Services LLP,
                                    B-204 Rg complex ,
                                    next to Novotel Hotel,
                                    D.B gupta road ,Paharganj,
                                    New delhi -110055, India   
                                </p>
                            </div>

                            {/* Phone Numbers */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-3 font-semibold text-gray-900">
                                    <IconPhone />
                                    <span>Phone Numbers</span>
                                </div>
                                <p className="ml-8 flex flex-col sm:flex-row sm:gap-4">
                                    <a href="tel:+919911928612" className="hover:text-sky-600">+91-9911928612</a>
                                    <a href="tel:+918368032103" className="hover:text-sky-600">+91-8368032103</a>
                                    <a href="tel:+917088551500" className="hover:text-sky-600">+91-7088551500</a>
                                </p>
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-3 font-semibold text-gray-900">
                                    <IconMail />
                                    <span>Email</span>
                                </div>
                                <Link href="mailto:info@vtaglobal.in" className="ml-8 hover:text-sky-600">info@vtaglobal.in</Link>
                            </div>

                            {/* Website */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-3 font-semibold text-gray-900">
                                    <IconGlobe />
                                    <span>Website</span>
                                </div>
                                <a href="http://www.vtaglobal.in" target="_blank" rel="noopener noreferrer" className="ml-8 hover:text-sky-600">www.vtaglobal.in</a>
                            </div>

                            {/* Office Hours */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-3 font-semibold text-gray-900">
                                    <IconClock />
                                    <span>Office Hours</span>
                                </div>
                                <p className="ml-8">
                                    Monday - Saturday | 9:30 AM - 7:00 PM
                                </p>
                            </div>
                        </div>

                        {/* Follow Us/Social Media */}
                        <div className="pt-4 space-y-2">
                            <h4 className="text-lg font-semibold font-sans text-gray-900">Take your first steps towards a beautiful journey..</h4>
                            <p className="text-sm text-gray-600">Stay updated with the latest news, trips, and events!</p>
                        </div>

                        {/* CTA Button */}
                        <a href="tel:+918368032103" className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-[#56b4e9] px-6 py-3 text-white font-semibold shadow-md hover:bg-indigo-600 transition">
                            Contact Us & Start Your Abroad Journey Today!
                        </a>
                    </div>

                    {/* RIGHT COLUMN: Google Map */}
                    <div className="w-full h-80 lg:h-auto">

           
            
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2067.577252528589!2d77.2069013228301!3d28.64705825904289!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd0062a8a0b5%3A0xb483d2242f1f1d37!2sVTA%20Global%20Services%20LLP!5e0!3m2!1sen!2sin!4v1763737162278!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            aria-label="Google Map location of the office"
                        ></iframe>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactPageContent;