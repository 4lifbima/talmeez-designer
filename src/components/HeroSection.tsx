import React from 'react';
import { ArrowRight, Send } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenContact: () => void;
  onScrollToWork: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact, onScrollToWork }) => {
  const { badge, heroTitle, heroHighlight, heroDescription, avatar } = PORTFOLIO_DATA.designer;

  return (
    <section id="home" className="pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-gray-200/90 shadow-xs mb-6 sm:mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff5520] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff5520]"></span>
              </span>
              <span className="text-[11px] sm:text-xs font-bold tracking-wider text-gray-800 uppercase">
                {badge}
              </span>
              <Send className="w-3.5 h-3.5 text-[#ff5520] transform rotate-45 ml-0.5" />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold text-gray-950 tracking-tight leading-[1.08] max-w-xl">
              Design That{' '}
              <span className="text-[#ff5520]">{heroHighlight}</span>{' '}
              Brands.
            </h1>

            {/* Subheading */}
            <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-lg leading-relaxed font-normal">
              {heroDescription}
            </p>

            {/* Actions Row */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-5 sm:gap-6">
              {/* Primary View My Work Button */}
              <button
                onClick={onScrollToWork}
                className="group bg-[#ff5520] hover:bg-[#e04414] text-white font-medium pl-6 pr-2.5 py-3 rounded-full flex items-center gap-3 transition-all duration-200 shadow-lg shadow-orange-500/25 active:scale-95 cursor-pointer"
              >
                <span className="text-sm font-semibold">View My Work</span>
                <span className="w-7 h-7 rounded-full bg-white/20 text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>

              {/* Secondary Hire Me Button */}
              <button
                onClick={onOpenContact}
                className="group text-gray-900 hover:text-[#ff5520] font-semibold text-sm sm:text-base flex items-center gap-1.5 transition-colors py-2 px-1 cursor-pointer"
              >
                <span>Hire Me</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          {/* Right Visual Column (Portrait with Orange Backdrop from reference) */}
          <div className="lg:col-span-5 relative flex justify-center items-center mt-6 lg:mt-0">
            <div className="relative w-full max-w-[340px] sm:max-w-[390px] flex items-center justify-center">
              {/* Subtle ambient light aura behind */}
              <div className="absolute inset-8 bg-[#ff5520]/15 rounded-full blur-3xl -z-10 pointer-events-none" />

              {/* Designer Photo */}
              <img
                src={avatar}
                alt="alifbima - Brand and UI/UX Designer"
                className="w-full h-auto object-contain filter drop-shadow-xl"
                loading="eager"
              />

              {/* Floating Stat Badge in exact position from reference */}
              <div className="absolute bottom-8 left-0 sm:-left-3 bg-white/95 border border-gray-200/90 rounded-2xl px-3.5 py-2 shadow-lg flex flex-col justify-center items-center backdrop-blur-xs text-center z-20">
                <span className="text-lg font-extrabold text-gray-950 leading-none">5+</span>
                <span className="text-[9px] font-bold text-gray-500 uppercase tracking-tighter mt-0.5 leading-tight">
                  Years of<br />Experience
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
