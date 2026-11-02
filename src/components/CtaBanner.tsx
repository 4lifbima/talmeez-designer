import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CtaBannerProps {
  onOpenContact: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenContact }) => {
  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="bg-[#ff5520] rounded-[32px] sm:rounded-[36px] p-8 sm:p-12 text-white shadow-xl shadow-orange-500/20 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          
          {/* Subtle background circle decoration */}
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white/10 blur-xl pointer-events-none" />

          {/* Left Text Content */}
          <div className="max-w-xl z-10">
            <span className="text-orange-100/90 font-bold text-xs uppercase tracking-wider block mb-2">
              LET'S WORK TOGETHER
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Have a project in mind?
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white/95 tracking-tight mt-1">
              Let's create something <span className="text-white font-black underline decoration-white/40">bold</span>.
            </p>
          </div>

          {/* Right Action Button & Reply Status */}
          <div className="flex flex-col items-start md:items-end z-10">
            <button
              onClick={onOpenContact}
              className="group bg-[#121316] hover:bg-black text-white text-sm sm:text-base font-semibold pl-6 pr-2.5 py-3.5 rounded-full inline-flex items-center gap-3 transition-all duration-200 shadow-xl active:scale-95"
            >
              <span>Let's Discuss Your Project</span>
              <span className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>

            {/* Response time micro-copy with pulsating green dot */}
            <div className="flex items-center gap-2 mt-3 text-xs font-semibold text-orange-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>Usually replies within 24 hours</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
