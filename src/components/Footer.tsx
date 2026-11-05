import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <footer id="contact" className="bg-[#121316] text-gray-400 pt-16 pb-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">

          {/* Brand Info (Col 1-5) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link
              to="/"
              className="text-white font-extrabold text-2xl tracking-tight flex items-center mb-4"
            >
              alifbima<span className="text-[#ff5520]">.</span>
            </Link>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed mb-6">
              Designing bold brands that make impact.
            </p>

            {/* Social Icons Row */}
            <div className="flex items-center gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#ff5520] hover:text-white flex items-center justify-center transition-colors text-xs font-bold"
              >
                𝕏
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#ff5520] hover:text-white flex items-center justify-center transition-colors text-xs font-semibold"
              >
                ig
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#ff5520] hover:text-white flex items-center justify-center transition-colors text-xs font-semibold"
              >
                in
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#ff5520] hover:text-white flex items-center justify-center transition-colors text-xs font-semibold"
              >
                fb
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#ff5520] hover:text-white flex items-center justify-center transition-colors text-xs font-semibold"
              >
                gh
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Dribbble"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#ff5520] hover:text-white flex items-center justify-center transition-colors text-xs font-semibold"
              >
                P
              </a>
            </div>
          </div>

          {/* Quick Links (Col 6-7) */}
          <div className="md:col-span-2">
            <h4 className="text-white font-bold text-sm tracking-tight mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">Work</a>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services (Col 8-10) */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold text-sm tracking-tight mb-4">Services</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {PORTFOLIO_DATA.services.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Icons (Col 11-12) */}
          <div className="md:col-span-2">
            <h4 className="text-white font-bold text-sm tracking-tight mb-4">Contact</h4>
            <div className="flex items-center gap-3 text-gray-300">
              <button
                onClick={onOpenContact}
                aria-label="Send Email"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#ff5520] hover:text-white flex items-center justify-center transition-colors"
              >
                <Mail className="w-4 h-4" />
              </button>
              <span
                aria-label="Location"
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400"
              >
                <MapPin className="w-4 h-4" />
              </span>
              <a
                href="tel:+15550192834"
                aria-label="Call"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#ff5520] hover:text-white flex items-center justify-center transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-gray-500 mt-3">hello@alifbima.design</p>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 alifbima. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-gray-300 transition-colors">Terms & Conditions</a>
            <a href="#refund" className="hover:text-gray-300 transition-colors">Refund Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
