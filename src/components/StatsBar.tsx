import React from 'react';
import { Globe, Smile, Star, ThumbsUp } from 'lucide-react';
import { PORTFOLIO_DATA, StatItem } from '../data/portfolioData';

export const StatsBar: React.FC = () => {
  const getIcon = (type: StatItem['icon']) => {
    switch (type) {
      case 'smile':
        return <Smile className="w-8 h-8 text-[#ff5520]" strokeWidth={1.75} />;
      case 'thumbs-up':
        return <ThumbsUp className="w-8 h-8 text-[#ff5520]" strokeWidth={1.75} />;
      case 'star':
        return <Star className="w-8 h-8 text-[#ff5520]" strokeWidth={1.75} />;
      case 'globe':
        return <Globe className="w-8 h-8 text-[#ff5520]" strokeWidth={1.75} />;
      default:
        return <Smile className="w-8 h-8 text-[#ff5520]" strokeWidth={1.75} />;
    }
  };

  return (
    <section className="py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="bg-[#fef4ed] border border-orange-200/60 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xs">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-orange-200/50">
            {PORTFOLIO_DATA.stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center text-center ${
                  idx > 0 && idx % 2 === 0 ? 'pt-6 md:pt-0' : idx % 2 === 1 ? 'pt-0' : ''
                } md:pt-0 px-2`}
              >
                {/* Icon */}
                <div className="mb-3 text-[#ff5520]">{getIcon(stat.icon)}</div>

                {/* Big Number */}
                <span className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight">
                  {stat.value}
                </span>

                {/* Label */}
                <span className="text-xs sm:text-sm font-semibold text-gray-700 mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
