import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ProjectsSectionProps {
  onViewAllClick?: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onViewAllClick }) => {
  return (
    <section id="work" className="py-14 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <span className="text-[#ff5520] font-bold text-xs uppercase tracking-widest block mb-2">
            FEATURED WORK
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-950">
            Selected Projects<span className="text-[#ff5520]">.</span>
          </h2>
        </div>

        {/* 3 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {PORTFOLIO_DATA.projects.map((project) => (
            <Link
              key={project.slug}
              to={`/project/${project.slug}`}
              className="group bg-white border border-gray-200/80 rounded-[28px] p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-gray-300 hover:-translate-y-1.5 focus:outline-hidden focus:ring-2 focus:ring-[#ff5520]"
              aria-label={`View details for ${project.fullTitle}`}
            >
              {/* Project Mockup Image Frame */}
              <div className="bg-[#edeae4] rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center relative mb-4 shadow-inner">
                <img
                  src={project.image}
                  alt={project.fullTitle}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Subtle hover overlay */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Card Footer matching reference mockup */}
              <div className="flex items-center justify-between pt-1">
                <div>
                  {/* Category Tag */}
                  <span className="text-[#ff5520] font-bold text-[11px] sm:text-xs uppercase tracking-wider block mb-1">
                    {project.category}
                  </span>

                  {/* Project Title: Demo Project */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-gray-950 tracking-tight leading-tight">
                    Demo<br />Project
                  </h3>
                </div>

                {/* Orange Circle Arrow Button */}
                <div className="w-10 h-10 rounded-full bg-[#ff5520] text-white flex items-center justify-center shadow-md shadow-orange-500/30 group-hover:scale-105 group-hover:translate-x-0.5 transition-all shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 sm:mt-14 flex justify-center">
          <button
            onClick={onViewAllClick}
            className="group bg-[#ff5520] hover:bg-[#e04414] text-white text-sm font-semibold pl-8 pr-3 py-3 rounded-full inline-flex items-center gap-3 transition-all duration-200 shadow-lg shadow-orange-500/25 active:scale-95 cursor-pointer"
          >
            <span>View All</span>
            <span className="w-7 h-7 rounded-full bg-white/20 text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};
