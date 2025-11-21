import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden font-sans">
      {/* Background Image */}
      {/* Using a high-quality Unsplash placeholder that matches the 'blue skyline' vibe of your reference */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/1234.png"
          alt="City Skyline"
          className="w-full h-full object-cover"
        />
        {/* Blue Overlay - This creates the blue tint seen in your image */}
        <div className="absolute inset-0 bg-slate-90/70 mix-blend-multiply" />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/50 via-transparent to-slate-900/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full text-center px-4 sm:px-6 lg:px-8">
        
        {/* Animated fade-in container */}
        <div className="space-y-2 animate-fade-in-up">
          
          {/* Company Name VTA - Made Prominent */}
          <h1 className="text-sky-400 tracking-widest text-6xl md:text-8xl font-extrabold uppercase mb-0 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]">
        
          </h1>

          {/* Main Heading "GLOBAL" */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight leading-none drop-shadow-lg">
            
          </h1>

          {/* Subheading "Services LLP" */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-sky-200 tracking-wide drop-shadow-md">
            
          </h2>
        </div>

        {/* Description / Tagline (Optional, based on standard hero practices) */}
        
      </div>

      {/* Decorative Element (Bottom Right Sparkle/Star from your image) */}
     
    </div>
  );
};

export default Hero;