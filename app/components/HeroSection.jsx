import React from 'react';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative bg-white overflow-hidden font-sans">
      {/* 1. BACKGROUND: High-quality travel image with a modern gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/70 to-blue-900/40 z-10"></div>
        {/* You can replace this URL with your own local image path if preferred */}
        <div 
          className="w-full h-full bg-cover bg-center transform scale-105"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop')" }}
        ></div>
      </div>

      {/* 2. CONTENT CONTAINER */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen min-h-[600px] flex items-center">
        <div className="max-w-3xl">
          
          {/* Trust Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-8 animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-blue-50 text-xs font-bold tracking-wide uppercase">ISO Pending Certified</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-lg">
            Global Travel <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-200 to-cyan-200">
              Made Simple.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed font-light border-l-4 border-blue-500 pl-6">
            Your trusted partner for MEA Attestation, Visa Stamping, and Translation Services. We handle the paperwork so you can focus on the journey.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="tel:+918368032103" 
              className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-900 bg-white rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
          
          </div>

          {/* Trust Indicators (Simple List) */}
          <div className="mt-12 flex flex-wrap gap-y-3 gap-x-8 text-sm font-medium text-blue-100/80">
            <div className="flex items-center">
              <CheckCircle2 className="w-5 h-5 mr-2 text-green-400" />
              <span>99.9% Success Rate</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="w-5 h-5 mr-2 text-green-400" />
              <span>Express Processing</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="w-5 h-5 mr-2 text-green-400" />
              <span>24/7 Expert Support</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;