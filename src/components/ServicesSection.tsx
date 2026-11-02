import React from 'react';
import { ArrowUpRight, Globe, Layers, LayoutGrid, PenTool } from 'lucide-react';
import { PORTFOLIO_DATA, Service } from '../data/portfolioData';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (type: Service['icon']) => {
    switch (type) {
      case 'pen':
        return <PenTool className="w-5 h-5 text-white" />;
      case 'globe':
        return <Globe className="w-5 h-5 text-white" />;
      case 'layout':
        return <LayoutGrid className="w-5 h-5 text-white" />;
      case 'anchor':
        return <Layers className="w-5 h-5 text-white" />;
      default:
        return <PenTool className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="services" className="py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Dark Container */}
        <div className="bg-[#121316] rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 md:p-12 text-white shadow-2xl relative overflow-hidden border border-white/5">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff5520]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
            <div>
              <span className="text-[#ff5520] font-bold text-xs uppercase tracking-widest block mb-2">
                SERVICES
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                What I Do<span className="text-[#ff5520]">.</span>
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed flex items-center gap-2">
                <span>Design solutions that are user-focused, strategy-driven and visually powerful.</span>
                <span className="text-white text-base">→</span>
              </p>
            </div>
          </div>

          {/* 4 Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-8">
            {PORTFOLIO_DATA.services.map((service) => (
              <div
                key={service.id}
                onClick={() => onSelectService(service.title)}
                className="group cursor-pointer bg-[#1b1d22] hover:bg-[#232730] border border-white/5 hover:border-[#ff5520]/30 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40"
              >
                <div>
                  {/* Icon Badge */}
                  <div className="w-11 h-11 rounded-xl bg-[#ff5520] flex items-center justify-center mb-6 shadow-md shadow-orange-600/30 group-hover:scale-105 transition-transform">
                    {getIcon(service.icon)}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-[#ff5520] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Action Arrow */}
                <div className="mt-8 pt-4 flex justify-end">
                  <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#ff5520] text-white flex items-center justify-center transition-all duration-200">
                    <ArrowUpRight className="w-4 h-4" />
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
