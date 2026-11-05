import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ContactModal } from '../components/ContactModal';
import { ABOUT_DATA } from '../data/aboutData';

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleViewWork = () => {
    navigate('/');
    window.setTimeout(() => {
      const el = document.getElementById('work');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-[#faf8f5] text-gray-900 flex flex-col justify-between"
    >
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      <main className="flex-grow flex items-center py-10 sm:py-16 md:py-20">
        {/* Single Simplified About Section */}
        <section className="w-full">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="bg-white border border-gray-200/80 rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 md:p-14 shadow-sm relative overflow-hidden">
              
              {/* Subtle ambient background glow */}
              <div
                className="absolute top-0 right-0 w-80 h-80 bg-[#ff5520]/10 rounded-full blur-3xl pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                
                {/* Left Column: Portrait & Quick Profile Card */}
                <div className="lg:col-span-5 flex flex-col items-center">
                  <div className="relative w-full max-w-[340px] sm:max-w-[360px]">
                    
                    {/* Portrait Frame */}
                    <div className="bg-[#edeae4] border border-gray-200 rounded-[28px] overflow-hidden aspect-[4/4] relative flex items-end justify-center shadow-inner">
                      <img
                        src={ABOUT_DATA.avatar}
                        alt={`${ABOUT_DATA.name} - ${ABOUT_DATA.role}`}
                        className="w-full h-full object-contain object-bottom filter drop-shadow-md"
                        loading="eager"
                      />
                    </div>

                    {/* Profile Footnote Card */}
                    <div className="mt-4 bg-[#121316] text-white rounded-2xl p-4 flex items-center justify-between shadow-md">
                      <div>
                        <h3 className="font-extrabold text-base tracking-tight text-white">
                          {ABOUT_DATA.name}
                        </h3>
                        <p className="text-xs text-gray-400 mt-0.5">
                          {ABOUT_DATA.role}
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-300 font-medium pl-3 border-l border-white/10">
                        <MapPin className="w-3.5 h-3.5 text-[#ff5520]" />
                        <span>{ABOUT_DATA.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Bio & Description */}
                <div className="lg:col-span-7 flex flex-col">

                  {/* Headline */}
                  <h1 className="text-xl sm:text-4xl md:text-[42px] font-extrabold text-gray-950 tracking-tight leading-[1.18] mb-6">
                    {ABOUT_DATA.title}{' '}
                    <span className="text-[#ff5520]">{ABOUT_DATA.highlight}</span>
                  </h1>

                  {/* Description Paragraphs */}
                  <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                    {ABOUT_DATA.description.map((para, index) => (
                      <p key={index}>{para}</p>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer onOpenContact={() => setIsContactOpen(true)} />

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </motion.div>
  );
};
