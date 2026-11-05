import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage, type Language } from '../context/LanguageContext';

interface NavbarProps {
  onOpenContact?: () => void;
}

const NAV_LABELS: Record<Language, Record<'home' | 'about' | 'services' | 'work' | 'contact', string>> = {
  en: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    work: 'Work',
    contact: 'Contact',
  },
  id: {
    home: 'Beranda',
    about: 'Tentang',
    services: 'Layanan',
    work: 'Karya',
    contact: 'Kontak',
  },
};

const LANGUAGE_OPTIONS: Array<{ code: Language; label: string; flag: string }> = [
  {
    code: 'id',
    label: 'Bahasa Indonesia',
    flag: 'https://flagcdn.com/w40/id.png',
  },
  {
    code: 'en',
    label: 'English',
    flag: 'https://flagcdn.com/w40/gb.png',
  },
];

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isAbout = location.pathname === '/about';
  const labels = NAV_LABELS[language];

  const navItems = [
    { key: 'home', label: labels.home, href: isHome ? '#home' : '/' },
    { key: 'about', label: labels.about, href: '/about' },
    { key: 'services', label: labels.services, href: isHome ? '#services' : '/#services' },
    { key: 'work', label: labels.work, href: isHome ? '#work' : '/#work' },
    { key: 'contact', label: labels.contact, href: isHome ? '#contact' : '/#contact' },
  ] as const;

  const isNavItemActive = (key: string) =>
    (key === 'home' && isHome) || (key === 'about' && isAbout);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 pt-4 pb-2 px-4 sm:px-6 md:px-8 bg-[#faf8f5]/90 backdrop-blur-md transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Brand Logo Pill */}
        <Link
          to="/"
          className="bg-[#121316] text-white px-5 py-2 rounded-full font-bold text-xl tracking-tight flex items-center hover:bg-black transition-colors shadow-sm"
          aria-label="alifbima Home"
        >
          alifbima<span className="text-[#ff5520] ml-0.5">.</span>
        </Link>

        {/* Center Navigation Pill (Desktop) */}
        <nav
          aria-label={language === 'id' ? 'Navigasi Utama' : 'Main Navigation'}
          className="hidden md:flex items-center bg-[#121316] rounded-full p-1.5 shadow-sm space-x-1"
        >
          {navItems.map((item) => {
            const isActive = isNavItemActive(item.key);
            return (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith('#')) {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }
                }}
                className={`text-sm px-4 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-[#ff5520] text-white font-semibold shadow-xs'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Language Flags Switcher & Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <div
            role="group"
            aria-label={language === 'id' ? 'Pilih bahasa' : 'Select language'}
            className="bg-[#121316] px-2 py-1.5 rounded-full flex items-center gap-1 shadow-sm border border-white/10"
          >
            {LANGUAGE_OPTIONS.map((option) => {
              const isActive = language === option.code;

              return (
                <button
                  key={option.code}
                  type="button"
                  onClick={() => setLanguage(option.code)}
                  title={option.label}
                  aria-label={option.label}
                  aria-pressed={isActive}
                  className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${
                    isActive
                      ? 'bg-[#ff5520]/25 ring-2 ring-[#ff5520] opacity-100'
                      : 'opacity-60 hover:opacity-100 hover:bg-white/10'
                  }`}
                >
                  <img
                    src={option.flag}
                    alt=""
                    width={22}
                    height={22}
                    className="w-[22px] h-[22px] rounded-full object-cover"
                  />
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-[#121316] text-white hover:bg-black transition-colors"
            aria-label={
              mobileMenuOpen
                ? language === 'id'
                  ? 'Tutup menu'
                  : 'Close menu'
                : language === 'id'
                  ? 'Buka menu'
                  : 'Open menu'
            }
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 max-w-6xl mx-auto bg-[#121316] text-white rounded-2xl p-4 shadow-xl border border-white/10 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith('#')) {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }
                }}
                className="px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-white/10 transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                {isNavItemActive(item.key) && (
                  <span className="w-2 h-2 rounded-full bg-[#ff5520]" />
                )}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
