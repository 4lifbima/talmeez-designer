/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ContactModal } from './components/ContactModal';
import { LanguageProvider } from './context/LanguageContext';

function AnimatedRoutes() {
  const location = useLocation();
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/project/:slug"
            element={<ProjectDetailPage onOpenContact={() => setIsContactOpen(true)} />}
          />
          {/* Catch-all redirect to Home */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </AnimatePresence>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </LanguageProvider>
  );
}
