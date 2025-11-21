'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LuQuote, LuChevronLeft, LuChevronRight } from 'react-icons/lu';

// Updated testimonials with Indian names and context
const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Software Engineer",
    location: "Bangalore",
    text: "VTA Global handled my document attestation for UAE employment perfectly. Their process was efficient and professional throughout."
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Medical Professional",
    location: "Mumbai",
    text: "Getting my medical certificates attested was crucial for my career abroad. VTA Global made it incredibly simple and fast."
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Business Owner",
    location: "Ahmedabad",
    text: "Their visa assistance service is outstanding. They handled all documentation for my business expansion to Dubai with great expertise."
  },
  {
    id: 4,
    name: "Meera Reddy",
    role: "International Student",
    location: "Hyderabad",
    text: "The team at VTA Global ensured my educational documents were properly attested for my studies abroad. Highly recommend their services!"
  },
  {
    id: 5,
    name: "Suresh Verma",
    role: "IT Professional",
    location: "Delhi",
    text: "Fast, reliable, and professional service. They helped me with document translation and attestation for my work visa seamlessly."
  },
  {
    id: 6,
    name: "Anita Desai",
    role: "Healthcare Professional",
    location: "Chennai",
    text: "The attention to detail in document translation was impressive. VTA Global's team was supportive throughout the process."
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(timer);
  }, []);

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="bg-gray-50 to-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-4xl font-extrabold text-[#56b4e9] md:text-7xl font-sans">
            <span className='text-[#2F486B]'>C</span>lient Testimonials..
          </h2>
          
        </div>

        <div className="relative max-w-9xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-16 z-10 bg-gray-100 p-3 rounded-full shadow-lg hover:bg-gray-50 transition-all duration-200 border border-gray-200"
            aria-label="Previous testimonial"
          >
            <LuChevronLeft className="w-6 h-6 text-[#56b4e9]" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-16 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-all duration-200 border border-gray-200"
            aria-label="Next testimonial"
          >
            <LuChevronRight className="w-6 h-6 text-[#56b4e9]" />
          </button>

          {/* Testimonials Carousel */}
          <div className="relative h-[400px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute w-full"
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 mx-4 sm:mx-auto">
                  <div className="flex justify-center mb-8">
                    <div className="bg-[#56b4e9] rounded-full p-3">
                      <LuQuote className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <blockquote className="text-center">
                    <p className="text-2xl text-gray-700 font-bold mb-8 leading-relaxed">
                      "{testimonials[currentIndex].text}"
                    </p>
                    
                    <footer className="mt-8">
                      <div className="font-bold text-xl text-gray-900 mb-2">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-[#050d0e] font-semibold">
                        {testimonials[currentIndex].role}
                      </div>
                      <div className="text-gray-900 text-sm mt-1 font-semibold">
                        {testimonials[currentIndex].location}
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}