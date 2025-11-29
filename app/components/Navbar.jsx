// components/Navbar.jsx
"use client"
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';



const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef(null);
  const firstServiceRef = useRef(null);
  const mobilePanelRef = useRef(null);
  const hamburgerRef = useRef(null);
  const servicesButtonRef = useRef(null);

  // Close dropdown on Escape or click outside; manage focus when opened
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') {
        if (isServicesOpen) setIsServicesOpen(false);
        if (mobileOpen) {
          setMobileOpen(false);
          // restore focus to hamburger
          hamburgerRef.current?.focus();
        }
      }
      // allow Enter/Space on Services button to toggle (handled on the button keyDown too)
    }

    function onMouseDown(e) {
      // If services dropdown is open, only close when clicking outside
      // both the dropdown panel and the Services button itself. This
      // prevents a race where the global mousedown handler fires before
      // the Services button click handler and causes the menu to reopen.
      if (
        isServicesOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        !(servicesButtonRef.current && servicesButtonRef.current.contains(e.target))
      ) {
        setIsServicesOpen(false);
      }
      if (mobileOpen && mobilePanelRef.current && !mobilePanelRef.current.contains(e.target)) {
        setMobileOpen(false);
        hamburgerRef.current?.focus();
      }
    }

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onMouseDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onMouseDown);
    };
  }, [isServicesOpen, mobileOpen]);

  // Focus the first service when the dropdown opens
  useEffect(() => {
    if (isServicesOpen) {
      // small timeout to wait for animation to complete / element to be focusable
      setTimeout(() => firstServiceRef.current?.focus(), 50);
    }
  }, [isServicesOpen]);

  // Focus first focusable in mobile panel when opened
  useEffect(() => {
    if (mobileOpen) {
      setTimeout(() => {
        const el = mobilePanelRef.current && mobilePanelRef.current.querySelector('a, button, [tabindex]');
        if (el && typeof el.focus === 'function') el.focus();
      }, 50);
    }
  }, [mobileOpen]);
  // Define the services for easy mapping
  const services = [
    { name: 'MEA Attestation', href: '/services/mea-attestation' },
    { name: 'Certified Document Translation', href: '/services/translation' },
    { name: 'Embassy Legalization', href: '/services/legalization' },
    { name: 'Visa Assistance', href: '/services/visa-assistance' },
    { name: 'Flight Bookings', href: '/services/flight-bookings' },
    { name: 'Travel Insurance', href: '/services/travel-insurance' },
  ];

  // Helper classes for custom colors (assumes Tailwind configuration)
  const primaryText = 'text-[var(--primary)]';
  const primaryFgText = 'text-[var(--primary-foreground)]';

  return (
    <>
      {/* Top Info Bar: Changed to use primary color theme */}
      <div className={`bg-blue-400 text-lg font-semibold font-sans hidden sm:block`}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-start items-center h-8">
            {/* Using primary-foreground for text color */}
            <div className={`flex items-center flex-wrap gap-x-6 ${primaryFgText}`}>
              {/* Email */}
              <Link
                href="mailto:Info@vtaglobal.in"
                className="hover:text-white transition duration-150 flex items-center gap-1 text-bold"
                aria-label="Email VTA Global"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                info@vtaglobal.in
              </Link>
              {/* Phone Numbers */}
              <div className='hidden lg:flex items-center gap-4'>
                <Link href="tel:+919911928612" className="hover:text-white transition duration-150 text-bold" aria-label="Call 9911928612">
                  <span className='mr-1'>+91</span>9911928612<span className='ml-1'>/</span>
                </Link>
                <Link href="tel:+918368032103" className="hover:text-white transition duration-150 text-bold" aria-label="Call 8368032103">
                  <span className='mr-1'>+91</span>8368032103<span className='ml-1'>/</span>
                </Link>
                <Link href="tel:+917088551500" className="hover:text-white transition duration-150 text-bold" aria-label="Call 7088551500">
                  <span className='mr-1'>+91</span>7088551500
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-white max-w-full shadow-md sticky top-0 z-30">
        <div className=" ml-4 mx-auto px-0 sm:px-2 lg:px-4">
          <div className="flex flex-wrap justify-between items-center h-27">

            {/* --- LOGO SECTION MODIFIED HERE --- */}
            <div className="shrink-0 ml-4 lg:ml-0 flex items-center gap-4">

              {/* 2VTA SVG Logo beside the text logo */}
              <Link href="/" className=''>
                <img
                  src="/main-vta.svg"
                  alt="VTA Global Logo"
                  className="h-24 w-40 sm:h-28 sm:w-70 object-contain pb-4 ml-5 p-2"
                />
              </Link>
            </div>
            {/* --- END OF LOGO SECTION MODIFICATION --- */}

            {/* Navigation Links and Contact Button - Right (Desktop) */}
            <div className="pr-4 pt-2 hidden md:flex items-center space-x-2 lg:space-x-8">

              <Link href="/" passHref>
                <span
                  className={`text-(--color-text-main) hover:text-(--primary)  px-3 py-2 text-2xl font-bold transition duration-150`}>
                  Home
                </span>
              </Link>

              <Link href="/about" passHref>
                <span

                  className={`text-(--color-text-main) hover:text-(--primary) px-3 py-2 text-2xl font-bold transition duration-150`}>
                  About Us
                </span>
              </Link>

              {/* Services Dropdown (desktop) */}
              <div className="relative">
                <button
                  ref={servicesButtonRef}
                  onClick={() => setIsServicesOpen((s) => !s)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setIsServicesOpen((s) => !s);
                    }
                  }}
                  className={`text-(--color-text-main) hover:text-(--primary) px-3 py-2 text-2xl font-bold flex items-center transition duration-150 rounded-full hover:bg-slate-50`}
                  aria-expanded={isServicesOpen}
                  aria-haspopup="menu"
                >
                  Services
                  <svg className={`ml-2 w-4 h-4 transform transition-transform ${isServicesOpen ? `rotate-180 ${primaryText}` : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-0 mt-3 w-86 bg-white rounded-2xl shadow-2xl ring-2 ring-[#2f486b] ring-opacity-5 z-40 overflow-hidden"
                      role="menu"
                      ref={dropdownRef}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <div className="p-4">
                        {/* heading removed as requested */}
                        <div className="grid grid-cols-1 gap-2">
                          {services.map((service, idx) => (
                            <motion.a
                              key={service.name}
                              href={service.href}
                              onClick={() => setIsServicesOpen(false)}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.03 }}
                              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#e3e7e9] text-[#2f486b] text-xl font-semibold font-sans"
                              role="menuitem"
                              ref={idx === 0 ? firstServiceRef : undefined}
                              tabIndex={0}
                            >
                              <span>{service.name}</span>
                            </motion.a>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact Us Button: Uses primary color scheme */}
              <Link href="/contact" passHref>
                <span
                  className=" text-(--color-text-main) px-5 py-2.5 text-2xl font-bold transition duration-150 transform hover:scale-105 hover:text-blue-600">
                  Contact Us
                </span>
              </Link>

              {/* Phone icon at the end */}
              <Link
                href="tel:+919911928612"
                className="flex items-center justify-center ml-7 p-2 text-(--color-text-main) hover:text-blue-600 transition-colors rounded-full hover:bg-blue-50"
                aria-label="Call us"
              >
                <svg
                  className="w-9 h-9"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </Link>

            </div>

            {/* Mobile Menu Button (Hamburger) */}
            <div className="md:hidden sticky top-0">
              <button
                ref={hamburgerRef}
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className="p-2 rounded-md sticky top-0 bg-white/80 backdrop-blur-sm shadow-sm"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              <AnimatePresence>
                {mobileOpen && (
                  <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="fixed inset-0 z-50 bg-white p-6 overflow-auto"
                    role="dialog"
                    aria-modal="true"
                    ref={mobilePanelRef}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="shrink-0 ml-4 lg:ml-0 flex items-center gap-4">

                        {/* 2VTA SVG Logo beside the text logo */}
                        <Link href="/" className=''>
                          <img
                            src="/main-vta.svg"
                            alt="VTA Global Logo"
                            className="h-20 w-40 sm:h-28 sm:w-60 object-contain "
                          />
                        </Link>
                      </div>
                      <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="p-2 rounded-md">
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    <nav className="space-y-4">
                      <Link href="/" onClick={() => setMobileOpen(false)} className="block text-lg font-semibold text-gray-800">Home</Link>
                      <Link href="/about" onClick={() => setMobileOpen(false)} className="block text-lg font-semibold text-gray-800">About Us</Link>
                      <Link href="/contact" onClick={() => setMobileOpen(false)} className="block text-lg font-semibold text-gray-800">Contact Us</Link>
                      <div>
                        <div className="font-semibold text-gray-800 mb-2">Services</div>
                        <div className="space-y-1">
                          {services.map((s) => (
                            <Link key={s.name} href={s.href} onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-md hover:bg-slate-50">{s.name}</Link>
                          ))}
                        </div>
                      </div>


                    </nav>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

