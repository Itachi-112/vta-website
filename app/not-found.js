'use client';

import Link from 'next/link';
import { Home, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md sm:max-w-lg text-center space-y-8">
        {/* 404 Number */}
        <div className="space-y-4">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-blue-400">
            404
          </h1>
          <div className="h-1 w-20 mx-auto bg-linear-to-r from-blue-600 to-blue-400 rounded-full"></div>
        </div>

        {/* Heading and Description */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Page Not Found
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Oops! It seems the page you're looking for has wandered off to another destination. Let us help you find your way back.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 sm:space-y-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-linear-to-r from-blue-600 to-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-600 transition-all transform hover:scale-105 shadow-lg"
          >
            <Home className="w-5 h-5" />
            <span className="text-base sm:text-lg">Go Back Home</span>
          </Link>

          <Link
            href="/services/mea-attestation"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all"
          >
            <span className="text-base sm:text-lg">Explore Services</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Quick Links */}
        <div className="pt-8 border-t border-gray-300">
          <p className="text-sm text-gray-500 mb-4">Popular Pages:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
            {[
              { name: 'Home', href: '/' },
              { name: 'About', href: '/about' },
              { name: 'Services', href: '/services/mea-attestation' },
              { name: 'Contact', href: '/contact' },
              { name: 'Visa Help', href: '/services/visa-assistance' },
              { name: 'Travel Info', href: '/services/travel-insurance' },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm sm:text-base text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Footer Message */}
        <div className="pt-4 text-xs sm:text-sm text-gray-500">
          <p>Need help? <Link href="/contact" className="text-blue-600 hover:underline font-semibold">Contact us</Link></p>
        </div>
      </div>
    </div>
  );
}
