import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useLanguage, type Language } from '../context/LanguageContext';

interface FooterProps {
  onOpenContact: () => void;
}

const FOOTER_LABELS: Record<
  Language,
  {
    tagline: string;
    quickLinks: string;
    about: string;
    services: string;
    work: string;
    contact: string;
    sendEmail: string;
    location: string;
    call: string;
    copyright: string;
    privacy: string;
    terms: string;
    refund: string;
  }
> = {
  en: {
    tagline: 'Designing bold brands that make impact.',
    quickLinks: 'Quick Links',
    about: 'About',
    services: 'Services',
    work: 'Work',
    contact: 'Contact',
    sendEmail: 'Send Email',
    location: 'Location',
    call: 'Call',
    copyright: '© 2026 alifbima. All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    refund: 'Refund Policy',
  },
  id: {
    tagline: 'Merancang brand berani yang memberi dampak.',
    quickLinks: 'Tautan Cepat',
    about: 'Tentang',
    services: 'Layanan',
    work: 'Karya',
    contact: 'Kontak',
    sendEmail: 'Kirim Email',
    location: 'Lokasi',
    call: 'Telepon',
    copyright: '© 2026 alifbima. Hak cipta dilindungi.',
    privacy: 'Kebijakan Privasi',
    terms: 'Syarat & Ketentuan',
    refund: 'Kebijakan Pengembalian',
  },
};

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const { language } = useLanguage();
  const text = FOOTER_LABELS[language];

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
              {text.tagline}
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
            <h4 className="text-white font-bold text-sm tracking-tight mb-4">{text.quickLinks}</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">{text.about}</Link>
              </li>
              <li>
                <a href="/#services" className="hover:text-white transition-colors">{text.services}</a>
              </li>
              <li>
                <a href="/#work" className="hover:text-white transition-colors">{text.work}</a>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-white transition-colors text-left"
                >
                  {text.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Services (Col 8-10) */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold text-sm tracking-tight mb-4">{text.services}</h4>
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
            <h4 className="text-white font-bold text-sm tracking-tight mb-4">{text.contact}</h4>
            <div className="flex items-center gap-3 text-gray-300">
              <button
                onClick={onOpenContact}
                aria-label={text.sendEmail}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#ff5520] hover:text-white flex items-center justify-center transition-colors"
              >
                <Mail className="w-4 h-4" />
              </button>
              <span
                aria-label={text.location}
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400"
              >
                <MapPin className="w-4 h-4" />
              </span>
              <a
                href="tel:+15550192834"
                aria-label={text.call}
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
          <p>{text.copyright}</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-gray-300 transition-colors">{text.privacy}</a>
            <a href="#terms" className="hover:text-gray-300 transition-colors">{text.terms}</a>
            <a href="#refund" className="hover:text-gray-300 transition-colors">{text.refund}</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
