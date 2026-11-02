import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = PORTFOLIO_DATA.testimonials;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-14 sm:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <span className="text-[#ff5520] font-bold text-xs uppercase tracking-widest block mb-2">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-950">
            Trusted by Great Clients<span className="text-[#ff5520]">.</span>
          </h2>
        </div>

        {/* Carousel Container with Left/Right Arrow Buttons */}
        <div className="relative">
          {/* Desktop & Tablet Navigation Controls */}
          <button
            onClick={handlePrev}
            aria-label="Previous Testimonials"
            className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-gray-200/90 text-gray-700 hover:text-[#ff5520] hover:border-[#ff5520] shadow-md flex items-center justify-center transition-all focus:outline-hidden"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={handleNext}
            aria-label="Next Testimonials"
            className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-gray-200/90 text-gray-700 hover:text-[#ff5520] hover:border-[#ff5520] shadow-md flex items-center justify-center transition-all focus:outline-hidden"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={t.id}
                className={`bg-gradient-to-b from-[#fef5ee] to-white rounded-3xl p-6 sm:p-7 border border-orange-100/90 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-orange-300 ${
                  idx === currentIndex ? 'ring-2 ring-[#ff5520]/20' : ''
                }`}
              >
                <div>
                  {/* 5 Orange Stars */}
                  <div className="flex gap-1 text-[#ff5520] mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#ff5520]" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-800 text-sm sm:text-base font-medium leading-relaxed mb-6">
                    "{t.quote}"
                  </blockquote>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-orange-100/60">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-10 h-10 rounded-full object-cover border border-orange-200"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-gray-950">{t.author}</h4>
                    <p className="text-xs text-gray-500 font-medium">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
