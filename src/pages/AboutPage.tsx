import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ContactModal } from '../components/ContactModal';
import { ABOUT_CONTENT } from '../data/aboutData';
import { useLanguage } from '../context/LanguageContext';

export const AboutPage: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const { language } = useLanguage();
  const about = ABOUT_CONTENT[language];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <section className="w-full" aria-live="polite">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="bg-white border border-gray-200/80 rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 md:p-14 shadow-sm relative overflow-hidden">
              {/* Subtle ambient background glow */}
              <div
                className="absolute top-0 right-0 w-80 h-80 bg-[#ff5520]/10 rounded-full blur-3xl pointer-events-none"
                aria-hidden="true"
              />

              <motion.div
                key={language}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
              >
                {/* Left Column: Portrait & Quick Profile Card */}
                <div className="lg:col-span-5 flex flex-col items-center">
                  <div className="relative w-full max-w-[340px] sm:max-w-[360px]">
                    {/* Portrait Frame */}
                    <div className="bg-[#edeae4] border border-gray-200 rounded-[28px] overflow-hidden aspect-[4/4] relative flex items-end justify-center shadow-inner">
                      <img
                        src={about.avatar}
                        alt={`${about.name} - ${about.role}`}
                        className="w-full h-full object-contain object-bottom filter drop-shadow-md"
                        loading="eager"
                      />
                    </div>

                    {/* Profile Footnote Card */}
                    <div className="mt-4 bg-[#121316] text-white rounded-2xl p-4 flex items-center justify-between shadow-md">
                      <div>
                        <h3 className="font-extrabold text-base tracking-tight text-white">
                          {about.name}
                        </h3>
                        <p className="text-xs text-gray-400 mt-0.5">
                          {about.role}
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-300 font-medium pl-3 border-l border-white/10">
                        <MapPin className="w-3.5 h-3.5 text-[#ff5520] shrink-0" />
                        <span>{about.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Bio & Description */}
                <div className="lg:col-span-7 flex flex-col">
                  {/* Availability Badge */}
                  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50 px-3 py-1.5 mb-5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
                      {about.badge}
                    </span>
                  </div>

                  {/* Eyebrow */}
                  <span className="text-[#ff5520] font-bold text-xs uppercase tracking-widest mb-2">
                    {about.eyebrow}
                  </span>

                  {/* Headline */}
                  <h1 className="text-xl sm:text-4xl md:text-[42px] font-extrabold text-gray-950 tracking-tight leading-[1.18] mb-6">
                    {about.title}{' '}
                    <span className="text-[#ff5520]">{about.highlight}</span>
                  </h1>

                  {/* Description Paragraphs */}
                  <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                    {about.description.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer onOpenContact={() => setIsContactOpen(true)} />

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </motion.div>
  );
};
