import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { ServicesSection } from '../components/ServicesSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { CtaBanner } from '../components/CtaBanner';
import { Footer } from '../components/Footer';
import { ContactModal } from '../components/ContactModal';

export const HomePage: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenContact = (service?: string) => {
    setSelectedService(service || 'Brand Identity');
    setIsContactOpen(true);
  };

  const handleScrollToWork = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-[#faf8f5] text-gray-900 flex flex-col justify-between"
    >
      {/* Top Fixed/Sticky Navigation */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      {/* Main Content Sections strictly matching the reference */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <HeroSection
          onOpenContact={() => handleOpenContact()}
          onScrollToWork={handleScrollToWork}
        />

        {/* 2. Services Section: What I Do. */}
        <ServicesSection
          onSelectService={(service) => handleOpenContact(service)}
        />

        {/* 3. Featured Work: Selected Projects. */}
        <ProjectsSection
          onViewAllClick={handleScrollToWork}
        />

        {/* 6. Call To Action Banner */}
        <CtaBanner
          onOpenContact={() => handleOpenContact()}
        />
      </main>

      {/* 7. Dark Minimalist Footer */}
      <Footer onOpenContact={() => handleOpenContact()} />

      {/* Interactive Contact & Inquiry Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        defaultService={selectedService}
      />
    </motion.div>
  );
};
